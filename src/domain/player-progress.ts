export interface PlayerProgress {
  level: number;
  money: number;
  completedQuestIds: ReadonlySet<string>;
  unlockedIslandIds: ReadonlySet<string>;
  ownedEquipmentIds: ReadonlySet<string>;
  ownedEnchantmentIds: ReadonlySet<string>;
}

export type Requirement =
  | { type: "LEVEL"; minimum: number }
  | { type: "MONEY"; amount: number }
  | { type: "QUEST"; questId: string }
  | { type: "ISLAND"; islandId: string }
  | { type: "EQUIPMENT"; equipmentId: string };

export type Availability = "OWNED" | "AVAILABLE" | "NEAR" | "LOCKED" | "UNKNOWN";
