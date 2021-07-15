import React from 'react'
import './Header.scss'

import Mockup from '../../Assets/img/mockuper.png'

function Header(props) {
  return (
    <section className="header-container">
      <div className="seperator">
        <div className="profile">
          <div className="profile-description">
            <h1>Hi I'm Neil, lets get to work</h1>
          </div>
          <div className="profile-mockup">
            <img src={Mockup} className="mockup-img" alt="mockup" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;