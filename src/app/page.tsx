import { ArrowRight, Palette, Layers, Type, Box, Zap } from 'lucide-react'

const concepts = [
  { 
    name: 'Brutalism',
    desc: 'Raw, honest, confrontational. Heavy typography meets exposed structure.',
    color: 'bg-zinc-950 text-zinc-50'
  },
  { 
    name: 'Minimalism',
    desc: 'Less is more. Every element earns its place.',
    color: 'bg-zinc-50 text-zinc-950'
  },
  { 
    name: 'Swiss Design',
    desc: 'Grid-based precision. Helvetica before it was a cliché.',
    color: 'bg-red-600 text-white'
  },
]

const principles = [
  { icon: Type, title: 'Typography', desc: 'Font choices, scale, hierarchy' },
  { icon: Palette, title: 'Color', desc: 'Palettes, contrast, emotion' },
  { icon: Layers, title: 'Layout', desc: 'Grid, spacing, rhythm' },
  { icon: Box, title: 'Components', desc: 'Buttons, cards, forms' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-50/90 backdrop-blur-sm border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">WebDesignTheory</span>
            <span className="text-xs text-zinc-500">.dev</span>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#concepts" className="text-zinc-600 hover:text-zinc-950">Concepts</a>
            <a href="#principles" className="text-zinc-600 hover:text-zinc-950">Principles</a>
            <button className="px-4 py-1.5 bg-zinc-950 text-zinc-50 rounded-lg text-sm font-medium">
              Start Learning
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Learn Design<br />
            <span className="text-zinc-400">By Building</span>
          </h1>
          <p className="text-xl text-zinc-600 mb-10 max-w-xl mx-auto">
            From Brutalism to Minimalism. Master design theory through 
            visual examples and practical code.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="px-6 py-3 bg-zinc-950 text-zinc-50 rounded-lg font-medium flex items-center gap-2">
              Start Free <ArrowRight size={16} />
            </button>
            <button className="px-6 py-3 border border-zinc-300 rounded-lg font-medium">
              View Concepts
            </button>
          </div>
        </div>
      </section>

      {/* Concepts Grid */}
      <section id="concepts" className="py-20 px-6 bg-zinc-950 text-zinc-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-zinc-500">01</span>
            <h2 className="text-4xl font-bold mt-2">Design Concepts</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {concepts.map((concept, i) => (
              <div key={i} className={`p-8 ${concept.color} rounded-xl`}>
                <h3 className="text-2xl font-bold mb-3">{concept.name}</h3>
                <p className="text-sm opacity-80">{concept.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section id="principles" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-zinc-500">02</span>
            <h2 className="text-4xl font-bold mt-2">Core Principles</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, i) => (
              <div key={i} className="p-6 border border-zinc-200 rounded-xl">
                <p.icon size={24} className="text-zinc-400 mb-4" />
                <h3 className="font-bold mb-1">{p.title}</h3>
                <p className="text-sm text-zinc-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-zinc-100">
        <div className="max-w-2xl mx-auto text-center">
          <Zap size={32} className="mx-auto text-zinc-400 mb-4" />
          <h2 className="text-3xl font-bold mb-4">Ready to learn?</h2>
          <p className="text-zinc-600 mb-8">
            Start with typography, master the grid, embrace whitespace.
          </p>
          <button className="px-8 py-4 bg-zinc-950 text-zinc-50 rounded-xl font-medium">
            Begin Your Journey
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-200">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-sm text-zinc-500">
          <span>WebDesignTheory.dev</span>
          <span>Built with theory in mind</span>
        </div>
      </footer>
    </main>
  )
}
