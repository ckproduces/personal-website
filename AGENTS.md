# What this is
This is the personal website of Çağrı Okan. It shows his achievements, projects, bio, blogs, etc. 

# General Content
0. Stack is Next js.
1. Every page is a TSX file inside /pages. Pages can also be in subfolders. Each page exports `path` and `title`, then exports a default React component for the page body. The path is the URL slug; the title is the document title (shown lowercased in the browser tab).
2. Use predefined markdown-style React components from `components/Md.tsx` for page body content:

   ```
   import { M } from "@/components/Md";

   export const path = "/";
   export const title = "Page title";

   export default function Page() {
     return (
       <M.Page>
         <M.H1>Heading</M.H1>
         <M.P>Body copy.</M.P>
       </M.Page>
     );
   }
   ```

3. Use `<M.Flex>` for flex layout with optional `alignItems`, `justifyContent`, `flexDirection`, and `gap` props. Unitless numeric gaps are treated as `rem`.
4. **Site footer:** edit [`pages/site-footer.tsx`](pages/site-footer.tsx). It must export `path = "/__site-footer"`. Paths that start with `/__` are internal-only (no public URL; they still use the same `path` / `title` contract).
5. Register every content page in [`lib/pages.ts`](lib/pages.ts). App Router files use the `*.page.tsx` extension because `next.config.ts` excludes plain `*.tsx` files from Next routing.
6. For UI changes, read DESIGN.md to learn about the design system.

# Development Rules
1. After every change, create a git commit to checkpoint states.
2. Run lint and build tests.
3. Maximum LOC is 500. If a file exceeds that, use helpers, utils, and components to keep them under 500.
