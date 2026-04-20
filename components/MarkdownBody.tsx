import { M } from "@/components/Md";
import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function stripNode<T extends { node?: unknown }>(props: T) {
  const { node: _n, ...rest } = props;
  return rest;
}

const markdownComponents: Components = {
  h1: (props) => <M.H1 {...stripNode(props)} />,
  h2: (props) => <M.H2 {...stripNode(props)} />,
  h3: (props) => <M.H3 {...stripNode(props)} />,
  h4: (props) => <M.H4 {...stripNode(props)} />,
  h5: (props) => <M.H5 {...stripNode(props)} />,
  h6: (props) => <M.H6 {...stripNode(props)} />,
  p: (props) => <M.P {...stripNode(props)} />,
  a: (props) => <M.A {...stripNode(props)} />,
  strong: (props) => <M.Strong {...stripNode(props)} />,
  em: (props) => <M.Em {...stripNode(props)} />,
  ul: (props) => <M.Ul {...stripNode(props)} />,
  ol: (props) => <M.Ol {...stripNode(props)} />,
  li: (props) => <M.Li {...stripNode(props)} />,
  hr: (props) => <M.Hr {...stripNode(props)} />,
  blockquote: (props) => <M.Blockquote {...stripNode(props)} />,
  pre: (props) => <M.Pre {...stripNode(props)} />,
  table: (props) => <M.Table {...stripNode(props)} />,
  thead: (props) => <M.Thead {...stripNode(props)} />,
  tbody: (props) => <M.Tbody {...stripNode(props)} />,
  tr: (props) => <M.Tr {...stripNode(props)} />,
  th: (props) => <M.Th {...stripNode(props)} />,
  td: (props) => <M.Td {...stripNode(props)} />,
  code: (props) => {
    const { className, children, ...rest } = stripNode(props);
    if (/\blanguage-/.test(String(className ?? ""))) {
      return (
        <code className={className} {...rest}>
          {children}
        </code>
      );
    }
    return (
      <M.Code className={className} {...rest}>
        {children}
      </M.Code>
    );
  },
};

export function MarkdownBody({
  markdown,
  wrapWithMdPage,
}: {
  markdown: string;
  wrapWithMdPage: boolean;
}) {
  const inner = (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
      {markdown}
    </ReactMarkdown>
  );
  if (wrapWithMdPage) {
    return <M.Page>{inner}</M.Page>;
  }
  return <>{inner}</>;
}
