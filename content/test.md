---
title: Markdown style lab
---

# How this page is meant to be read

This route exists **only** to stress the stylesheet: headings, measure, lists, tables, code, and inline nuance should remain legible when they appear *together*. Treat the prose as a short note on *reading on screens*—not filler—so you can judge spacing, weight, and rhythm with realistic sentences.

If something looks wrong, note **which combination** failed (for example, a list inside a blockquote next to a table), then adjust CSS once rather than chasing isolated edge cases.

---

##! Headings and hierarchy

Sections need predictable steps. On paper, hierarchy is mostly size; on the web, **weight**, *slant*, and whitespace do more work than raw point size. A page that jumps from a quiet paragraph to a shouting headline feels careless; a page that steps down smoothly feels edited.

### Third level: subsections

Use `h3` when the parent `h2` still owns the topic. Readers scan the left edge; inconsistent levels break that motion.

#### Fourth level: fine grain

At `h4` and below, you are labeling *parts* of an argument, not new chapters. Keep titles short: **claim**, not paragraph.

##### Fifth level: rare

Reserve `h5` for dense references, specs, or changelogs where deep nesting is honest.

###### Sixth level: almost a label

If you reach `h6`, ask whether a **definition list**, a table column, or bold lead-ins would read more clearly.

---

##! Emphasis, code, and links in context

A single sentence can carry several inline tools without turning into decoration. Here is **bold** for keywords, *italic* for titles or stress, ***bold italic*** when both apply, and ~~strikethrough~~ when policy changes and old text must remain visible. Inline `code` marks tokens (`fetch`, `--header-seperation-multiplier`) so they do not pretend to be prose.

Links should read naturally: compare a [named link to MDN](https://developer.mozilla.org) with an autolink <https://example.com> and a mail route [email the author](mailto:cagrokan@gmail.com). For the same destination twice, use reference-style links to keep the sentence clean: [W3C HTML spec][htmlspec] and [the same spec again][htmlspec].

[htmlspec]: https://html.spec.whatwg.org/

Line breaks matter when poetry or addresses appear. Two spaces at the end of a line force a break without starting a new paragraph—use sparingly.

---

##! Lists: scanning, nesting, and tasks

Unordered lists suit parallel points:

- Contrast keeps body text readable; **pure black on pure white** is not always optimal.
- Rhythm matters: if every paragraph is one line, nothing signals importance.
- Margins are part of the type; cramped lists look like bugs.

Numbered lists suit sequences:

1. Set the type size and line height for body copy.
2. Tune heading scale so each level is distinct but not theatrical.
3. Walk the page with real content—not “aaaaaaa”—because **stress reveals spacing**.

Nested lists show whether indentation and bullets collide:

- Top-level item about structure
  - Nested detail that belongs under the parent
  - Another detail, still subordinate
- Return to the main thread when the aside ends

Task lists (GFM) map to real editorial work:

- [x] Pick a neutral topic so judgments are about design, not opinion.
- [x] Mix list types in one section to expose alignment bugs.
- [ ] Dark mode pass: check blockquotes, tables, and `pre` on tinted panels.

---

##! Blockquotes and asides

> Typography is the craft of endowing human language with a durable visual form. When a quote runs long, the block should still feel like a single voice: same measure as body text, slightly different tone.

> Nested emphasis inside a quote should survive: *italics* for titles, **bold** for terms, and `code` for exact strings.
>
> > Second-level quoting is uncommon on the web; if it renders, your blockquote borders and padding are probably sane.

---

##! Tables: alignment and density

| Element | Typical role | Watch for |
| --- | :--- | ---: |
| `p` | Continuous reading | Runts, widows, hyphenation |
| `ul` / `ol` | Scannable lists | Bullet alignment, nested indent |
| `table` | Comparable facts | Zebra striping, header contrast |
| `pre` / `code` | Exact strings | Overflow, scrollbars, font choice |

Pipe characters in cells need escaping: use `\|` when the cell must show a literal pipe.

---

##! Code blocks and preformatted text

Short CSS illustrates monospace and padding:

```css
.md-content p {
  max-width: 65ch;
  line-height: 1.6;
}
```

JavaScript can show string handling without nonsense variable names:

```javascript
function excerpt(text, max = 140) {
  const t = text.trim();
  return t.length <= max ? t : `${t.slice(0, max - 1)}…`;
}
```

---

##! Images (site-specific sizing)

This site supports width hints after the image: a modest logo for inline context, then the same asset constrained to a max width.

![Site logo](images/logo.svg)(5)

![Site logo, wider cap](images/logo.svg)(10)

Use `(full)` sparingly for figures that must span the column; here we only demonstrate the syntax on an existing asset.

---

##! Raw HTML (when Markdown is not enough)

The pipeline allows raw HTML for elements Markdown does not model. Use this to verify that prose styles do not fight component defaults.

<sub>Subscript</sub> and <sup>superscript</sup> appear in chemical notation and footnote-style markers. Keyboard shortcuts read better as <kbd>Ctrl</kbd> + <kbd>B</kbd>. Highlights: <mark>mark important phrases</mark> without shouting.

<details>
<summary>Collapsible note on spoilers</summary>
<p>Details blocks hide secondary material. If the summary and body styles clash with your article rhythm, tune <code>details</code> padding and the marker (triangle) separately.</p>
</details>

---

##! Horizontal rules and final checks

Thematic breaks separate *movements*, not every paragraph.

---

Before shipping a theme change, scroll this page top to bottom: if **headings**, *emphasis*, `code`, lists, tables, quotes, tasks, and `<details>` still feel like one system, the CSS is doing its job.
