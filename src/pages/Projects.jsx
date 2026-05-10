import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Github, ArrowUpRight } from 'lucide-react'
import { fadeUp, staggerContainer, noMotion } from '../animations/variants'

const projects = [
  {
    title: 'Online Learning Management System',
    description: 'Comprehensive LMS with Student & Instructor dashboards, real-time notifications and progress tracking via Socket.io, JWT auth, and password hashing.',
    tags: ['MERN', 'Socket.io', 'JWT'],
    link: 'https://github.com/Harshwardhan0270',
    accent: 'from-blue-500/20 to-cyan-500/20',
    dot: 'bg-blue-400',
    type: 'Full-Stack',
  },
  {
    title: 'AI Travel Planner',
    description: 'Intelligent travel planner generating personalized itineraries based on budget. Integrates hotel booking, weather, and mapping APIs with multilingual support.',
    tags: ['Python', 'AI', 'Folium', 'APIs'],
    link: 'https://github.com/Harshwardhan0270/Travel-Planner',
    accent: 'from-indigo-500/20 to-purple-500/20',
    dot: 'bg-indigo-400',
    type: 'AI/ML',
  },
  {
    title: 'Question Paper Generator',
    description: "AI-powered tool using NLP to generate questions based on Bloom's Taxonomy cognitive levels. Includes PDF export and dynamic input fields for educators.",
    tags: ['Python', 'NLP', 'LangChain', 'Streamlit'],
    link: 'https://github.com/Harshwardhan0270/Question-Paper-Generator',
    accent: 'from-purple-500/20 to-pink-500/20',
    dot: 'bg-purple-400',
    type: 'AI/ML',
  },
  {
    title: 'Multilingual Chatbot',
    description: 'Chatbot for Indian users using Node.js, LangChain, Google Translate API, and WhatsApp Web. Supports regional languages for diverse accessibility.',
    tags: ['Node.js', 'LangChain', 'AI'],
    link: 'https://github.com/Harshwardhan0270/Multilingual-Bot',
    accent: 'from-emerald-500/20 to-teal-500/20',
    dot: 'bg-emerald-400',
    type: 'AI/ML',
  },
  {
    title: 'Slack UI Clone',
    description: 'Pixel-perfect Slack UI clone built with HTML, CSS, and vanilla JS for a frontend engineering challenge.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/Harshwardhan0270/slack-intern-assignment',
    accent: 'from-amber-500/20 to-orange-500/20',
    dot: 'bg-amber-400',
    type: 'Frontend',
  },
  {
    title: 'Portfolio Website',
    description: 'This portfolio — built with React 18, Vite, Tailwind v4, Framer Motion, and Lucide React. Dark editorial design with cinematic scroll reveals.',
    tags: ['React', 'Vite', 'Tailwind'],
    link: 'https://github.com/Harshwardhan0270',
    accent: 'from-rose-500/20 to-pink-500/20',
    dot: 'bg-rose-400',
    type: 'Frontend',
  },
]

const allTags = ['All', 'Full-Stack', 'AI/ML', 'Frontend']

const Projects = () => {
  const [activeTag, setActiveTag] = useState('All')
  const prefersReduced = useReducedMotion()
  const cardVariant = prefersReduced ? noMotion : fadeUp
  const containerVariant = prefersReduced ? noMotion : staggerContainer

  const filtered = activeTag === 'All'
    ? projects
    : projects.filter(p => p.type === activeTag)

  return (
    <section className="min-h-screen py-28 px-6 md:px-12 bg-[#0f0f13]">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={prefersReduced ? noMotion : fadeUp}
          className="mb-12"
        >
          <p className="section-label mb-3">What I've built</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Selected{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={prefersReduced ? noMotion : fadeUp}
          className="flex flex-wrap gap-2 mb-10"
        >
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeTag === tag
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                  : 'glass text-white/50 hover:text-white hover:border-white/15'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <motion.div
          key={activeTag}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={containerVariant}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={prefersReduced ? {} : { y: -5 }}
              className="glass rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300 hover:border-white/15"
            >
              <div className={`h-px w-full bg-gradient-to-r ${project.accent} mb-5 rounded-full opacity-60`} />

              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${project.dot}`} />
                    <h3 className="text-sm font-bold text-white leading-snug">{project.title}</h3>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="text-white/30 hover:text-white transition-colors duration-200 flex-shrink-0 ml-2"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                </div>
                <span className="text-xs text-indigo-400/70 mb-3 block">{project.type}</span>
                <p className="text-xs text-white/40 leading-relaxed mb-5">{project.description}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub: ${project.title}`}
                  className="text-white/20 hover:text-white/60 transition ml-2 flex-shrink-0"
                >
                  <Github size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
