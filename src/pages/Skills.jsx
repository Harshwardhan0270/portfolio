import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Paintbrush, Code2, Database, Wrench, Settings, Monitor, Brain } from 'lucide-react'
import { fadeUp, staggerContainer, noMotion } from '../animations/variants'

const skillsData = [
  {
    title: 'Languages',
    icon: <Code2 size={20} aria-hidden="true" />,
    color: 'from-blue-500/20 to-indigo-500/20',
    accent: 'text-blue-400',
    list: ['JavaScript', 'Python', 'Java', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: <Paintbrush size={20} aria-hidden="true" />,
    color: 'from-indigo-500/20 to-purple-500/20',
    accent: 'text-indigo-400',
    list: ['React.js', 'Node.js', 'Express.js', 'Streamlit', 'Material UI', 'Tailwind CSS'],
  },
  {
    title: 'Databases & Tools',
    icon: <Database size={20} aria-hidden="true" />,
    color: 'from-purple-500/20 to-pink-500/20',
    accent: 'text-purple-400',
    list: ['MongoDB', 'MySQL', 'PostgreSQL', 'Git', 'GitHub', 'Postman', 'Linux'],
  },
  {
    title: 'AI / ML',
    icon: <Brain size={20} aria-hidden="true" />,
    color: 'from-emerald-500/20 to-teal-500/20',
    accent: 'text-emerald-400',
    list: ['NLP', 'LangChain', 'Scikit-learn', 'Pandas', 'Folium', 'Gemini API'],
  },
  {
    title: 'Concepts',
    icon: <Monitor size={20} aria-hidden="true" />,
    color: 'from-amber-500/20 to-orange-500/20',
    accent: 'text-amber-400',
    list: ['DSA', 'REST APIs', 'JWT Auth', 'RBAC', 'Socket.io', 'Cloudinary'],
  },
  {
    title: 'Design & DevOps',
    icon: <Settings size={20} aria-hidden="true" />,
    color: 'from-rose-500/20 to-pink-500/20',
    accent: 'text-rose-400',
    list: ['Figma', 'VS Code', 'Netlify', 'Vercel', 'Firebase', 'Axios'],
  },
]

const Skills = () => {
  const prefersReduced = useReducedMotion()
  const cardVariant = prefersReduced ? noMotion : fadeUp
  const containerVariant = prefersReduced ? noMotion : staggerContainer

  return (
    <section className="min-h-screen py-28 px-6 md:px-12 bg-[#0f0f13]">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={prefersReduced ? noMotion : fadeUp}
          className="mb-16"
        >
          <p className="section-label mb-3">What I work with</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Skills &{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariant}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={prefersReduced ? {} : { y: -4 }}
              className="glass rounded-2xl p-6 group transition-all duration-300 hover:border-white/15"
            >
              <div className={`inline-flex items-center gap-3 mb-5 px-3 py-2 rounded-xl bg-gradient-to-r ${skill.color}`}>
                <span className={skill.accent}>{skill.icon}</span>
                <h3 className={`text-sm font-bold ${skill.accent}`}>{skill.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.list.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
