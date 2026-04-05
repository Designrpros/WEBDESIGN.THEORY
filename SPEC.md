# WebDesignTheory.dev — Specification

## 1. Concept & Vision

**WebDesignTheory.dev** is an educational platform that demystifies web design movements and theory through interactive examples, visual comparisons, and hands-on code snippets. It feels like a curated museum gallery meets a designer's sketchbook — authoritative yet approachable, with each design movement given its own distinct visual treatment while maintaining cohesion. The site celebrates the history of design by letting visitors *experience* the theories, not just read about them.

---

## 2. Design Language

### Aesthetic Direction
A "Design Museum" aesthetic — clean, editorial, with each design movement showcased as an exhibit. Navigation feels like flipping through a beautifully designed textbook, while interactive elements let users manipulate styles and see real-time changes. Dark mode default with high-contrast typography.

### Color Palette
```
Primary Background:    #0A0A0A (near-black)
Secondary Background:   #141414 (card surfaces)
Tertiary Background:    #1E1E1E (elevated elements)
Primary Text:           #FAFAFA (off-white)
Secondary Text:         #A0A0A0 (muted gray)
Accent Primary:         #6366F1 (indigo - interactive elements)
Accent Secondary:       #F472B6 (pink - highlights, badges)
Accent Tertiary:        #22D3EE (cyan - code snippets)
Success:                #10B981
Warning:                #F59E0B
Error:                  #EF4444

Movement-specific accents:
- Brutalism:            #FF6B35
- Minimalism:           #000000 / #FFFFFF
- Swiss Design:         #D62828 (red accent)
- Bauhaus:              #F4D03F (yellow)
- Art Deco:             #C9A227 (gold)
- Memphis:              #FF69B4 (hot pink)
```

### Typography
```
Headings:    "Space Grotesk" (Google Fonts) — geometric, technical feel
             Fallback: system-ui, sans-serif

Body:        "Inter" (Google Fonts) — highly legible for educational content
             Fallback: system-ui, sans-serif

Code:        "JetBrains Mono" (Google Fonts) — monospace for snippets
             Fallback: "Fira Code", monospace
```

### Spatial System
```
Base unit:         4px
Spacing scale:     4, 8, 12, 16, 24, 32, 48, 64, 96, 128px
Container max:     1280px (content), 1440px (full-width sections)
Card padding:      24px (compact), 32px (standard), 48px (featured)
Border radius:     4px (subtle), 8px (cards), 12px (featured)
```

### Motion Philosophy
```
Micro-interactions:  150ms ease-out (hover states, button feedback)
Page transitions:    300ms ease-in-out (content reveals)
Scroll animations:   600ms ease-out (staggered reveals)
Code demos:          400ms spring (slider changes)
```

Motion should feel precise and intentional — never playful or bouncy, maintaining the "museum" authority.

### Visual Assets
- **Icons**: Lucide React (consistent, clean line icons)
- **Illustrations**: Custom CSS-generated abstract shapes for each movement
- **Code highlighting**: Custom theme matching the site palette
- **Decorative**: Subtle grid patterns, movement-specific geometric accents

---

## 3. Layout & Structure

### Site Architecture
```
/                       → Landing page (hero + movement grid)
/theory/[movement]      → Individual movement deep-dive
/glossary               → Design terminology reference
/resources              → Curated tools and further reading
/about                  → Project mission and contributors
```

### Landing Page Structure
1. **Hero Section** — Full viewport, site title with subtle animated grid background, tagline emphasizing "Learn by doing"
2. **Movement Grid** — Bento-style layout showcasing all movements with preview thumbnails
3. **Why Theory Matters** — Brief editorial section on design history importance
4. **Interactive Preview** — One featured movement with live code demo
5. **Footer** — Navigation, credits, GitHub link

### Individual Movement Page Structure
1. **Movement Header** — Name, origin period, key characteristics list
2. **Theory Section** — Written explanation with key principles
3. **Visual Examples** — Curated websites/creators embodying the movement
4. **Interactive Playground** — Live CSS editor to experiment with movement styles
5. **Code Walkthrough** — Annotated code snippets with copy functionality
6. **Related Movements** — Links to similar or opposing movements
7. **Further Resources** — Books, articles, tools

### Responsive Strategy
- **Desktop (1280px+)**: Full layouts, side-by-side code examples
- **Tablet (768px-1279px)**: Stacked code examples, adjusted grid
- **Mobile (< 768px)**: Single column, collapsible code blocks, touch-optimized playground

---

## 4. Features & Interactions

### Core Features

#### Movement Encyclopedia
- 8 initial movements: Brutalism, Minimalism, Swiss Design, Bauhaus, Art Deco, Memphis, Neo-Brutalism, Glassmorphism
- Each movement includes: theory text, visual examples, interactive demo, code snippets
- Filter/sort by era, complexity, visual intensity

#### Interactive Code Playground
- Side-by-side HTML/CSS editor with live preview
- Preset examples for each movement
- "Reset to original" functionality
- CSS variable controls (color, spacing, typography) with sliders
- Copy-to-clipboard for final code

#### Visual Comparison Tool
- Before/after slider showing "generic" vs "movement-styled" versions
- Drag handle to reveal transformations
- Click to see annotated transformation notes

#### Code Snippet System
- Syntax highlighting with movement-specific accent colors
- Line numbers
- Copy button with "Copied!" feedback
- Expandable/collapsible for long snippets
- Language tabs (HTML, CSS, JS) where applicable

#### Glossary
- Alphabetical index of design terms
- Cross-references to related movements
- Example visuals where applicable
- Search/filter functionality

### Interaction Details

| Element | Hover | Click | Focus |
|---------|-------|-------|-------|
| Nav link | Underline animation | Navigate | Outline ring |
| Movement card | Lift (translateY -4px), shadow increase | Navigate to detail | Outline ring |
| Code block | Subtle border glow | Select all / Copy | Outline ring |
| Playground slider | Thumb scale 1.1x | Drag to adjust | Visible track |
| Button primary | Background lighten 10% | Scale 0.98 | Ring + state change |
| Button secondary | Border color change | Scale 0.98 | Ring |

### Error & Edge States
- **Empty playground**: "Start typing or choose a preset to begin"
- **Invalid CSS**: Red border on editor, friendly error message in preview
- **Loading**: Skeleton placeholders matching content shape
- **404**: Styled page with movement-themed illustration, link home

---

## 5. Component Inventory

### Navigation
- **Default**: Transparent background, white text
- **Scrolled**: Blurred dark background (#0A0A0A/80% + backdrop-blur)
- **Mobile**: Hamburger → slide-in drawer from right
- **States**: Active link has accent underline

### Hero
- Animated CSS grid background (subtle movement)
- Large heading with gradient text effect (optional)
- Tagline with typewriter or fade-in effect
- CTA button with hover glow

### Movement Card
- **Default**: Dark surface, movement accent color top border
- **Hover**: Elevated shadow, subtle scale (1.02)
- **Content**: Movement name, era, 3 key traits, mini preview
- **States**: Loading skeleton, error fallback

### Code Block
- **Default**: Dark background (#0A0A0A), colored syntax
- **Header**: Language label, copy button
- **States**: Copied confirmation, expanded/collapsed, error highlight

### Playground Editor
- Split view: Editor (left) / Preview (right)
- Top toolbar: Reset, preset dropdown, fullscreen toggle
- **Editor**: Syntax highlighting, line numbers, auto-indent
- **Preview**: Iframe isolation, refresh button, device selector (desktop/tablet/mobile)

### Interactive Slider (Before/After)
- Two overlapping images/layers
- Draggable divider with handle
- Label badges for each side
- Touch and mouse support

### Glossary Entry
- Term heading with pronunciation (if applicable)
- Definition paragraph
- "See also" cross-references as pills
- Visual example thumbnail (if applicable)

### Footer
- Three columns: Navigation, Resources, Connect
- Dark background (#0A0A0A)
- Subtle top border with gradient
- Copyright, built-with badge

---

## 6. Technical Approach

### Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: CSS Modules + CSS Variables (no Tailwind)
- **Animations**: Framer Motion
- **Code Highlighting**: Prism.js or Shiki
- **Icons**: Lucide React
- **Fonts**: Google Fonts (loaded via next/font)

### Project Structure
```
/app
  /page.tsx                    # Landing
  /theory/[slug]/page.tsx     # Movement detail
  /glossary/page.tsx
  /resources/page.tsx
  /about/page.tsx
  /layout.tsx
  /globals.css

/components
  /Navigation/
  /Hero/
  /MovementCard/
  /MovementGrid/
  /CodeBlock/
  /Playground/
  /ComparisonSlider/
  /GlossaryEntry/
  /Footer/
  /ui/                         # Shared primitives (Button, Card, etc.)

/lib
  /movements.ts               # Movement data/content
  /glossary.ts                # Glossary terms
  /styles/                    # CSS variables, tokens

/public
  /images/                    # Static images
  /examples/                  # Pre-built HTML/CSS examples
```

### Data Model
Movements stored as TypeScript objects with typed interfaces:
```typescript
interface Movement {
  slug: string;
  name: string;
  era: string;              // e.g., "1950s-1970s"
  origin: string;          // Country/context
  accentColor: string;
  description: string;
  principles: Principle[];
  theory: string;          // Markdown content
  visualExamples: Example[];
  codeSnippets: CodeSnippet[];
  relatedMovements: string[]; // Slugs
  playgroundPreset: PlaygroundPreset;
}

interface CodeSnippet {
  language: 'html' | 'css' | 'js';
  title: string;
  code: string;
  annotation?: string;
}

interface PlaygroundPreset {
  html: string;
  css: string;
  controls: Control[];
}
```

### Key Implementation Notes
- SSG for all movement pages (generateStaticParams)
- Code editor uses CodeMirror or Monaco (lightweight)
- Playground preview runs in sandboxed iframe
- Responsive images with next/image
- SEO meta tags per movement page
- Dark mode only (no toggle needed)

---

## 7. Content Outline (Initial Movements)

### Brutalism
- Raw, unpolished aesthetic
- Monospace fonts, visible structure
- High contrast, sometimes harsh colors
- Interactive playground: border styles, shadow manipulation

### Minimalism
- "Less is more" philosophy
- Whitespace as design element
- Limited color palette
- Interactive playground: spacing, typography scales

### Swiss Design (International Typographic Style)
- Grid-based layouts
- Sans-serif typography
- Asymmetric layouts with alignment
- Interactive playground: grid systems, type hierarchy

### Bauhaus
- Form follows function
- Primary colors + geometric shapes
- Integration of craft and art
- Interactive playground: geometric shapes, color blocking

### Art Deco
- Luxurious, glamorous aesthetics
- Geometric symmetry, bold lines
- Gold accents, rich colors
- Interactive playground: decorative borders, gold gradients

### Memphis Design
- Playful, colorful, anti-minimalism
- Terrazzo patterns, squiggly lines
- Bold color combinations
- Interactive playground: patterns, color mixing

### Neo-Brutalism
- Modern brutalist revival
- Thick black borders, bright colors
- Playful yet raw
- Interactive playground: border thickness, color saturation

### Glassmorphism
- Frosted glass effects
- Background blur, transparency
- Soft gradients
- Interactive playground: backdrop-filter, opacity levels
