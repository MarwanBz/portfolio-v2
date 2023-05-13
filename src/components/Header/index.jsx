import './header.scss'

import Nav from '../Nav/index'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="">
            <span>Marwan</span> Baz
          </a>
        </div>
        <Nav/>
        
      </div>
    </header>
  );

}

export default Header;