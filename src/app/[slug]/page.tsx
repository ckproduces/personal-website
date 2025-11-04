import ReactMarkdown from "react-markdown";
import { BackArrow } from "@/components/icons/ckArrowIcon";
import {
  ArticleA,
  ArticleH1,
  ArticleH2,
  ArticleH3,
  ArticleHR,
  ArticleImage,
  ArticleLi,
  ArticleP,
  ArticleUl,
  ArticleViewer,
} from "@/components/article-components/articleComponents";
import { Metadata } from "next";
import Link from "next/link";
import { allData } from "@/data/data";

// Utility to create slugs
function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug as string;
  const portfolioItem = allData.find(
    (p) => slugify(p.name) === slugify(slug)
  );

  if (!portfolioItem) {
    return { title: "Not found", description: "Not found" };
  }

  return {
    title: portfolioItem.name.toLowerCase(),
    description: portfolioItem.preview.toLowerCase(),
  };
}

// Page component
export default async function PortfolioPage({ params }: Props) {
  const slug = (await params).slug as string;
  const portfolioItem = allData.find(
    (p) => p.seperatePage && slugify(p.name) === slugify(slug)
  );

  if (!portfolioItem) {
    let pages = ["ecoistanbul", "senato"];
    const random = pages[Math.floor(Math.random() * pages.length)];
    return (
      <div
        style={{
          padding: "10rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "0.2rem",
        }}
      >
        <h1 style={{ fontSize: "5rem" }}>404</h1>
        <p>Page not found</p>
        <p>
          How about{" "}
          <Link
            style={{
              textDecoration: "none",
            }}
            href={random}
          >
            <span
              style={{
                fontWeight: 500,
                fontSize: "1.2rem",
                color: "hsla(var(--color-primary-dark-6), 1)",
                backgroundColor: "hsla(var(--color-primary-light-11), 0.5)",
                textDecoration: "none",
              }}
            >
              /{random}
            </span>
          </Link>
          ?
        </p>
      </div>
    );
  }

  return (
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
          color="hsl(var(--color-primary-dark-1))"
        />

        <ReactMarkdown
          components={{
            h1: (props) => <ArticleH1 {...props} />,
            h2: (props) => <ArticleH2 {...props} />,
            h3: (props) => <ArticleH3 {...props} />,
            p: (props) => <ArticleP {...props} style={props.style ?? {}} />,
            li: (props) => (
              <ArticleLi
                {...props}
                style={{
                  listStyleType: "none",
                  paddingLeft: 0,
                  ...props.style,
                }}
              >
                {props.children}
              </ArticleLi>
            ),
            ul: (props) => <ArticleUl {...props} style={props.style ?? {}} />,
            img: (props) => (
              <ArticleImage
                {...props}
                src={typeof props.src === "string" ? props.src : undefined}
              />
            ),
            a: (props) => (
              <ArticleA
                {...props}
                href={typeof props.href === "string" ? props.href : "#"}
              />
            ),
            hr: (props) => <ArticleHR {...props} />,
          }}
        >
          {portfolioItem.pageContent}
        </ReactMarkdown>
      </ArticleViewer>
    </article>
  );
}
