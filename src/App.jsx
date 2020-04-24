import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
      <div className='App'>
        <Router>
          <div className='navbar-position'>
            <NavBar />
          </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
