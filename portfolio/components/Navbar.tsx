'use client'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('en-GB'))
    tick()
    const id = setInterval(tick, 1000)
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => { clearInterval(id); window.removeEventListener('scroll', onScroll) }
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.cursor}>▮</span>
          <span>YN.dev</span>
        </a>
        <div className={styles.links}>
          <a href="#work">./work</a>
          <a href="#about">./about</a>
          <a href="#contact">./contact</a>
        </div>
        <div className={styles.clock}>{time}</div>
      </div>
    </nav>
  )
}
