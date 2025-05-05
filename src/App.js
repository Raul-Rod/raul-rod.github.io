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
        <p>Guatemalan-Canadian | 
          Computer Science graduate | 
          Software Dev | 
          Database management | 
          Full-Stack Developer
          </p>
      </header>
      
      <div className="project-card">
        <h1>Test</h1>
        <p>Made this change from my phone!</p>
      </div>
      
      <section className="section">
        <div className="projects">
          <div className="project-card">
            <h3>About Me</h3>
            <p>Results-driven Computer Science graduate with a strong foundation in software development,
          database management, and web technologies. Skilled in Java, C++, Python, JavaScript, Android
          development, React, Node.js, GitHub and Godot. Experienced in full-stack development, objectoriented programming, and version control with Git. Passionate about problem-solving, optimizing
          system performance, and collaborating in agile development environments. Bilingual in English and
          Spanish.</p>
          </div>

          <div className="project-card">
          <h3>SKILLS SUMMARY</h3>
          <p>Technical Skills
• Programming Languages: Java, C++, C,
Python, JavaScript, HTML, Android
Development, Godot and React
• Database Management: MS Excel, SQL,
PostgreSQL
• Software: Microsoft Office Suite (Word,
Excel and PowerPoint)
• Frameworks & Tools: Git, Godot,
Android SDK, MySQL
• Operating Systems: Windows, Linux
Soft Skills
• Strong problem-solving and analytical
skills
• Excellent time management and
multitasking abilities
• Team player with leadership experience
• Effective verbal and written
communication
• Adaptability and willingness to learn new
technologies
</p>
          </div>

          <div className="project-card">
            <h3>APPLIED PROJECTS</h3>
            <p>Android Game App: Developed an Android game application (APK) with Godot game engine.
Website Design: Designed and built a responsive React Website site using HTML, CSS, JavaScript
through GitHub pages.</p>
            <p>GitHub: https://github.com/Raul-Rod</p>
            <p>Website: https://raul-rod.github.io/</p>
          </div>

          <div className="project-card">
            <UnderConstruction />
          </div>

          <div className="project-card">
            <TapRace />
          </div>
          
        </div>
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
