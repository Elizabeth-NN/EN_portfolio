import styles from './About.module.css'

const STATS = [
  { value: '5+', label: 'years building' },
  { value: '30k+', label: 'commits pushed' },
  { value: '12', label: 'products shipped' },
  { value: '∞', label: 'coffee consumed' },
]

const INTERESTS = [
  'Compilers & language design',
  'Distributed systems',
  'Developer tooling',
  'Performance optimization',
  'Open source',
  'Mechanical keyboards',
]

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.label}>
              <span className="accent">02</span> / ABOUT
            </div>
            <h2 className={styles.title}>
              I turn{' '}
              <span className={styles.scratch}>requirements</span>
              <br />
              into systems.
            </h2>

            <div className={styles.ascii}>
              <pre>{`  ┌─────────────────┐
  │  $ whoami       │
  │  > engineer     │
  │  > builder      │
  │  > problem-     │
  │    solver       │
  └─────────────────┘`}</pre>
            </div>

            <div className={styles.stats}>
              {STATS.map(s => (
                <div key={s.value} className={styles.stat}>
                  <div className={styles.statVal}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <p className={styles.bio}>
              Hey — I'm a full-stack engineer with a deep love for the entire stack.
              I've worked on everything from high-throughput backend services to the 
              tiny micro-interactions that make UIs feel alive.
            </p>
            <p className={styles.bio}>
              I believe good software is software people don't have to think about.
              Clean APIs, honest error messages, and systems that fail gracefully.
              That's what I'm here for.
            </p>
            <p className={styles.bio}>
              Currently: open to full-time roles and interesting freelance projects.
            </p>

            <div className={styles.interestsBlock}>
              <div className={styles.interestsTitle}>
                <span className="accent">$</span> interests --list
              </div>
              <ul className={styles.interests}>
                {INTERESTS.map(i => (
                  <li key={i}><span className="muted">→</span> {i}</li>
                ))}
              </ul>
            </div>

            <div className={styles.links}>
              {['GitHub', 'LinkedIn', 'Twitter', 'Resume'].map(l => (
                <a key={l} href="#" className={styles.link}>
                  [{l}]
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
