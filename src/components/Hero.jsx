import { portfolioData } from "../data/portfolioData";
import AnimatedDeveloper from "./AnimatedDeveloper";

export default function Hero() {
  const { tag, name, subtitle, bio, buttons } = portfolioData.hero;

  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="hero-wrapper">
        <div className="hero-content">
        <div className="hero-tag">{tag}</div>
        <h1 className="hero-name">{name}</h1>
        <p className="hero-sub">{subtitle}</p>
        <p className="hero-bio">{bio}</p>
        <div className="hero-btns">
          {buttons.map((btn, i) => (
            <a
              key={i}
              href={btn.href}
              className={btn.type === "primary" ? "btn-primary" : "btn-outline"}
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>
        <AnimatedDeveloper />
      </div>
    </section>
  );
}
