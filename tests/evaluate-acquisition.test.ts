import { describe, expect, it } from "vitest";
import {
  ACQUISITION_BY_EQUIPMENT_ID,
  EQUIPMENT_ACQUISITION_RULES,
} from "../src/data/equipment-acquisition.js";
import { evaluateAcquisition } from "../src/domain/evaluate-acquisition.js";
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

function rule(equipmentId: string) {
  const found = ACQUISITION_BY_EQUIPMENT_ID.get(equipmentId);
  if (!found) {
    throw new Error(`Missing acquisition rule for ${equipmentId}`);
  }
  return found;
}

describe("equipment acquisition", () => {
  it("contains one rule for every rod, line and bobber", () => {
    expect(EQUIPMENT_ACQUISITION_RULES).toHaveLength(36);
    expect(ACQUISITION_BY_EQUIPMENT_ID.size).toBe(36);
  });

  it("treats default equipment as owned", () => {
    expect(
      evaluateAcquisition(rule("stick-and-string"), progress()).availability,
    ).toBe("OWNED");
  });

  it("makes a normal purchase available with location and money", () => {
    const result = evaluateAcquisition(
      rule("toy-rod"),
      progress({ money: 750 }),
    );

    expect(result.availability).toBe("AVAILABLE");
    expect(result.purchaseCost).toBe(750);
  });

  it("reports a purchase as near when only money is missing", () => {
    const result = evaluateAcquisition(
      rule("toy-rod"),
      progress({ money: 700 }),
    );

    expect(result.availability).toBe("NEAR");
    expect(result.unmetRequirements[0]?.missing).toBe(50);
  });

  it("tracks Sunleaf Rod progress using fish sold", () => {
    const result = evaluateAcquisition(
      rule("sunleaf-rod"),
      progress({ fishSold: 83 }),
    );

    expect(result.availability).toBe("NEAR");
    expect(result.unmetRequirements[0]?.missing).toBe(17);
  });

  it("locks Alien Rod until its quest is complete", () => {
    const locked = evaluateAcquisition(
      rule("alien-rod"),
      progress({ money: 200_000 }),
    );
    const available = evaluateAcquisition(
      rule("alien-rod"),
      progress({
        money: 200_000,
        completedQuestIds: new Set(["alien-quest"]),
      }),
    );

    expect(locked.availability).toBe("LOCKED");
    expect(available.availability).toBe("AVAILABLE");
  });

  it("allows an immediate Vlad purchase when he is available", () => {
    const result = evaluateAcquisition(
      rule("fur-of-cerberus"),
      progress({
        money: 35_000,
        availableVendorIds: new Set(["vlad"]),
      }),
    );

    expect(result.availability).toBe("AVAILABLE");
  });

  it("checks every Leviathan crafting material and its coin cost", () => {
    const result = evaluateAcquisition(
      rule("leviathan-rod"),
      progress({
        money: 1_000_000,
        unlockedLocationIds: new Set(["coconut-bay", "crescent-isle"]),
        inventory: new Map([
          ["leviathan-scale", 2],
          ["leviathan-dorsal-spike", 5],
          ["scrap-metal", 9],
          ["powerful-relic", 1],
          ["tear-of-the-leviathan", 1],
        ]),
      }),
    );

    expect(result.availability).toBe("LOCKED");
    expect(result.unmetRequirements).toHaveLength(1);
    expect(result.unmetRequirements[0]?.missing).toBe(1);
  });

  it("unlocks free quest rewards after completion", () => {
    const result = evaluateAcquisition(
      rule("undying-heart"),
      progress({
        completedQuestIds: new Set(["undying-love"]),
      }),
    );

    expect(result.availability).toBe("AVAILABLE");
    expect(result.purchaseCost).toBe(0);
  });
});
