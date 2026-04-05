'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import styles from './Navigation.module.css';

const movements = [
  { label: 'Brutalism', href: '/brutalism' },
  { label: 'Minimalism', href: '/minimalism' },
  { label: 'Swiss Design', href: '/swiss' },
  { label: 'Principles', href: '/principles' },
  { label: 'Glassmorphism', href: '/glassmorphism' },
  { label: 'Neumorphism', href: '/neumorphism' },
  { label: 'Cyberpunk', href: '/cyberpunk' },
  { label: 'Retro/Vaporwave', href: '/retro-vaporwave' },
  { label: 'Material Design', href: '/material-design' },
  { label: 'Organic/Fluid', href: '/organic-fluid' },
  { label: 'Typographic', href: '/typographic' },
  { label: 'Grunge/Web1', href: '/grunge-web1' },
  { label: 'Maximalism', href: '/maximalism' },
  { label: 'Art Deco', href: '/art-deco' },
];

const mainNavItems = [
  { label: 'Movements', href: '/' },
  { label: 'Glossary', href: '/glossary' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMovementsOpen, setIsMovementsOpen] = useState(false);
  const pathname = usePathname();
  const movementsRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMovementsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (movementsRef.current && !movementsRef.current.contains(event.target as Node)) {
        setIsMovementsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Check if a movement link is active
  const isMovementActive = () => {
    return movements.some(m => m.href === pathname);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav} aria-label="Main navigation">
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

        {/* Desktop Navigation */}
        <ul className={styles.navList}>
          {/* Movements Dropdown */}
          <li className={styles.navItem} ref={movementsRef}>
            <button
              className={`${styles.navLink} ${styles.navDropdownTrigger} ${isMovementActive() ? styles.active : ''}`}
              onClick={() => setIsMovementsOpen(!isMovementsOpen)}
              aria-expanded={isMovementsOpen}
              aria-haspopup="true"
            >
              Movements
              <ChevronDown
                size={14}
                className={`${styles.chevron} ${isMovementsOpen ? styles.chevronOpen : ''}`}
              />
            </button>
            {isMovementsOpen && (
              <div className={styles.dropdown}>
                <div className={styles.dropdownGrid}>
                  {movements.map((movement) => (
                    <Link
                      key={movement.href}
                      href={movement.href}
                      className={`${styles.dropdownLink} ${pathname === movement.href ? styles.active : ''}`}
                      onClick={() => setIsMovementsOpen(false)}
                    >
                      {movement.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          {mainNavItems.slice(1).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className={styles.mobileMenuHeader}>
          <span className={styles.mobileMenuTitle}>Movements</span>
          <ChevronDown size={16} className={styles.mobileChevron} />
        </div>
        <ul className={styles.mobileNavList}>
          {movements.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.mobileNavLink} ${pathname === item.href ? styles.active : ''}`}
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.mobileMenuDivider} />
        <ul className={styles.mobileNavList}>
          {mainNavItems.slice(1).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.mobileNavLink} ${pathname === item.href ? styles.active : ''}`}
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}

export default Navigation;