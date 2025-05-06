import React, { useState } from 'react';
import ReactionGame from './components/ReactionGame';
import UnderConstruction from './components/UnderConstruction';
import TapRace from './components/TapRace';
import Container from "./components/Container";
import './App.css';


function App() {
  const [value, setValue] = useState(50);

  return (
    <div className="App">
      <Container>
       <header className="header">
         <h1>Raul Rodriguez</h1>
         <p>Guatemalan-Canadian | Computer Science graduate | Software Dev | Database management | Full-Stack Developer
         </p>
         </header>
        <section className="section">
          <div className="projects">
            <div className="project-card">
              <h3>About Me</h3>
              <p>loading ...</p>
              </div>
            <div className="project-card">
              <h3>SKILLS SUMMARY</h3>
              <p>loading ...</p>
              </div>
            <div className="project-card">
              <h3>APPLIED PROJECTS</h3>
              <p>loading ...</p>
              <p>GitHub: </p>
              <a href="https://github.com/Raul-Rod" target="_blank" rel="noopener noreferrer">
                https://github.com/Raul-Rod
                </a>
              <p>Website: </p>
              <a href="https://raul-rod.github.io/" target="_blank" rel="noopener noreferrer">
                https://raul-rod.github.io/
                </a>
            </div>
    </div>
  </section>
</Container>
      <Container>
        <div className="project-card">
          <UnderConstruction />
          </div>
        <div className="project-card">
          <TapRace />
          </div>
        <section className="section">
          <h2>📫Contact</h2>
          <p>Email: raul.rodriguez.azurdia@gmail.com</p>
          </section>
      <footer className="footer">
        <p>&copy; 2025 Raul Rodriguez</p>
        </footer>
        </Container>
    </div>
  );
}
export default App;
