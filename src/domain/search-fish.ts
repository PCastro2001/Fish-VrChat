import type { FishRecord } from "../data/fish-catalog.js";

export interface FishSearchFilters {
  query?: string;
  habitat?: string;
  waterType?: string;
  weather?: string;
  timeOfDay?: string;
}

const normalize = (value: string): string =>
  value.trim().toLocaleLowerCase("en-US");

const matchesCondition = (fishValue: string, selected?: string): boolean =>
  !selected ||
  selected === "Any" ||
  fishValue === "Any" ||
  normalize(fishValue) === normalize(selected);

export function searchFish(
  catalog: readonly FishRecord[],
  filters: FishSearchFilters,
): readonly FishRecord[] {
  const query = normalize(filters.query ?? "");

  return catalog
    .filter((fish) => !query || normalize(fish.name).includes(query))
    .filter((fish) => matchesCondition(fish.habitat, filters.habitat))
    .filter((fish) => matchesCondition(fish.waterType, filters.waterType))
    .filter((fish) => matchesCondition(fish.weather, filters.weather))
    .filter((fish) => matchesCondition(fish.timeOfDay, filters.timeOfDay))
    .sort((a, b) =>
      a.habitat.localeCompare(b.habitat) || a.name.localeCompare(b.name),
    );
}
