# design system

A minimal system derived from four seeds. Everything on the site is built from
these tokens — there are no ad-hoc values in component CSS.

## seeds

| seed        | value                                             |
| ----------- | ------------------------------------------------- |
| main color  | `#ff0000` (→ scaled into a 50–900 ramp)           |
| type scale  | 1.125 modular scale, 16px base                    |
| space scale | 4px base unit, stepped in multiples of 4          |
| font        | Inter Tight (Google Fonts)                        |

Authoring is in `px`; `postcss-pxtorem` converts to `rem` at build time so the
site still scales with the user's root font size. 1px hairlines stay real px.

## color

`#ff0000` is `--red-500`, the anchor of a perceptual ramp:

```
--red-50  #fff5f5   --red-400 #ff4747   --red-800 #7a0000
--red-100 #ffdfdf   --red-500 #ff0000   --red-900 #4d0000
--red-200 #ffb8b8   --red-600 #d40000
--red-300 #ff8585   --red-700 #a80000
```

Warm neutrals (`--ink-50 … --ink-950`) are tuned toward the red-tinted paper
background `#fff9fa`. Raw tokens are mapped to semantic roles — `--color-text`,
`--color-text-muted`, `--color-accent`, `--color-line`, etc. — and components
only ever reference the roles.

## type — 1.125 modular scale

```
--text-xs   12.64px    --text-lg   20.25px
--text-sm   14.22px    --text-xl   22.78px
--text-base 16px       --text-2xl  25.63px
--text-md   18px       --text-3xl  28.83px
```

Line heights: `--leading-tight` 1.2 · `--leading-snug` 1.4 · `--leading-normal`
1.65. Weights: 400 / 500 / 600.

## space — 4-base scale

`--space-1` 4px, `--space-2` 8px, `--space-3` 12px, `--space-4` 16px,
`--space-5` 20px, `--space-6` 24px, `--space-8` 32px, `--space-10` 40px,
`--space-12` 48px, `--space-16` 64px, `--space-20` 80px, `--space-24` 96px.
Radii (`--radius-sm` 4px, `--radius-md` 8px) sit on the same grid.

## layout

The whole site is `700px` wide (`--content-width`) via `.page-shell`. When the
viewport is narrower than the content, it falls back to `95%` — a single rule:

```css
.page-shell { width: 700px; max-width: 95%; margin: 0 auto; }
```

Everything is lowercase by design (`text-transform: lowercase` on `html`).

## components

- **Link** (`components/Link.tsx`) — one link for the site; external opens a new
  tab, internal routes via `next/link`.
- **Section / EntryRow** (`components/Section.tsx`) — labeled homepage sections
  and portfolio rows.
- **blog content** (`components/blog.tsx`) — `Callout`, `Figure`: custom
  components composed directly inside post bodies.

## content model

Posts are plain TSX (no markdown), so any component can be used in a post body.
Each file under `content/posts/` default-exports a `Post` and is registered in
`lib/posts.ts`. Portfolio data lives in `lib/site.ts`.
