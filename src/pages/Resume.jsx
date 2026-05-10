import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Download, GraduationCap, FolderOpen, User, Award, Briefcase } from 'lucide-react'
import { fadeUp, staggerContainer, noMotion } from '../animations/variants'

const education = [
  { degree: 'B.Tech — Computer Science & Engineering', institution: 'Quantum University, Roorkee', year: 'Aug 2022 – Jun 2026' },
  { degree: 'Class XII (CBSE)', institution: 'First Step School, Chhindwara MP', year: '2021' },
]

const experience = [
  { role: 'Software Engineer Intern', company: 'Bluestock™', date: 'Oct – Nov 2025', location: 'Remote' },
  { role: 'Full-Stack Development Intern', company: 'VaidSys Technologies', date: 'Sep – Oct 2025', location: 'Remote/Hybrid' },
  { role: 'Data Science Intern', company: 'Coincent.ai', date: 'Aug – Oct 2024', location: 'Remote' },
]

const projects = [
  { name: 'Online LMS', stack: 'MERN Stack, Socket.io, JWT' },
  { name: 'AI Travel Planner', stack: 'Python, Folium, APIs' },
  { name: 'Question Paper Generator', stack: 'Python, Streamlit, NLP, LangChain' },
  { name: 'Multilingual Chatbot', stack: 'Node.js, LangChain, Google Translate API' },
]

const certifications = [
  'Python for Everybody — Coursera',
  'Java Programming — Udemy',
]

const achievements = [
  'Participant in HackIndia 2025 (National Level)',
  'Participant in Flipkart Grid hackathon',
  'Improved workflow efficiency by 30% through automation',
  'Increased internship codebase by 10% through proactive feature additions',
]

const Resume = () => {
  const prefersReduced = useReducedMotion()
  const v = prefersReduced ? noMotion : fadeUp
  const sv = prefersReduced ? noMotion : staggerContainer

  const Section = ({ icon, title, color, children }) => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={v}
      className="glass rounded-2xl p-6 mb-5"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center`}>
          {icon}
        </div>
        <h3 className="text-base font-bold text-white">{title}</h3>
      </div>
      {children}
    </motion.div>
  )

  return (
    <section className="min-h-screen py-28 px-6 md:px-12 bg-[#0f0f13]">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={v}
          className="mb-12"
        >
          <p className="section-label mb-3">My background</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Résumé</h2>
          <a
            href="/Harshwardhan_Sahu.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition-all duration-200 shadow-lg shadow-indigo-600/25"
          >
            <Download size={16} />
            Download Full PDF
          </a>
        </motion.div>

        {/* Profile */}
        <Section
          icon={<User size={16} className="text-indigo-400" aria-hidden="true" />}
          title="Profile"
          color="bg-indigo-500/20"
        >
          <p className="text-white/80 font-semibold">Harshwardhan Sahu</p>
          <p className="text-white/40 text-sm mt-1">harshwardhan0270@gmail.com · +91 9009571862</p>
          <a
            href="https://www.linkedin.com/in/harshwardhan-sahu-51a673212/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 text-sm hover:underline mt-1 inline-block"
          >
            linkedin.com/in/harshwardhan-sahu-51a673212
          </a>
          <p className="text-white/40 text-sm mt-3 leading-relaxed">
            Motivated CSE undergraduate with hands-on experience in Full-Stack Development (MERN) and AI/ML solutions.
            Proven track record of improving workflow efficiency by 30% through automation and delivering scalable web applications.
          </p>
        </Section>

        {/* Experience */}
        <Section
          icon={<Briefcase size={16} className="text-blue-400" aria-hidden="true" />}
          title="Experience"
          color="bg-blue-500/20"
        >
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sv} className="space-y-4">
            {experience.map((exp, i) => (
              <motion.div key={i} variants={v} className="flex items-start justify-between gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                <div>
                  <p className="text-white/80 font-semibold text-sm">{exp.role}</p>
                  <p className="text-white/40 text-xs mt-0.5">{exp.company} · {exp.location}</p>
                </div>
                <span className="text-xs text-white/25 whitespace-nowrap">{exp.date}</span>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* Education */}
        <Section
          icon={<GraduationCap size={16} className="text-purple-400" aria-hidden="true" />}
          title="Education"
          color="bg-purple-500/20"
        >
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sv} className="space-y-4">
            {education.map((edu, i) => (
              <motion.div key={i} variants={v} className="flex items-start justify-between gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                <div>
                  <p className="text-white/80 font-medium text-sm">{edu.degree}</p>
                  <p className="text-white/40 text-xs mt-0.5">{edu.institution}</p>
                </div>
                <span className="text-xs text-white/25 whitespace-nowrap">{edu.year}</span>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* Projects */}
        <Section
          icon={<FolderOpen size={16} className="text-emerald-400" aria-hidden="true" />}
          title="Key Projects"
          color="bg-emerald-500/20"
        >
          <div className="space-y-3">
            {projects.map((proj, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                <div>
                  <span className="text-sm text-white/70 font-medium">{proj.name}</span>
                  <span className="text-xs text-white/30 ml-2">{proj.stack}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Certifications & Achievements */}
        <Section
          icon={<Award size={16} className="text-amber-400" aria-hidden="true" />}
          title="Certifications & Achievements"
          color="bg-amber-500/20"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-white/30 uppercase tracking-wider mb-3">Certifications</p>
              <div className="space-y-2">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    <span className="text-sm text-white/60">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-white/30 uppercase tracking-wider mb-3">Achievements</p>
              <div className="space-y-2">
                {achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    <span className="text-sm text-white/60">{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

      </div>
    </section>
  )
}

export default Resume
