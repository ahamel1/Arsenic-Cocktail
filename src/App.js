import React from 'react';
import AlgoRandom from './components/AlgoRandom';
import NavBar from './components/NavBar';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

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
