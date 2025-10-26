"use client";
import { portfolioItem } from "@/data/data";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ckArrowIcon as CkArrowIcon } from "./icons/ckArrowIcon";

export interface PortfolioItemProps extends portfolioItem {
  children?: React.ReactNode;
  className?: string;
  windowSize: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  id,
  name,
  date,
  dateEnd,
  image,
  alt,
  tags,
  preview,
  imageBorderRadius,
  seperatePage,
  windowSize,
  program,
  href,
}) => {
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  function formatDate(date: Date) {
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function slugify(title: string) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  return (
    <article
      className="portfolio-item"
      style={{
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        borderRadius: "0.6rem",
        justifyContent: "space-between",
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          gap: "0.15rem",
        }}
      >
        {date && (
          <div
            style={{
              display: "flex",
            }}
          >
            <p
              style={{
                fontSize: "0.85rem",
                color: "hsl(var(--color-primary-light-7))",
              }}
            >
              {formatDate(date)}
            </p>
            <>
              <span
                style={{
                  padding: "0 0.6rem",
                  color: "hsl(var(--color-primary-light-7))",
                  fontSize: "0.85rem",
                }}
              >
                {"→"}
              </span>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "hsl(var(--color-primary-light-7))",
                }}
              >
                {dateEnd ? formatDate(dateEnd) : "present"}
              </p>
            </>
          </div>
        )}
        {/* if there is a href, render <Link>. if not, render only h1 */}
        {href || seperatePage ? (
          <Link
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ textDecoration: "none", width: "fit-content" }}
            href={href ? href : `/${slugify(name)}`}
            target={href ? "_blank" : "_self"}
            rel={href ? "noopener noreferrer" : ""}
          >
            <h1
              style={{
                fontSize: "1.1rem",
                fontWeight: 500,
                color: "hsl(var(--color-primary-dark-7))",
                lineHeight: "1.4rem",
                textDecoration: hovered ? "underline" : "none",
              }}
            >
              <span>
                {name}
                {href && (
                  <span style={{ display: "inline" }}>
                    <CkArrowIcon
                      style={{
                        marginLeft: "0.35rem",
                        transform: hovered
                          ? "translate(-0.01rem, 0.01rem)"
                          : "translate(-0.1rem, 0.1rem)",
                        display: "inline-block",
                      }}
                      size="1rem"
                      color={"hsl(var(--color-primary-dark-7))"}
                    />
                  </span>
                )}
              </span>
            </h1>
          </Link>
        ) : (
          <h1
            style={{
              fontSize: "1.1rem",
              fontWeight: 500,
              color: "hsl(var(--color-primary-dark-3))",
              lineHeight: "1.4rem",
              display: "inline-flex",
            }}
          >
            {name}
          </h1>
        )}
        <p
          className={image ? "preview-with-image" : "preview"}
          style={{
            width:
              windowSize < 656
                ? image
                  ? `calc(100% - 3rem)`
                  : `100%`
                : image
                ? "calc(100% - 3rem)"
                : "100%",
            display: "-webkit-box",
            WebkitLineClamp: 10,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            lineHeight: "1.4em",
            color: "hsla(var(--color-primary-dark-2), 0.7)",
            fontSize: "0.9rem",
          }}
        >
          {preview}
        </p>
        {tags && (
          <div
            className={image ? "tags-with-image" : "tags"}
            style={{
              marginTop: "0.5rem",
              display: "flex",
              flexWrap: "wrap",
              columnGap: "0.3rem",
              maxHeight: "calc(0.8rem * 1.2 + 0.6rem)",
              maxWidth:
                windowSize < 656
                  ? image
                    ? `${windowSize - 100}px`
                    : `${windowSize}px`
                  : image
                  ? "calc(100% - 3rem)"
                  : "100%",
              overflow: "hidden",
            }}
          >
            {tags.map((e, i) => {
              return (
                <span
                  key={i}
                  style={{
                    padding: "0.3rem 0.5rem",
                    borderRadius: "0.39rem",
                    backgroundColor: "hsl(var(--color-primary-dark-12))",
                    color: "hsl(var(--color-primary-4))",
                    fontSize: "0.8rem",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 450,
                  }}
                >
                  {e}
                </span>
              );
            })}
          </div>
        )}
      </section>
      {image && (
        <img
          style={{
            objectFit: "contain",
            borderRadius: imageBorderRadius ? `${imageBorderRadius}%` : "11%",
            height: "3.2rem",
            aspectRatio: 1 / 1,
          }}
          alt={alt ?? ""}
          src={image}
        />
      )}
    </article>
  );
};

export default PortfolioItem;
