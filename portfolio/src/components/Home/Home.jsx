import React from 'react';
import Portfolio from '../Portfolio/Portfolio';
import Header from '../Header/Header';
import Skills from '../Skills/Skills';
import About from '../About/About';
import Contact from '../Contact/Contact';
import '../Home/Home.scss'

export default function Home(props) {
  return (
    <div className="homepage">
      <Header />
      <About />
      <div className="background">
        <Skills />
        <Portfolio />
      </div>
      <Contact />
    </div>
  );
}