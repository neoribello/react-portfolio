import React from 'react'
import './Header.scss'

import Mockup from '../../Assets/img/mockuper.png'

function Header(props) {
  return (
    <section className="header-container">
      <div className="seperator">
        <div className="profile">
          <img src={Mockup} className="mockup-img" alt="mockup" />
        </div>
      </div>
    </section>
  );
}

export default Header;