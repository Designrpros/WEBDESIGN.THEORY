import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Movement } from '@/lib/types';
import styles from './MovementCard.module.css';

export interface MovementCardProps {
  movement: Movement;
  featured?: boolean;
}

export function MovementCard({ movement, featured = false }: MovementCardProps) {
  return (
    <Link
      href={`/theory/${movement.slug}`}
      className={`${styles.card} ${featured ? styles.featured : ''}`}
      style={{ '--accent-color': movement.accentColor } as React.CSSProperties}
    >
      <div className={styles.header}>
        <span className={styles.era}>{movement.era}</span>
        <span className={styles.origin}>{movement.origin}</span>
      </div>
      
      <h3 className={styles.title}>{movement.name}</h3>
      
      <p className={styles.description}>{movement.description}</p>
      
      <div className={styles.traits}>
        {movement.keyTraits.slice(0, 3).map((trait) => (
          <span key={trait} className={styles.trait}>
            {trait}
          </span>
        ))}
      </div>
      
      <div className={styles.footer}>
        <span className={styles.learnMore}>
          Explore movement
          <ArrowRight size={16} />
        </span>
      </div>
      
      <div className={styles.accent} aria-hidden="true" />
    </Link>
  );
}

export default MovementCard;
