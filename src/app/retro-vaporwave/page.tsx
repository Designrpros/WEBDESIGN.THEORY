'use client';

import React from 'react';

const RetroVaporwavePage: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Press+Start+2P&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        .vaporwave-page {
          background: linear-gradient(180deg, #1a0a2e 0%, #16213e 50%, #0f3460 100%);
          min-height: 100vh;
          color: #fff;
          font-family: 'Orbitron', sans-serif;
          overflow-x: hidden;
        }
        
        .scanlines {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1000;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.1) 0px,
            rgba(0, 0, 0, 0.1) 1px,
            transparent 1px,
            transparent 2px
          );
        }
        
        .grid-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255, 113, 206, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 113, 206, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          z-index: 0;
        }
        
        .sunset-gradient {
          background: linear-gradient(180deg, 
            #FF71CE 0%, 
            #FF71CE 20%, 
            #B967FF 40%, 
            #01CDFE 70%, 
            #05FFA1 100%
          );
        }
        
        .hero-section {
          position: relative;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          z-index: 1;
        }
        
        .hero-title {
          font-family: 'Press Start 2P', cursive;
          font-size: 4rem;
          background: linear-gradient(180deg, #FF71CE 0%, #01CDFE 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: none;
          filter: drop-shadow(0 0 30px rgba(255, 113, 206, 0.8));
          animation: glitch 3s infinite;
          letter-spacing: 0.2em;
        }
        
        @keyframes glitch {
          0%, 90%, 100% { transform: translate(0); }
          92% { transform: translate(-5px, 2px); }
          94% { transform: translate(5px, -2px); }
          96% { transform: translate(-3px, 1px); }
          98% { transform: translate(3px, -1px); }
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
          color: #01CDFE;
          margin-top: 2rem;
          letter-spacing: 0.5em;
          text-transform: uppercase;
        }
        
        .sunset-bar {
          width: 100%;
          height: 150px;
          margin-top: 4rem;
          border-radius: 0;
        }
        
        .sunset-bar-inverted {
          transform: rotate(180deg);
        }
        
        .section {
          position: relative;
          z-index: 1;
          padding: 6rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .section-title {
          font-family: 'Press Start 2P', cursive;
          font-size: 1.5rem;
          color: #FF71CE;
          margin-bottom: 3rem;
          text-shadow: 0 0 20px rgba(255, 113, 206, 0.5);
        }
        
        .history-text {
          font-size: 1.1rem;
          line-height: 2;
          color: #e0e0e0;
          max-width: 800px;
        }
        
        .visual-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .visual-card {
          background: rgba(255, 113, 206, 0.05);
          border: 2px solid #FF71CE;
          border-radius: 0;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }
        
        .visual-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #FF71CE, #01CDFE);
        }
        
        .visual-card-title {
          font-family: 'Press Start 2P', cursive;
          font-size: 0.8rem;
          color: #01CDFE;
          margin-bottom: 1.5rem;
        }
        
        .grid-preview {
          width: 100%;
          height: 200px;
          background-image: 
            linear-gradient(rgba(255, 113, 206, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 113, 206, 0.3) 1px, transparent 1px);
          background-size: 20px 20px;
          border: 2px solid #01CDFE;
        }
        
        .sunset-preview {
          width: 100%;
          height: 200px;
        }
        
        .retrowave-preview {
          width: 100%;
          height: 200px;
          background: 
            linear-gradient(180deg, 
              #1a0a2e 0%, 
              #FF71CE 30%, 
              #B967FF 50%, 
              #01CDFE 70%, 
              #05FFA1 100%
            );
          position: relative;
          border: 2px solid #B967FF;
        }
        
        .retrowave-preview::after {
          content: 'RETHINK';
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Press Start 2P', cursive;
          font-size: 1rem;
          color: #01CDFE;
          text-shadow: 0 0 10px #01CDFE;
        }
        
        .code-block {
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid #01CDFE;
          border-radius: 0;
          padding: 1.5rem;
          margin: 1rem 0;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          color: #05FFA1;
          overflow-x: auto;
          white-space: pre;
        }
        
        .code-label {
          font-family: 'Press Start 2P', cursive;
          font-size: 0.6rem;
          color: #B967FF;
          margin-bottom: 0.5rem;
        }
        
        .color-palette {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        
        .color-swatch {
          text-align: center;
        }
        
        .swatch {
          width: 120px;
          height: 120px;
          border: 2px solid #fff;
          margin-bottom: 1rem;
        }
        
        .swatch-label {
          font-size: 0.9rem;
          color: #01CDFE;
        }
        
        .swatch-hex {
          font-family: 'Courier New', monospace;
          font-size: 0.8rem;
          color: #B967FF;
          margin-top: 0.5rem;
        }
        
        .gradient-preview {
          width: 120px;
          height: 120px;
          border: 2px solid #fff;
          margin-bottom: 1rem;
        }
        
        .dos-donts {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-top: 2rem;
        }
        
        @media (max-width: 768px) {
          .dos-donts {
            grid-template-columns: 1fr;
          }
        }
        
        .do-section, .dont-section {
          padding: 2rem;
          border: 2px solid;
        }
        
        .do-section {
          border-color: #05FFA1;
          background: rgba(5, 255, 161, 0.05);
        }
        
        .dont-section {
          border-color: #FF71CE;
          background: rgba(255, 113, 206, 0.05);
        }
        
        .do-title {
          font-family: 'Press Start 2P', cursive;
          font-size: 1rem;
          color: #05FFA1;
          margin-bottom: 1.5rem;
        }
        
        .dont-title {
          font-family: 'Press Start 2P', cursive;
          font-size: 1rem;
          color: #FF71CE;
          margin-bottom: 1.5rem;
        }
        
        .list-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
          font-size: 1rem;
          line-height: 1.6;
        }
        
        .list-icon {
          margin-right: 1rem;
          font-size: 1.2rem;
        }
        
        .footer {
          position: relative;
          z-index: 1;
          padding: 4rem 2rem;
          border-top: 2px solid #FF71CE;
          background: rgba(0, 0, 0, 0.5);
        }
        
        .footer-nav {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-link {
          font-family: 'Press Start 2P', cursive;
          font-size: 0.7rem;
          color: #01CDFE;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .footer-link:hover {
          color: #FF71CE;
          text-shadow: 0 0 20px rgba(255, 113, 206, 0.8);
        }
        
        .footer-text {
          text-align: center;
          color: #B967FF;
          font-size: 0.8rem;
          letter-spacing: 0.2em;
        }
        
        .ascii-decoration {
          font-family: 'Courier New', monospace;
          font-size: 0.6rem;
          color: #B967FF;
          text-align: center;
          margin: 2rem 0;
          opacity: 0.6;
        }
        
        .decorative-line {
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #FF71CE, #01CDFE, transparent);
          margin: 2rem 0;
        }
      `}</style>
      
      <div className="vaporwave-page">
        <div className="scanlines" />
        <div className="grid-bg" />
        
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-title">VAPORWAVE</h1>
          <p className="hero-subtitle">A E S T H E T I C</p>
          <div className="sunset-gradient sunset-bar" />
        </section>
        
        {/* History Section */}
        <section className="section">
          <h2 className="section-title">// HISTORY</h2>
          <div className="decorative-line" />
          <p className="history-text">
            Vaporwave emerged in the early 2010s as a music genre and visual art movement 
            that Sampling from 1980s and 1990s corporate Muzak, Japanese City Pop, and 
            smooth jazz. The aesthetic reaction against the perceived soullessness of 
            modern digital culture. It transforms nostalgic relics of late capitalism—Marlboro 
            logos, Roman busts, Windows 95 icons—into dreamlike, melancholic collages. The 
            visual language draws heavily from cyberpunk, retrowave, and glitch art, creating 
            an alternate reality where the future never quite arrived.
          </p>
        </section>
        
        {/* Visual Examples Section */}
        <section className="section">
          <h2 className="section-title">// VISUAL ELEMENTS</h2>
          <div className="visual-grid">
            <div className="visual-card">
              <h3 className="visual-card-title">GRID BACKGROUND</h3>
              <div className="grid-preview" />
              <p style={{ marginTop: '1rem', color: '#01CDFE', fontSize: '0.9rem' }}>
                Perspective grids evoke 80s computer graphics and OutRun aesthetics
              </p>
            </div>
            
            <div className="visual-card">
              <h3 className="visual-card-title">SUNSET GRADIENT</h3>
              <div className="sunset-gradient sunset-preview" />
              <p style={{ marginTop: '1rem', color: '#01CDFE', fontSize: '0.9rem' }}>
                Pink to cyan gradients reminiscent of digital sunsets
              </p>
            </div>
            
            <div className="visual-card">
              <h3 className="visual-card-title">RETROFUTURISM</h3>
              <div className="retrowave-preview" />
              <p style={{ marginTop: '1rem', color: '#01CDFE', fontSize: '0.9rem' }}>
                Glitch text and neon colors capture an imagined past future
              </p>
            </div>
          </div>
        </section>
        
        {/* Code Examples Section */}
        <section className="section">
          <h2 className="section-title">// CODE EXAMPLES</h2>
          <div className="decorative-line" />
          
          <div className="code-label">CSS GRADIENT</div>
          <div className="code-block">{`background: linear-gradient(
  180deg,
  #1a0a2e 0%,
  #FF71CE 25%,
  #B967FF 50%,
  #01CDFE 75%,
  #05FFA1 100%
);`}</div>
          
          <div className="code-label">GRID PATTERN</div>
          <div className="code-block">{`background-image:
  linear-gradient(
    rgba(255, 113, 206, 0.1) 1px,
    transparent 1px
  ),
  linear-gradient(
    90deg,
    rgba(255, 113, 206, 0.1) 1px,
    transparent 1px
  );
background-size: 50px 50px;`}</div>
          
          <div className="code-label">VAPORWAVE TEXT</div>
          <div className="code-block">{`.vaporwave-text {
  font-family: 'Press Start 2P', cursive;
  background: linear-gradient(180deg, #FF71CE, #01CDFE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 20px rgba(255, 113, 206, 0.8));
}`}</div>
        </section>
        
        {/* Color Palette Section */}
        <section className="section">
          <h2 className="section-title">// COLOR PALETTE</h2>
          <div className="decorative-line" />
          <div className="color-palette">
            <div className="color-swatch">
              <div className="swatch" style={{ backgroundColor: '#FF71CE' }} />
              <div className="swatch-label">Hot Pink</div>
              <div className="swatch-hex">#FF71CE</div>
            </div>
            <div className="color-swatch">
              <div className="swatch" style={{ backgroundColor: '#01CDFE' }} />
              <div className="swatch-label">Cyan</div>
              <div className="swatch-hex">#01CDFE</div>
            </div>
            <div className="color-swatch">
              <div className="swatch" style={{ backgroundColor: '#B967FF' }} />
              <div className="swatch-label">Purple</div>
              <div className="swatch-hex">#B967FF</div>
            </div>
            <div className="color-swatch">
              <div className="swatch" style={{ backgroundColor: '#05FFA1' }} />
              <div className="swatch-label">Mint</div>
              <div className="swatch-hex">#05FFA1</div>
            </div>
            <div className="color-swatch">
              <div className="gradient-preview sunset-gradient" />
              <div className="swatch-label">Sunset</div>
              <div className="swatch-hex">Gradient</div>
            </div>
          </div>
        </section>
        
        {/* Do's and Don'ts Section */}
        <section className="section">
          <h2 className="section-title">// DO'S & DON'TS</h2>
          <div className="decorative-line" />
          <div className="dos-donts">
            <div className="do-section">
              <h3 className="do-title">✓ DO</h3>
              <div className="list-item">
                <span className="list-icon">✦</span>
                <span>Use pink and cyan color combinations for maximum impact</span>
              </div>
              <div className="list-item">
                <span className="list-icon">✦</span>
                <span>Incorporate 80s/90s nostalgia elements and imagery</span>
              </div>
              <div className="list-item">
                <span className="list-icon">✦</span>
                <span>Add subtle glitch effects and animations</span>
              </div>
              <div className="list-item">
                <span className="list-icon">✦</span>
                <span>Use pixel fonts for headings and key text</span>
              </div>
              <div className="list-item">
                <span className="list-icon">✦</span>
                <span>Layer gradients with grid patterns for depth</span>
              </div>
            </div>
            
            <div className="dont-section">
              <h3 className="dont-title">✗ DON'T</h3>
              <div className="list-item">
                <span className="list-icon">◆</span>
                <span>Overwhelm with too many bright colors at once</span>
              </div>
              <div className="list-item">
                <span className="list-icon">◆</span>
                <span>Use realistic photography without stylization</span>
              </div>
              <div className="list-item">
                <span className="list-icon">◆</span>
                <span>Forget the melancholic, dreamy atmosphere</span>
              </div>
              <div className="list-item">
                <span className="list-icon">◆</span>
                <span>Apply the aesthetic without understanding its roots</span>
              </div>
              <div className="list-item">
                <span className="list-icon">◆</span>
                <span>Make it too clean—embrace the digital decay</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="footer">
          <div className="ascii-decoration">
            ═══════════════════════════════════════════════════════
          </div>
          <nav className="footer-nav">
            <a href="#" className="footer-link">CYBERPUNK</a>
            <a href="#" className="footer-link">BRUTALISM</a>
            <a href="#" className="footer-link">GLASSMORPHISM</a>
            <a href="#" className="footer-link">MINIMALISM</a>
            <a href="#" className="footer-link">SWISS</a>
          </nav>
          <div className="decorative-line" />
          <p className="footer-text">
            ░▒▓█ VAPORWAVE DESIGN THEORY █▓▒░
          </p>
          <p className="footer-text" style={{ marginTop: '1rem', opacity: 0.5 }}>
            A E S T H E T I C S T U D I E S
          </p>
        </footer>
      </div>
    </>
  );
};

export default RetroVaporwavePage;
