import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#0f0f13] border-t border-white/5 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="text-xs font-black tracking-[0.15em] uppercase text-white hover:text-indigo-400 transition-colors"
        >
          HARSHWARDHAN<span className="text-indigo-400">.</span>
        </button>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-white/30">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="hover:text-white/70 transition-colors"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Social */}
        <div className="flex items-center gap-3">
          {[
            { href: 'https://github.com/Harshwardhan0270', icon: <Github size={16} />, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/harshwardhan-sahu-51a673212/', icon: <Linkedin size={16} />, label: 'LinkedIn' },
            { href: 'mailto:harshwardhan0270@gmail.com', icon: <Mail size={16} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-8 h-8 rounded-full glass flex items-center justify-center text-white/30 hover:text-white transition-all duration-200"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-white/15 mt-8">
        © {new Date().getFullYear()} Harshwardhan Sahu. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
