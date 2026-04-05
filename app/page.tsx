import { Code, Palette, Grid, ArrowRight } from 'lucide-react'

// Design style data with Poolsuite colors
const designStyles = [
  {
    id: 'brutalism',
    name: 'Retro Pool',
    tagline: 'Fun. Bold. Nostalgic.',
    description: 'Vibrant coral and mint meets brutalist structure. Retro pool vibes with punchy colors and chunky shadows.',
    color: 'bg-pool-coral',
    accent: 'text-pool-coral',
    textDark: true,
    href: '/brutalism',
  },
  {
    id: 'minimalism',
    name: 'Clean Slate',
    tagline: 'Less, but better.',
    description: 'Cream tones and brown accents. Vintage typography meets modern restraint.',
    color: 'bg-pool-mint',
    accent: 'text-pool-mint-dark',
    textDark: false,
    href: '/minimalism',
  },
  {
    id: 'retro',
    name: 'Full Retro',
    tagline: 'Warm. Cozy. Timeless.',
    description: 'Lavender and peach harmonies. A return to warmer, friendlier design.',
    color: 'bg-pool-lavender',
    accent: 'text-pool-lavender',
    textDark: false,
    href: '/retro',
  },
]

// Code snippets for each style
const codeSnippets = {
  brutalism: `.pool-card {
  background: #FF6B6B;
  border: 3px solid #1A1A1A;
  box-shadow: 6px 6px 0 #1A1A1A;
}

.pool-btn {
  background: #FF6B6B;
  color: #1A1A1A;
  font-weight: 800;
  text-transform: uppercase;
}

.pool-btn:hover {
  background: #4ECDC4;
}`,
  minimalism: `.retro-card {
  background: #FFF8F0;
  border: 2px solid #8B7355;
  box-shadow: 4px 4px 0 #8B7355;
}

.text-warm { color: #9A8F86; }`,
  retro: `.pool-lavender {
  background: #9B89B3;
}

.text-peach {
  color: #FFE66D;
}`,
}

// Visual example components
function BrutalistExample() {
  return (
    <div className="example-preview bg-pool-coral">
      <div className="pool-card">
        <h3 className="text-2xl font-black uppercase mb-2 text-brutalist-black">Poolside</h3>
        <p className="text-sm font-bold mb-4 text-brutalist-black">Coral vibes. Mint hover.</p>
        <button className="pool-btn">Dive In</button>
      </div>
    </div>
  )
}

function MinimalistExample() {
  return (
    <div className="example-preview">
      <div className="retro-card">
        <h3 className="text-4xl font-light tracking-tight text-retro-charcoal mb-4">
          Less.
        </h3>
        <p className="text-retro-warmgray font-light max-w-md mx-auto">
          Clean lines. Warm cream. Brown accents.
        </p>
        <div className="mt-6 text-sm font-bold uppercase tracking-wider text-pool-mint-dark">
          Explore minimal
        </div>
      </div>
    </div>
  )
}

function RetroExample() {
  return (
    <div className="example-preview" style={{ backgroundColor: '#9B89B3' }}>
      <div className="text-center">
        <div className="text-5xl font-black uppercase tracking-tight text-white mb-4">Lavender</div>
        <div className="text-pool-peach font-bold">Warm peach text</div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-retro-cream">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="section-header">
              Learn
              <br />
              <span className="text-pool-coral">Design</span>
              <br />
              Theory
            </h1>
            <p className="text-xl text-retro-warmgray font-light leading-relaxed mb-8 max-w-lg">
              Master design fundamentals with Poolsuite colors. 
              Retro vibes meet brutalist structure.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#styles" className="pool-btn">
                Explore Styles
              </a>
              <a href="/principles" className="px-6 py-3 font-bold uppercase tracking-wide text-retro-charcoal hover:text-pool-coral transition-colors">
                View Principles
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="pool-card bg-pool-coral text-brutalist-black">
              <Code className="w-8 h-8 mb-4" />
              <p className="font-black uppercase text-sm">Code Examples</p>
            </div>
            <div className="pool-card bg-pool-mint text-brutalist-black">
              <Palette className="w-8 h-8 mb-4" />
              <p className="font-black uppercase text-sm">Visual Demos</p>
            </div>
            <div className="pool-card bg-pool-lavender text-white col-span-2">
              <Grid className="w-8 h-8 mb-4" />
              <p className="font-black uppercase text-sm">Retro Grids</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Styles Section */}
      <section id="styles" className="bg-retro-charcoal text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Design Styles
          </h2>
          <p className="text-retro-warmgray text-lg mb-16 max-w-2xl">
            Three distinct approaches to visual communication. Each with its own personality,
            colors, and implementation strategies.
          </p>

          <div className="space-y-32">
            {designStyles.map((style, index) => (
              <div key={style.id} id={style.id} className="scroll-mt-24">
                <div className={`grid md:grid-cols-2 gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content Side */}
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-mono text-pool-coral text-sm">
                        0{index + 1}
                      </span>
                      <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">
                        {style.name}
                      </h3>
                    </div>
                    <p className={`text-2xl font-light ${style.textDark ? 'text-pool-coral-dark' : 'text-pool-coral'} mb-6`}>
                      {style.tagline}
                    </p>
                    <p className="text-retro-warmgray leading-relaxed mb-8">
                      {style.description}
                    </p>
                    <a
                      href={style.href}
                      className="inline-flex items-center gap-2 font-bold uppercase text-sm group"
                    >
                      Learn {style.name}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>

                  {/* Example Side */}
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    {style.id === 'brutalism' && <BrutalistExample />}
                    {style.id === 'minimalism' && <MinimalistExample />}
                    {style.id === 'retro' && <RetroExample />}
                  </div>
                </div>

                {/* Code Snippet */}
                <div className="mt-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-pool-coral" />
                      <div className="w-3 h-3 rounded-full bg-pool-mint" />
                      <div className="w-3 h-3 rounded-full bg-pool-lavender" />
                    </div>
                    <span className="font-mono text-xs text-retro-warmgray uppercase tracking-wider">
                      {style.id}.css
                    </span>
                  </div>
                  <pre className="code-block">
                    <code>{codeSnippets[style.id as keyof typeof codeSnippets]}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Preview */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="section-header text-retro-charcoal">
          Core
          <br />
          <span className="text-pool-coral">Principles</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Visual Hierarchy', desc: 'Guide attention through size, color, and position' },
            { title: 'Grid Systems', desc: 'Create rhythm and consistency across layouts' },
            { title: 'Typography Scale', desc: 'Establish clear relationships between text elements' },
            { title: 'Color Theory', desc: 'Use color purposefully for mood and recognition' },
            { title: 'White Space', desc: 'Give elements room to breathe and be understood' },
            { title: 'Contrast', desc: 'Make important elements stand out from the rest' },
          ].map((principle, i) => (
            <div key={i} className="border-l-4 border-pool-coral pl-6">
              <h3 className="text-xl font-black uppercase tracking-tight mb-2 text-retro-charcoal">
                {principle.title}
              </h3>
              <p className="text-retro-warmgray font-light">
                {principle.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-pool-coral py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-brutalist-black">
            Start Creating
            <br />
            <span className="text-pool-mint">Better Design</span>
          </h2>
          <p className="text-xl text-brutalist-black/70 font-light mb-12 max-w-2xl mx-auto">
            Theory without practice is philosophy. Practice without theory is chaos.
            Combine both to build exceptional interfaces.
          </p>
          <a href="/brutalism" className="inline-block bg-retro-charcoal text-pool-peach px-12 py-4 font-black uppercase tracking-wider text-lg hover:bg-brutalist-black transition-colors">
            Begin Your Journey
          </a>
        </div>
      </section>
    </div>
  )
}
