import { Link } from "@/components/Link";
import { Section, EntryRow } from "@/components/Section";
import { allPosts, formatDate } from "@/lib/posts";
import {
  intro,
  experience,
  involvement,
  projects,
  education,
  connections,
} from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      <header className="masthead">
        <h1 className="masthead__name">
          çağrı okan<span className="dot">.</span>
        </h1>
        <p className="masthead__intro">{intro}</p>
      </header>

      <Section label="writing">
        <div className="writing">
          {allPosts.length === 0 ? (
            <p className="writing__empty">nothing published yet.</p>
          ) : (
            allPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="writing__item"
              >
                <span className="writing__title">{post.title}</span>
                <span className="writing__date">{formatDate(post.date)}</span>
              </Link>
            ))
          )}
        </div>
      </Section>

      <Section label="experience">
        {experience.map((e) => (
          <EntryRow key={e.title} entry={e} />
        ))}
      </Section>

      <Section label="involvement">
        {involvement.map((e) => (
          <EntryRow key={e.title} entry={e} />
        ))}
      </Section>

      <Section label="projects">
        {projects.map((e) => (
          <EntryRow key={e.title} entry={e} />
        ))}
      </Section>

      <Section label="education">
        {education.map((e) => (
          <EntryRow key={e.title} entry={e} />
        ))}
      </Section>

      <Section label="elsewhere">
        <div className="connections">
          {connections.map((c) => (
            <Link key={c.label} href={c.href}>
              {c.label}
            </Link>
          ))}
        </div>
      </Section>

      <footer className="footer">
        <span>© 2026 çağrı okan</span>
        <span>built with 🌪️🧠</span>
      </footer>
    </main>
  );
}
