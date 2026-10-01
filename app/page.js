import Link from 'next/link';
import { caseStudies } from '@/data/caseStudies';
import { problems } from '@/data/plastics';
import CaseStudyCard from '@/components/CaseStudyCard';

const modules = [
  { id: 'M1', title: 'Plastic Literacy', href: '/plastics', blurb: 'What plastic is, how it is prepared, and how long it lasts.' },
  { id: 'M2', title: 'Case Study Explorer', href: '/case-studies', blurb: 'Six real conservation projects, one page each.' },
  { id: 'M3', title: 'AI Tutor (Plastic Pal)', href: '/about', blurb: 'OpenRouter chatbot that answers questions in 3 bullets.' },
  { id: 'M4', title: 'Impact Calculator', href: '/calculator', blurb: 'Estimate the CO2 and oil saved by diverting plastic.' },
  { id: 'M5', title: 'Solution Matcher', href: '/solutions', blurb: 'Rule-based recommendations for your waste problem.' },
  { id: 'M6', title: 'Stakeholder Dashboard', href: '/dashboard', blurb: 'Who cares, what they need, and which module serves them.' }
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>♻️ Plastic Waste &amp; Its Conservation Strategy</h1>
        <p className="lede">
          A Class 9 student project by{' '}
          <strong>Kunda Subramanya Satyanarayana</strong>, St John&apos;s English Medium
          School, Satyanarayanapuram, Vijayawada.
        </p>
        <p>
          Plastics are synthetic polymers made from petrochemicals by polymerising
          monomers like ethylene and propylene. They are durable, cheap, and
          versatile — but they persist for 400–1000 years, break into
          microplastics, and contaminate soil, water, and the food chain.
        </p>
        <div className="btn-row">
          <Link href="/case-studies" className="btn">
            Explore the 6 Case Studies →
          </Link>
          <Link href="/plastics" className="btn secondary">
            Learn what plastic is
          </Link>
        </div>
      </section>

      <h2 className="section-title">Why Plastic Is a Problem</h2>
      <div className="grid">
        {problems.map((p) => (
          <div className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">The Six Modules</h2>
      <div className="grid">
        {modules.map((m) => (
          <div className="card" key={m.id}>
            <span className="tag">{m.id}</span>
            <h3>{m.title}</h3>
            <p className="meta">{m.blurb}</p>
            <Link href={m.href} className="btn">
              Open
            </Link>
          </div>
        ))}
      </div>

      <h2 className="section-title">Case Studies</h2>
      <p className="lede">
        Six real-world examples of plastic waste being turned into a resource — from a
        school in Assam to a microwave reactor in the USA.
      </p>
      <div className="grid">
        {caseStudies.map((c) => (
          <CaseStudyCard key={c.slug} study={c} />
        ))}
      </div>
    </>
  );
}
