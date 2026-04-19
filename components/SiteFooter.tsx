import type { ReactNode } from "react";

export function SiteFooter({ children }: { children: ReactNode }) {
  return (
    <footer className="page-footer">
      <div className="md-content md-footer-markdown">{children}</div>
    </footer>
  );
}
