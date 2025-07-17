// BlogResume.jsx
import React from "react";

const BlogResume = ({ darkMode }) => (
  <section id="blog-resume" className={`py-20 px-4 sm:px-6 md:px-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white'}`}>
    <h2 className="text-3xl font-bold mb-6">Blog / Resume Download Section</h2>
    <div className="max-w-4xl mx-auto space-y-6 text-sm leading-relaxed">
      <p>Harshwardhan Sahu</p>
      <p>harshwardhan0270@gmail.com | +91 9009571862</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/harshwardhan-sahu-51a673212/" className="text-blue-600">Profile</a></p>
      <h3 className="text-xl font-semibold mt-6">EDUCATION</h3>
      <ul className="list-disc ml-5">
        <li>B.Tech, CSE, Quantum University, 2022–2026</li>
        <li>Class XII – CBSE, First Step, 2021</li>
        <li>Class X – CBSE, First Step, 2019</li>
      </ul>
      <h3 className="text-xl font-semibold mt-6">PROJECTS</h3>
      <ul className="list-disc ml-5">
        <li>AI Traveller – Personalized Travel Planner with APIs, Streamlit, and Folium</li>
      </ul>
    </div>
  </section>
);

export default BlogResume;
