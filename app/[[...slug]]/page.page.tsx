import { SiteFooter } from "@/components/SiteFooter";
import {
  getPageBySegments,
  getRoutePages,
  pathToSlugParam,
  getSiteFooterPage,
  resolvePageTitle,
} from "@/lib/pages";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamicParams = false;

type Props = {
  params: Promise<{ slug?: string[] }>;
};

function DefaultFooter() {
  return (
    <>
      <p>built with 🌪️🧠</p>
      <p>© 2026 çağrı okan. all rights reserved.</p>
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySegments(slug ?? []);
  if (!page) {
    return {};
  }
  return {
    title: resolvePageTitle(page),
  };
}

export function generateStaticParams() {
  const pages = getRoutePages();
  return pages.map((page) => ({
    slug: pathToSlugParam(page.path),
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const segments = slug ?? [];
  const page = getPageBySegments(segments);
  if (!page) {
    notFound();
  }
  const PageContent = page.Component;
  const FooterContent = getSiteFooterPage()?.Component ?? DefaultFooter;

  return (
    <div className="page-shell">
      <PageContent />
      <SiteFooter>
        <FooterContent />
      </SiteFooter>
    </div>
  );
}
