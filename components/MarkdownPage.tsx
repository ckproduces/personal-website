import { remarkMdFlex } from "@/lib/markdown/remark-md-flex";
import Link from "next/link";
import type { Components } from "react-markdown";
import type { AnchorHTMLAttributes } from "react";
import ReactMarkdown from "react-markdown";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";

type MdAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  node?: unknown;
};

function MdLink({ href, children, node: _node, ...rest }: MdAnchorProps) {
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
  table: ({ children, node: _n, ...props }) => (
    <div className="md-table-wrap">
      <table {...props}>{children}</table>
    </div>
  ),
};

export function MarkdownPage({
  content,
  className = "md-content",
}: {
  content: string;
  className?: string;
}) {
  return (
    <article className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkDirective, remarkMdFlex]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
