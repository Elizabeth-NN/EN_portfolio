'use client'
import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.label}>
              <span className="accent">03</span> / CONTACT
            </div>
            <h2 className={styles.title}>
              Let's build<br />
              something<br />
              <span className="accent">interesting.</span>
            </h2>
            <p className={styles.desc}>
              Open for full-time roles, contract work, and cool side projects.
              Response time: &lt; 24h.
            </p>
            <div className={styles.info}>
              <div className={styles.infoLine}>
                <span className="muted">email</span>
                <a href="mailto:hi@elizabethnjuguna.dev" className={styles.infoVal}>
                  hi@elizabethnjuguna.dev
                </a>
              </div>
              <div className={styles.infoLine}>
                <span className="muted">based in</span>
                <span className={styles.infoVal}>Nairobi, Kenya</span>
              </div>
              <div className={styles.infoLine}>
                <span className="muted">timezone</span>
                <span className={styles.infoVal}>EAT (UTC+3)</span>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            {sent ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <div className={styles.successTitle}>Message sent.</div>
                <div className={styles.successSub}>I'll get back to you within a day.</div>
                <pre className={styles.successCode}>{`> status: 200 OK
> queued for reply`}</pre>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formHeader}>
                  <span className="muted">POST</span>
                  <span className={styles.endpoint}>/api/contact</span>
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel}>
                    <span className="accent">name</span>
                    <span className={styles.req}>required</span>
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="elizabethnjuguna"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel}>
                    <span className="accent">email</span>
                    <span className={styles.req}>required</span>
                  </label>
                  <input
                    className={styles.input}
                    type="email"
                    placeholder="elizabethnjuguna217@gmail.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel}>
                    <span className="accent">message</span>
                    <span className={styles.req}>required</span>
                  </label>
                  <textarea
                    className={styles.input}
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className={styles.submit}>
                  <span>$ send_message</span>
                  <span className={styles.submitArrow}>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
