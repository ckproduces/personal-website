import type { Post } from "@/lib/posts";
import { Callout } from "@/components/blog";

export const meta = {
  slug: "notes-on-agentic-systems",
  title: "notes on agentic systems that browse",
  date: "2026-05-02",
};

function Body() {
  return (
    <>
      <p>
        an agent that can read a page, scroll, click, and fill a form is only as
        good as its ability to recover when the page fights back. building{" "}
        <strong>bulut</strong> taught me that the hard part isn&apos;t the acting
        — it&apos;s the perceiving.
      </p>

      <h2>three things that broke first</h2>
      <ol>
        <li>state drift — the model&apos;s idea of the page and the real dom disagree.</li>
        <li>overconfidence — it clicks before it has actually located the target.</li>
        <li>silent failure — an action does nothing and nobody notices.</li>
      </ol>

      <Callout>
        the fix for all three was the same: <strong>observe after every act.</strong>{" "}
        never chain two actions without re-reading the world in between.
      </Callout>

      <h2>where accessibility and agents meet</h2>
      <p>
        the same primitives that let a model navigate a page let a screen-reader
        user navigate it too. designing for one turned out to be designing for
        the other.
      </p>
    </>
  );
}

const post: Post = { ...meta, Body };
export default post;
