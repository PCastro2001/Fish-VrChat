import type {
  Availability,
  PlayerProgress,
  Requirement,
} from "./player-progress.js";

export type AcquisitionMethod =
  | "DEFAULT"
  | "PURCHASE"
  | "QUEST_REWARD"
  | "LEVEL_REWARD"
  | "REQUIREMENT_REWARD"
  | "CRAFT";

export interface AcquisitionRule {
  equipmentId: string;
  method: AcquisitionMethod;
  /** Coins required. Zero for defaults and free rewards. */
  price: number;
  requirements: readonly Requirement[];
}

export interface UnmetRequirement {
  requirement: Requirement;
  current: number | boolean;
  missing?: number;
}

export interface AcquisitionEvaluation {
  availability: Availability;
  purchaseCost: number;
  unmetRequirements: readonly UnmetRequirement[];
}

function evaluateRequirement(
  requirement: Requirement,
  progress: PlayerProgress,
): UnmetRequirement | null {
  switch (requirement.type) {
    case "LEVEL":
      return progress.level >= requirement.minimum
        ? null
        : {
            requirement,
            current: progress.level,
            missing: requirement.minimum - progress.level,
          };
    case "MONEY":
      return progress.money >= requirement.amount
        ? null
        : {
            requirement,
            current: progress.money,
            missing: requirement.amount - progress.money,
          };
    case "QUEST": {
      const completed = progress.completedQuestIds.has(requirement.questId);
      return completed ? null : { requirement, current: false };
    }
    case "LOCATION": {
      const unlocked = progress.unlockedLocationIds.has(requirement.locationId);
      return unlocked ? null : { requirement, current: false };
    }
    case "VENDOR": {
      const available = progress.availableVendorIds.has(requirement.vendorId);
      return available ? null : { requirement, current: false };
    }
    case "FISH_SOLD":
      return progress.fishSold >= requirement.minimum
        ? null
        : {
            requirement,
            current: progress.fishSold,
            missing: requirement.minimum - progress.fishSold,
          };
    case "MATERIAL": {
      const quantity = progress.inventory.get(requirement.materialId) ?? 0;
      return quantity >= requirement.quantity
        ? null
        : {
            requirement,
            current: quantity,
            missing: requirement.quantity - quantity,
          };
    }
    case "EQUIPMENT": {
      const owned = progress.ownedEquipmentIds.has(requirement.equipmentId);
      return owned ? null : { requirement, current: false };
    }
  }
}

export function evaluateAcquisition(
  rule: AcquisitionRule,
  progress: PlayerProgress,
): AcquisitionEvaluation {
  if (
    rule.method === "DEFAULT" ||
    progress.ownedEquipmentIds.has(rule.equipmentId)
  ) {
    return {
      availability: "OWNED",
      purchaseCost: 0,
      unmetRequirements: [],
    };
  }

  const requirements: readonly Requirement[] =
    rule.price > 0
      ? [...rule.requirements, { type: "MONEY", amount: rule.price }]
      : rule.requirements;

  const unmetRequirements = requirements
    .map((requirement) => evaluateRequirement(requirement, progress))
    .filter((result): result is UnmetRequirement => result !== null);

  if (unmetRequirements.length === 0) {
    return {
      availability: "AVAILABLE",
      purchaseCost: rule.price,
      unmetRequirements,
    };
  }

  const near = unmetRequirements.every(({ requirement }) =>
    ["LEVEL", "MONEY", "FISH_SOLD"].includes(requirement.type),
  );

  return {
    availability: near ? "NEAR" : "LOCKED",
    purchaseCost: rule.price,
    unmetRequirements,
  };
}
