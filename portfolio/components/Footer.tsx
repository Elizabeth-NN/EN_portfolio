import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className={styles.logo}>YN.dev</span>
            <span className={styles.copy}>
              © {new Date().getFullYear()} — built with Next.js
            </span>
          </div>
          <div className={styles.right}>
            <span className={styles.status}>
              <span className={styles.dot} />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
