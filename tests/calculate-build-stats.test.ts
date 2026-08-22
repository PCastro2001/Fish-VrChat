import { describe, expect, it } from "vitest";
import type { BuildSelection, Equipment } from "../src/domain/equipment.js";
import { calculateBuildStats } from "../src/domain/calculate-build-stats.js";

const equipment = (
  id: string,
  type: Equipment["type"],
  overrides: Partial<Equipment["stats"]> = {},
): Equipment => ({
  id,
  name: id,
  type,
  price: null,
  stats: {
    luck: 0,
    strength: 0,
    expertise: 0,
    attractionRate: 0,
    bigCatch: 0,
    maxWeightBonusKg: null,
    ...overrides,
  },
  source: [],
});

const baseSelection = (): BuildSelection => ({
  rod: equipment("rod", "ROD", { maxWeightBonusKg: 100 }),
  line: equipment("line", "LINE"),
  bobber: equipment("bobber", "BOBBER"),
  completedIndexLocations: 0,
});

describe("calculateBuildStats", () => {
  it("adds 15 luck per completed index location with a maximum of eight", () => {
    const selection = baseSelection();
    selection.completedIndexLocations = 20;
    expect(calculateBuildStats(selection).luck).toBe(120);
  });

  it("caps expertise at 100", () => {
    const selection = baseSelection();
    selection.rod.stats.expertise = 80;
    selection.line.stats.expertise = 30;
    expect(calculateBuildStats(selection).expertise).toBe(100);
  });

  it("marks attraction at 100% as an instant bite", () => {
    const selection = baseSelection();
    selection.rod.stats.attractionRate = 0.6;
    selection.line.stats.attractionRate = 0.4;
    expect(calculateBuildStats(selection).instantBite).toBe(true);
  });

  it("adds an enchantment weight bonus to the rod limit", () => {
    const selection = baseSelection();
    selection.enchantment = {
      id: "reinforced",
      name: "Reinforced",
      rarity: "COMMON",
      stats: {
        luck: 0,
        strength: 0,
        expertise: 0,
        attractionRate: 0,
        bigCatch: 0,
        maxWeightBonusKg: 400,
      },
      effectDescription: null,
      source: [],
    };
    expect(calculateBuildStats(selection).maxWeightKg).toBe(500);
  });
});
