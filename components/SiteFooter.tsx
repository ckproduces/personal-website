import { MarkdownPage } from "@/components/MarkdownPage";

export function SiteFooter({ content }: { content: string }) {
  return (
    <footer className="page-footer">
      <MarkdownPage content={content} className="md-content md-footer-markdown" />
    </footer>
  );
}
