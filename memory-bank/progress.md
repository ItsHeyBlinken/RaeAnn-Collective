# Progress Log

## Session: Aug 30, 2026

### Completed
- Initialized memory-bank (projectbrief, productContext, activeContext, techContext, systemPatterns, progress)
- Scaffolded static site: `index.html`, `styles.css`, `script.js`, `config.js`, `favicon.svg`
- Added Docker/nginx deploy stack (`Dockerfile`, `docker-compose.yaml`, `nginx.conf`, `.dockerignore`)
- Built single-page layout: sticky header, hero, Our Story, brand cards, footer
- Exquisite Bride card with gold/taupe accents, CTAs, and deep links (appointments, designers)
- Rae Ann Weddings card with lavender/sage accents, CTAs, and deep links (services, contact)
- SEO: meta tags, canonical, Open Graph, Twitter card, Organization JSON-LD with subOrganization entries
- Accessibility: skip link, semantic landmarks, focus-visible outlines, reduced-motion support
- Responsive: stacked brand cards and footer on mobile, full-width CTAs on small screens
- Added `robots.txt`, `sitemap.xml`, `README.md`

### Reciprocal link status
- **Rae Ann Weddings redesign (staging):** Footer backlink added — "Division of Rae Ann Collective" → `https://www.raeanncollective.com` (live when redesign launches)
- **Exquisite Bride:** Pending — **Exquisite Bride web team** (no repo access). Match Rae Ann Weddings footer exactly:
  - Visible line: `Division of Rae Ann Collective`
  - Link URL: `https://www.raeanncollective.com`
  - Link anchor text: `Rae Ann Collective` (with plain text `Division of ` before the link)
  - Attributes: `rel="noopener noreferrer"`

### Pending (client)
- Rae Ann Weddings domain cutover — update URLs in `index.html` and `config.js`
- Apply official palette to Rae Ann Weddings main site at rebrand launch
- Optional v2: collective logo, hero/brand photography

### Session update (Aug 30, 2026 — Rae Ann Weddings cutover)
- Updated all links and copy from Stress Free Events to **Rae Ann Weddings and Design** at raeannweddings.com
- Brand card: new services (Full/Partial Planning, Wedding Day Management), redesign messaging
- Our Story: added paragraph with contextual link to raeannweddings.com
- Updated meta tags, JSON-LD, config.js, memory bank

### Session update (Aug 30, 2026 — production launch)
- Site live at raeanncollective.com after Coolify **Ports Exposes** set to `80` (was `3000`, caused 502 Bad Gateway)

### Session update (Aug 30, 2026 — deploy fix)
- Removed `nginx.conf` from `.dockerignore` so Docker build can COPY it (Coolify deploy was failing)
- Dockerfile: remove default nginx config before applying project config
- docker-compose: added `expose: "80"` for Coolify proxy routing

### Session update (Aug 30, 2026 — story photos complete)
- Added Rae photo (`assets/Rae.jpg`) with caption **Janet Rae**; paired with Theresa Ann in two-column grid

### Session update (Aug 30, 2026 — reciprocal backlink)
- Documented Rae Ann Weddings redesign footer link to raeanncollective.com (staging; pending production launch)
- Added Ann photo (`assets/Ann.jpg`) to Our Story

### Session update (Aug 30, 2026 — Meaning Behind Rae Ann)
- Added full client story (Rae = aunt, Ann = grandmother) under Our Story
- Prepared `.story-photos` grid for client images when delivered

### Session update (Aug 30, 2026 — name origin in Our Story)
- Added paragraph explaining Rae Ann honors two beloved family members, from the middle name of each

### Session update (Aug 30, 2026 — Our Story rewrite)
- Replaced Our Story with collective-focused copy (intention, legacy, curated brands)
- Removed brand-specific inline links from Our Story; Rae Ann Weddings paragraph to be added at rebrand launch

### Session update (Aug 30, 2026 — pre-launch link fix)
- Reverted Rae Ann Weddings links to live **stressfree-events.com** (redesign not yet on production)
- Restored production-aligned copy: Stress Free Events & Weddings, 90-day planning, Wedding Club
- Documented post-launch swap targets in `config.js` and memory bank

### Session update (Aug 30, 2026 — RAW redesign copy sync)
- (Superseded for production links/copy until rebrand launch — staging targets documented in activeContext.md)

### Session update (Aug 30, 2026 — logo)
- Added `assets/Rae Ann Logo Suite - 3.png` to site header and hero
- Updated Organization JSON-LD, Open Graph image, and apple-touch-icon
- Applied official Rae Ann Collective palette to site shell (`styles.css`, `favicon.svg`)
- Confirmed palette is shared with Rae Ann Weddings; updated RAW brand card to use plum/lilac/dusty-purple/champagne (replacing old lavender/sage Stress Free colors)
- Updated `memory-bank/systemPatterns.md` and `activeContext.md` with palette tokens
