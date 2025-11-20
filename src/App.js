import React, { useState, useMemo } from 'react';
import './App.css';
import firefrog from './images/firefrog.png';

function App() {
  const [activeSection, setActiveSection] = useState('main');

  // Generate stars. In theory only once per page load
  // useMemo is imported in and will be used to keep star position while on site
  const stars = useMemo(() => (
    [...Array(50)].map((_, i) => {
      const top = Math.random();
      const left = Math.random();
      const delay = Math.random();
      const size = 2 + Math.random() * 3;
      return (
        <div
          key={i}
          className="star"
          style={{
            '--star-top': top,
            '--star-left': left,
            '--star-delay': delay,
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: `${size / 2}px`,
          }}
        />
      );
    })
  ), []); // Empty dependency array


  return (
    <div className="App"> 
      <div className="starry-sky">
        {stars}
      </div>
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
              <li>My Art (come back please)</li>
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
              <p> I like frogs, I make art. That's all for now.</p>
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