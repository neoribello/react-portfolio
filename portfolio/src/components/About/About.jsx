import React from 'react';
import './About.scss';
import ProfilePic from '../../Assets/img/profile-pic.png';

export default function About(props) {
  return (
    <section className="about-container">
      <div className="about-content">
        <img src={ProfilePic} alt="about-img"/>
          <div className="about-text">
            <h2>
              Let's get to work
            </h2>
            <p>
              A Vancouver based Web Developer. Just a regular guy who likes making things with web technologies. Proficient with HTML, CSS(SASS and POSTCSS), JavaScript and JS Frameworks, with knowledge of User Interface and Experience Design.
            </p>
          </div>
      </div>
    </section>
  );
}