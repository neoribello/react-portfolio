import React from 'react';
import Portfolio from '../Portfolio/Portfolio';
import Header from '../Header/Header';
import '../Home/Home.scss'

export default function Home(props) {
  return (
    <div className="homepage">
      <Header />
      <Portfolio />
    </div>
  );
}