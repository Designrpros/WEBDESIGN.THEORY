# WebDesignTheory - New Design Theory Pages

## Overview
This document describes the 10 new design theory pages created for the webdesign.theory project.

## Pages Created

### 1. /glassmorphism
- **Theme**: Frosted glass effects with blur and transparency
- **Colors**: Cyan #22D3EE, Purple/Violet gradients, white overlays
- **Key Effects**: `backdrop-filter: blur()`, semi-transparent backgrounds, layered compositions
- **Hero Example**: Gradient background with glass cards floating above
- **Visual Examples**: Glass card, glass buttons, glass navigation bar

### 2. /neumorphism
- **Theme**: Soft UI with extruded surfaces and subtle shadows
- **Colors**: Light gray #e0e5ec, indigo/purple accents
- **Key Effects**: Dual box-shadows (light + dark), inset shadows for pressed states
- **Hero Example**: Light gray gradient background with soft 3D buttons
- **Visual Examples**: Calculator buttons (iOS style), neumorphic cards, form inputs

### 3. /cyberpunk
- **Theme**: Neon-soaked dystopian futurism (Blade Runner inspired)
- **Colors**: Neon yellow #FFE600, cyan, magenta #FF00FF, dark #0D0D0D
- **Key Effects**: Neon glow (`text-shadow`, `box-shadow`), glitch animations
- **Hero Example**: Dark background with glowing neon text
- **Visual Examples**: Neon button with glow, glitch text effect, cyber card

### 4. /retro-vaporwave
- **Theme**: 80s/90s nostalgia, sunset gradients
- **Colors**: Pink #FF71CE, Cyan #01CDFE, purple #2D1B4E
- **Key Effects**: Sunset gradients, perspective grid, retro typography
- **Hero Example**: Sunset gradient background with perspective grid
- **Visual Examples**: Sunset gradient cards, grid perspective, retrofuturistic elements

### 5. /material-design
- **Theme**: Google's design system with tactile surfaces
- **Colors**: Primary blue #4285F4, white surfaces, gray text
- **Key Effects**: Elevation shadows (multiple layers), FAB buttons
- **Hero Example**: Clean white card with Material elevation
- **Visual Examples**: Material card with shadow, FAB button, app bar

### 6. /organic-fluid
- **Theme**: Soft, flowing shapes with blobby forms
- **Colors**: Pastels - lavender #A78BFA, pink #F472B6, mint #34D399
- **Key Effects**: Large border-radius values, morphing animations, organic shapes
- **Hero Example**: Pastel gradient with floating blob shapes
- **Visual Examples**: Blobby buttons, organic cards, flowing gradients

### 7. /typographic
- **Theme**: Typography as the primary visual element
- **Colors**: Black #1A1A1A, white, grays
- **Key Effects**: Massive display type, text-stroke, layered typography
- **Hero Example**: Massive typography filling the viewport
- **Visual Examples**: Display type specimens, serif/mono combinations

### 8. /grunge-web1
- **Theme**: Early web aesthetics (1994-2005)
- **Colors**: Navy #000080, blue #0000FF, green #00FF00, gray #C0C0C0
- **Key Effects**: 3D beveled buttons, system fonts, table layouts
- **Hero Example**: Fake Netscape browser window with classic Web 1.0 content
- **Visual Examples**: 3D buttons, table layouts, hit counters, marquee text

### 9. /maximalism
- **Theme**: More is more, bold and loud
- **Colors**: Pink #F472B6, yellow #FBBF24, purple #A855F7, multiple patterns
- **Key Effects**: Multiple layered gradients, pattern overlays, bold shadows
- **Hero Example**: Multiple gradient backgrounds with floating shapes
- **Visual Examples**: Pattern overload cards, typography chaos, colorful tags

### 10. /art-deco
- **Theme**: Geometric elegance and luxury (1920s-1940s)
- **Colors**: Gold #D4AF37, black, white
- **Key Effects**: Gold borders, geometric corners, sunburst patterns
- **Hero Example**: Dark background with gold frame and decorative corners
- **Visual Examples**: Art deco frame, gold divider, ornamental typography

## Data Updates

### lib/movements.ts
Added 10 new movement entries with complete data:
- slug, name, era, origin, accentColor
- description, keyTraits, principles (3 principles each)
- theory (detailed explanation)
- visualExamples (3 examples)
- codeSnippets (2-3 CSS/HTML examples)
- relatedMovements
- playgroundPreset (html, css, controls)

### lib/glossary.ts
Already contains relevant terms for the new styles:
- Glassmorphism, Backdrop Filter, Neumorphism
- Material Design, Shadow, Transparency
- Pattern, Typography, Visual Hierarchy

## File Structure

```
app/
├── glassmorphism/page.tsx    (NEW)
├── neumorphism/page.tsx      (NEW)
├── cyberpunk/page.tsx        (NEW)
├── retro-vaporwave/page.tsx  (NEW)
├── material-design/page.tsx    (NEW)
├── organic-fluid/page.tsx     (NEW)
├── typographic/page.tsx      (NEW)
├── grunge-web1/page.tsx      (NEW)
├── maximalism/page.tsx        (NEW)
├── art-deco/page.tsx          (NEW)
├── brutalism/page.tsx
├── minimalism/page.tsx
├── swiss/page.tsx
├── principles/page.tsx
└── page.tsx (home)

lib/
├── movements.ts    (UPDATED - added 10 new movements)
├── glossary.ts    (TERMS - already had relevant terms)
└── types.ts
```

## Build Status
✅ All pages compile successfully
✅ TypeScript types pass validation
✅ Static generation works for all routes

## Navigation
Each page includes:
- Header with navigation to other pages
- Hero section with large typography
- History/The Origins section with timeline
- Visual Examples section with inline-styled examples
- Code Examples section with CSS snippets
- Color Palette section
- Do's and Don'ts rules section
- Footer with navigation to adjacent pages

## Design Characteristics

Each page follows the same structure as brutalism/page.tsx:
1. Header (sticky)
2. Hero (90vh minimum)
3. History section
4. Visual Examples (with inline styles)
5. Code Examples
6. Color Palette
7. Rules (Do's/Don'ts)
8. Footer

The pages use:
- Tailwind CSS classes where applicable
- Custom inline styles for unique effects
- CSS custom properties for colors
- Lucide React icons (imported but not always visible due to design choices)
- Responsive grid layouts
- Consistent navigation patterns
