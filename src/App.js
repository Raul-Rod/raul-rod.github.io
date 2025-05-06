import React, { useState } from 'react';
import JumpGame from './components/JumpGame';
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
         <p>Guatemalan-Canadian | Computer Science graduate </p>
         <p>Software Dev | Game Dev | Full-Stack Dev</p>
         </header>
        <section className="section">
          <div className="projects">
            <div className="project-card">
              <h3>About Me</h3>
              <p>Results-driven Computer Science graduate with a strong foundation in software development, 
                database management, and web technologies. Skilled in Java, C++, Python, JavaScript, Android development, 
                React, Node.js, GitHub and Godot. Experienced in full-stack development, 
                object-oriented programming, and version control with Git. Passionate about problem-solving, 
                optimizing system performance, and collaborating in agile development environments. 
                Bilingual in English and Spanish.</p>
              </div>
            <div className="projects2C">
              <div class="column">
                <div className="project-card">
                  <h3>Technical Skills</h3>
                  <p>Programming Languages: Java, C++, C, Python, JavaScript, HTML, Android Development, Godot and React</p>
                  <p>Database Management: MS Excel, SQL, PostgreSQL</p>
                  <p>Software: Microsoft Office Suite (Word, Excel and PowerPoint)</p>
                  <p>Frameworks & Tools: Git, Godot, Android SDK, MySQL</p>
                  <p>Operating Systems: Windows, Linux</p>
                </div>
              </div>

              <div class="column">
                <div className="project-card">
                  <h3>Soft Skills</h3>
                  <p>Strong problem-solving and analytical skills</p>
                  <p>Excellent time management and multitasking abilities</p>
                  <p>Team player with leadership experience</p>
                  <p>Effective verbal and written communication</p>
                  <p>Adaptability and willingness to learn new technologies </p>
                </div>
              </div> 

            </div>
            <div className="project-card">
              <h3>APPLIED PROJECTS</h3>
              <p>Android Game App – Developed an Android game application (APK) with Godot game engine.</p>
              <p>Website Design – Designed and built a responsive React Website site using HTML, CSS, JavaScript through GitHub pages.</p>
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
          <JumpGame />
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
