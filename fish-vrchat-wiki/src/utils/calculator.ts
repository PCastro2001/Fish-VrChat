import { mutationModifiers, rarityTable, sizeModifiers } from "../data/gameRules";

export interface CalculatedStats {
    luck: number;
    strength: number;
    expertise: number;
    attractionRate: number;
    bigCatchRate: number;
    maxWeightKg: number;
}

/**
 * Calcula el tiempo que tarda un pez en morder según el Attraction Rate.
 * Regla: Se reduce 0.7s por cada 5% de atracción. Al 100% es instantáneo (0s).
 */
export function calculateBiteTimeSeconds(attractionRatePercent: number, baseBiteTimeSec: number = 14.0): number {
    if (attractionRatePercent >= 100) return 0.0;
    if (attractionRatePercent <= 0) return baseBiteTimeSec;

    const reduction = (attractionRatePercent / 5) * 0.7;
    return Math.max(0, parseFloat((baseBiteTimeSec - reduction).toFixed(2)));
}

/**
 * Calcula el multiplicador de precio total combinando Tamaño + Mutación
 */
export function calculateFishMultiplier(mutation: string = 'None', size: 'Normal' | 'Huge' | 'Tiny' = 'Normal'): number {
    const mutMult = mutationModifiers[mutation] || 1.0;
    const sizeMult = sizeModifiers[size] || 1.0;
    return parseFloat((mutMult * sizeMult).toFixed(2));
}

/**
 * Calcula la ganancia estimada de XP por captura
 */
export function calculateCatchXP(rarityKey: string, isPerfectCatch: boolean = false): number {
    const rule = rarityTable[rarityKey] || rarityTable.Common;
    return isPerfectCatch ? rule.xpPerfect : rule.xpNormal;
}