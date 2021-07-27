import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation.jsx';
import Home from './components/Home/Home.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import About from './components/About/About.jsx';

import {library} from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon]);

library.add(...iconList);

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" active="home" exact component={Home} />
          <Route path="/portfolio" active="home" exact component={Portfolio} />
          <Route path="/projects/:projectId" active="portfolio" component={ProjectDetails} />
          <Route path="/about" active="about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
