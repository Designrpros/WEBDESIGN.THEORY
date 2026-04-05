'use client';

import { ArrowRight, Code } from 'lucide-react';

const characteristics = [
  {
    title: 'Heavy Borders',
    desc: 'Thick 4-8px borders that define and frame every element.',
    example: 'border-[4px] border-black shadow-[8px_8px_0_#000]'
  },
  {
    title: 'Bold Typography',
    desc: 'Chunky uppercase fonts. Think Impact, Arial Black, system-ui.',
    example: 'font-black uppercase tracking-tighter'
  },
  {
    title: 'Hard Shadows',
    desc: 'No blur. 8-12px offset shadows that feel tactile.',
    example: 'shadow-[8px_8px_0_#000] hover:shadow-[12px_12px_0_#000]'
  },
  {
    title: 'Primary Colors',
    desc: 'Yellow, red, black, white. No gradients. No pastels.',
    example: 'bg-yellow-400 bg-red-600 bg-black text-white'
  },
];

const examples = [
  { name: 'Bloomberg', url: 'bloomberg.com', desc: 'Dense info, no decoration' },
  { name: 'Balenciaga', url: 'balenciaga.com', desc: 'Fashion brutalism' },
  { name: 'Craigslist', url: 'craigslist.org', desc: 'Pure function' },
];

const dos = [
  'Use thick borders everywhere',
  'Push typography to extremes',
  'Embrace primary colors',
  'Add hard offset shadows',
  'Break grid intentionally',
];

const donts = [
  'Use gradients or soft shadows',
  'Apply thin or delicate fonts',
  'Hide the structure',
  'Add unnecessary decoration',
  'Round the corners',
];

export default function BrutalismPage() {
  return (
    <main className="min-h-screen bg-yellow-400 text-black">
      {/* Header */}
            {/* Hero */}
      <section className="min-h-[80vh] bg-yellow-400 border-b-8 border-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <span className="inline-block bg-black text-yellow-400 px-4 py-2 text-sm font-black uppercase">Design Concept 01</span>
          
          <h1 className="text-[15vw] font-black uppercase leading-none mt-8 mb-8">
            BRUTALISM
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div className="bg-black text-white p-8 border-4 border-black shadow-[8px_8px_0_#fff">
              <h2 className="text-2xl font-black uppercase mb-4">The Philosophy</h2>
              <p className="text-lg">Raw. Bold. Unapologetic. Design that refuses to apologize for existing.</p>
            </div>
            <div className="bg-red-600 text-white p-8 border-4 border-black shadow-[8px_8px_0_black">
              <h2 className="text-2xl font-black uppercase mb-4">The Aesthetic</h2>
              <p className="text-lg">Against polish. Against consistency. For function.</p>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-4">
            <a href="#history" className="bg-black text-yellow-400 px-8 py-4 font-black uppercase shadow-[6px_6px_0_#fff] hover:shadow-[8px_8px_0_fff] hover:-translate-x-1 hover:-translate-y-1 transition-all">Learn History</a>
            <a href="#code" className="bg-white text-black px-8 py-4 font-black uppercase border-4 border-black shadow-[6px_6px_0_black] hover:shadow-[8px_8px_0_black] hover:-translate-x-1 hover:-translate-y-1 transition-all">View Code</a>
          </div>
        </div>

        {/* Decorative grid overlay */}
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-10">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-l border-black/20" />
          ))}
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block bg-red-600 px-4 py-2 text-sm font-black uppercase mb-8 block">History</span>
          
          <h2 className="text-6xl md:text-8xl font-black uppercase mt-8 mb-16">THE ORIGINS</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-yellow-400 text-black p-8 border-4 border-black shadow-[8px_8px_0_black]">
                <h3 className="text-3xl font-black uppercase mb-4">1950s Architecture</h3>
                <p className="text-lg">Brutalism began with raw concrete (béton brut) in Le Corbusier&apos;s philosophy. Honest materials. Exposed structure.</p>
              </div>
              <div className="bg-white text-black p-8 border-4 border-black shadow-[8px_8px_0_black]">
                <h3 className="text-3xl font-black uppercase mb-4">2010s Web</h3>
                <p className="text-lg">Designers rebel against flat design. Embrace rawness. Craigslist energy.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="p-8">
                <h3 className="text-red-500 font-black uppercase mb-4">Timeline</h3>
                <div className="space-y-6">
                  {[
                    { year: '1950s', title: 'Architecture', desc: 'Béton brut, honest materials' },
                    { year: '1990s', title: 'Raw HTML', desc: 'Tables, frames, honest structure' },
                    { year: '2014', title: 'Tumblr', desc: 'Brutalist websites curated' },
                    { year: '2020s', title: 'Mainstream', desc: 'Bloomberg, Balenciaga, portfolios' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 border-l-4 border-white pl-4">
                      <span className="font-black w-20">{item.year}</span>
                      <div>
                        <h4 className="font-black uppercase">{item.title}</h4>
                        <p className="text-white/60">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Characteristics */}
      <section id="characteristics" className="py-24 bg-yellow-400 border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block bg-red-600 text-white px-4 py-2 font-black uppercase text-sm mb-8">Key Traits</span>
          
          <h2 className="text-6xl md:text-8xl font-black uppercase mb-16">WHAT DEFINES IT</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {characteristics.map((item, i) => (
              <div key={i} className="bg-black text-white p-8 border-4 border-black shadow-[8px_8px_0_#fff] hover:shadow-[12px_12px_0_#fff] hover:-translate-x-1 hover:-translate-y-1 transition-all">
                <h3 className="text-2xl font-black uppercase mb-4">{item.title}</h3>
                <p className="mb-4">{item.desc}</p>
                <code className="text-xs bg-white/10 px-2 py-1 font-mono">{item.example}</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Do&apos;s and Don&apos;ts */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-6xl font-black uppercase mb-16">RULES</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <span className="text-green-400 font-black uppercase mb-8 block text-2xl">DO</span>
              {dos.map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-3 border-b border-white/20">
                  <span className="text-green-400 font-black">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <span className="text-red-500 font-black uppercase mb-8 block text-2xl">DON&apos;T</span>
              {donts.map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-3 border-b border-white/20">
                  <span className="text-red-500 font-black">✗</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section id="code" className="py-24 bg-yellow-400 border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block bg-black text-yellow-400 px-4 py-2 font-black uppercase text-sm mb-8">Implementation</span>
          
          <h2 className="text-6xl font-black uppercase mt-8 mb-16">TAILWIND CSS</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black text-white p-8 border-4 border-black shadow-[8px_8px_0_#fff]">
              <h3 className="text-2xl font-black uppercase mb-6">Card Component</h3>
              <pre className="text-sm font-mono text-green-400">
{`<div className="bg-yellow-400 
  border-4 border-black 
  shadow-[8px_8px_0_#000]
  p-8 font-black uppercase">
  Raw. Bold. Honest.
</div>`}
              </pre>
            </div>
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_#000]">
              <h3 className="text-2xl font-black uppercase mb-6">Button</h3>
              <pre className="text-sm font-mono">
{`<button className="bg-black text-yellow-400 
  px-8 py-4 font-black uppercase
  shadow-[6px_6px_0_red-600
  hover:-translate-x-1 hover:-translate-y-1">
  CLICK ME
</button>`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm font-black uppercase">
          <span>BRUTALISM 2026</span>
          <div className="flex gap-8">
            <a href="/minimalism">← Minimalism</a>
            <a href="/swiss">Swiss Design →</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
