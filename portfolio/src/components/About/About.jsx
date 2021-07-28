import React from 'react';
import './About.scss';
import ProfilePic from '../../Assets/img/profile-pic.png';

export default function About(props) {
  return (
    <section className="about-container">
      <div className="about-content">
        <h2>Hi I'm Neil, lets get to work</h2>
        <img src={ProfilePic} alt="about-img"/>
          <p>I'm Neil Oribello, a Vancouver based Web Developer. Just a regular guy who likes making weird things with web technologies. Proficient with HTML, CSS(SASS and POSTCSS), JavaScript and JS Frameworks, with knowledge of User Interface and Experience Design.</p>
      </div>
    </section>
  );
}