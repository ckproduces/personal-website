"use client";
import { portfolioItem } from "@/data/data";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CkArrowIcon as CkArrowIcon } from "./icons/ckArrowIcon";

export interface PortfolioItemProps extends portfolioItem {
  children?: React.ReactNode;
  className?: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  name,
  date,
  dateEnd,
  image,
  alt,
  tags,
  preview,
  imageBorderRadius,
  seperatePage,
  href,
}) => {
  const [hovered, setHovered] = useState(false);
  const [tagss, setTags] = useState<string[]>([]);

  function formatDate(date: Date) {
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  href = href
    ?.replace(/^https?:\/\//, "")
    .replace("www.", "")
    .replace(/\/$/, "");

  useEffect(() => {
    setTags(tags ?? []);
  }, [tags]);

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
        borderRadius: "0.8rem",
        justifyContent: "space-between",
        padding: "1.5rem",
        // backgroundColor: "hsla(var(--color-primary-dark-6), 0.03)",
        boxShadow: "inset 0 0 0 0.07rem hsla(var(--color-primary-dark-7), 0.2)",
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          gap: "0rem",
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
                  padding: "0 0.4rem",
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
        {seperatePage ? (
          <Link
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              textDecoration: "none",
              margin: "0.3rem 0 0.3rem 0",
            }}
            href={`/${slugify(name)}`}
          >
            <h1
              style={{
                fontSize: "1.1rem",
                fontWeight: 500,
                color: "hsl(var(--color-primary-dark-7))",
                lineHeight: "1.3rem",
                textDecoration: hovered ? "underline" : "none",
              }}
            >
              <span>{name}</span>
            </h1>
          </Link>
        ) : (
          <h1
            style={{
              fontSize: "1.1rem",
              fontWeight: 500,
              color: "hsl(var(--color-primary-dark-2))",
              lineHeight: "1.3rem",
              display: "inline-flex",
              margin: "0.3rem 0 0.3rem 0",
            }}
          >
            {name}
          </h1>
        )}
        <p
          className={image ? "preview-with-image" : "preview"}
          style={{
            width: image ? "calc(100% - 1rem)" : "100%",
            display: "-webkit-box",
            lineHeight: "1.4em",
            color: "hsla(var(--color-primary-dark-2), 0.8)",
            fontSize: "0.85rem",
          }}
        >
          {preview}
        </p>
        {href && (
          <Link
            target="_blank"
            rel="noreferrer"
            className="link-a"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "start",
              marginTop: "0.3rem",
              width: image ? "calc(100% - 1rem)" : "100%",
            }}
            href={href}
          >
            <CkArrowIcon
              style={{
                marginRight: "0.3rem",
                transform: "translate(0px, 0.18rem)",
              }}
              size="0.8rem"
              color={"hsl(var(--color-primary-dark-7))"}
            />
            <p
              className="link-a"
              style={{
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "hsl(var(--color-primary-dark-7))",
                lineHeight: "1.4rem",
                wordBreak: "break-all",
              }}
            >
              {href}
            </p>
          </Link>
        )}
        {tagss && (
          <div
            className={image ? "tags-with-image" : "tags"}
            style={{
              marginTop: "0.5rem",
              display: "flex",
              flexWrap: "wrap",
              columnGap: "0.26rem",
              rowGap: "5rem",
              maxHeight: "calc(0.8rem * 1.2 + 0.48rem)",
              width: image ? "calc(100% - 1rem)" : "100%",
              overflow: "hidden",
            }}
          >
            {tagss.map((e, i) => {
              return (
                <span
                  key={i}
                  style={{
                    padding: "0.24rem 0.6rem",
                    borderRadius: "0.39rem",
                    backgroundColor: "hsla(var(--color-primary-dark-12), 1)",
                    // boxShadow:
                    //  "inset 0 0 0 0.05rem hsl(var(--color-primary-11))",
                    color: "hsla(var(--color-primary-dark-4), 1)",
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
          className="portfolio-image"
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
