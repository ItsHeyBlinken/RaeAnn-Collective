# Tech Context

## Stack
- Static HTML5, CSS3, vanilla JavaScript
- Google Fonts: Playfair Display, Montserrat
- nginx:alpine via Docker
- Coolify deployment (same pattern as StressFree client site)

## Key Files
| File | Purpose |
|------|---------|
| `index.html` | Single page content, meta tags, JSON-LD |
| `styles.css` | Design tokens, layout, brand accent sections |
| `script.js` | Smooth scroll, skip-link focus, header shadow |
| `config.js` | Brand URL constants for maintainers |
| `nginx.conf` | Static file serving, gzip, security headers |
| `Dockerfile` | nginx container build |
| `docker-compose.yaml` | Coolify-compatible compose |

## Deploy
1. Push to git remote connected to Coolify
2. Point `raeanncollective.com` DNS to Coolify host
3. Enable SSL in Coolify panel
4. **Coolify → Ports Exposes: `80`** (nginx listens on 80; `3000` causes 502 Bad Gateway)
