import type { Metadata } from "next";
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
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site-meta";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
    languages: { en: SITE_URL },
  },
};

export const dynamic = "force-static";

export default function HomePage() {
  const posts = allPosts.map(({ slug, title, date }) => ({
    slug,
    title,
    date,
  }));

  return (
    <Stack as="main" id="main-content" gap={24}>
      <Stack as="header" gap={4}>
        <Stack align="start" gap={1}>
          <Text as="h1" size="3xl" weight="semibold">
            çağrı okan
          </Text>
          <Text as="p" color="muted" size="md">
            {intro}
          </Text>
        </Stack>
        <Socials />
      </Stack>

      <Section label="his words" gap={8}>
        <Blogs posts={posts} />
      </Section>

      <Section gap={8} label="projects">
        {projects.map((e) => (
          <EntryRow key={e.title} entry={e} />
        ))}
      </Section>

      <Section gap={8} label="experience">
        {experience.map((e) => (
          <EntryRow key={e.title} entry={e} />
        ))}
      </Section>

      <Section gap={8} label="involvement & volunteering">
        {involvement.map((e) => (
          <EntryRow key={e.title} entry={e} />
        ))}
      </Section>

      <Section gap={8} label="education">
        {education.map((e) => (
          <EntryRow key={e.title} entry={e} />
        ))}
      </Section>

      <Footer />
    </Stack>
  );
}
