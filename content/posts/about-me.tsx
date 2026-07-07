import type { Post } from "@/lib/posts";

export const meta = {
  slug: "about-me",
  title: "me?",
  date: "2026-07-07",
};

function Body() {
  return (
    <>
      <p>
        i&apos;m çağrı okan, and 20.4, and based in istanbul. co-founder @
        dropoutt, tech entrepreneur, ai researcher. i like building, creating,
        and exploring. a secret about me: i&apos;m narcissist enough to tolerate
        excessive levels of cringe if I need to. now your turn.
      </p>
    </>
  );
}

const post: Post = { ...meta, Body };
export default post;
