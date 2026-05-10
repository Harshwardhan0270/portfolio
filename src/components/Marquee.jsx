import React from 'react'
import { motion } from 'framer-motion'

const items = [
  'React.js', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL',
  'Express.js', 'Tailwind CSS', 'LangChain', 'Socket.io',
  'JWT Auth', 'REST APIs', 'Material UI', 'Framer Motion',
  'Git & GitHub', 'Vite', 'Streamlit', 'Firebase', 'Cloudinary',
]

const Marquee = () => {
  const doubled = [...items, ...items]

  return (
    <div className="relative overflow-hidden py-5 border-y border-white/5 bg-[#0f0f13]">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0f0f13] to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0f0f13] to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex gap-8 whitespace-nowrap w-max"
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="text-sm font-semibold text-white/30 tracking-wide uppercase">
              {item}
            </span>
            <span className="text-indigo-500/40 text-lg">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default Marquee
