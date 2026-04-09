import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const { title, list } = portfolioData.projects;

  return (
    <section id="projects">
      <h2 className="section-title">
        Things I've <span>Built</span>
      </h2>
      <div className="projects-grid">
        {list.map((project, i) => (
          <div key={i} className="project-card fade-in">
            <div className="project-num">PROJECT {project.num}</div>
            <div className="project-title">{project.title}</div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, j) => (
                <span key={j} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.github} className="project-link">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
