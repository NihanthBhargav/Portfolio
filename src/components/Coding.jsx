import { portfolioData } from "../data/portfolioData";

export default function Coding() {
  const { title, profiles } = portfolioData.coding;

  return (
    <section id="coding">
      <div className="section-label">06 / Coding Profiles</div>
      <h2 className="section-title">
        Where I <span>Practice</span>
      </h2>
      <div className="coding-grid">
        {profiles.map((profile, i) => (
          <div key={i} className="coding-card fade-in">
            <div className="coding-platform">
              <span className="coding-dot"></span> {profile.platform}
            </div>
            <p className="coding-detail">{profile.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
