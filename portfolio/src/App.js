import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import About from './components/About/About.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" active="home" exact component={Portfolio} />
          <Route path="/" component={ProjectDetails} />
          <Route path="/portfolio/:projectId" active="portfolio" component={Portfolio} />
          <Route path="/about" active="about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
