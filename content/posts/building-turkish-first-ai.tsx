import type { Post } from "@/lib/posts";
import { Callout } from "@/components/blog";
import { Link } from "@/components/Link";

export const meta = {
  slug: "building-turkish-first-ai",
  title: "why i'm building turkish-first ai",
  date: "2026-06-18",
};

function Body() {
  return (
    <>
      <p>
        most language models treat turkish as an afterthought — a rounding error
        in a training set that is overwhelmingly english. the result is
        assistants that are technically multilingual but practically clumsy: off
        by a suffix here, tone-deaf to context there.
      </p>

      <Callout>
        <strong>the thesis:</strong> a model that is good <em>for</em> a language
        has to be built <em>from</em> that language, not translated into it.
      </Callout>

      <h2>what turkish-first actually means</h2>
      <p>
        it is not a bigger dictionary. it is data, evaluation, and product
        decisions that start from turkish usage — morphology, agglutination, and
        the way people actually write online. at{" "}
        <Link href="https://cisimcik.com">cisimcik ai labs</Link> we treat this
        as the default case, not the edge case.
      </p>

      <h3>the near-term work</h3>
      <p>
        practical assistants first: things that read a page, answer a question,
        or draft a reply without the seams showing. capability follows utility.
      </p>
    </>
  );
}

const post: Post = { ...meta, Body };
export default post;
