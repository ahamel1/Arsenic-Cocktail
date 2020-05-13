import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useMediaPredicate } from 'react-media-hook';
import Home from './components/Home';
import NavBar from './components/NavBar';
import LegalPage from './components/LegalPage';
import About from './components/About';
import AlgoRandom from './components/AlgoRandom';
import Favori from './components/Favori';
import HomeMobile from './components/HomeMobile';

function App() {
  const biggerThan920 = useMediaPredicate('(min-width: 920px)');
  return (
    <div className="App">
      <Router>
        <div className="navbar-position">
          <NavBar />
        </div>
        <Switch>
          <Route exact path="/">
            {biggerThan920 ? <Home /> : <HomeMobile />}
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
              stateAlcool="Yes"
              cursorAlcool
              cursorSoft
            />
          </Route>
          <Route path="/soft">
            <AlgoRandom
              title="SANS ALCOOL"
              className="algoSoft container"
              stateAlcool="No"
              cursorSoft
            />
          </Route>
          <Route path="/favori" component={Favori} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
