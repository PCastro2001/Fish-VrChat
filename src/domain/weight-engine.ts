export interface WeightRange {
  minKg: number;
  maxKg: number;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function effectiveRoll(roll: number, bigCatch: number): number {
  return clamp(roll + bigCatch / 300, 0, 1);
}

export function weightPercentile(roll: number, bigCatch: number): number {
  return Math.sin(effectiveRoll(roll, bigCatch) * (Math.PI / 2));
}

export function calculateWeight(
  range: WeightRange,
  roll: number,
  bigCatch: number,
): number {
  if (range.minKg < 0 || range.maxKg < range.minKg) {
    throw new RangeError("Invalid fish weight range");
  }

  return (
    range.minKg +
    (range.maxKg - range.minKg) * weightPercentile(roll, bigCatch)
  );
}

/**
 * Exact expected percentile for a uniform roll in [0, 1].
 * This avoids Monte Carlo noise in rankings and unit tests.
 */
export function expectedWeightPercentile(bigCatch: number): number {
  const shift = clamp(bigCatch / 300, -1, 1);

  if (shift >= 0) {
    return shift + (2 / Math.PI) * Math.cos((Math.PI * shift) / 2);
  }

  const penalty = -shift;
  return (2 / Math.PI) * (1 - Math.sin((Math.PI * penalty) / 2));
}

export function expectedWeight(range: WeightRange, bigCatch: number): number {
  return (
    range.minKg +
    (range.maxKg - range.minKg) * expectedWeightPercentile(bigCatch)
  );
}
