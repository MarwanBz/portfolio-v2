import "./nav.scss";

import { useState } from "react";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", className: "home active" },
    { name: "About", href: "#services", className: "services" },
    { name: "Portfolio", href: "#portfolio", className: "portfolio" },
    { name: "Contact", href: "#contact", className: "contact" },
  ];
  function handleNav() {
    setNavOpen(!navOpen);
  }

  return (
    <div>
      <nav className="nav">
        <ul className={`nav-links ${navOpen ? "nav-active" : ""}`}>
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`${link.className} ${navOpen ? "open" : "close"}`}
            >
              <a className={link.className} href={link.href}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="burger" onClick={handleNav}>
          <div className={navOpen ? "line1" : ""}></div>
          <div className={navOpen ? "line2" : ""}></div>
          <div className={navOpen ? "line3" : ""}></div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;