import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './Navigation.scss'

function Navigation({ active }) {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
      setScroll(window.pageYOffset > 50)
      );
    }
  }, []);

  return (
    <div className={`navigation ${scroll ? "scroll" : ""}`}>
      <ul className="navigation-links__container">
        <div className="navigation-home">
          <Link to='/'>
            <li className="nav-link">Home</li>
          </Link>
        </div>
        <div className="navigation-links">
          <Link to='/portfolio'>
            <li className="nav-link">Portfolio</li>
          </Link>
          <Link to='/about'>
            <li className="nav-link">About</li>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Navigation;