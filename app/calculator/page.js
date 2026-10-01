'use client';

import { useMemo, useState } from 'react';
import { impactFactors } from '@/data/plastics';

const PRESETS = [
  { label: 'One plastic bottle', items: 1 },
  { label: 'A family, one month', items: 350 },
  { label: 'A school, one month', items: 250 },
  { label: 'A village, one year', items: 14000 },
  { label: 'A city, one year', items: 1400000 }
];

const fmt = new Intl.NumberFormat('en-IN');

export default function CalculatorPage() {
  const [items, setItems] = useState(350);
  const [perItem, setPerItem] = useState(0.035);
  const [avoidedPct, setAvoidedPct] = useState(60);

  const results = useMemo(() => {
    const n = Math.max(Number(items) || 0, 0);
    const w = Math.max(Number(perItem) || 0, 0);
    const pct = Math.min(Math.max(Number(avoidedPct) || 0, 0), 100);

    const kg = n * w;
    const diverted = kg * (pct / 100);
    const co2 = diverted * impactFactors.co2SavedPerKg;

    return {
      items: fmt.format(Math.round(n)),
      kg: kg.toFixed(1),
      diverted: diverted.toFixed(1),
      co2: fmt.format(Math.round(co2)),
      oil: fmt.format(Math.round(diverted * impactFactors.oilLitresPerKg)),
      equivalent: fmt.format(Math.round(co2 / impactFactors.co2PerLitreDiesel))
    };
  }, [items, perItem, avoidedPct]);

  return (
    <>
      <h1>🧮 Impact Calculator (M4)</h1>
      <p className="lede">
        Estimate how much plastic, carbon, and petroleum your target waste stream
        represents, and how much of it you can realistically divert. All maths runs in
        your browser — no AI call, and nothing you type is sent anywhere.
      </p>

      <div className="hero">
        <label htmlFor="items">How many plastic items?</label>
        <input
          id="items"
          type="number"
          min="0"
          step="1"
          value={items}
          onChange={(e) => setItems(e.target.value)}
        />
        <ul className="pill-row">
          {PRESETS.map((p) => (
            <li key={p.label}>
              <button className="filter-btn" onClick={() => setItems(p.items)}>
                {p.label}
              </button>
            </li>
          ))}
        </ul>

        <label htmlFor="density">Average weight of one item (kg)</label>
        <input
          id="density"
          type="number"
          min="0.001"
          step="0.001"
          value={perItem}
          onChange={(e) => setPerItem(e.target.value)}
        />
        <p className="meta">
          A typical single-use plastic item weighs about 0.03–0.04 kg. This factor does
          affect the results below.
        </p>

        <label htmlFor="avoided">Share you can actually divert (%)</label>
        <input
          id="avoided"
          type="number"
          min="0"
          max="100"
          step="5"
          value={avoidedPct}
          onChange={(e) => setAvoidedPct(e.target.value)}
        />

        <h2 className="section-title">Results</h2>
        <div className="result-grid">
          <div className="stat">
            <span className="value">{results.kg} kg</span>
            <span className="label">
              plastic in the stream ({results.items} items)
            </span>
          </div>
          <div className="stat">
            <span className="value">{results.diverted} kg</span>
            <span className="label">diverted from the environment</span>
          </div>
          <div className="stat">
            <span className="value">{results.co2} kg</span>
            <span className="label">CO₂-equivalent avoided</span>
          </div>
          <div className="stat">
            <span className="value">{results.oil} L</span>
            <span className="label">petroleum feedstock not consumed</span>
          </div>
          <div className="stat">
            <span className="value">≈ {results.equivalent} L</span>
            <span className="label">of diesel not burned</span>
          </div>
        </div>

        <div className="callout">
          <strong>How these numbers are estimated</strong>
          Diverted plastic avoids roughly {impactFactors.co2SavedPerKg} kg CO₂e per kg
          (order-of-magnitude lifecycle factors based on OECD and UNEP reporting) and
          represents about {impactFactors.oilLitresPerKg} litres of petroleum feedstock
          per kg. The CO₂ saved is then compared with{' '}
          {impactFactors.co2PerLitreDiesel} kg CO₂e per litre of diesel. These are
          teaching estimates for classroom use, not audited figures.
        </div>
      </div>
    </>
  );
}
