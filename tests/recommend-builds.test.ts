import { describe, expect, it } from "vitest";
import { recommendBuilds } from "../src/domain/recommend-builds.js";
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

describe("build recommendations", () => {
  it("returns the default build for a new player with no money", () => {
    const [recommendation] = recommendBuilds(
      progress(),
      "BALANCED",
      3,
    );

    expect(recommendation?.selection.rod.id).toBe("stick-and-string");
    expect(recommendation?.selection.line.id).toBe("basic-line");
    expect(recommendation?.selection.bobber.id).toBe("basic-bobber");
    expect(recommendation?.purchaseCost).toBe(0);
  });

  it("never recommends a combination over the total budget", () => {
    const recommendations = recommendBuilds(
      progress({ money: 1_000 }),
      "BALANCED",
      20,
    );

    expect(recommendations.length).toBeGreaterThan(0);
    expect(
      recommendations.every(({ purchaseCost }) => purchaseCost <= 1_000),
    ).toBe(true);
  });

  it("does not charge for equipment the player already owns", () => {
    const [recommendation] = recommendBuilds(
      progress({
        ownedEquipmentIds: new Set([
          "slim-rod",
          "lucky-line",
          "lucky-bobber",
        ]),
      }),
      "RARE_FISH",
      1,
    );

    expect(recommendation?.selection.rod.id).toBe("slim-rod");
    expect(recommendation?.selection.line.id).toBe("lucky-line");
    expect(recommendation?.selection.bobber.id).toBe("lucky-bobber");
    expect(recommendation?.purchaseCost).toBe(0);
  });

  it("excludes equipment from locked locations", () => {
    const recommendations = recommendBuilds(
      progress({ money: 1_000_000 }),
      "RARE_FISH",
      100,
    );

    expect(
      recommendations.some(
        ({ selection }) => selection.rod.id === "rod-of-the-pharaoh",
      ),
    ).toBe(false);
    expect(
      recommendations.some(
        ({ selection }) => selection.line.id === "midas-line",
      ),
    ).toBe(false);
  });

  it("includes Index completion Luck in every candidate", () => {
    const [recommendation] = recommendBuilds(
      progress({
        completedIndexLocations: 8,
        ownedEquipmentIds: new Set([
          "slim-rod",
          "lucky-line",
          "lucky-bobber",
        ]),
      }),
      "RARE_FISH",
      1,
    );

    expect(recommendation?.stats.luck).toBe(195);
  });

  it("changes the best build when the player's objective changes", () => {
    const player = progress({
      ownedEquipmentIds: new Set(["speedy-rod", "fortunate-rod"]),
    });

    const [fastest] = recommendBuilds(player, "FAST_CATCHES", 1);
    const [rarest] = recommendBuilds(player, "RARE_FISH", 1);

    expect(fastest?.selection.rod.id).toBe("speedy-rod");
    expect(rarest?.selection.rod.id).toBe("fortunate-rod");
  });
  it("uses only enchantments the player owns", () => {
    const [recommendation] = recommendBuilds(
      progress({
        rodEnchantments: new Map([["stick-and-string", "gods-own-luck"]]),
      }),
      "RARE_FISH",
      1,
    );

    expect(recommendation?.selection.enchantment?.id).toBe("gods-own-luck");
    expect(recommendation?.stats.luck).toBe(200);
  });

  it("never recommends an unowned enchantment", () => {
    const recommendations = recommendBuilds(
      progress(),
      "RARE_FISH",
      20,
    );

    expect(
      recommendations.every(({ selection }) => !selection.enchantment),
    ).toBe(true);
  });

  it("applies conditional enchantments only in the matching context", () => {
    const player = progress({
      rodEnchantments: new Map([["stick-and-string", "day-walker"]]),
    });

    const [withoutDay] = recommendBuilds(player, "RARE_FISH", 1);
    const [duringDay] = recommendBuilds(
      player,
      "RARE_FISH",
      1,
      { timeOfDay: "DAY" },
    );

    expect(withoutDay?.selection.enchantment?.id).toBe("day-walker");
    expect(withoutDay?.stats.luck).toBe(-50);
    expect(duringDay?.selection.enchantment?.id).toBe("day-walker");
    expect(duringDay?.stats.luck).toBe(0);
  });

  it("never transfers a rod enchantment to another rod", () => {
    const recommendations = recommendBuilds(
      progress({
        ownedEquipmentIds: new Set(["slim-rod"]),
        rodEnchantments: new Map([
          ["stick-and-string", "gods-own-luck"],
        ]),
      }),
      "RARE_FISH",
      20,
    );

    const slimBuild = recommendations.find(
      ({ selection }) => selection.rod.id === "slim-rod",
    );

    expect(slimBuild?.selection.enchantment).toBeUndefined();
  });

});
