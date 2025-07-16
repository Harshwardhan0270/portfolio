import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import BlogResume from "./BlogResume";
import Contact from "./Contact";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ErrorBoundary>
      <div className={darkMode ? "dark" : ""}>
        <Helmet>
          <title>Harshwardhan Sahu | Portfolio</title>
        </Helmet>

        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Home darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <BlogResume darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </div>
    </ErrorBoundary>
  );
};

export default App;
