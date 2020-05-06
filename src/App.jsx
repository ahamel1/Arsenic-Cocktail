import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import LegalPage from './components/LegalPage';
import About from './components/About';
import AlgoRandom from './components/AlgoRandom';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar-position">
          <NavBar />
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/legal">
            <LegalPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/folie">
            <AlgoRandom title="LA FOLIE" className="algoRandom container" />
          </Route>
          <Route path="/alcool">
            <AlgoRandom
              title="ALCOOL"
              className="algoAlcool container"
              cursor
            />
          </Route>
          <Route path="/soft">
            <AlgoRandom
              title="SANS ALCOOL"
              className="algoSoft container"
              cursor
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
