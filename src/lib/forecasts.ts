import type { Forecast } from '../data/forecasts';

type Resolved = Forecast & { outcome: boolean };

export const isResolved = (f: Forecast): f is Resolved => f.outcome !== undefined;

/** Mean squared error between stated probability and outcome. 0 is perfect; always saying 50% scores 0.25. */
export function brier(fs: Forecast[]) {
  const r = fs.filter(isResolved);
  if (!r.length) return NaN;
  return r.reduce((s, f) => s + (f.p - (f.outcome ? 1 : 0)) ** 2, 0) / r.length;
}

/** Bucket resolved forecasts by stated probability for a calibration plot. */
export function calibrationBins(fs: Forecast[], bins = 5) {
  const r = fs.filter(isResolved);
  return Array.from({ length: bins }, (_, i) => {
    const lo = i / bins, hi = (i + 1) / bins;
    const inBin = r.filter((f) => f.p >= lo && (i === bins - 1 ? f.p <= hi : f.p < hi));
    return {
      lo, hi,
      n: inBin.length,
      predicted: inBin.length ? inBin.reduce((s, f) => s + f.p, 0) / inBin.length : (lo + hi) / 2,
      observed: inBin.length ? inBin.filter((f) => f.outcome).length / inBin.length : NaN,
    };
  });
}
