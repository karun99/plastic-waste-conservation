export const metadata = {
  title: 'About',
  description:
    'About this project: Plastic Waste & Its Conservation Strategy by Kunda Subramanya Satyanarayana.'
};

const modules = [
  { id: 'M1', name: 'Plastic Literacy', ai: 'None (static)' },
  { id: 'M2', name: 'Case Study Explorer', ai: 'None (static)' },
  { id: 'M3', name: 'AI Chatbot (Plastic Pal)', ai: 'Minimal, edge, cached' },
  { id: 'M4', name: 'Impact Calculator', ai: 'None (client-side maths)' },
  { id: 'M5', name: 'Solution Matcher', ai: 'None (rule-based)' },
  { id: 'M6', name: 'Stakeholder Dashboard', ai: 'Aggregation only' }
];

const stack = [
  'Next.js 14 (App Router)',
  'OpenRouter AI (chatbot "Plastic Pal")',
  'Deployable on Vercel and Netlify',
  'Green computing: edge runtime, small prompts, cached responses'
];

export default function About() {
  return (
    <article className="hero">
      <h1>About This Project</h1>
      <ul>
        <li>
          <strong>Project Title:</strong> Plastic Waste and Its Conservation Strategy
        </li>
        <li>
          <strong>Author:</strong> Kunda Subramanya Satyanarayana
        </li>
        <li>
          <strong>Class:</strong> 9
        </li>
        <li>
          <strong>School:</strong> St John&apos;s English Medium School,
          Satyanarayanapuram, Vijayawada
        </li>
        <li>
          <strong>Event:</strong> Pan India Hackathon Submission
        </li>
        <li>
          <strong>License:</strong> MIT
        </li>
      </ul>

      <h2>Tech Stack</h2>
      <ul>
        {stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <h2>Modules</h2>
      <div style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Module</th>
              <th>AI usage</th>
            </tr>
          </thead>
          <tbody>
            {modules.map((m) => (
              <tr key={m.id}>
                <td>{m.id}</td>
                <td>{m.name}</td>
                <td>{m.ai}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Green Computing Choices</h2>
      <ul>
        <li>Only one module (M3) calls an LLM — the other five are pure JavaScript.</li>
        <li>The chatbot runs on the Edge runtime and uses a small, fast model.</li>
        <li>max_tokens is capped at 220 to keep inference short and cheap.</li>
        <li>Repeated questions are served from a 30-minute in-process cache.</li>
        <li>Every case study is statically generated at build time.</li>
      </ul>

      <h2>Reuse This Project</h2>
      <p>
        The MIT license means you may use, modify, and redistribute this project
        commercially. If you do, please keep the credit line to the original author.
        The easiest things to fork are the case-study data in{' '}
        <code>data/caseStudies.js</code> and the scoring table in{' '}
        <code>data/solutions.js</code>.
      </p>
    </article>
  );
}
