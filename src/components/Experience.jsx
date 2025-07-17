// src/Experience.jsx
import React from 'react';
import { FaBriefcase, FaLaptopCode } from 'react-icons/fa';

const experiences = [
  {
    role: 'Data Science Intern',
    company: 'Coincent.ai',
    date: 'Aug 2024 – Oct 2024',
    description:
      'Worked on data extraction, preprocessing, and building predictive models using Python, Pandas, and Scikit-learn.',
    icon: <FaLaptopCode />,
  },
  {
    role: 'Hackathon Participant',
    company: 'SIH & Flipkart Grid',
    date: '2024 – Present',
    description:
      'Developed innovative solutions in AI-powered KYC & multilingual chatbots. Focused on LLMs, LangChain, and API integration.',
    icon: <FaBriefcase />,
  },
];

const Experience = ({ darkMode }) => {
  return (
    <section
      id="experience"
      className={`py-16 px-6 md:px-20 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold underline underline-offset-8 decoration-blue-500 mb-4">
          Experience
        </h2>
        <p className="text-lg max-w-xl mx-auto">
          Internships, hackathons, and real-world development experience.
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`border-l-4 pl-6 relative ${
              darkMode ? 'border-blue-500' : 'border-blue-600'
            }`}
          >
            <div className="absolute -left-3 top-1.5 bg-blue-500 text-white p-2 rounded-full shadow-md">
              {exp.icon}
            </div>
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-sm font-medium text-blue-500">{exp.company}</p>
            <p className="text-xs mb-2">{exp.date}</p>
            <p className="text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
