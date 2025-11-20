import React, { useState, useMemo } from 'react';
import './App.css';
import firefrog from './images/firefrog.png';

//traditional
import capture from './art/traditional/Capture.PNG';
import dia from './art/traditional/dia.PNG';
import diza from './art/traditional/diza.PNG';
import kipterris from './art/traditional/kipterris.PNG';
import miette from './art/traditional/miette.PNG';

//digital
import image0 from './art/digital/image0.png';
import fin from './art/digital/fin.PNG';
import image2 from './art/digital/image2.jpg';
import image3 from './art/digital/image3.png';

function App() {
  const [activeSection, setActiveSection] = useState('main');
  const [artCategory, setArtCategory] = useState(null);

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
        <div
          className={
            "turquoise-box" +
            ((activeSection === "art" && (artCategory === "traditional" || artCategory === "digital"))
              ? " expanded"
              : "")
          }
        >
            {activeSection === 'main' && (
            <div>
              <h2 style={{ textAlign: "center", marginTop: 0, marginBottom: "24px" }}>Ribbit</h2>
              <ul className="main-list">
                <li>
                  <a href="https://www.etsy.com/shop/TheArcaneSkein">
                    Etsy
                  </a>
                </li>
                <li>
                  <button
                    className="link-button"
                    onClick={() => {
                      setActiveSection('art');
                      setArtCategory(null); // Reset category when entering art section
                    }}
                    style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: 0, font: 'inherit' }}
                  >
                    My Art
                  </button>
                </li>
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
            </div>
          )}
          {activeSection === "about" && (
            <div>
              <h2>About Me:</h2>
              <p> Hello, I am an artist and crafter, and I hope to make a small prtfolio of all my work here soon.</p>
              <button
                className="link-button"
                onClick={() => setActiveSection('main')}
                style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: 0, font: 'inherit' }}
              >
                ^ Back
              </button>
            </div>
          )}

          {activeSection === "art" && artCategory === null && (
            <div>
              <h2>Choose an Art Category:</h2>
              <ul className="main-list">
                <li>
                  <button className="link-button" onClick={() => setArtCategory('traditional')}>Traditional</button>
                </li>
                <li>
                  <button className="link-button" onClick={() => setArtCategory('digital')}>Digital</button>
                </li>
                <li>
                  <button className="link-button" onClick={() => setArtCategory('crochet')}>Crochet</button>
                </li>
              </ul>
              <button
                className="link-button"
                onClick={() => setActiveSection('main')}
                style={{ marginTop: "16px", background: "none", border: "none", color: "inherit", cursor: "pointer", padding: 0, font: 'inherit' }}
              >
                ^ Back
              </button>
            </div>
          )}

          {activeSection === "art" && artCategory && (
            <div style={{display: "flex", flexDirection: "column", height: "100%"}}>
              <h2>{artCategory.charAt(0).toUpperCase() + artCategory.slice(1)} Art</h2>
              <div className="art-grid large-art-grid" style={{flex: 1}}>
                {artCategory === "traditional" && (
                  <>
                    <img src={capture} alt="Capture" className="art-image-large" />
                    <img src={dia} alt="dia" className="art-image-large" />
                    <img src={diza} alt="diza" className="art-image-large" />
                    <img src={kipterris} alt="kipterris" className="art-image-large" />
                    <img src={miette} alt="miette" className="art-image-large" />
                  </>
                )}
                {artCategory === "digital" && (
                  <>
                    <img src={fin} alt="fin" className="art-image-large" />
                    <img src={image0} alt="image0" className="art-image-large" />
                    <img src={image2} alt="image2" className="art-image-large" />
                    <img src={image3} alt="image3" className="art-image-large" />
                  </>
                )}
                {artCategory === "crochet" && (
                  <p>(crochet frogs to be added soon)</p>
                )}
              </div>
              <button
                className="link-button"
                onClick={() => setArtCategory(null)}
                style={{
                  marginTop: "18px",
                  background: "none",
                  border: "none",
                  color: "inherit",
                  cursor: "pointer",
                  padding: 0,
                  font: 'inherit',
                  alignSelf: "flex-end"
                }}
              >
                ^ Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;