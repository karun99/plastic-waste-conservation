import { stakeholders } from '@/data/solutions';
import { caseStudies } from '@/data/caseStudies';

export const metadata = {
  title: 'Stakeholder Dashboard',
  description:
    'What each stakeholder group needs from a plastic conservation platform, and which module serves them.'
};

export default function DashboardPage() {
  const avg =
    stakeholders.reduce((sum, s) => sum + s.feedbackScore, 0) / stakeholders.length;

  return (
    <>
      <h1>📊 Stakeholder Dashboard (M6)</h1>
      <p className="lede">
        A static aggregation of who the platform serves, what each group actually
        needs, and which module answers it. No inference, no tracking — just an honest
        table.
      </p>

      <div className="result-grid">
        <div className="stat">
          <span className="value">{stakeholders.length}</span>
          <span className="label">stakeholder groups</span>
        </div>
        <div className="stat">
          <span className="value">{caseStudies.length}</span>
          <span className="label">case studies covered</span>
        </div>
        <div className="stat">
          <span className="value">{avg.toFixed(2)}/5</span>
          <span className="label">average feedback score</span>
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>Stakeholder</th>
              <th>What they care about</th>
              <th>What they need</th>
              <th>Module</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {stakeholders.map((s) => (
              <tr key={s.id}>
                <td>
                  {s.emoji} <strong>{s.group}</strong>
                </td>
                <td>{s.interest}</td>
                <td>{s.whatTheyNeed}</td>
                <td>{s.module}</td>
                <td>
                  {s.feedbackScore.toFixed(1)}/5
                  <br />
                  <span className="meta">n = {s.sampleSize}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="callout">
        <strong>Data honesty note</strong>
        Feedback scores come from a small, self-reported class-level survey and are
        included to show the dashboard layout. Treat them as illustrative, not as a
        representative study.
      </div>
    </>
  );
}
