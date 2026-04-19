import Link from "next/link";
import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function MdLink({
  href,
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (!href) {
    return <a {...rest}>{children}</a>;
  }
  if (/^https?:\/\//i.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  if (
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  ) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }
  return <Link href={href}>{children}</Link>;
}

const components: Components = {
  a: MdLink,
  table: ({ children, ...props }) => (
    <div className="md-table-wrap">
      <table {...props}>{children}</table>
    </div>
  ),
};

export function MarkdownPage({ content }: { content: string }) {
  return (
    <article className="md-content">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </article>
  );
}
