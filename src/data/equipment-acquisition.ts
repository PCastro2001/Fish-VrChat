import type { AcquisitionRule } from "../domain/evaluate-acquisition.js";
import type { Requirement } from "../domain/player-progress.js";

const location = (locationId: string): Requirement => ({
  type: "LOCATION",
  locationId,
});

const quest = (questId: string): Requirement => ({
  type: "QUEST",
  questId,
});

const vendor = (vendorId: string): Requirement => ({
  type: "VENDOR",
  vendorId,
});

const material = (materialId: string, quantity: number): Requirement => ({
  type: "MATERIAL",
  materialId,
  quantity,
});

const purchase = (
  equipmentId: string,
  price: number,
  requirements: readonly Requirement[] = [],
): AcquisitionRule => ({
  equipmentId,
  method: "PURCHASE",
  price,
  requirements,
});

const reward = (
  equipmentId: string,
  method: "QUEST_REWARD" | "LEVEL_REWARD" | "REQUIREMENT_REWARD",
  requirements: readonly Requirement[],
): AcquisitionRule => ({
  equipmentId,
  method,
  price: 0,
  requirements,
});

export const EQUIPMENT_ACQUISITION_RULES: readonly AcquisitionRule[] = [
  {
    equipmentId: "stick-and-string",
    method: "DEFAULT",
    price: 0,
    requirements: [],
  },
  reward("sunleaf-rod", "REQUIREMENT_REWARD", [
    location("coconut-bay"),
    { type: "FISH_SOLD", minimum: 100 },
  ]),
  purchase("toy-rod", 750, [location("coconut-bay")]),
  purchase("sturdy-wooden-rod", 2_000, [location("coconut-bay")]),
  purchase("slim-rod", 10_000, [location("coconut-bay")]),
  purchase("telescopic-rod", 15_000, [location("coconut-bay")]),
  purchase("metallic-rod", 15_000, [location("coconut-bay")]),
  purchase("darkwood-rod", 25_000, [location("tanglewood")]),
  purchase("speedy-rod", 55_000, [location("crescent-isle")]),
  purchase("fortunate-rod", 75_000, [location("crescent-isle")]),
  purchase("alien-rod", 200_000, [quest("alien-quest")]),
  purchase("rustfang-rod", 250_000, [location("luxian-dunes")]),
  purchase("runesteel-rod", 700_000, [vendor("vlad")]),
  purchase("rod-of-the-pharaoh", 750_000, [location("luxian-dunes")]),
  reward("rod-of-perpetuity", "LEVEL_REWARD", [
    { type: "LEVEL", minimum: 500 },
  ]),
  {
    equipmentId: "leviathan-rod",
    method: "CRAFT",
    price: 1_000_000,
    requirements: [
      location("crescent-isle"),
      material("leviathan-scale", 2),
      material("leviathan-dorsal-spike", 5),
      material("scrap-metal", 10),
      material("powerful-relic", 1),
      material("tear-of-the-leviathan", 1),
    ],
  },

  {
    equipmentId: "basic-line",
    method: "DEFAULT",
    price: 0,
    requirements: [],
  },
  purchase("aquamarine-line", 100, [location("coconut-bay")]),
  purchase("carbon-line", 1_000, [location("coconut-bay")]),
  purchase("heavy-duty-line", 4_000, [location("crescent-isle")]),
  purchase("flavored-line", 10_000, [location("tanglewood")]),
  purchase("lucky-line", 10_000, [location("crescent-isle")]),
  purchase("diamond-line", 25_000, [location("luxian-dunes")]),
  purchase("fur-of-cerberus", 35_000, [vendor("vlad")]),
  purchase("midas-line", 50_000, [location("twilight-realm")]),
  reward("ethereal-line", "QUEST_REWARD", [
    quest("our-ship-its-broken"),
  ]),

  {
    equipmentId: "basic-bobber",
    method: "DEFAULT",
    price: 0,
    requirements: [],
  },
  reward("paulies-bobber", "QUEST_REWARD", [
    quest("paulies-lost-saw"),
  ]),
  purchase("blue-bobber", 100, [location("coconut-bay")]),
  purchase("dud-bobber", 1_000, [location("crescent-isle")]),
  purchase("feline-bobber", 2_000, [location("tanglewood")]),
  purchase("ornamental-bobber", 10_000, [location("luxian-dunes")]),
  purchase("lucky-bobber", 10_000, [location("luxian-dunes")]),
  purchase("rainbow-slime-bobber", 35_000, [vendor("vlad")]),
  purchase("pyramid-bobber", 50_000, [location("twilight-realm")]),
  reward("undying-heart", "QUEST_REWARD", [
    quest("undying-love"),
  ]),
] as const;

export const ACQUISITION_BY_EQUIPMENT_ID = new Map(
  EQUIPMENT_ACQUISITION_RULES.map((rule) => [rule.equipmentId, rule]),
);
