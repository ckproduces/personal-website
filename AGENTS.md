# What this is
This is the personal website of Çağrı Okan. It shows his achievements, projects, bio, blogs, etc. 

# General Content
0. Stack is Next js.
1. **Markdown pages (default):** Add a `.md` file under [`content/`](content/). At build time, every markdown file is registered as a site page: the URL path mirrors the file path relative to `content/` (see rules below). Each file must start with YAML frontmatter that includes `title` (document title; shown lowercased in the browser tab). Page body is Markdown. Rendering uses the same visual components as the legacy `M.*` API via [`components/MarkdownBody.tsx`](components/MarkdownBody.tsx) (headings, paragraphs, links, lists, etc. map to [`components/Md.tsx`](components/Md.tsx)). **Images:** after a normal `![alt](path)`, append `(full)` for full width (`width: 100%`) or `(N)` with a number for `width: 100%` and `max-width: Nrem` (e.g. `![caption](photo.png)(10)`). Implemented in [`lib/preprocessMarkdown.ts`](lib/preprocessMarkdown.ts). **Headings:** use `##! section title` (bang immediately after hashes) to apply extra top margin (`--header-seperation-multiplier`); plain `## section title` does not. Normalization is in [`lib/preprocessMarkdown.ts`](lib/preprocessMarkdown.ts); stripping and layout are in [`components/Md.tsx`](components/Md.tsx) / [`app/globals.css`](app/globals.css).
2. **Path mapping:** Trailing `index.md` names the enclosing directory’s URL (e.g. `content/index.md` → `/`, `content/docs/index.md` → `/docs`). Any other `*.md` maps to a path matching its path without extension (e.g. `content/about.md` → `/about`, `content/foo/bar.md` → `/foo/bar`).
3. **Internal-only routes:** Files whose URL would start with `/__` are not listed in public routes but are still registered. The site footer must live at [`content/__site-footer.md`](content/__site-footer.md) (URL `/__site-footer`). It renders Markdown **without** the main article wrapper (`M.Page`), since the footer shell already applies `md-content` styles.
4. **TSX pages (when needed):** Interactive or non-Markdown pages stay as modules under [`pages/`](pages/) exporting `path`, `title`, and a default React component. Register each TSX page in [`lib/pages.ts`](lib/pages.ts) (markdown discovery runs first; do not duplicate a path). App Router entry files use the `*.page.tsx` extension because [`next.config.ts`](next.config.ts) limits routing to those extensions.
5. For UI changes, read DESIGN.md to learn about the design system.

# Development Rules
1. After every change, create a git commit to checkpoint states.
2. Run lint and build tests.
3. Maximum LOC is 500. If a file exceeds that, use helpers, utils, and components to keep them under 500.
