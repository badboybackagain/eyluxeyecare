# Eylux Eye Care — Product Requirements

## Original Problem Statement
Build a premium, ultra-modern, animation-rich Astro website for an optician and eyewear brand called "Eylux Eye Care" (Hadapsar, Pune). User selected **Next.js + Tailwind + GSAP + Framer Motion + Lenis** instead of Astro for Emergent compatibility. Hosting target: **Cloudflare Pages** (Next.js static export). Webhook for contact form is a **placeholder** (env-configurable).

## Tech Stack (chosen, 2025-12)
- Next.js 14.2 (App Router, static `output: 'export'`)
- TailwindCSS 3.4
- Framer Motion + GSAP + Lenis smooth scroll
- react-fast-marquee, lucide-react
- No database, no backend (FastAPI not used; pure static site)

## User Personas
- Working IT professionals (computer glasses, blue-cut)
- Families & parents (kids vision)
- Fashion-conscious buyers (designer frames)
- Tech early-adopters (Meta AI smart glasses)
- Seniors (progressive lenses, unhurried experience)

## Core Requirements (static)
- 11 pages: Home, About, Eye Testing, Lenses, Frames, Meta AI Glasses, Contact Lenses, Kids Vision, Brands, Blog, Contact
- Premium dark + gold luxury aesthetic (matte black, gold, glassmorphism)
- Clash Display (heading) + Inter (body)
- Sticky CTA + WhatsApp floating button
- Animated counters, marquee, scroll reveals, parallax
- Contact form → posts to `NEXT_PUBLIC_WEBHOOK_URL` (placeholder; user plugs in n8n later)
- Local SEO + schema (LocalBusiness/Optician + FAQPage)
- Sitemap.xml + robots.txt
- Cloudflare Pages-ready static export

## What's Been Implemented (2025-12)
- **Layout**: Glassmorphic sticky nav + premium footer + Lenis smooth scroll + WhatsApp float + sticky "Book Eye Test" CTA
- **Home page**: Hero with parallax + animated word reveal, animated stats, services bento grid, dual brand marquee, futuristic Meta AI section, Why Choose grid, store experience gallery, testimonials, FAQ accordion with FAQ schema, final CTA
- **All 10 sub-pages** built with shared `PageHero` + section components + FinalCTA
- **Contact form** with full field set, success/error states, POSTs to `NEXT_PUBLIC_WEBHOOK_URL`
- **SEO**: per-page metadata, OG/Twitter cards, LocalBusiness JSON-LD, FAQ JSON-LD, sitemap.js + robots.js
- **Cloudflare ready**: `next.config.mjs` with `output: 'export'`, `images: { unoptimized: true }`, `trailingSlash: true`

## Environment Variables (frontend/.env)
- `NEXT_PUBLIC_WEBHOOK_URL` — n8n contact webhook (placeholder)
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — for wa.me links (placeholder 919999999999)
- `NEXT_PUBLIC_PHONE_NUMBER` — tel: links
- `NEXT_PUBLIC_SITE_URL` — for sitemap/robots base

## Build & Deploy
- Dev: `yarn start` (next dev on :3000) — supervisor managed
- Build: `yarn build` → outputs `/app/frontend/out` for Cloudflare Pages
- Cloudflare Pages settings: build command `yarn build`, output dir `out`

## Backlog (P1/P2)
- P1: Real webhook URL plug-in (when n8n flow is live)
- P1: Replace placeholder phone/WhatsApp with real numbers
- P1: Real boutique photography to replace Unsplash
- P2: Individual blog post pages (/blog/[slug]) with MDX
- P2: Instagram feed embed in footer area
- P2: Before/after lens visual demos (interactive sliders)
- P2: Real Google Maps Place ID embed
- P2: Open Graph image generation per route

## Next Actions
- Plug in real webhook URL, phone, WhatsApp
- Add real Google Maps Place ID + photo gallery
- Author actual blog post bodies (MDX)
