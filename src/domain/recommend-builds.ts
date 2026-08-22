import {
  ACQUISITION_BY_EQUIPMENT_ID,
} from "../data/equipment-acquisition.js";
import {
  BOBBERS,
  ENCHANTMENTS,
  LINES,
  RODS,
} from "../data/equipment-catalog.js";
import { calculateBuildStats } from "./calculate-build-stats.js";
import { evaluateAcquisition } from "./evaluate-acquisition.js";
import type {
  BuildSelection,
  BuildStats,
  Enchantment,
  Equipment,
} from "./equipment.js";
import type { PlayerProgress } from "./player-progress.js";

export type RecommendationGoal =
  | "BALANCED"
  | "RARE_FISH"
  | "LARGE_FISH"
  | "FAST_CATCHES"
  | "EASY_REEL";

export interface FishingContext {
  timeOfDay?: "DAY" | "NIGHT";
  weather?: "CLEAR" | "FOG" | "RAIN" | "STORM";
}

export interface BuildRecommendation {
  selection: BuildSelection;
  stats: BuildStats;
  purchaseCost: number;
  score: number;
  reasons: readonly string[];
}

interface ScoringWeights {
  luck: number;
  strength: number;
  expertise: number;
  attractionRate: number;
  bigCatch: number;
  maxWeightKg: number;
}

const WEIGHTS: Record<RecommendationGoal, ScoringWeights> = {
  BALANCED: {
    luck: 0.25,
    strength: 0.1,
    expertise: 0.1,
    attractionRate: 0.25,
    bigCatch: 0.2,
    maxWeightKg: 0.1,
  },
  RARE_FISH: {
    luck: 0.75,
    strength: 0,
    expertise: 0,
    attractionRate: 0.15,
    bigCatch: 0.1,
    maxWeightKg: 0,
  },
  LARGE_FISH: {
    luck: 0,
    strength: 0.1,
    expertise: 0,
    attractionRate: 0.1,
    bigCatch: 0.55,
    maxWeightKg: 0.25,
  },
  FAST_CATCHES: {
    luck: 0,
    strength: 0.1,
    expertise: 0.1,
    attractionRate: 0.8,
    bigCatch: 0,
    maxWeightKg: 0,
  },
  EASY_REEL: {
    luck: 0,
    strength: 0.35,
    expertise: 0.45,
    attractionRate: 0.2,
    bigCatch: 0,
    maxWeightKg: 0,
  },
};

const DAY_ONLY = new Set(["day-walker", "son-of-kriptan"]);
const NIGHT_ONLY = new Set(["night-stalker", "the-night-watcher"]);
const FOG_ONLY = new Set(["fog-dweller"]);
const RAIN_ONLY = new Set(["rain-lover"]);

function clamp01(value: number): number {
  return Math.min(1, Math.max(0, value));
}

function normalize(value: number, minimum: number, maximum: number): number {
  return clamp01((value - minimum) / (maximum - minimum));
}

function normalizedStats(stats: BuildStats): ScoringWeights {
  return {
    luck: normalize(stats.luck, -150, 700),
    strength: normalize(stats.strength, -20, 120),
    expertise: normalize(stats.expertise, -30, 100),
    attractionRate: normalize(stats.attractionRate, -1, 1),
    bigCatch: normalize(stats.bigCatch, -100, 120),
    maxWeightKg: clamp01(
      Math.log10(Math.max(1, stats.maxWeightKg)) / Math.log10(1_000_000),
    ),
  };
}

function scoreBuild(stats: BuildStats, goal: RecommendationGoal): number {
  const values = normalizedStats(stats);
  const weights = WEIGHTS[goal];

  return (
    values.luck * weights.luck +
    values.strength * weights.strength +
    values.expertise * weights.expertise +
    values.attractionRate * weights.attractionRate +
    values.bigCatch * weights.bigCatch +
    values.maxWeightKg * weights.maxWeightKg
  );
}

function acquisitionCost(
  equipment: Equipment,
  progress: PlayerProgress,
): number | null {
  const rule = ACQUISITION_BY_EQUIPMENT_ID.get(equipment.id);
  if (!rule) {
    return null;
  }

  const evaluation = evaluateAcquisition(rule, progress);
  if (
    evaluation.availability !== "OWNED" &&
    evaluation.availability !== "AVAILABLE"
  ) {
    return null;
  }

  return evaluation.purchaseCost;
}

function availableEquipment(
  equipment: readonly Equipment[],
  progress: PlayerProgress,
): readonly { item: Equipment; cost: number }[] {
  return equipment.flatMap((item) => {
    const cost = acquisitionCost(item, progress);
    return cost === null ? [] : [{ item, cost }];
  });
}

function enchantmentApplies(
  enchantment: Enchantment,
  context: FishingContext,
): boolean {
  if (DAY_ONLY.has(enchantment.id)) {
    return context.timeOfDay === "DAY";
  }
  if (NIGHT_ONLY.has(enchantment.id)) {
    return context.timeOfDay === "NIGHT";
  }
  if (FOG_ONLY.has(enchantment.id)) {
    return context.weather === "FOG";
  }
  if (RAIN_ONLY.has(enchantment.id)) {
    return context.weather === "RAIN" || context.weather === "STORM";
  }
  return true;
}

function availableEnchantments(
  progress: PlayerProgress,
  context: FishingContext,
): readonly (Enchantment | undefined)[] {
  return [
    undefined,
    ...ENCHANTMENTS.filter(
      (enchantment) =>
        progress.ownedEnchantmentIds.has(enchantment.id) &&
        enchantmentApplies(enchantment, context),
    ),
  ];
}

function explain(
  goal: RecommendationGoal,
  stats: BuildStats,
  enchantment?: Enchantment,
): readonly string[] {
  const explanations: Record<RecommendationGoal, readonly string[]> = {
    BALANCED: [
      `Equilibra ${stats.luck} Luck, ${stats.bigCatch} Big Catch y ${Math.round(stats.attractionRate * 100)}% de Attraction.`,
      `Soporta peces de hasta ${stats.maxWeightKg.toLocaleString("es-CL")} kg.`,
    ],
    RARE_FISH: [
      `Prioriza rarezas con ${stats.luck} puntos de Luck.`,
      `Mantiene ${Math.round(stats.attractionRate * 100)}% de Attraction para reducir la espera.`,
    ],
    LARGE_FISH: [
      `Prioriza peces grandes con ${stats.bigCatch} puntos de Big Catch.`,
      `La caña soporta hasta ${stats.maxWeightKg.toLocaleString("es-CL")} kg.`,
    ],
    FAST_CATCHES: [
      `Prioriza velocidad con ${Math.round(stats.attractionRate * 100)}% de Attraction.`,
      stats.instantBite
        ? "Alcanza mordida instantánea."
        : "Reduce el tiempo promedio de espera.",
    ],
    EASY_REEL: [
      `Combina ${stats.strength} Strength y ${stats.expertise} Expertise.`,
      "Prioriza una recogida más controlable.",
    ],
  };

  return enchantment
    ? [...explanations[goal], `Usa el encantamiento ${enchantment.name} que ya posees.`]
    : explanations[goal];
}

export function recommendBuilds(
  progress: PlayerProgress,
  goal: RecommendationGoal,
  maxResults = 3,
  context: FishingContext = {},
): readonly BuildRecommendation[] {
  const rods = availableEquipment(RODS, progress);
  const lines = availableEquipment(LINES, progress);
  const bobbers = availableEquipment(BOBBERS, progress);
  const enchantments = availableEnchantments(progress, context);
  const candidates: BuildRecommendation[] = [];

  for (const rod of rods) {
    for (const line of lines) {
      for (const bobber of bobbers) {
        const purchaseCost = rod.cost + line.cost + bobber.cost;
        if (purchaseCost > progress.money) {
          continue;
        }

        for (const enchantment of enchantments) {
          const baseSelection = {
            rod: rod.item,
            line: line.item,
            bobber: bobber.item,
            completedIndexLocations: progress.completedIndexLocations,
          };
          const selection: BuildSelection = enchantment
            ? { ...baseSelection, enchantment }
            : baseSelection;
          const stats = calculateBuildStats(selection);

          candidates.push({
            selection,
            stats,
            purchaseCost,
            score: scoreBuild(stats, goal),
            reasons: explain(goal, stats, enchantment),
          });
        }
      }
    }
  }

  return candidates
    .sort(
      (a, b) =>
        b.score - a.score ||
        a.purchaseCost - b.purchaseCost ||
        a.selection.rod.name.localeCompare(b.selection.rod.name) ||
        a.selection.line.name.localeCompare(b.selection.line.name) ||
        a.selection.bobber.name.localeCompare(b.selection.bobber.name) ||
        (a.selection.enchantment?.name ?? "").localeCompare(
          b.selection.enchantment?.name ?? "",
        ),
    )
    .slice(0, Math.max(0, Math.trunc(maxResults)));
}
