import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { Github, Linkedin, Mail, ArrowDown, ArrowRight } from 'lucide-react'
import { heroFadeUp, noMotion } from '../animations/variants'
import Marquee from '../components/Marquee'
import avatar from '../assets/avatar.jpg'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const stats = [
  { value: '3+', label: 'Internships' },
  { value: '6+', label: 'Projects Built' },
  { value: '81', label: 'GitHub Contributions' },
  { value: '30%', label: 'Efficiency Gained' },
]

const Home = () => {
  const prefersReduced = useReducedMotion()
  const v = prefersReduced ? noMotion : heroFadeUp

  return (
    <div className="bg-[#0f0f13]">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden">

        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-indigo-600/8 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-600/6 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — text */}
            <motion.div initial="hidden" animate="visible">
              <motion.p variants={v} custom={0} className="section-label mb-5">
                Full Stack Developer & AI Builder
              </motion.p>

              <motion.h1
                variants={v}
                custom={0.1}
                className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-6"
              >
                HARSH
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  WARDHAN
                </span>
                <br />
                SAHU
              </motion.h1>

              <motion.p
                variants={v}
                custom={0.2}
                className="text-lg text-indigo-300/70 font-medium mb-3 h-7"
              >
                <Typewriter
                  words={[
                    'Building scalable MERN applications',
                    'Crafting AI-powered tools',
                    'Creating multilingual bots',
                    'Designing beautiful interfaces',
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={55}
                  deleteSpeed={35}
                  delaySpeed={2200}
                />
              </motion.p>

              <motion.p
                variants={v}
                custom={0.3}
                className="text-white/35 text-sm leading-relaxed max-w-md mb-10"
              >
                CSE undergraduate with hands-on experience in Full-Stack Development (MERN)
                and AI/ML. Proven track record of improving workflow efficiency by 30%
                through automation and delivering scalable web applications.
              </motion.p>

              <motion.div variants={v} custom={0.4} className="flex flex-wrap gap-4 mb-12">
                <a
                  href="/Harshwardhan_Sahu.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 transition-all duration-200 shadow-xl shadow-indigo-600/30"
                >
                  Download Resume
                  <ArrowRight size={15} />
                </a>
                <button
                  onClick={() => scrollTo('projects')}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-white/60 font-semibold text-sm hover:border-white/25 hover:text-white transition-all duration-200"
                >
                  View Projects
                </button>
              </motion.div>

              <motion.div variants={v} custom={0.5} className="flex items-center gap-4">
                {[
                  { href: 'https://github.com/Harshwardhan0270', icon: <Github size={18} />, label: 'GitHub' },
                  { href: 'https://linkedin.com/in/harshwardhansahu', icon: <Linkedin size={18} />, label: 'LinkedIn' },
                  { href: 'mailto:harshwardhan0270@gmail.com', icon: <Mail size={18} />, label: 'Email' },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-200"
                  >
                    {icon}
                  </a>
                ))}
                <span className="text-white/15 text-xs ml-2">harshwardhan0270@gmail.com</span>
              </motion.div>
            </motion.div>

            {/* Right — avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-600/20 blur-2xl scale-110" />
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border border-indigo-500/20 scale-110" />
                <div className="absolute inset-0 rounded-full border border-purple-500/10 scale-125" />
                <img
                  src={avatar}
                  alt="Harshwardhan Sahu"
                  className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full object-cover border-2 border-white/10 shadow-2xl"
                />
                {/* Status badge */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-[#16161d] border border-white/10 rounded-full px-3 py-1.5 shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-white/60 font-medium">Open to work</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/15"
        >
          <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}>
            <ArrowDown size={13} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── MARQUEE ── */}
      <Marquee />

      {/* ── STATS ── */}
      <section className="py-20 px-6 md:px-16 lg:px-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center lg:text-left"
              >
                <p className="text-5xl lg:text-6xl font-black text-white mb-2">{value}</p>
                <p className="text-xs text-white/30 uppercase tracking-widest">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label mb-4">About me</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Building the web,<br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                one commit at a time.
              </span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              I'm a Computer Science & Engineering undergraduate at Quantum University (2022–2026),
              passionate about building full-stack applications and AI-powered tools. I've completed
              3 internships, contributed to production codebases, and participated in national-level hackathons.
            </p>
            <button
              onClick={() => scrollTo('experience')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-white transition-colors duration-200"
            >
              View my experience <ArrowRight size={15} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: 'Current Focus', value: 'MERN + AI/ML' },
              { label: 'Location', value: 'India' },
              { label: 'Education', value: 'B.Tech CSE' },
              { label: 'Status', value: 'Open to Work' },
            ].map(({ label, value }) => (
              <div key={label} className="glass rounded-2xl p-5">
                <p className="text-xs text-white/25 uppercase tracking-wider mb-2">{label}</p>
                <p className="text-white/80 font-semibold text-sm">{value}</p>
              </div>
            ))}
          </motion.div>        </div>
      </section>

    </div>
  )
}

export default Home
