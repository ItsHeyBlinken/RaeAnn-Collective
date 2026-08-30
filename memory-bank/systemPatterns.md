# System Patterns

## Official Palette (Rae Ann Collective & Rae Ann Weddings)

| Token | Hex | Usage |
|-------|-----|-------|
| `--collective-plum` | `#4e3a4b` | Primary text, footer, RAW CTA buttons |
| `--collective-dusty-purple` | `#8e7a8f` | Muted text, RAW descriptor, hover states |
| `--collective-lilac` | `#cbb7c6` | Footer labels, RAW accent gradient |
| `--collective-cream` | `#f6f2ed` | Page background, footer link text |
| `--collective-sand` | `#d9d2c6` | Dividers, EB beige accent |
| `--collective-champagne` | `#c8a97e` | Link accents, EB gold accent |

## CSS Variables (Collective Shell)
```css
--color-bg: var(--collective-cream);
--color-text: var(--collective-plum);
--color-text-muted: var(--collective-dusty-purple);
--color-divider: var(--collective-sand);
--color-accent: var(--collective-champagne);
```

## Brand Accent Tokens

**Exquisite Bride** (uses champagne + sand from collective palette):
- `--eb-gold: #c8a97e`, `--eb-taupe: #8e7a8f`, `--eb-beige: #d9d2c6`

**Rae Ann Weddings** (full collective palette):
- `--raw-primary: #8e7a8f`, `--raw-secondary: #cbb7c6`, `--raw-dark: #4e3a4b`, `--raw-accent: #c8a97e`

## Section Pattern
Each brand card uses:
- Top accent border (4px brand color gradient)
- Tinted background
- H3 brand name, descriptor, body copy, primary CTA button, secondary text links

## External Links
All outbound brand links use `rel="noopener"` (no `nofollow` — owned properties).

## Accessibility
- Skip link to `#main-content`
- Semantic landmarks: `header`, `main`, `section`, `footer`
- Visible `:focus-visible` outlines on interactive elements
