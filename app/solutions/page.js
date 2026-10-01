'use client';

import { useState } from 'react';
import Link from 'next/link';
import { problems, matchSolutions } from '@/data/solutions';

export default function SolutionsPage() {
  const [selected, setSelected] = useState(problems[0].id);
  const problem = problems.find((p) => p.id === selected);
  const matches = matchSolutions(selected, 3);

  return (
    <>
      <h1>🎯 Solution Matcher (M5)</h1>
      <p className="lede">
        Pick the waste problem closest to yours and the matcher ranks the best
        conservation strategies using a transparent scoring table. Rule-based, so it
        costs nothing to run and never invents an answer.
      </p>

      <div className="hero">
        <label htmlFor="problem">Which problem are you solving?</label>
        <select
          id="problem"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {problems.map((p) => (
            <option key={p.id} value={p.id}>
              {p.title}
            </option>
          ))}
        </select>

        <div className="callout">
          <strong>{problem.title}</strong>
          <p style={{ margin: '0.25rem 0' }}>Typical examples: {problem.example}</p>
          <p className="meta" style={{ margin: 0 }}>
            Main stakeholders: {problem.who} · typical volume: {problem.volume}
          </p>
        </div>
      </div>

      <h2 className="section-title">Recommended strategies</h2>
      <div className="grid">
        {matches.map((m) => (
          <article className="card" key={m.id}>
            <span className="tag">Match {m.matchScore}/10</span>
            <h3>
              {m.emoji} {m.title}
            </h3>
            <p>{m.tagline}</p>
            <ul className="pill-row">
              <li className="pill">Effort: {m.effort}</li>
              <li className="pill">Cost: {m.cost}</li>
              <li className="pill">Carbon: {m.carbon}</li>
            </ul>
            <div className="bar" aria-hidden="true">
              <span style={{ width: `${m.matchScore * 10}%` }} />
            </div>
            {m.caseStudy && (
              <Link href={`/case-studies/${m.caseStudy}`} className="btn">
                See the real example
              </Link>
            )}
          </article>
        ))}
      </div>

      <h2 className="section-title">How the matching works</h2>
      <p>
        Every solution carries a 0–10 score for each problem type in{' '}
        <code>data/solutions.js</code>. The matcher sorts those scores and returns the top
        three. Nothing is guessed, and you can audit or edit the table yourself.
      </p>
    </>
  );
}
