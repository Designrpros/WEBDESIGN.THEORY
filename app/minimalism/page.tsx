import { ArrowRight, Check, X, Minus } from 'lucide-react'

// Code snippets for visual examples
const codeSnippets = {
  hero: `/* Minimalist Hero Section */
.hero {
  background-color: #FAFAF8;
  padding: 120px 24px;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: -0.02em;
  color: #2C2C2C;
  margin-bottom: 24px;
}

.hero-subtitle {
  font-size: 1.125rem;
  font-weight: 300;
  color: #8A8A8A;
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.6;
}`,
  
  whitespace: `/* Generous White Space */
.section {
  padding: 120px 24px;
  background: #FAFAF8;
}

.content-block {
  max-width: 640px;
  margin: 0 auto;
  padding: 64px 0;
}

.heading {
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: -0.02em;
  margin-bottom: 32px;
  color: #2C2C2C;
}`,
  
  typography: `/* Minimalist Typography */
h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 300;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

p {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  color: #8A8A8A;
}

.label {
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #8A8A8A;
}`,
  
  cards: `/* Minimalist Cards */
.card {
  background: #FAFAF8;
  border: 1px solid #E8E8E6;
  padding: 48px 32px;
  transition: border-color 0.2s ease;
}

.card:hover {
  border-color: #8A8A8A;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 400;
  color: #2C2C2C;
  margin-bottom: 12px;
}

.card-description {
  font-size: 0.9375rem;
  color: #8A8A8A;
  line-height: 1.6;
}`,
  
  button: `/* Minimalist Button */
.btn-primary {
  background-color: #2C2C2C;
  color: #FAFAF8;
  padding: 16px 32px;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  border: none;
  transition: background-color 0.2s ease;
}

.btn-primary:hover {
  background-color: #1A1A1A;
}

.btn-outline {
  background: transparent;
  color: #2C2C2C;
  border: 1px solid #E8E8E6;
  padding: 16px 32px;
}

.btn-outline:hover {
  border-color: #2C2C2C;
}`,
  
  grid: `/* Minimalist Grid */
.grid-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.content-full { grid-column: span 12; }
.content-half { grid-column: span 6; }
.content-third { grid-column: span 4; }
.content-quarter { grid-column: span 3; }`
}

// Visual example components
function HeroExample() {
  return (
    <div className="minism-example-container">
      <div className="minism-example-hero">
        <div className="minism-example-tag">Less, but better.</div>
        <h2 className="minism-example-title">Minimalism</h2>
        <p className="minism-example-text">
          Embrace restraint. Every element earns its place.
        </p>
      </div>
    </div>
  )
}

function WhiteSpaceExample() {
  return (
    <div className="minism-example-container">
      <div className="minism-whitespace-demo">
        <div className="minism-whitespace-block">
          <span className="minism-whitespace-label">Headline</span>
        </div>
        <div className="minism-whitespace-spacer" />
        <div className="minism-whitespace-block minism-whitespace-block-small">
          <span className="minism-whitespace-label">Content</span>
        </div>
      </div>
    </div>
  )
}

function TypographyExample() {
  return (
    <div className="minism-example-container">
      <div className="minism-typography-demo">
        <div className="minism-type-h1">Aa</div>
        <div className="minism-type-details">
          <span className="minism-type-label">Display</span>
          <span className="minism-type-size">48px / 300</span>
        </div>
      </div>
    </div>
  )
}

function CardExample() {
  return (
    <div className="minism-example-container">
      <div className="minism-card-demo">
        <div className="minism-card">
          <h3 className="minism-card-title">Purpose</h3>
          <p className="minism-card-text">Every element serves a function</p>
        </div>
        <div className="minism-card minism-card-hover">
          <h3 className="minism-card-title">Clarity</h3>
          <p className="minism-card-text">Clean hierarchy guides the eye</p>
        </div>
      </div>
    </div>
  )
}

function GridExample() {
  return (
    <div className="minism-example-container">
      <div className="minism-grid-demo">
        <div className="minism-grid-item minism-grid-full" />
        <div className="minism-grid-item minism-grid-half" />
        <div className="minism-grid-item minism-grid-half" />
        <div className="minism-grid-item minism-grid-third" />
        <div className="minism-grid-item minism-grid-third" />
        <div className="minism-grid-item minism-grid-third" />
      </div>
    </div>
  )
}

// Data
const characteristics = [
  {
    title: 'Simplicity',
    description: 'Remove everything that doesn\'t serve a purpose. Each element should justify its existence.',
    example: 'One clear call-to-action. One primary message.'
  },
  {
    title: 'Clarity',
    description: 'Information hierarchy is paramount. Users should understand immediately what matters most.',
    example: 'Generous contrast. Clear typography scale.'
  },
  {
    title: 'Intentionality',
    description: 'Every choice is deliberate. White space, color, and typography work in harmony.',
    example: 'Consistent spacing. Restrained color palette.'
  },
  {
    title: 'Elegance',
    description: 'Beauty through reduction. The absence of elements creates sophistication.',
    example: 'Subtle borders. Delicate hover states.'
  }
]

const dos = [
  'Use a limited color palette (2-3 colors max)',
  'Establish clear visual hierarchy with size and weight',
  'Embrace generous white space as a design element',
  'Choose typography with excellent readability',
  'Create breathing room between elements',
  'Use subtle borders instead of shadows',
  'Align elements precisely to a grid',
  'Test readability at various screen sizes'
]

const donts = [
  'Add decorative elements without purpose',
  'Use more than 2-3 font weights',
  'Crush content together to fit more',
  'Mix too many font families',
  'Use gradients as primary backgrounds',
  'Add drop shadows to everything',
  'Leave elements visually unaligned',
  'Create competing focal points'
]

const principles = [
  {
    title: 'The 80/20 Rule',
    description: '80% of user value comes from 20% of features. Identify and emphasize what matters most.'
  },
  {
    title: 'Progressive Disclosure',
    description: 'Show only what users need at each step. Reveal complexity gradually as needed.'
  },
  {
    title: 'Form Follows Function',
    description: 'If design elements don\'t serve a purpose, they shouldn\'t exist. Period.'
  },
  {
    title: 'Negative Space Power',
    description: 'Empty space isn\'t wasted space. It creates focus, breathing room, and visual hierarchy.'
  }
]

export default function MinimalismPage() {
  return (
    <div className="min-h-screen bg-minimalist-offwhite">
      {/* Hero Section */}
      <section className="minism-hero">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="minism-nav">
            <span className="minism-nav-logo">Theory</span>
            <span className="minism-nav-divider">/</span>
            <span className="minism-nav-current">Minimalism</span>
          </nav>
          
          <div className="minism-hero-content">
            <div className="minism-hero-tag">Design Style</div>
            <h1 className="minism-hero-title">Minimalism</h1>
            <p className="minism-hero-subtitle">
              Less, but better. A philosophy that embraces restraint, 
              celebrates white space, and lets content breathe.
            </p>
            <div className="minism-hero-meta">
              <div className="minism-meta-item">
                <span className="minism-meta-label">Origin</span>
                <span className="minism-meta-value">Bauhaus, 1919</span>
              </div>
              <div className="minism-meta-divider" />
              <div className="minism-meta-item">
                <span className="minism-meta-label">Focus</span>
                <span className="minism-meta-value">Clarity & Purpose</span>
              </div>
              <div className="minism-meta-divider" />
              <div className="minism-meta-item">
                <span className="minism-meta-label">Key Color</span>
                <span className="minism-meta-value">Offwhite #FAFAF8</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Example */}
      <section className="minism-section minism-section-example">
        <div className="max-w-3xl mx-auto px-6">
          <div className="minism-section-label">Visual Example</div>
          <HeroExample />
          <div className="minism-code-wrapper">
            <div className="minism-code-header">
              <div className="minism-code-dots">
                <span /><span /><span />
              </div>
              <span className="minism-code-title">hero.css</span>
            </div>
            <pre className="minism-code-block"><code>{codeSnippets.hero}</code></pre>
          </div>
        </div>
      </section>

      {/* History & Philosophy */}
      <section className="minism-section minism-section-alt">
        <div className="max-w-3xl mx-auto px-6">
          <div className="minism-section-label">History & Philosophy</div>
          
          <div className="minism-prose">
            <h2 className="minism-heading">The Birth of Less</h2>
            <p className="minism-paragraph">
              Minimalism in web design draws from a rich lineage of artistic movements. 
              The Bauhaus school in Germany (1919-1933) pioneered the idea that form follows 
              function, advocating for clean, purposeful design. This philosophy traveled 
              through Swiss Design and the International Typographic Style, eventually 
              influencing how we build digital interfaces today.
            </p>
            <p className="minism-paragraph">
              Dieter Rams, the legendary Braun designer, articulated what became the 
              Ten Principles for Good Design. At its core: good design is as little 
              design as possible. Less, but better—because simplicity drives clarity.
            </p>
          </div>

          <div className="minism-quote">
            <blockquote className="minism-quote-text">
              "Less, but better."
            </blockquote>
            <cite className="minism-quote-cite">— Dieter Rams</cite>
          </div>

          <div className="minism-prose">
            <h2 className="minism-heading">Why Minimalism Works</h2>
            <p className="minism-paragraph">
              In a world of information overload, minimalism cuts through the noise. 
              By removing visual clutter, we let users focus on what truly matters. 
              Every element gains importance when surrounded by space. Content becomes 
              king when it isn't competing for attention.
            </p>
            <p className="minism-paragraph">
              Minimalist interfaces also age gracefully. Without trendy decorations, 
              they remain relevant for years. Think of Google's search page—unchanged 
              in its essential simplicity since the beginning.
            </p>
          </div>
        </div>
      </section>

      {/* Key Characteristics */}
      <section className="minism-section">
        <div className="max-w-5xl mx-auto px-6">
          <div className="minism-section-label">Key Characteristics</div>
          <h2 className="minism-heading-lg">Defining Principles</h2>
          
          <div className="minism-grid minism-grid-2">
            {characteristics.map((char, index) => (
              <div key={index} className="minism-card">
                <span className="minism-card-number">0{index + 1}</span>
                <h3 className="minism-card-title">{char.title}</h3>
                <p className="minism-card-text">{char.description}</p>
                <div className="minism-card-example">
                  <span className="minism-example-label">Example</span>
                  <span className="minism-example-value">{char.example}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White Space Section */}
      <section className="minism-section minism-section-alt">
        <div className="max-w-3xl mx-auto px-6">
          <div className="minism-section-label">White Space</div>
          <h2 className="minism-heading-lg">The Power of Empty Space</h2>
          
          <div className="minism-prose">
            <p className="minism-paragraph">
              White space—negative space—is the most powerful tool in minimalist design. 
              It's not empty; it's intentional. White space creates rhythm, establishes 
              hierarchy, and gives elements room to exist.
            </p>
          </div>

          <WhiteSpaceExample />
          
          <div className="minism-code-wrapper">
            <div className="minism-code-header">
              <div className="minism-code-dots">
                <span /><span /><span />
              </div>
              <span className="minism-code-title">whitespace.css</span>
            </div>
            <pre className="minism-code-block"><code>{codeSnippets.whitespace}</code></pre>
          </div>

          <div className="minism-tips-grid">
            <div className="minism-tip">
              <h4 className="minism-tip-title">Macro Space</h4>
              <p className="minism-tip-text">
                Large areas between sections create breathing room and help users 
                understand content structure at a glance.
              </p>
            </div>
            <div className="minism-tip">
              <h4 className="minism-tip-title">Micro Space</h4>
              <p className="minism-tip-text">
                Spacing between lines, letters, and elements. These small decisions 
                affect readability and visual harmony.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="minism-section">
        <div className="max-w-3xl mx-auto px-6">
          <div className="minism-section-label">Typography</div>
          <h2 className="minism-heading-lg">Typography is Everything</h2>
          
          <TypographyExample />
          
          <div className="minism-code-wrapper">
            <div className="minism-code-header">
              <div className="minism-code-dots">
                <span /><span /><span />
              </div>
              <span className="minism-code-title">typography.css</span>
            </div>
            <pre className="minism-code-block"><code>{codeSnippets.typography}</code></pre>
          </div>

          <div className="minism-prose">
            <p className="minism-paragraph">
              In minimalist design, typography carries the visual weight. Without 
              decorative elements, typography must be exceptional. Choose fonts with 
              excellent readability, maintain a clear hierarchy, and let letterforms 
              become the design.
            </p>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="minism-section minism-section-alt">
        <div className="max-w-5xl mx-auto px-6">
          <div className="minism-section-label">Best Practices</div>
          <h2 className="minism-heading-lg">Do's & Don'ts</h2>
          
          <div className="minism-grid minism-grid-2">
            {/* Do's */}
            <div className="minism-list-card minism-list-card-success">
              <div className="minism-list-header">
                <Check className="minism-list-icon" />
                <h3 className="minism-list-title">Do</h3>
              </div>
              <ul className="minism-list">
                {dos.map((item, index) => (
                  <li key={index} className="minism-list-item">
                    <Check className="minism-list-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Don'ts */}
            <div className="minism-list-card minism-list-card-danger">
              <div className="minism-list-header">
                <X className="minism-list-icon" />
                <h3 className="minism-list-title">Don't</h3>
              </div>
              <ul className="minism-list">
                {donts.map((item, index) => (
                  <li key={index} className="minism-list-item">
                    <X className="minism-list-check minism-list-check-x" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Components */}
      <section className="minism-section">
        <div className="max-w-3xl mx-auto px-6">
          <div className="minism-section-label">Visual Components</div>
          <h2 className="minism-heading-lg">Cards & Buttons</h2>
          
          <div className="minism-prose">
            <p className="minism-paragraph">
              Minimalist cards use subtle borders instead of shadows. 
              Hover states are restrained—typically just a border color change.
            </p>
          </div>
          
          <CardExample />
          
          <div className="minism-code-wrapper">
            <div className="minism-code-header">
              <div className="minism-code-dots">
                <span /><span /><span />
              </div>
              <span className="minism-code-title">components.css</span>
            </div>
            <pre className="minism-code-block"><code>{codeSnippets.cards}</code></pre>
          </div>
        </div>
      </section>

      {/* Button Styles */}
      <section className="minism-section minism-section-alt">
        <div className="max-w-3xl mx-auto px-6">
          <div className="minism-section-label">UI Elements</div>
          <h2 className="minism-heading-lg">Button Variants</h2>
          
          <div className="minism-button-demo">
            <button className="minism-btn minism-btn-primary">Primary Button</button>
            <button className="minism-btn minism-btn-outline">Outline Button</button>
            <button className="minism-btn minism-btn-ghost">Ghost Button</button>
          </div>
          
          <div className="minism-code-wrapper">
            <div className="minism-code-header">
              <div className="minism-code-dots">
                <span /><span /><span />
              </div>
              <span className="minism-code-title">buttons.css</span>
            </div>
            <pre className="minism-code-block"><code>{codeSnippets.button}</code></pre>
          </div>
        </div>
      </section>

      {/* Grid System */}
      <section className="minism-section">
        <div className="max-w-3xl mx-auto px-6">
          <div className="minism-section-label">Layout</div>
          <h2 className="minism-heading-lg">Grid System</h2>
          
          <GridExample />
          
          <div className="minism-code-wrapper">
            <div className="minism-code-header">
              <div className="minism-code-dots">
                <span /><span /><span />
              </div>
              <span className="minism-code-title">grid.css</span>
            </div>
            <pre className="minism-code-block"><code>{codeSnippets.grid}</code></pre>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="minism-section minism-section-alt">
        <div className="max-w-4xl mx-auto px-6">
          <div className="minism-section-label">Design Theory</div>
          <h2 className="minism-heading-lg">Core Principles</h2>
          
          <div className="minism-principles">
            {principles.map((principle, index) => (
              <div key={index} className="minism-principle">
                <div className="minism-principle-number">
                  <Minus className="minism-principle-icon" />
                </div>
                <div className="minism-principle-content">
                  <h3 className="minism-principle-title">{principle.title}</h3>
                  <p className="minism-principle-text">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="minism-section">
        <div className="max-w-4xl mx-auto px-6">
          <div className="minism-section-label">Implementation</div>
          <h2 className="minism-heading-lg">Tailwind CSS v4 Implementation</h2>
          
          <div className="minism-implementation">
            <div className="minism-impl-step">
              <span className="minism-impl-number">01</span>
              <div className="minism-impl-content">
                <h3 className="minism-impl-title">Define Your Color Palette</h3>
                <p className="minism-impl-text">
                  Add minimalist colors to your <code className="minism-inline-code">tailwind.config.ts</code>:
                </p>
                <pre className="minism-impl-code">{`// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        minimalist: {
          offwhite: '#FAFAF8',
          charcoal: '#2C2C2C',
          gray: '#8A8A8A',
          'light-gray': '#E5E5E3',
          border: '#E8E8E6',
        }
      }
    }
  }
}`}</pre>
              </div>
            </div>

            <div className="minism-impl-step">
              <span className="minism-impl-number">02</span>
              <div className="minism-impl-content">
                <h3 className="minism-impl-title">Build Minimalist Components</h3>
                <p className="minism-impl-text">Key Tailwind classes for minimalist design:</p>
                <div className="minism-impl-examples">
                  <div className="minism-impl-example">
                    <span className="minism-impl-class">bg-minimalist-offwhite</span>
                    <span className="minism-impl-desc">Warm offwhite background</span>
                  </div>
                  <div className="minism-impl-example">
                    <span className="minism-impl-class">text-minimalist-charcoal</span>
                    <span className="minism-impl-desc">Primary text color</span>
                  </div>
                  <div className="minism-impl-example">
                    <span className="minism-impl-class">border-minimalist-border</span>
                    <span className="minism-impl-desc">Subtle borders</span>
                  </div>
                  <div className="minism-impl-example">
                    <span className="minism-impl-class">font-light tracking-tight</span>
                    <span className="minism-impl-desc">Elegant typography</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="minism-impl-step">
              <span className="minism-impl-number">03</span>
              <div className="minism-impl-content">
                <h3 className="minism-impl-title">Example Component</h3>
                <pre className="minism-impl-code">{`export function MinimalCard() {
  return (
    <div className="
      bg-minimalist-offwhite
      border border-minimalist-border
      px-8 py-12
      transition-colors duration-200
      hover:border-minimalist-gray
    ">
      <h3 className="
        text-xl font-normal text-minimalist-charcoal
        tracking-tight mb-3
      ">
        Purpose
      </h3>
      <p className="
        text-base text-minimalist-gray leading-relaxed
      ">
        Every element serves a function.
      </p>
    </div>
  )
}`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="minism-section minism-section-alt">
        <div className="max-w-3xl mx-auto px-6">
          <div className="minism-section-label">Color System</div>
          <h2 className="minism-heading-lg">Minimalist Palette</h2>
          
          <div className="minism-palette">
            <div className="minism-palette-item">
              <div className="minism-palette-swatch minism-palette-offwhite" />
              <div className="minism-palette-info">
                <span className="minism-palette-name">Offwhite</span>
                <span className="minism-palette-hex">#FAFAF8</span>
                <span className="minism-palette-var">--color-minimalist-offwhite</span>
              </div>
            </div>
            <div className="minism-palette-item">
              <div className="minism-palette-swatch minism-palette-charcoal" />
              <div className="minism-palette-info">
                <span className="minism-palette-name">Charcoal</span>
                <span className="minism-palette-hex">#2C2C2C</span>
                <span className="minism-palette-var">--color-minimalist-charcoal</span>
              </div>
            </div>
            <div className="minism-palette-item">
              <div className="minism-palette-swatch minism-palette-gray" />
              <div className="minism-palette-info">
                <span className="minism-palette-name">Gray</span>
                <span className="minism-palette-hex">#8A8A8A</span>
                <span className="minism-palette-var">--color-minimalist-gray</span>
              </div>
            </div>
            <div className="minism-palette-item">
              <div className="minism-palette-swatch minism-palette-light-gray" />
              <div className="minism-palette-info">
                <span className="minism-palette-name">Light Gray</span>
                <span className="minism-palette-hex">#E5E5E3</span>
                <span className="minism-palette-var">--color-minimalist-light-gray</span>
              </div>
            </div>
            <div className="minism-palette-item">
              <div className="minism-palette-swatch minism-palette-border" />
              <div className="minism-palette-info">
                <span className="minism-palette-name">Border</span>
                <span className="minism-palette-hex">#E8E8E6</span>
                <span className="minism-palette-var">--color-minimalist-border</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="minism-nav-section">
        <div className="max-w-5xl mx-auto px-6">
          <div className="minism-nav-grid">
            <a href="/brutalism" className="minism-nav-card minism-nav-prev">
              <span className="minism-nav-direction">
                <ArrowRight className="minism-nav-arrow minism-nav-arrow-left" />
                Previous
              </span>
              <span className="minism-nav-name">Retro Pool</span>
            </a>
            <a href="/retro" className="minism-nav-card minism-nav-next">
              <span className="minism-nav-direction">
                Next
                <ArrowRight className="minism-nav-arrow" />
              </span>
              <span className="minism-nav-name">Full Retro</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
