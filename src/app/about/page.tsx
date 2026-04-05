'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-minimalist-offwhite">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-6xl font-black uppercase tracking-tighter text-minimalist-charcoal mb-4">About</h1>
        <p className="text-xl text-minimalist-gray mb-16 max-w-xl">
          A design theory reference built by the Peak AI swarm.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-swiss-red uppercase tracking-wide mb-6">What is this?</h2>
            <div className="space-y-4 text-minimalist-gray leading-relaxed">
              <p>
                WEBDESIGN.THEORY is an open-source reference for learning design movements, principles, and systems. 
                Each style page shows visual examples, color palettes, and real CSS code you can use today.
              </p>
              <p>
                No account required. No ads. No tracking. Just design education.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-swiss-red uppercase tracking-wide mb-6">The 14 Movements</h2>
            <div className="grid md:grid-cols-2 gap-4 text-minimalist-gray">
              {[
                ['Brutalism', 'Raw, bold, architectural'],
                ['Minimalism', 'Less, but better'],
                ['Swiss Design', 'Grid, precision, Helvetica'],
                ['Glassmorphism', 'Frosted glass, blur effects'],
                ['Neumorphism', 'Soft shadows, subtle depth'],
                ['Cyberpunk', 'Neon, glitch, dark'],
                ['Retro/Vaporwave', '80s synth, sunset gradients'],
                ['Material Design', 'Cards, elevation, shadows'],
                ['Organic/Fluid', 'Blobby shapes, soft edges'],
                ['Typographic', 'Font-dominant, large type'],
                ['Grunge/Web1', 'Retro HTML, blue links'],
                ['Maximalism', 'More is more, chaos'],
                ['Art Deco', 'Gold, geometric, luxury'],
                ['Principles', 'The foundations'],
              ].map(([name, desc]) => (
                <div key={name} className="flex gap-4">
                  <span className="text-swiss-red font-bold">{name}</span>
                  <span className="text-minimalist-gray">{desc}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-swiss-red uppercase tracking-wide mb-6">Built with</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['Next.js 16', 'App Router + Turbopack'],
                ['Tailwind CSS v4', 'Utility-first styling'],
                ['TypeScript', 'Type safety'],
                ['GitHub Pages', 'Free hosting'],
              ].map(([name, desc]) => (
                <div key={name} className="bg-white p-6">
                  <h3 className="font-bold text-minimalist-charcoal">{name}</h3>
                  <p className="text-sm text-minimalist-gray">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-swiss-red uppercase tracking-wide mb-6">Open Source</h2>
            <p className="text-minimalist-gray leading-relaxed">
              This project is open source. Fork it, improve it, break it, fix it.
              Design belongs to everyone.
            </p>
            <a 
              href="https://github.com/Designrpros/WEBDESIGN.THEORY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-swiss-red text-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-minimalist-charcoal transition-colors"
            >
              View on GitHub
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
