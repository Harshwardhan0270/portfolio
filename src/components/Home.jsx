// src/components/Home.jsx
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import avatar from "../assets/avatar.jpg"; // ✅ Correct relative path

const Home = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`min-h-screen flex flex-col justify-center items-center text-center px-6 transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white"
          : "bg-gradient-to-b from-blue-100 via-white to-white text-gray-900"
      }`}
    >
      {/* Avatar */}
      <img
        src={avatar}
        alt="Harshwardhan"
        className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-xl mb-6 animate-fade-in hover:scale-105 transform transition duration-300"
      />

      {/* Name */}
      <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 animate-slide-in">
        Hi, I'm <span className="text-blue-500">Harshwardhan Sahu</span>
      </h1>

      {/* Typewriter */}
      <h2 className="text-xl sm:text-2xl mb-6 text-blue-400 font-medium animate-fade-in-slow">
        <Typewriter
          words={[
            "Full Stack Developer",
            "Open Source Enthusiast",
            "Tech Explorer",
            "AI Agent Builder",
          ]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>

      {/* Description */}
      <p className="max-w-2xl mb-8 text-base sm:text-lg leading-relaxed animate-fade-in-slow">
        🚀 I craft performant, scalable web apps and love blending technology with creativity. 
        I’m passionate about building AI-powered tools, multilingual bots, and beautiful interfaces.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in">
        <a
          href="/Harshwardhan_Sahu.pdf" // ✅ Ensure this path is correct
          download
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition"
        >
          📄 Download Resume
        </a>
        <a
          href="#contact"
          className={`px-6 py-3 ${
            darkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"
          } rounded-xl font-semibold shadow-md hover:opacity-90 hover:scale-105 transition`}
        >
          🚀 Hire Me
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-6 text-2xl animate-fade-in-slow">
        <a
          href="https://github.com/Harshwardhan0270"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/harshwardhansahu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:harshwardhansahu@gmail.com"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Home;
