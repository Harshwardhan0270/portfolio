import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'AI Travel Planner',
    description: 'Personalized itinerary planner using Streamlit, Gemini API, RapidAPI, and Folium Maps.',
    link: 'https://github.com/Harshwardhan0270/Travel-Planner',
  },
  {
    title: 'Slack Intern Assignment',
    description: 'Slack UI clone built with HTML, CSS, and vanilla JS for frontend challenge.',
    link: 'https://github.com/Harshwardhan0270/slack-intern-assignment',
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive React + Tailwind portfolio to showcase my skills and projects.',
    link: 'https://github.com/Harshwardhan0270',
  },
  {
    title: 'Question Paper Generator',
    description: 'A Bloom\'s Taxonomy-based generator and analyzer using Streamlit + Python + NLP.',
    link: 'https://github.com/Harshwardhan0270/Question-Paper-Generator', // Update with real link
  },
  {
    title: 'Multilingual Chatbot App',
    description: 'Chatbot for Indian users using Node.js, LangChain, Google Translate API, and WhatsApp Web.',
    link: 'https://github.com/Harshwardhan0270/Multilingual-Bot', // Update with real link
  },
];

const Projects = ({ darkMode }) => {
  return (
    <section
      id="projects"
      className={`py-16 px-6 md:px-20 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold underline underline-offset-8 decoration-purple-500 mb-4">
          Projects
        </h2>
        <p className="text-lg max-w-xl mx-auto">
          Explore a few of my recent projects that blend frontend, backend, and AI.
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group p-6 rounded-2xl shadow-md border hover:shadow-xl hover:scale-105 transform transition duration-300 ${
              darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-blue-600 group-hover:underline">
                {project.title}
              </h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
            <p className="text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
