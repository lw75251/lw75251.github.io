/**
 * Public, falsifiable forecasts. Each one gets a probability when made and an
 * outcome when it resolves; the Forecasts page scores them (Brier score) and
 * draws a calibration plot.
 *
 * HOW TO USE
 * - Add a forecast: { id, made, resolves, claim, p } with p between 0 and 1.
 * - Resolve it: add `outcome: true | false` and `resolvedOn`. Never edit `p` after the fact.
 * - Entries with `example: true` are placeholders: visible in `npm run dev`, never published.
 *   Delete them once you add your own. The Forecasts page and nav link appear as soon as
 *   one real (non-example) forecast exists.
 */
export interface Forecast {
  id: string;
  made: string; // YYYY-MM-DD
  resolves: string; // YYYY-MM-DD
  claim: string;
  p: number; // probability the claim is true, 0..1
  outcome?: boolean;
  resolvedOn?: string;
  note?: string;
  example?: boolean;
}

export const FORECASTS: Forecast[] = [
  {
    id: 'example-1',
    example: true,
    made: '2026-01-15',
    resolves: '2026-10-01',
    claim: 'EXAMPLE: A frontier model tops 80% execution accuracy on the BIRD Text-to-SQL benchmark.',
    p: 0.6,
    outcome: true,
    resolvedOn: '2026-09-20',
  },
  {
    id: 'example-2',
    example: true,
    made: '2026-02-01',
    resolves: '2026-08-01',
    claim: 'EXAMPLE: A major BI vendor ships an agent that writes to the semantic layer, not just reads from it.',
    p: 0.3,
    outcome: false,
    resolvedOn: '2026-08-01',
  },
  {
    id: 'example-3',
    example: true,
    made: '2026-11-25',
    resolves: '2027-12-31',
    claim: 'EXAMPLE: Most data questions at my company get answered with no human analyst in the loop.',
    p: 0.7,
  },
];
