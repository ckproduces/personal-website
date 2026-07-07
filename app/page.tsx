import { Section } from "@/components/Section";
import { EntryRow } from "@/components/Entry";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { Socials } from "@/components/Socials";
import { Blogs } from "@/components/Blogs";
import { Footer } from "@/components/Footer";
import { allPosts } from "@/lib/posts";
import { intro, experience, involvement, projects, education } from "@/lib/site";

export default function HomePage() {
  const posts = allPosts.map(({ slug, title, date }) => ({ slug, title, date }));

  return (
    <Stack as="main" gap={12}>
      <Stack as="header" gap={4}>
        <Stack gap={1}>
          <Text as="h1" size="3xl" style={{ letterSpacing: "-0.03em" }}>
            çağrı okan
          </Text>
          <Text as="p" color="muted" size="md">
            {intro}
          </Text>
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
