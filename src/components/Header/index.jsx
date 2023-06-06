import "./header.scss";

import {useEffect, useState} from "react";

import Nav from "../Nav/index";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`sticky-header ${isSticky ? 'animate' : 'header' }`}>
      <div className="container">
        <div className="logo">
          <a href="">
            <span>Marwan</span> Baz
          </a>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
