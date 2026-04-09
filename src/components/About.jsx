import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { title, paragraphs, stats } = portfolioData.about;

  return (
    <section id="about">
      <h2 className="section-title">
        Who I <span>Am</span>
      </h2>
      <div className="about-text">
        {paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </section>
  );
}
