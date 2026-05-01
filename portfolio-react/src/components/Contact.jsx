import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi'

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '7rem 8vw', background: '#12121a', textAlign: 'center' }}>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ maxWidth: 560, margin: '0 auto' }}
      >

        <div style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6c63ff', marginBottom: '0.75rem' }}>
          Say hello
        </div>

        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          Let's Work Together
        </h2>

        <p style={{ color: '#8892a4', fontSize: '1.05rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
          I'm always open to interesting projects, collaborations, or a good conversation about software. Drop me a message and I'll get back to you.
        </p>

        <a href="mailto:your@email.com" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
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
          <FiMail /> rihazramzaan@gmail.com
        </a>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          {[
            { icon: <FiGithub />,   label: 'GitHub',   href: 'https://github.com/RihazRamzaan' },
            { icon: <FiLinkedin />, label: 'LinkedIn', href: 'https://linkedin.com/' },
            { icon: <FiFileText />, label: 'Resume',   href: '/assets/resume.pdf' }
          ].map(item => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '11px 22px', borderRadius: 100,
              border: '1.5px solid rgba(108,99,255,0.25)',
              color: '#fff', fontWeight: 500,
              fontSize: '0.875rem', textDecoration: 'none',
              transition: 'all 0.2s'
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#6c63ff'; e.currentTarget.style.color = '#6c63ff' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(108,99,255,0.25)'; e.currentTarget.style.color = '#fff' }}
            >
              {item.icon} {item.label}
            </a>
          ))}
        </div>

      </motion.div>

      <p style={{ marginTop: '5rem', color: '#8892a4', fontSize: '0.82rem' }}>
        © {new Date().getFullYear()} M. Rihaz Ramzaan. Built with React & Framer Motion.
      </p>

    </section>
  )
}