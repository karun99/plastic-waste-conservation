'use client';

import { useMemo, useState } from 'react';
import { caseStudies, tags } from '@/data/caseStudies';
import CaseStudyCard from '@/components/CaseStudyCard';

export default function CaseStudyExplorer() {
  const [tag, setTag] = useState('All');

  const visible = useMemo(
    () => (tag === 'All' ? caseStudies : caseStudies.filter((c) => c.tag === tag)),
    [tag]
  );

  return (
    <>
      <div className="filter-row" role="group" aria-label="Filter case studies by topic">
        {tags.map((t) => (
          <button
            key={t}
            className={`filter-btn ${t === tag ? 'active' : ''}`}
            onClick={() => setTag(t)}
            aria-pressed={t === tag}
          >
            {t}
          </button>
        ))}
      </div>

      <p className="meta">
        Showing {visible.length} of {caseStudies.length} case studies.
      </p>

      <div className="grid">
        {visible.map((c) => (
          <CaseStudyCard key={c.slug} study={c} />
        ))}
      </div>
    </>
  );
}
