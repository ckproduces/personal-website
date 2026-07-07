import { Section } from "@/components/Section";
import { EntryRow } from "@/components/Entry";
import { Stack } from "@/components/Stack";
import { Socials } from "@/components/Socials";
import { Blogs } from "@/components/Blogs";
import { Footer } from "@/components/Footer";
import { allPosts } from "@/lib/posts";
import { experience, involvement, projects, education } from "@/lib/site";
import { intro } from "@/lib/site";

export default function HomePage() {
  const posts = allPosts.map(({ slug, title, date }) => ({ slug, title, date }));

  return (
    <Stack as="main" gap={16}>
      <Stack as="header" gap={3}>
        <Stack gap={1}>
          <h1 className="masthead__name">çağrı okan</h1>
          <p className="masthead__intro">{intro}</p>
        </Stack>
        <Socials />
      </Stack>

      <Section label="blogs" gap={4}>
        <Blogs posts={posts} />
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

      <Footer />
    </Stack>
  );
}
