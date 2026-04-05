import { Grid3X3, Type, Minus, Quote, ArrowRight, Layers, Zap, Target } from 'lucide-react'

// Swiss Design color constants
const SWISS = {
  red: '#E30613',
  black: '#1A1A1A',
  white: '#FFFFFF',
  offwhite: '#F5F5F0',
  gray100: '#EBEBEB',
  gray200: '#D4D4D4',
  gray300: '#A3A3A3',
  gray400: '#737373',
  gray500: '#525252',
}

// Grid system data
const gridPrinciples = [
  {
    title: 'Mathematical Precision',
    desc: 'Grids are based on mathematical ratios. The baseline grid ensures vertical rhythm across all elements.',
    formula: '8px × n = spacing unit',
  },
  {
    title: 'Asymmetric Balance',
    desc: 'Content is organized asymmetrically within the grid, creating dynamic tension while maintaining harmony.',
    formula: 'Column × Gutter × Margin',
  },
  {
    title: 'Modular Scale',
    desc: 'Elements relate to each other through consistent proportional relationships.',
    formula: '1 : 2 : 4 : 8 : 16 : 32',
  },
]

// Typography principles data
const typographyPrinciples = [
  {
    name: 'Akzidenz-Grotesk',
    era: '1896',
    note: 'The original Swiss typeface, predating Helvetica',
  },
  {
    name: 'Helvetica',
    era: '1957',
    note: 'Created by Max Miedinger, refined Swiss design',
  },
  {
    name: 'Univers',
    era: '1957',
    note: 'Adrian Frutiger\'s contribution to the style',
  },
]

// Key figures in Swiss Design
const keyFigures = [
  {
    name: 'Josef Müller-Brockmann',
    role: 'Grid Systems Pioneer',
    work: 'Grid systems in graphic design',
  },
  {
    name: 'Max Bill',
    role: 'Universal Designer',
    work: 'Concrete art & design education',
  },
  {
    name: 'Emil Ruder',
    role: 'Typography Master',
    work: 'Typography handbook',
  },
  {
    name: 'Armin Hofmann',
    role: 'Visual Communicator',
    work: 'Graphic design manual',
  },
]

// Visual examples with code
const visualExamples = [
  {
    title: 'Swiss Grid Layout',
    description: 'Classic 12-column grid with mathematical spacing',
    code: `/* Swiss 12-Column Grid */
.swiss-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px; /* 8px × 3 */
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 48px;
}

/* Module: 8px baseline */
.module {
  height: 8px;
  line-height: 8px;
}

/* Mathematical proportions */
.ratio-1 { flex: 1; }
.ratio-2 { flex: 2; }
.ratio-3 { flex: 3; }
.ratio-4 { flex: 4; }`,
  },
  {
    title: 'Swiss Typography',
    description: 'Objective typography with mathematical spacing',
    code: `/* Swiss Typographic System */
.swiss-text {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.2;
}

/* Mathematical type scale */
.text-display { font-size: 96px; line-height: 1; }
.text-h1 { font-size: 64px; line-height: 1.05; }
.text-h2 { font-size: 48px; line-height: 1.1; }
.text-h3 { font-size: 32px; line-height: 1.15; }
.text-h4 { font-size: 24px; line-height: 1.2; }
.text-body { font-size: 16px; line-height: 1.5; }
.text-small { font-size: 14px; line-height: 1.4; }`,
  },
  {
    title: 'Red Accent System',
    description: 'Strategic use of Swiss red for emphasis',
    code: `/* Swiss Red Accent System */
.swiss-accent {
  background-color: #E30613;
  color: #FFFFFF;
}

.swiss-accent-text {
  color: #E30613;
}

/* Strategic red placement */
.red-line {
  height: 4px;
  width: 48px;
  background: #E30613;
}

.red-block {
  background: #E30613;
  aspect-ratio: 1;
  width: 64px;
}

/* Black and white harmony */
.swiss-bw {
  background: #1A1A1A;
  color: #FFFFFF;
}

.swiss-offwhite {
  background: #F5F5F0;
  color: #1A1A1A;
}`,
  },
]

// Interactive Grid Demo Component
function GridDemo() {
  return (
    <div className="bg-white border border-swiss-gray-200 p-8">
      <div className="mb-6">
        <span className="text-xs font-mono text-swiss-gray-400 uppercase tracking-wider">Live Demo</span>
      </div>
      <div className="grid grid-cols-12 gap-3">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-16 bg-swiss-gray-100 flex items-center justify-center">
            <span className="text-xs font-mono text-swiss-gray-400">{i + 1}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-12 gap-3 mt-3">
        <div className="col-span-4 h-24 bg-swiss-red" />
        <div className="col-span-4 h-24 bg-swiss-black" />
        <div className="col-span-4 h-24 bg-swiss-gray-300" />
      </div>
      <div className="grid grid-cols-12 gap-3 mt-3">
        <div className="col-span-6 h-32 bg-swiss-black text-white flex items-center justify-center">
          <span className="text-4xl font-black">01</span>
        </div>
        <div className="col-span-6 h-32 bg-swiss-offwhite p-6">
          <p className="text-sm text-swiss-gray-500 uppercase tracking-wider mb-2">Content Block</p>
          <p className="text-swiss-black font-light leading-relaxed">
            Mathematical precision meets visual clarity.
          </p>
        </div>
      </div>
    </div>
  )
}

// Typography Demo Component
function TypographyDemo() {
  return (
    <div className="bg-swiss-offwhite p-8 border border-swiss-gray-200">
      <div className="mb-8">
        <span className="text-xs font-mono text-swiss-gray-400 uppercase tracking-wider">Typographic Hierarchy</span>
      </div>
      <div className="space-y-6">
        <div>
          <span className="text-xs text-swiss-gray-400 uppercase tracking-wider">Display</span>
          <p className="text-7xl font-black text-swiss-black leading-none tracking-tight">SWISS</p>
        </div>
        <div>
          <span className="text-xs text-swiss-gray-400 uppercase tracking-wider">Heading 1</span>
          <p className="text-5xl font-black text-swiss-black leading-none tracking-tight">Design</p>
        </div>
        <div>
          <span className="text-xs text-swiss-gray-400 uppercase tracking-wider">Heading 2</span>
          <p className="text-3xl font-bold text-swiss-black tracking-tight">International Typographic Style</p>
        </div>
        <div className="border-l-4 border-swiss-red pl-6">
          <span className="text-xs text-swiss-gray-400 uppercase tracking-wider">Body Text</span>
          <p className="text-swiss-gray-500 font-light leading-relaxed max-w-xl">
            The International Typographic Style, also known as the Swiss Style, 
            is characterized by clean typography, mathematical grid layouts, 
            and the use of sans-serif typefaces.
          </p>
        </div>
      </div>
    </div>
  )
}

// Whitespace Demo Component
function WhitespaceDemo() {
  return (
    <div className="bg-white p-12 border border-swiss-gray-200">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-swiss-red mx-auto mb-8" />
        <h3 className="text-2xl font-bold text-swiss-black mb-4">Whitespace is Active</h3>
        <p className="text-swiss-gray-400 max-w-md mx-auto font-light">
          In Swiss Design, empty space is not wasted—it is a deliberate element 
          that creates rhythm and allows content to breathe.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 text-center">
        <div className="p-4">
          <div className="text-4xl font-black text-swiss-black mb-2">8px</div>
          <div className="text-xs text-swiss-gray-400 uppercase tracking-wider">Minimum</div>
        </div>
        <div className="p-4">
          <div className="text-4xl font-black text-swiss-black mb-2">24px</div>
          <div className="text-xs text-swiss-gray-400 uppercase tracking-wider">Standard</div>
        </div>
        <div className="p-4">
          <div className="text-4xl font-black text-swiss-black mb-2">48px</div>
          <div className="text-xs text-swiss-gray-400 uppercase tracking-wider">Section</div>
        </div>
      </div>
    </div>
  )
}

export default function SwissDesignPage() {
  return (
    <div className="min-h-screen bg-swiss-offwhite">
      {/* Hero Section */}
      <section className="bg-swiss-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 py-24 lg:py-32 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-swiss-red flex items-center justify-center">
                  <Grid3X3 className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm uppercase tracking-widest text-swiss-gray-400">
                  Design Theory / Swiss Style
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-8">
                Swiss
                <br />
                <span className="text-swiss-red">Design</span>
              </h1>
              <p className="text-xl text-swiss-gray-300 font-light leading-relaxed mb-8 max-w-lg">
                The International Typographic Style emerged from Switzerland in the 1950s, 
                establishing principles of mathematical grids, objective typography, 
                and visual clarity that define modern design.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#history" 
                  className="inline-flex items-center gap-2 bg-swiss-red text-white px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-red-700 transition-colors"
                >
                  Explore History
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="#grid" 
                  className="inline-flex items-center gap-2 border border-swiss-gray-500 text-white px-8 py-4 font-bold uppercase tracking-wider text-sm hover:border-white transition-colors"
                >
                  Grid Systems
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-6 gap-2 opacity-20">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="aspect-square bg-white" />
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4">
                  <div className="w-32 h-32 bg-swiss-red" />
                  <div className="w-32 h-32 bg-white" />
                  <div className="w-32 h-32 bg-swiss-red" />
                  <div className="w-32 h-32 bg-white" />
                  <div className="w-32 h-32 bg-swiss-red" />
                  <div className="w-32 h-32 bg-white" />
                  <div className="w-32 h-32 bg-white" />
                  <div className="w-32 h-32 bg-swiss-red" />
                  <div className="w-32 h-32 bg-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Characteristics Bar */}
      <section className="bg-white border-b border-swiss-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-swiss-gray-200">
            {[
              { value: '1950s', label: 'Origin Era' },
              { value: '12', label: 'Column Grid' },
              { value: '8px', label: 'Base Unit' },
              { value: '#E30613', label: 'Swiss Red' },
            ].map((stat, i) => (
              <div key={i} className="py-8 px-6 text-center first:pl-0 last:pr-0">
                <div className="text-2xl md:text-3xl font-black text-swiss-black mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-swiss-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="bg-white py-24 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-12 bg-swiss-red" />
                <span className="text-sm uppercase tracking-widest text-swiss-gray-400">History</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-swiss-black leading-none tracking-tight mb-8">
                Origins of the
                <br />
                International Style
              </h2>
              <div className="space-y-6 text-swiss-gray-500 font-light leading-relaxed">
                <p>
                  The International Typographic Style, commonly known as Swiss Design, 
                  emerged in the late 1940s and early 1950s from the graphic design schools 
                  of Zurich and Basel, Switzerland.
                </p>
                <p>
                  Influenced by the Bauhaus movement and constructivist aesthetics, Swiss 
                  designers sought a universal visual language based on mathematical grids, 
                  objective photography, and sans-serif typography.
                </p>
                <p>
                  The style gained international recognition through publications like 
                  <em> Neue Grafik</em> (New Graphic Design), founded in 1958, which 
                  showcased the work of pioneers like Josef Müller-Brockmann.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              {keyFigures.map((figure, i) => (
                <div key={i} className="flex gap-6 p-6 bg-swiss-offwhite border-l-4 border-swiss-red">
                  <div className="w-16 h-16 bg-swiss-gray-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-black text-swiss-gray-400">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-swiss-black mb-1">{figure.name}</h3>
                    <p className="text-sm text-swiss-red font-medium uppercase tracking-wider mb-2">{figure.role}</p>
                    <p className="text-sm text-swiss-gray-400 font-light">{figure.work}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="bg-swiss-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-12 bg-swiss-red" />
              <span className="text-sm uppercase tracking-widest text-swiss-gray-400">Core Principles</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black leading-none tracking-tight">
              Design Fundamentals
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Objectivity',
                desc: 'Design should communicate objectively without emotional or subjective influence. Function determines form.'
              },
              {
                icon: Grid3X3,
                title: 'Grid Systems',
                desc: 'Mathematical grids provide structure and consistency, organizing content in harmonious relationships.'
              },
              {
                icon: Type,
                title: 'Typography',
                desc: 'Sans-serif typefaces with precise spacing create clear, readable, and universal communication.'
              },
              {
                icon: Minus,
                title: 'Simplicity',
                desc: 'Reduction to essential elements. Every component must justify its presence through function.'
              },
              {
                icon: Layers,
                title: 'Hierarchy',
                desc: 'Clear visual hierarchy guides the viewer through content in a logical, predetermined order.'
              },
              {
                icon: Zap,
                title: 'Clarity',
                desc: 'Maximum legibility and readability. Design should be immediately comprehensible.'
              },
            ].map((principle, i) => (
              <div key={i} className="p-8 border border-swiss-gray-500 hover:border-swiss-red transition-colors group">
                <principle.icon className="w-8 h-8 text-swiss-red mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                <p className="text-swiss-gray-400 font-light leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Systems Section */}
      <section id="grid" className="bg-white py-24 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-12 bg-swiss-red" />
                <span className="text-sm uppercase tracking-widest text-swiss-gray-400">Grid Systems</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-swiss-black leading-none tracking-tight mb-8">
                Mathematical
                <br />
                Structure
              </h2>
              <p className="text-swiss-gray-500 font-light leading-relaxed mb-8">
                Swiss grid systems are built on mathematical principles. The 8-pixel base unit 
                creates a modular system where all spacing, typography, and layout elements 
                relate to each other through consistent proportions.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-swiss-offwhite px-6 py-4">
                  <div className="text-2xl font-black text-swiss-black">8px</div>
                  <div className="text-xs text-swiss-gray-400 uppercase tracking-wider">Base Unit</div>
                </div>
                <div className="bg-swiss-offwhite px-6 py-4">
                  <div className="text-2xl font-black text-swiss-black">12</div>
                  <div className="text-xs text-swiss-gray-400 uppercase tracking-wider">Columns</div>
                </div>
                <div className="bg-swiss-offwhite px-6 py-4">
                  <div className="text-2xl font-black text-swiss-black">24px</div>
                  <div className="text-xs text-swiss-gray-400 uppercase tracking-wider">Gutter</div>
                </div>
              </div>
            </div>
            <div>
              <GridDemo />
            </div>
          </div>

          {/* Grid Principles */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {gridPrinciples.map((principle, i) => (
              <div key={i} className="p-8 bg-swiss-offwhite">
                <div className="text-xs font-mono text-swiss-red mb-4">0{i + 1}</div>
                <h3 className="text-xl font-bold text-swiss-black mb-4">{principle.title}</h3>
                <p className="text-swiss-gray-500 font-light mb-6 leading-relaxed">{principle.desc}</p>
                <div className="bg-swiss-black text-white px-4 py-2 font-mono text-sm">
                  {principle.formula}
                </div>
              </div>
            ))}
          </div>

          {/* Code Example */}
          <div className="bg-swiss-black text-white p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-swiss-red" />
                <div className="w-3 h-3 rounded-full bg-swiss-gray-500" />
                <div className="w-3 h-3 rounded-full bg-swiss-gray-500" />
              </div>
              <span className="font-mono text-xs text-swiss-gray-400 uppercase tracking-wider">
                grid-system.css
              </span>
            </div>
            <pre className="text-sm font-mono text-swiss-gray-300 overflow-x-auto">
              <code>{visualExamples[0].code}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section id="typography" className="bg-swiss-offwhite py-24 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-12 bg-swiss-red" />
                <span className="text-sm uppercase tracking-widest text-swiss-gray-400">Typography</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-swiss-black leading-none tracking-tight mb-8">
                Objective
                <br />
                Communication
              </h2>
              <p className="text-swiss-gray-500 font-light leading-relaxed mb-8">
                Swiss typography emphasizes legibility and clarity through the use of 
                sans-serif typefaces, mathematical spacing, and consistent type scales. 
                The goal is universal readability across languages and cultures.
              </p>
            </div>
            <div>
              <TypographyDemo />
            </div>
          </div>

          {/* Typography Scale */}
          <div className="bg-white p-8 mb-8">
            <h3 className="text-sm uppercase tracking-widest text-swiss-gray-400 mb-8">Type Scale</h3>
            <div className="space-y-6">
              {[
                { label: 'Display', size: '96px', weight: 'Black', font: 'text-8xl' },
                { label: 'H1', size: '64px', weight: 'Black', font: 'text-6xl' },
                { label: 'H2', size: '48px', weight: 'Bold', font: 'text-5xl' },
                { label: 'H3', size: '32px', weight: 'Bold', font: 'text-3xl' },
                { label: 'Body', size: '16px', weight: 'Regular', font: 'text-base' },
              ].map((item, i) => (
                <div key={i} className="flex items-baseline gap-8 border-b border-swiss-gray-100 pb-4">
                  <span className="w-16 text-xs text-swiss-gray-400 uppercase">{item.label}</span>
                  <span className="w-20 text-xs font-mono text-swiss-red">{item.size}</span>
                  <span className="w-24 text-xs text-swiss-gray-400">{item.weight}</span>
                  <p className={`${item.font} font-black text-swiss-black tracking-tight leading-none`}>
                    Swiss Design
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Typefaces */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {typographyPrinciples.map((face, i) => (
              <div key={i} className="p-8 bg-white border-l-4 border-swiss-red">
                <div className="text-xs font-mono text-swiss-gray-400 mb-4">{face.era}</div>
                <h3 className="text-xl font-bold text-swiss-black mb-2">{face.name}</h3>
                <p className="text-sm text-swiss-gray-500 font-light">{face.note}</p>
              </div>
            ))}
          </div>

          {/* Typography Code */}
          <div className="bg-swiss-black text-white p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-swiss-red" />
                <div className="w-3 h-3 rounded-full bg-swiss-gray-500" />
                <div className="w-3 h-3 rounded-full bg-swiss-gray-500" />
              </div>
              <span className="font-mono text-xs text-swiss-gray-400 uppercase tracking-wider">
                typography.css
              </span>
            </div>
            <pre className="text-sm font-mono text-swiss-gray-300 overflow-x-auto">
              <code>{visualExamples[1].code}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Whitespace Section */}
      <section id="whitespace" className="bg-white py-24 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-12 bg-swiss-red" />
                <span className="text-sm uppercase tracking-widest text-swiss-gray-400">Whitespace</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-swiss-black leading-none tracking-tight mb-8">
                Active
                <br />
                Empty Space
              </h2>
              <div className="space-y-6 text-swiss-gray-500 font-light leading-relaxed">
                <p>
                  In Swiss Design, whitespace is not wasted space—it is an active 
                  design element that creates visual rhythm and allows content to breathe.
                </p>
                <p>
                  Generous margins and padding establish clear relationships between 
                  elements while guiding the viewer's eye through the composition in 
                  a deliberate sequence.
                </p>
              </div>
              <div className="mt-8 p-6 bg-swiss-offwhite">
                <Quote className="w-8 h-8 text-swiss-red mb-4" />
                <p className="text-lg font-light text-swiss-black italic">
                  "White space is to be regarded as an active element, not a passive background."
                </p>
                <p className="text-sm text-swiss-gray-400 mt-4">— Jan Tschichold</p>
              </div>
            </div>
            <div>
              <WhitespaceDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Color System Section */}
      <section id="color" className="bg-swiss-black text-white py-24 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-12 bg-swiss-red" />
                <span className="text-sm uppercase tracking-widest text-swiss-gray-400">Color System</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black leading-none tracking-tight mb-8">
                Red, Black,
                <br />
                <span className="text-swiss-gray-400">White</span>
              </h2>
              <p className="text-swiss-gray-400 font-light leading-relaxed mb-8">
                The Swiss palette is defined by restraint. Black and white create 
                contrast and clarity, while Swiss Red (#E30613) serves as the sole 
                accent—used strategically for emphasis and hierarchy.
              </p>
            </div>
            <div>
              {/* Color Swatches */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="aspect-square bg-white flex items-end p-4">
                  <span className="text-sm font-mono text-swiss-black">#FFFFFF</span>
                </div>
                <div className="aspect-square bg-swiss-black flex items-end p-4">
                  <span className="text-sm font-mono text-white">#1A1A1A</span>
                </div>
                <div className="aspect-square bg-swiss-red flex items-end p-4">
                  <span className="text-sm font-mono text-white">#E30613</span>
                </div>
                <div className="aspect-square bg-swiss-offwhite flex items-end p-4">
                  <span className="text-sm font-mono text-swiss-black">#F5F5F0</span>
                </div>
              </div>
              {/* Grays */}
              <div className="grid grid-cols-5 gap-2">
                {['100', '200', '300', '400', '500'].map((gray) => (
                  <div 
                    key={gray} 
                    className={`aspect-square bg-swiss-gray-${gray} flex items-end p-2`}
                  >
                    <span className="text-xs font-mono text-swiss-black opacity-50">{gray}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Color Code Example */}
          <div className="mt-16 bg-swiss-gray-500/20 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-swiss-red" />
                <div className="w-3 h-3 rounded-full bg-swiss-gray-500" />
                <div className="w-3 h-3 rounded-full bg-swiss-gray-500" />
              </div>
              <span className="font-mono text-xs text-swiss-gray-400 uppercase tracking-wider">
                swiss-colors.css
              </span>
            </div>
            <pre className="text-sm font-mono text-swiss-gray-300 overflow-x-auto">
              <code>{visualExamples[2].code}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section id="implementation" className="bg-swiss-offwhite py-24 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-12 bg-swiss-red" />
              <span className="text-sm uppercase tracking-widest text-swiss-gray-400">Implementation</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-swiss-black leading-none tracking-tight mb-8">
              Tailwind CSS v4
              <br />
              Implementation
            </h2>
            <p className="text-swiss-gray-500 font-light leading-relaxed">
              Apply Swiss Design principles using Tailwind CSS v4 utilities. 
              The 8px grid system aligns naturally with Tailwind's default spacing scale.
            </p>
          </div>

          {/* Tailwind Examples */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Swiss Grid Example */}
            <div className="bg-white p-8">
              <h3 className="text-lg font-bold text-swiss-black mb-6">Swiss Grid Layout</h3>
              <div className="grid grid-cols-12 gap-6 mb-8">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="h-8 bg-swiss-gray-100" />
                ))}
              </div>
              <pre className="text-sm font-mono text-swiss-gray-500 bg-swiss-offwhite p-4 overflow-x-auto">
                <code>{`<div className="grid grid-cols-12 gap-6 max-w-6xl mx-auto px-12">
  {/* Content blocks */}
</div>`}</code>
              </pre>
            </div>

            {/* Swiss Typography Example */}
            <div className="bg-white p-8">
              <h3 className="text-lg font-bold text-swiss-black mb-6">Typography System</h3>
              <div className="space-y-4 mb-8">
                <p className="text-5xl font-black text-swiss-black tracking-tighter">HEADLINE</p>
                <p className="text-xl font-light text-swiss-gray-500">Subheadline text goes here</p>
              </div>
              <pre className="text-sm font-mono text-swiss-gray-500 bg-swiss-offwhite p-4 overflow-x-auto">
                <code>{`<h1 className="text-5xl font-black tracking-tighter">
  HEADLINE
</h1>
<p className="text-xl font-light text-gray-500">
  Subheadline text goes here
</p>`}</code>
              </pre>
            </div>

            {/* Swiss Card Example */}
            <div className="bg-white p-8">
              <h3 className="text-lg font-bold text-swiss-black mb-6">Swiss Card Component</h3>
              <div className="border-l-4 border-swiss-red pl-6 mb-8">
                <h4 className="font-bold text-swiss-black mb-2">Feature Title</h4>
                <p className="text-sm text-swiss-gray-500 font-light">Supporting description text</p>
              </div>
              <pre className="text-sm font-mono text-swiss-gray-500 bg-swiss-offwhite p-4 overflow-x-auto">
                <code>{`<div className="border-l-4 border-[#E30613] pl-6">
  <h4 className="font-bold text-[#1A1A1A]">Feature</h4>
  <p className="text-sm text-gray-500 font-light">Description</p>
</div>`}</code>
              </pre>
            </div>

            {/* Swiss Nav Example */}
            <div className="bg-swiss-black p-8">
              <h3 className="text-lg font-bold text-white mb-6">Navigation Bar</h3>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-black text-white tracking-tight">BRAND</span>
                <div className="flex gap-8">
                  {['Work', 'About', 'Contact'].map((item) => (
                    <span key={item} className="text-sm text-swiss-gray-400 hover:text-white transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <pre className="text-sm font-mono text-swiss-gray-500 bg-swiss-gray-500/30 p-4 overflow-x-auto">
                <code>{`<nav className="bg-[#1A1A1A] text-white">
  <div className="flex items-center justify-between">
    <span className="text-xl font-black tracking-tight">BRAND</span>
    <div className="flex gap-8">
      {/* Nav items */}
    </div>
  </div>
</nav>`}</code>
              </pre>
            </div>
          </div>

          {/* Tailwind Config Reference */}
          <div className="bg-swiss-black text-white p-8">
            <h3 className="text-lg font-bold mb-6">Tailwind CSS v4 Theme Configuration</h3>
            <pre className="text-sm font-mono text-swiss-gray-300 overflow-x-auto">
              <code>{`// tailwind.css or theme config
@import "tailwindcss";

@theme {
  /* Swiss Design Colors */
  --color-swiss-red: #E30613;
  --color-swiss-black: #1A1A1A;
  --color-swiss-white: #FFFFFF;
  --color-swiss-offwhite: #F5F5F0;
  --color-swiss-gray-100: #EBEBEB;
  --color-swiss-gray-200: #D4D4D4;
  --color-swiss-gray-300: #A3A3A3;
  --color-swiss-gray-400: #737373;
  --color-swiss-gray-500: #525252;
}

/* Swiss Typography Utilities */
@layer utilities {
  .swiss-headline {
    font-weight: 900;
    letter-spacing: -0.02em;
    line-height: 1;
  }
  
  .swiss-body {
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.5;
  }
  
  .swiss-caption {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Swiss Design Gallery */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-1 h-12 bg-swiss-red" />
            <h2 className="text-4xl md:text-5xl font-black text-swiss-black leading-none tracking-tight">
              Visual Examples
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {/* Example 1: Poster */}
            <div className="aspect-[3/4] bg-swiss-black p-8 flex flex-col justify-between">
              <div className="w-16 h-16 bg-swiss-red" />
              <div>
                <p className="text-4xl font-black text-white leading-none tracking-tight">MUSIK</p>
                <p className="text-swiss-gray-400 mt-2">CONCERT SERIES 2024</p>
              </div>
            </div>
            {/* Example 2: Minimal Layout */}
            <div className="aspect-[3/4] bg-swiss-offwhite p-8 flex flex-col">
              <div className="grid grid-cols-2 gap-4 flex-1 mb-4">
                <div className="bg-swiss-gray-200" />
                <div className="bg-swiss-red" />
                <div className="bg-swiss-red" />
                <div className="bg-swiss-gray-200" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-swiss-black tracking-tight">EXHIBITION</h3>
                <p className="text-swiss-gray-400">Design Museum Basel</p>
              </div>
            </div>
            {/* Example 3: Editorial */}
            <div className="aspect-[3/4] bg-white border border-swiss-gray-200 p-8 flex flex-col">
              <div className="flex-1">
                <div className="text-xs uppercase tracking-widest text-swiss-gray-400 mb-4">Volume 12</div>
                <h3 className="text-3xl font-black text-swiss-black leading-tight mb-4">
                  THE GRID
                </h3>
                <p className="text-swiss-gray-500 font-light text-sm leading-relaxed">
                  Mathematical precision in visual communication. 
                  The foundation of Swiss design methodology.
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-swiss-gray-200 pt-4 mt-4">
                <span className="text-xs text-swiss-gray-400">NEUE GRAFIK</span>
                <div className="w-8 h-8 bg-swiss-red" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-swiss-offwhite py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-black text-swiss-black leading-none tracking-tight mb-8">
                Further Study
              </h2>
              <p className="text-swiss-gray-500 font-light leading-relaxed mb-8">
                Deepen your understanding of Swiss Design through these essential 
                resources and readings.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { title: 'Grid Systems in Graphic Design', author: 'Josef Müller-Brockmann' },
                { title: 'Typography: A Manual of Design', author: 'Emil Ruder' },
                { title: 'The New Typography', author: 'Jan Tschichold' },
                { title: 'Graphic Design Manual', author: 'Armin Hofmann' },
              ].map((book, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white border-l-4 border-swiss-gray-200 hover:border-swiss-red transition-colors">
                  <div className="w-12 h-16 bg-swiss-gray-100 flex items-center justify-center flex-shrink-0">
                    <Type className="w-6 h-6 text-swiss-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-swiss-black">{book.title}</h3>
                    <p className="text-sm text-swiss-gray-400">{book.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-swiss-red py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-none tracking-tight">
                Apply Swiss Principles
              </h2>
              <p className="text-white/80 mt-4 font-light">
                Integrate mathematical grids, objective typography, and purposeful restraint into your designs.
              </p>
            </div>
            <a 
              href="/" 
              className="inline-flex items-center gap-2 bg-white text-swiss-red px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-swiss-offwhite transition-colors"
            >
              Back to Design Theory
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
