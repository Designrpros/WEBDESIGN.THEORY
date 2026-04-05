'use client';

export default function ArtDecoPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-[#d4af37]">
      <header className="sticky top-0 z-50 bg-[#0d0d0d] border-b-2 border-[#d4af37]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-2xl font-black tracking-widest uppercase text-[#d4af37]">ART DECO</span>
          <nav className="flex gap-8 text-sm font-bold uppercase tracking-wider text-[#d4af37]/70">
            <a href="/" className="hover:text-[#d4af37] transition-colors">Home</a>
            <a href="/maximalism" className="hover:text-[#d4af37] transition-colors">Maximalism</a>
          </nav>
        </div>
      </header>

      <section className="min-h-[80vh] relative overflow-hidden border-b-2 border-[#d4af37]">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#d4af37]" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-[#d4af37]" />
          <div className="absolute top-1/4 left-0 w-1 h-full bg-[#d4af37]" />
          <div className="absolute top-1/4 right-0 w-1 h-full bg-[#d4af37]" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-[#d4af37] rotate-45 opacity-20" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="inline-block border border-[#d4af37] px-4 py-2 text-sm font-black uppercase tracking-widest text-[#d4af37] mb-8">
            Design Concept 11
          </div>
          <h1 className="text-[12vw] font-black uppercase leading-none tracking-widest text-[#d4af37] mb-8">
            ART
          </h1>
          <h1 className="text-[12vw] font-black uppercase leading-none tracking-widest text-white mb-16">
            DECO
          </h1>
          
          <div className="flex items-center gap-4 max-w-2xl">
            <div className="h-16 w-1 bg-[#d4af37]" />
            <p className="text-white/80 text-xl font-light">Glamour from the Jazz Age. Geometric luxury. Gold against black. The age of opulence, distilled into pixels.</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-b-2 border-[#d4af37]/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-widest text-[#d4af37] mb-16">THE PHILOSOPHY</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-[#d4af37] p-8">
              <div className="w-16 h-16 border border-[#d4af37] rotate-45 mb-4 mx-auto" />
              <h3 className="text-xl font-black uppercase tracking-wider text-[#d4af37] mb-4 text-center">Geometric</h3>
              <p className="text-white/60 text-center">Triangles, chevrons, sunbursts. Symmetry as religion.</p>
            </div>
            <div className="border border-[#d4af37] p-8">
              <div className="w-16 h-1 bg-[#d4af37] mx-auto mb-4" />
              <div className="w-16 h-1 bg-[#d4af37] mx-auto mb-4" />
              <div className="w-16 h-1 bg-[#d4af37] mx-auto mb-4" />
              <h3 className="text-xl font-black uppercase tracking-wider text-[#d4af37] mb-4 text-center">Linear</h3>
              <p className="text-white/60 text-center">Bold lines. Clean edges. Everything has its place.</p>
            </div>
            <div className="border border-[#d4af37] p-8">
              <div className="w-16 h-16 rounded-full border-2 border-[#d4af37] mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[#d4af37]" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-wider text-[#d4af37] mb-4 text-center">Luxurious</h3>
              <p className="text-white/60 text-center">Gold, black, white. The colors of elegance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black uppercase tracking-widest text-[#d4af37] mb-16">IMPLEMENTATION</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1a1a1a] border border-[#d4af37] p-8">
              <h3 className="text-lg font-black uppercase tracking-wider text-[#d4af37] mb-4">Deco Border</h3>
              <pre className="text-white/60 text-sm font-mono overflow-x-auto">
{`.deco-border {
  border: 2px solid #d4af37;
  position: relative;
}

.deco-border::before {
  content: '';
  position: absolute;
  inset: 4px;
  border: 1px solid #d4af37;
}`}
              </pre>
            </div>
            <div className="bg-[#1a1a1a] border border-[#d4af37] p-8">
              <h3 className="text-lg font-black uppercase tracking-wider text-[#d4af37] mb-4">Chevron Pattern</h3>
              <pre className="text-white/60 text-sm font-mono">
{`.chevron-bg {
  background: 
    linear-gradient(135deg, #d4af37 25%, transparent 25%),
    linear-gradient(225deg, #d4af37 25%, transparent 25%);
  background-size: 20px 20px;
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t-2 border-[#d4af37]">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm font-black uppercase tracking-widest text-[#d4af37]/60">
          <span>ART DECO 2026</span>
          <div className="flex gap-8">
            <a href="/maximalism">← Maximalism</a>
            <a href="/brutalism">Brutalism →</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
