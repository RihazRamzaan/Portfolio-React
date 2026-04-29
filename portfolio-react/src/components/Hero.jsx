import {motion} from 'framer-motion'
import { useState, useEffect } from 'react'

const words = ['Problem Solver.', 'Full Stack Developer.', 'Backend Engineer.', 'Tech Enthusiast.']

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    const speed = isDeleting ? 60 : 100

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.substring(0, displayed.length + 1))
        if (displayed === current) {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        setDisplayed(current.substring(0, displayed.length - 1))
        if (displayed === '') {
          setIsDeleting(false)
          setWordIndex(i => (i + 1) % words.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, wordIndex])

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: 'calc(70px + 4rem) 8vw 6rem',
      position: 'relative',
      overflow: 'hidden'
    }}>

      {/* background glow */}
      <div style={{
        position: 'absolute',
        top: '20%', left: '50%',
        transform: 'translateX(-50%)',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(108,99,255,0.07) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        width: '100%',
        gap: '4rem' }}>

        {/* LEFT: text */}
        <div style={{ flex: 1 }}>

            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            style={{
              
              fontFamily: "DM Serif Display", fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 800, lineHeight: 1.05,
              letterSpacing: '-0.03em', marginBottom: '0.5rem'
            }}
          >
            Hi, I'm <span style={{ color: '#6c63ff', fontStyle: 'italic' }}>Rihaz Ramzaan
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontFamily: "DM Serif Display",
              fontWeight: 700, color: '#e8edf5',
              marginBottom: '1.5rem', minHeight: '3rem'
            }}
          >
            {displayed}<span style={{ color: '#6c63ff' }}>|</span>
            <br />Software Engineering Undergradute

          </motion.h2>
    
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            style={{
              fontSize: '1.05rem', color: '#8892a4',
              maxWidth: 480, marginBottom: '2.5rem',
              fontWeight: 300, lineHeight: 1.7
            }}
          >
            I design and build reliable, scalable software — from clean backend systems to polished user-facing products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            style={{ display: 'flex', gap: '1rem' }}
          >
            <a href="#projects" style={{
              padding: '13px 28px', borderRadius: 100,
              background: '#6c63ff', color: '#fff',
              fontWeight: 600, fontSize: '0.9rem',
              textDecoration: 'none',
              boxShadow: '0 0 20px rgba(108,99,255,0.4)',
              transition: 'transform 0.2s'
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              View my work
            </a>
            <a href="#contact" style={{
              padding: '13px 28px', borderRadius: 100,
              border: '1.5px solid rgba(108,99,255,0.3)',
              color: '#fff', fontWeight: 600,
              fontSize: '0.9rem', textDecoration: 'none',
              transition: 'all 0.2s'
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#6c63ff'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(108,99,255,0.3)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ flexShrink: 0, position: 'relative' }}
        >
          <div style={{
            width: 280, height: 340,
            borderRadius: '160px 160px 130px 130px',
            background: 'linear-gradient(160deg, rgba(108,99,255,0.15), #12121a)',
            border: '2px solid rgba(108,99,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#8892a4', fontSize: '0.8rem',
            boxShadow: '0 0 60px rgba(108,99,255,0.1)'
          }}>
<img
  src="/profile.jpg"
  alt="M. Rihaz Ramzaan"
  style={{
    width: 280,
    height: 340,
    borderRadius: '160px 160px 130px 130px',
    objectFit: 'cover',
    objectPosition: 'top center',
    border: '2px solid rgba(108,99,255,0.2)',
    boxShadow: '0 0 60px rgba(108,99,255,0.1)',
    display: 'block'
  }}
/>          </div>

          <div style={{
            position: 'absolute', bottom: 20, left: -20,
            background: '#12121a',
            border: '1px solid rgba(108,99,255,0.2)',
            borderRadius: 100, padding: '8px 16px',
            display: 'flex', alignItems: 'center', gap: 8,
            fontSize: '0.78rem', fontWeight: 600,
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4caf82', display: 'inline-block' }} />
            Open to work
          </div>
        </motion.div>

      </div>
    </section>
  )
}