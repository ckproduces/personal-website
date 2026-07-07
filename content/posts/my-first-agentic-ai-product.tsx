import type { Post } from "@/lib/posts";
import { Callout, Figure } from "@/components/blog";

export const meta = {
  slug: "my-first-agentic-ai-product",
  title: "my first agentic ai product",
  date: "2025-12-05",
};

function Body() {
  return (
    <>
      <p>
        overtime was my first agentic ai product — and the first time building
        software felt less like laying track and more like hiring someone who
        could walk the warehouse on their own.
      </p>

      <p>
        before that, my projects were legacy products in the straightforward
        sense: screens, buttons, predetermined flows. ecoistanbul had four tabs.
        senato had a layout system before it had a third issue. you designed
        every path, coded every edge case, and shipped when the map was
        complete. the product could only do what you explicitly built.
      </p>

      <h2>what changed with agents</h2>
      <p>
        an agentic product inverts that. you do not ask &quot;what screens do we
        need?&quot; you ask &quot;what can this system perceive, decide, and do
        when the world is messy?&quot; the interface becomes a conversation. the
        hard part moves from routing users to closing the loop between intent
        and action.
      </p>

      <Callout>
        <strong>the shift:</strong> legacy products encode paths. agentic
        products encode capability — then recover when reality diverges from the
        plan.
      </Callout>

      <h2>overtime</h2>
      <p>
        we built overtime in 48 hours at a hackathon. the problem was mundane
        and expensive: warehouse workers losing minutes — sometimes hours —
        searching for products across aisles and shelves. overtime is an ai
        assistant that answers in natural language, maps the warehouse, and
        suggests the fastest walking route to what you need.
      </p>

      <Figure
        src="/images/overtime/overtime-banner.png"
        alt="overtime project banner"
      />

      <p>
        this was not a chatbot bolted onto a dashboard. the model reads
        inventory, reasons about location, and acts — query the database, plot a
        route, surface a summary for a manager. when the data was wrong or the
        question was ambiguous, the loop mattered more than the demo: observe,
        adjust, try again.
      </p>

      <p>the stack was deliberately small:</p>
      <ul>
        <li>
          <strong>gemini-2.5-flash-lite</strong> for fast reasoning
        </li>
        <li>
          <strong>google agent development kit</strong> for the agent loop
        </li>
        <li>
          <strong>flask</strong> for the backend
        </li>
        <li>
          <strong>next.js</strong> for the interface
        </li>
      </ul>

      <Figure
        src="/images/overtime/route.jpeg"
        alt="walking route optimization on warehouse map"
      />
      <Figure
        src="/images/overtime/general.jpeg"
        alt="warehouse overview in the overtime interface"
      />

      <h2>from products to agents</h2>
      <p>
        overtime did not feel like adding ai to an old app. it felt like a
        different category of build — closer to notes on agentic systems that
        browse than to the tab-based apps i had shipped before. less time
        drawing flows, more time asking what happens after the first action
        fails.
      </p>

      <p>
        that transition — from specifying every step to specifying every
        capability — is the one i have stayed in since. legacy products taught
        me craft. overtime taught me that the product can move on its own.
      </p>
    </>
  );
}

const post: Post = { ...meta, Body };
export default post;
