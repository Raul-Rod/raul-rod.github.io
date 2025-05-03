import React, { useState } from 'react';
import ReactionGame from './components/ReactionGame';
import UnderConstruction from './components/UnderConstruction';
import TapRace from './components/TapRace';
import './App.css';


function App() {
  const [value, setValue] = useState(50);


  return (
    <div className="App">

      <header className="header">
        <h1>Raul Rodriguez</h1>
        <p>Guatemalan-Canadian Developer | Computer Science | Android, Web, Game Dev</p>
      </header>

      <section className="gamesection">
        <h1>Game Demo</h1>

        <UnderConstruction />

        <TapRace />

      </section>

      <section className="section">
        <h2>📫Contact</h2>
        <p>Email: raul.rodriguez.azurdia@gmail.com</p>
        <p>GitHub: <a href="https://github.com/Raul-Rod" target="_blank" rel="noopener noreferrer">https://github.com/Raul-Rod</a></p>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Raul Rodriguez</p>
      </footer>
    </div>
  );
}

export default App;
