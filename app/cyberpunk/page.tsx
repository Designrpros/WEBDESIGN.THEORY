'use client';

export default function CyberpunkPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      <style jsx>{`
        .neon-text {
          color: #FFE600;
          text-shadow: 
            0 0 5px #FFE600,
            0 0 10px #FFE600,
            0 0 20px #FFE600,
            0 0 40px #FF8C00,
            0 0 80px #FF8C00;
        }
        .neon-cyan {
          color: #00F0FF;
          text-shadow: 
            0 0 5px #00F0FF,
            0 0 10px #00F0FF,
            0 0 20px #00F0FF,
            0 0 40px #00F0FF;
        }
        .neon-magenta {
          color: #FF00FF;
          text-shadow: 
            0 0 5px #FF00FF,
            0 0 10px #FF00FF,
            0 0 20px #FF00FF,
            0 0 40px #FF00FF;
        }
        .glow-box-cyan {
          box-shadow: 
            0 0 5px #00F0FF,
            0 0 10px #00F0FF,
            0 0 20px #00F0FF,
            inset 0 0 5px #00F0FF;
        }
        .glow-box-magenta {
          box-shadow: 
            0 0 5px #FF00FF,
            0 0 10px #FF00FF,
            0 0 20px #FF00FF,
            inset 0 0 5px #FF00FF;
        }
        .glow-box-yellow {
          box-shadow: 
            0 0 5px #FFE600,
            0 0 10px #FFE600,
            0 0 20px #FFE600;
        }
        .neon-button {
          background: transparent;
          border: 2px solid #FFE600;
          color: #FFE600;
          box-shadow: 
            0 0 5px #FFE600,
            0 0 10px #FFE600,
            0 0 20px #FFE600,
            inset 0 0 5px #FFE600;
          transition: all 0.3s ease;
        }
        .neon-button:hover {
          background: #FFE600;
          color: #0D0D0D;
          box-shadow: 
            0 0 10px #FFE600,
            0 0 20px #FFE600,
            0 0 40px #FFE600,
            0 0 80px #FFE600;
        }
        .glitch-text {
          position: relative;
          animation: glitch-skew 1s infinite linear alternate-reverse;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .glitch-text::before {
          color: #00F0FF;
          animation: glitch-effect 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
          clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
          transform: translate(-2px, -2px);
        }
        .glitch-text::after {
          color: #FF00FF;
          animation: glitch-effect 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
          clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
          transform: translate(2px, 2px);
        }
        @keyframes glitch-effect {
          0% { transform: translate(0); }
          20% { transform: translate(-3px, 3px); }
          40% { transform: translate(-3px, -3px); }
          60% { transform: translate(3px, 3px); }
          80% { transform: translate(3px, -3px); }
          100% { transform: translate(0); }
        }
        @keyframes glitch-skew {
          0% { transform: skew(0deg); }
          10% { transform: skew(-1deg); }
          20% { transform: skew(0deg); }
          30% { transform: skew(1deg); }
          40% { transform: skew(0deg); }
          100% { transform: skew(0deg); }
        }
        .cyberpunk-card {
          background: linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(255, 0, 255, 0.1) 100%);
          border: 2px solid transparent;
          background-clip: padding-box;
          position: relative;
        }
        .cyberpunk-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, #00F0FF, #FF00FF, #FFE600, #00F0FF);
          z-index: -1;
          animation: border-glow 3s linear infinite;
        }
        @keyframes border-glow {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
        .scanlines {
          position: relative;
          overflow: hidden;
        }
        .scanlines::after {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.15) 1px,
            transparent 1px,
            transparent 2px
          );
          pointer-events: none;
        }
        .timeline-line {
          background: linear-gradient(to bottom, #FFE600, #00F0FF, #FF00FF);
          box-shadow: 0 0 10px #FFE600, 0 0 20px #00F0FF;
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0D0D0D] border-b-2 border-[#FFE600]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-2xl font-black tracking-tighter neon-text">CYBERPUNK</span>
          <nav className="flex gap-8 text-sm font-bold text-[#FFE600]/70">
            <a href="/" className="hover:text-[#FFE600] transition-colors">Home</a>
            <a href="/neumorphism" className="hover:text-[#FFE600] transition-colors">Neumorphism</a>
            <a href="/retro-vaporwave" className="hover:text-[#FFE600] transition-colors">Retro/Vaporwave</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-[90vh] relative overflow-hidden border-b-2 border-[#FFE600]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFE600]/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-full h-1 bg-[#FFE600] shadow-[0_0_20px_#FFE600,0_0_40px_#FFE600]" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00F0FF] shadow-[0_0_20px_#00F0FF,0_0_40px_#00F0FF]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="inline-block border border-[#FFE600] px-4 py-2 text-sm font-black uppercase neon-text mb-8 glow-box-yellow">
            Design Theory 003
          </div>
          
          <h1 className="text-[15vw] font-black uppercase leading-[0.85] mb-4">
            <span className="neon-text">CYBER</span>
          </h1>
          <h1 
            className="text-[15vw] font-black uppercase leading-[0.85] mb-16 glitch-text" 
            data-text="PUNK"
          >
            PUNK
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <div className="border-2 border-[#FF00FF] p-8 bg-[#FF00FF]/5 glow-box-magenta scanlines">
              <h2 className="text-2xl font-black uppercase mb-4 neon-magenta">The Philosophy</h2>
              <p className="text-white/80">High tech, low life. Neon bleeding through rain-streaked windows. The future is corrupt, beautiful, and running on borrowed power.</p>
            </div>
            <div className="border-2 border-[#00F0FF] p-8 bg-[#00F0FF]/5 glow-box-cyan scanlines">
              <h2 className="text-2xl font-black uppercase mb-4 neon-cyan">The Aesthetic</h2>
              <p className="text-white/80">Glitch art. Neon grids. Scanlines. Text that pulses like it&apos;s barely holding together. Beauty in digital decay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 px-6 border-b-2 border-[#FFE600]/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black neon-text mb-16">HISTORY</h2>
          
          <div className="relative pl-8 md:pl-12">
            <div className="absolute left-0 top-0 bottom-0 w-1 timeline-line" />
            
            <div className="space-y-16">
              <div className="relative">
                <div className="absolute -left-[38px] md:-left-[46px] w-6 h-6 bg-[#0D0D0D] border-4 border-[#FFE600] glow-box-yellow" />
                <div className="border-l-2 border-[#FFE600]/30 pl-8">
                  <span className="text-sm font-black text-[#FFE600]">1980s</span>
                  <h3 className="text-2xl font-black text-white mt-1 mb-2">The Origins</h3>
                  <p className="text-white/60">Cyberpunk emerges from William Gibson&apos;s "Neuromancer" and Ridley Scott&apos;s "Blade Runner." The term itself coined by Bruce Sterling. Dark futures, bright lights.</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[38px] md:-left-[46px] w-6 h-6 bg-[#0D0D0D] border-4 border-[#00F0FF] glow-box-cyan" />
                <div className="border-l-2 border-[#00F0FF]/30 pl-8">
                  <span className="text-sm font-black text-[#00F0FF]">1990s</span>
                  <h3 className="text-2xl font-black text-white mt-1 mb-2">Cinema & Games</h3>
                  <p className="text-white/60">"Ghost in the Shell," "Akira," "The Matrix." Cyberpunk infiltrates mainstream consciousness. Video games like "Deus Ex" define the visual language.</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[38px] md:-left-[46px] w-6 h-6 bg-[#0D0D0D] border-4 border-[#FF00FF] glow-box-magenta" />
                <div className="border-l-2 border-[#FF00FF]/30 pl-8">
                  <span className="text-sm font-black text-[#FF00FF]">2010s</span>
                  <h3 className="text-2xl font-black text-white mt-1 mb-2">Digital Renaissance</h3>
                  <p className="text-white/60">Cyberpunk 2077, "Westworld," "Altered Carbon." The aesthetic evolves from analog to hyper-digital. Neon meets wireframe. Glitch becomes intentional.</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[38px] md:-left-[46px] w-6 h-6 bg-[#0D0D0D] border-4 border-[#FFE600] glow-box-yellow" />
                <div className="border-l-2 border-[#FFE600]/30 pl-8">
                  <span className="text-sm font-black text-[#FFE600]">TODAY</span>
                  <h3 className="text-2xl font-black text-white mt-1 mb-2">The Web Era</h3>
                  <p className="text-white/60">Cyberpunk aesthetics dominate UI/UX design. Neon glows, dark themes, glitch animations. The future we were promised, now in your browser.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Examples Section */}
      <section className="py-24 px-6 border-b-2 border-[#FFE600]/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black neon-cyan mb-16">VISUAL EXAMPLES</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Neon Button */}
            <div className="space-y-6">
              <h3 className="text-xl font-black uppercase text-[#FFE600]">Neon Button</h3>
              <div className="h-48 flex items-center justify-center bg-[#0D0D0D] border border-[#FFE600]/30 p-8">
                <button className="neon-button px-8 py-4 text-lg font-black uppercase tracking-wider">
                  OVERRIDE
                </button>
              </div>
              <p className="text-white/60 text-sm">Glowing borders with inset shadows. The button looks like it&apos;s powered by something unstable.</p>
            </div>
            
            {/* Glitch Text */}
            <div className="space-y-6">
              <h3 className="text-xl font-black uppercase text-[#FF00FF]">Glitch Text</h3>
              <div className="h-48 flex items-center justify-center bg-[#0D0D0D] border border-[#FF00FF]/30 p-8">
                <span className="text-5xl font-black glitch-text" data-text="ERROR">ERROR</span>
              </div>
              <p className="text-white/60 text-sm">RGB split with clip-path animation. The text is broken, but working as intended.</p>
            </div>
            
            {/* Cyberpunk Card */}
            <div className="space-y-6">
              <h3 className="text-xl font-black uppercase text-[#00F0FF]">Cyberpunk Card</h3>
              <div className="h-48 flex items-center justify-center bg-[#0D0D0D] p-6">
                <div className="cyberpunk-card w-full h-full p-6 flex flex-col justify-between">
                  <div className="text-xs font-black text-[#00F0FF] uppercase tracking-widest">System Status</div>
                  <div className="text-3xl font-black neon-cyan">ONLINE</div>
                  <div className="text-xs text-white/40">Connection: SECURE // Latency: 12ms</div>
                </div>
              </div>
              <p className="text-white/60 text-sm">Animated gradient borders. The card exists in a state of permanent digital flux.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="py-24 px-6 border-b-2 border-[#FFE600]/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black neon-magenta mb-16">COLOR PALETTE</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-32 bg-[#FFE600] mb-4 glow-box-yellow" />
              <span className="font-black text-[#FFE600]">#FFE600</span>
              <p className="text-white/60 text-sm mt-1">Neon Yellow</p>
              <p className="text-white/40 text-xs mt-2">Primary accent. High visibility warning color.</p>
            </div>
            
            <div className="text-center">
              <div className="h-32 bg-[#00F0FF] mb-4 glow-box-cyan" />
              <span className="font-black text-[#00F0FF]">#00F0FF</span>
              <p className="text-white/60 text-sm mt-1">Cyan</p>
              <p className="text-white/40 text-xs mt-2">Secondary accent. Tech/interface color.</p>
            </div>
            
            <div className="text-center">
              <div className="h-32 bg-[#FF00FF] mb-4 glow-box-magenta" />
              <span className="font-black text-[#FF00FF]">#FF00FF</span>
              <p className="text-white/60 text-sm mt-1">Magenta</p>
              <p className="text-white/40 text-xs mt-2">Tertiary accent. Glitch/alternate color.</p>
            </div>
            
            <div className="text-center">
              <div className="h-32 bg-[#0D0D0D] border-2 border-white/20 mb-4" />
              <span className="font-black text-white">#0D0D0D</span>
              <p className="text-white/60 text-sm mt-1">Void Black</p>
              <p className="text-white/40 text-xs mt-2">Background. Makes neon colors pop.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="py-24 px-6 border-b-2 border-[#FFE600]/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black neon-text mb-16">CODE EXAMPLES</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-[#00F0FF] bg-[#0D0D0D] overflow-hidden">
              <div className="bg-[#00F0FF]/20 px-6 py-3 border-b border-[#00F0FF]/30">
                <span className="text-sm font-black text-[#00F0FF]">CSS: Neon Glow Effect</span>
              </div>
              <pre className="p-6 text-sm font-mono text-[#00F0FF]/90 overflow-x-auto">
{`.neon-glow {
  color: #FFE600;
  text-shadow:
    0 0 5px #FFE600,
    0 0 10px #FFE600,
    0 0 20px #FFE600,
    0 0 40px #FF8C00;
}

.box-glow {
  box-shadow:
    0 0 5px #00F0FF,
    0 0 10px #00F0FF,
    0 0 20px #00F0FF,
    inset 0 0 10px rgba(0,240,255,0.3);
}`}
              </pre>
            </div>
            
            <div className="border-2 border-[#FF00FF] bg-[#0D0D0D] overflow-hidden">
              <div className="bg-[#FF00FF]/20 px-6 py-3 border-b border-[#FF00FF]/30">
                <span className="text-sm font-black text-[#FF00FF]">CSS: Glitch Animation</span>
              </div>
              <pre className="p-6 text-sm font-mono text-[#FF00FF]/90 overflow-x-auto">
{`.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
}

.glitch::before {
  color: #00F0FF;
  animation: glitch-1 0.3s infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

.glitch::after {
  color: #FF00FF;
  animation: glitch-2 0.3s infinite reverse;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}`}
              </pre>
            </div>
            
            <div className="border-2 border-[#FFE600] bg-[#0D0D0D] overflow-hidden">
              <div className="bg-[#FFE600]/20 px-6 py-3 border-b border-[#FFE600]/30">
                <span className="text-sm font-black text-[#FFE600]">CSS: Neon Button</span>
              </div>
              <pre className="p-6 text-sm font-mono text-[#FFE600]/90 overflow-x-auto">
{`.neon-btn {
  background: transparent;
  border: 2px solid #FFE600;
  color: #FFE600;
  box-shadow:
    0 0 5px #FFE600,
    0 0 10px #FFE600,
    inset 0 0 5px rgba(255,230,0,0.2);
  transition: all 0.3s ease;
}

.neon-btn:hover {
  background: #FFE600;
  color: #0D0D0D;
  box-shadow:
    0 0 20px #FFE600,
    0 0 40px #FFE600,
    0 0 60px #FFE600;
}`}
              </pre>
            </div>
            
            <div className="border-2 border-[#00F0FF] bg-[#0D0D0D] overflow-hidden">
              <div className="bg-[#00F0FF]/20 px-6 py-3 border-b border-[#00F0FF]/30">
                <span className="text-sm font-black text-[#00F0FF]">CSS: Animated Border</span>
              </div>
              <pre className="p-6 text-sm font-mono text-[#00F0FF]/90 overflow-x-auto">
{`.cyberpunk-border {
  position: relative;
  background: #0D0D0D;
}

.cyberpunk-border::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(
    45deg,
    #00F0FF, #FF00FF, #FFE600, #00F0FF
  );
  background-size: 400% 400%;
  animation: gradient-shift 3s ease infinite;
  z-index: -1;
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black neon-text mb-16">DO&apos;S &amp; DON&apos;TS</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Do's */}
            <div>
              <h3 className="text-2xl font-black text-[#00F0FF] mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#00F0FF] text-[#0D0D0D] flex items-center justify-center font-black">✓</span>
                DO&apos;S
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4 p-4 border border-[#00F0FF]/30 bg-[#00F0FF]/5">
                  <span className="text-[#00F0FF] font-black">01</span>
                  <p className="text-white/80">Use neon colors <strong className="text-[#FFE600]">sparingly</strong> — they&apos;re power, not wallpaper</p>
                </li>
                <li className="flex gap-4 p-4 border border-[#00F0FF]/30 bg-[#00F0FF]/5">
                  <span className="text-[#00F0FF] font-black">02</span>
                  <p className="text-white/80">Layer text-shadows for realistic neon glow effect</p>
                </li>
                <li className="flex gap-4 p-4 border border-[#00F0FF]/30 bg-[#00F0FF]/5">
                  <span className="text-[#00F0FF] font-black">03</span>
                  <p className="text-white/80">Combine cyan, magenta, and yellow for classic triad</p>
                </li>
                <li className="flex gap-4 p-4 border border-[#00F0FF]/30 bg-[#00F0FF]/5">
                  <span className="text-[#00F0FF] font-black">04</span>
                  <p className="text-white/80">Use scanlines and glitch effects on interactive elements</p>
                </li>
                <li className="flex gap-4 p-4 border border-[#00F0FF]/30 bg-[#00F0FF]/5">
                  <span className="text-[#00F0FF] font-black">05</span>
                  <p className="text-white/80">Keep backgrounds dark (#0D0D0D minimum)</p>
                </li>
              </ul>
            </div>
            
            {/* Don'ts */}
            <div>
              <h3 className="text-2xl font-black text-[#FF00FF] mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#FF00FF] text-[#0D0D0D] flex items-center justify-center font-black">✗</span>
                DON&apos;TS
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4 p-4 border border-[#FF00FF]/30 bg-[#FF00FF]/5">
                  <span className="text-[#FF00FF] font-black">01</span>
                  <p className="text-white/80">Don&apos;t overuse glow effects — they lose impact</p>
                </li>
                <li className="flex gap-4 p-4 border border-[#FF00FF]/30 bg-[#FF00FF]/5">
                  <span className="text-[#FF00FF] font-black">02</span>
                  <p className="text-white/80">Avoid light backgrounds that kill the neon aesthetic</p>
                </li>
                <li className="flex gap-4 p-4 border border-[#FF00FF]/30 bg-[#FF00FF]/5">
                  <span className="text-[#FF00FF] font-black">03</span>
                  <p className="text-white/80">Don&apos;t use too many different neon colors at once</p>
                </li>
                <li className="flex gap-4 p-4 border border-[#FF00FF]/30 bg-[#FF00FF]/5">
                  <span className="text-[#FF00FF] font-black">04</span>
                  <p className="text-white/80">Avoid subtle animations — cyberpunk is bold and in-your-face</p>
                </li>
                <li className="flex gap-4 p-4 border border-[#FF00FF]/30 bg-[#FF00FF]/5">
                  <span className="text-[#FF00FF] font-black">05</span>
                  <p className="text-white/80">Don&apos;t make glitch effects too slow — they should feel broken</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t-2 border-[#FFE600]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-black uppercase">
          <span className="neon-text">CYBERPUNK 2026</span>
          <div className="flex items-center gap-8">
            <a href="/neumorphism" className="text-[#00F0FF] hover:text-[#FFE600] transition-colors flex items-center gap-2">
              <span>←</span>
              <span>Neumorphism</span>
            </a>
            <span className="text-[#FFE600]/30">|</span>
            <a href="/retro-vaporwave" className="text-[#FF00FF] hover:text-[#FFE600] transition-colors flex items-center gap-2">
              <span>Retro/Vaporwave</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}