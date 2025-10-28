import portfolio from "@/data/data";
import ReactMarkdown from "react-markdown";
import { BackArrow as BackArrow } from "@/components/icons/ckArrowIcon";
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
import { Metadata } from "next";

interface PortfolioPageProps {
  params: { slug: string };
}

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const portfolioItem = portfolio.find(
    (p) => slugify(p.name) === slugify(slug)
  );

  if (portfolioItem) {
    return {
      title: slugify(portfolioItem.name),
      description: portfolioItem.preview,
    };
  }

  return {
    title: "not found",
    description: "not found",
  };
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const slug = params.slug;
  // find the portfolio item that has a separate page and matches the slug
  const portfolioItem = portfolio.find(
    (p) => p.seperatePage && slugify(p.name) === slugify(slug)
  );

  return (
    <>
      <article
        className="articlesel"
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
            to="back"
            className="icon"
            size="1.3rem"
            color={"hsl(var(--color-primary-dark-1))"}
          />

          <ReactMarkdown
            components={{
              h1: ({ ...props }) => <ArticleH1 {...props} />,
              h2: ({ ...props }) => <ArticleH2 {...props} />,
              h3: ({ ...props }) => <ArticleH3 {...props} />,
              p: ({ ...props }) => (
                <ArticleP {...props} style={props.style ?? {}} />
              ),
              li: ({ ...props }) => (
                <ArticleLi {...props} style={props.style ?? {}} />
              ),
              img: ({ ...props }) => (
                <ArticleImage
                  {...props}
                  src={typeof props.src === "string" ? props.src : undefined}
                />
              ),
              a: ({ ...props }) => {
                const href = typeof props.href === "string" ? props.href : "#";
                return <ArticleA {...props} href={href} />;
              },
              hr: ({ ...props }) => <ArticleHR {...props} />,
            }}
          >
            {portfolioItem?.pageContent}
          </ReactMarkdown>
        </ArticleViewer>
      </article>
    </>
  );
}
