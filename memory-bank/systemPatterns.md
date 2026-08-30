# System Patterns

## CSS Variables (Collective Shell)
```css
--color-bg: #faf9f7;
--color-text: #2c2c2c;
--color-text-muted: #5a5652;
--color-divider: #e8e4df;
--color-accent: #9a8a78;
```

## Brand Accent Tokens
**Exquisite Bride:** `--eb-gold: #c9a050`, `--eb-taupe: #9a8a78`, `--eb-beige: #d4c4b0`

**Rae Ann Weddings:** `--raw-lavender: #d8b4e2`, `--raw-sage: #b8d8be`, `--raw-peach: #f5e1da`

## Section Pattern
Each brand card uses:
- Top accent border (4px brand color)
- Tinted background
- H2 brand name, descriptor, body copy, primary CTA button, secondary text links

## External Links
All outbound brand links use `rel="noopener"` (no `nofollow` — owned properties).

## Accessibility
- Skip link to `#main-content`
- Semantic landmarks: `header`, `main`, `section`, `footer`
- Visible `:focus-visible` outlines on interactive elements
