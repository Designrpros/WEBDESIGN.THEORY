"use client";

import { useState } from "react";

export default function MaterialDesignPage() {
  const [activeExample, setActiveExample] = useState<number | null>(null);
  const [fabPosition, setFabPosition] = useState<"bottom-right" | "bottom-center">("bottom-right");

  const materialColors = [
    { name: "Blue 500", hex: "#2196F3", use: "Primary" },
    { name: "Blue 700", hex: "#1976D2", use: "Primary Dark" },
    { name: "Blue 100", hex: "#BBDEFB", use: "Primary Light" },
    { name: "Red 500", hex: "#F44336", use: "Secondary" },
    { name: "Yellow 500", hex: "#FFEB3B", use: "Accent" },
    { name: "Green 500", hex: "#4CAF50", use: "Success" },
    { name: "Purple 500", hex: "#9C27B0", use: "Secondary" },
    { name: "Orange 500", hex: "#FF9800", use: "Warning" },
    { name: "Grey 100", hex: "#F5F5F5", use: "Background" },
    { name: "Grey 800", hex: "#424242", use: "Text Primary" },
    { name: "Grey 600", hex: "#757575", use: "Text Secondary" },
    { name: "White", hex: "#FFFFFF", use: "Surface" },
  ];

  const elevationShadows = [
    { level: 0, shadow: "0dp", styles: "none", example: "Flat surfaces" },
    { level: 1, shadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)", example: "Cards at rest" },
    { level: 2, shadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)", example: "Raised buttons" },
    { level: 4, shadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)", example: "App bars" },
    { level: 6, shadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)", example: "FAB at rest" },
    { level: 8, shadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)", example: "FAB pressed" },
    { level: 16, shadow: "0 24px 48px rgba(0,0,0,0.30), 0 30px 12px rgba(0,0,0,0.22)", example: "Menus" },
    { level: 24, shadow: "0 32px 64px rgba(0,0,0,0.30), 0 30px 12px rgba(0,0,0,0.22)", example: "Dialogs" },
  ];

  const dos = [
    "Use elevation to communicate visual hierarchy",
    "Keep motion purposeful and meaningful",
    "Apply consistent spacing using 8dp grid",
    "Use Material color system for cohesion",
    "Design touch targets minimum 48x48dp",
  ];

  const donts = [
    "Don't use shadows decoratively only",
    "Don't animate without purpose",
    "Don't ignore the 8dp spacing grid",
    "Don't mix Material with other design systems",
    "Don't use low contrast text colors",
  ];

  return (
    <div style={styles.page}>
      {/* Navigation Bar */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.navLeft}>
            <svg style={styles.navIcon} viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={styles.navTitle}>Web Design Theory</span>
          </div>
          <div style={styles.navLinks}>
            <a href="#" style={styles.navLink}>Home</a>
            <a href="#" style={styles.navLink}>Principles</a>
            <a href="#" style={styles.navLinkActive}>Material Design</a>
            <a href="#" style={styles.navLink}>Resources</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>MATERIAL DESIGN</h1>
          <p style={styles.heroSubtitle}>
            Google's design language combining classic principles of good design with innovation
          </p>
          <div style={styles.heroBadges}>
            <span style={styles.heroBadge}>Created by Google</span>
            <span style={styles.heroBadge}>2014</span>
            <span style={styles.heroBadge}>Cross-platform</span>
          </div>
        </div>
        <div style={styles.heroShape}></div>
      </header>

      {/* History Section */}
      <section style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>History & Evolution</h2>
          <div style={styles.historyGrid}>
            <div style={styles.historyCard}>
              <div style={styles.historyIcon}>#</div>
              <h3 style={styles.historyCardTitle}>2014 - Launch</h3>
              <p style={styles.historyCardText}>
                Google introduced Material Design at Google I/O, unifying Android and web design with a single cohesive system.
              </p>
            </div>
            <div style={styles.historyCard}>
              <div style={styles.historyIcon}>2</div>
              <h3 style={styles.historyCardTitle}>2016 - Material 2</h3>
              <p style={styles.historyCardText}>
                Introduced customizable themes, improved accessibility, and expanded component library for greater flexibility.
              </p>
            </div>
            <div style={styles.historyCard}>
              <div style={styles.historyIcon}>3</div>
              <h3 style={styles.historyCardTitle}>2018 - Material Theming</h3>
              <p style={styles.historyCardText}>
                Added comprehensive theming capabilities allowing brands to customize Material while maintaining its essence.
              </p>
            </div>
            <div style={styles.historyCard}>
              <div style={styles.historyIcon}>4</div>
              <h3 style={styles.historyCardTitle}>2021 - Material You</h3>
              <p style={styles.historyCardText}>
                Dynamic color system that extracts colors from the user's wallpaper, creating personalized experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Examples Section */}
      <section style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>Visual Components</h2>
          <p style={styles.sectionSubtitle}>Interactive examples of Material Design components</p>
          
          <div style={styles.examplesGrid}>
            {/* Material Card */}
            <div style={styles.exampleCard}>
              <h3 style={styles.exampleTitle}>Material Card</h3>
              <p style={styles.exampleDesc}>Card with elevation shadow demonstrating depth</p>
              <div 
                style={{
                  ...styles.materialCard,
                  boxShadow: activeExample === 0 
                    ? "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
                    : "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
                }}
                onMouseEnter={() => setActiveExample(0)}
                onMouseLeave={() => setActiveExample(null)}
              >
                <div style={styles.cardHeader}>
                  <div style={styles.cardAvatar}>M</div>
                  <div>
                    <div style={styles.cardTitle}>Material Card</div>
                    <div style={styles.cardSubtitle}>With elevation shadow</div>
                  </div>
                </div>
                <div style={styles.cardImage}></div>
                <div style={styles.cardContent}>
                  <p style={styles.cardText}>
                    Cards contain content and actions about a single subject. They should be easy to scan.
                  </p>
                </div>
                <div style={styles.cardActions}>
                  <button style={styles.cardButton}>SHARE</button>
                  <button style={styles.cardButtonPrimary}>LEARN MORE</button>
                </div>
              </div>
              <p style={styles.exampleHint}>Hover to see elevation change</p>
            </div>

            {/* FAB */}
            <div style={styles.exampleCard}>
              <h3 style={styles.exampleTitle}>Floating Action Button</h3>
              <p style={styles.exampleDesc}>Primary action button with elevation</p>
              <div style={styles.fabDemo}>
                <button style={{
                  ...styles.fab,
                  position: fabPosition === "bottom-right" ? "absolute" : "relative",
                  bottom: fabPosition === "bottom-right" ? "24px" : "auto",
                  right: fabPosition === "bottom-right" ? "24px" : "auto",
                }}>
                  <svg viewBox="0 0 24 24" style={styles.fabIcon}>
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="white"/>
                  </svg>
                </button>
                <button style={styles.fabMini}>
                  <svg viewBox="0 0 24 24" style={styles.fabIconMini}>
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="white"/>
                  </svg>
                </button>
                <button style={styles.fabExtended}>
                  <svg viewBox="0 0 24 24" style={styles.fabIcon}>
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="white"/>
                  </svg>
                  <span style={styles.fabExtendedText}>CREATE</span>
                </button>
              </div>
              <p style={styles.exampleHint}>FAB demonstrates 6dp elevation</p>
            </div>

            {/* App Bar */}
            <div style={styles.exampleCard}>
              <h3 style={styles.exampleTitle}>App Bar</h3>
              <p style={styles.exampleDesc}>Top navigation with elevation</p>
              <div style={styles.appBarDemo}>
                <div style={styles.appBar}>
                  <button style={styles.appBarMenu}>
                    <svg viewBox="0 0 24 24" style={styles.menuIcon}>
                      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="white"/>
                    </svg>
                  </button>
                  <span style={styles.appBarTitle}>Application</span>
                  <div style={styles.appBarActions}>
                    <button style={styles.appBarIcon}>
                      <svg viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="white"/>
                      </svg>
                    </button>
                    <button style={styles.appBarIcon}>
                      <svg viewBox="0 0 24 24">
                        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" fill="white"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div style={styles.appBarContent}>
                  <p style={styles.appBarText}>App bars typically expose the most important actions relevant to the current screen.</p>
                </div>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div style={styles.exampleCard}>
              <h3 style={styles.exampleTitle}>Bottom Navigation</h3>
              <p style={styles.exampleDesc}>Quick access to top-level destinations</p>
              <div style={styles.bottomNavDemo}>
                <div style={styles.bottomNav}>
                  <button style={styles.bottomNavItem}>
                    <svg viewBox="0 0 24 24" style={styles.bottomNavIcon}>
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#4285F4"/>
                    </svg>
                    <span style={styles.bottomNavLabelActive}>Home</span>
                  </button>
                  <button style={styles.bottomNavItem}>
                    <svg viewBox="0 0 24 24" style={styles.bottomNavIcon}>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#757575"/>
                    </svg>
                    <span style={styles.bottomNavLabel}>Explore</span>
                  </button>
                  <button style={styles.bottomNavItem}>
                    <svg viewBox="0 0 24 24" style={styles.bottomNavIcon}>
                      <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" fill="#757575"/>
                    </svg>
                    <span style={styles.bottomNavLabel}>Saved</span>
                  </button>
                  <button style={styles.bottomNavItem}>
                    <svg viewBox="0 0 24 24" style={styles.bottomNavIcon}>
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#757575"/>
                    </svg>
                    <span style={styles.bottomNavLabel}>Profile</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>Implementation</h2>
          <p style={styles.sectionSubtitle}>Code examples for Material Design components</p>
          
          <div style={styles.codeGrid}>
            {/* Elevation Shadow Code */}
            <div style={styles.codeCard}>
              <h3 style={styles.codeTitle}>Elevation Shadows</h3>
              <pre style={styles.codeBlock}>{`/* Material Design Elevation System */
.card {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 
              0 3px 6px rgba(0,0,0,0.23);
}

.fab {
  box-shadow: 0 6px 10px rgba(0,0,0,0.14), 
              0 1px 18px rgba(0,0,0,0.12), 
              0 3px 5px rgba(0,0,0,0.20);
}

.dialog {
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 
              0 15px 12px rgba(0,0,0,0.22);
}`}</pre>
            </div>

            {/* Color System Code */}
            <div style={styles.codeCard}>
              <h3 style={styles.codeTitle}>Material Color System</h3>
              <pre style={styles.codeBlock}>{`/* Primary Colors */
--md-primary: #4285F4;
--md-primary-dark: #1976D2;
--md-primary-light: #BBDEFB;

/* Secondary Colors */
--md-secondary: #EA4335;
--md-accent: #FBBC05;
--md-success: #34A853;

/* Surface & Background */
--md-background: #FAFAFA;
--md-surface: #FFFFFF;
--md-text-primary: #212121;
--md-text-secondary: #757575;`}</pre>
            </div>

            {/* Typography Code */}
            <div style={styles.codeCard}>
              <h3 style={styles.codeTitle}>Material Typography</h3>
              <pre style={styles.codeBlock}>{`/* Type Scale */
h1 { font-size: 96px; font-weight: 300; }
h2 { font-size: 60px; font-weight: 300; }
h3 { font-size: 48px; font-weight: 400; }
h4 { font-size: 34px; font-weight: 400; }
h5 { font-size: 24px; font-weight: 400; }
h6 { font-size: 20px; font-weight: 500; }

/* Use Roboto font family */
body { font-family: 'Roboto', sans-serif; }`}</pre>
            </div>

            {/* Spacing Code */}
            <div style={styles.codeCard}>
              <h3 style={styles.codeTitle}>8dp Grid System</h3>
              <pre style={styles.codeBlock}>{`/* Material Design spacing uses 8dp base */
--space-1: 4px;   /* Touch target padding */
--space-2: 8px;   /* Icon padding */
--space-3: 16px;  /* Standard margin */
--space-4: 24px;  /* Card padding */
--space-5: 32px;  /* Section spacing */
--space-6: 48px;  /* Large gaps */

/* Component-specific */
button { min-height: 48px; }
.card { padding: 16px; }
.fab { width: 56px; height: 56px; }`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>Color Palette</h2>
          <p style={styles.sectionSubtitle}>Material Design's cohesive color system</p>
          
          <div style={styles.paletteGrid}>
            {materialColors.map((color, index) => (
              <div key={index} style={styles.paletteItem}>
                <div style={{
                  ...styles.paletteSwatch,
                  backgroundColor: color.hex,
                  border: color.hex === "#FFFFFF" ? "1px solid #E0E0E0" : "none"
                }}></div>
                <div style={styles.paletteInfo}>
                  <div style={styles.paletteName}>{color.name}</div>
                  <div style={styles.paletteHex}>{color.hex}</div>
                  <div style={styles.paletteUse}>{color.use}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.primaryColorShowcase}>
            <h3 style={styles.showcaseTitle}>Primary Color: #4285F4</h3>
            <p style={styles.showcaseDesc}>
              The primary color, blue, represents trust, reliability, and stability. 
              It creates a calm and professional feel while remaining approachable.
            </p>
          </div>
        </div>
      </section>

      {/* Elevation System Section */}
      <section style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>Elevation System</h2>
          <p style={styles.sectionSubtitle}>Shadows communicate the hierarchy of UI elements</p>
          
          <div style={styles.elevationGrid}>
            {elevationShadows.map((item, index) => (
              <div key={index} style={styles.elevationItem}>
                <div style={{
                  ...styles.elevationDemo,
                  boxShadow: item.shadow
                }}></div>
                <div style={styles.elevationInfo}>
                  <div style={styles.elevationLabel}>Level {item.level}</div>
                  <div style={styles.elevationShadow}>{item.shadow.split("px")[0]}</div>
                  <div style={styles.elevationUse}>{item.example}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Do's and Don'ts Section */}
      <section style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>Design Guidelines</h2>
          <p style={styles.sectionSubtitle}>Best practices for Material Design implementation</p>
          
          <div style={styles.guidelinesGrid}>
            <div style={styles.guidelinesCard}>
              <div style={styles.guidelinesHeader}>
                <svg viewBox="0 0 24 24" style={styles.guidelinesIcon}>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#34A853"/>
                </svg>
                <h3 style={styles.guidelinesTitle}>Do's</h3>
              </div>
              <ul style={styles.guidelinesList}>
                {dos.map((item, index) => (
                  <li key={index} style={styles.guidelinesItem}>
                    <svg viewBox="0 0 24 24" style={styles.checkIcon}>
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#34A853"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={styles.guidelinesCard}>
              <div style={styles.guidelinesHeader}>
                <svg viewBox="0 0 24 24" style={styles.guidelinesIcon}>
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="#EA4335"/>
                </svg>
                <h3 style={styles.guidelinesTitle}>Don'ts</h3>
              </div>
              <ul style={styles.guidelinesList}>
                {donts.map((item, index) => (
                  <li key={index} style={styles.guidelinesItem}>
                    <svg viewBox="0 0 24 24" style={styles.crossIcon}>
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="#EA4335"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={styles.principlesGrid}>
            <div style={styles.principleCard}>
              <h4 style={styles.principleTitle}>Elevation as Communication</h4>
              <p style={styles.principleText}>
                Shadows aren't just decorative—they communicate which elements are on top 
                and interactive. Higher elevation means the element is active or floating.
              </p>
            </div>
            <div style={styles.principleCard}>
              <h4 style={styles.principleTitle}>Motion with Purpose</h4>
              <p style={styles.principleText}>
                Every animation should have a reason: guiding attention, maintaining context, 
                or expressing the material metaphor of surfaces in motion.
              </p>
            </div>
            <div style={styles.principleCard}>
              <h4 style={styles.principleTitle}>Grid-Based Layout</h4>
              <p style={styles.principleText}>
                All spacing, sizing, and positioning should align to an 8dp grid. This 
                creates visual harmony and predictable touch targets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Material Design</h4>
            <p style={styles.footerText}>
              Google's unified design system for mobile, web, and desktop platforms.
            </p>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Navigation</h4>
            <ul style={styles.footerLinks}>
              <li><a href="#" style={styles.footerLink}>Home</a></li>
              <li><a href="#" style={styles.footerLink}>Principles</a></li>
              <li><a href="#" style={styles.footerLink}>Components</a></li>
              <li><a href="#" style={styles.footerLink}>Resources</a></li>
            </ul>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Resources</h4>
            <ul style={styles.footerLinks}>
              <li><a href="#" style={styles.footerLink}>Material Design Guidelines</a></li>
              <li><a href="#" style={styles.footerLink}>Material Icons</a></li>
              <li><a href="#" style={styles.footerLink}>Component Library</a></li>
              <li><a href="#" style={styles.footerLink}>Design Kit</a></li>
            </ul>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Learn More</h4>
            <ul style={styles.footerLinks}>
              <li><a href="#" style={styles.footerLink}>Material Blog</a></li>
              <li><a href="#" style={styles.footerLink}>Case Studies</a></li>
              <li><a href="#" style={styles.footerLink}>Community</a></li>
              <li><a href="#" style={styles.footerLink}>Accessibility</a></li>
            </ul>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p style={styles.footerCopyright}>
            Part of the Web Design Theory series. Material Design is a trademark of Google LLC.
          </p>
        </div>
      </footer>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    backgroundColor: "#FAFAFA",
    color: "#212121",
    lineHeight: 1.6,
    minHeight: "100vh",
  },
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    zIndex: 1000,
  },
  navContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
  },
  navLeft: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  navIcon: {
    width: "32px",
    height: "32px",
  },
  navTitle: {
    fontSize: "20px",
    fontWeight: 500,
    color: "#212121",
  },
  navLinks: {
    display: "flex",
    gap: "32px",
  },
  navLink: {
    color: "#757575",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 500,
    transition: "color 0.2s",
  },
  navLinkActive: {
    color: "#4285F4",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 500,
  },
  hero: {
    backgroundColor: "#4285F4",
    padding: "140px 24px 100px",
    position: "relative",
    overflow: "hidden",
  },
  heroContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },
  heroTitle: {
    fontSize: "72px",
    fontWeight: 300,
    color: "#FFFFFF",
    letterSpacing: "-0.5px",
    margin: "0 0 16px 0",
  },
  heroSubtitle: {
    fontSize: "24px",
    fontWeight: 400,
    color: "rgba(255,255,255,0.9)",
    maxWidth: "600px",
    margin: "0 0 24px 0",
  },
  heroBadges: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  heroBadge: {
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#FFFFFF",
    padding: "8px 16px",
    borderRadius: "24px",
    fontSize: "14px",
    fontWeight: 500,
  },
  heroShape: {
    position: "absolute",
    right: "-100px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "600px",
    height: "600px",
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: "50%",
  },
  section: {
    padding: "80px 24px",
  },
  sectionContent: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "40px",
    fontWeight: 400,
    color: "#212121",
    margin: "0 0 8px 0",
  },
  sectionSubtitle: {
    fontSize: "18px",
    color: "#757575",
    margin: "0 0 48px 0",
  },
  historyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  historyCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: "4px",
    padding: "24px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
  historyIcon: {
    width: "48px",
    height: "48px",
    backgroundColor: "#E3F2FD",
    color: "#4285F4",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: 500,
    marginBottom: "16px",
  },
  historyCardTitle: {
    fontSize: "20px",
    fontWeight: 500,
    color: "#212121",
    margin: "0 0 8px 0",
  },
  historyCardText: {
    fontSize: "14px",
    color: "#757575",
    margin: 0,
    lineHeight: 1.6,
  },
  examplesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "32px",
  },
  exampleCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: "4px",
    padding: "24px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
  exampleTitle: {
    fontSize: "20px",
    fontWeight: 500,
    color: "#212121",
    margin: "0 0 4px 0",
  },
  exampleDesc: {
    fontSize: "14px",
    color: "#757575",
    margin: "0 0 24px 0",
  },
  exampleHint: {
    fontSize: "12px",
    color: "#9E9E9E",
    marginTop: "16px",
    textAlign: "center" as const,
    fontStyle: "italic" as const,
  },
  materialCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: "4px",
    overflow: "hidden",
    transition: "box-shadow 0.3s ease",
    cursor: "pointer",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "16px",
  },
  cardAvatar: {
    width: "40px",
    height: "40px",
    backgroundColor: "#4285F4",
    color: "#FFFFFF",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: 500,
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#212121",
  },
  cardSubtitle: {
    fontSize: "14px",
    color: "#757575",
  },
  cardImage: {
    height: "120px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  cardContent: {
    padding: "16px",
  },
  cardText: {
    fontSize: "14px",
    color: "#424242",
    margin: 0,
    lineHeight: 1.5,
  },
  cardActions: {
    display: "flex",
    gap: "8px",
    padding: "8px 16px 16px",
  },
  cardButton: {
    backgroundColor: "transparent",
    color: "#4285F4",
    border: "none",
    padding: "8px 16px",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    textTransform: "uppercase" as const,
  },
  cardButtonPrimary: {
    backgroundColor: "#4285F4",
    color: "#FFFFFF",
    border: "none",
    padding: "8px 16px",
    fontSize: "14px",
    fontWeight: 500,
    borderRadius: "4px",
    cursor: "pointer",
    textTransform: "uppercase" as const,
  },
  fabDemo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    padding: "48px 24px",
    backgroundColor: "#F5F5F5",
    borderRadius: "4px",
    position: "relative",
    minHeight: "200px",
  },
  fab: {
    width: "56px",
    height: "56px",
    backgroundColor: "#4285F4",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 6px 10px rgba(0,0,0,0.14), 0 1px 18px rgba(0,0,0,0.12), 0 3px 5px rgba(0,0,0,0.20)",
    transition: "box-shadow 0.2s ease",
  },
  fabMini: {
    width: "40px",
    height: "40px",
    backgroundColor: "#FF9800",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  },
  fabExtended: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#4CAF50",
    borderRadius: "24px",
    border: "none",
    padding: "0 20px",
    height: "48px",
    cursor: "pointer",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  },
  fabIcon: {
    width: "24px",
    height: "24px",
  },
  fabIconMini: {
    width: "20px",
    height: "20px",
  },
  fabExtendedText: {
    color: "#FFFFFF",
    fontSize: "14px",
    fontWeight: 500,
  },
  appBarDemo: {
    borderRadius: "4px",
    overflow: "hidden",
  },
  appBar: {
    backgroundColor: "#4285F4",
    display: "flex",
    alignItems: "center",
    padding: "8px 8px 8px 8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  },
  appBarMenu: {
    backgroundColor: "transparent",
    border: "none",
    padding: "12px",
    cursor: "pointer",
    borderRadius: "50%",
  },
  menuIcon: {
    width: "24px",
    height: "24px",
  },
  appBarTitle: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: "20px",
    fontWeight: 500,
    marginLeft: "8px",
  },
  appBarActions: {
    display: "flex",
    gap: "4px",
  },
  appBarIcon: {
    backgroundColor: "transparent",
    border: "none",
    padding: "12px",
    cursor: "pointer",
    borderRadius: "50%",
  },
  appBarContent: {
    backgroundColor: "#FFFFFF",
    padding: "16px",
  },
  appBarText: {
    fontSize: "14px",
    color: "#757575",
    margin: 0,
  },
  bottomNavDemo: {
    borderRadius: "4px",
    overflow: "hidden",
  },
  bottomNav: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    boxShadow: "0 -1px 3px rgba(0,0,0,0.12)",
    padding: "8px 0",
  },
  bottomNavItem: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    padding: "8px 16px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },
  bottomNavIcon: {
    width: "24px",
    height: "24px",
    marginBottom: "4px",
  },
  bottomNavLabel: {
    fontSize: "12px",
    color: "#757575",
  },
  bottomNavLabelActive: {
    fontSize: "12px",
    color: "#4285F4",
    fontWeight: 500,
  },
  codeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "24px",
  },
  codeCard: {
    backgroundColor: "#263238",
    borderRadius: "4px",
    overflow: "hidden",
  },
  codeTitle: {
    backgroundColor: "#37474F",
    color: "#90CAF9",
    fontSize: "14px",
    fontWeight: 500,
    padding: "12px 16px",
    margin: 0,
  },
  codeBlock: {
    color: "#ECEFF1",
    fontSize: "13px",
    lineHeight: 1.6,
    padding: "16px",
    margin: 0,
    overflowX: "auto" as const,
    whiteSpace: "pre" as const,
    fontFamily: "'Roboto Mono', 'Fira Code', monospace",
  },
  paletteGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "16px",
    marginBottom: "48px",
  },
  paletteItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: "4px",
    overflow: "hidden",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
  paletteSwatch: {
    height: "80px",
  },
  paletteInfo: {
    padding: "12px",
  },
  paletteName: {
    fontSize: "14px",
    fontWeight: 500,
    color: "#212121",
  },
  paletteHex: {
    fontSize: "12px",
    color: "#757575",
    fontFamily: "'Roboto Mono', monospace",
  },
  paletteUse: {
    fontSize: "12px",
    color: "#9E9E9E",
    marginTop: "4px",
  },
  primaryColorShowcase: {
    backgroundColor: "#FFFFFF",
    borderRadius: "4px",
    padding: "32px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
  showcaseTitle: {
    fontSize: "24px",
    fontWeight: 500,
    color: "#4285F4",
    margin: "0 0 12px 0",
  },
  showcaseDesc: {
    fontSize: "16px",
    color: "#757575",
    margin: 0,
    lineHeight: 1.6,
  },
  elevationGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "32px",
  },
  elevationItem: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "16px",
  },
  elevationDemo: {
    width: "120px",
    height: "120px",
    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
    transition: "box-shadow 0.3s ease",
  },
  elevationInfo: {
    textAlign: "center" as const,
  },
  elevationLabel: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#212121",
  },
  elevationShadow: {
    fontSize: "12px",
    color: "#757575",
    fontFamily: "'Roboto Mono', monospace",
  },
  elevationUse: {
    fontSize: "12px",
    color: "#9E9E9E",
    marginTop: "4px",
  },
  guidelinesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "32px",
    marginBottom: "48px",
  },
  guidelinesCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: "4px",
    padding: "24px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
  guidelinesHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "24px",
  },
  guidelinesIcon: {
    width: "32px",
    height: "32px",
  },
  guidelinesTitle: {
    fontSize: "24px",
    fontWeight: 500,
    color: "#212121",
    margin: 0,
  },
  guidelinesList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  guidelinesItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    padding: "12px 0",
    fontSize: "14px",
    color: "#424242",
    borderBottom: "1px solid #EEEEEE",
  },
  checkIcon: {
    width: "20px",
    height: "20px",
    flexShrink: 0,
    marginTop: "2px",
  },
  crossIcon: {
    width: "20px",
    height: "20px",
    flexShrink: 0,
    marginTop: "2px",
  },
  principlesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
  },
  principleCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: "4px",
    padding: "24px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
  principleTitle: {
    fontSize: "18px",
    fontWeight: 500,
    color: "#212121",
    margin: "0 0 12px 0",
  },
  principleText: {
    fontSize: "14px",
    color: "#757575",
    margin: 0,
    lineHeight: 1.6,
  },
  footer: {
    backgroundColor: "#212121",
    color: "#FFFFFF",
    padding: "64px 24px 24px",
  },
  footerContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "48px",
    paddingBottom: "48px",
    borderBottom: "1px solid #424242",
  },
  footerSection: {},
  footerTitle: {
    fontSize: "16px",
    fontWeight: 500,
    margin: "0 0 16px 0",
  },
  footerText: {
    fontSize: "14px",
    color: "#9E9E9E",
    margin: 0,
    lineHeight: 1.6,
  },
  footerLinks: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  footerLink: {
    color: "#9E9E9E",
    textDecoration: "none",
    fontSize: "14px",
    display: "block",
    padding: "8px 0",
    transition: "color 0.2s",
  },
  footerBottom: {
    maxWidth: "1200px",
    margin: "0 auto",
    paddingTop: "24px",
  },
  footerCopyright: {
    fontSize: "12px",
    color: "#757575",
    margin: 0,
    textAlign: "center" as const,
  },
};
