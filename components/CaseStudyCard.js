import Link from 'next/link';

export default function CaseStudyCard({ study }) {
  return (
    <article className="card">
      <span className="tag">{study.tag}</span>
      <h3>
        {study.emoji} {study.title}
      </h3>
      <p className="meta">📍 {study.place}</p>
      <p>{study.summary}</p>
      <Link href={`/case-studies/${study.slug}`} className="btn">
        Read Case Study →
      </Link>
    </article>
  );
}
