import { Section } from "@/components/Section";
import dynamic from "next/dynamic";
import { EntryRow } from "@/components/Entry";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { Socials } from "@/components/Socials";
import { Blogs } from "@/components/Blogs";
import { allPosts } from "@/lib/posts";
import {
  intro,
  experience,
  involvement,
  projects,
  education,
} from "@/lib/site";

const Footer = dynamic(() => import("@/components/Footer").then((m) => m.Footer));

export default function HomePage() {
  const posts = allPosts.map(({ slug, title, date }) => ({
    slug,
    title,
    date,
  }));

  return (
    <Stack as="main" gap={16}>
      <Stack as="header" gap={4}>
        <Stack align="start" gap={1}>
          <Text as="h1" size="3xl">
            çağrı okan
          </Text>
          <Text as="p" color="muted" size="md">
            {intro}
          </Text>
        </Stack>
        <Socials />
      </Stack>

      <Section label="his words" gap={6}>
        <Blogs posts={posts} />
      </Section>

      <Section gap={6} label="projects">
        {projects.map((e) => (
          <EntryRow key={e.title} entry={e} />
        ))}
      </Section>

      <Section gap={6} label="experience">
        {experience.map((e) => (
          <EntryRow key={e.title} entry={e} />
        ))}
      </Section>

      <Section gap={6} label="involvement & volunteering">
        {involvement.map((e) => (
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
