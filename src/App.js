import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import BlogResume from './components/BlogResume'
import Contact from './components/Contact';
import './index.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Helmet>
        <title>Harshwardhan Sahu | Portfolio</title>
        <meta name="description" content="Portfolio of Harshwardhan Sahu - Full Stack Developer and AI Enthusiast." />
      </Helmet>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <BlogResume darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
};

export default App;
