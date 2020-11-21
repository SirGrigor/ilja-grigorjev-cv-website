import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Tab from "./components/mainBoard/DashboardTab";
import Card from "./components/mainBoard/CardAbout";

function App() {
    return (
        <div className="App">
            <div id="pBg">
                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 150,
                                density: {enable: true, value_area: 1000,}
                            },
                            move: {enable: true, speed: 6, direction: "none", random: true, bounce: true},
                            line_linked: {enable: true, distance: 150, color: "#000000", opacity: 0.4, width: 1},
                            color: "#ff0000"
                        },
                        background:{
                            color: "#11b0c9",
                        }
                        }

                    } />
            </div>
            <div className="App-info">
                <div className="App-header">
                    <p className="Header-content"><kbd>Grigorjev Ilja Portfolio</kbd></p>
                    <div className="About-me">
                        <Card/>
                    </div>
                </div>
                <div className="App-information">
                    <div className="App-content">
                        <Tab/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
