import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { title, subtitle, links } = portfolioData.contact;

  return (
    <section id="contact">
      <h2 className="section-title">
        Let's <span>Connect</span>
      </h2>
      <p className="contact-sub">{subtitle}</p>
      <div className="contact-links">
        {links.map((link, i) => (
          <a key={i} href={link.href} className="contact-link">
            {link.icon} {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
