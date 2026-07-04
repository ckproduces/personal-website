import { Content } from "@/components/Content";
import { SmartLink } from "@/components/SmartLink";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Style guide — Çağrı Okan",
};

const COLORS = [
  { name: "Main", token: "--color-main", hex: "#E92E3E" },
  { name: "Secondary", token: "--color-secondary", hex: "#E9B72E" },
  { name: "Black", token: "--color-black", hex: "#0E0103" },
  { name: "White", token: "--color-white", hex: "#FFFFFF" },
];

const TYPE_STEPS = [
  { tag: "h1", token: "--font-size-h1" },
  { tag: "h2", token: "--font-size-h2" },
  { tag: "h3", token: "--font-size-h3" },
  { tag: "h4", token: "--font-size-h4" },
  { tag: "h5", token: "--font-size-h5" },
  { tag: "h6", token: "--font-size-h6" },
  { tag: "body", token: "--font-size-body" },
];

const SPACE_STEPS = [
  "--space-1",
  "--space-2",
  "--space-4",
  "--space-8",
  "--space-16",
  "--space-32",
  "--space-64",
  "--space-128",
];

export default function StyleGuidePage() {
  return (
    <Content>
      <h1>Style guide</h1>
      <p>
        A living reference for the design tokens defined in{" "}
        <code>DESIGN.md</code> and the shared components built on top of
        them. Check this page whenever a component changes to confirm the
        system still reads as one thing.
      </p>

      <hr />

      <h2 className="section-heading">Colors</h2>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--space-16)",
          listStyle: "none",
          paddingInlineStart: 0,
        }}
      >
        {COLORS.map((color) => (
          <li key={color.token} style={{ width: "9rem" }}>
            <div
              style={{
                height: "4rem",
                borderRadius: "var(--space-8)",
                background: `var(${color.token})`,
                border: "var(--space-1) solid color-mix(in srgb, var(--color-black) 20%, transparent)",
              }}
            />
            <p style={{ margin: "var(--space-8) 0 0" }}>
              {color.name}
              <br />
              <code>{color.hex}</code>
            </p>
          </li>
        ))}
      </ul>

      <hr />

      <h2 className="section-heading">Type scale</h2>
      {TYPE_STEPS.map((step) => (
        <p
          key={step.token}
          style={{
            fontSize: `var(${step.token})`,
            margin: "0 0 var(--space-8)",
          }}
        >
          {step.tag} — <code>{step.token}</code>
        </p>
      ))}

      <hr />

      <h2 className="section-heading">Spacing scale</h2>
      <ul style={{ paddingInlineStart: 0, listStyle: "none" }}>
        {SPACE_STEPS.map((token) => (
          <li
            key={token}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-16)",
              marginBlockEnd: "var(--space-8)",
            }}
          >
            <div
              style={{
                width: `var(${token})`,
                height: "var(--space-16)",
                background: "var(--color-main)",
                flexShrink: 0,
              }}
            />
            <code>{token}</code>
          </li>
        ))}
      </ul>

      <hr />

      <h2 className="section-heading">Headings</h2>
      <h1>Heading one</h1>
      <h2>Heading two</h2>
      <h3>Heading three</h3>
      <h4>Heading four</h4>
      <h5>Heading five</h5>
      <h6>Heading six</h6>

      <hr />

      <h2 className="section-heading">Text and links</h2>
      <p>
        A paragraph can carry <strong>bold text</strong>,{" "}
        <em>italic text</em>, inline <code>code</code>, and a link such as{" "}
        <SmartLink href="https://developer.mozilla.org">
          a link to MDN
        </SmartLink>{" "}
        or an internal one to the{" "}
        <SmartLink href="/">home page</SmartLink>.
      </p>

      <h2 className="section-heading">Lists</h2>
      <ul>
        <li>Unordered item one</li>
        <li>Unordered item two</li>
        <li>
          Unordered item with a nested list
          <ul>
            <li>Nested item one</li>
            <li>Nested item two</li>
          </ul>
        </li>
      </ul>
      <ol>
        <li>Ordered item one</li>
        <li>Ordered item two</li>
        <li>Ordered item three</li>
      </ol>

      <h2 className="section-heading">Blockquote</h2>
      <blockquote>
        Typography is the craft of endowing human language with a durable
        visual form.
      </blockquote>

      <h2 className="section-heading">Table</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Element</th>
              <th>Typical role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>p</code>
              </td>
              <td>Continuous reading</td>
            </tr>
            <tr>
              <td>
                <code>table</code>
              </td>
              <td>Comparable facts</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="section-heading">Code block</h2>
      <pre>
        <code>{`function excerpt(text, max = 140) {
  const t = text.trim();
  return t.length <= max ? t : \`\${t.slice(0, max - 1)}…\`;
}`}</code>
      </pre>

      <h2 className="section-heading">Image</h2>
      <Image src="/images/logo.svg" alt="" width={80} height={80} />
    </Content>
  );
}
