# OUT.md — webdesign.theory

## Live
**URL:** https://designrpros.github.io/WEBDESIGN.THEORY/

## Hva ble bygget
Next.js 14 + Tailwind v4 design-theory referanse. 4 sider: brutalism, minimalism, swiss, principles.

## Deployment
- GitHub Actions workflow: `.github/workflows/deploy.yml`
- Bruker `peaceiris/actions-gh-pages@v3` → pusher til `gh-pages` branch
- GitHub Pages Source: **Branch `gh-pages` / root**
- Automatisk deploy ved hver push til `main`

## Slik redeployer du
1. Gå til: **github.com/Designrpros/WEBDESIGN.THEORY/actions**
2. Klikk på workflow → **Re-run all jobs**

## Viktig: basePath
`next.config.js` har `basePath: '/WEBDESIGN.THEORY'` — alle assets/routesPrefikset med `/WEBDESIGN.THEORY/`. Fjern IKKE denne med mindre du deployer til root.

## Neste steg
- [ ] Legg til flere design movements (glassmorphism, neumorphism, etc.)
- [ ] Legg til interaktive kodeplaygrounds
- [ ] Oppgrader Next.js (14.2.0 har security vulnerability)
- [ ] Fiks 7 npm vulnerabilities

## Agent-log
- Commit historikk: 8 commits (91cefd0 → d3c468b)
- Design-system: 17 KB
- SPEC.md: 11 KB
- Workflow iterations: 6+ (vi lærte mye 😅)
