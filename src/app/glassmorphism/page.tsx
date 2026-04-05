'use client';

export default function GlassmorphismPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <section className="min-h-[80vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 text-center">
          <div className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-bold text-white mb-8">
            Design Concept 01
          </div>
          <h1 className="text-[12vw] font-black text-white leading-none mb-8">
            GLASS
          </h1>
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 max-w-lg mx-auto shadow-2xl shadow-black/50">
            <h2 className="text-2xl font-bold text-white mb-4">Frosted Glass</h2>
            <p className="text-white/70">Transparency meets depth. Blur meets shadow. Apple called, they're impressed.</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-16">THE PHILOSOPHY</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Backdrop Filter</h3>
              <code className="text-cyan-300 text-sm font-mono">backdrop-blur-xl bg-white/10</code>
              <p className="text-white/60 mt-4">Use blur values from 0-96px. More blur = more glass.</p>
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Transparency</h3>
              <code className="text-cyan-300 text-sm font-mono">bg-white/[0.05] to bg-white/[0.2]</code>
              <p className="text-white/60 mt-4">Keep it subtle. Too opaque defeats the purpose.</p>
            </div>
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/5 border border-white/20 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Subtle Borders</h3>
              <code className="text-cyan-300 text-sm font-mono">border-white/10 to border-white/30</code>
              <p className="text-white/60 mt-4">Thin borders catch the light. Define edges without hard lines.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-white mb-16">IMPLEMENTATION</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Glass Card</h3>
              <pre className="text-emerald-300 text-sm font-mono overflow-x-auto">
{`.glass-card {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}`}
              </pre>
            </div>
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Glass Button</h3>
              <pre className="text-emerald-300 text-sm font-mono">
{`.glass-btn {
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.3);
  color: white;
  padding: 12px 24px;
  border-radius: 999px;
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-white mb-16">EXAMPLES</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Apple', url: 'apple.com', desc: 'macOS control center, iOS widgets' },
              { name: 'Stripe Dashboard', url: 'stripe.com', desc: 'Subtle glass panels' },
              { name: 'Figma', url: 'figma.com', desc: 'UI panels and overlays' },
            ].map((item, i) => (
              <div key={i} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white">{item.name}</h3>
                <p className="text-white/50 text-sm">{item.url}</p>
                <p className="text-white/60 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 backdrop-blur-xl bg-white/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm font-bold text-white/60">
          <span>GLASSMORPHISM 2026</span>
          <div className="flex gap-8">
            <a href="/brutalism">← Brutalism</a>
            <a href="/neumorphism">Neumorphism →</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
