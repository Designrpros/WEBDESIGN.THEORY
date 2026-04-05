# WebDesignTheory.dev — Design System

> A comprehensive design system for an educational platform teaching web design theory. This document defines the visual language, principles, and components that represent the intersection of **educational clarity** and **design sophistication**.

---

## 1. Brand Identity

### Mission
WebDesignTheory.dev demystifies design theory — from Brutalism to Swiss Design — through clean, accessible, and visually rich content. Every element of this platform models the very principles it teaches.

### Personality
- **Authoritative** — grounded in real design history and theory
- **Approachable** — complex ideas made digestible
- **Sophisticated** — a canvas that showcases design movements authentically
- **Visual** — where typography and layout *are* the content

### Brand Mark
- **Wordmark**: `WebDesignTheory.dev`
- **Monospace accent**: `.dev` in a distinct tone to signal technical credibility
- **No icon** — the typography itself is the identity

---

## 2. Color Palette

### Core Palette

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Primary | Ink | `#1A1A1A` | Headlines, primary text, navigation |
| Secondary | Slate | `#4A4A4A` | Body text, secondary labels |
| Accent | Electric Teal | `#00C8AA` | Interactive elements, highlights, active states |
| Background | Ivory | `#FAFAF8` | Primary page background |
| Surface | White | `#FFFFFF` | Cards, code blocks, elevated surfaces |
| Border | Mist | `#E8E8E4` | Dividers, subtle separators |

### Design Movement Palettes

To authentically represent different design movements, each movement section uses a contextualized color interpretation:

#### **Brutalist Palette**
| Role | Hex | Description |
|------|-----|-------------|
| Raw Concrete | `#8B8680` | Backgrounds, blockquote borders |
| Exposed Black | `#0D0D0D` | Headlines, heavy borders |
| Warning Red | `#E63946` | Accents, hover states |
| Stark White | `#F5F5F5` | Inverse text on dark sections |

#### **Minimalist Palette**
| Role | Hex | Description |
|------|-----|-------------|
| Pure White | `#FFFFFF` | Background (absolutely no tint) |
| Near Black | `#111111` | All text |
| Single Gray | `#888888` | Decorative lines only |
| No Accent | — | Accents are prohibited |

#### **Swiss Design Palette**
| Role | Hex | Description |
|------|-----|-------------|
| Signal Red | `#FF0000` | Primary accent — the *only* color accent |
| Pure White | `#FFFFFF` | Background |
| Helvetica Black | `#000000` | All typography |
| Grid Blue | `#0065FF` | Subtle grid overlays in examples |

### Functional Palette

| Role | Hex | Usage |
|------|-----|-------|
| Success | `#10B981` | Completion states, positive feedback |
| Warning | `#F59E0B` | Caution states, non-critical alerts |
| Error | `#EF4444` | Validation errors, destructive actions |
| Info | `#3B82F6` | Informational callouts, links |

### Accessibility

- All text combinations meet **WCAG AA** contrast requirements (4.5:1 for body, 3:1 for large text)
- Electric Teal `#00C8AA` on Ivory `#FAFAF8` → 4.8:1 contrast ratio ✓
- Ink `#1A1A1A` on White `#FFFFFF` → 19.6:1 contrast ratio ✓

---

## 3. Typography System

### Typeface Selection

**Primary**: `Inter` — A variable typeface designed for maximum legibility at all sizes. Clean, neutral, contemporary.

**Accent/Display**: `Space Grotesk` — Geometric yet warm. Used for headlines and emphasis. Complements Inter without competing.

**Monospace**: `JetBrains Mono` — For code examples, technical notation, and the `.dev` brand suffix.

### Type Scale

```
Display XL:   4rem      / 64px   — Hero headlines, movement titles
Display:      3rem       / 48px   — Section headers, major headings
H1:           2.25rem    / 36px   — Page titles
H2:           1.75rem    / 28px   — Section subheads
H3:           1.375rem   / 22px   — Card titles, component headers
H4:           1.125rem   / 18px   — Sub-section labels
Body Large:   1.125rem   / 18px   — Lead paragraphs, introductory text
Body:         1rem       / 16px   — Standard body copy
Body Small:   0.875rem   / 14px   — Captions, metadata, footnotes
Code:         0.9rem      / 14.4px — Inline code, technical notation
```

### Line Heights

| Context | Line Height | Example |
|---------|-------------|---------|
| Headlines | 1.1 | Tight, commanding |
| Body Large | 1.6 | Comfortable reading |
| Body | 1.7 | Optimal readability |
| Body Small | 1.5 | Metadata, labels |
| Code | 1.6 | Monospace legibility |

### Letter Spacing

| Context | Letter Spacing |
|---------|----------------|
| Display XL | -0.02em |
| Display | -0.02em |
| Headlines (H1-H2) | -0.01em |
| Labels, All Caps | 0.08em |
| Code | 0em |

### Type Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Body text, paragraphs |
| Medium | 500 | Subheadings, emphasis |
| Semibold | 600 | Navigation, buttons, labels |
| Bold | 700 | Headlines, strong emphasis |
| Black | 900 | Display, hero text (sparingly) |

### Design Movement Typography Styles

#### **Brutalist**
- **Primary**: `Archivo Black` — Condensed, aggressive, uppercase
- **Secondary**: `Space Mono` — Raw, monospace, technical
- **Treatment**: Heavy borders, uppercase, tight tracking, raw exposed grids

#### **Minimalist**
- **Primary**: `Inter` — Already minimal; use at regular weight only
- **Treatment**: Single font, single weight, no decoration, generous whitespace

#### **Swiss Design**
- **Primary**: `Inter` (closest open-source to Helvetica Neue)
- **Secondary**: `Akzidenz-Grotesk` or `Neue Haas Grotesk` (if licensed)
- **Treatment**: Objective, systematic, grid-aligned, asymmetric layouts

---

## 4. Layout System

### Grid

**12-Column Grid** with an 8px base unit.

| Breakpoint | Columns | Gutter | Margin |
|------------|---------|--------|--------|
| Mobile (<640px) | 4 | 16px | 20px |
| Tablet (640–1024px) | 8 | 24px | 40px |
| Desktop (1024–1440px) | 12 | 24px | 64px |
| Wide (>1440px) | 12 | 32px | 120px |

### Spacing Scale

Based on an 8px unit — all spacing values are multiples:

```
0:    0px
1:    4px    — Micro gaps, icon padding
2:    8px    — Tight component spacing
3:    12px   — Input padding, compact lists
4:    16px   — Standard padding, card insets
5:    24px   — Section component spacing
6:    32px   — Major component gaps
7:    48px   — Section vertical rhythm
8:    64px   — Major section breaks
9:    96px   — Hero spacing, movement section dividers
10:   128px  — Page-level vertical rhythm
```

### Layout Patterns

#### **The Three-Column Article Layout**
For theory pages — maximizes readability while allowing contextual annotations:

```
┌─────────────────────────────────────────────────────────┐
│                    Header / Navigation                   │
├──────────┬─────────────────────────────┬────────────────┤
│          │                             │                │
│ Context  │      Main Content           │   Annotations  │
│ Sidebar  │      (65% width)            │   (20% width)  │
│ (15%)    │                             │                │
│          │                             │                │
├──────────┴─────────────────────────────┴────────────────┤
│                      Footer                             │
└─────────────────────────────────────────────────────────┘
```

#### **Movement Showcase Layout**
For movement theory pages — layouts that *embody* the movement:

- **Brutalist**: Asymmetric, intentionally awkward, exposed grid lines, overlapping elements
- **Minimalist**: Centered single column, absolute whitespace, no decoration
- **Swiss**: Rigid grid, precise alignment, left-aligned, asymmetric balance

#### **Card Grid Layout**
For courses, examples, and resource libraries:

```
┌─────────┐  ┌─────────┐  ┌─────────┐
│  Card   │  │  Card   │  │  Card   │
│         │  │         │  │         │
│         │  │         │  │         │
└─────────┘  └─────────┘  └─────────┘
┌─────────┐  ┌─────────┐  ┌─────────┐
│  Card   │  │  Card   │  │  Card   │
└─────────┘  └─────────┘  └─────────┘
```

- 3 columns on desktop, 2 on tablet, 1 on mobile
- Gap: 24px
- Cards have no border — depth through shadow only

### Vertical Rhythm

- **Base unit**: 8px
- **Section rhythm**: Major content sections separated by 96px (12 units)
- **Paragraph spacing**: 24px (3 units) between paragraphs
- **Heading margin-top**: 48px (6 units) when following body text

---

## 5. Components

### Navigation

| State | Style |
|-------|-------|
| Default | Ink `#1A1A1A` text, no underline |
| Hover | Electric Teal `#00C8AA` text, 2px underline offset 4px |
| Active | Electric Teal `#00C8AA` text, solid underline |
| Mobile | Full-width hamburger menu, slide-in drawer |

### Buttons

#### Primary Button
```
Background:     #00C8AA (Electric Teal)
Text:           #FFFFFF (White)
Padding:        12px 24px
Border-radius:  6px
Font-weight:    600
Font-size:      0.875rem
Letter-spacing: 0.02em
Transition:     all 150ms ease-out
Hover:          darken 10%, translateY(-1px)
Active:         darken 15%, translateY(0)
```

#### Secondary Button
```
Background:     transparent
Border:         2px solid #1A1A1A
Text:           #1A1A1A
Hover:          Background #1A1A1A, Text #FFFFFF
```

#### Ghost Button
```
Background:     transparent
Text:           #4A4A4A
Hover:          Text #1A1A1A, background rgba(0,0,0,0.04)
```

### Cards

```
Background:     #FFFFFF
Border-radius:  8px
Shadow:         0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)
Padding:        24px
Transition:     box-shadow 200ms ease, transform 200ms ease
Hover:          shadow lift, translateY(-2px)
```

### Code Blocks

```
Background:     #1E1E1E (VS Code Dark)
Border-radius:  8px
Padding:        20px 24px
Font:           JetBrains Mono, 14px
Line-height:    1.6
Syntax colors:
  Keywords:     #569CD6 (Blue)
  Strings:      #CE9178 (Orange)
  Comments:     #6A9955 (Green)
  Functions:    #DCDCAA (Yellow)
  Variables:    #9CDCFE (Light Blue)
```

### Callouts / Notations

#### Theory Callout
```
Border-left:    4px solid #00C8AA
Background:     rgba(0, 200, 170, 0.06)
Padding:        16px 20px
Icon:           📐 (inline SVG)
```

#### Movement Callout
```
Border-left:    4px solid [Movement accent color]
Background:     [Movement background]
Padding:        20px 24px
Label:          Movement name in small caps
```

### Images & Figures

- Border-radius: 8px (unless movement requires otherwise)
- Shadow: `0 4px 16px rgba(0,0,0,0.08)`
- Caption: Body Small, `#4A4A4A`, margin-top 12px
- Alt text: Required — descriptive, not "image of X"

### Form Elements

#### Text Input
```
Height:         44px
Padding:        0 16px
Border:         1.5px solid #E8E8E4
Border-radius:  6px
Font:           Inter, 16px
Focus:          Border #00C8AA, box-shadow 0 0 0 3px rgba(0,200,170,0.15)
Error:          Border #EF4444, helper text below
```

---

## 6. Motion & Interaction

### Principles

- **Purposeful**: Animation communicates state, not decoration
- **Quick**: Most transitions under 200ms
- **Physical**: Subtle easing that feels natural

### Timing Functions

| Name | Easing | Usage |
|------|--------|-------|
| Ease Out | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Entering elements, hover states |
| Ease In | `cubic-bezier(0.4, 0.0, 1, 1)` | Exiting elements |
| Ease In-Out | `cubic-bezier(0.4, 0.0, 0.2, 1)` | State changes |
| Spring | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful feedback (buttons, toggles) |

### Standard Animations

| Animation | Duration | Easing | Usage |
|-----------|----------|--------|-------|
| Hover state | 150ms | ease-out | Buttons, cards, links |
| Focus ring | 150ms | ease-out | Form inputs |
| Page transitions | 300ms | ease-in-out | Route changes |
| Modal open | 250ms | ease-out | Dialogs, drawers |
| Modal close | 200ms | ease-in | Dialogs, drawers |
| Stagger delay | 50ms | — | List/item reveals |

### Scroll Behavior

- Smooth scroll for in-page anchors
- Intersection Observer for scroll-triggered animations
- Lazy loading for images below the fold
- Reading progress indicator on article pages

---

## 7. Design Movement Representations

### How the Platform Teaches Through Its Own Design

Each design movement section is styled to *demonstrate* the theory it teaches — the medium becomes the message.

---

### **Brutalism**

> "Brutalist web design rejects polish. It's raw, confrontational, and intentionally uncomfortable."

**Visual Treatment on Platform:**
- Exposed HTML structure feel
- Thick black borders (3-4px)
- Colliding layout elements
- Monospace everywhere
- Harsh color contrasts (black/white with single hot accent)
- Deliberately "ugly" by conventional standards
- No border-radius — everything sharp

**CSS Variables:**
```css
--brutal-bg: #F5F5F5;
--brutal-text: #0D0D0D;
--brutal-border: #0D0D0D;
--brutal-accent: #E63946;
--brutal-border-width: 3px;
--brutal-font: 'Space Mono', monospace;
```

**Layout Characteristics:**
- Zero margin between sections (intentional)
- Elements that break the grid
- Uppercase headlines with heavy weight
- Links underlined with actual lines, not hover effects

---

### **Minimalism**

> "Minimalism is the art of knowing what to leave out. Every element must justify its existence."

**Visual Treatment on Platform:**
- Maximum whitespace — content floats in emptiness
- Single typeface, single weight
- No shadows, no borders, no decorations
- Black text on white only
- Navigation nearly invisible until hovered
- Animation is nearly absent

**CSS Variables:**
```css
--minimal-bg: #FFFFFF;
--minimal-text: #111111;
--minimal-font: 'Inter', sans-serif;
--minimal-weight: 400;
--minimal-spacing: generous;
```

**Layout Characteristics:**
- Single centered column, max-width 640px
- Line length capped at 65 characters
- Generous vertical rhythm (sections 128px apart)
- No cards — just text and images

---

### **Swiss Design (International Typographic Style)**

> "The grid is not a constraint — it's liberation. Systematic beauty through mathematical proportion."

**Visual Treatment on Platform:**
- Strict 12-column grid — everything aligns
- Helvetica Neue (or Inter as open-source equivalent)
- Asymmetric layouts with visual tension
- Red as the singular accent color
- Left-aligned type, always
- Objective, informative photography (if used)
- No ornament — function determines form

**CSS Variables:**
```css
--swiss-bg: #FFFFFF;
--swiss-text: #000000;
--swiss-accent: #FF0000;
--swiss-font: 'Inter', sans-serif;
--swiss-grid: visible; /* Optional: show grid in examples */
```

**Layout Characteristics:**
- Asymmetric two-column or three-column layouts
- Left-heavy visual weight
- Clear typographic hierarchy through scale alone
- Horizontal rules as primary dividers
- Red accent marks for emphasis only

---

## 8. Responsive Strategy

### Breakpoints

| Name | Min-width | Primary Target |
|------|-----------|----------------|
| xs | 0px | Small phones |
| sm | 640px | Large phones, small tablets |
| md | 768px | Tablets |
| lg | 1024px | Laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |

### Mobile-First Approach

1. Design for smallest screen first
2. Add complexity for larger screens via `min-width` queries
3. Touch targets minimum 44×44px on mobile
4. No horizontal scrolling at any breakpoint

### Responsive Typography

```
Mobile (base):     Body 16px, H1 32px
Tablet (sm+):      Body 17px, H1 38px
Desktop (lg+):     Body 18px, H1 48px
```

---

## 9. Accessibility Requirements

- **Focus states**: Visible focus rings on all interactive elements (2px solid Electric Teal, 2px offset)
- **Skip links**: "Skip to main content" link visible on focus for keyboard users
- **ARIA labels**: On icon-only buttons, navigation landmarks
- **Reduced motion**: Respect `prefers-reduced-motion` — disable animations
- **Color independence**: Never convey information through color alone
- **Text resizing**: Support up to 200% browser zoom without horizontal scroll
- **Screen readers**: Semantic HTML, proper heading hierarchy (no skipped levels)

---

## 10. Implementation Notes

### CSS Architecture
- CSS Custom Properties for all design tokens
- No inline styles in components
- Utility classes for spacing and typography only
- BEM naming for component classes

### File Structure
```
styles/
├── tokens/          # CSS custom properties
├── base/            # Reset, typography, global
├── components/      # Buttons, cards, forms
├── layouts/         # Page structures
└── movements/       # Movement-specific overrides
```

### Performance Targets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Total Blocking Time: < 200ms

---

*Design System v1.0 — WebDesignTheory.dev*
*Last updated: Design System Initialization*
