import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { id: 'home',       label: 'Home' },
  { id: 'skills',     label: 'Skills' },
  { id: 'projects',   label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'resume',     label: 'Resume' },
  { id: 'contact',    label: 'Contact' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('home')

  // Frosted glass on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section via IntersectionObserver
  useEffect(() => {
    const observers = []
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-[#0f0f13]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="text-sm font-black tracking-[0.15em] uppercase text-white hover:text-indigo-400 transition-colors"
        >
          HARSHWARDHAN<span className="text-indigo-400">.</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map(({ id, label }) => {
            const isActive = activeId === id
            return (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-white/45 hover:text-white'
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-indigo-400"
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Hire Me + hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollTo('contact')}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors duration-200"
          >
            Hire Me
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/70 hover:text-white transition"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden bg-[#16161d] border-t border-white/5"
          >
            <ul className="px-6 py-4 space-y-1">
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => { scrollTo(id); setIsOpen(false) }}
                    className={`block w-full text-left py-2.5 text-sm font-medium transition-colors duration-200 ${
                      activeId === id ? 'text-indigo-400' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => { scrollTo('contact'); setIsOpen(false) }}
                  className="block w-full text-center py-2.5 rounded-full text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
