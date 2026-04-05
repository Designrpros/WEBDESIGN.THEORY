(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,71521,e=>{"use strict";var s=e.i(43476);e.s(["default",0,()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("style",{children:`
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
      `}),(0,s.jsxs)("div",{className:"vaporwave-page",children:[(0,s.jsx)("div",{className:"scanlines"}),(0,s.jsx)("div",{className:"grid-bg"}),(0,s.jsxs)("section",{className:"hero-section",children:[(0,s.jsx)("h1",{className:"hero-title",children:"VAPORWAVE"}),(0,s.jsx)("p",{className:"hero-subtitle",children:"A E S T H E T I C"}),(0,s.jsx)("div",{className:"sunset-gradient sunset-bar"})]}),(0,s.jsxs)("section",{className:"section",children:[(0,s.jsx)("h2",{className:"section-title",children:"// HISTORY"}),(0,s.jsx)("div",{className:"decorative-line"}),(0,s.jsx)("p",{className:"history-text",children:"Vaporwave emerged in the early 2010s as a music genre and visual art movement that Sampling from 1980s and 1990s corporate Muzak, Japanese City Pop, and smooth jazz. The aesthetic reaction against the perceived soullessness of modern digital culture. It transforms nostalgic relics of late capitalism—Marlboro logos, Roman busts, Windows 95 icons—into dreamlike, melancholic collages. The visual language draws heavily from cyberpunk, retrowave, and glitch art, creating an alternate reality where the future never quite arrived."})]}),(0,s.jsxs)("section",{className:"section",children:[(0,s.jsx)("h2",{className:"section-title",children:"// VISUAL ELEMENTS"}),(0,s.jsxs)("div",{className:"visual-grid",children:[(0,s.jsxs)("div",{className:"visual-card",children:[(0,s.jsx)("h3",{className:"visual-card-title",children:"GRID BACKGROUND"}),(0,s.jsx)("div",{className:"grid-preview"}),(0,s.jsx)("p",{style:{marginTop:"1rem",color:"#01CDFE",fontSize:"0.9rem"},children:"Perspective grids evoke 80s computer graphics and OutRun aesthetics"})]}),(0,s.jsxs)("div",{className:"visual-card",children:[(0,s.jsx)("h3",{className:"visual-card-title",children:"SUNSET GRADIENT"}),(0,s.jsx)("div",{className:"sunset-gradient sunset-preview"}),(0,s.jsx)("p",{style:{marginTop:"1rem",color:"#01CDFE",fontSize:"0.9rem"},children:"Pink to cyan gradients reminiscent of digital sunsets"})]}),(0,s.jsxs)("div",{className:"visual-card",children:[(0,s.jsx)("h3",{className:"visual-card-title",children:"RETROFUTURISM"}),(0,s.jsx)("div",{className:"retrowave-preview"}),(0,s.jsx)("p",{style:{marginTop:"1rem",color:"#01CDFE",fontSize:"0.9rem"},children:"Glitch text and neon colors capture an imagined past future"})]})]})]}),(0,s.jsxs)("section",{className:"section",children:[(0,s.jsx)("h2",{className:"section-title",children:"// CODE EXAMPLES"}),(0,s.jsx)("div",{className:"decorative-line"}),(0,s.jsx)("div",{className:"code-label",children:"CSS GRADIENT"}),(0,s.jsx)("div",{className:"code-block",children:`background: linear-gradient(
  180deg,
  #1a0a2e 0%,
  #FF71CE 25%,
  #B967FF 50%,
  #01CDFE 75%,
  #05FFA1 100%
);`}),(0,s.jsx)("div",{className:"code-label",children:"GRID PATTERN"}),(0,s.jsx)("div",{className:"code-block",children:`background-image:
  linear-gradient(
    rgba(255, 113, 206, 0.1) 1px,
    transparent 1px
  ),
  linear-gradient(
    90deg,
    rgba(255, 113, 206, 0.1) 1px,
    transparent 1px
  );
background-size: 50px 50px;`}),(0,s.jsx)("div",{className:"code-label",children:"VAPORWAVE TEXT"}),(0,s.jsx)("div",{className:"code-block",children:`.vaporwave-text {
  font-family: 'Press Start 2P', cursive;
  background: linear-gradient(180deg, #FF71CE, #01CDFE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 20px rgba(255, 113, 206, 0.8));
}`})]}),(0,s.jsxs)("section",{className:"section",children:[(0,s.jsx)("h2",{className:"section-title",children:"// COLOR PALETTE"}),(0,s.jsx)("div",{className:"decorative-line"}),(0,s.jsxs)("div",{className:"color-palette",children:[(0,s.jsxs)("div",{className:"color-swatch",children:[(0,s.jsx)("div",{className:"swatch",style:{backgroundColor:"#FF71CE"}}),(0,s.jsx)("div",{className:"swatch-label",children:"Hot Pink"}),(0,s.jsx)("div",{className:"swatch-hex",children:"#FF71CE"})]}),(0,s.jsxs)("div",{className:"color-swatch",children:[(0,s.jsx)("div",{className:"swatch",style:{backgroundColor:"#01CDFE"}}),(0,s.jsx)("div",{className:"swatch-label",children:"Cyan"}),(0,s.jsx)("div",{className:"swatch-hex",children:"#01CDFE"})]}),(0,s.jsxs)("div",{className:"color-swatch",children:[(0,s.jsx)("div",{className:"swatch",style:{backgroundColor:"#B967FF"}}),(0,s.jsx)("div",{className:"swatch-label",children:"Purple"}),(0,s.jsx)("div",{className:"swatch-hex",children:"#B967FF"})]}),(0,s.jsxs)("div",{className:"color-swatch",children:[(0,s.jsx)("div",{className:"swatch",style:{backgroundColor:"#05FFA1"}}),(0,s.jsx)("div",{className:"swatch-label",children:"Mint"}),(0,s.jsx)("div",{className:"swatch-hex",children:"#05FFA1"})]}),(0,s.jsxs)("div",{className:"color-swatch",children:[(0,s.jsx)("div",{className:"gradient-preview sunset-gradient"}),(0,s.jsx)("div",{className:"swatch-label",children:"Sunset"}),(0,s.jsx)("div",{className:"swatch-hex",children:"Gradient"})]})]})]}),(0,s.jsxs)("section",{className:"section",children:[(0,s.jsx)("h2",{className:"section-title",children:"// DO'S & DON'TS"}),(0,s.jsx)("div",{className:"decorative-line"}),(0,s.jsxs)("div",{className:"dos-donts",children:[(0,s.jsxs)("div",{className:"do-section",children:[(0,s.jsx)("h3",{className:"do-title",children:"✓ DO"}),(0,s.jsxs)("div",{className:"list-item",children:[(0,s.jsx)("span",{className:"list-icon",children:"✦"}),(0,s.jsx)("span",{children:"Use pink and cyan color combinations for maximum impact"})]}),(0,s.jsxs)("div",{className:"list-item",children:[(0,s.jsx)("span",{className:"list-icon",children:"✦"}),(0,s.jsx)("span",{children:"Incorporate 80s/90s nostalgia elements and imagery"})]}),(0,s.jsxs)("div",{className:"list-item",children:[(0,s.jsx)("span",{className:"list-icon",children:"✦"}),(0,s.jsx)("span",{children:"Add subtle glitch effects and animations"})]}),(0,s.jsxs)("div",{className:"list-item",children:[(0,s.jsx)("span",{className:"list-icon",children:"✦"}),(0,s.jsx)("span",{children:"Use pixel fonts for headings and key text"})]}),(0,s.jsxs)("div",{className:"list-item",children:[(0,s.jsx)("span",{className:"list-icon",children:"✦"}),(0,s.jsx)("span",{children:"Layer gradients with grid patterns for depth"})]})]}),(0,s.jsxs)("div",{className:"dont-section",children:[(0,s.jsx)("h3",{className:"dont-title",children:"✗ DON'T"}),(0,s.jsxs)("div",{className:"list-item",children:[(0,s.jsx)("span",{className:"list-icon",children:"◆"}),(0,s.jsx)("span",{children:"Overwhelm with too many bright colors at once"})]}),(0,s.jsxs)("div",{className:"list-item",children:[(0,s.jsx)("span",{className:"list-icon",children:"◆"}),(0,s.jsx)("span",{children:"Use realistic photography without stylization"})]}),(0,s.jsxs)("div",{className:"list-item",children:[(0,s.jsx)("span",{className:"list-icon",children:"◆"}),(0,s.jsx)("span",{children:"Forget the melancholic, dreamy atmosphere"})]}),(0,s.jsxs)("div",{className:"list-item",children:[(0,s.jsx)("span",{className:"list-icon",children:"◆"}),(0,s.jsx)("span",{children:"Apply the aesthetic without understanding its roots"})]}),(0,s.jsxs)("div",{className:"list-item",children:[(0,s.jsx)("span",{className:"list-icon",children:"◆"}),(0,s.jsx)("span",{children:"Make it too clean—embrace the digital decay"})]})]})]})]}),(0,s.jsxs)("footer",{className:"footer",children:[(0,s.jsx)("div",{className:"ascii-decoration",children:"═══════════════════════════════════════════════════════"}),(0,s.jsxs)("nav",{className:"footer-nav",children:[(0,s.jsx)("a",{href:"#",className:"footer-link",children:"CYBERPUNK"}),(0,s.jsx)("a",{href:"#",className:"footer-link",children:"BRUTALISM"}),(0,s.jsx)("a",{href:"#",className:"footer-link",children:"GLASSMORPHISM"}),(0,s.jsx)("a",{href:"#",className:"footer-link",children:"MINIMALISM"}),(0,s.jsx)("a",{href:"#",className:"footer-link",children:"SWISS"})]}),(0,s.jsx)("div",{className:"decorative-line"}),(0,s.jsx)("p",{className:"footer-text",children:"░▒▓█ VAPORWAVE DESIGN THEORY █▓▒░"}),(0,s.jsx)("p",{className:"footer-text",style:{marginTop:"1rem",opacity:.5},children:"A E S T H E T I C S T U D I E S"})]})]})]})])}]);