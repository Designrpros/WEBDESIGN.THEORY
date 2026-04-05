import { GlossaryTerm } from './types';

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'Alignment',
    definition: 'The arrangement of visual elements in a way that creates a clean, organized appearance. Proper alignment establishes visual connections between elements and creates a sense of order and structure.',
    relatedTerms: ['Grid System', 'Visual Hierarchy', 'Whitespace'],
    relatedMovements: ['swiss-design', 'minimalism'],
  },
  {
    term: 'Backdrop Filter',
    definition: 'A CSS property that applies graphical effects (such as blur, brightness, or color shift) to the area behind an element. Essential for creating glassmorphism effects.',
    relatedTerms: ['Glassmorphism', 'Blur Effect', 'Transparency'],
    relatedMovements: ['glassmorphism'],
  },
  {
    term: 'Brutalism',
    definition: 'A design approach characterized by raw, unpolished aesthetics, bold typography, and stark contrasts. In web design, it embraces visible structure and rejects decorative elements.',
    relatedTerms: ['Anti-Decoration', 'Material Honesty', 'Neo-Brutalism'],
    relatedMovements: ['brutalism', 'neo-brutalism'],
  },
  {
    term: 'Contrast',
    definition: 'The arrangement of opposite elements (light vs. dark, large vs. small) to create visual interest, establish hierarchy, and improve readability. High contrast is essential for accessibility.',
    relatedTerms: ['Visual Hierarchy', 'Accessibility', 'Color Theory'],
    relatedMovements: ['brutalism', 'neo-brutalism'],
  },
  {
    term: 'Design System',
    definition: 'A collection of reusable components, patterns, and guidelines that ensure consistency across a product. Includes colors, typography, spacing, and component behaviors.',
    relatedTerms: ['Atomic Design', 'Component Library', 'Style Guide'],
    relatedMovements: ['swiss-design', 'bauhaus'],
  },
  {
    term: 'Flexbox',
    definition: 'A CSS layout module that provides a more efficient way to lay out, align, and distribute space among items in a container, even when their sizes are unknown.',
    relatedTerms: ['CSS Grid', 'Layout', 'Box Model'],
    relatedMovements: ['swiss-design', 'minimalism'],
  },
  {
    term: 'Gestalt Principles',
    definition: 'A set of principles describing how humans naturally organize visual elements into groups or unified wholes. Key principles include proximity, similarity, continuity, and closure.',
    relatedTerms: ['Visual Perception', 'Grouping', 'Figure-Ground'],
  },
  {
    term: 'Glassmorphism',
    definition: 'A UI design trend characterized by translucent, frosted-glass effects achieved through backdrop blur and semi-transparent backgrounds. Creates depth and layering in interfaces.',
    relatedTerms: ['Backdrop Filter', 'Transparency', 'Depth'],
    relatedMovements: ['glassmorphism', 'minimalism'],
  },
  {
    term: 'Grid System',
    definition: 'A structure of intersecting vertical and horizontal lines used to organize content. Grids provide consistency, alignment, and rhythm in design layouts.',
    relatedTerms: ['Alignment', 'Modular Scale', 'Swiss Design'],
    relatedMovements: ['swiss-design', 'bauhaus'],
  },
  {
    term: 'Hierarchy',
    definition: 'The visual arrangement of elements to show their order of importance. Typography, size, color, and spacing all contribute to establishing clear hierarchy.',
    relatedTerms: ['Visual Hierarchy', 'Typographic Scale', 'Contrast'],
    relatedMovements: ['swiss-design', 'minimalism', 'bauhaus'],
  },
  {
    term: 'Iconography',
    definition: 'Visual symbols or icons used to communicate meaning or function. Effective iconography is simple, recognizable, and consistent in style.',
    relatedTerms: ['Visual Language', 'Symbol', 'UI Design'],
  },
  {
    term: 'Kerning',
    definition: 'The adjustment of space between individual letter pairs. Unlike tracking, which adjusts space uniformly across all characters, kerning addresses specific character combinations.',
    relatedTerms: ['Tracking', 'Typography', 'Letter Spacing'],
    relatedMovements: ['swiss-design', 'art-deco'],
  },
  {
    term: 'Material Design',
    definition: "Google's design language introduced in 2014, characterized by surfaces, shadows, and motion. It emphasizes tactile surfaces with realistic lighting and shadows.",
    relatedTerms: ['Design System', 'Flat Design', 'Elevation'],
  },
  {
    term: 'Modular Scale',
    definition: 'A series of type sizes based on a consistent ratio, creating harmonious proportions. Common ratios include the golden ratio (1.618) and musical intervals.',
    relatedTerms: ['Typographic Scale', 'Rhythm', 'Proportion'],
    relatedMovements: ['swiss-design', 'minimalism'],
  },
  {
    term: 'Neo-Brutalism',
    definition: 'A modern revival of brutalist aesthetics with a friendlier approach. Features thick black borders, bold colors, and hard offset shadows while maintaining accessibility.',
    relatedTerms: ['Brutalism', 'Structure', 'Bold Colors'],
    relatedMovements: ['neo-brutalism', 'brutalism', 'memphis'],
  },
  {
    term: 'Negative Space',
    definition: 'The empty or open space around and between subjects. Also known as white space, it\'s essential for creating balance, emphasis, and visual breathing room.',
    relatedTerms: ['Whitespace', 'Gestalt Principles', 'Balance'],
    relatedMovements: ['minimalism', 'swiss-design'],
  },
  {
    term: 'Pattern',
    definition: 'A decorative design composed of repeated elements. Patterns add visual texture and can range from simple geometric repetitions to complex illustrations.',
    relatedTerms: ['Texture', 'Repetition', 'Visual Interest'],
    relatedMovements: ['memphis', 'art-deco', 'bauhaus'],
  },
  {
    term: 'Proximity',
    definition: 'A Gestalt principle stating that objects close to each other are perceived as related. Used to create logical groupings and visual organization.',
    relatedTerms: ['Gestalt Principles', 'Grouping', 'Visual Hierarchy'],
  },
  {
    term: 'Responsive Design',
    definition: 'An approach to web design that makes sites adapt and respond to different screen sizes and devices. Uses fluid grids, flexible images, and media queries.',
    relatedTerms: ['Mobile-First', 'Breakpoint', 'Fluid Grid'],
  },
  {
    term: 'Rhythm',
    definition: 'The pattern of visual elements creating a sense of movement or flow. Achieved through repetition, alternation, or gradual changes in size, color, or spacing.',
    relatedTerms: ['Repetition', 'Pattern', 'Modular Scale'],
    relatedMovements: ['swiss-design', 'art-deco'],
  },
  {
    term: 'Shadow',
    definition: 'A dark area or shape produced by a body coming between rays of light and a surface. In UI design, shadows create the illusion of depth and elevation.',
    relatedTerms: ['Depth', 'Elevation', 'Material Design'],
    relatedMovements: ['neo-brutalism', 'glassmorphism'],
  },
  {
    term: 'Skeuomorphism',
    definition: 'A design approach where interface elements mimic their real-world counterparts in appearance. The opposite of flat design, emphasizing realistic textures and shadows.',
    relatedTerms: ['Flat Design', 'Material Design', 'Realism'],
  },
  {
    term: 'Swiss Design',
    definition: 'Also known as the International Typographic Style, this 1950s movement emphasizes mathematical grids, sans-serif typography, and objective visual communication.',
    relatedTerms: ['Grid System', 'Helvetica', 'Objectivity'],
    relatedMovements: ['swiss-design', 'minimalism', 'bauhaus'],
  },
  {
    term: 'Tracking',
    definition: 'The uniform adjustment of spacing across a range of characters. Unlike kerning, tracking affects all characters equally and is measured in thousandths of an em.',
    relatedTerms: ['Kerning', 'Typography', 'Letter Spacing'],
    relatedMovements: ['swiss-design', 'art-deco'],
  },
  {
    term: 'Transparency',
    definition: 'The quality of allowing light to pass through, measured by opacity. In design, transparency creates layering, depth, and visual interest.',
    relatedTerms: ['Opacity', 'Glassmorphism', 'Blend Modes'],
    relatedMovements: ['glassmorphism', 'minimalism'],
  },
  {
    term: 'Typography',
    definition: 'The art and technique of arranging type to make written language legible, readable, and appealing. Encompasses font selection, sizing, spacing, and arrangement.',
    relatedTerms: ['Typeface', 'Hierarchy', 'Readability'],
    relatedMovements: ['swiss-design', 'minimalism', 'brutalism', 'art-deco'],
  },
  {
    term: 'User Interface (UI)',
    definition: 'The space where interactions between humans and machines occur. Includes all elements users interact with: screens, buttons, icons, typography, and visual feedback.',
    relatedTerms: ['UX Design', 'Component', 'Interaction Design'],
  },
  {
    term: 'User Experience (UX)',
    definition: 'The overall experience a person has when using a product, especially in terms of how easy or pleasing it is. Encompasses usability, accessibility, and satisfaction.',
    relatedTerms: ['UI Design', 'Usability', 'Human-Centered Design'],
  },
  {
    term: 'Visual Hierarchy',
    definition: 'The arrangement and presentation of elements to show their order of importance. Guides the viewer\'s eye through content in a deliberate sequence.',
    relatedTerms: ['Hierarchy', 'Contrast', 'Proximity'],
    relatedMovements: ['swiss-design', 'minimalism', 'brutalism'],
  },
  {
    term: 'Whitespace',
    definition: 'The unmarked space between design elements. Not literally white, but the empty space that gives content room to breathe. Essential for creating clean, focused designs.',
    relatedTerms: ['Negative Space', 'Padding', 'Margin'],
    relatedMovements: ['minimalism', 'swiss-design'],
  },
  {
    term: 'Z-Index',
    definition: 'A CSS property that determines the stacking order of overlapping elements. Higher values appear on top of lower values. Essential for layering and overlapping designs.',
    relatedTerms: ['Stacking Context', 'Layering', 'Depth'],
    relatedMovements: ['glassmorphism', 'neo-brutalism'],
  },
];

export function getGlossaryTerm(term: string): GlossaryTerm | undefined {
  return glossaryTerms.find(
    (t) => t.term.toLowerCase() === term.toLowerCase()
  );
}

export function getTermsByLetter(letter: string): GlossaryTerm[] {
  return glossaryTerms.filter(
    (t) => t.term.toUpperCase().startsWith(letter.toUpperCase())
  );
}

export function getAllLetters(): string[] {
  const letters = new Set(
    glossaryTerms.map((t) => t.term.charAt(0).toUpperCase())
  );
  return Array.from(letters).sort();
}

export function searchGlossary(query: string): GlossaryTerm[] {
  const lowerQuery = query.toLowerCase();
  return glossaryTerms.filter(
    (t) =>
      t.term.toLowerCase().includes(lowerQuery) ||
      t.definition.toLowerCase().includes(lowerQuery)
  );
}
