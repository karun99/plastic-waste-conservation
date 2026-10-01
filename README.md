# Plastic Waste & Its Conservation Strategy

A student project by **Kunda Subramanya Satyanarayana**
Class 9, St John's English Medium School, Satyanarayanapuram, Vijayawada.

An education-first web platform on plastic waste, with six real-world conservation
case studies and an AI tutor. Built for a Pan India Hackathon submission.

## Features

- **M1 — Plastic Literacy:** what plastic is, how common polymers are prepared from
  crude oil or natural gas, and how long they persist.
- **M2 — Case Study Explorer:** six case studies, each on its own page
  (Assam plastic-fee school, Great Pacific Garbage Patch, microplastics in soil,
  IIT Madras plastic roads, plastic bricks, Plastoline plastic-to-fuel).
- **M3 — AI Tutor "Plastic Pal":** an OpenRouter-powered chatbot that answers
  questions about any case study in three short bullets.
- **M4 — Impact Calculator:** client-side estimate of CO₂, oil, and diesel-equivalent
  saved by diverting plastic.
- **M5 — Solution Matcher:** a transparent, rule-based recommender with a scoring
  table you can audit and edit.
- **M6 — Stakeholder Dashboard:** what each stakeholder group needs and which module
  serves it.

Deployable on **Vercel** and **Netlify**.

## Green computing

- Only M3 calls an LLM. Everything else is static or plain JavaScript.
- The chat endpoint runs on the Edge runtime with a small, fast model.
- `max_tokens` is capped at 220, and repeated questions hit a 30-minute cache.
- All case-study pages are statically generated at build time.

## Quick Start

```bash
npm install
cp .env.example .env.local   # add your OPENROUTER_API_KEY
npm run dev
```

Open http://localhost:3000.

Without an API key the site works fully — only the chatbot replies with an
"offline" notice.

## Environment Variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `OPENROUTER_API_KEY` | For the chatbot | API key from https://openrouter.ai/keys |
| `OPENROUTER_MODEL` | No | Any chat model slug; defaults to `google/gemini-2.0-flash-001` |
| `NEXT_PUBLIC_SITE_URL` | No | Sent as `HTTP-Referer` to OpenRouter for attribution |

The key is only read in `lib/openrouter.js` on the server and is never sent to the
browser.

## Deploy

### Vercel
1. Push this repo to GitHub.
2. In Vercel, **Add New → Project** and import the repository.
3. Add `OPENROUTER_API_KEY` under **Settings → Environment Variables**.
4. Deploy. The framework is auto-detected as Next.js; no build overrides needed.

### Netlify
1. Push this repo to GitHub.
2. In Netlify, **Add new site → Import an existing project**.
3. Build command: `npm run build`. Publish directory: leave blank.
4. The `@netlify/plugin-nextjs` plugin is already declared in `netlify.toml`; if
   Netlify asks, let it install the plugin.
5. Add `OPENROUTER_API_KEY` under **Site configuration → Environment variables**.

## Project Structure

```
plastic-waste-conservation/
├── app/
│   ├── layout.js              # shell + metadata
│   ├── page.js                # home
│   ├── plastics/page.js       # M1
│   ├── case-studies/
│   │   ├── page.js            # M2 index
│   │   └── [slug]/page.js     # M2 detail, statically generated
│   ├── calculator/page.js     # M4
│   ├── solutions/page.js      # M5
│   ├── dashboard/page.js      # M6
│   └── api/chat/route.js      # M3 edge route
├── components/                # Navbar, Footer, Chatbot, CaseStudyCard
├── data/                      # caseStudies, plastics, solutions (plain JS)
└── lib/openrouter.js          # OpenRouter client + cache
```

## Scripts

| Command | Action |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint via `next lint` |

## Data Honesty

Figures on the calculator, dashboard, and case-study pages are order-of-magnitude
teaching estimates drawn from public sources (UNEP, OECD, MoRTH, The Ocean Cleanup).
They are labelled as estimates in the UI and are not audited data.

## License

MIT © 2026 Kunda Subramanya Satyanarayana
