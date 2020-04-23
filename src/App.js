import React from 'react';
import AlgoRandom from './components/AlgoRandom';
import NavBar from './components/NavBar';

function App() {
    return (
      <div className="App">
        <div class="navbar-position">
          <NavBar />
        </div>
        <AlgoRandom />
      </div>
    );

}

export default App;
