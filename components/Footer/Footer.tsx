import Link from 'next/link';
import { Github, Twitter } from 'lucide-react';
import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="7" height="7" fill="currentColor" />
                  <rect x="14" y="3" width="7" height="7" fill="currentColor" opacity="0.6" />
                  <rect x="3" y="14" width="7" height="7" fill="currentColor" opacity="0.6" />
                  <rect x="14" y="14" width="7" height="7" fill="currentColor" opacity="0.3" />
                </svg>
              </span>
              <span className={styles.logoText}>WebDesignTheory</span>
            </Link>
            <p className={styles.tagline}>
              Learn web design through theory and practice.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Explore</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/">Movements</Link>
                </li>
                <li>
                  <Link href="/glossary">Glossary</Link>
                </li>
                <li>
                  <Link href="/resources">Resources</Link>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Movements</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/theory/brutalism">Brutalism</Link>
                </li>
                <li>
                  <Link href="/theory/minimalism">Minimalism</Link>
                </li>
                <li>
                  <Link href="/theory/swiss-design">Swiss Design</Link>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Connect</h4>
              <ul className={styles.linkList}>
                <li>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Twitter size={16} />
                    Twitter
                  </a>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} WebDesignTheory. All rights reserved.
          </p>
          <p className={styles.built}>
            Built for designers and developers who love to learn.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
