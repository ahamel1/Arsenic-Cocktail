import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LegalPage from './components/LegalPage';
import About from './components/About';
import AlgoRandom from './components/AlgoRandom';

function App () {
  return (
    <div className='App'>
      <Router>
        <div className='navbar-position'>
          <NavBar />
        </div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/legal'>
            <LegalPage />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/folie'>
            <AlgoRandom />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
