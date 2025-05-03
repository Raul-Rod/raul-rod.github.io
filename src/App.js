import React, { useState } from 'react';
import Gauge from './components/Gauge';
import ReactionGame from './components/ReactionGame';
import UnderConstruction from './components/UnderConstruction';
import './App.css';


function App() {
  const [value, setValue] = useState(50);


  return (
    <div className="App">
      <header className="header">
        <h1>Raul Rodriguez</h1>
        <p>Guatemalan-Canadian Developer | Computer Science | Android, Web, Game Dev</p>
      </header>

      <h1>Interactive Gauge</h1>
      <Gauge value={value} />
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        style={{ width: '200px', marginTop: '1rem' }}
      />
      <h1>Reaction Time Game</h1>
      <ReactionGame />
      
      <UnderConstruction />
      


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
