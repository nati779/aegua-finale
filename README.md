# 🦋 AEGUA NEW CLUB — Website

Sito web ufficiale per **Aegua New Club**. Cinematografico, minimal, emozionale.

## Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 15 (App Router) |
| TypeScript | 5+ |
| Tailwind CSS | v4 |
| Framer Motion | 12+ |
| Lucide React | latest |

## Struttura progetto

```
aegua/
├── app/
│   ├── globals.css          # Tailwind v4 + keyframes + CSS vars
│   ├── layout.tsx           # Root layout con font e metadata
│   ├── page.tsx             # Home page
│   ├── not-found.tsx        # Pagina 404
│   ├── loading.tsx          # Loading state
│   └── serate/
│       └── [slug]/
│           └── page.tsx     # Pagina dinamica per ogni serata
├── components/
│   ├── Butterfly.tsx        # SVG farfalla animata (hero mode + scroll)
│   ├── Navbar.tsx           # Navigazione responsive
│   ├── HeroSection.tsx      # Hero fullscreen con farfalla gigante
│   ├── ManifestoSection.tsx # Sezione manifesto / numeri
│   ├── SerateSection.tsx    # Grid serate homepage
│   ├── SerataCard.tsx       # Card singola serata
│   ├── BookingForm.tsx      # Form prenotazione con link WhatsApp
│   ├── PrenotaContatti.tsx  # Sezione contatti e telefoni
│   ├── Reveal.tsx           # Wrapper per animazioni scroll-triggered
│   └── PageTransition.tsx   # Transizioni tra pagine
├── lib/
│   ├── serate.ts            # Dati delle 5 serate + helpers
│   ├── hooks.ts             # Custom hooks (useWindowSize, useButterflySize)
│   └── utils.ts             # cn() utility
└── public/
    └── favicon.svg          # Favicon farfalla SVG
```

## Setup locale

```bash
# 1. Installa dipendenze
npm install

# 2. Avvia il dev server
npm run dev

# 3. Apri il browser
open http://localhost:3000
```

## Deploy su Vercel

```bash
# Installa Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## Personalizzazioni rapide

### Aggiungere una serata
Modifica `lib/serate.ts` e aggiungi un oggetto `Serata` all'array `serate`.

### Cambiare i numeri WhatsApp / telefono
- Prenotazione rapida: cerca `wa.me/390212345678` in `PrenotaContatti.tsx`
- Form serata: cerca `wa.me/390212345678` in `BookingForm.tsx`
- Telefoni: modifica l'array `contatti` in `PrenotaContatti.tsx`

### Modificare lo stile
- Colori e variabili: `app/globals.css` → sezione `@theme {}`
- Keyframes: `app/globals.css` → sezione `KEYFRAMES`
- Font: `app/layout.tsx`

## Features

- ✅ **Farfalla SVG animata** con battito ali Framer Motion
- ✅ **Scroll trigger** con traiettoria zigzag + fade + particelle
- ✅ **5 serate** con pagine dinamiche `/serate/[slug]`
- ✅ **Form prenotazione** con link WhatsApp precompilato
- ✅ **Mobile-first** responsive
- ✅ **Animazioni scroll-triggered** su tutte le sezioni
- ✅ **Effetto strobo soft** su hover card/bottoni
- ✅ **Grain overlay** per texture cinematografica
- ✅ **Pronto per Vercel** (zero config)

---

*Made with ❤️ for the night.*
