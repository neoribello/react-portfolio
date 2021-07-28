import React from 'react';
import Portfolio from '../Portfolio/Portfolio';
import Header from '../Header/Header';
import Skills from '../Skills/Skills';
import '../Home/Home.scss'

export default function Home(props) {
  return (
    <div className="homepage">
      <Header />
      <div className="background">
        <Skills />
        <Portfolio />
      </div>
    </div>
  );
}