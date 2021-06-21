import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.scss'

function Header(props) {
  return (
    <div className="header">
      <ul className="header-links__container">
        <div className="header-home">
          Home
        </div>
        <div className="header-links">
          <Link to='/portfolio'>
            <li className="header-links__items">Portfolio</li>
          </Link>
          <Link to='/about'>
            <li className="header-links__items">About</li>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Header;