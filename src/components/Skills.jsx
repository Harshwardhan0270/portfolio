// src/Skills.jsx
import React from 'react'; 
import {
  FaPaintBrush,
  FaCode,
  FaDatabase,
  FaToolbox,
  FaCogs,
  FaLaptopCode,
} from 'react-icons/fa';

const skillsData = [
  {
    title: 'Frontend Development',
    icon: <FaPaintBrush size={24} />,
    list: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend Development',
    icon: <FaCode size={24} />,
    list: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  },
  {
    title: 'Programming Languages',
    icon: <FaLaptopCode size={24} />,
    list: ['Java', 'Python', 'JavaScript', 'C/C++ (Basics)'],
  },
  {
    title: 'Databases',
    icon: <FaDatabase size={24} />,
    list: ['MongoDB', 'Firebase Realtime DB', 'MySQL (Basics)'],
  },
  {
    title: 'Tools & DevOps',
    icon: <FaToolbox size={24} />,
    list: ['Git', 'GitHub', 'VS Code', 'Netlify', 'Vercel', 'NPM', 'Yarn'],
  },
  {
    title: 'UI/UX & Design',
    icon: <FaCogs size={24} />,
    list: ['Figma', 'Canva', 'Adobe XD', 'Chrome DevTools', 'Postman'],
  },
];

const Skills = ({ darkMode }) => {
  return (
    <section
      id="skills"
      className={`py-16 px-6 md:px-20 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold underline underline-offset-8 decoration-blue-500 mb-4">
          My Skills
        </h2>
        <p className="text-lg max-w-xl mx-auto">
          Here's a breakdown of technologies and tools I work with.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 ${
              darkMode ? 'bg-gray-800' : 'bg-gray-100'
            }`}
          >
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              {skill.icon}
              <h3 className="text-xl font-semibold">{skill.title}</h3>
            </div>
            <ul className="list-disc list-inside space-y-1 text-sm pl-1">
              {skill.list.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
