import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Design Principles - WebDesignTheory.dev',
  description: 'Learn essential design principles including typography, color theory, spacing, and grid systems.',
}

export default function PrinciplesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="mb-20">
        <p className="font-mono text-swiss-red text-sm tracking-widest uppercase mb-4">Foundation</p>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
          Design Principles
        </h1>
        <p className="text-xl text-minimalist-gray max-w-2xl leading-relaxed">
          Master the fundamental elements that form the backbone of exceptional design. 
          These principles work together to create cohesive, effective, and beautiful interfaces.
        </p>
      </section>

      {/* Typography Section */}
      <section className="mb-24 scroll-mt-24" id="typography">
        <div className="flex items-baseline gap-6 mb-8">
          <span className="text-6xl font-black text-swiss-red">01</span>
          <h2 className="text-4xl font-black tracking-tight">Typography</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-wide border-b border-minimalist-charcoal/10 pb-2">
              Type Scale
            </h3>
            <div className="space-y-4 font-display">
              <p className="text-6xl font-black tracking-tighter">Display</p>
              <p className="text-5xl font-black tracking-tight">Heading 1</p>
              <p className="text-4xl font-bold">Heading 2</p>
              <p className="text-2xl font-bold">Heading 3</p>
              <p className="text-xl font-semibold">Subheading</p>
              <p className="text-base">Body text appears here with optimal line length for readability.</p>
              <p className="text-sm text-minimalist-gray">Small / Caption</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wide border-b border-minimalist-charcoal/10 pb-2 mb-4">
                Key Principles
              </h3>
              <ul className="space-y-3 text-minimalist-gray">
                <li className="flex items-start gap-3">
                  <span className="text-swiss-red font-bold">→</span>
                  <span><strong className="text-minimalist-charcoal">Contrast:</strong> Mix weights (light/bold) for hierarchy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-swiss-red font-bold">→</span>
                  <span><strong className="text-minimalist-charcoal">Line Height:</strong> 1.5x for body, 1.1x for headings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-swiss-red font-bold">→</span>
                  <span><strong className="text-minimalist-charcoal">Line Length:</strong> 60-80 characters optimal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-swiss-red font-bold">→</span>
                  <span><strong className="text-minimalist-charcoal">Tracking:</strong> Tight for headings, normal for body</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-minimalist-cream p-6 font-mono text-sm">
              <p className="text-swiss-red mb-2">// Good typography</p>
              <pre className="text-minimalist-charcoal whitespace-pre-wrap">
{`.heading {
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.body {
  font-weight: 400;
  line-height: 1.6;
  max-width: 65ch;
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Color Theory Section */}
      <section className="mb-24 scroll-mt-24" id="color">
        <div className="flex items-baseline gap-6 mb-8">
          <span className="text-6xl font-black text-swiss-red">02</span>
          <h2 className="text-4xl font-black tracking-tight">Color Theory</h2>
        </div>
        
        <div className="space-y-12">
          {/* Color Palette */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide border-b border-minimalist-charcoal/10 pb-2 mb-6">
              The 60-30-10 Rule
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-video bg-minimalist-charcoal rounded-lg flex items-end p-4">
                <span className="text-white text-xs font-mono uppercase">60% — Dominant</span>
              </div>
              <div className="aspect-video bg-minimalist-gray rounded-lg flex items-end p-4">
                <span className="text-white text-xs font-mono uppercase">30% — Secondary</span>
              </div>
              <div className="aspect-video bg-swiss-red rounded-lg flex items-end p-4">
                <span className="text-white text-xs font-mono uppercase">10% — Accent</span>
              </div>
            </div>
            <p className="text-sm text-minimalist-gray mt-4">
              Balance colors: 60% dominant, 30% secondary, 10% accent for visual harmony.
            </p>
          </div>
          
          {/* Color Wheel */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wide border-b border-minimalist-charcoal/10 pb-2 mb-4">
                Color Harmonies
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1">
                    <div className="w-12 h-12 bg-red-500 rounded-l-full" />
                    <div className="w-12 h-12 bg-blue-500" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Complementary</p>
                    <p className="text-xs text-minimalist-gray">Opposite on color wheel</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex gap-1">
                    <div className="w-8 h-12 bg-red-400 rounded-l-full" />
                    <div className="w-8 h-12 bg-orange-400" />
                    <div className="w-8 h-12 bg-yellow-400 rounded-r-full" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Analogous</p>
                    <p className="text-xs text-minimalist-gray">Adjacent colors</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex gap-1">
                    <div className="w-8 h-12 bg-red-500 rounded-l-full" />
                    <div className="w-8 h-12 bg-emerald-500" />
                    <div className="w-8 h-12 bg-blue-500 rounded-r-full" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Triadic</p>
                    <p className="text-xs text-minimalist-gray">Three equal distances</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex gap-1">
                    <div className="w-6 h-12 bg-purple-500 rounded-l-full" />
                    <div className="w-6 h-12 bg-pink-500" />
                    <div className="w-6 h-12 bg-orange-500" />
                    <div className="w-6 h-12 bg-cyan-500 rounded-r-full" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Split-Complementary</p>
                    <p className="text-xs text-minimalist-gray">Complement + neighbors</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wide border-b border-minimalist-charcoal/10 pb-2 mb-4">
                Accessibility
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-black text-white rounded-lg">
                  <p className="font-mono text-xs mb-2">WCAG AAA — Contrast 7:1</p>
                  <p className="text-lg font-bold">Primary Text</p>
                </div>
                <div className="p-4 bg-minimalist-charcoal text-white rounded-lg">
                  <p className="font-mono text-xs mb-2">WCAG AA — Contrast 4.5:1</p>
                  <p className="text-lg font-bold">Secondary Text</p>
                </div>
                <div className="p-4 bg-minimalist-gray text-white rounded-lg">
                  <p className="font-mono text-xs mb-2">WCAG AA Large — Contrast 3:1</p>
                  <p className="text-lg font-bold">Large Text Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing Section */}
      <section className="mb-24 scroll-mt-24" id="spacing">
        <div className="flex items-baseline gap-6 mb-8">
          <span className="text-6xl font-black text-swiss-red">03</span>
          <h2 className="text-4xl font-black tracking-tight">Spacing</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide border-b border-minimalist-charcoal/10 pb-2 mb-6">
              Spatial System
            </h3>
            <div className="space-y-3">
              {[4, 8, 16, 24, 32, 48, 64, 96].map((space, i) => (
                <div key={space} className="flex items-center gap-4">
                  <div 
                    className="h-8 bg-swiss-red/20 border border-swiss-red/30" 
                    style={{ width: `${Math.min(space * 2, 128)}px` }} 
                  />
                  <span className="font-mono text-sm text-minimalist-gray w-16">{space}px</span>
                  <span className="text-xs text-minimalist-gray">Base unit × {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wide border-b border-minimalist-charcoal/10 pb-2 mb-4">
                Spacing Rules
              </h3>
              <ul className="space-y-3 text-minimalist-gray">
                <li className="flex items-start gap-3">
                  <span className="text-swiss-red font-bold">→</span>
                  <span><strong className="text-minimalist-charcoal">Consistency:</strong> Use multiples of your base unit (4px or 8px)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-swiss-red font-bold">→</span>
                  <span><strong className="text-minimalist-charcoal">Whitespace:</strong> Empty space is not wasted space</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-swiss-red font-bold">→</span>
                  <span><strong className="text-minimalist-charcoal">Hierarchy:</strong> More space = more importance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-swiss-red font-bold">→</span>
                  <span><strong className="text-minimalist-charcoal">Grouping:</strong> Related elements closer together</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-minimalist-charcoal text-white p-6 rounded-lg">
              <p className="text-swiss-red font-mono text-sm mb-2">// Tailwind spacing scale</p>
              <pre className="font-mono text-sm">{`p-1  = 4px   (1)
p-2  = 8px   (2)
p-4  = 16px  (4)
p-6  = 24px  (6)
p-8  = 32px  (8)
p-12 = 48px  (12)
p-16 = 64px  (16)`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Systems Section */}
      <section className="mb-24 scroll-mt-24" id="grid">
        <div className="flex items-baseline gap-6 mb-8">
          <span className="text-6xl font-black text-swiss-red">04</span>
          <h2 className="text-4xl font-black tracking-tight">Grid Systems</h2>
        </div>
        
        <div className="space-y-12">
          {/* Visual Grid Examples */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide border-b border-minimalist-charcoal/10 pb-2 mb-6">
              Column Grid
            </h3>
            <div className="space-y-8">
              {/* 12 Column */}
              <div>
                <p className="text-sm text-minimalist-gray mb-2">12-Column Grid (Most Flexible)</p>
                <div className="grid grid-cols-12 gap-2">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="h-16 bg-swiss-red/10 border border-swiss-red/30 rounded" />
                  ))}
                </div>
              </div>
              
              {/* 8 Column */}
              <div>
                <p className="text-sm text-minimalist-gray mb-2">8-Column Grid (Modular)</p>
                <div className="grid grid-cols-8 gap-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="h-16 bg-swiss-red/10 border border-swiss-red/30 rounded" />
                  ))}
                </div>
              </div>
              
              {/* 6 Column */}
              <div>
                <p className="text-sm text-minimalist-gray mb-2">6-Column Grid (Simple)</p>
                <div className="grid grid-cols-6 gap-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-16 bg-swiss-red/10 border border-swiss-red/30 rounded" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Grid Principles */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wide border-b border-minimalist-charcoal/10 pb-2 mb-4">
                Grid Benefits
              </h3>
              <ul className="space-y-3 text-minimalist-gray">
                <li className="flex items-start gap-3">
                  <span className="text-swiss-red font-bold">→</span>
                  <span><strong className="text-minimalist-charcoal">Alignment:</strong> Creates visual order and rhythm</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-swiss-red font-bold">→</span>
                  <span><strong className="text-minimalist-charcoal">Consistency:</strong> Predictable layouts across pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-swiss-red font-bold">→</span>
                  <span><strong className="text-minimalist-charcoal">Flexibility:</strong> Combine columns for varied layouts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-swiss-red font-bold">→</span>
                  <span><strong className="text-minimalist-charcoal">Responsive:</strong> Columns collapse gracefully</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-minimalist-cream p-6 rounded-lg">
              <h3 className="text-lg font-bold uppercase tracking-wide border-b border-minimalist-charcoal/10 pb-2 mb-4">
                Key Measurements
              </h3>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-minimalist-gray">Container max-width</span>
                  <span className="font-bold">1280px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-minimalist-gray">Column gap</span>
                  <span className="font-bold">24px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-minimalist-gray">Container padding</span>
                  <span className="font-bold">24px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-minimalist-gray">Breakpoints</span>
                  <span className="font-bold">sm:640, md:768, lg:1024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="border-t border-minimalist-charcoal/10 pt-16">
        <h2 className="text-2xl font-black tracking-tight mb-8">Quick Reference</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="p-6 bg-minimalist-cream rounded-lg">
            <p className="text-3xl font-black text-swiss-red mb-2">4px</p>
            <p className="font-bold text-sm">Base Unit</p>
            <p className="text-xs text-minimalist-gray mt-1">Smallest spacing increment</p>
          </div>
          <div className="p-6 bg-minimalist-cream rounded-lg">
            <p className="text-3xl font-black text-swiss-red mb-2">8</p>
            <p className="font-bold text-sm">Column Count</p>
            <p className="text-xs text-minimalist-gray mt-1">Optimal for most layouts</p>
          </div>
          <div className="p-6 bg-minimalist-cream rounded-lg">
            <p className="text-3xl font-black text-swiss-red mb-2">65</p>
            <p className="font-bold text-sm">Characters</p>
            <p className="text-xs text-minimalist-gray mt-1">Optimal line length (ch)</p>
          </div>
          <div className="p-6 bg-minimalist-cream rounded-lg">
            <p className="text-3xl font-black text-swiss-red mb-2">4.5:1</p>
            <p className="font-bold text-sm">Contrast Ratio</p>
            <p className="text-xs text-minimalist-gray mt-1">Minimum AA compliance</p>
          </div>
        </div>
      </section>
    </div>
  )
}
