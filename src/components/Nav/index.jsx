import "./nav.scss";

import { useRef, useState } from "react";

function Nav() {
  const [navSlide, setNavSlide] = useState(false)
  const navLinkss = [
    { name: "Home", href: "#home", className: "home active" },
    { name: "About", href: "#services", className: "services" },
    { name: "Portfolio", href: "#portfolio", className: "portfolio" },
    { name: "Contact", href: "#contact", className: "contact" },
  ];
    const NavRef= useRef()
    const navLinks= useRef()
    
    function handleNav() {
      
        setNavSlide(!navSlide)
      console.log(navSlide);
      // burger.classList.toggle("toggle");
      // navLinks.map((link,index)=>{
        //   console.log(link,index)
        // })
        // links animation fade
        // navLinks.forEach((link, index) => {
          //   if (link.style.animation) {
            //     link.style.animation = "";
            //   } else {
              //     link.style.animation = `navLinkFade 0.5s ease forwards ${
                //       index / 7 + 0.5
                //     }s`;
  //   }
  // })
  console.log("mmm");
}

  return (
    <div>
      <nav className="nav">
        <ul className={`nav-links ${navSlide ? "nav-active" : ""}`}>
          {navLinkss.map((link) => (
            <li
              key={link.name}
              className={`${link.className} ${navSlide ? "open" : "close"}`}
            >
              <a className={link.className} href={link.href}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="burger" onClick={handleNav} ref={NavRef}>
          <div className={navSlide ? "line1" : ""}></div>
          <div className={navSlide ? "line2" : ""}></div>
          <div className={navSlide ? "line3" : ""}></div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

// burger.addEventListener("click", () => {
//   nav.classList.toggle("nav-active");

  // burger.classList.toggle("toggle");
  // // links animation fade
  // navLinks.forEach((link, index) => {
  //   if (link.style.animation) {
  //     link.style.animation = "";
  //   } else {
  //     link.style.animation = `navLinkFade 0.5s ease forwards ${
  //       index / 7 + 0.5
  //     }s`;
  //   }
//   });
// });