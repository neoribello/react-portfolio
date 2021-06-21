import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.scss'

function Header({ active }) {
  return (
    <div className="header">
      <ul className="header-links__container">
        <div className="header-home">
          <Link to='/'>
            <li className={active === 'home' && 'header-home__active'}>Home</li>
          </Link>
        </div>
        <div className="header-links">
          <Link to='/portfolio'>
            <li className={active === 'portfolio' && 'header-portfolio__active'}>Portfolio</li>
          </Link>
          <Link to='/about'>
            <li className={active === 'about' && 'header-about__active'}>About</li>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Header;