'use client';

export default function GrungeWeb1Page() {
  return (
    <main className="min-h-screen bg-[#cccccc] text-black">
      {/* Header - classic Web 1.0 style */}
            {/* Hero - Retro Web 1.0 style */}
      <section className="min-h-[80vh] bg-[#cccccc] py-16 px-6 relative">
        {/* Fake browser chrome */}
        <div className="max-w-4xl mx-auto border-4 border-[#000080] bg-white">
          {/* Fake toolbar */}
          <div className="bg-gradient-to-r from-[#c0c0c0] to-[#e0e0e0] border-b-2 border-[#000080] px-4 py-2 flex items-center gap-2">
            <div className="flex gap-1">
              <span className="w-6 h-6 bg-red-500 text-white text-xs flex items-center justify-center font-bold">X</span>
              <span className="w-6 h-6 bg-[#c0c0c0] border inset-0 text-xs flex items-center justify-center">?</span>
              <span className="w-6 h-6 bg-[#c0c0c0] border inset-0 text-xs flex items-center justify-center">←</span>
            </div>
            <div className="flex-1 bg-white border-2 border-[#808080] border-[#000080] px-2 py-0.5 text-xs text-[#808080]">
              http://www.coolweb95.com/welcome.html
            </div>
          </div>
          
          {/* Content */}
          <div className="p-8">
            <div className="bg-[#ffff00] text-black px-4 py-2 border-2 border-[#000080] inline-block mb-8">
              <span className="text-xl font-bold">★★★ WELCOME TO MY HOMEPAGE!!! ★★★</span>
            </div>
            
            <h1 className="text-5xl font-black uppercase mb-8 border-b-4 border-black pb-4">
              GRUNGE WEB 1.0
            </h1>
            
            <div className="bg-[#ff0000] text-white p-4 border-4 border-[#808080] mb-8 max-w-2xl">
              <p className="font-bold">LAST UPDATED:</p>
              <p>March 15, 1997</p>
            </div>
            
            <div className="bg-[#00ff00] border-4 border-[#000080] p-6 mb-8 max-w-2xl">
              <h2 className="text-xl font-bold mb-4">About This Page</h2>
              <p className="mb-4">This page is dedicated to the raw, unpolished aesthetic of early web design!</p>
              <p className="text-[#000080] underline"><a href="#">Click here</a> to email me!!!</p>
            </div>
            
            <div className="flex gap-4 flex-wrap">
              <a href="#history" className="bg-[#0000ff] text-white px-6 py-3 font-bold border-4 border-[#808080] hover:bg-[#000080]">
                LEARN MORE [CLICK]
              </a>
              <a href="#code" className="bg-[#ff00ff] text-white px-6 py-3 font-bold border-4 border-[#808080] hover:bg-[#cc00cc]">
                VIEW SOURCE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-24 bg-[#808080] border-t-8 border-[#000080]">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block bg-[#ffff00] px-4 py-2 text-sm font-bold border-4 border-black mb-8">HISTORY</span>
          
          <h2 className="text-6xl font-black uppercase mb-16">THE ORIGINS</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-[#c0c0c0] border-4 border-[#000080] p-8">
                <h3 className="text-2xl font-bold mb-4">1991 - First Website</h3>
                <p>Tim Berners-Lee created the first website. It was ugly. Nobody cared. It worked.</p>
              </div>
              <div className="bg-[#ffffff] border-4 border-[#000080] p-8">
                <h3 className="text-2xl font-bold mb-4">1995-2000 - Golden Age</h3>
                <p>Everyone had a GeoCities page. Animated GIFs. Under construction signs. Visitor counters.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-[#000080] text-white p-8 border-4 border-[#ffff00]">
                <h3 className="text-cyan-400 font-bold uppercase mb-4">Timeline</h3>
                <div className="space-y-4">
                  {[
                    { year: '1991', title: 'First Website', desc: 'info.cern.ch goes live' },
                    { year: '1993', title: 'Mosaic Browser', desc: 'Images in browsers!' },
                    { year: '1995', title: 'JavaScript', desc: 'Now it is interactive' },
                    { year: '1996', title: 'CSS Arrives', desc: 'Style sheets become standard' },
                    { year: '1999', title: 'Web 2.0?', desc: 'Dawn of modern web' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 border-l-4 border-[#00ff00] pl-4">
                      <span className="font-bold w-16 text-yellow-400">{item.year}</span>
                      <div>
                        <h4 className="font-bold uppercase">{item.title}</h4>
                        <p className="text-white/70 text-sm">{item.desc}</p>
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
      <section className="py-24 bg-[#cccccc] border-t-8 border-[#000080]">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block bg-[#ff00ff] text-white px-4 py-2 text-sm font-bold border-4 border-black mb-8">EXAMPLES</span>
          
          <h2 className="text-6xl font-black uppercase mb-16">WHAT IT LOOKS LIKE</h2>

          {/* Example 1: Classic Web Button */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Classic Web 1.0 Buttons</h3>
            <div className="bg-white border-4 border-[#808080] p-12">
              <div className="flex flex-wrap gap-6">
                <button className="bg-[#c0c0c0] px-8 py-4 border-4 border-[#808080] border-top-[#ffffff] border-left-[#ffffff] font-bold">
                  CLASSIC BUTTON
                </button>
                <button className="bg-[#0000ff] text-white px-8 py-4 border-4 border-[#000080] font-bold">
                  BLUE BUTTON
                </button>
                <button className="bg-[#ff0000] text-white px-8 py-4 border-4 border-[#800000] font-bold">
                  RED BUTTON
                </button>
                <a href="#" className="bg-[#00ff00] px-8 py-4 border-4 border-[#008000] font-bold inline-block text-black">
                  LINK BUTTON
                </a>
              </div>
            </div>
          </div>

          {/* Example 2: Marquee and Special Effects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Marquee Text</h3>
            <div className="bg-[#000080] border-4 border-[#ffff00] p-8 overflow-hidden">
              <div className="text-[#00ff00] text-2xl font-mono animate-pulse">
                &lt;MARQUEE&gt;★★★ WELCOME TO MY HOMEPAGE!!! ★★★ NEW CONTENT ADDED MARCH 1997!!! ★★★ EMAIL ME!!! &lt;/MARQUEE&gt;
              </div>
            </div>
          </div>

          {/* Example 3: Table Layout */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Table Layout</h3>
            <div className="bg-white border-4 border-[#808080]">
              <div className="bg-[#0000ff] text-white p-4 font-bold border-b-4 border-[#000080]">
                NAVIGATION BAR
              </div>
              <div className="flex">
                <div className="w-48 bg-[#c0c0c0] p-4 border-r-4 border-[#808080]">
                  <p className="font-bold mb-2">Links:</p>
                  <p className="text-[#0000ff] underline mb-1"><a href="#">Cool Site #1</a></p>
                  <p className="text-[#0000ff] underline mb-1"><a href="#">Cool Site #2</a></p>
                  <p className="text-[#0000ff] underline mb-1"><a href="#">Cool Site #3</a></p>
                  <p className="text-[#0000ff] underline"><a href="#">More Links!!!</a></p>
                </div>
                <div className="flex-1 p-8">
                  <h4 className="text-2xl font-black mb-4 border-b-2 border-black pb-2">MAIN CONTENT AREA</h4>
                  <p className="mb-4">Welcome to my website!!! This is where I put all my cool content about my interests.</p>
                  <div className="bg-[#ffff00] border-2 border-[#000080] p-4">
                    <p className="font-bold">HOT TIP:</p>
                    <p>Add me to your bookmarks!!!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Example 4: Under Construction */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Under Construction</h3>
            <div className="bg-[#000080] border-4 border-[#ff0000] p-8 text-center">
              <div className="text-[#ffff00] text-4xl font-black mb-4 animate-pulse">
                🚧 UNDER CONSTRUCTION!!! 🚧
              </div>
              <p className="text-white text-xl">Come back later for more content!!!</p>
              <p className="text-[#00ff00] mt-4">Last updated: March 15, 1997</p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section id="code" className="py-24 bg-[#c0c0c0] border-t-8 border-[#000080]">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block bg-[#0000ff] text-white px-4 py-2 text-sm font-bold border-4 border-[#000080] mb-8">SOURCE CODE</span>
          
          <h2 className="text-6xl font-black uppercase mb-16">IMPLEMENTATION</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border-4 border-[#808080] p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#000080]">3D Button Effect</h3>
              <pre className="text-sm font-mono text-black overflow-x-auto">
{`<button class="win98-btn">
  CLICK ME
</button>

<style>
.win98-btn {
  background: #c0c0c0;
  border: 4px solid #808080;
  border-top: 4px solid #ffffff;
  border-left: 4px solid #ffffff;
  padding: 8px 16px;
  font-weight: bold;
}
</style>`}
              </pre>
            </div>
            <div className="bg-white border-4 border-[#808080] p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#000080]">Blue Link</h3>
              <pre className="text-sm font-mono text-black overflow-x-auto">
{`<a href="page.html" 
   class="classic-link">
  Click here for more!!!
</a>

<style>
.classic-link {
  color: #0000ff;
  text-decoration: underline;
}

.classic-link:hover {
  color: #ff0000;
}
</style>`}
              </pre>
            </div>
          </div>

          {/* Color Palette */}
          <div className="bg-white border-4 border-[#808080] p-12">
            <h3 className="text-2xl font-bold mb-8">Classic Web Palette</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-full h-24 bg-[#0000ff] border-2 border-[#000080] mb-3" />
                <span className="text-black font-mono text-sm">#0000FF</span>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-[#ff0000] border-2 border-[#800000] mb-3" />
                <span className="text-black font-mono text-sm">#FF0000</span>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-[#00ff00] border-2 border-[#008000] mb-3" />
                <span className="text-black font-mono text-sm">#00FF00</span>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-[#ffff00] border-2 border-[#808080] mb-3" />
                <span className="text-black font-mono text-sm">#FFFF00</span>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-[#c0c0c0] border-2 border-[#808080] mb-3" />
                <span className="text-black font-mono text-sm">#C0C0C0</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-24 bg-[#808080] border-t-8 border-[#000080]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-6xl font-black uppercase mb-16">RULES</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#00ff00] border-4 border-[#008000] p-8">
              <span className="text-[#0000ff] font-black uppercase mb-8 block text-2xl">DO</span>
              {[
                'Use blue links everywhere',
                'Add animated GIFs',
                'Include visitor counters',
                'Use system fonts',
                'Add "Under Construction" signs',
                'Create table layouts',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-2 border-b border-[#008000]/30">
                  <span className="text-[#0000ff] font-black">✓</span>
                  <span className="text-black">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#ff0000] border-4 border-[#800000] p-8">
              <span className="text-white font-black uppercase mb-8 block text-2xl">DON&apos;T</span>
              {[
                'Use semantic HTML5',
                'Add responsive design',
                'Care about accessibility',
                'Use CSS Grid or Flexbox',
                'Make it "clean" or "modern"',
                'Forget the blink tag',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-2 border-b border-[#800000]/30">
                  <span className="text-white font-black">✗</span>
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000080] text-white py-8 px-6 border-t-4 border-[#ffff00]">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm font-bold">
          <span>© 1997 MY COOL WEBSITE</span>
          <div className="flex gap-8">
            <a href="/minimalism" className="underline hover:text-yellow-400">← Minimalism</a>
            <a href="/maximalism" className="underline hover:text-yellow-400">Maximalism →</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-4 text-xs">
          <p>Best viewed in Netscape Navigator 4.0 at 800x600 resolution</p>
          <p className="text-[#00ff00] mt-2">📧 webmaster@coolweb95.com</p>
        </div>
      </footer>
    </main>
  );
}