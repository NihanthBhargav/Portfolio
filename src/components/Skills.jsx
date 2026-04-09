import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const { title, groups } = portfolioData.skills;

  return (
    <section id="skills">
      <h2 className="section-title">
        What I <span>Work With</span>
      </h2>
      <div className="skills-grid">
        {groups.map((group, i) => (
          <div key={i} className="skill-group fade-in">
            <div className="skill-group-title">{group.title}</div>
            <div className="skill-tags">
              {group.skills.map((skill, j) => (
                <span key={j} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
