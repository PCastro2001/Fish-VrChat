// 1. Constantes y Exponentes del Motor de Suerte
export const RARITY_BASE_WEIGHTS: Record<string, number> = {
    Trash: 9.00,
    Abundant: 27.00,
    Common: 25.00,
    Curious: 18.00,
    Elusive: 11.00,
    Fabled: 4.40,
    Mythic: 2.50,
    Exotic: 0.085,
    Relic: 2.50,
    Secret: 0.01,
    UltimateSecret: 0.005
};

export const RARITY_SCALE_FACTORS: Record<string, number> = {
    Trash: -1.0,
    Abundant: -1.2,
    Common: -0.8,
    Curious: 0.2,
    Elusive: 0.5,
    Fabled: 0.85,
    Mythic: 1.05,
    Exotic: 1.20,
    Relic: 0.0,
    Secret: 1.22,
    UltimateSecret: 1.26
};

// 2. Cálculo de Curva Senoidal (Efecto Big Catch)
export function calculateWeightPercentile(bigCatchPoints: number, baseRoll: number = 0.5): number {
    const shift = bigCatchPoints / 300;
    const effectiveRoll = Math.min(Math.max(baseRoll + shift, 0.0), 1.0);
    return Math.sin(effectiveRoll * (Math.PI / 2));
}

export function calculateFishWeight(minWeight: number, maxWeight: number, bigCatchPoints: number, isHuge: boolean = false): number {
    const baseMin = isHuge ? minWeight * 4 : minWeight;
    const baseMax = isHuge ? maxWeight * 4 : maxWeight;
    const percentile = calculateWeightPercentile(bigCatchPoints);
    return parseFloat((baseMin + (baseMax - baseMin) * percentile).toFixed(2));
}

// 3. Motor de Suerte (Distribución Exponencial Real)
export function calculateRarityChances(totalLuck: number, completedIslandsCount: number = 0): Record<string, number> {
    const bonusLuck = completedIslandsCount * 15; // +15 permanente por título de isla 100%
    const effectiveLuck = totalLuck + bonusLuck;
    const luckMultiplier = Math.max(0.01, 1 + (effectiveLuck / 100));

    let totalPoolWeight = 0;
    const adjustedWeights: Record<string, number> = {};

    for (const [rarity, baseW] of Object.entries(RARITY_BASE_WEIGHTS)) {
        const exponent = RARITY_SCALE_FACTORS[rarity] || 0;
        const effectiveWeight = baseW * Math.pow(luckMultiplier, exponent);
        adjustedWeights[rarity] = effectiveWeight;
        totalPoolWeight += effectiveWeight;
    }

    const finalPercentages: Record<string, number> = {};
    for (const [rarity, weight] of Object.entries(adjustedWeights)) {
        finalPercentages[rarity] = parseFloat(((weight / totalPoolWeight) * 100).toFixed(4));
    }

    return finalPercentages;
}

// 4. Ciclo de Tiempo y Capturas por Hora
export function calculateFishingCycle(attractionPercent: number, avgReelTimeSec: number = 3.5): { cycleTimeSec: number; catchesPerHour: number } {
    // Lerp de 14.0s (0%) a 0.0s (100%)
    const waitTime = Math.max(0, 14.0 * (1 - Math.min(attractionPercent, 100) / 100));
    const castDelay = 1.5;
    const cycleTimeSec = parseFloat((waitTime + avgReelTimeSec + castDelay).toFixed(2));
    const catchesPerHour = Math.round(3600 / cycleTimeSec);

    return { cycleTimeSec, catchesPerHour };
}

// 5. Álgebra Inversa: Resolver Máximo Base con Penalización Negativa
export function solveTrueBaseMax(observedMax: number, baseMin: number, bigCatchPenalty: number): number {
    const shift = bigCatchPenalty / 300;
    const maxPossibleRoll = Math.min(Math.max(1.0 + shift, 0.0), 1.0);
    const maxPercentile = Math.sin(maxPossibleRoll * (Math.PI / 2));
    return parseFloat((((observedMax - baseMin) / maxPercentile) + baseMin).toFixed(2));
}