import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Mail, Phone, Linkedin, Send } from 'lucide-react'
import { fadeUp, noMotion } from '../animations/variants'

const BACKEND_URL = 'https://portfolio-1-ehqi.onrender.com/api/contact'

const Contact = () => {
  const prefersReduced = useReducedMotion()
  const v = prefersReduced ? noMotion : fadeUp

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [statusMessage, setStatusMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatusMessage('')
    try {
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setStatusMessage('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        const data = await response.json()
        setStatusMessage(data.error || 'error')
      }
    } catch {
      setStatusMessage('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputBase = `w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/8 text-white placeholder-white/25 text-sm outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all duration-200`

  const contactInfo = [
    { icon: <Mail size={16} />, label: 'Email', value: 'harshwardhan0270@gmail.com', href: 'mailto:harshwardhan0270@gmail.com' },
    { icon: <Phone size={16} />, label: 'Phone', value: '+91 9009571862', href: 'tel:+919009571862' },
    { icon: <Linkedin size={16} />, label: 'LinkedIn', value: 'harshwardhan-sahu', href: 'https://www.linkedin.com/in/harshwardhan-sahu-51a673212/' },
  ]

  return (
    <section className="min-h-screen py-28 px-6 md:px-12 bg-[#0f0f13]">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={v}
          className="mb-14"
        >
          <p className="section-label mb-3">Let's talk</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Get In{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-white/40 mt-4 max-w-md text-sm leading-relaxed">
            Have a project in mind, a question, or just want to say hi?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">

          {/* Form — 3 cols */}
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={v}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass rounded-2xl p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className={inputBase}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputBase}
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              required
              value={formData.message}
              onChange={handleChange}
              className={`${inputBase} resize-none`}
            />

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition-all duration-200 shadow-lg shadow-indigo-600/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={15} />
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>

              {statusMessage === 'success' && (
                <p className="text-emerald-400 text-sm">Message sent successfully!</p>
              )}
              {statusMessage === 'error' && (
                <p className="text-red-400 text-sm">Failed to send. Try again.</p>
              )}
              {statusMessage && statusMessage !== 'success' && statusMessage !== 'error' && (
                <p className="text-red-400 text-sm">{statusMessage}</p>
              )}
            </div>
          </motion.form>

          {/* Contact info — 2 cols */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={v}
            className="md:col-span-2 space-y-4"
          >
            {contactInfo.map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-white/15 transition-all duration-200 group block"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center text-indigo-400 flex-shrink-0 group-hover:bg-indigo-500/25 transition">
                  {icon}
                </div>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-wider mb-0.5">{label}</p>
                  <p className="text-sm text-white/70 group-hover:text-white transition">{value}</p>
                </div>
              </a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact
