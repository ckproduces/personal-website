# What this is
This is the personal website of Çağrı Okan. It shows his achievements, projects, bio, blogs, etc. Stack is Next JS. Pages are plain React components under `app/`, no markdown rendering.

# Design
For UI changes, read DESIGN.md to learn about the design system, and reuse the tokens it defines (in [app/globals.css](app/globals.css)) across components. [app/style-guide/page.tsx](app/style-guide/page.tsx) renders every shared token and component — check it after any design change.

# Development Rules
1. After every change, create a local git commit to checkpoint states.
2. Run lint and build tests.
3. Maximum LOC is 500. If a file exceeds that, use helpers, utils, and components to keep them under 500.
4. Do not write robotic code that nobody understands. Do not create a type, a class, a helper, or a component if no need.