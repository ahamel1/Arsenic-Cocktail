import React from 'react';
import AlgoRandom from './components/AlgoRandom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (

      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    
    )
  }

export default App;
