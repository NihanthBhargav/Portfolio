import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const { title, list } = portfolioData.experience;

  return (
    <section id="experience">
      <h2 className="section-title">
        Where I've <span>Worked</span>
      </h2>
      <div className="exp-list">
        {list.map((exp, i) => (
          <div key={i} className="exp-card fade-in">
            <div>
              <div className="exp-role">{exp.role}</div>
              <div className="exp-company">{exp.company}</div>
            </div>
            <div className="exp-badge">{exp.badge}</div>
            <div className="exp-desc">{exp.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
