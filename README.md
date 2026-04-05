# WEBDESIGN.THEORY

> Raw. Bold. Unapologetic. Design without the fluff.

A design theory reference covering the movements that shaped the web — from brutalist rawness to Swiss precision.

## 🎨 Design Movements

| Movement | Vibe | Page |
|----------|------|------|
| **Brutalism** | Raw, bold, in-your-face | `/brutalism` |
| **Minimalism** | Less is more, zen | `/minimalism` |
| **Swiss Design** | Grid, precision, Helvetica | `/swiss` |
| **Principles** | Foundations of good design | `/principles` |

## 🛠️ Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Fonts:** Google Fonts (Space Grotesk, IBM Plex Mono)

## 🚀 Local Dev

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Remote

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deploys on push.

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod
```

Or drag the `.next/` folder to [app.netlify.com](https://app.netlify.com).

### Docker / VPS

```bash
npm run build
docker build -t webdesigntheory .
docker run -p 3000:3000 webdesigntheory
```

Or serve the `out/` directory with nginx:

```nginx
server {
    listen 80;
    root /var/www/webdesigntheory/out;
    index index.html;
    location / {
        try_files $uri $uri/ =404;
    }
}
```

## 📁 Project Structure

```
webdesigntheory/
├── app/                    # Next.js App Router pages
│   ├── brutalism/
│   ├── minimalism/
│   ├── swiss/
│   └── principles/
├── components/             # Reusable UI components
│   ├── Navigation/
│   ├── Hero/
│   ├── Footer/
│   ├── MovementCard/
│   ├── MovementGrid/
│   ├── CodeBlock/
│   └── ui/               # Primitives: Button, Card
├── lib/                   # Data: movements, glossary, types
├── design-system.md       # Design tokens & guidelines
├── SPEC.md                # Project specification
└── OUT.md                 # Agent handoff notes
```

## 🧠 Design System

See [`design-system.md`](./design-system.md) for:
- Color palette
- Typography scale
- Spacing & layout
- Component guidelines

---

Built with 🏔️ by the Peak AI swarm.
