import { motion } from 'framer-motion'
import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '7rem 8vw', background: '#12121a' }}>

      <div style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6c63ff', marginBottom: '0.75rem' }}>
        What I bring
      </div>

      <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '3.5rem', letterSpacing: '-0.02em' }}>
        Skills & Expertise
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {skills.map((skill, i) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            style={{
              background: '#0a0a0f',
              border: '1px solid rgba(108,99,255,0.2)',
              borderRadius: 16,
              padding: '2rem',
              transition: 'border-color 0.3s'
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#6c63ff'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(108,99,255,0.2)'}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              {skill.title}
            </h3>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: '1rem' }}>
              {skill.tags.map(tag => (
                <span key={tag} style={{
                  background: 'rgba(108,99,255,0.1)',
                  color: '#8b85ff',
                  padding: '4px 12px',
                  borderRadius: 100,
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  border: '1px solid rgba(108,99,255,0.2)'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}