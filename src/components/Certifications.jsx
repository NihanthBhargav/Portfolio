import { portfolioData } from "../data/portfolioData";

export default function Certifications() {
  const { title, list } = portfolioData.certifications;

  return (
    <section id="certifications">
      <h2 className="section-title">
        What I've <span>Earned</span>
      </h2>
      <div className="certs-grid">
        {list.map((cert, i) => (
          <div key={i} className="cert-card fade-in">
            <div className="cert-issuer">{cert.issuer}</div>
            <div className="cert-name">{cert.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
