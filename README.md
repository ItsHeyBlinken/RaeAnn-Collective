# Rae Ann Collective

Single-page directory site for the Rae Ann Collective umbrella brand, linking to **Exquisite Bride** and **Rae Ann Weddings**.

**Live target:** [raeanncollective.com](https://www.raeanncollective.com/)

## Local preview

Open `index.html` in a browser, or run via Docker:

```bash
docker compose up --build
```

Then visit `http://localhost`.

## Brand URL updates

When Rae Ann Weddings domain cutovers from stressfree-events.com, update URLs in:

- `index.html` (all Rae Ann Weddings links + JSON-LD)
- `config.js`

## Deploy

Push to git; Coolify builds from `Dockerfile` and serves via nginx on port 80.

## Reciprocal links (manual)

Add footer/About links on child sites pointing back to raeanncollective.com for full SEO benefit.
