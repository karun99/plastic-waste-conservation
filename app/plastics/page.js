import { polymers, problems } from '@/data/plastics';

export const metadata = {
  title: 'Plastic Literacy',
  description:
    'What plastic is, how common polymers are prepared, and why they are a problem.'
};

export default function PlasticsPage() {
  return (
    <>
      <h1>🔬 Plastic Literacy</h1>
      <p className="lede">
        Plastic is not found in nature — it is engineered. Almost every plastic item
        begins as crude oil or natural gas, is cracked into small molecules called
        monomers, and is then joined into long chains called polymers.
      </p>

      <div className="callout">
        <strong>The four-step journey of a plastic bottle</strong>
        Crude oil or natural gas → steam cracking into small hydrocarbons →
        purification into monomers (like ethylene) → addition polymerisation into
        long chains → shaping into a product.
      </div>

      <h2 className="section-title">Common Polymers</h2>
      <p>
        Each polymer family behaves differently, so the recycling symbol on a product
        matters more than the word &ldquo;plastic&rdquo;.
      </p>
      <div style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>Polymer</th>
              <th>Monomer</th>
              <th>How it is made</th>
              <th>Typical uses</th>
              <th>Recyclability</th>
            </tr>
          </thead>
          <tbody>
            {polymers.map((p) => (
              <tr key={p.name}>
                <td>
                  <strong>{p.name}</strong>
                  <br />
                  <span className="meta">density {p.density}</span>
                </td>
                <td>{p.monomer}</td>
                <td>
                  {p.process}
                  <br />
                  <span className="meta">source: {p.source}</span>
                </td>
                <td>{p.uses}</td>
                <td>{p.recycling}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="section-title">How Long Does Plastic Last?</h2>
      <div className="grid">
        {polymers.map((p) => (
          <div className="card" key={p.name}>
            <h3>{p.name}</h3>
            <p className="meta">Lifespan estimate</p>
            <p>{p.life}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Six Reasons This Became a Crisis</h2>
      <div className="grid">
        {problems.map((p) => (
          <div className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>

      <div className="callout">
        <strong>Key takeaway</strong>
        Plastic does not biodegrade — it fragments. A 500-year problem cannot be
        solved by waiting, only by using less, using better, and recovering what is
        already made.
      </div>
    </>
  );
}
