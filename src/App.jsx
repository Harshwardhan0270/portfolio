import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Background from './components/Background'
import ErrorBoundary from './ErrorBoundary'

// All sections imported directly — single page scroll
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

export default function App() {
  return (
    <ErrorBoundary>
      <Helmet>
        <title>Harshwardhan Sahu | Portfolio</title>
        <meta name="description" content="Portfolio of Harshwardhan Sahu — Full Stack Developer and AI Enthusiast." />
      </Helmet>
      <div className="bg-[#0f0f13] min-h-screen text-white">
        <Background />
        <Navbar />
        <main className="relative z-10">
          <section id="home"><Home /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="experience"><Experience /></section>
          <section id="resume"><Resume /></section>
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#16161d',
            color: '#e2e2e9',
            border: '1px solid rgba(99,102,241,0.3)',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
          },
        }}
      />
    </ErrorBoundary>
  )
}
