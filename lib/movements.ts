import { Movement } from './types';

export const movements: Movement[] = [
  {
    slug: 'brutalism',
    name: 'Brutalism',
    era: '1950s-1970s',
    origin: 'United Kingdom',
    accentColor: '#FF6B35',
    description: 'Raw, unpolished aesthetics that embrace the materiality of construction. Brutalist web design rejects decorative elements in favor of bold typography, stark contrasts, and exposed structure.',
    keyTraits: [
      'Heavy use of monospace fonts',
      'Visible grid structures',
      'High contrast color schemes',
      'Minimal decoration',
      'Deliberate "ugly" aesthetics',
    ],
    principles: [
      {
        title: 'Material Honesty',
        description: 'Materials should appear as what they are. In web design, this means HTML elements look like their purpose—a button looks like a button, not a decorative element.',
      },
      {
        title: 'Anti-Decoration',
        description: 'Reject ornamentation. If an element doesn\'t serve a functional purpose, it doesn\'t belong. This creates a raw, authentic aesthetic.',
      },
      {
        title: 'Bold Typography',
        description: 'Large, heavy typefaces dominate the visual hierarchy. Text is meant to be read, not beautified.',
      },
    ],
    theory: `Brutalism in web design draws inspiration from Brutalist architecture—a movement that emerged in the 1950s and celebrated raw concrete, visible structure, and functional aesthetics. In the digital realm, web brutalism rejects the polished, user-friendly conventions of modern web design.

The movement challenges the assumption that websites must be "pretty" or follow established UX patterns. Instead, it embraces what might be considered "ugly" or unconventional: stark contrasts, monospace fonts, visible HTML borders, and minimal styling.

This aesthetic isn't about laziness—it's a deliberate choice that often results in highly functional, fast-loading pages. By stripping away visual polish, brutalist sites put content and functionality front and center.`,
    visualExamples: [
      {
        title: 'Bloomberg Businessweek',
        description: 'Bold typography and unconventional layouts that prioritize content over decoration.',
      },
      {
        title: 'Craigslist',
        description: 'The ultimate in functional minimalism—no styling, pure utility.',
      },
      {
        title: 'Bloomberg',
        description: 'Dense information architecture with aggressive typography.',
      },
    ],
    codeSnippets: [
      {
        language: 'html',
        title: 'Brutalist Button',
        code: `<button class="brutalist-btn">
  SUBMIT FORM
</button>`,
        annotation: 'Simple, unstyled button with uppercase text.',
      },
      {
        language: 'css',
        title: 'Brutalist Button Styles',
        code: `.brutalist-btn {
  background: #000;
  color: #fff;
  border: 3px solid #000;
  padding: 12px 24px;
  font-family: 'Courier New', monospace;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 4px 4px 0 #000;
  transition: all 0.1s ease;
}

.brutalist-btn:hover {
  background: #fff;
  color: #000;
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 #000;
}

.brutalist-btn:active {
  transform: translate(4px, 4px);
  box-shadow: none;
}`,
        annotation: 'Heavy borders, offset shadows, and hover state changes.',
      },
    ],
    relatedMovements: ['neo-brutalism', 'minimalism'],
    playgroundPreset: {
      html: `<div class="brutalist-card">
  <h1 class="brutalist-title">BRUTALIST</h1>
  <p class="brutalist-text">Raw and unpolished design that embraces structure.</p>
  <button class="brutalist-btn">CLICK ME</button>
</div>`,
      css: `.brutalist-card {
  background: #f5f5f5;
  border: 4px solid #000;
  padding: 32px;
  max-width: 400px;
}

.brutalist-title {
  font-family: 'Courier New', monospace;
  font-size: 32px;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0 0 16px 0;
  border-bottom: 4px solid #000;
  padding-bottom: 8px;
}

.brutalist-text {
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 24px 0;
}

.brutalist-btn {
  background: #000;
  color: #fff;
  border: 3px solid #000;
  padding: 12px 24px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 4px 4px 0 #000;
}`,
      controls: [
        { name: 'Border Width', property: 'border-width', type: 'range', min: 1, max: 10, step: 1, default: 4, unit: 'px' },
        { name: 'Shadow Offset', property: 'shadow-offset', type: 'range', min: 0, max: 10, step: 1, default: 4, unit: 'px' },
        { name: 'Background', property: 'bg-color', type: 'color', default: '#f5f5f5' },
      ],
    },
    featured: true,
  },
  {
    slug: 'minimalism',
    name: 'Minimalism',
    era: '1960s-present',
    origin: 'Switzerland / Japan',
    accentColor: '#000000',
    description: 'The philosophy of "less is more." Minimalist design removes everything unnecessary, using whitespace as a primary design element and letting content breathe.',
    keyTraits: [
      'Extensive whitespace',
      'Limited color palette',
      'Clean typography',
      'Simple iconography',
      'Focus on content',
    ],
    principles: [
      {
        title: 'Less is More',
        description: 'Every element must earn its place. Remove everything that doesn\'t serve a purpose, and the remaining elements become more powerful.',
      },
      {
        title: 'Whitespace as Design',
        description: 'Empty space isn\'t waste—it\'s a crucial design element that guides the eye and creates visual breathing room.',
      },
      {
        title: 'Typography as Hero',
        description: 'With fewer visual elements, typography becomes the primary design tool. Size, weight, and spacing carry all the visual hierarchy.',
      },
    ],
    theory: `Minimalism as a design philosophy has roots in traditional Japanese aesthetics and Swiss design principles. In web design, it manifests as clean, uncluttered interfaces that prioritize content and functionality above all else.

The minimalist approach requires extreme discipline. Every pixel, every element, every interaction must justify its existence. This often results in designs that feel calm, sophisticated, and focused.

However, minimalism gone wrong can feel cold or inaccessible. The best minimalist designs balance reduction with warmth—using subtle textures, thoughtful typography, and considered micro-interactions to create human connection within restraint.`,
    visualExamples: [
      {
        title: 'Apple',
        description: 'Product photography and whitespace create a premium feel.',
      },
      {
        title: 'Muji',
        description: 'Japanese minimalism applied to e-commerce.',
      },
      {
        title: 'Medium',
        description: 'Content-first design that fades into the background.',
      },
    ],
    codeSnippets: [
      {
        language: 'html',
        title: 'Minimalist Card',
        code: `<article class="minimal-card">
  <h2 class="minimal-title">Essential</h2>
  <p class="minimal-desc">Design is not about decorating functional forms.</p>
</article>`,
      },
      {
        language: 'css',
        title: 'Minimalist Card Styles',
        code: `.minimal-card {
  max-width: 320px;
  padding: 64px 0;
}

.minimal-title {
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: -0.02em;
  margin: 0 0 16px 0;
  color: #1a1a1a;
}

.minimal-desc {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.7;
  color: #666;
  margin: 0;
}`,
      },
    ],
    relatedMovements: ['swiss-design', 'glassmorphism'],
    playgroundPreset: {
      html: `<article class="minimal-card">
  <span class="minimal-label">Philosophy</span>
  <h2 class="minimal-title">Less Is More</h2>
  <p class="minimal-desc">Every element must earn its place. Remove everything that doesn't serve a purpose.</p>
  <a href="#" class="minimal-link">Learn more</a>
</article>`,
      css: `.minimal-card {
  max-width: 400px;
  padding: 48px 0;
}

.minimal-label {
  display: block;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #888;
  margin-bottom: 16px;
}

.minimal-title {
  font-family: 'Inter', sans-serif;
  font-size: 36px;
  font-weight: 300;
  letter-spacing: -0.03em;
  margin: 0 0 20px 0;
  color: #000;
}

.minimal-desc {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  color: #666;
  margin: 0 0 32px 0;
}

.minimal-link {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  text-decoration: none;
  border-bottom: 1px solid #000;
  padding-bottom: 2px;
  transition: opacity 0.2s;
}

.minimal-link:hover {
  opacity: 0.6;
}`,
      controls: [
        { name: 'Spacing', property: 'padding', type: 'range', min: 16, max: 96, step: 8, default: 48, unit: 'px' },
        { name: 'Title Size', property: 'title-size', type: 'range', min: 24, max: 48, step: 2, default: 36, unit: 'px' },
        { name: 'Text Color', property: 'text-color', type: 'color', default: '#666666' },
      ],
    },
  },
  {
    slug: 'swiss-design',
    name: 'Swiss Design',
    era: '1950s-1970s',
    origin: 'Switzerland',
    accentColor: '#D62828',
    description: 'Also known as the International Typographic Style. Swiss Design emphasizes mathematical grids, sans-serif typefaces, and objective photography. It established the foundation for modern graphic and web design.',
    keyTraits: [
      'Grid-based layouts',
      'Sans-serif typography',
      'Asymmetric layouts',
      'Mathematical precision',
      'Objective visual communication',
    ],
    principles: [
      {
        title: 'The Grid System',
        description: 'Design based on a modular grid creates visual harmony and makes information easier to digest. The grid is visible in the structure even when not explicitly shown.',
      },
      {
        title: 'Typography as Structure',
        description: 'Type isn\'t just for reading—it creates visual hierarchy, rhythm, and structure. Helvetica and Akzidenz-Grotesk were the canonical choices.',
      },
      {
        title: 'Objectivity',
        description: 'Design should communicate objectively without subjective interpretation. Photography over illustration, clarity over decoration.',
      },
    ],
    theory: `The Swiss International Typographic Style emerged in the 1950s from Switzerland, particularly Zurich and Basel. It revolutionized graphic design by establishing systematic approaches to visual communication.

Key figures like Josef Müller-Brockmann developed grid systems that created mathematical precision in layout. This approach translated perfectly to web design, where the CSS grid and flexbox are direct descendants of these principles.

Swiss Design rejected decoration in favor of clear, functional communication. Every element serves a purpose, and the overall composition creates visual hierarchy through size, weight, and placement rather than color or ornamentation.`,
    visualExamples: [
      {
        title: 'IBM Design',
        description: 'Paul Rand\'s influence on corporate identity follows Swiss principles.',
      },
      {
        title: 'The New York Times',
        description: 'Grid-based news layout with clear typographic hierarchy.',
      },
      {
        title: 'Swiss Style Graphic Design',
        description: 'Historical examples from the movement\'s peak.',
      },
    ],
    codeSnippets: [
      {
        language: 'css',
        title: 'Swiss Grid System',
        code: `.swiss-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.swiss-column {
  grid-column: span 4;
  border-top: 2px solid #000;
  padding-top: 16px;
}`,
      },
    ],
    relatedMovements: ['minimalism', 'bauhaus'],
    playgroundPreset: {
      html: `<div class="swiss-container">
  <header class="swiss-header">
    <span class="swiss-label">01</span>
    <h1 class="swiss-title">Swiss Design</h1>
  </header>
  <div class="swiss-grid">
    <div class="swiss-column">
      <h2 class="swiss-col-title">Grid</h2>
      <p class="swiss-col-text">Mathematical precision in every layout decision.</p>
    </div>
    <div class="swiss-column">
      <h2 class="swiss-col-title">Type</h2>
      <p class="swiss-col-text">Helvetica is not just a font—it's a philosophy.</p>
    </div>
    <div class="swiss-column">
      <h2 class="swiss-col-title">Objectivity</h2>
      <p class="swiss-col-text">Design serves communication, not decoration.</p>
    </div>
  </div>
</div>`,
      css: `.swiss-container {
  max-width: 800px;
  padding: 48px 24px;
}

.swiss-header {
  display: flex;
  align-items: baseline;
  gap: 24px;
  margin-bottom: 48px;
  border-bottom: 2px solid #000;
  padding-bottom: 24px;
}

.swiss-label {
  font-family: 'Helvetica', sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: #D62828;
}

.swiss-title {
  font-family: 'Helvetica', sans-serif;
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
}

.swiss-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.swiss-column {
  border-top: 2px solid #000;
  padding-top: 16px;
}

.swiss-col-title {
  font-family: 'Helvetica', sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 12px 0;
}

.swiss-col-text {
  font-family: 'Helvetica', sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #333;
  margin: 0;
}`,
      controls: [
        { name: 'Columns', property: 'columns', type: 'select', default: 3, options: ['2', '3', '4'] },
        { name: 'Gap', property: 'gap', type: 'range', min: 8, max: 48, step: 4, default: 32, unit: 'px' },
        { name: 'Accent Color', property: 'accent', type: 'color', default: '#D62828' },
      ],
    },
  },
  {
    slug: 'bauhaus',
    name: 'Bauhaus',
    era: '1919-1933',
    origin: 'Germany',
    accentColor: '#F4D03F',
    description: 'Founded on the principle "form follows function." Bauhaus unified art, craft, and technology, producing a design movement that influenced everything from architecture to web design.',
    keyTraits: [
      'Primary colors',
      'Geometric shapes',
      'Form follows function',
      'Integration of craft and art',
      'Typography as design',
    ],
    principles: [
      {
        title: 'Form Follows Function',
        description: 'The shape of an object should relate to its purpose. Decorative elements that don\'t serve function are eliminated.',
      },
      {
        title: 'Primary Palette',
        description: 'Red, blue, yellow, black, and white. These primary colors create bold, unambiguous visual statements.',
      },
      {
        title: 'Unity of Art and Technology',
        description: 'Art isn\'t separate from production. The Bauhaus sought to unify artistic vision with industrial capability.',
      },
    ],
    theory: `The Bauhaus school, active in Germany from 1919 to 1933, was one of the most influential design movements in history. Founded by Walter Gropius, it sought to unite fine arts with crafts and industrial design.

Though the school was forced to close by the Nazis, its principles spread globally and continue to influence design today. The rejection of ornamentation, the embrace of geometric forms, and the marriage of form and function are all core to modern web design thinking.

The Bauhaus aesthetic—primary colors, basic geometric shapes, and clean lines—remains instantly recognizable and endlessly applicable to digital interfaces.`,
    visualExamples: [
      {
        title: 'Bauhaus Dessau',
        description: 'The original building that housed the movement.',
      },
      {
        title: 'Fagus Factory',
        description: 'Gropius\'s industrial design masterpiece.',
      },
      {
        title: 'Herbert Bayer Typography',
        description: 'Innovative approaches to typographic design.',
      },
    ],
    codeSnippets: [
      {
        language: 'css',
        title: 'Bauhaus Geometric Composition',
        code: `.bauhaus-composition {
  position: relative;
  width: 300px;
  height: 300px;
}

.bauhaus-circle {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #F4D03F;
}

.bauhaus-square {
  position: absolute;
  width: 100px;
  height: 100px;
  background: #D62828;
}

.bauhaus-triangle {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 86px solid #0055AA;
}`,
      },
    ],
    relatedMovements: ['swiss-design', 'minimalism'],
    playgroundPreset: {
      html: `<div class="bauhaus-container">
  <div class="bauhaus-composition">
    <div class="bauhaus-circle"></div>
    <div class="bauhaus-square"></div>
    <div class="bauhaus-triangle"></div>
  </div>
  <div class="bauhaus-text">
    <h2 class="bauhaus-title">BAUHAUS</h2>
    <p class="bauhaus-subtitle">Art and Technology</p>
  </div>
</div>`,
      css: `.bauhaus-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 48px;
}

.bauhaus-composition {
  position: relative;
  width: 200px;
  height: 200px;
}

.bauhaus-circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #F4D03F;
}

.bauhaus-square {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80px;
  height: 80px;
  background: #D62828;
}

.bauhaus-triangle {
  position: absolute;
  bottom: 0;
  left: 20px;
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 70px solid #0055AA;
}

.bauhaus-text {
  text-align: center;
}

.bauhaus-title {
  font-family: 'Helvetica', sans-serif;
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 8px 0;
  letter-spacing: 0.2em;
}

.bauhaus-subtitle {
  font-family: 'Helvetica', sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: #666;
}`,
      controls: [
        { name: 'Circle Size', property: 'circle-size', type: 'range', min: 60, max: 160, step: 10, default: 120, unit: 'px' },
        { name: 'Yellow', property: 'yellow', type: 'color', default: '#F4D03F' },
        { name: 'Red', property: 'red', type: 'color', default: '#D62828' },
        { name: 'Blue', property: 'blue', type: 'color', default: '#0055AA' },
      ],
    },
  },
  {
    slug: 'art-deco',
    name: 'Art Deco',
    era: '1920s-1940s',
    origin: 'France',
    accentColor: '#C9A227',
    description: 'Luxury, glamour, and sophistication. Art Deco celebrates geometric elegance with symmetrical patterns, rich colors, and decorative motifs inspired by ancient cultures.',
    keyTraits: [
      'Geometric symmetry',
      'Gold and metallic accents',
      'Bold lines and borders',
      'Rich color palettes',
      'Decorative flourishes',
    ],
    principles: [
      {
        title: 'Luxurious Materials',
        description: 'Even in digital form, Art Deco conveys luxury through gold accents, rich gradients, and premium visual cues.',
      },
      {
        title: 'Geometric Decoration',
        description: 'Sunbursts, chevrons, zigzags, and fan shapes create ornate but structured decorative elements.',
      },
      {
        title: 'Symmetry and Balance',
        description: 'Layouts emphasize centered, symmetrical compositions that feel grand and formal.',
      },
    ],
    theory: `Art Deco emerged in France before World War I and reached its peak in the 1920s and 1930s. It represented luxury, glamour, and sophistication during an era of economic prosperity and technological advancement.

The movement drew inspiration from a variety of sources: ancient Egypt, African tribal art, Cubism, and Futurism. The result was a distinctive visual language characterized by bold geometric forms, rich colors, and lavish ornamentation.

In web design, Art Deco translates to luxurious color schemes (particularly gold and black), decorative borders, geometric patterns, and a sense of opulence. It\'s often used for high-end brands, entertainment venues, and creative portfolios.`,
    visualExamples: [
      {
        title: 'Chrysler Building',
        description: 'The iconic crown exemplifies Art Deco architecture.',
      },
      {
        title: 'Paramount Pictures',
        description: 'Classic Hollywood logo design.',
      },
      {
        title: 'The Great Gatsby Posters',
        description: 'Period advertising with characteristic motifs.',
      },
    ],
    codeSnippets: [
      {
        language: 'css',
        title: 'Art Deco Border',
        code: `.art-deco-border {
  border: 2px solid #C9A227;
  position: relative;
}

.art-deco-border::before,
.art-deco-border::after {
  content: '';
  position: absolute;
  background: #C9A227;
}

.art-deco-border::before {
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}`,
      },
    ],
    relatedMovements: ['memphis'],
    playgroundPreset: {
      html: `<div class="art-deco-container">
  <div class="art-deco-frame">
    <div class="art-deco-corner top-left"></div>
    <div class="art-deco-corner top-right"></div>
    <div class="art-deco-corner bottom-left"></div>
    <div class="art-deco-corner bottom-right"></div>
    <div class="art-deco-content">
      <div class="art-deco-divider"></div>
      <h1 class="art-deco-title">ART DECO</h1>
      <div class="art-deco-divider fancy"></div>
      <p class="art-deco-subtitle">The Golden Age of Design</p>
      <div class="art-deco-divider"></div>
    </div>
  </div>
</div>`,
      css: `.art-deco-container {
  padding: 48px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
}

.art-deco-frame {
  position: relative;
  border: 3px solid #C9A227;
  padding: 48px;
  background: #0a0a0a;
}

.art-deco-corner {
  position: absolute;
  width: 24px;
  height: 24px;
  border: 3px solid #C9A227;
}

.art-deco-corner.top-left {
  top: -3px;
  left: -3px;
  border-right: none;
  border-bottom: none;
}

.art-deco-corner.top-right {
  top: -3px;
  right: -3px;
  border-left: none;
  border-bottom: none;
}

.art-deco-corner.bottom-left {
  bottom: -3px;
  left: -3px;
  border-right: none;
  border-top: none;
}

.art-deco-corner.bottom-right {
  bottom: -3px;
  right: -3px;
  border-left: none;
  border-top: none;
}

.art-deco-content {
  text-align: center;
}

.art-deco-divider {
  height: 2px;
  background: linear-gradient(90deg, transparent, #C9A227, transparent);
  margin: 16px 0;
}

.art-deco-divider.fancy {
  height: 8px;
  background: linear-gradient(90deg, transparent 0%, #C9A227 20%, #C9A227 80%, transparent 100%);
  clip-path: polygon(0% 50%, 10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%);
}

.art-deco-title {
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  font-weight: 700;
  color: #C9A227;
  letter-spacing: 0.3em;
  margin: 24px 0;
}

.art-deco-subtitle {
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #888;
  letter-spacing: 0.2em;
  margin: 0;
}`,
      controls: [
        { name: 'Gold Color', property: 'gold', type: 'color', default: '#C9A227' },
        { name: 'Border Width', property: 'border-width', type: 'range', min: 1, max: 6, step: 1, default: 3, unit: 'px' },
        { name: 'Letter Spacing', property: 'letter-spacing', type: 'range', min: 0.1, max: 0.5, step: 0.05, default: 0.3, unit: 'em' },
      ],
    },
  },
  {
    slug: 'memphis',
    name: 'Memphis Design',
    era: '1980s',
    origin: 'Italy',
    accentColor: '#FF69B4',
    description: 'Playful, colorful, and deliberately anti-minimalist. Memphis Design embraces bold patterns, squiggly lines, and clashing colors as a celebration of post-modern creativity.',
    keyTraits: [
      'Bold color combinations',
      'Terrazzo patterns',
      'Squiggly lines and shapes',
      'Playful geometric forms',
      'Anti-minimalism',
    ],
    principles: [
      {
        title: 'More is More',
        description: 'In direct opposition to minimalism, Memphis celebrates excess, pattern, and decoration as creative expression.',
      },
      {
        title: 'Playful Irreverence',
        description: 'Design doesn\'t have to be serious. Memphis embraces whimsy, humor, and unexpected combinations.',
      },
      {
        title: 'Pattern as Texture',
        description: 'Repeating patterns—terrazzo, confetti, squiggles—create visual texture and energy.',
      },
    ],
    theory: `Memphis Design emerged in 1981 when Ettore Sottsass and a group of designers founded the Memphis Group in Milan. Their work deliberately challenged the modernist notion that "less is more."

The movement was short-lived—the group disbanded by 1988—but its influence persists. Memphis Design celebrated bright colors (often clashing), playful patterns, and shapes that seemed to reject all conventional design rules.

In contemporary web design, Memphis aesthetics appear in creative portfolios, children's applications, and anywhere that wants to convey playfulness and creative confidence.`,
    visualExamples: [
      {
        title: 'Memphis Group Furniture',
        description: 'The original Memphis objects that started it all.',
      },
      {
        title: 'Spotify Year in Review',
        description: 'Playful, colorful design for mass audiences.',
      },
      {
        title: 'Figma Config',
        description: 'Modern conference branding with Memphis influences.',
      },
    ],
    codeSnippets: [
      {
        language: 'css',
        title: 'Memphis Pattern Background',
        code: `.memphis-pattern {
  background-image: 
    radial-gradient(circle at 20% 30%, #FF69B4 3px, transparent 3px),
    radial-gradient(circle at 80% 70%, #00D4FF 4px, transparent 4px),
    radial-gradient(circle at 50% 50%, #FFE135 3px, transparent 3px),
    linear-gradient(45deg, #FF6B35 25%, transparent 25%);
  background-size: 100px 100px;
}`,
      },
    ],
    relatedMovements: ['neo-brutalism', 'art-deco'],
    playgroundPreset: {
      html: `<div class="memphis-container">
  <div class="memphis-shapes">
    <div class="memphis-circle"></div>
    <div class="memphis-square"></div>
    <div class="memphis-triangle"></div>
    <div class="memphis-squiggle"></div>
  </div>
  <div class="memphis-card">
    <span class="memphis-label">Memphis</span>
    <h2 class="memphis-title">Design More!</h2>
    <p class="memphis-text">Less is a bore. Embrace the playful chaos of creative expression.</p>
  </div>
</div>`,
      css: `.memphis-container {
  position: relative;
  padding: 48px;
  background: #FFF5E6;
}

.memphis-shapes {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
}

.memphis-circle {
  position: absolute;
  top: 20px;
  right: 40px;
  width: 60px;
  height: 60px;
  background: #FF69B4;
  border-radius: 50%;
}

.memphis-square {
  position: absolute;
  bottom: 60px;
  left: 20px;
  width: 40px;
  height: 40px;
  background: #00D4FF;
}

.memphis-triangle {
  position: absolute;
  bottom: 40px;
  right: 80px;
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 43px solid #FFE135;
}

.memphis-squiggle {
  position: absolute;
  top: 60px;
  left: 60px;
  width: 80px;
  height: 40px;
  border: 4px solid #FF6B35;
  border-bottom: none;
  border-radius: 40px 40px 0 0;
}

.memphis-card {
  position: relative;
  background: white;
  padding: 32px;
  border: 3px solid #000;
  box-shadow: 6px 6px 0 #000;
}

.memphis-label {
  font-family: 'Fredoka', sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #FF69B4;
}

.memphis-title {
  font-family: 'Fredoka', sans-serif;
  font-size: 28px;
  font-weight: 700;
  margin: 8px 0 12px;
}

.memphis-text {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #333;
  margin: 0;
}`,
      controls: [
        { name: 'Pink', property: 'pink', type: 'color', default: '#FF69B4' },
        { name: 'Yellow', property: 'yellow', type: 'color', default: '#FFE135' },
        { name: 'Cyan', property: 'cyan', type: 'color', default: '#00D4FF' },
        { name: 'Orange', property: 'orange', type: 'color', default: '#FF6B35' },
      ],
    },
  },
  {
    slug: 'neo-brutalism',
    name: 'Neo-Brutalism',
    era: '2010s-present',
    origin: 'Global',
    accentColor: '#7C3AED',
    description: 'A modern revival of Brutalist aesthetics with a friendlier, more playful approach. Neo-Brutalism maintains the raw structure while adding bold colors and accessibility-focused design.',
    keyTraits: [
      'Thick black borders',
      'Bright, saturated colors',
      'Hard offset shadows',
      'Rounded corners',
      'Playful yet raw',
    ],
    principles: [
      {
        title: 'Accessible Boldness',
        description: 'Neo-Brutalism maintains high contrast ratios for accessibility while embracing bold, saturated colors.',
      },
      {
        title: 'Structure as Style',
        description: 'Borders and shadows define structure rather than hiding it. The skeleton of the UI is the aesthetic.',
      },
      {
        title: 'Playful Brutality',
        description: 'Unlike its predecessor, Neo-Brutalism isn\'t anti-design—it\'s a deliberate, crafted aesthetic with personality.',
      },
    ],
    theory: `Neo-Brutalism emerged in the mid-2010s as designers began to rebel against the soft, rounded, gradient-heavy aesthetic that dominated web design. It takes the structural honesty of original Brutalism and adds contemporary touches.

Key characteristics include thick black borders (usually 2-4px), solid color backgrounds instead of gradients, hard drop shadows, and a general sense of "rawness" that feels both retro and fresh. The movement embraces accessibility, often maintaining excellent color contrast.

Neo-Brutalist sites feel confident and distinctive. They don\'t apologize for their visual choices—they state them boldly, creating memorable experiences that stand out in a sea of minimal, forgettable designs.`,
    visualExamples: [
      {
        title: 'Linear',
        description: 'Premium software with Neo-Brutalist UI elements.',
      },
      {
        title: 'Kickstarter',
        description: 'Major platform embracing bold borders and colors.',
      },
      {
        title: 'Gymshark',
        description: 'Bold, energetic e-commerce design.',
      },
    ],
    codeSnippets: [
      {
        language: 'css',
        title: 'Neo-Brutalist Button',
        code: `.neo-btn {
  background: #7C3AED;
  color: #fff;
  border: 3px solid #000;
  border-radius: 12px;
  padding: 16px 32px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 6px 6px 0 #000;
  transition: all 0.15s ease;
}

.neo-btn:hover {
  transform: translate(-2px, -2px);
  box-shadow: 8px 8px 0 #000;
}

.neo-btn:active {
  transform: translate(2px, 2px);
  box-shadow: 4px 4px 0 #000;
}`,
      },
    ],
    relatedMovements: ['brutalism', 'memphis'],
    playgroundPreset: {
      html: `<div class="neo-container">
  <div class="neo-card">
    <span class="neo-badge">New</span>
    <h2 class="neo-title">Neo-Brutalism</h2>
    <p class="neo-text">Bold structure meets playful design. Raw aesthetics with a modern twist.</p>
    <div class="neo-buttons">
      <button class="neo-btn primary">Get Started</button>
      <button class="neo-btn secondary">Learn More</button>
    </div>
  </div>
</div>`,
      css: `.neo-container {
  padding: 48px;
  background: #F5F5F5;
}

.neo-card {
  background: #fff;
  border: 3px solid #000;
  border-radius: 16px;
  padding: 32px;
  max-width: 400px;
  box-shadow: 8px 8px 0 #000;
}

.neo-badge {
  display: inline-block;
  background: #7C3AED;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 20px;
  border: 2px solid #000;
}

.neo-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 28px;
  font-weight: 700;
  margin: 16px 0 12px;
}

.neo-text {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 1.6;
  color: #444;
  margin: 0 0 24px;
}

.neo-buttons {
  display: flex;
  gap: 12px;
}

.neo-btn {
  border: 3px solid #000;
  border-radius: 12px;
  padding: 14px 28px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}

.neo-btn.primary {
  background: #7C3AED;
  color: #fff;
  box-shadow: 4px 4px 0 #000;
}

.neo-btn.primary:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 #000;
}

.neo-btn.secondary {
  background: #fff;
  color: #000;
  box-shadow: 4px 4px 0 #000;
}

.neo-btn.secondary:hover {
  background: #000;
  color: #fff;
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 #000;
}`,
      controls: [
        { name: 'Primary Color', property: 'primary', type: 'color', default: '#7C3AED' },
        { name: 'Border Width', property: 'border-width', type: 'range', min: 2, max: 6, step: 1, default: 3, unit: 'px' },
        { name: 'Shadow Offset', property: 'shadow', type: 'range', min: 4, max: 12, step: 2, default: 8, unit: 'px' },
      ],
    },
    featured: true,
  },
  {
    slug: 'glassmorphism',
    name: 'Glassmorphism',
    era: '2010s-present',
    origin: 'Digital Native',
    accentColor: '#22D3EE',
    description: 'Frosted glass effects that blur backgrounds and create depth. Glassmorphism uses transparency, blur, and subtle borders to create layered, ethereal interfaces.',
    keyTraits: [
      'Backdrop blur effects',
      'Semi-transparent surfaces',
      'Soft color overlays',
      'Subtle white borders',
      'Depth through layering',
    ],
    principles: [
      {
        title: 'Depth Through Blur',
        description: 'Background blur creates the illusion of depth without literal 3D. Elements appear to float at different distances.',
      },
      {
        title: 'Transparency as Texture',
        description: 'Opacity becomes a design tool. Semi-transparent surfaces reveal gradients and patterns beneath.',
      },
      {
        title: 'Layered Composition',
        description: 'Multiple translucent layers create visual complexity and hierarchy without solid dividers.',
      },
    ],
    theory: `Glassmorphism emerged as a major UI trend around 2013-2014, coinciding with the release of iOS 7 and Windows 10, which both embraced translucent, layered interfaces. The aesthetic has remained popular through the late 2010s and 2020s.

The key technical ingredient is backdrop-filter with blur, which applies CSS filters to content behind an element. Combined with semi-transparent backgrounds (often white or colored with low opacity) and subtle borders, this creates the characteristic frosted glass effect.

Glassmorphism works best with colorful or complex backgrounds that can be blurred. It creates a sense of depth and sophistication, though accessibility concerns arise when text contrast is insufficient.`,
    visualExamples: [
      {
        title: 'iOS Control Center',
        description: 'Apple\'s implementation of translucent overlays.',
      },
      {
        title: 'Windows 10 Start Menu',
        description: 'Microsoft\'s Fluent Design system incorporates glass effects.',
      },
      {
        title: 'Dribbble Shots',
        description: 'Numerous designer showcases feature glass UI elements.',
      },
    ],
    codeSnippets: [
      {
        language: 'css',
        title: 'Glass Card',
        code: `.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 24px;
}`,
      },
    ],
    relatedMovements: ['minimalism'],
    playgroundPreset: {
      html: `<div class="glass-container">
  <div class="glass-card large">
    <h2 class="glass-title">Glassmorphism</h2>
    <p class="glass-text">Frosted glass effects create depth and visual interest in modern interfaces.</p>
  </div>
  <div class="glass-card">
    <span class="glass-icon">✨</span>
    <h3 class="glass-subtitle">Translucent</h3>
  </div>
  <div class="glass-card">
    <span class="glass-icon">🎨</span>
    <h3 class="glass-subtitle">Layered</h3>
  </div>
</div>`,
      css: `.glass-container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 16px;
  padding: 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  border-radius: 24px;
}

.glass-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 24px;
  color: #fff;
}

.glass-card.large {
  grid-row: span 2;
}

.glass-title {
  font-family: 'Inter', sans-serif;
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 12px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.glass-text {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
}

.glass-icon {
  font-size: 24px;
  display: block;
  margin-bottom: 8px;
}

.glass-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}`,
      controls: [
        { name: 'Blur Amount', property: 'blur', type: 'range', min: 5, max: 40, step: 5, default: 20, unit: 'px' },
        { name: 'Opacity', property: 'opacity', type: 'range', min: 0.05, max: 0.4, step: 0.05, default: 0.15, unit: '' },
        { name: 'Border Opacity', property: 'border-opacity', type: 'range', min: 0.1, max: 0.6, step: 0.1, default: 0.3, unit: '' },
      ],
    },
  },
  {
    slug: 'cyberpunk',
    name: 'Cyberpunk',
    era: '1980s-present',
    origin: 'Science Fiction / Japan',
    accentColor: '#FFE600',
    description: 'Neon-soaked digital aesthetics inspired by Blade Runner and Akira. Cyberpunk design embraces high contrast, glitch effects, and a dystopian futuristic vision.',
    keyTraits: [
      'Neon colors on dark backgrounds',
      'Glitch effects and distortions',
      'High contrast color schemes',
      'Futuristic typography',
      'Glowing edges and halos',
    ],
    principles: [
      {
        title: 'Neon on Dark',
        description: 'The contrast between bright neon and deep darkness creates visual drama. Colors must glow, literally or through careful use of shadows.',
      },
      {
        title: 'Glitch as Aesthetic',
        description: 'Digital errors and artifacts become design features. Distortion, scan lines, and chromatic aberration are intentional choices.',
      },
      {
        title: 'Dystopian Futurism',
        description: 'The aesthetic draws from a future that\'s neither utopian nor comfortable. It\'s neon and beautiful, but also gritty and dangerous.',
      },
    ],
    theory: `Cyberpunk design draws from a rich tradition of science fiction that imagines futures where technology is both beautiful and dangerous. The aesthetic emerged in the 1980s with films like Blade Runner and novels like Neuromancer, creating a visual language of neon lights, rain-slicked streets, and megacorporations.

In web design, cyberpunk manifests as dark interfaces punctuated by vivid neon accents. Think black backgrounds with bright cyan, magenta, and yellow glowing elements. Typography often has a digital, glitchy quality. The overall effect is futuristic but grounded in a gritty, lived-in world.

The cyberpunk aesthetic continues to influence game design, music visuals, and creative web experiences. It offers a counter-narrative to the clean, corporate design language that dominates much of the internet.`,
    visualExamples: [
      {
        title: 'Blade Runner (1982)',
        description: 'The original cyberpunk visual reference with its neon-soaked Los Angeles.',
      },
      {
        title: 'Akira',
        description: 'Japanese cyberpunk with explosive color and dynamic composition.',
      },
      {
        title: 'Cyberpunk 2077',
        description: 'Modern video game that embodies the aesthetic in interactive form.',
      },
    ],
    codeSnippets: [
      {
        language: 'css',
        title: 'Neon Glow Effect',
        code: `.neon-glow {
  color: #FFE600;
  text-shadow:
    0 0 5px #FFE600,
    0 0 10px #FFE600,
    0 0 20px #FFE600,
    0 0 40px #00FFFF;
}`,
      },
      {
        language: 'css',
        title: 'Glitch Effect',
        code: `.glitch {
n  position: relative;
n}
n
.glitch::before,
.glitch::after {
n  content: attr(data-text);
n  position: absolute;
n  top: 0;
n  left: 0;
n  width: 100%;
n  height: 100%;
n  background: #0D0D0D;
n}
n
.glitch::before {
n  left: 2px;
n  text-shadow: -2px 0 #FF00FF;
n  clip: rect(24px, 550px, 90px, 0);
n  animation: glitch-anim 2s infinite linear alternate-reverse;
n}`,
      },
    ],
    relatedMovements: ['retro-vaporwave', 'brutalism'],
    playgroundPreset: {
      html: `<div class="cyber-container">
  <h1 class="cyber-title" data-text="CYBERPUNK">CYBERPUNK</h1>
  <p class="cyber-text">Neon dreams in a digital wasteland</p>
  <button class="cyber-btn">INITIALIZE</button>
</div>`,
      css: `.cyber-container {
  padding: 48px;
  background: #0D0D0D;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.cyber-title {
  font-family: 'Courier New', monospace;
  font-size: 48px;
  font-weight: 900;
  color: #FFE600;
  text-shadow:
    0 0 5px #FFE600,
    0 0 10px #FFE600,
    0 0 20px #00FFFF,
    0 0 40px #00FFFF;
  letter-spacing: 0.1em;
}

.cyber-text {
  font-family: 'Courier New', monospace;
  font-size: 14px;
  color: #00FFFF;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.cyber-btn {
  background: transparent;
  color: #FF00FF;
  border: 2px solid #FF00FF;
  padding: 12px 32px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  box-shadow:
    0 0 10px #FF00FF,
    inset 0 0 10px rgba(255, 0, 255, 0.1);
  transition: all 0.3s ease;
}

.cyber-btn:hover {
  background: #FF00FF;
  color: #0D0D0D;
  box-shadow:
    0 0 20px #FF00FF,
    0 0 40px #FF00FF;
}`,
      controls: [
        { name: 'Neon Color', property: 'neon-color', type: 'color', default: '#FFE600' },
        { name: 'Glow Intensity', property: 'glow', type: 'range', min: 5, max: 40, step: 5, default: 20, unit: 'px' },
        { name: 'Background', property: 'bg-color', type: 'color', default: '#0D0D0D' },
      ],
    },
  },
  {
    slug: 'retro-vaporwave',
    name: 'Retro Vaporwave',
    era: '2010s-present',
    origin: 'Internet Culture',
    accentColor: '#FF71CE',
    description: 'Nostalgic 80s/90s aesthetics with sunset gradients, palm trees, and grids stretching to infinity. Vaporwave is the sound of a future that never was.',
    keyTraits: [
      'Sunset gradient color palettes',
      'Retro 80s/90s computer aesthetics',
      'Infinite grid perspectives',
      'Japanese typography references',
      'Bronze statues and tropical elements',
    ],
    principles: [
      {
        title: 'Nostalgic Futurism',
        description: 'Vaporwave imagines a future that never existed—a 1980s vision of 2016 that mixes corporate mall aesthetics with digital dreams.',
      },
      {
        title: 'Aesthetic Sampling',
        description: 'Like music sampling, vaporwave design \"samples\" visual elements from commercial culture and recontextualizes them as art.',
      },
      {
        title: 'The Beautiful Decay',
        description: 'Perfect gradients coexist with glitched textures. The aesthetic embraces both digital perfection and digital decay.',
      },
    ],
    theory: `Vaporwave emerged from internet music communities in the early 2010s as a genre of electronic music that sampled and transformed smooth jazz, R&B, and corporate soundtrack sounds. The visual aesthetic followed naturally—late-night drives through neon-lit cities, palm trees against sunset gradients, and the haunting emptiness of abandoned shopping malls.

The visual language includes:
- Pink and cyan gradients reminiscent of synth-wave album covers
- Greek statues and Japanese calligraphy in unexpected combinations
- Wireframe grid landscapes that stretch to infinity
- Windows XP-style desktop aesthetics
- Glitched and corrupted imagery

Vaporwave design in web contexts often features these elements as decorative backgrounds, with content floating above sunset gradients and geometric patterns. The aesthetic is simultaneously nostalgic and futuristic, corporate yet subversive.`,
    visualExamples: [
      {
        title: 'Macintosh Plus',
        description: 'The aesthetic\'s founding visual reference with its famous broccoli portrait.',
      },
      {
        title: 'Saint Pepsi',
        description: 'Skiptracing album cover as quintessential vaporwave imagery.',
      },
      {
        title: 'Windows 95 Wallpapers',
        description: 'The sublime default backgrounds of Generation X\'s digital introduction.',
      },
    ],
    codeSnippets: [
      {
        language: 'css',
        title: 'Sunset Gradient',
        code: `.vaporwave-bg {
n  background: linear-gradient(
n    180deg,
n    #FF71CE 0%,
n    #01CDFE 50%,
n    #F5F5F5 100%
n  );
}`,
      },
      {
        language: 'css',
        title: 'Grid Perspective',
        code: `.vaporwave-grid {
n  background:
n    linear-gradient(#FF71CE 2px, transparent 2px),
n    linear-gradient(90deg, #FF71CE 2px, transparent 2px);
n  background-size: 50px 50px;
n  perspective: 500px;
n  transform: rotateX(60deg);
}`,
      },
    ],
    relatedMovements: ['cyberpunk', 'grunge-web1'],
    playgroundPreset: {
      html: `<div class="vapor-container">
  <h1 class="vapor-title">VAPORWAVE</h1>
  <p class="vapor-subtitle">a e s t h e t i c</p>
  <div class="vapor-grid"></div>
</div>`,
      css: `.vapor-container {
  padding: 48px;
  background: linear-gradient(
    180deg,
    #2D1B4E 0%,
    #FF71CE 50%,
    #01CDFE 100%
  );
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.vapor-title {
  font-family: 'Courier New', monospace;
  font-size: 48px;
  font-weight: 900;
  color: #fff;
  text-shadow:
    4px 4px 0 #FF71CE,
    -2px -2px 0 #01CDFE;
  letter-spacing: 0.2em;
  z-index: 1;
}

.vapor-subtitle {
  font-family: 'Courier New', monospace;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 0.5em;
  margin-top: 16px;
  z-index: 1;
}

.vapor-grid {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background:
    linear-gradient(90deg, rgba(255, 113, 206, 0.3) 1px, transparent 1px),
    linear-gradient(rgba(255, 113, 206, 0.3) 1px, transparent 1px);
  background-size: 40px 40px;
  transform: perspective(500px) rotateX(60deg);
  transform-origin: bottom;
}`,
      controls: [
        { name: 'Pink', property: 'pink', type: 'color', default: '#FF71CE' },
        { name: 'Cyan', property: 'cyan', type: 'color', default: '#01CDFE' },
        { name: 'Grid Opacity', property: 'grid-opacity', type: 'range', min: 0.1, max: 0.5, step: 0.1, default: 0.3, unit: '' },
      ],
    },
  },
  {
    slug: 'material-design',
    name: 'Material Design',
    era: '2014-present',
    origin: 'Google',
    accentColor: '#4285F4',
    description: 'Google\'s design language built on tactile surfaces, shadows, and motion. Material Design brings the physical world into digital interfaces with elevation and light.',
    keyTraits: [
      'Elevation through shadows',
      'Material surfaces with depth',
      'Motion as feedback',
      'Google color palette',
      'Floating Action Buttons (FAB)',
    ],
    principles: [
      {
        title: 'Material as Metaphor',
        description: 'Digital surfaces mimic physical materials with distinct textures and shadows. Surfaces can move, combine, and separate like physical paper.',
      },
      {
        title: 'Bold and Graphic',
        description: 'Typography is big and bold. Colors are from a defined palette. The design language is distinctive and recognizable at a glance.',
      },
      {
        title: 'Motion Provides Meaning',
        description: 'Animations aren\'t decorative—they communicate state changes and spatial relationships. Motion follows physical laws.',
      },
    ],
    theory: `Material Design was introduced by Google in 2014 at their I/O conference, representing an evolution of Google's visual language. The design system was created by Google Design Team and quickly became one of the most influential design systems of the decade.

The key innovation was treating UI elements as physical materials:
- Cards are sheets of paper that can float above surfaces
- Shadows indicate elevation and hierarchy
- Touch ripples provide feedback
- Surfaces can contain other surfaces

Material Design also introduced:
- A defined color system with primary, secondary, and accent colors
- Roboto as the default typeface
- Elevation values that create depth hierarchy
- The Floating Action Button (FAB) as a primary action pattern

The system was designed for cross-platform use, from Android to web to desktop, ensuring consistency across all Google products.`,
    visualExamples: [
      {
        title: 'Google Calendar',
        description: 'Cards and surfaces with clear elevation hierarchy.',
      },
      {
        title: 'Google Photos',
        description: 'Material Design in action with floating cards and FAB.',
      },
      {
        title: 'Material Design Guidelines',
        description: 'The comprehensive documentation of the system itself.',
      },
    ],
    codeSnippets: [
      {
        language: 'css',
        title: 'Material Elevation',
        code: `.material-card {
n  background: white;
n  border-radius: 8px;
n  box-shadow:
n    0 2px 4px rgba(0,0,0,0.1),
n    0 4px 8px rgba(0,0,0,0.1),
n    0 8px 16px rgba(0,0,0,0.1);
n  padding: 24px;
}

.material-elevated {
n  box-shadow:
n    0 4px 8px rgba(0,0,0,0.15),
n    0 8px 16px rgba(0,0,0,0.15),
n    0 16px 32px rgba(0,0,0,0.1);
}`,
      },
    ],
    relatedMovements: ['glassmorphism', 'neumorphism'],
    playgroundPreset: {
      html: `<div class="material-container">
  <div class="material-card">
    <h2 class="material-title">Material Design</h2>
    <p class="material-text">Surfaces with depth and shadows.</p>
  </div>
  <button class="material-fab">+</button>
</div>`,
      css: `.material-container {
  padding: 48px;
  background: #FAFAFA;
  min-height: 400px;
  position: relative;
}

.material-card {
  background: white;
  border-radius: 8px;
  padding: 24px;
  max-width: 400px;
  box-shadow:
    0 2px 4px rgba(0,0,0,0.1),
    0 4px 8px rgba(0,0,0,0.1);
}

.material-title {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #202124;
  margin: 0 0 8px 0;
}

.material-text {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #5F6368;
  margin: 0;
}

.material-fab {
  position: absolute;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background: #4285F4;
  color: white;
  border: none;
  font-size: 24px;
  box-shadow:
    0 4px 8px rgba(66, 133, 244, 0.4),
    0 8px 16px rgba(66, 133, 244, 0.2);
  cursor: pointer;
  transition: box-shadow 0.3s ease;
}

.material-fab:hover {
  box-shadow:
    0 6px 12px rgba(66, 133, 244, 0.5),
    0 12px 24px rgba(66, 133, 244, 0.3);
}`,
      controls: [
        { name: 'Primary Color', property: 'primary', type: 'color', default: '#4285F4' },
        { name: 'Elevation', property: 'elevation', type: 'range', min: 1, max: 4, step: 1, default: 2, unit: '' },
        { name: 'Background', property: 'bg-color', type: 'color', default: '#FAFAFA' },
      ],
    },
  },
  {
    slug: 'organic-fluid',
    name: 'Organic Fluid',
    era: '2020s-present',
    origin: 'Digital Native',
    accentColor: '#A78BFA',
    description: 'Soft, flowing shapes with blobby forms and gentle curves. Organic design breaks away from rigid geometry to create approachable, human interfaces.',
    keyTraits: [
      'Blobby, irregular shapes',
      'Large border-radius values',
      'Pastel color palettes',
      'Soft gradients',
      'Natural, flowing forms',
    ],
    principles: [
      {
        title: 'Away from Rigidity',
        description: 'Organic design rejects the strict rectangles and sharp corners of conventional design in favor of shapes that feel more natural and human.',
      },
      {
        title: 'Approachable and Friendly',
        description: 'The soft forms and pastel colors create an immediately warm and inviting aesthetic that feels approachable.',
      },
      {
        title: 'Fluidity as Concept',
        description: 'Shapes can flow into each other, overlap, and blend. The design feels alive rather than static.',
      },
    ],
    theory: `Organic design emerged as a counter-movement to the sharp, geometric aesthetics that dominated UI design in the late 2010s. Where flat design and Material Design emphasized clean edges and clear hierarchy, organic design introduces softness and irregularity.

The blobby shapes characteristic of organic design are often created using:
- Very large border-radius values
- SVG paths with irregular curves
- CSS clip-path with complex shapes
- Animated morphing between shapes

Color palettes tend toward soft pastels:
- Lavender and violet tones
- Peach and coral accents
- Mint and seafoam greens
- Soft yellows and creams

The aesthetic has been particularly popular in:
- Children and family-oriented apps
- Wellness and meditation products
- Creative and artistic platforms
- Fashion and lifestyle brands`,
    visualExamples: [
      {
        title: 'Apple Music Replay',
        description: 'Flowing gradients and organic shapes in playlists.',
      },
      {
        title: 'Notion',
        description: 'Soft edges and approachable design language.',
      },
      {
        title: 'Figma Components',
        description: 'Modern tools embracing organic aesthetics.',
      },
    ],
    codeSnippets: [
      {
        language: 'css',
        title: 'Blobby Shape',
        code: `.blobby {
n  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
n  animation: morph 8s ease-in-out infinite;
}

@keyframes morph {
n  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
n  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
}`,
      },
    ],
    relatedMovements: ['glassmorphism', 'neumorphism'],
    playgroundPreset: {
      html: `<div class="organic-container">
  <div class="blobby-shape"></div>
  <div class="blobby-shape secondary"></div>
  <h2 class="organic-title">Organic</h2>
</div>`,
      css: `.organic-container {
  padding: 48px;
  background: linear-gradient(135deg, #FDF2F8 0%, #FAF5FF 100%);
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.blobby-shape {
  position: absolute;
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #A78BFA 0%, #F472B6 100%);
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  opacity: 0.6;
  animation: float 6s ease-in-out infinite;
}

.blobby-shape.secondary {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, #34D399 0%, #22D3EE 100%);
  animation-delay: -3s;
  opacity: 0.4;
}

.organic-title {
  font-family: 'Inter', sans-serif;
  font-size: 48px;
  font-weight: 300;
  color: #7C3AED;
  z-index: 1;
  margin: 0;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}`,
      controls: [
        { name: 'Primary Color', property: 'primary', type: 'color', default: '#A78BFA' },
        { name: 'Secondary Color', property: 'secondary', type: 'color', default: '#F472B6' },
        { name: 'Animation Speed', property: 'speed', type: 'range', min: 2, max: 12, step: 1, default: 6, unit: 's' },
      ],
    },
  },
  {
    slug: 'typographic',
    name: 'Typographic',
    era: '1990s-present',
    origin: 'Print Design / Switzerland',
    accentColor: '#1A1A1A',
    description: 'When letters become the design. Typographic design makes typography the primary visual element, creating striking compositions through type alone.',
    keyTraits: [
      'Massive headline typography',
      'Display and serif fonts',
      'Typography as imagery',
      'Minimal other elements',
      'High contrast in scale',
    ],
    principles: [
      {
        title: 'Type as Hero',
        description: 'Typography isn\'t just for reading—it IS the visual. Large type creates immediate impact and emotional response.',
      },
      {
        title: 'Scale Creates Hierarchy',
        description: 'Extreme differences in font size between headlines and body text create clear hierarchy without additional decoration.',
      },
      {
        title: 'Space is Elemental',
        description: 'The space around and within letters is as important as the letters themselves. Negative space becomes a design tool.',
      },
    ],
    theory: `Typographic design has roots in the Swiss International Style, where typography was recognized as the primary carrier of visual hierarchy. But Typographic design pushes this further, making letters themselves the primary visual element.

The approach is simple but demanding:
- Choose spectacular display fonts or use standard fonts spectacularly
- Scale typography to fill space dramatically
- Let letters break grids, overlap, and create composition
- Use typography to evoke emotion before words are read

Key techniques include:
- Kerning and tracking adjustments for visual effect
- Using Google Fonts' display options
- Layering multiple text elements
- Angling and rotating typography
- Mixing font weights dramatically

The aesthetic works best for:
- Brand identities
- Editorial headlines
- Posters and signage
- Portfolio presentations`,
    visualExamples: [
      {
        title: 'Bloomberg Businessweek',
        description: 'Typography-dominant editorial design.',
      },
      {
        title: 'The New York Times',
        description: 'Dramatic typographic scale in headlines.',
      },
      {
        title: 'Nike Campaigns',
        description: 'Massive typography as imagery.',
      },
    ],
    codeSnippets: [
      {
        language: 'css',
        title: 'Massive Display Type',
        code: `.display-type {
n  font-family: 'Playfair Display', serif;
n  font-size: clamp(4rem, 15vw, 12rem);
n  font-weight: 900;
n  line-height: 0.9;
n  letter-spacing: -0.03em;
}`,
      },
    ],
    relatedMovements: ['swiss-design', 'minimalism', 'brutalism'],
    playgroundPreset: {
      html: `<div class="typo-container">
  <h1 class="typo-display" style="font-family: 'Playfair Display', serif">TYPO</h1>
  <h1 class="typo-display accent" style="font-family: 'Inter', sans-serif">GRAPHIC</h1>
  <p class="typo-text">When letters become the design</p>
</div>`,
      css: `.typo-container {
  padding: 48px;
  background: #FAFAF8;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.typo-display {
  font-size: clamp(80px, 20vw, 200px);
  font-weight: 900;
  line-height: 0.85;
  margin: 0;
  color: #1a1a1a;
  letter-spacing: -0.05em;
}

.typo-display.accent {
  color: transparent;
  -webkit-text-stroke: 3px #1a1a1a;
}

.typo-text {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  margin-top: 24px;
}`,
      controls: [
        { name: 'Display Size', property: 'display-size', type: 'range', min: 60, max: 200, step: 10, default: 120, unit: 'px' },
        { name: 'Text Color', property: 'color', type: 'color', default: '#1a1a1a' },
        { name: 'Stroke Width', property: 'stroke', type: 'range', min: 1, max: 5, step: 1, default: 3, unit: 'px' },
      ],
    },
  },
  {
    slug: 'grunge-web1',
    name: 'Grunge Web 1.0',
    era: '1994-2005',
    origin: 'World Wide Web',
    accentColor: '#0000FF',
    description: 'The raw, unpolished aesthetics of early web design. Blue links, hit counters, under construction signs, and the honest ugliness of first-generation websites.',
    keyTraits: [
      'Blue underlined links',
      'Beveled 3D buttons',
      'Hit counters and guestbooks',
      'Animated GIFs',
      'Table-based layouts',
    ],
    principles: [
      {
        title: 'Function Over Form',
        description: 'Websites were built to share information, not impress. Every element served a purpose, even if it looked terrible.',
      },
      {
        title: 'No Pretension',
        description: 'Early web designers didn\'t know what they were doing, and it showed. This authenticity is now revered as honest.',
      },
      {
        title: 'Under Construction',
        description: 'Websites were perpetually unfinished, with the "Under Construction" banner acknowledging that nothing on the web was ever done.',
      },
    ],
    theory: `Before CSS was widely supported and before designers "discovered" the web, there was Web 1.0. This era of web design (roughly 1994-2005) was characterized by:

Visual Elements:
- The blue #0000FF underlined link that everyone recognized
- The beveled, 3D-effect button using border tricks
- Hit counters showing visitor numbers in digital LCD font
- Animated GIFs of construction signs, flames, and spinning globes
- "Best viewed in Netscape Navigator" badges
- Table-based layouts for structure
- The "Under Construction" banner

Cultural Context:
- HTML was for structure, not style
- Dreamweaver and FrontPage were the design tools
- GeoCities gave everyone a homepage
- Visitor counters were a point of pride
- Guestbooks allowed visitor interaction
- "Email me!" was the call-to-action

Today, Web 1.0 aesthetics are experiencing ironic appreciation. The ugliness is charming precisely because it was genuine—no one was trying to create an aesthetic movement.`,
    visualExamples: [
      {
        title: 'Craigslist',
        description: 'Pure functional Web 1.0 that never changed.',
      },
      {
        title: 'GeoCities Archives',
        description: 'The quintessential homepage aesthetic.',
      },
      {
        title: 'Early Amazon',
        description: 'How the e-commerce giant started.',
      },
    ],
    codeSnippets: [
      {
        language: 'css',
        title: '3D Beveled Button',
        code: `.web1-button {
n  background: #c0c0c0;
n  border: 4px solid #808080;
n  border-top-color: #ffffff;
n  border-left-color: #ffffff;
n  padding: 8px 16px;
n  font-weight: bold;
}`,
      },
      {
        language: 'css',
        title: 'Classic Blue Link',
        code: `.web1-link {
n  color: #0000ff;
n  text-decoration: underline;
n}
n
.web1-link:hover {
n  color: #ff0000;
}`,
      },
    ],
    relatedMovements: ['brutalism', 'retro-vaporwave'],
    playgroundPreset: {
      html: `<div class="web1-container">
  <div class="web1-header">WELCOME TO MY HOMEPAGE!!!</div>
  <nav class="web1-nav">
    <a href="#" class="web1-link">Home</a>
    <a href="#" class="web1-link">About Me</a>
    <a href="#" class="web1-link">Cool Links</a>
  </nav>
  <div class="web1-content">
    <p>Thanks for visiting my website!!!</p>
    <button class="web1-button">EMAIL ME!!!</button>
  </div>
  <div class="web1-counter">You are visitor: 000001</div>
</div>`,
      css: `.web1-container {
  padding: 24px;
  background: #ffffff;
  font-family: Georgia, serif;
  max-width: 600px;
}

.web1-header {
  background: #000080;
  color: #ffff00;
  padding: 12px;
  font-weight: bold;
  text-align: center;
  border: 3px outset #c0c0c0;
}

.web1-nav {
  background: #c0c0c0;
  padding: 8px;
  border: 3px outset #808080;
  border-top: none;
}

.web1-link {
  color: #0000ff;
  text-decoration: underline;
  margin-right: 16px;
}

.web1-link:hover {
  color: #ff0000;
}

.web1-content {
  padding: 24px;
  border: 3px outset #808080;
  border-top: none;
}

.web1-button {
  background: #c0c0c0;
  border: 4px solid;
  border-color: #ffffff #808080 #808080 #ffffff;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
}

.web1-counter {
  background: #000000;
  color: #00ff00;
  font-family: 'Courier New', monospace;
  padding: 8px;
  text-align: center;
  margin-top: 16px;
}`,
      controls: [
        { name: 'Link Color', property: 'link-color', type: 'color', default: '#0000FF' },
        { name: 'Background', property: 'bg-color', type: 'color', default: '#FFFFFF' },
        { name: 'Counter Color', property: 'counter-color', type: 'color', default: '#00FF00' },
      ],
    },
  },
  {
    slug: 'maximalism',
    name: 'Maximalism',
    era: '1981-present',
    origin: 'Italy / Global',
    accentColor: '#F472B6',
    description: 'More is more. Maximalism rejects minimalism\'s restraint in favor of bold colors, layered patterns, and unapologetically loud design.',
    keyTraits: [
      'Multiple mixed patterns',
      'Bold saturated colors',
      'Layered elements',
      'Ornate decoration',
      'Visual density',
    ],
    principles: [
      {
        title: 'More Is More',
        description: 'The minimalism mantra of "less is more" is rejected. More colors, more patterns, more elements create visual richness.',
      },
      {
        title: 'Layering Creates Depth',
        description: 'Multiple overlapping elements create visual complexity. Nothing is hidden—everything is revealed.',
      },
      {
        title: 'No Apologies',
        description: 'Maximalist design commits fully. There\'s no half-measured restraint or modest decoration. The aesthetic is loud and proud.',
      },
    ],
    theory: `Maximalism as a design movement has roots in the 1981 founding of the Memphis Group in Milan. Founded by Ettore Sottsass and others, the Memphis Group deliberately rejected the clean, minimal aesthetics that had dominated design since Bauhaus.

Their manifesto included:
- Bold primary colors mixed with pastels and metallics
- Geometric and organic shapes combined freely
- Patterns layered over patterns
- Decorated surfaces that rejected "good taste"
- Furniture that looked like it was designed by an excited child

In contemporary web design, maximalism appears as:
- Multiple gradient backgrounds
- Pattern overlays and textures
- Large, bold typography in varied styles
- Color palettes that clash intentionally
- Decorative elements everywhere

The aesthetic challenges designers to commit rather than hold back. In a world of minimal corporate design, maximalism stands out through its confident excess.`,
    visualExamples: [
      {
        title: 'Memphis Group Furniture',
        description: 'The original maximalist objects.',
      },
      {
        title: 'Spotify Year in Review',
        description: 'Colorful, pattern-heavy social features.',
      },
      {
        title: 'Figma Config',
        description: 'Conference branding embracing the aesthetic.',
      },
    ],
    codeSnippets: [
      {
        language: 'css',
        title: 'Pattern Overload',
        code: `.maximalist-bg {
n  background:
n    repeating-linear-gradient(
n      45deg,
n      #f472b6,
n      #f472b6 10px,
n      #fbbf24 10px,
n      #fbbf24 20px
n    ),
n    linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
}`,
      },
    ],
    relatedMovements: ['memphis', 'retro-vaporwave'],
    playgroundPreset: {
      html: `<div class="max-container">
  <h1 class="max-title">MORE</h1>
  <p class="max-subtitle">IS MORE</p>
  <div class="max-patterns">
    <span class="max-tag">CHAOS</span>
    <span class="max-tag">COLOR</span>
    <span class="max-tag">MORE</span>
  </div>
</div>`,
      css: `.max-container {
  padding: 48px;
  background:
    repeating-linear-gradient(
      45deg,
      rgba(244, 114, 182, 0.3),
      rgba(244, 114, 182, 0.3) 20px,
      rgba(251, 191, 36, 0.3) 20px,
      rgba(251, 191, 36, 0.3) 40px
    );
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 8px solid #1a1a1a;
}

.max-title {
  font-family: 'Inter', sans-serif;
  font-size: 80px;
  font-weight: 900;
  color: #f472b6;
  text-shadow:
    4px 4px 0 #fbbf24,
    8px 8px 0 #a855f7;
  margin: 0;
  letter-spacing: -0.02em;
}

.max-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 36px;
  font-weight: 300;
  color: #a855f7;
  margin: 0;
}

.max-patterns {
  display: flex;
  gap: 12px;
  margin-top: 32px;
}

.max-tag {
  background: linear-gradient(135deg, #f472b6 0%, #fbbf24 100%);
  color: #1a1a1a;
  padding: 8px 16px;
  font-weight: 700;
  font-size: 12px;
  border: 4px solid #1a1a1a;
  box-shadow: 4px 4px 0 #1a1a1a;
}`,
      controls: [
        { name: 'Primary Color', property: 'primary', type: 'color', default: '#F472B6' },
        { name: 'Secondary Color', property: 'secondary', type: 'color', default: '#FBBF24' },
        { name: 'Accent Color', property: 'accent', type: 'color', default: '#A855F7' },
      ],
    },
  },
  {
    slug: 'art-deco',
    name: 'Art Deco',
    era: '1920s-1940s',
    origin: 'France',
    accentColor: '#D4AF37',
    description: 'Geometric elegance and luxurious sophistication. Art Deco channels the golden age with gold accents, bold lines, and ornamental patterns.',
    keyTraits: [
      'Gold and metallic accents',
      'Geometric symmetry',
      'Bold lines and borders',
      'Sunburst and chevron patterns',
      'Luxurious color palette',
    ],
    principles: [
      {
        title: 'Luxury Through Simplicity',
        description: 'Art Deco achieves luxury not through excess but through bold, confident geometry. Gold lines and clean shapes convey sophistication.',
      },
      {
        title: 'Geometry as Ornament',
        description: 'Geometric shapes—triangles, circles, chevrons—create decorative patterns that feel both modern and timeless.',
      },
      {
        title: 'Symmetry Commands Attention',
        description: 'Centered, symmetrical layouts create formal grandeur. The composition itself conveys authority and elegance.',
      },
    ],
    theory: `Art Deco emerged in France in the 1920s, reaching its peak in the 1930s before World War II diminished its cultural dominance. The style represented luxury, glamour, and technological progress during an era of economic prosperity.

Key visual elements:
- Gold and metallic color accents
- Black and white contrast
- Sunburst and sunrise patterns
- Chevrons and angular geometry
- Stylized natural forms
- Geometric repetition

Famous Art Deco landmarks include:
- The Chrysler Building in New York
- The Paramount Pictures logo
- The Empire State Building
- Ocean liner interiors
- Hollywood film titles of the era

In web design, Art Deco aesthetics translate to:
- Gold gradients and accents
- Geometric border patterns
- Symmetrical layouts
- Bold black and white contrasts
- Ornamental dividers and flourishes`,
    visualExamples: [
      {
        title: 'Chrysler Building',
        description: 'The iconic crown with sunburst patterns.',
      },
      {
        title: 'Paramount Pictures',
        description: 'Classic studio logo design.',
      },
      {
        title: 'Gatsby-Era Posters',
        description: 'Period advertising and graphic design.',
      },
    ],
    codeSnippets: [
      {
        language: 'css',
        title: 'Art Deco Border',
        code: `.art-deco-frame {
n  border: 3px solid #D4AF37;
n  position: relative;
n}
n
.art-deco-corner {
n  position: absolute;
n  width: 20px;
n  height: 20px;
n  border: 3px solid #D4AF37;
n}`,
      },
    ],
    relatedMovements: ['memphis'],
    playgroundPreset: {
      html: `<div class="deco-container">
  <div class="deco-frame">
    <div class="deco-corner tl"></div>
    <div class="deco-corner tr"></div>
    <div class="deco-corner bl"></div>
    <div class="deco-corner br"></div>
    <h1 class="deco-title">ART DECO</h1>
    <div class="deco-divider"></div>
    <p class="deco-subtitle">The Golden Age</p>
  </div>
</div>`,
      css: `.deco-container {
  padding: 48px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.deco-frame {
  position: relative;
  border: 4px solid #D4AF37;
  padding: 48px 64px;
  text-align: center;
}

.deco-corner {
  position: absolute;
  width: 24px;
  height: 24px;
  border: 4px solid #D4AF37;
}

.deco-corner.tl { top: -4px; left: -4px; border-right: none; border-bottom: none; }
.deco-corner.tr { top: -4px; right: -4px; border-left: none; border-bottom: none; }
.deco-corner.bl { bottom: -4px; left: -4px; border-right: none; border-top: none; }
.deco-corner.br { bottom: -4px; right: -4px; border-left: none; border-top: none; }

.deco-title {
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  font-weight: 700;
  color: #D4AF37;
  letter-spacing: 0.3em;
  margin: 0;
}

.deco-divider {
  height: 4px;
  background: linear-gradient(90deg, transparent, #D4AF37, transparent);
  margin: 24px 0;
}

.deco-subtitle {
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #888;
  letter-spacing: 0.2em;
  margin: 0;
}`,
      controls: [
        { name: 'Gold Color', property: 'gold', type: 'color', default: '#D4AF37' },
        { name: 'Border Width', property: 'border', type: 'range', min: 2, max: 8, step: 1, default: 4, unit: 'px' },
        { name: 'Background', property: 'bg-color', type: 'color', default: '#1a1a1a' },
      ],
    },
  },
];

export function getMovementBySlug(slug: string): Movement | undefined {
  return movements.find((m) => m.slug === slug);
}

export function getFeaturedMovements(): Movement[] {
  return movements.filter((m) => m.featured);
}

export function getRelatedMovements(slug: string): Movement[] {
  const movement = getMovementBySlug(slug);
  if (!movement) return [];
  
  return movement.relatedMovements
    .map((relatedSlug) => getMovementBySlug(relatedSlug))
    .filter((m): m is Movement => m !== undefined);
}

export function getAllMovementSlugs(): string[] {
  return movements.map((m) => m.slug);
}
