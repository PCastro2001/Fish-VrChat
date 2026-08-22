export interface PlayerProgress {
  level: number;
  money: number;
  fishSold: number;
  completedQuestIds: ReadonlySet<string>;
  unlockedLocationIds: ReadonlySet<string>;
  availableVendorIds: ReadonlySet<string>;
  ownedEquipmentIds: ReadonlySet<string>;
  ownedEnchantmentIds: ReadonlySet<string>;
  inventory: ReadonlyMap<string, number>;
}

export type Requirement =
  | { type: "LEVEL"; minimum: number }
  | { type: "MONEY"; amount: number }
  | { type: "QUEST"; questId: string }
  | { type: "LOCATION"; locationId: string }
  | { type: "VENDOR"; vendorId: string }
  | { type: "FISH_SOLD"; minimum: number }
  | { type: "MATERIAL"; materialId: string; quantity: number }
  | { type: "EQUIPMENT"; equipmentId: string };

export type Availability =
  | "OWNED"
  | "AVAILABLE"
  | "NEAR"
  | "LOCKED"
  | "UNKNOWN";
