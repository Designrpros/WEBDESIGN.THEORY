'use client';

export default function TypographicPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
            <section className="min-h-[90vh] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.5em] text-[#666]">Design Concept 08</span>
          </div>
          <h1 className="text-[16vw] font-black leading-[0.85] tracking-tighter text-[#1a1a1a]">
            TYPE
          </h1>
          <div className="border-l-4 border-[#1a1a1a] pl-8 mt-12">
            <p className="text-[4vw] font-light leading-tight text-[#1a1a1a] max-w-2xl">
              Letters as art. Words as design. Typography is not decoration — it is the message.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-16">THE PHILOSOPHY</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <p className="text-[8vw] font-black leading-none text-white">Aa</p>
              <p className="text-white/60 mt-4">Serif for authority. Sans for clarity.</p>
            </div>
            <div>
              <p className="text-[8vw] font-thin leading-none text-white">Thin</p>
              <p className="text-white/60 mt-4">Weight contrast creates drama.</p>
            </div>
            <div>
              <p className="text-[8vw] font-black uppercase leading-none tracking-tighter text-[#ff3b30]">BIG</p>
              <p className="text-white/60 mt-4">Scale is the ultimate emphasis.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-[#1a1a1a] mb-16">IMPLEMENTATION</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#f5f5f5] p-8">
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-4">Display Heading</h3>
              <pre className="text-[#ff3b30] text-sm font-mono overflow-x-auto">
{`.display {
  font-size: clamp(4rem, 15vw, 20rem);
  font-weight: 900;
  line-height: 0.85;
  letter-spacing: -0.05em;
}`}
              </pre>
            </div>
            <div className="bg-[#1a1a1a] p-8">
              <h3 className="text-lg font-bold text-white mb-4">Body Text</h3>
              <pre className="text-white/60 text-sm font-mono">
{`.body {
  font-size: 1.125rem;
  line-height: 1.7;
  font-weight: 300;
  max-width: 65ch;
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-[#fafafa] border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm font-bold text-[#1a1a1a]">
          <span>TYPOGRAPHIC 2026</span>
          <div className="flex gap-8">
            <a href="/organic-fluid">← Organic/Fluid</a>
            <a href="/grunge-web1">Grunge/Web1 →</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
