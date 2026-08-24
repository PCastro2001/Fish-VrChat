export interface RarityRule {
    rarity: string;
    defaultCatchRate: number; // Porcentaje base
    xpNormal: number;
    xpPerfect: number;
}

export const rarityTable: Record<string, RarityRule> = {
    Abundant: { rarity: 'Abundant', defaultCatchRate: 27.00, xpNormal: 15, xpPerfect: 23 },
    Common: { rarity: 'Common', defaultCatchRate: 25.00, xpNormal: 15, xpPerfect: 23 },
    Curious: { rarity: 'Curious', defaultCatchRate: 18.00, xpNormal: 20, xpPerfect: 30 },
    Elusive: { rarity: 'Elusive', defaultCatchRate: 11.00, xpNormal: 20, xpPerfect: 30 },
    Fabled: { rarity: 'Fabled', defaultCatchRate: 4.40, xpNormal: 35, xpPerfect: 53 },
    Mythic: { rarity: 'Mythic', defaultCatchRate: 2.50, xpNormal: 45, xpPerfect: 68 },
    Exotic: { rarity: 'Exotic', defaultCatchRate: 0.085, xpNormal: 50, xpPerfect: 75 },
    Trash: { rarity: 'Trash', defaultCatchRate: 9.00, xpNormal: 10, xpPerfect: 10 },
    Relic: { rarity: 'Relic', defaultCatchRate: 2.50, xpNormal: 25, xpPerfect: 38 },
    Secret: { rarity: 'Secret', defaultCatchRate: 0.01, xpNormal: 60, xpPerfect: 90 },
    UltimateSecret: { rarity: 'Ultimate Secret', defaultCatchRate: 0.005, xpNormal: 70, xpPerfect: 105 }
};

export const mutationModifiers: Record<string, number> = {
    None: 1.0,
    Cursed: 1.1,
    Sandy: 1.2,
    Stone: 1.3,
    Zebra: 1.3,
    Negative: 1.5,
    Albino: 1.5,
    Ghastly: 1.5,
    Glitched: 1.5,
    Tiger: 1.6,
    Camo: 1.8,
    Void: 2.0,
    Shadow: 2.0,
    Shiny: 2.0,
    Frozen: 2.0,
    Blessed: 3.0,
    Golden: 3.0,
    Galaxy: 3.0,
    Radioactive: 3.0,
    Rainbow: 3.0,
    Burning: 4.0,
    Electric: 4.0,
    Holographic: 5.0,
    Static: 5.0
};

export const sizeModifiers = {
    Tiny: 1.0,
    Normal: 1.0,
    Huge: 1.5
};

export const specialAreas = [
    { name: "Aguas Normales", mult: 1.0, note: "Sin modificador adicional" },
    { name: "Strange Whirlpool", mult: 1.5, note: "1.5x mutaciones & 2x Luck" },
    { name: "Midas Rift", mult: 1.9, target: "Golden", note: "1.9x chance de Gold" },
    { name: "Celestial Chasm", mult: 1.9, target: "Galaxy", note: "1.9x chance de Galaxy" },
    { name: "Ionized Fissure", mult: 1.9, target: "Radioactive", note: "1.9x chance de Radioactive" },
    { name: "Sparkling Pool", mult: 1.9, target: "Shiny", note: "1.9x chance de Shiny" },
    { name: "Shadow Chasm", mult: 1.9, target: "Shadow", note: "1.9x chance de Shadow" },
    { name: "Occult Pool", mult: 1.9, target: "Cursed", note: "1.9x chance de Cursed" }
];