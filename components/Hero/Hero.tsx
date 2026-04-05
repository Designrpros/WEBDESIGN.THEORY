'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import styles from './Hero.module.css';

export function Hero() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = gridRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      gridRef.current.style.setProperty('--mouse-x', `${x * 100}%`);
      gridRef.current.style.setProperty('--mouse-y', `${y * 100}%`);
    };

    const grid = gridRef.current;
    if (grid) {
      grid.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (grid) {
        grid.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div ref={gridRef} className={styles.gridBackground}>
        <div className={styles.gridOverlay} />
      </div>
      
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.titleLine}>Learn Web Design</span>
          <span className={styles.titleAccent}>Through Theory</span>
        </h1>
        
        <p className={styles.tagline}>
          Explore design movements, understand their principles, and experiment 
          with interactive code examples. From Bauhaus to Neo-Brutalism.
        </p>
        
        <div className={styles.actions}>
          <Link href="/theory/brutalism" className={styles.primaryButton}>
            <Play size={18} />
            Start Exploring
            <ArrowRight size={16} />
          </Link>
          <Link href="/glossary" className={styles.secondaryButton}>
            Browse Glossary
          </Link>
        </div>
        
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>8</span>
            <span className={styles.statLabel}>Design Movements</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>30+</span>
            <span className={styles.statLabel}>Design Terms</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>Live</span>
            <span className={styles.statLabel}>Interactive Demos</span>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}

export default Hero;
