export function getCatchFeasibility(rodMaxWeightKg: number, fishMinKg: number, fishMaxKg: number) {
    // Caso 1: Imposible (el pez más pequeño ya rompe la caña)
    if (rodMaxWeightKg < fishMinKg) {
        return {
            status: "IMPOSSIBLE",
            label: "Fuera de Rango",
            chanceText: "0% (Pez demasiado pesado)"
        };
    }

    // Caso 2: 100% Seguro (la caña aguanta incluso el peso máximo registrado)
    if (rodMaxWeightKg >= fishMaxKg && fishMaxKg > 0) {
        return {
            status: "SAFE",
            label: "100% Seguro",
            chanceText: "Captura garantizada"
        };
    }

    // Caso 3: Posible con Riesgo (la caña aguanta el mínimo, pero ejemplares grandes pueden romperla)
    const catchableRangeRatio = (rodMaxWeightKg - fishMinKg) / (fishMaxKg - fishMinKg);
    const safePercentage = Math.min(Math.max(Math.round(catchableRangeRatio * 100), 10), 90);

    return {
        status: "RISKY",
        label: `~${safePercentage}% Seguro`,
        chanceText: "Puede picar un ejemplar que rompa la línea"
    };
}