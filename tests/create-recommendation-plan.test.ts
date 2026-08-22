import { describe, expect, it } from "vitest";
import {
  createRecommendationPlan,
  describeBlocker,
} from "../src/domain/create-recommendation-plan.js";
import type { PlayerProgress } from "../src/domain/player-progress.js";

function progress(
  overrides: Partial<PlayerProgress> = {},
): PlayerProgress {
  return {
    level: 1,
    money: 0,
    fishSold: 0,
    completedIndexLocations: 0,
    completedQuestIds: new Set(),
    unlockedLocationIds: new Set(["coconut-bay"]),
    availableVendorIds: new Set(),
    ownedEquipmentIds: new Set(),
    rodEnchantments: new Map(),
    inventory: new Map(),
    ...overrides,
  };
}

describe("recommendation plan", () => {
  it("returns a best available build and a future improvement", () => {
    const plan = createRecommendationPlan(
      progress(),
      "BALANCED",
    );

    expect(plan.bestAvailable.purchaseCost).toBe(0);
    expect(plan.futureUpgrade?.scoreGain).toBeGreaterThan(0);
    expect(plan.futureUpgrade?.blockers.length).toBeGreaterThan(0);
  });

  it("finds a cheaper alternative when the best build spends the budget", () => {
    const plan = createRecommendationPlan(
      progress({ money: 10_000 }),
      "BALANCED",
    );

    expect(plan.bestAvailable.purchaseCost).toBeGreaterThan(0);
    expect(plan.economicAlternative).toBeDefined();
    expect(plan.economicAlternative?.purchaseCost).toBeLessThan(
      plan.bestAvailable.purchaseCost,
    );
  });

  it("omits the economic alternative when the best gear costs nothing", () => {
    const plan = createRecommendationPlan(
      progress({
        ownedEquipmentIds: new Set([
          "fortunate-rod",
          "lucky-line",
          "lucky-bobber",
        ]),
      }),
      "RARE_FISH",
    );

    expect(plan.bestAvailable.purchaseCost).toBe(0);
    expect(plan.economicAlternative).toBeUndefined();
  });

  it("turns technical requirements into interview-ready explanations", () => {
    expect(
      describeBlocker({
        requirement: { type: "MONEY", amount: 200_000 },
        current: 125_000,
        missing: 75_000,
      }),
    ).toBe("Te faltan $75.000.");

    expect(
      describeBlocker({
        requirement: { type: "QUEST", questId: "alien-quest" },
        current: false,
      }),
    ).toBe("Debes completar la misión Alien Quest.");
  });
  it("prefers an attainable next step over an end-game item", () => {
    const plan = createRecommendationPlan(
      progress({ money: 10_000 }),
      "BALANCED",
    );

    expect(plan.futureUpgrade?.selection.line.id).toBe("aquamarine-line");
    expect(plan.futureUpgrade?.upgradeCost).toBe(10_100);
    expect(plan.futureUpgrade?.blockers).toContain("Te faltan $100.");
    expect(plan.futureUpgrade?.selection.rod.id).not.toBe("leviathan-rod");
  });

});
