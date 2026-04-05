'use client';

export default function NeumorphismPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-200 to-slate-300">
      {/* Header */}
            {/* Hero */}
      <section className="min-h-[90vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-200 via-slate-200 to-slate-300" />
        
        {/* Decorative elements */}
        <div className="absolute top-32 left-20 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-20 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <span className="inline-block bg-slate-300/80 px-4 py-2 text-sm font-bold uppercase rounded-full mb-8 text-slate-600">
            Design Concept 06
          </span>
          
          <h1 className="text-[10vw] font-black uppercase leading-none mt-8 mb-8 text-slate-600">
            NEU
          </h1>
          <h1 className="text-[10vw] font-black uppercase leading-none mb-16 text-slate-500">
            MORPHISM
          </h1>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div className="bg-slate-200 rounded-3xl p-8 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
              <h2 className="text-2xl font-bold mb-4 text-slate-700">The Philosophy</h2>
              <p className="text-lg text-slate-500">Soft UI. Elements that appear to extrude from the background. Subtle shadows create the illusion of depth without harsh contrasts.</p>
            </div>
            <div className="bg-slate-200 rounded-3xl p-8 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
              <h2 className="text-2xl font-bold mb-4 text-slate-700">The Aesthetic</h2>
              <p className="text-lg text-slate-500">Like touching a physical button that hasn't been pressed yet. Tactile, approachable, and deeply satisfying.</p>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-4">
            <a href="#history" className="bg-slate-200 px-8 py-4 font-bold uppercase rounded-full shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] transition-all text-slate-600">
              Learn History
            </a>
            <a href="#code" className="bg-slate-200 px-8 py-4 font-bold uppercase rounded-full shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] transition-all text-slate-600">
              View Code
            </a>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-24 bg-slate-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-300 to-slate-400/30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="inline-block bg-slate-200 px-4 py-2 text-sm font-bold uppercase rounded-full mb-8 text-slate-600 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]">History</span>
          
          <h2 className="text-6xl md:text-8xl font-black uppercase mt-8 mb-16 text-slate-600">THE ORIGINS</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-slate-200 rounded-3xl p-8 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <h3 className="text-3xl font-bold mb-4 text-slate-700">2019 - Dribbble Trend</h3>
                <p className="text-lg text-slate-500">Designers on Dribbble began exploring soft UI. The hashtag #neumorphism emerged. Everyone wanted that squishy button look.</p>
              </div>
              <div className="bg-slate-200 rounded-3xl p-8 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <h3 className="text-3xl font-bold mb-4 text-slate-700">iOS Calculator</h3>
                <p className="text-lg text-slate-500">Apple's iOS calculator became the poster child. Every designer tried to recreate those satisfying circular buttons.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-slate-200 rounded-3xl p-8 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <h3 className="text-indigo-500 font-bold uppercase mb-4">Timeline</h3>
                <div className="space-y-6">
                  {[
                    { year: '2019', title: 'Trend Starts', desc: 'Dribbble showcases soft UI' },
                    { year: '2020', title: 'Peak Popularity', desc: 'Tutorials everywhere' },
                    { year: '2021', title: 'Criticism', desc: 'Accessibility concerns rise' },
                    { year: '2022+', title: 'Mature Use', desc: 'Selective, thoughtful application' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 border-l-2 border-indigo-400/50 pl-4">
                      <span className="font-bold w-20 text-indigo-600">{item.year}</span>
                      <div>
                        <h4 className="font-bold uppercase text-slate-700">{item.title}</h4>
                        <p className="text-slate-500">{item.desc}</p>
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
      <section className="py-24 bg-gradient-to-b from-slate-200 to-slate-300 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="inline-block bg-slate-300/80 px-4 py-2 text-sm font-bold uppercase rounded-full mb-8 text-slate-600 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]">Visual Examples</span>
          
          <h2 className="text-6xl font-black uppercase mb-16 text-slate-600">WHAT IT LOOKS LIKE</h2>

          {/* Example 1: Neumorphic Button */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-700 mb-8">Neumorphic Button</h3>
            <div className="bg-slate-300 rounded-3xl p-16 shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]">
              <div className="flex flex-wrap gap-8 justify-center">
                <button className="w-32 h-32 rounded-full bg-slate-200 shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] transition-all flex items-center justify-center text-slate-500 font-bold">
                  7
                </button>
                <button className="w-32 h-32 rounded-full bg-slate-200 shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] transition-all flex items-center justify-center text-slate-500 font-bold">
                  +
                </button>
                <button className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-200 to-purple-200 shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] transition-all flex items-center justify-center text-indigo-600 font-bold">
                  =
                </button>
              </div>
            </div>
          </div>

          {/* Example 2: Neumorphic Card */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-700 mb-8">Neumorphic Card</h3>
            <div className="bg-slate-200 rounded-3xl p-12 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-300 to-purple-300 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]" />
                <div>
                  <h4 className="text-slate-700 font-bold text-xl">Neumorphic Element</h4>
                  <p className="text-slate-500">Soft extrusion from background</p>
                </div>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">
                The key is dual shadows: one dark shadow casting down-right, one light shadow casting up-left. 
                This creates the illusion of a raised (or pressed) surface.
              </p>
              <div className="mt-8 flex gap-4">
                <button className="px-8 py-4 rounded-2xl bg-slate-200 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] text-slate-600 font-bold hover:shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] transition-all">
                  Raised
                </button>
                <button className="px-8 py-4 rounded-2xl bg-slate-200 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] text-indigo-600 font-bold transition-all">
                  Pressed
                </button>
              </div>
            </div>
          </div>

          {/* Example 3: Neumorphic Form */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-700 mb-8">Neumorphic Input</h3>
            <div className="bg-slate-300 rounded-3xl p-12 shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]">
              <div className="max-w-md mx-auto space-y-6">
                <input 
                  type="text" 
                  placeholder="Username"
                  className="w-full px-6 py-4 rounded-xl bg-slate-200 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] text-slate-700 placeholder:text-slate-400 outline-none"
                />
                <input 
                  type="password" 
                  placeholder="Password"
                  className="w-full px-6 py-4 rounded-xl bg-slate-200 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] text-slate-700 placeholder:text-slate-400 outline-none"
                />
                <button className="w-full px-8 py-4 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-400 text-white font-bold shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] transition-all">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section id="code" className="py-24 bg-slate-300">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block bg-slate-200 px-4 py-2 text-sm font-bold uppercase rounded-full mb-8 text-slate-600 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]">Implementation</span>
          
          <h2 className="text-6xl font-black uppercase mt-8 mb-16 text-slate-600">CSS VARIABLES</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-200 rounded-3xl p-8 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
              <h3 className="text-2xl font-bold text-slate-700 mb-6">Raised Element</h3>
              <pre className="text-sm font-mono text-slate-600 overflow-x-auto">
{`/* Neumorphic raised effect */
.neu-raised {
  background: #e0e5ec;
  border-radius: 16px;
  box-shadow: 
    12px 12px 24px #bebebe,
    -12px -12px 24px #ffffff;
}`}
              </pre>
            </div>
            <div className="bg-slate-200 rounded-3xl p-8 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
              <h3 className="text-2xl font-bold text-slate-700 mb-6">Pressed Element</h3>
              <pre className="text-sm font-mono text-slate-600 overflow-x-auto">
{`/* Neumorphic pressed effect */
.neu-pressed {
  background: #e0e5ec;
  border-radius: 16px;
  box-shadow: 
    inset 8px 8px 16px #bebebe,
    inset -8px -8px 16px #ffffff;
}`}
              </pre>
            </div>
          </div>

          {/* Color Palette */}
          <div className="bg-slate-200 rounded-3xl p-12 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
            <h3 className="text-2xl font-bold text-slate-700 mb-8">Color Palette</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-full h-24 rounded-2xl bg-[#e0e5ec] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] mb-3" />
                <span className="text-slate-600 font-mono text-sm">#e0e5ec</span>
              </div>
              <div className="text-center">
                <div className="w-full h-24 rounded-2xl bg-[#bebebe] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] mb-3" />
                <span className="text-slate-600 font-mono text-sm">#bebebe</span>
              </div>
              <div className="text-center">
                <div className="w-full h-24 rounded-2xl bg-gradient-to-br from-indigo-200 to-purple-200 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] mb-3" />
                <span className="text-slate-600 font-mono text-sm">indigo/purple</span>
              </div>
              <div className="text-center">
                <div className="w-full h-24 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] mb-3" />
                <span className="text-slate-600 font-mono text-sm">light gray</span>
              </div>
              <div className="text-center">
                <div className="w-full h-24 rounded-2xl bg-gradient-to-br from-slate-300 to-slate-400 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] mb-3" />
                <span className="text-slate-600 font-mono text-sm">dark gray</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-24 bg-gradient-to-b from-slate-200 to-slate-300">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-6xl font-black uppercase mb-16 text-slate-600">RULES</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-200 rounded-3xl p-8 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
              <span className="text-green-600 font-bold uppercase mb-8 block text-2xl">DO</span>
              {[
                'Use subtle shadow differences',
                'Keep background and element same color',
                'Create both raised and pressed states',
                'Use for interactive elements',
                'Test contrast ratios carefully',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-3 border-b border-slate-300/50">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-slate-600">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-slate-200 rounded-3xl p-8 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
              <span className="text-red-500 font-bold uppercase mb-8 block text-2xl">DON&apos;T</span>
              {[
                'Use harsh shadows',
                'Ignore accessibility contrast',
                'Apply to too many elements',
                'Use busy backgrounds',
                'Forget pressed/active states',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-3 border-b border-slate-300/50">
                  <span className="text-red-500 font-bold">✗</span>
                  <span className="text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-300 py-8 px-6 shadow-[inset_0_4px_8px_#bebebe]">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm font-bold uppercase">
          <span className="text-slate-500">NEUMORPHISM 2026</span>
          <div className="flex gap-8">
            <a href="/glassmorphism" className="text-slate-500 hover:text-slate-700 transition-colors">← Glassmorphism</a>
            <a href="/cyberpunk" className="text-slate-500 hover:text-slate-700 transition-colors">Cyberpunk →</a>
          </div>
        </div>
      </footer>
    </main>
  );
}