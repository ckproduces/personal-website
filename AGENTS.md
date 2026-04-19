# What this is
This is the personal website of Çağrı Okan. It shows his achievements, projects, bio, blogs, etc. 

# General Content
0. Stack is Next js.
1. Every page is actually a markdown file inside /pages. Pages can also be in subfolders. Markdown files will be translated into UI with certain rules and components. Every page will be the same in styles, layout, and logic. Markdown files will start with `Path: {path}` and `Title: {title}` (in that order), then the markdown body. The path is the URL slug; the title is the document title (shown lowercased in the browser tab).
2. For UI changes, read DESIGN.md to learn about the design system.

# Development Rules
1. After every change, create a git commit to checkpoint states.
2. Run lint and build tests.
3. Maximum LOC is 500. If a file exceeds that, use helpers, utils, and components to keep them under 500.