'use client'
import { useState } from 'react'
import styles from './Work.module.css'

const PROJECTS = [
  {
    id: '01',
    name: 'Forge CLI',
    tagline: 'Zero-config scaffolding for modern backends',
    desc: 'A developer tool that bootstraps production-ready Node.js services with one command. Generates Docker configs, GitHub Actions pipelines, and typed API layers automatically.',
    tags: ['Node.js', 'TypeScript', 'CLI', 'Docker'],
    status: 'open source',
    year: '2024',
    link: '#',
  },
  {
    id: '02',
    name: 'Plexus',
    tagline: 'Real-time event mesh for microservices',
    desc: 'A lightweight pub/sub system built on Redis Streams. Handles millions of events/day with exactly-once delivery guarantees and a clean TypeScript SDK.',
    tags: ['Rust', 'Redis', 'TypeScript', 'gRPC'],
    status: 'production',
    year: '2024',
    link: '#',
  },
  {
    id: '03',
    name: 'Chronicle',
    tagline: 'Append-only audit log as a service',
    desc: 'Immutable audit trail infrastructure for compliance-sensitive apps. Cryptographically chained entries, WORM storage, and a query API that actually makes sense.',
    tags: ['PostgreSQL', 'Go', 'AWS S3', 'Next.js'],
    status: 'production',
    year: '2023',
    link: '#',
  },
  {
    id: '04',
    name: 'Sandbox.run',
    tagline: 'Ephemeral code execution environments',
    desc: 'Spin up isolated V8 sandboxes via HTTP. Used by internal tooling for safe user-submitted code evaluation. Sub-50ms cold start times.',
    tags: ['V8 Isolates', 'Cloudflare Workers', 'TypeScript'],
    status: 'archived',
    year: '2023',
    link: '#',
  },
]

const STATUS_COLORS: Record<string, string> = {
  'open source': 'var(--accent)',
  'production': 'var(--accent3)',
  'archived': 'var(--fg3)',
}

export default function Work() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.label}>
            <span className="accent">01</span> / SELECTED WORK
          </div>
          <h2 className={styles.title}>Things I've built</h2>
        </div>

        <div className={styles.list}>
          {PROJECTS.map((p) => (
            <a
              key={p.id}
              href={p.link}
              className={`${styles.item} ${hovered === p.id ? styles.active : hovered ? styles.dimmed : ''}`}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className={styles.itemLeft}>
                <span className={styles.num}>{p.id}</span>
                <div>
                  <div className={styles.name}>{p.name}</div>
                  <div className={styles.tagline}>{p.tagline}</div>
                </div>
              </div>

              <div className={styles.itemMiddle}>
                <p className={styles.desc}>{p.desc}</p>
                <div className={styles.tags}>
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>

              <div className={styles.itemRight}>
                <span
                  className={styles.status}
                  style={{ color: STATUS_COLORS[p.status] }}
                >
                  ● {p.status}
                </span>
                <span className={styles.year}>{p.year}</span>
                <span className={styles.arrow}>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
