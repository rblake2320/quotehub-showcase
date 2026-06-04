# QuoteHub Session Handoff — 2026-06-04
**READ THIS FIRST in every new session focused on QuoteHub**

---

## CRITICAL — LinkedIn Messages Are FINAL, DO NOT REWRITE

Two messages drafted and locked. Send as-is.

**To John Xu (Creative Strategist, MrBeast):**
Used his hiring post as hook. Angle: "biggest thing ever done on YouTube."
> "Hey John, saw your post about the role you're hiring for — I'm not applying, but what you described is exactly why I'm reaching out. You said you care more about how someone thinks than where they've worked. Fair enough — so let me show you. I have a concept for a single YouTube event that I genuinely believe could be the biggest thing ever done on the platform. Not the most expensive. Not the most produced. The most watched, the most talked about, and the one that keeps paying back long after it's over. It touches everything Beast Industries is building — the core channel, the fintech side, brand expansion, the creator market, and a space in tech nobody has walked into at this scale yet. I don't want the job. I want 20 minutes with Jimmy to see if this is something he'd want to be the one to do — because nobody else can. If you're the wrong door for this I completely understand. But if there's a way to get this in front of him, I think it's worth knowing about. — Craig"

**To Beau Avril (organized Beast Industries executive breakfast):**
His post referenced membership programs + creator platform = directly what Craig is building.
> "Hey Beau, saw your post about the executive breakfast — specifically the membership programs and the new creator platform connecting creators, brands, and fans. That caught my attention because I have been working on something that maps directly to both. I reached out to a few people on the team hoping this gets to the right person. You might be it. I am not looking for a job. I want to bring an opportunity — one event, designed around what Beast Industries is already building, that touches the core business, production, fintech, brand expansion, and opens a revenue stream in the creator and tech space that has not been approached at this scale. The potential return does not stop after the event. That is the design. I do not want to pitch a gatekeeper — I would want 20 minutes with Jimmy directly because the concept only makes sense explained from the ground up. Is there a way to get this in front of him? — Craig"

---

## BeastAI Concept — CONFIDENTIAL (full doc: docs/BEAST_AI_HACKATHON.md)

DO NOT give away mechanism in any pitch. Numbers to hint only:
- $50M+ net positive year one (full sponsor model)
- $8.5M/year ongoing savings every year
- World record prize pool
- 1.3 billion people reach (Beast Industries own verified number)
- 492M YouTube subscribers
- Solves 60+ open Beast Industries hiring roles → 6-10 AI operators
- Subscriber milestone: race to 500M/600M live, $1/sub prize winner on stage
- Speakers: Jensen Huang, Sam Altman, Dario Amodei, Lucy Guo, Aravind Srinivas
- Walt Disney ecosystem model — every piece feeds every other piece
- BeastAI Olympics = SEPARATE bigger concept, NOT in initial pitch

Beast Industries contacts (priority order):
1. Beau Avril — executive breakfast organizer, talks membership programs publicly
2. John Xu — Creative Strategist, hiring post hook
3. Jeff Housenbold — CEO Beast Industries

---

## QuoteHub — Current State

### Repos
- rblake2320/words-of-wisdom1 — James Dumoulin site, LIVE on Manus at words-of-wisdom.manus.space
- rblake2320/garyvee-daily — Private, seed data exists, NOT deployed on Manus yet
- rblake2320/quotehub-showcase — Pitch/marketing site with all docs

### Gary Vee Demo (LOCAL ONLY)
- Was running at http://192.168.12.213:8892
- File: ~/ai-business/garyvee-preview/app.py
- Restart: `fuser -k 8892/tcp && nohup ~/miniconda3/bin/python ~/ai-business/garyvee-preview/app.py > /tmp/garyvee_preview.log 2>&1 &`
- 50 quotes, 17 topics, real YouTube thumbnails, email capture modal, topic filters

### AI Adviser (words-of-wisdom1)
- Files pushed: server/aiRouter.ts, server/quoteIndex.ts, client/src/pages/Adviser.tsx
- NOT active yet — needs GROQ_API_KEY added in Manus environment variables
- Model: llama-3.1-8b-instant via Groq (free tier)

### Architecture Decision — IMPORTANT
- Mood selector belongs on THE HUB, not individual creator pages
- Creator pages (James, Gary) = storefronts / profiles
- Hub = central app where user picks mood, gets routed across all creators

### Revenue Streams
1. Consumer subscriptions: Free / $4.99 Personal / $9.99 Family (6 people, 12 quotes/day) / $19.99 Premium (voice audio)
2. Creator: setup fee + low monthly + 70% revenue share
3. QuoteHub Convert SaaS: $49-499/mo — AI converts back catalogs
4. Ad revenue (free tier + sponsored series)
5. Political campaigns: $15-30M per election cycle
6. Corporate wellness (B2B2C)
7. QuoteHub Learn (test prep: Bar, MCAT, CPA, SAT)

### Creator Pipeline
- Hustle: Gary Vee, James Dumoulin, CT Fletcher, Tony Robbins, Eric Thomas, David Goggins, Jocko
- Faith: Kirk Franklin, TD Jakes, Joel Osteen, Steven Furtick, Joyce Meyer
- Prestige: Obamas (Barack 130M+, Michelle 50M+)
- Pitch order: James (live) → Gary (demo) → MrBeast (BeastAI deal)

---

## Next Session Priorities (QuoteHub focus)

1. **Send LinkedIn messages** to John Xu and Beau Avril — messages are final, copy/paste exact text above
2. **Deploy garyvee-daily on Manus** — repo exists at rblake2320/garyvee-daily, needs Manus project setup
3. **Add GROQ_API_KEY to Manus** for words-of-wisdom1 AI Adviser to activate
4. **Build QuoteHub Hub page** — central hub with mood selector routing across all creators
5. **QuoteHub Convert pipeline** — YouTube transcript scraper + LLM quote extractor (Cosmos-Reason2-8B on Spark1:8000 is ideal for this)

---

## Other Active Projects (not QuoteHub focus)

- **Vigil**: Audio description platform, running at :8896, Elgato 4K X source, YOLO11n CPU, Piper TTS → HDMI. Patent #12 target. Needs weapon capture session.
- **CheatVision**: Paused, starts with `cd ~/ai-business/cheatvision && python viewer.py`
- **Cosmos-Reason2-8B**: Running on Spark1:8000 (Docker NIM, verified working)
- **Patent #12**: $65 filing at patentcenter.uspto.gov — Vigil passive audio description

---

## GitHub PAT location
~/.config/ai-army/mcp-keys.env and ~/.docker/mcp/.env

---
*Updated 2026-06-04 — QuoteHub focus session*
