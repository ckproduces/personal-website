import { MdHeading } from "@/components/MdHeading";
import Link from "next/link";
import {
  isValidElement,
  type AnchorHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  children?: ReactNode;
  id?: string;
};

function textFromNode(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(textFromNode).join("");
  }
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return textFromNode(node.props.children);
  }
  return "";
}

function slugFromChildren(children: ReactNode): string | undefined {
  const slug = textFromNode(children)
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  return slug || undefined;
}

/** `##! title` → ATX text `! title`; strip `! ` and mark for extra top margin. */
function stripSpacedHeadingMarker(children: ReactNode): {
  displayChildren: ReactNode;
  spaced: boolean;
} {
  const text = textFromNode(children);
  if (!/^\!\s/.test(text)) {
    return { displayChildren: children, spaced: false };
  }
  const stripped = text.replace(/^\!\s*/, "");
  if (stripped === "") {
    return { displayChildren: children, spaced: false };
  }
  return { displayChildren: stripped, spaced: true };
}

function createHeading(level: HeadingLevel) {
  function Heading({ id, children, ...props }: HeadingProps) {
    const { displayChildren, spaced } = stripSpacedHeadingMarker(children);
    return (
      <MdHeading
        level={level}
        id={id ?? slugFromChildren(displayChildren)}
        spaced={spaced}
        {...props}
      >
        {displayChildren}
      </MdHeading>
    );
  }
  Heading.displayName = `MdH${level}`;
  return Heading;
}

function MdPage({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  const cls = ["md-content", className].filter(Boolean).join(" ");
  return (
    <article className={cls} {...props}>
      {children}
    </article>
  );
}

function MdA({
  href,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (!href) {
    return <a {...props}>{children}</a>;
  }
  if (/^https?:\/\//i.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
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
      <a href={href} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}

function MdTable({
  children,
  ...props
}: HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="md-table-wrap">
      <table {...props}>{children}</table>
    </div>
  );
}

function MdDotRule({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const cls = ["md-dot-rule", className].filter(Boolean).join(" ");
  return (
    <div className={cls || undefined} aria-hidden="true" {...props}>
      <span />
      <span />
      <span />
    </div>
  );
}

export const M = {
  Page: MdPage,
  H1: createHeading(1),
  H2: createHeading(2),
  H3: createHeading(3),
  H4: createHeading(4),
  H5: createHeading(5),
  H6: createHeading(6),
  P: (props: HTMLAttributes<HTMLParagraphElement>) => <p {...props} />,
  A: MdA,
  Strong: (props: HTMLAttributes<HTMLElement>) => <strong {...props} />,
  Em: (props: HTMLAttributes<HTMLElement>) => <em {...props} />,
  Ul: (props: HTMLAttributes<HTMLUListElement>) => <ul {...props} />,
  Ol: (props: HTMLAttributes<HTMLOListElement>) => <ol {...props} />,
  Li: (props: HTMLAttributes<HTMLLIElement>) => <li {...props} />,
  Hr: MdDotRule,
  Blockquote: (props: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote {...props} />
  ),
  Code: (props: HTMLAttributes<HTMLElement>) => <code {...props} />,
  Pre: (props: HTMLAttributes<HTMLPreElement>) => <pre {...props} />,
  Table: MdTable,
  Thead: (props: HTMLAttributes<HTMLTableSectionElement>) => (
    <thead {...props} />
  ),
  Tbody: (props: HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody {...props} />
  ),
  Tr: (props: HTMLAttributes<HTMLTableRowElement>) => <tr {...props} />,
  Th: (props: HTMLAttributes<HTMLTableCellElement>) => <th {...props} />,
  Td: (props: HTMLAttributes<HTMLTableCellElement>) => <td {...props} />,
};
