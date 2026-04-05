'use client';

export default function MaximalismPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-2xl font-black tracking-tight">MAXIMALISM</span>
          <nav className="flex gap-8 text-sm font-bold uppercase">
            <a href="/" className="hover:underline decoration-wavy">Home</a>
            <a href="/brutalism" className="hover:underline decoration-wavy">Brutalism</a>
            <a href="/minimalism" className="hover:underline decoration-wavy">Minimalism</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-[90vh] relative overflow-hidden" style={{
        background: `
          linear-gradient(45deg, #ff6b6b 0%, transparent 50%),
          linear-gradient(-45deg, #4ecdc4 0%, transparent 50%),
          linear-gradient(90deg, #ffe66d 0%, transparent 30%),
          linear-gradient(180deg, #a855f7 0%, transparent 40%),
          repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,0.03) 20px, rgba(0,0,0,0.03) 40px)
        `
      }}>
        {/* Decorative chaos */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-400 rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-20 right-20 w-48 h-48 bg-cyan-400 rounded-full opacity-40" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-yellow-400 opacity-50 rotate-45" />
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-purple-500 opacity-60" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }} />
        <div className="absolute top-1/3 right-10 w-16 h-48 bg-gradient-to-b from-pink-500 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <span className="inline-block bg-gradient-to-r from-pink-500 to-yellow-400 text-black px-4 py-2 text-sm font-black uppercase rounded-full mb-8 border-4 border-black">
            Design Concept 10
          </span>
          
          <h1 className="text-[10vw] font-black uppercase leading-none mt-8 mb-4" style={{ color: '#e11d48', WebkitTextStroke: '2px #000' }}>
            MORE
          </h1>
          <h1 className="text-[10vw] font-black uppercase leading-none mb-4" style={{ color: '#0891b2', WebkitTextStroke: '2px #000' }}>
            IS
          </h1>
          <h1 className="text-[10vw] font-black uppercase leading-none mb-16" style={{ color: '#a855f7', WebkitTextStroke: '2px #000' }}>
            MORE
          </h1>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_#000] rotate-1 hover:rotate-0 transition-transform" style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)' }}>
              <h2 className="text-2xl font-black uppercase mb-4" style={{ color: '#dc2626' }}>The Philosophy</h2>
              <p className="text-lg text-gray-800">Why settle for one pattern when you can have five? Maximalism says YES to bold, loud, and unapologetically extra design.</p>
            </div>
            <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_#000] -rotate-1 hover:rotate-0 transition-transform" style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)' }}>
              <h2 className="text-2xl font-black uppercase mb-4" style={{ color: '#1d4ed8' }}>The Aesthetic</h2>
              <p className="text-lg text-gray-800">More colors, more patterns, more elements. If minimalism is a whisper, maximalism is a ROCK CONCERT.</p>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-4">
            <a href="#history" className="bg-black text-white px-8 py-4 font-black uppercase shadow-[6px_6px_0_#e11d48] hover:shadow-[8px_8px_0_#e11d48] hover:-translate-x-1 hover:-translate-y-1 transition-all">
              Learn History
            </a>
            <a href="#code" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 font-black uppercase border-4 border-black shadow-[6px_6px_0_#000] hover:shadow-[8px_8px_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all">
              View Code
            </a>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-24 bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px),
            repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)
          `
        }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="inline-block bg-gradient-to-r from-yellow-400 to-pink-400 text-black px-4 py-2 text-sm font-black uppercase rounded-full mb-8 border-4 border-black">
            History
          </span>
          
          <h2 className="text-6xl md:text-8xl font-black uppercase mt-8 mb-16 text-white" style={{ WebkitTextStroke: '2px #fbbf24' }}>
            THE ORIGINS
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur border-4 border-yellow-400 p-8" style={{ background: 'linear-gradient(135deg, rgba(251,191,36,0.2) 0%, rgba(251,191,36,0.05) 100%)' }}>
                <h3 className="text-3xl font-black uppercase mb-4 text-yellow-400">1980s Memphis</h3>
                <p className="text-lg text-white/80">The Memphis Group said NO to boring minimalism and YES to bold colors, squiggles, and furniture that looked like it was designed by a excited child.</p>
              </div>
              <div className="bg-white/10 backdrop-blur border-4 border-pink-400 p-8" style={{ background: 'linear-gradient(135deg, rgba(236,72,153,0.2) 0%, rgba(236,72,153,0.05) 100%)' }}>
                <h3 className="text-3xl font-black uppercase mb-4 text-pink-400">2010s React</h3>
                <p className="text-lg text-white/80">In the age of minimalism, maximalism rebels. Designers embrace MORE: more colors, more patterns, more is more.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur border-4 border-cyan-400 p-8">
                <h3 className="text-cyan-400 font-black uppercase mb-4">Timeline</h3>
                <div className="space-y-6">
                  {[
                    { year: '1981', title: 'Memphis Group', desc: 'Ettore Sottsass and friends go wild' },
                    { year: '1988', title: 'Group Disbands', desc: 'But the influence lives on' },
                    { year: '2015', title: 'Maximalist Revival', desc: 'Instagram loves the chaos' },
                    { year: '2020s', title: 'Everywhere', desc: 'Even corporate gets loud' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 border-l-4 border-pink-500 pl-4">
                      <span className="font-black w-20 text-yellow-400">{item.year}</span>
                      <div>
                        <h4 className="font-black uppercase text-white">{item.title}</h4>
                        <p className="text-white/50">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Examples */}
      <section className="py-24 bg-white relative overflow-hidden" style={{
        background: `
          repeating-linear-gradient(0deg, transparent, transparent 100px, rgba(139,92,246,0.05) 100px, rgba(139,92,246,0.05) 101px),
          repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(139,92,246,0.05) 100px, rgba(139,92,246,0.05) 101px)
        `
      }}>
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-sm font-black uppercase rounded-full mb-8 border-4 border-black">
            Visual Examples
          </span>
          
          <h2 className="text-6xl font-black uppercase mb-16" style={{ color: '#7c3aed' }}>
            WHAT IT LOOKS LIKE
          </h2>

          {/* Example 1: Maximalist Card */}
          <div className="mb-16">
            <h3 className="text-2xl font-black uppercase mb-8" style={{ color: '#dc2626' }}>Maximalist Card</h3>
            <div className="relative p-12 border-4 border-black" style={{
              background: `
                linear-gradient(135deg, #fef3c7 25%, transparent 25%),
                linear-gradient(225deg, #fef3c7 25%, transparent 25%),
                linear-gradient(45deg, #fef3c7 25%, transparent 25%),
                linear-gradient(315deg, #fef3c7 25%, #fde68a 25%)
              `,
              backgroundSize: '40px 40px',
              backgroundColor: '#fef3c7'
            }}>
              <div className="relative z-10 bg-white border-4 border-black p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full border-4 border-black" style={{ background: 'conic-gradient(from 0deg, #f472b6, #fbbf24, #34d399, #60a5fa, #f472b6)' }} />
                  <div>
                    <h4 className="text-slate-800 font-black text-xl uppercase">Maximalist Element</h4>
                    <p className="text-slate-500">Everything everywhere all at once</p>
                  </div>
                </div>
                <p className="text-slate-800 text-lg leading-relaxed mb-6">
                  Multiple patterns. Multiple colors. Multiple fonts. Because why choose one when you can have ALL OF THEM.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-pink-500 text-white font-bold border-2 border-black text-sm">CHAOS</span>
                  <span className="px-4 py-2 bg-cyan-500 text-white font-bold border-2 border-black text-sm">PATTERNS</span>
                  <span className="px-4 py-2 bg-yellow-400 text-black font-bold border-2 border-black text-sm">COLORS</span>
                  <span className="px-4 py-2 bg-purple-500 text-white font-bold border-2 border-black text-sm">MORE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Example 2: Pattern Overload */}
          <div className="mb-16">
            <h3 className="text-2xl font-black uppercase mb-8" style={{ color: '#0891b2' }}>Pattern Overload</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-40 border-4 border-black" style={{ background: 'repeating-linear-gradient(45deg, #f472b6, #f472b6 10px, #fbbf24 10px, #fbbf24 20px)' }} />
              <div className="h-40 border-4 border-black" style={{ background: 'repeating-radial-gradient(circle, #60a5fa, #60a5fa 5px, #34d399 5px, #34d399 10px)' }} />
              <div className="h-40 border-4 border-black" style={{ background: 'conic-gradient(from 0deg, #a855f7, #ec4899, #f97316, #fbbf24, #a855f7)' }} />
              <div className="h-40 border-4 border-black" style={{ background: 'repeating-linear-gradient(0deg, #22d3ee, #22d3ee 5px, #a855f7 5px, #a855f7 10px)' }} />
              <div className="h-40 border-4 border-black" style={{ background: 'repeating-conic-gradient(#f472b6 0deg 10deg, #fbbf24 10deg 20deg, #34d399 20deg 30deg)' }} />
              <div className="h-40 border-4 border-black" style={{ background: 'linear-gradient(90deg, #f472b6 25%, #fbbf24 25%, #fbbf24 50%, #34d399 50%, #34d399 75%, #60a5fa 75%)' }} />
            </div>
          </div>

          {/* Example 3: Typography Chaos */}
          <div className="mb-16">
            <h3 className="text-2xl font-black uppercase mb-8" style={{ color: '#7c3aed' }}>Typography Chaos</h3>
            <div className="bg-black p-12 border-4 border-yellow-400">
              <p className="text-6xl font-black leading-none mb-4" style={{ color: '#f472b6' }}>BIG</p>
              <p className="text-8xl font-black leading-none mb-4" style={{ color: '#fbbf24', fontFamily: 'serif' }}>BOLDER</p>
              <p className="text-4xl font-black leading-none mb-4 italic" style={{ color: '#22d3ee', fontFamily: 'monospace' }}>BOLDEST</p>
              <p className="text-5xl font-black leading-none" style={{ color: '#a855f7', textDecoration: 'underline wavy #fbbf24' }}>MAXIMALIST</p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section id="code" className="py-24 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="inline-block bg-yellow-400 text-black px-4 py-2 text-sm font-black uppercase rounded-full mb-8 border-4 border-black">
            Implementation
          </span>
          
          <h2 className="text-6xl font-black uppercase mt-8 mb-16 text-white">
            TAILWIND CSS
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_#fbbf24]">
              <h3 className="text-2xl font-black uppercase mb-6" style={{ color: '#dc2626' }}>Gradient Patterns</h3>
              <pre className="text-sm font-mono text-gray-800 overflow-x-auto">
{`<div style={{
  background: \`
    repeating-linear-gradient(
      45deg,
      #f472b6,
      #f472b6 10px,
      #fbbf24 10px,
      #fbbf24 20px
    )
  \`
}}>
  CHAOS PATTERN
</div>`}
              </pre>
            </div>
            <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_#22d3ee]">
              <h3 className="text-2xl font-black uppercase mb-6" style={{ color: '#0891b2' }}>Color Overload</h3>
              <pre className="text-sm font-mono text-gray-800 overflow-x-auto">
{`<div className="bg-gradient-to-br 
  from-pink-500 
  via-purple-500 
  to-indigo-600
  p-8
  border-4 border-black">
  GRADIENT CHAOS
</div>`}
              </pre>
            </div>
          </div>

          {/* Color Palette */}
          <div className="bg-white border-4 border-black p-12 shadow-[8px_8px_0_#000]">
            <h3 className="text-2xl font-black uppercase mb-8" style={{ color: '#7c3aed' }}>Color Palette</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <div className="text-center">
                <div className="w-full h-24 bg-pink-500 border-4 border-black mb-3" />
                <span className="text-gray-800 font-mono text-sm">pink-500</span>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-purple-500 border-4 border-black mb-3" />
                <span className="text-gray-800 font-mono text-sm">purple-500</span>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-indigo-500 border-4 border-black mb-3" />
                <span className="text-gray-800 font-mono text-sm">indigo-500</span>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-cyan-500 border-4 border-black mb-3" />
                <span className="text-gray-800 font-mono text-sm">cyan-500</span>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-yellow-400 border-4 border-black mb-3" />
                <span className="text-gray-800 font-mono text-sm">yellow-400</span>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-orange-500 border-4 border-black mb-3" />
                <span className="text-gray-800 font-mono text-sm">orange-500</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-24 bg-white" style={{
        background: `
          repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(139,92,246,0.03) 20px, rgba(139,92,246,0.03) 40px)
        `
      }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-6xl font-black uppercase mb-16" style={{ color: '#7c3aed' }}>
            RULES
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-400 to-green-500 border-4 border-black p-8 shadow-[8px_8px_0_#000]">
              <span className="text-white font-black uppercase mb-8 block text-2xl">DO</span>
              {[
                'Mix multiple patterns',
                'Use bold, saturated colors',
                'Layer elements freely',
                'Embrace visual chaos',
                'Break conventional layout',
                'Add decorative elements everywhere',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-2 border-b border-black/20">
                  <span className="text-white font-black text-xl">✓</span>
                  <span className="text-white font-bold">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-red-500 to-red-600 border-4 border-black p-8 shadow-[8px_8px_0_#000]">
              <span className="text-white font-black uppercase mb-8 block text-2xl">DON&apos;T</span>
              {[
                'Play it safe',
                'Use only neutral colors',
                'Limit yourself to one pattern',
                'Worry about "too much"',
                'Be subtle about anything',
                'Apologize for being bold',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-2 border-b border-black/20">
                  <span className="text-white font-black text-xl">✗</span>
                  <span className="text-white font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6 border-t-8 border-pink-500">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm font-black uppercase">
          <span className="text-pink-500">MAXIMALISM 2026</span>
          <div className="flex gap-8">
            <a href="/minimalism" className="text-white hover:text-pink-400 transition-colors">← Minimalism</a>
            <a href="/grunge-web1" className="text-white hover:text-pink-400 transition-colors">Grunge Web 1.0 →</a>
          </div>
        </div>
      </footer>
    </main>
  );
}