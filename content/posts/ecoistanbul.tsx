import type { Post } from "@/lib/posts";
import { Figure } from "@/components/blog";
import { Link } from "@/components/Link";

export const meta = {
  slug: "my-journey-to-building-a-green-company",
  title: "my journey to building a green company",
  date: "2023-03-26",
};

function Body() {
  return (
    <>
      <p>
        ecoistanbul was created for{" "}
        <Link href="https://worlddenver.org/world-affairs-challenge/">
          world affairs challenge
        </Link>{" "}
        and reached 6th place worldwide.
      </p>

      <h2>what it was</h2>
      <p>
        initially designed as an android app with four tabs:{" "}
        <strong>directions, accommodations, leisure, eco-tips</strong>.
      </p>
      <Figure
        src="/images/ecoistanbul-ui.png"
        alt="ecoistanbul app first design"
      />

      <p>
        after the results, we redesigned it with a cleaner and more minimal
        interface:
      </p>
      <Figure
        src="/images/ecoistanbul-ui-2.png"
        alt="ecoistanbul app new design"
      />

      <p>
        the app was never fully published, but it shaped my long-term interest
        in ai product development.
      </p>
    </>
  );
}

const post: Post = { ...meta, Body };
export default post;
