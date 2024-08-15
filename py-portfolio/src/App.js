import React from 'react';
import Background from './components/background'; // Corrected import
import './components/background.css'; // Keep the CSS import if you want to apply global styles
import NavBar from './components/navBar';
import Homepage from './components/homepage';
import About from './components/about';
import Education from './components/education';
import Projects from './components/project';
import Achievement from './components/achievement';
import Contact from './components/contact';  
import './App.css'; // Keep the CSS import if you want to apply global styles

function App() {
  return (
    <>
      <div className='App'>
          <NavBar />
          <Homepage />
          <About />
          <Education />
          <Projects />
          <Achievement />
          <Contact />
          <Background /> {/* Corrected comment syntax */}
      </div>
    </>
  );
}

export default App;