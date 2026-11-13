# Architecture

Plastic Waste Conservation Strategy is a Next.js 14 App Router site that teaches
Class 9 students where plastic comes from, what it does to ecosystems, and which
conservation strategies actually work. It also ships a small AI tutor.

## Routes

| Route | Content |
|---|---|
| `/` | Landing page and learning path |
| `/learn` | Plastic literacy: polymers, problems, lifetimes |
| `/impact` | Impact calculator backed by `data/plastics.js` |
| `/solutions` | Strategy matcher and stakeholder map |
| `/case-studies` | Explorer over six real interventions |
| `/chat` | "Plastic Pal" tutor |

## Modules

| Path | Responsibility |
|---|---|
| `app/*` | Route segments and server components |
| `components/*` | Navbar, footer, case-study explorer, chatbot |
| `data/plastics.js` | Polymer reference data, problems, impact factors |
| `data/solutions.js` | Problems, solutions and stakeholder lists |
| `data/caseStudies.js` | Six case studies plus the derived tag filter |
| `lib/openrouter.js` | Server-side tutor call: prompt, cache, error handling |

## Tutor flow

```
browser → /chat → askOpenRouter(message, caseStudyContext)
        → in-process LRU cache (30 min, 50 entries)
        → OpenRouter chat-completions (google/gemini-2.0-flash-001 by default)
        → reply text
```

The key is read from `OPENROUTER_API_KEY` on the server only. Missing keys
return a readable "offline" message rather than failing the page, and provider
errors return a short diagnostic instead of throwing.

## Trust boundaries

- No provider key reaches the browser; `lib/openrouter.js` is server-only.
- Case-study context is bounded before it enters the system prompt.
- Answers are capped by `max_tokens`, so a stuck client cannot run up spend.
- All content data is static and reviewed in-repo, so the tutor is grounded in
  the same facts the pages render.

## Verification

```bash
npm test
npm run build
```

The suite checks the data invariants (unique case-study slugs, required fields,
positive impact factors) and the tutor contract (offline path, request shape,
cache de-duplication, HTTP error text, empty completion fallback). CI runs both
commands on Node 22 for every push and pull request.
