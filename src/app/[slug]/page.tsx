import portfolio from "@/data/data";
import ReactMarkdown from "react-markdown";
import { backArrow as BackArrow } from "@/components/icons/ckArrowIcon";
import {
  ArticleA,
  ArticleH1,
  ArticleH2,
  ArticleH3,
  ArticleHR,
  ArticleImage,
  ArticleLi,
  ArticleP,
  ArticleViewer,
} from "@/components/article-components/articleComponents";
import colors from "@/design-system/colors";
import { unitSpace } from "@/design-system/spaces";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Metadata } from "next";

interface PortfolioPageProps {
  params: { slug: any };
}

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  let portfolioItem = null;
  const slug = params.slug;
  portfolioItem = portfolio.find((p) => slugify(p.name) == slugify(slug));

  if (portfolioItem) {
    return {
      title: slugify(portfolioItem.name),
      description: portfolioItem.preview,
    };
  } else {
    return {
      title: "not found",
      description: "not found",
    };
  }
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  let portfolioItem = null;
  const slug = params.slug;
  let portfolioItems: any[] = [];
  portfolio.map((p) => {
    if (p.seperatePage) {
      portfolioItem = portfolio.find((p) => slugify(p.name) == slugify(slug));
    }
  });

  return (
    <>
      <article
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
          padding: "5rem 5rem 10rem 5rem",
          backgroundColor: "white",
        }}
      >
        <ArticleViewer>
          <BackArrow
            component="button"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "100%",
              cursor: "pointer",
              marginBottom: "2rem",
              border: 0,
              background: "none",
            }}
            to="/"
            className="icon"
            size="1.3rem"
            color={"hsl(var(--color-primary-dark-1))"}
          />

          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => <ArticleH1 {...props} />,
              h2: ({ node, ...props }) => <ArticleH2 {...props} />,
              h3: ({ node, ...props }) => <ArticleH3 {...props} />,
              p: ({ node, ...props }) => (
                <ArticleP {...props} style={props.style ?? undefined} />
              ),
              li: ({ node, ...props }) => (
                <ArticleLi {...props} style={props.style ?? undefined} />
              ),
              img: ({ node, ...props }) => (
                <ArticleImage
                  {...props}
                  src={typeof props.src === "string" ? props.src : undefined}
                />
              ),
              a: ({ node, ...props }) => {
                const href = typeof props.href === "string" ? props.href : "#";
                return <ArticleA {...props} href={href} />;
              },
              hr: ({ node, ...props }) => <ArticleHR {...props} />,
            }}
          >
            {portfolioItem?.pageContent}
          </ReactMarkdown>
        </ArticleViewer>
      </article>
    </>
  );
}
