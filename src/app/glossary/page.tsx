'use client';

const glossary = [
  { term: 'Visual Hierarchy', desc: 'The arrangement of elements in order of importance. Size, color, contrast, and positioning guide the eye through content in a deliberate sequence.' },
  { term: 'Grid System', desc: 'A structure of intersecting vertical and horizontal lines used to organize content. Creates rhythm, consistency, and alignment across layouts.' },
  { term: 'Typography Scale', desc: 'A predefined set of font sizes that relate mathematically to each other. Creates visual harmony and clear relationships between headings and body text.' },
  { term: 'Color Theory', desc: 'The study of how colors interact, complement, and contrast. Involves hue, saturation, value, and psychological impact.' },
  { term: 'White Space', desc: 'Empty space between elements. Not wasted space — it gives content room to breathe and helps establish visual groupings.' },
  { term: 'Contrast', desc: 'The difference in luminance or color that makes objects distinguishable. High contrast aids accessibility; low contrast creates subtle hierarchy.' },
  { term: 'Alignment', desc: 'Placing elements on a common axis. Creates invisible structure that makes layouts feel ordered and professional.' },
  { term: 'Proximity', desc: 'Items placed close together are perceived as related. The distance between elements communicates their relationship.' },
  { term: 'Repetition', desc: 'Consistent use of visual elements (colors, fonts, shapes) across a design. Creates cohesion and reinforces brand identity.' },
  { term: 'Balance', desc: 'The distribution of visual weight in a layout. Can be symmetrical (formal) or asymmetrical (dynamic).' },
  { term: 'Hierarchy', desc: 'See Visual Hierarchy — the most fundamental principle for guiding attention through design.' },
  { term: 'Gestalt Principles', desc: 'Psychological theory that humans naturally perceive patterns. Includes proximity, similarity, continuity, and closure.' },
  { term: 'Atomic Design', desc: 'A methodology for creating design systems: atoms → molecules → organisms → templates → pages. Each level builds on the previous.' },
  { term: 'Design Token', desc: 'A named value that stores design decisions (colors, spacing, fonts). Enables consistent theming and easier updates across a design system.' },
  { term: 'Component Library', desc: 'A collection of reusable UI components with consistent patterns. The building blocks of a design system.' },
  { term: 'Responsive Design', desc: 'Designing layouts that adapt to different screen sizes. Mobile-first approach is standard practice.' },
  { term: 'Accessibility', desc: 'Designing for users with disabilities. Includes color contrast, keyboard navigation, screen reader support, and more.' },
  { term: 'Brutalism', desc: 'Design style characterized by raw, blocky aesthetics. Heavy typography, bold colors, visible structure. Intentionally anti-design.' },
  { term: 'Minimalism', desc: 'Removing everything that doesn\'t serve a purpose. High whitespace, limited palette, restrained typography.' },
  { term: 'Glassmorphism', desc: 'UI style featuring frosted glass-like elements with blur, transparency, and subtle borders.' },
  { term: 'Neumorphism', desc: 'Soft UI with shadows that create depth without elevation. Elements appear to push out of or into the surface.' },
  { term: 'Cyberpunk', desc: 'Futuristic aesthetic inspired by sci-fi. Neon colors, glitch effects, dark backgrounds, high tech vibes.' },
  { term: 'Material Design', desc: 'Google\'s design language. Based on physical metaphors, with paper-like surfaces and meaningful motion.' },
];

export default function GlossaryPage() {
  return (
    <div className="min-h-screen bg-minimalist-offwhite">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-6xl font-black uppercase tracking-tighter text-minimalist-charcoal mb-4">Glossary</h1>
        <p className="text-xl text-minimalist-gray mb-16 max-w-xl">Essential design terms and concepts, from hierarchy to brutalism.</p>

        <div className="space-y-12">
          {glossary.map((item, i) => (
            <div key={i} className="border-l-4 border-swiss-red pl-8">
              <h2 className="text-2xl font-bold text-minimalist-charcoal mb-2">{item.term}</h2>
              <p className="text-minimalist-gray leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
