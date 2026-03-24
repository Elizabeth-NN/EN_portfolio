'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'

const LINES = [
  '> initializing portfolio.exe...',
  '> loading modules: [react] [node] [postgres] [python]',
  '> running self_destruct() ... just kidding.',
  '> ready.',
]

export default function Hero() {
  const [displayed, setDisplayed] = useState<string[]>([])
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [done, setDone] = useState(false)
  const tickRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    if (lineIdx >= LINES.length) { setDone(true); return }
    const line = LINES[lineIdx]
    if (charIdx <= line.length) {
      tickRef.current = setTimeout(() => {
        setDisplayed(prev => {
          const next = [...prev]
          next[lineIdx] = line.slice(0, charIdx)
          return next
        })
        setCharIdx(c => c + 1)
      }, 28)
    } else {
      tickRef.current = setTimeout(() => {
        setLineIdx(l => l + 1)
        setCharIdx(0)
      }, 320)
    }
    return () => clearTimeout(tickRef.current)
  }, [lineIdx, charIdx])

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grid} aria-hidden />
      <div className="container">
        <div className={styles.badge}>
          <span className={styles.dot} />
          Available for work
        </div>

        <h1 className={styles.headline}>
          <span className={styles.glitch} data-text="Elizabeth Njuguna">Elizabeth Njuguna</span>
          <br />
          <span className={styles.sub}>
            Full-Stack <span className="accent">Engineer</span>
          </span>
        </h1>

        <p className={styles.desc}>
          I build fast, thoughtful software — from CLI tools to distributed systems.
          <br />
          Obsessed with developer experience, performance, and things that just work.
        </p>

        <div className={styles.terminal}>
          <div className={styles.termBar}>
            <span className={styles.dot2} style={{ background: '#ff5f57' }} />
            <span className={styles.dot2} style={{ background: '#ffbd2e' }} />
            <span className={styles.dot2} style={{ background: '#28c840' }} />
            <span className={styles.termTitle}>~/portfolio — zsh</span>
          </div>
          <div className={styles.termBody}>
            {displayed.map((line, i) => (
              <div key={i} className={styles.termLine}>
                <span className={i === lineIdx && !done ? styles.typing : ''}>
                  {line}
                  {i === lineIdx && !done && <span className={styles.caret}>▮</span>}
                </span>
              </div>
            ))}
            {done && (
              <div className={styles.termLine}>
                <span className="accent">$ </span>
                <span className={styles.caret}>▮</span>
              </div>
            )}
          </div>
        </div>

        <div className={styles.ctas}>
          <a href="#work" className={styles.btn}>
            <span>./see_work</span>
          </a>
          <a href="#contact" className={styles.btnGhost}>
            <span>./get_in_touch</span>
          </a>
        </div>

        <div className={styles.stack}>
          {['TypeScript','Node.js','React','PostgreSQL','Rust','Docker','Redis','AWS'].map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
