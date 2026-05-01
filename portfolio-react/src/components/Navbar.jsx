import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { navLinks } from '../data'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY>20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
        initial={{y: -80, opacity: 0}}
        animate = {{y: 0, opacity: 1}}
        transition= {{duration: 0.6}}
        style={{
            position: 'fixed', top:0, left:0, right:0,
            zIndex: 100,
            height: '70px',
            display:'flex', alignItems:'center',justifyContent:'space-between',
            padding: '0 8vw',
            background: scrolled ? 'rgba(10,10,15,1)':'transparent',
            backdropFilter: scrolled? 'blur(12px)': 'none',
            borderBottom: scrolled ? '1px solid rgba(108,99,255,0.2)' : 'none',
            transition: 'all 0.3s ease'
        }}>
            <a href='#hero' style={{fontFamily: 'DM Sans', fontWeight: 700, fontSize: '1.3em', color: '#fff', textDecoration: 'none'}}>M 
            <span>.</span> Rihaz Ramzaan</a>

            <ul style={{display:'flex', gap:'2.5rem', listStyle: 'none'}}>
                {navLinks.map(link => (
                    <li key={link.label}>
                        <a  href={link.href} style={{
                            textDecoration: 'none',
                        color: '#8892a4',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        transition: 'color 0.2s'
                        }}
                        onMouseEnter={e => e.target.style.color = '#6c63ff'}
                        onMouseLeave={e => e.target.style.color = '#8892a4'}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </motion.nav>
    )
}