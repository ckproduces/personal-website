import type { Root } from "mdast";
import type { ContainerDirective } from "mdast-util-directive";
import { h } from "hastscript";
import { visit } from "unist-util-visit";

/**
 * Container directive for flex layouts. Use in markdown:
 *
 * :::flex{align-items=center justify-content=space-between flex-direction=column gap=1rem}
 * markdown **inside** the flex container
 * :::
 *
 * Supported attributes (kebab-case or camelCase):
 * - align-items / alignItems
 * - justify-content / justifyContent
 * - flex-direction / flexDirection
 * - gap (unitless numbers get `rem`, per DESIGN.md)
 */
export function remarkMdFlex() {
  return (tree: Root) => {
    visit(tree, "containerDirective", (node: ContainerDirective) => {
      if (node.name !== "flex") return;

      const style = buildFlexStyleRecord(node.attributes ?? {});
      const hast = h("div", {
        className: ["md-flex"],
        style,
      });

      const data = node.data ?? (node.data = {});
      data.hName = hast.tagName;
      data.hProperties = hast.properties;
    });
  };
}

function getAttr(
  attrs: Record<string, string | null | undefined>,
  kebab: string,
  camel: string,
): string | undefined {
  const v = attrs[kebab] ?? attrs[camel];
  if (v === null || v === undefined || v === "") return undefined;
  return v;
}

function normalizeGap(value: string): string {
  const t = value.trim();
  if (/^\d+(\.\d+)?$/.test(t)) {
    return `${t}rem`;
  }
  return t;
}

function buildFlexStyleRecord(
  attrs: Record<string, string | null | undefined>,
): Record<string, string> {
  const style: Record<string, string> = { display: "flex" };

  const align = getAttr(attrs, "align-items", "alignItems");
  if (align) {
    style.alignItems = align;
  }

  const justify = getAttr(attrs, "justify-content", "justifyContent");
  if (justify) {
    style.justifyContent = justify;
  }

  const flexDir = getAttr(attrs, "flex-direction", "flexDirection");
  if (flexDir) {
    style.flexDirection = flexDir;
  }

  const gap = getAttr(attrs, "gap", "gap");
  if (gap) {
    style.gap = normalizeGap(gap);
  }

  return style;
}
