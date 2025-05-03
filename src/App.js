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
          <h4>Technical Skills</h4><h4>   </h4><h4>Soft Skills</h4>
          <li>Programming Languages: Java, C++, C, Python, JavaScript, HTML, Android Development, Godot and React</li><p>   </p><li>Strong problem-solving and analytical skills</li>
          <li>Database Management: MS Excel, SQL and PostgreSQL</li><p>   </p><li>Excellent time management and multitasking abilities</li>
          <li>Software: Microsoft Office Suite (Word,Excel and PowerPoint)</li><p>   </p><li>Team player with leadership experie</li>
          <li>Frameworks & Tools: Git, Godot, Android SDK and MySQL</li><p>   </p><li>Effective verbal and written communication</li>
          <li>Operating Systems: Windows, Linux</li><p>   </p><li>Adaptability and willingness to learn new technologies</li>
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
