import React, { useState } from 'react';
import './App.css';
import firefrog from './images/firefrog.png';

function App() {
  const [activeSection, setActiveSection] = useState('main');

  return (
    <div className="App"> 
      <div className="center-stack">
        <a 
          href="https://allaboutfrogs.org/funstuff/randomfrog.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none"}}
        >
          <div className="profile-circle">
            <img src={firefrog} alt="Firefrog.png" className="profile-image" />
          </div>
        </a>
        <div className="connecting-line"></div>
        <div className="turquoise-box">
          {activeSection === 'main' && (
            <ul className="main-list">
              <li>
                <a href="https://www.etsy.com/shop/TheArcaneSkein">
                  Etsy
                </a>
              </li>
              <li>Socials</li>
              <li>My Art</li>
              <li>C:</li>
              <li>
                <button
                  className="link-button"
                  onClick={() => setActiveSection('about')}
                  style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: 0, font: 'inherit' }}
                >
                  About Me
                </button>
              </li>
            </ul>
          )}
          {activeSection === "about" && (
            <div>
              <h2>About Me:</h2>
              <p> I'm Kip and I like making stuff! 
                I draw, crochet, code, and love frogs</p>
              <button
                className="link-button"
                onClick={() => setActiveSection('main')}
                style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: 0, font: 'inherit' }}
              >
                ^ back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;