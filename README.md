# WEBDESIGN.THEORY

> 14 design movements. Visual examples. Code snippets. No fluff.

A design theory reference covering the movements that shaped the web — from brutalist rawness to art deco elegance.

## 🎨 Design Movements (14 total)

| Movement | Vibe | Page |
|----------|------|------|
| **Brutalism** | Raw, bold, in-your-face | `/brutalism` |
| **Minimalism** | Less is more, zen | `/minimalism` |
| **Swiss Design** | Grid, precision, Helvetica | `/swiss` |
| **Principles** | Foundations of good design | `/principles` |
| **Glassmorphism** | Frosted glass, blur effects | `/glassmorphism` |
| **Neumorphism** | Soft shadows, subtle depth | `/neumorphism` |
| **Cyberpunk** | Neon, glitch, dark | `/cyberpunk` |
| **Retro/Vaporwave** | 80s synth, sunset gradients | `/retro-vaporwave` |
| **Material Design** | Cards, elevation, shadows | `/material-design` |
| **Organic/Fluid** | Blobby shapes, soft edges | `/organic-fluid` |
| **Typographic** | Font-dominant, large type | `/typographic` |
| **Grunge/Web1** | Retro HTML, blue links | `/grunge-web1` |
| **Maximalism** | More is more, chaos | `/maximalism` |
| **Art Deco** | Gold, geometric, luxury | `/art-deco` |

## 🛠️ Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Fonts:** Inter, JetBrains Mono (Google Fonts)

## 🚀 Local Dev

```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

## 🏗️ Build

```bash
npm run build
```

## 🌐 Deploy

Deployed via GitHub Actions → GitHub Pages (branch: `gh-pages`)

Live: **https://designrpros.github.io/WEBDESIGN.THEORY/**

## 📁 Project Structure

```
webdesigntheory/
├── src/app/               # Next.js 16 App Router
│   ├── brutalism/
│   ├── minimalism/
│   ├── swiss/
│   ├── principles/
│   ├── glassmorphism/
│   ├── neumorphism/
│   ├── cyberpunk/
│   ├── retro-vaporwave/
│   ├── material-design/
│   ├── organic-fluid/
│   ├── typographic/
│   ├── grunge-web1/
│   ├── maximalism/
│   ├── art-deco/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── Navigation/         # Unified nav with burger menu
├── lib/                    # Data: movements, glossary, types
├── design-system.md        # Design tokens & guidelines
├── SPEC.md                # Project specification
└── OUT.md                 # Agent handoff notes
```

## 🧠 Design System

See [`design-system.md`](./design-system.md) for color palette, typography scale, and component guidelines.

---

Built with 🏔️ by the Peak AI swarm.
