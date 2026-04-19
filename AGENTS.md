# What this is
This is the personal website of Çağrı Okan. It shows his achievements, projects, bio, blogs, etc. 

# General Content
0. Stack is Next js.
1. Every page is actually a markdown file inside /pages. Pages can also be in subfolders. Markdown files will be translated into UI with certain rules and components. Every page will be the same in styles, layout, and logic. Markdown files will start with `Path: {path}` and `Title: {title}` (in that order), then the markdown body. The path is the URL slug; the title is the document title (shown lowercased in the browser tab).
2. **Layout directives (remark):** use a **flex** container with optional `align-items`, `justify-content`, and `gap` (unitless numbers are treated as `rem`):

   ```
   :::flex{align-items=center justify-content=space-between gap=1rem}

   inner markdown (paragraphs, lists, etc.)

   :::
   ```

   Kebab-case or camelCase attribute names are accepted (`align-items` or `alignItems`). More custom components can be added the same way (remark directive + handler).
3. **Site footer:** edit [`pages/site-footer.md`](pages/site-footer.md). It must use `Path: "/__site-footer"`. Paths that start with `/__` are internal-only (no public URL; they still use the same `Path` / `Title` header).
4. For UI changes, read DESIGN.md to learn about the design system.

# Development Rules
1. After every change, create a git commit to checkpoint states.
2. Run lint and build tests.
3. Maximum LOC is 500. If a file exceeds that, use helpers, utils, and components to keep them under 500.