import { portfolioData } from "../data/portfolioData";
import AnimatedLogo from "./AnimatedLogo";

export default function Navbar() {
  return (
    <nav>
      <AnimatedLogo />
      <ul className="nav-links">
        {portfolioData.nav.links.map((link, i) => (
          <li key={i}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
