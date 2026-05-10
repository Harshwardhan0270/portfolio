import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Briefcase, Monitor, Trophy } from 'lucide-react'
import { fadeUp, slideInLeft, noMotion } from '../animations/variants'

const experiences = [
  {
    role: 'Software Engineer Intern',
    company: 'Bluestock™',
    location: 'Remote',
    date: 'Oct 2025 – Nov 2025',
    type: 'Internship',
    description: 'Developed and maintained the Company Registration & Verification Module using ReactJS, Node.js, and PostgreSQL. Implemented multi-step registration, dashboard management, and secure JWT/Firebase authentication. Integrated Cloudinary for media storage and built responsive UI for mobile and desktop.',
    skills: ['React.js', 'Node.js', 'PostgreSQL', 'JWT', 'Firebase', 'Cloudinary'],
    icon: <Monitor size={16} aria-hidden="true" />,
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    role: 'Full-Stack Development Intern',
    company: 'VaidSys Technologies',
    location: 'Remote / Hybrid',
    date: 'Sep 2025 – Oct 2025',
    type: 'Internship',
    description: 'Architected scalable full-stack modules using React.js, Node.js, and MongoDB. Enforced secure JWT-based authentication and Role-Based Access Control (RBAC). Crafted responsive UI components using Material UI and integrated RESTful APIs with Axios.',
    skills: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'RBAC', 'Material UI', 'Axios'],
    icon: <Briefcase size={16} aria-hidden="true" />,
    accent: 'from-indigo-500 to-purple-500',
  },
  {
    role: 'Data Science Intern',
    company: 'Coincent.ai',
    location: 'Remote',
    date: 'Aug 2024 – Oct 2024',
    type: 'Internship',
    description: 'Worked on data extraction, preprocessing, and building predictive models using Python, Pandas, and Scikit-learn. Improved workflow efficiency by 30% through automation pipelines.',
    skills: ['Python', 'Pandas', 'Scikit-learn', 'ML', 'Data Analysis'],
    icon: <Monitor size={16} aria-hidden="true" />,
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    role: 'Hackathon Participant',
    company: 'HackIndia 2025 & Flipkart Grid',
    location: 'National Level',
    date: '2024 – 2025',
    type: 'Achievement',
    description: 'Participated in HackIndia 2025 (National Level) and Flipkart Grid. Developed AI-powered KYC solutions and multilingual chatbots using LLMs, LangChain, and API integrations.',
    skills: ['LangChain', 'LLMs', 'Node.js', 'APIs', 'AI/ML'],
    icon: <Trophy size={16} aria-hidden="true" />,
    accent: 'from-amber-500 to-orange-500',
  },
]

const Experience = () => {
  const prefersReduced = useReducedMotion()
  const entryVariant = prefersReduced ? noMotion : slideInLeft

  return (
    <section className="min-h-screen py-28 px-6 md:px-12 bg-[#0f0f13]">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={prefersReduced ? noMotion : fadeUp}
          className="mb-16"
        >
          <p className="section-label mb-3">Where I've worked</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Experience &{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={entryVariant}
                className="relative pl-16"
              >
                {/* Icon badge */}
                <div className={`absolute left-0 top-1 w-12 h-12 rounded-xl bg-gradient-to-br ${exp.accent} flex items-center justify-center text-white shadow-lg`}>
                  {exp.icon}
                </div>

                {/* Card */}
                <div className="glass rounded-2xl p-6 hover:border-white/15 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                        {exp.type}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-0.5">{exp.role}</h3>
                      <p className="text-sm text-white/50 mt-0.5">
                        {exp.company}
                        <span className="text-white/25 mx-1.5">·</span>
                        {exp.location}
                      </p>
                    </div>
                    <span className="text-xs text-white/30 bg-white/5 px-3 py-1 rounded-full border border-white/5 whitespace-nowrap">
                      {exp.date}
                    </span>
                  </div>

                  <p className="text-sm text-white/45 leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
