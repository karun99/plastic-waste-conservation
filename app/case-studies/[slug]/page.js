import Link from 'next/link';
import { caseStudies, getCaseStudy } from '@/data/caseStudies';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const study = getCaseStudy(params.slug);
  if (!study) return { title: 'Case Study not found' };
  return {
    title: study.title,
    description: study.summary
  };
}

export default function CaseStudyPage({ params }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const index = caseStudies.findIndex((c) => c.slug === study.slug);
  const prev = caseStudies[index - 1];
  const next = caseStudies[index + 1];

  return (
    <>
      <article className="hero">
        <span className="tag">{study.tag}</span>
        <h1>
          {study.emoji} {study.title}
        </h1>
        <p className="meta">
          📍 {study.place} {study.year ? ` · Since ${study.year}` : ''}
        </p>

        <p>{study.summary}</p>

        <h2>Key Details</h2>
        <ul>
          {study.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>

        {study.links?.length > 0 && (
          <>
            <h2>Sources</h2>
            <ul className="pill-row">
              {study.links.map((l) => (
                <li key={l.url}>
                  <a className="pill" href={l.url} target="_blank" rel="noreferrer noopener">
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="callout">
          <strong>💡 Lesson Learned</strong>
          {study.lesson}
        </div>

        <div className="btn-row">
          {prev && (
            <Link href={`/case-studies/${prev.slug}`} className="btn secondary">
              ← {prev.title}
            </Link>
          )}
          {next && (
            <Link href={`/case-studies/${next.slug}`} className="btn secondary">
              {next.title} →
            </Link>
          )}
          <Link href="/case-studies" className="btn">
            All case studies
          </Link>
        </div>
      </article>
    </>
  );
}
