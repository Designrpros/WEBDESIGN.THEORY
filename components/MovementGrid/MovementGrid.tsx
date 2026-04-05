import type { Movement } from '@/lib/types';
import { MovementCard } from '../MovementCard/MovementCard';
import styles from './MovementGrid.module.css';

export interface MovementGridProps {
  movements: Movement[];
}

export function MovementGrid({ movements }: MovementGridProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Design Movements</h2>
          <p className={styles.subtitle}>
            Explore the movements that have shaped web design history, 
            from the functional aesthetics of Swiss Design to the playful 
            rebellion of Neo-Brutalism.
          </p>
        </div>
        
        <div className={styles.grid}>
          {movements.map((movement) => (
            <MovementCard
              key={movement.slug}
              movement={movement}
              featured={movement.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MovementGrid;
