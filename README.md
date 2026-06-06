# AtlanticOxide Resources

**Moderne, clean und minimalistische Single-Page Website für AtlanticOxide Resources.**

Professioneller B2B-Auftritt mit Fokus auf Mining, Handel und Exploration kritischer Rohstoffe und Oxide.

- **Design**: Seriös, premium, dunkle Grüntöne (#0A5C4A als Primary), viel Weißraum, hochwertige Typografie
- **Technik**: Reines modernes HTML + Tailwind CSS (CDN), vollständig responsiv, keine Build-Tools nötig
- **Struktur**: Hero, Was wir machen, Schwerpunkte (3 Cards), Warum AtlanticOxide, Kontakt mit Formular

## Live-Demo

🌐 [https://rccex.github.io/atlantic-oxide-website](https://rccex.github.io/atlantic-oxide-website)

## Lokale Entwicklung

Einfach `index.html` im Browser öffnen – keine Installation oder Server nötig.

## Deployment

Die Website wird automatisch über GitHub Actions bei jedem Push auf `main` auf GitHub Pages deployed.

### Manuelle Aktivierung von GitHub Pages (einmalig)

1. Im GitHub-Repo unter **Settings → Pages**
2. Unter „Build and deployment“ als **Source** **GitHub Actions** auswählen
3. Der Workflow `.github/workflows/deploy.yml` übernimmt den Rest

## Repository-Struktur

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automatic deployment to Pages (includes /en/)
├── assets/
│   ├── css/
│   │   └── main.css            # Extracted custom styles (shared)
│   ├── js/
│   │   └── main.js             # Extracted JavaScript (shared)
│   ├── icon-optimized.png      # Clean transparent icon/mark
│   ├── icon-on-green.png       # Icon variant for green/dark backgrounds
│   ├── logo-watermark.png      # Subtle low-contrast version for watermark effect
│   └── ... (other logo references)
├── en/
│   └── index.html              # English version
├── index.html                  # German version (root / default)
└── README.md
```

**Bilingual Support**
- German: `/` (index.html)
- English: `/en/` (en/index.html)
- Language switcher (DE | EN) in navigation and mobile menu
- Shared CSS/JS for maximum editability and identical design
- Future languages easily addable following the same pattern
- Impressum / Datenschutz currently as # links (separate pages planned for later)

## Nächste Schritte (optional)

- Eigene Domain hinterlegen (Settings → Pages → Custom domain)
- Weitere Inhalte / Unterseiten ergänzen
- Analytics oder Kontakt-Formular-Backend (z. B. Formspree) integrieren
- CI-Checks für HTML-Validierung hinzufügen

---

© AtlanticOxide Resources – Alle Rechte vorbehalten.