import { motion } from 'framer-motion'
import { projects } from '../data'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '7rem 8vw', background: '#0a0a0f' }}>

      <div style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6c63ff', marginBottom: '0.75rem' }}>
        What I've built
      </div>

      <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '3.5rem', letterSpacing: '-0.02em' }}>
        Featured Projects
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            style={{
              background: '#12121a',
              border: '1px solid rgba(108,99,255,0.2)',
              borderRadius: 16,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              transition: 'box-shadow 0.3s'
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 20px 40px rgba(108,99,255,0.1)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            

            <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.6rem' }}>
                {project.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#8892a4', lineHeight: 1.65, flex: 1 }}>
                {project.description}
              </p>

              <div style={{
                marginTop: '1.5rem', paddingTop: '1.25rem',
                borderTop: '1px solid rgba(108,99,255,0.15)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center'
              }}>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {project.stack.map(tag => (
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

                <div style={{ display: 'flex', gap: 12 }}>
                  <a href={project.github} target="_blank" rel="noreferrer"
                    style={{ color: '#8892a4', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#6c63ff'}
                    onMouseLeave={e => e.currentTarget.style.color = '#8892a4'}
                  >
                    <FiGithub size={18} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer"
                    style={{ color: '#8892a4', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#6c63ff'}
                    onMouseLeave={e => e.currentTarget.style.color = '#8892a4'}
                  >
                    <FiExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}