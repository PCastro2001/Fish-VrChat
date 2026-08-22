import {
  ACQUISITION_BY_EQUIPMENT_ID,
} from "../data/equipment-acquisition.js";
import {
  BOBBERS,
  LINES,
  RODS,
} from "../data/equipment-catalog.js";
import { calculateBuildStats } from "./calculate-build-stats.js";
import {
  evaluateAcquisition,
  type UnmetRequirement,
} from "./evaluate-acquisition.js";
import type {
  BuildSelection,
  BuildStats,
  Equipment,
  EquipmentType,
} from "./equipment.js";
import type { PlayerProgress } from "./player-progress.js";
import {
  recommendBuilds,
  scoreBuild,
  type BuildRecommendation,
  type FishingContext,
  type RecommendationGoal,
} from "./recommend-builds.js";

export interface FutureBuildRecommendation {
  selection: BuildSelection;
  stats: BuildStats;
  score: number;
  scoreGain: number;
  upgradeCost: number;
  blockers: readonly string[];
}

export interface RecommendationPlan {
  bestAvailable: BuildRecommendation;
  economicAlternative?: BuildRecommendation;
  futureUpgrade?: FutureBuildRecommendation;
}

function readableId(id: string): string {
  return id
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function describeBlocker(blocker: UnmetRequirement): string {
  const { requirement } = blocker;

  switch (requirement.type) {
    case "LEVEL":
      return `Te faltan ${blocker.missing ?? 0} niveles para alcanzar el nivel ${requirement.minimum}.`;
    case "MONEY":
      return `Te faltan $${(blocker.missing ?? 0).toLocaleString("es-CL")}.`;
    case "QUEST":
      return `Debes completar la misión ${readableId(requirement.questId)}.`;
    case "LOCATION":
      return `Debes desbloquear ${readableId(requirement.locationId)}.`;
    case "VENDOR":
      return `${readableId(requirement.vendorId)} debe estar disponible.`;
    case "FISH_SOLD":
      return `Te faltan vender ${blocker.missing ?? 0} peces.`;
    case "MATERIAL":
      return `Te faltan ${blocker.missing ?? 0}x ${readableId(requirement.materialId)}.`;
    case "EQUIPMENT":
      return `Debes obtener ${readableId(requirement.equipmentId)}.`;
  }
}

function sameGear(
  first: BuildRecommendation,
  second: BuildRecommendation,
): boolean {
  return (
    first.selection.rod.id === second.selection.rod.id &&
    first.selection.line.id === second.selection.line.id &&
    first.selection.bobber.id === second.selection.bobber.id
  );
}

function economicAlternative(
  candidates: readonly BuildRecommendation[],
  best: BuildRecommendation,
): BuildRecommendation | undefined {
  const cheaper = candidates.filter(
    (candidate) =>
      candidate.purchaseCost < best.purchaseCost &&
      !sameGear(candidate, best),
  );

  const strongValue = cheaper
    .filter((candidate) => candidate.score >= best.score * 0.8)
    .sort(
      (a, b) =>
        a.purchaseCost - b.purchaseCost ||
        b.score - a.score,
    )[0];

  return (
    strongValue ??
    cheaper.sort(
      (a, b) =>
        b.score - a.score ||
        a.purchaseCost - b.purchaseCost,
    )[0]
  );
}

function replaceEquipment(
  selection: BuildSelection,
  equipment: Equipment,
): BuildSelection {
  const replacement: Record<EquipmentType, Partial<BuildSelection>> = {
    ROD: { rod: equipment },
    LINE: { line: equipment },
    BOBBER: { bobber: equipment },
  };

  return {
    ...selection,
    ...replacement[equipment.type],
  };
}

function futureUpgrade(
  progress: PlayerProgress,
  goal: RecommendationGoal,
  best: BuildRecommendation,
): FutureBuildRecommendation | undefined {
  const equipment = [...RODS, ...LINES, ...BOBBERS];

  return equipment
    .flatMap((item): FutureBuildRecommendation[] => {
      const rule = ACQUISITION_BY_EQUIPMENT_ID.get(item.id);
      if (!rule) {
        return [];
      }

      const evaluation = evaluateAcquisition(rule, progress);
      if (
        evaluation.availability === "OWNED" ||
        evaluation.availability === "AVAILABLE"
      ) {
        return [];
      }

      const selection = replaceEquipment(best.selection, item);
      const stats = calculateBuildStats(selection);
      const score = scoreBuild(stats, goal);
      const scoreGain = score - best.score;
      if (scoreGain <= 0) {
        return [];
      }

      return [{
        selection,
        stats,
        score,
        scoreGain,
        upgradeCost: rule.price,
        blockers: evaluation.unmetRequirements.map(describeBlocker),
      }];
    })
    .sort(
      (a, b) =>
        b.scoreGain - a.scoreGain ||
        a.upgradeCost - b.upgradeCost,
    )[0];
}

export function createRecommendationPlan(
  progress: PlayerProgress,
  goal: RecommendationGoal,
  context: FishingContext = {},
): RecommendationPlan {
  const candidates = recommendBuilds(
    progress,
    goal,
    100_000,
    context,
  );
  const bestAvailable = candidates[0];

  if (!bestAvailable) {
    throw new Error("No valid build is available for this player.");
  }

  const economic = economicAlternative(candidates, bestAvailable);
  const future = futureUpgrade(progress, goal, bestAvailable);

  return {
    bestAvailable,
    ...(economic ? { economicAlternative: economic } : {}),
    ...(future ? { futureUpgrade: future } : {}),
  };
}
