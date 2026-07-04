# Design system

Every UI value comes from a token in [app/styles/tokens.css](app/styles/tokens.css). Nothing is eyeballed: if a size, color, or weight is not a token, it does not ship. [app/style-guide](app/style-guide/page.tsx) renders the whole system — check it after any design change.

Files:
- `app/styles/tokens.css` — all custom properties (the only place raw values live)
- `app/styles/content.css` — prose styles for `.content` (articles, blog posts)
- `app/styles/components.css` — component classes
- `app/globals.css` — base element styles, page shell, imports
- `components/` — thin React wrappers (Button, Input, Select, Checkbox, Radio, Switch, Badge, Callout, Card, Slot, Content, SmartLink, Footer)

# Units

Author everything in **px**. `postcss-pxtorem` (see `postcss.config.mjs`) converts values ≥ 2px to rem at build time, so the site still scales with the user's root font size. 1px hairlines and media-query breakpoints intentionally stay px.

# Colors

Brand colors:
- Main: `#E92E3E`
- Secondary: `#E9B72E`
- Black: `#0E0103`
- White: `#FFFFFF`

Everything else derives from these four:
- **Main / Secondary scales, 100–900.** 500 is the pure color. Each step below mixes in another 20% white; each step above another 20% black. Mixed in oklab for a perceptually even ramp.
- **Gray ramp, 17 steps** (`gray-100` … `gray-900`, in 50s). `gray-N` is N/10 % black over white — gray-450 = 45% black. The black's faint red cast keeps grays warm and on-brand.
- **Alpha ramps.** `black-a-N` / `white-a-N` mirror the gray steps as translucent colors: `black-a-300` over white renders exactly like `gray-300`, but alphas also work over color and imagery.

Semantic aliases (`--color-bg`, `--color-fg`, `--color-fg-muted`, `--color-border`, `--color-surface`, …) are the tokens components should reach for first. Light theme only.

Main doubles as the error/danger color (it is red); Secondary marks tips and highlights.

# Modular scale

One global ladder for every dimension: **base 16px, ratio 1.125 (major second)**, rounded to whole px. Below 8px the ladder continues by halving (8 → 4 → 2 → 1).

Steps: 1, 2, 4, 8, 9, 10, 11, 13, 14, 16, 18, 20, 23, 26, 29, 32, 36, 41, 46, 52, 58, 66, 74, 83, 94, 105, 118, 133.

Tokens are named by value — `--size-23` is 23px — so a step can never be referenced wrong. **Font sizes, spacings, paddings, margins, gaps, radii, and control dimensions all snap to a step.** If a design needs a value that is not on the ladder, pick the nearest step instead.

# Type

- Family: **Onest** (Google Fonts, variable) via `--font-sans`; `--font-mono` is the system mono stack.
- Sizes (all scale steps): caption 13 · small 14 · ui 16 · **body 18** · h6 20 · h5 23 · h4 26 · h3 29 · h2 32 · h1 36.
- Weights: regular 400 (body) · medium 500 (controls, emphasis) · semibold 600 (headings).
- Line height: 1.6 body · 1.25 headings · 1.2 controls.
- Tracking: 0 body · -0.01em headings.
- **Everything renders lowercase** (`text-transform: lowercase` on `html`). `code`, `pre`, `kbd`, `samp` are exempt — code is case-sensitive.

# Shape, motion, focus

- Radii: small 4 · medium 8 · full 999 (pills, knobs).
- Borders: thin 1px · thick 2px. Surfaces are flat — borders, not shadows.
- Motion: 120ms (hover feedback) · 200ms (state changes), `ease`.
- Focus: 2px solid black outline, offset 2px, on `:focus-visible` only.

# Page

- Content column: `min(100% - 36px, 736px)`, centered.
- `.page-shell` wraps every page; `.content` provides prose rhythm.

# Components

Classes live in `components.css`; React wrappers in `components/` add typed variants only — no logic beyond class composition.

- **Button** — variants: primary (main), secondary, outline, ghost; sizes: small / medium / large; disabled at 0.45 opacity.
- **Input / Select** — 1px strong border, medium radius; error via `aria-invalid`; use inside `.field` with a label plus `.field-hint` / `.field-error`.
- **Checkbox / Radio / Switch** — 18px boxes, main-colored when checked; wrap with `.label-inline` for a clickable row.
- **Badge** — neutral, main, secondary, outline; caption size, pill shape.
- **Callout** — note (neutral), main (heads-up), secondary (tip); optional title.
- **Card** — bordered container; pass `href` to make the whole surface a link.
- **Slot** — dashed placeholder reserving space for future content.
- **kbd** — styled globally, keyboard-key look.
- Tables, blockquotes, code blocks, figures, lists, `hr` are plain elements styled by `content.css` — no components needed.
