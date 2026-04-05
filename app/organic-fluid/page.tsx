'use client';

export default function OrganicFluidPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Decorative blob shapes in background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] blur-3xl animate-pulse" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-pink-200/40 to-rose-200/40 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] blur-3xl" />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-violet-200/40 to-purple-200/40 rounded-[70%_30%_50%_50%_/_40%_60%_40%_60%] blur-3xl" />
      <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-gradient-to-br from-fuchsia-200/40 to-pink-200/40 rounded-[40%_60%_30%_70%_/_70%_40%_60%_30%] blur-3xl" />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/60 border-b border-purple-100/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">ORGANIC FLUID</span>
          <nav className="flex gap-8 text-sm font-bold text-purple-700">
            <a href="/" className="hover:text-pink-600 transition-colors">Home</a>
            <a href="/glassmorphism" className="hover:text-pink-600 transition-colors">Glassmorphism</a>
            <a href="/neumorphism" className="hover:text-pink-600 transition-colors">Neumorphism</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-[80vh] relative flex items-center justify-center overflow-hidden px-6">
        <div className="relative z-10 text-center">
          <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-purple-200/80 to-pink-200/80 border border-purple-300/50 text-sm font-bold text-purple-700 mb-8 backdrop-blur-sm shadow-lg shadow-purple-200/50">
            Design Concept 08
          </div>
          
          <h1 className="text-[12vw] md:text-[10vw] font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-600 leading-none mb-8 tracking-tight">
            ORGANIC
          </h1>
          <h1 className="text-[12vw] md:text-[10vw] font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-pink-500 to-purple-600 leading-none mb-12 tracking-tight">
            FLUID
          </h1>

          {/* Hero blob container */}
          <div className="relative max-w-lg mx-auto">
            <div className="bg-gradient-to-br from-white/90 to-purple-50/90 backdrop-blur-lg rounded-[3rem] rounded-t-[2rem] p-10 shadow-2xl shadow-purple-200/50 border border-purple-200/50">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-sm opacity-70" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-fuchsia-300 to-pink-300 rounded-[60%_40%_30%_70%] blur-sm opacity-70" />
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Flowing Design</h2>
              <p className="text-purple-600/80 leading-relaxed">
                Embrace soft curves, gentle gradients, and shapes that breathe. 
                Design that feels alive and naturally inviting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8">THE HISTORY</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-lg rounded-[3rem] p-10 shadow-xl shadow-purple-200/30 border border-purple-200/50">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Origins of Organic Design</h3>
                <p className="text-purple-700/80 leading-relaxed mb-6">
                  Organic design emerged as a counter-movement to rigid, geometric modernism. 
                  Inspired by natural forms—from the curves of seashells to the flow of water—
                  designers began embracing asymmetry, soft edges, and biomorphic shapes.
                </p>
                <p className="text-purple-700/80 leading-relaxed">
                  In the digital realm, CSS border-radius and gradient capabilities have unlocked 
                  new possibilities for organic aesthetics. Today, we see this in everything 
                  from app interfaces to marketing sites, creating digital experiences that 
                  feel warmer and more human.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-pink-200/60 to-rose-200/60 backdrop-blur-lg rounded-[2rem] p-6 shadow-lg shadow-pink-200/40 border border-pink-300/40">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-rose-300 rounded-[50%_50%_30%_70%_/_60%_40%_60%_40%] mb-4" />
                <h4 className="font-bold text-purple-800">1950s</h4>
                <p className="text-sm text-purple-600/70">Furniture & Architecture embrace biomorphic forms</p>
              </div>
              <div className="bg-gradient-to-br from-purple-200/60 to-violet-200/60 backdrop-blur-lg rounded-[2rem] p-6 shadow-lg shadow-purple-200/40 border border-purple-300/40">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-300 to-violet-300 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] mb-4" />
                <h4 className="font-bold text-purple-800">2010s</h4>
                <p className="text-sm text-purple-600/70">Flat design softens with subtle shadows</p>
              </div>
              <div className="bg-gradient-to-br from-fuchsia-200/60 to-pink-200/60 backdrop-blur-lg rounded-[2rem] p-6 shadow-lg shadow-fuchsia-200/40 border border-fuchsia-300/40 col-span-2">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-300 to-pink-300 rounded-[60%_40%_30%_70%_/_50%_60%_40%_50%] mb-4 inline-block" />
                <h4 className="font-bold text-purple-800">Today</h4>
                <p className="text-sm text-purple-600/70">Blobs, gradients, and fluid shapes dominate modern UI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Examples Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-purple-50/50 to-pink-50/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-16">VISUAL EXAMPLES</h2>

          {/* Blob Shapes */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-purple-800 mb-8">Blob Shapes</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-pink-300 to-rose-300 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] h-48 shadow-xl shadow-pink-300/40" />
              <div className="bg-gradient-to-br from-purple-300 to-violet-300 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] h-48 shadow-xl shadow-purple-300/40" />
              <div className="bg-gradient-to-br from-fuchsia-300 to-pink-300 rounded-[50%_50%_20%_80%_/_40%_60%_40%_60%] h-48 shadow-xl shadow-fuchsia-300/40" />
              <div className="bg-gradient-to-br from-violet-300 to-purple-300 rounded-[40%_60%_50%_50%_/_50%_40%_60%_50%] h-48 shadow-xl shadow-violet-300/40" />
            </div>
          </div>

          {/* Organic Buttons */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-purple-800 mb-8">Organic Buttons</h3>
            <div className="flex flex-wrap gap-6 bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-lg rounded-[3rem] p-10 shadow-xl border border-purple-200/50">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-[2rem] shadow-lg shadow-purple-300/50 hover:shadow-xl hover:shadow-purple-400/60 transition-all duration-300 hover:scale-105">
                Soft Gradient
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-fuchsia-400 to-pink-400 text-white font-bold rounded-[3rem] shadow-lg shadow-fuchsia-200/60 border-2 border-fuchsia-300/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
                Pill Button
              </button>
              <button className="px-8 py-4 bg-white/80 backdrop-blur-md text-purple-700 font-bold rounded-[1.5rem_0.5rem_2rem_1rem] shadow-lg shadow-purple-200/40 border border-purple-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
                Asymmetric
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-violet-400/80 to-purple-400/80 backdrop-blur-md text-white font-bold rounded-[1rem_3rem_1rem_3rem] shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 hover:scale-105">
                Wave Edge
              </button>
            </div>
          </div>

          {/* Fluid Cards */}
          <div>
            <h3 className="text-3xl font-bold text-purple-800 mb-8">Fluid Cards</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white/90 to-pink-50/90 backdrop-blur-lg rounded-[2.5rem] p-8 shadow-xl shadow-pink-200/40 border border-pink-200/50">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full mb-4" />
                <h4 className="text-xl font-bold text-purple-800 mb-2">Soft Touch</h4>
                <p className="text-purple-600/70">Gentle gradients and rounded corners create an inviting feel.</p>
              </div>
              <div className="bg-gradient-to-br from-white/90 to-purple-50/90 backdrop-blur-lg rounded-[1rem_4rem_1rem_4rem] p-8 shadow-xl shadow-purple-200/40 border border-purple-200/50">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-300 to-violet-300 rounded-[50%_50%_20%_80%] mb-4" />
                <h4 className="text-xl font-bold text-purple-800 mb-2">Asymmetric</h4>
                <p className="text-purple-600/70">Unconventional shapes add visual interest and personality.</p>
              </div>
              <div className="bg-gradient-to-br from-white/90 to-fuchsia-50/90 backdrop-blur-lg rounded-[3rem_1rem_2rem_1rem] p-8 shadow-xl shadow-fuchsia-200/40 border border-fuchsia-200/50">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-300 to-pink-300 rounded-[30%_70%_50%_50%] mb-4" />
                <h4 className="text-xl font-bold text-purple-800 mb-2">Flowing</h4>
                <p className="text-purple-600/70">Organic shapes that suggest movement and dynamism.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-16">CODE EXAMPLES</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Blob with border-radius */}
            <div className="bg-gradient-to-br from-white/90 to-purple-50/90 backdrop-blur-lg rounded-[2.5rem] p-8 shadow-xl shadow-purple-200/40 border border-purple-200/50">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Blob Shape with Border-Radius</h3>
              <pre className="text-emerald-600 text-sm font-mono overflow-x-auto bg-purple-50/50 rounded-2xl p-4">
{`.blob {
  border-radius: 60% 40% 30% 70% 
    / 60% 30% 70% 40%;
  background: linear-gradient(
    135deg,
    #f0abfc 0%,
    #c084fc 100%
  );
  width: 200px;
  height: 200px;
  transition: border-radius 0.5s ease;
}

.blob:hover {
  border-radius: 30% 70% 70% 30% 
    / 30% 30% 70% 70%;
}`}
              </pre>
            </div>

            {/* Soft gradient */}
            <div className="bg-gradient-to-br from-white/90 to-pink-50/90 backdrop-blur-lg rounded-[2.5rem] p-8 shadow-xl shadow-pink-200/40 border border-pink-200/50">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Soft Gradient Background</h3>
              <pre className="text-emerald-600 text-sm font-mono overflow-x-auto bg-pink-50/50 rounded-2xl p-4">
{`.organic-bg {
  background: linear-gradient(
    135deg,
    #fce7f3 0%,
    #fae8ff 50%,
    #e9d5ff 100%
  );
  background-attachment: fixed;
  min-height: 100vh;
}`}
              </pre>
            </div>

            {/* Organic button */}
            <div className="bg-gradient-to-br from-white/90 to-fuchsia-50/90 backdrop-blur-lg rounded-[2.5rem] p-8 shadow-xl shadow-fuchsia-200/40 border border-fuchsia-200/50">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Organic Button</h3>
              <pre className="text-emerald-600 text-sm font-mono overflow-x-auto bg-fuchsia-50/50 rounded-2xl p-4">
{`.organic-btn {
  background: linear-gradient(
    to right,
    #c084fc,
    #f472b6
  );
  border-radius: 2rem 0.5rem 2rem 1rem;
  padding: 12px 32px;
  color: white;
  font-weight: bold;
  border: 2px solid rgba(
    255,255,255,0.3
  );
  box-shadow: 
    0 10px 30px rgba(
      192,132,252,0.3
    );
}`}
              </pre>
            </div>

            {/* Fluid card */}
            <div className="bg-gradient-to-br from-white/90 to-violet-50/90 backdrop-blur-lg rounded-[2.5rem] p-8 shadow-xl shadow-violet-200/40 border border-violet-200/50">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Fluid Card</h3>
              <pre className="text-emerald-600 text-sm font-mono overflow-x-auto bg-violet-50/50 rounded-2xl p-4">
{`.fluid-card {
  background: rgba(
    255,255,255,0.8
  );
  backdrop-filter: blur(20px);
  border-radius: 3rem 1rem 2rem 1rem;
  border: 1px solid rgba(
    192,132,252,0.2
  );
  padding: 2rem;
  box-shadow: 
    0 20px 60px rgba(
      192,132,252,0.15
    );
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-pink-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-16">COLOR PALETTE</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <div className="w-full aspect-square bg-gradient-to-br from-pink-300 to-rose-300 rounded-[2rem] shadow-lg shadow-pink-200/50 mb-3 border border-pink-200/50" />
              <span className="text-sm font-bold text-purple-800">Pink 300</span>
              <span className="block text-xs text-purple-500">#f9a8d4</span>
            </div>
            <div className="text-center">
              <div className="w-full aspect-square bg-gradient-to-br from-purple-300 to-violet-300 rounded-[3rem_1rem_2rem_1rem] shadow-lg shadow-purple-200/50 mb-3 border border-purple-200/50" />
              <span className="text-sm font-bold text-purple-800">Purple 300</span>
              <span className="block text-xs text-purple-500">#c4b5fd</span>
            </div>
            <div className="text-center">
              <div className="w-full aspect-square bg-gradient-to-br from-fuchsia-300 to-pink-300 rounded-[1rem_3rem_1rem_3rem] shadow-lg shadow-fuchsia-200/50 mb-3 border border-fuchsia-200/50" />
              <span className="text-sm font-bold text-purple-800">Fuchsia 300</span>
              <span className="block text-xs text-purple-500">#f0abfc</span>
            </div>
            <div className="text-center">
              <div className="w-full aspect-square bg-gradient-to-br from-violet-300 to-purple-300 rounded-[50%_50%_30%_70%] shadow-lg shadow-violet-200/50 mb-3 border border-violet-200/50" />
              <span className="text-sm font-bold text-purple-800">Violet 300</span>
              <span className="block text-xs text-purple-500">#a78bfa</span>
            </div>
            <div className="text-center">
              <div className="w-full aspect-square bg-gradient-to-br from-rose-200 to-pink-200 rounded-[2rem_0.5rem_3rem_2rem] shadow-lg shadow-rose-200/50 mb-3 border border-rose-200/50" />
              <span className="text-sm font-bold text-purple-800">Rose 200</span>
              <span className="block text-xs text-purple-500">#fecdd3</span>
            </div>
            <div className="text-center">
              <div className="w-full aspect-square bg-gradient-to-br from-purple-100 to-fuchsia-100 rounded-[1rem_1rem_4rem_4rem] shadow-lg shadow-purple-100/50 mb-3 border border-purple-100/50" />
              <span className="text-sm font-bold text-purple-800">Lavender</span>
              <span className="block text-xs text-purple-500">#ede9fe</span>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-lg rounded-[3rem] p-10 shadow-xl border border-purple-200/50">
            <h3 className="text-2xl font-bold text-purple-800 mb-6">Gradient Combinations</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="h-20 bg-gradient-to-br from-pink-300 via-purple-300 to-fuchsia-300 rounded-2xl shadow-lg" />
              <div className="h-20 bg-gradient-to-r from-rose-200 via-pink-200 to-fuchsia-200 rounded-full shadow-lg" />
              <div className="h-20 bg-gradient-to-br from-violet-300/50 to-purple-300/50 rounded-[2rem_1rem_3rem_1rem] shadow-lg border-2 border-purple-200/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-16">DO'S & DON'TS</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Do's */}
            <div>
              <h3 className="text-3xl font-bold text-emerald-600 mb-8 flex items-center gap-3">
                <span className="w-12 h-12 bg-gradient-to-br from-emerald-300 to-green-300 rounded-full flex items-center justify-center text-white text-xl">✓</span>
                Do's
              </h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/80 to-emerald-50/80 backdrop-blur-lg rounded-[2rem] p-6 shadow-lg border border-emerald-200/50">
                  <h4 className="font-bold text-purple-800 mb-2">Embrace Asymmetry</h4>
                  <p className="text-purple-600/70">Organic design celebrates irregular shapes. Don't be afraid to use asymmetric border-radius values.</p>
                </div>
                <div className="bg-gradient-to-br from-white/80 to-emerald-50/80 backdrop-blur-lg rounded-[2rem] p-6 shadow-lg border border-emerald-200/50">
                  <h4 className="font-bold text-purple-800 mb-2">Layer Soft Gradients</h4>
                  <p className="text-purple-600/70">Multiple gradient stops create depth. Use related colors for harmonious transitions.</p>
                </div>
                <div className="bg-gradient-to-br from-white/80 to-emerald-50/80 backdrop-blur-lg rounded-[2rem] p-6 shadow-lg border border-emerald-200/50">
                  <h4 className="font-bold text-purple-800 mb-2">Add Gentle Shadows</h4>
                  <p className="text-purple-600/70">Soft, diffused shadows complement organic shapes. Keep them light and colorful.</p>
                </div>
                <div className="bg-gradient-to-br from-white/80 to-emerald-50/80 backdrop-blur-lg rounded-[2rem] p-6 shadow-lg border border-emerald-200/50">
                  <h4 className="font-bold text-purple-800 mb-2">Use Backdrop Blur</h4>
                  <p className="text-purple-600/70">Glass-like blur effects enhance the ethereal, flowing quality of organic design.</p>
                </div>
              </div>
            </div>

            {/* Don'ts */}
            <div>
              <h3 className="text-3xl font-bold text-rose-500 mb-8 flex items-center gap-3">
                <span className="w-12 h-12 bg-gradient-to-br from-rose-300 to-red-300 rounded-full flex items-center justify-center text-white text-xl">✗</span>
                Don'ts
              </h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/80 to-rose-50/80 backdrop-blur-lg rounded-[2rem] p-6 shadow-lg border border-rose-200/50">
                  <h4 className="font-bold text-purple-800 mb-2">Don't Over-Use Sharp Corners</h4>
                  <p className="text-purple-600/70">Sharp 0px border-radius breaks the organic feel. Even buttons need some curve.</p>
                </div>
                <div className="bg-gradient-to-br from-white/80 to-rose-50/80 backdrop-blur-lg rounded-[2rem] p-6 shadow-lg border border-rose-200/50">
                  <h4 className="font-bold text-purple-800 mb-2">Don't Use Harsh Colors</h4>
                  <p className="text-purple-600/70">Pure saturation fights the soft aesthetic. Stick to pastels and muted tones.</p>
                </div>
                <div className="bg-gradient-to-br from-white/80 to-rose-50/80 backdrop-blur-lg rounded-[2rem] p-6 shadow-lg border border-rose-200/50">
                  <h4 className="font-bold text-purple-800 mb-2">Don't Make Everything a Blob</h4>
                  <p className="text-purple-600/70">Variety keeps interest. Mix blobs with softer conventional shapes.</p>
                </div>
                <div className="bg-gradient-to-br from-white/80 to-rose-50/80 backdrop-blur-lg rounded-[2rem] p-6 shadow-lg border border-rose-200/50">
                  <h4 className="font-bold text-purple-800 mb-2">Don't Forget Performance</h4>
                  <p className="text-purple-600/70">Heavy gradients and blur can impact rendering. Test on lower-end devices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-gradient-to-r from-purple-100/80 to-pink-100/80 backdrop-blur-lg border-t border-purple-200/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-[40%_60%_30%_70%] shadow-lg shadow-purple-300/50" />
            <div>
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">ORGANIC FLUID</span>
              <p className="text-sm text-purple-500">Design Theory 2026</p>
            </div>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-bold text-purple-600">
            <a href="/brutalism" className="hover:text-pink-600 transition-colors">← Brutalism</a>
            <a href="/minimalism" className="hover:text-pink-600 transition-colors">Minimalism</a>
            <a href="/glassmorphism" className="hover:text-pink-600 transition-colors">Glassmorphism</a>
            <a href="/neumorphism" className="hover:text-pink-600 transition-colors">Neumorphism →</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
