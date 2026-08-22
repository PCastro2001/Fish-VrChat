import type {
  BuildSelection,
  BuildStats,
  EquipmentStats,
} from "./equipment.js";

const MAX_EXPERTISE = 100;
const MAX_INDEX_LOCATIONS = 7;
const LUCK_PER_INDEX_LOCATION = 15;

const ZERO_STATS: EquipmentStats = {
  luck: 0,
  strength: 0,
  expertise: 0,
  attractionRate: 0,
  bigCatch: 0,
  maxWeightBonusKg: null,
};

export function calculateBuildStats(selection: BuildSelection): BuildStats {
  const enchantmentStats = selection.enchantment?.stats ?? ZERO_STATS;
  const sources = [
    selection.rod.stats,
    selection.line.stats,
    selection.bobber.stats,
    enchantmentStats,
  ];

  const completedLocations = Math.min(
    MAX_INDEX_LOCATIONS,
    Math.max(0, Math.trunc(selection.completedIndexLocations)),
  );

  const sum = (field: keyof EquipmentStats): number =>
    sources.reduce((total, stats) => total + (stats[field] ?? 0), 0);

  const attractionRate = sum("attractionRate");
  const rodLimitKg = selection.rod.stats.maxWeightBonusKg ?? 0;
  const enchantmentWeightBonusKg =
    selection.enchantment?.stats.maxWeightBonusKg ?? 0;

  return {
    luck: sum("luck") + completedLocations * LUCK_PER_INDEX_LOCATION,
    strength: sum("strength"),
    expertise: Math.min(MAX_EXPERTISE, sum("expertise")),
    attractionRate,
    bigCatch: sum("bigCatch"),
    maxWeightKg: rodLimitKg + enchantmentWeightBonusKg,
    instantBite: attractionRate >= 1,
  };
}
