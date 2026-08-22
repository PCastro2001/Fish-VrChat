export type EquipmentType = "ROD" | "LINE" | "BOBBER";

export type DataConfidence =
  | "CONFIRMED"
  | "DERIVED"
  | "ESTIMATED"
  | "CONFLICTED";

export interface SourceReference {
  sourceId: string;
  label: string;
  confidence: DataConfidence;
  retrievedAt: string;
  notes?: string;
}

export interface EquipmentStats {
  luck: number;
  strength: number;
  expertise: number;
  /** Decimal ratio: 0.25 means 25%. */
  attractionRate: number;
  bigCatch: number;
  /** Null when the item does not modify the rod limit. */
  maxWeightBonusKg: number | null;
}

export interface Equipment {
  id: string;
  name: string;
  type: EquipmentType;
  price: number | null;
  stats: EquipmentStats;
  source: SourceReference[];
}

export interface Enchantment {
  id: string;
  name: string;
  rarity: "COMMON" | "UNCOMMON" | "RARE" | "EPIC" | "LEGENDARY";
  stats: EquipmentStats;
  effectDescription: string | null;
  source: SourceReference[];
}

export interface BuildSelection {
  rod: Equipment;
  line: Equipment;
  bobber: Equipment;
  enchantment?: Enchantment;
  completedIndexLocations: number;
}

export interface BuildStats {
  luck: number;
  strength: number;
  expertise: number;
  attractionRate: number;
  bigCatch: number;
  maxWeightKg: number;
  instantBite: boolean;
}
