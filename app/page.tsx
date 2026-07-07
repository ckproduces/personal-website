import { Section } from "@/components/Section";
import { EntryRow } from "@/components/Entry";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { Socials } from "@/components/Socials";
import { Blogs } from "@/components/Blogs";
import { Footer } from "@/components/Footer";
import { allPosts } from "@/lib/posts";
import {
  intro,
  experience,
  involvement,
  projects,
  education,
} from "@/lib/site";

export default function HomePage() {
  const posts = allPosts.map(({ slug, title, date }) => ({
    slug,
    title,
    date,
  }));

  return (
    <Stack as="main" gap={16}>
      <Stack style={{}} as="header" gap={4}>
        <Stack align="start" gap={1}>
          <span
            role="img"
            aria-label="logo"
            style={{
              display: "block",
              width: 50,
              height: 50,
              marginBottom: "8px",
              backgroundColor: "var(--color-red)",
              WebkitMaskImage: "url(/logo.svg)",
              maskImage: "url(/logo.svg)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "left center",
              maskPosition: "left center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
          />
          <Text as="h1" size="3xl">
            çağrı okan
          </Text>
          <Text as="p" color="muted" size="md">
            {intro}
          </Text>
        </Stack>
        <Socials />
      </Stack>

      <Section label="blogs" gap={6}>
        <Blogs posts={posts} />
      </Section>

      <Section gap={6} label="experience">
        {experience.map((e) => (
          <EntryRow key={e.title} entry={e} />
        ))}
      </Section>

      <Section gap={6} label="involvement">
        {involvement.map((e) => (
          <EntryRow key={e.title} entry={e} />
        ))}
      </Section>

      <Section gap={6} label="projects">
        {projects.map((e) => (
          <EntryRow key={e.title} entry={e} />
        ))}
      </Section>

      <Section gap={6} label="education">
        {education.map((e) => (
          <EntryRow key={e.title} entry={e} />
        ))}
      </Section>

      <Footer />
    </Stack>
  );
}
