import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Tab from "./components/mainBoard/DashboardTab";
import Card from "./components/mainBoard/CardAbout";

function App() {
  return (
      <div className="App">
        <div id = "pBg"><Particles
            params={{
              "particles": {
                "number": {
                  "value": 110
                },
                "size": {
                  "value": 3
                }
              },
              "interactivity": {
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "repulse"
                  }
                }
              }
            }}/>
        </div>
        <div className="App-info">
          <div className="App-header">
            <p className="Header-content" ><kbd>Grigorjev Ilja Portfolio</kbd></p>
            <div className="About-me">
              <Card />
            </div>
          </div>
          <div className="App-information">
            <div className="App-content">
              <Tab />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
