import { Badge } from "@/components/Badge";
import { Callout } from "@/components/Callout";
import { SmartLink } from "@/components/SmartLink";
import Image from "next/image";
import styles from "./styleguide.module.css";

/* A realistic blog-post scenario: every prose element in reading flow. */
export function ArticleSection() {
  return (
    <>
      <h2>article scenario</h2>
      <p>
        everything below is plain prose markup inside <code>.content</code> —
        the exact rhythm a blog post gets with no extra classes.
      </p>

      <hr />

      <div className={styles.row}>
        <Badge variant="main">essay</Badge>
        <span className="card-meta">july 2026 · 6 min read</span>
      </div>

      <h3>why modular scales beat eyeballing</h3>
      <p>
        every value in a layout answers to some ratio, whether you chose it
        or not. a <strong>modular scale</strong> makes the choice explicit:
        pick a base, pick a ratio, and let <em>every</em> size fall out of
        the ladder. the css stays honest because tokens like{" "}
        <code>--size-23</code> are the only sizes that exist.
      </p>
      <p>
        the same idea shows up in{" "}
        <SmartLink href="https://every-layout.dev">every layout</SmartLink>{" "}
        and in most mature design systems: constraints first, decoration
        never.
      </p>

      <blockquote>
        <p>
          typography is the craft of endowing human language with a durable
          visual form.
        </p>
      </blockquote>

      <h4>what snapping buys you</h4>
      <ul>
        <li>spacing decisions become one-step choices, not debates</li>
        <li>
          unrelated pages end up aligned
          <ul>
            <li>the same gaps reappear everywhere</li>
            <li>screenshots compose cleanly</li>
          </ul>
        </li>
        <li>refactors are mechanical — swap a token, not fifty values</li>
      </ul>

      <h4>how to adopt it</h4>
      <ol>
        <li>pick the ratio that matches your voice</li>
        <li>name the steps after their pixel values</li>
        <li>delete every value that is not on the ladder</li>
      </ol>

      <Callout variant="secondary" title="tip">
        <p>
          rounding to whole pixels keeps borders crisp; the rem conversion
          happens at build time, not in your head.
        </p>
      </Callout>

      <h4>the ladder in code</h4>
      <pre>
        <code>{`const RATIO = 1.125;
const BASE = 16;

const step = (n) => Math.round(BASE * RATIO ** n);
// step(4) → 26, step(8) → 41`}</code>
      </pre>

      <h4>ratios compared</h4>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ratio</th>
              <th>name</th>
              <th>h1 from 18px body</th>
              <th>feel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.125</td>
              <td>major second</td>
              <td>36px</td>
              <td>dense, editorial</td>
            </tr>
            <tr>
              <td>1.2</td>
              <td>minor third</td>
              <td>45px</td>
              <td>balanced</td>
            </tr>
            <tr>
              <td>1.25</td>
              <td>major third</td>
              <td>55px</td>
              <td>loud, poster-like</td>
            </tr>
          </tbody>
        </table>
      </div>

      <figure>
        <Image src="/images/logo.svg" alt="site logo" width={96} height={96} />
        <figcaption>figures carry a caption in small muted text.</figcaption>
      </figure>

      <hr />

      <p>
        <small>
          thanks for reading — reply via{" "}
          <SmartLink href="mailto:cagrokan@gmail.com">email</SmartLink> if
          this sparked anything.
        </small>
      </p>
    </>
  );
}
