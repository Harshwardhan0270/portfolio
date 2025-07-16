import React, { useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['home', 'skills', 'projects', 'experience', 'contact'];

  return (
    <nav
      className={`fixed w-full top-0 z-50 flex items-center justify-between px-6 md:px-20 py-4 shadow-md transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* LOGO */}
      <a
        href="#home"
        className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:opacity-90 transition duration-300 whitespace-nowrap"
      >
        <span className="text-3xl">Harsh.</span>
      </a>

      {/* DESKTOP NAV LINKS */}
      <ul className="hidden sm:flex gap-6 text-sm font-semibold">
        {navLinks.slice(1).map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className="hover:text-blue-500 transition"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* RIGHT SIDE - DARK TOGGLE & MOBILE MENU BUTTON */}
      <div className="flex items-center gap-3">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-blue-500" />
          )}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl sm:hidden"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE NAV LINKS */}
      {isOpen && (
        <ul
          className="absolute top-20 right-6 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 space-y-3 sm:hidden z-40"
        >
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-semibold hover:text-blue-500 transition"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
