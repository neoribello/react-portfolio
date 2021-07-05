import React from 'react'
import './Header.scss'

import Profile from '../../Assets/img/hero-img.png'

function Header(props) {
  return (
    <section className="header-container">
      <div className="seperator">
        <div className="profile">
          <img src={Profile} />
        </div>
      </div>
    </section>
  );
}

export default Header;