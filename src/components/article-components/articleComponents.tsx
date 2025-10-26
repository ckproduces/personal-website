"use client";
import { unitSpace } from "@/design-system/spaces";
import React, { useEffect, useState } from "react";

interface ArticleImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
}

interface ArticlePProps extends React.HTMLAttributes<HTMLParagraphElement> {
  style: React.CSSProperties;
}

interface ArticleAProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

// #
export const ArticleH1: React.FC<React.HTMLAttributes<HTMLHeadElement>> = ({
  children,
}) => {
  return (
    <>
      <h1
        style={{
          fontSize: "1.4rem",
          fontWeight: 500,
          color: "hsl(var(--color-primary-2))",
          marginBottom: "0.5rem",
        }}
      >
        {children}
      </h1>
    </>
  );
};

// ##
export const ArticleH2: React.FC<React.HTMLAttributes<HTMLHeadElement>> = ({
  children,
}) => {
  return (
    <>
      <h2
        style={{
          fontSize: "1.2rem",
          fontWeight: 500,
          color: "hsl(var(--color-primary-dark-4))",
          marginTop: "1.5rem",
          marginBottom: "0.4rem",
        }}
      >
        {children}
      </h2>
    </>
  );
};

// ###
export const ArticleH3: React.FC<React.HTMLAttributes<HTMLHeadElement>> = ({
  children,
}) => {
  return (
    <h3
      style={{
        fontSize: "1.1rem",
        fontWeight: 500,
        color: "hsl(var(--color-primary-dark-4))",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
      }}
    >
      {children}
    </h3>
  );
};

// paragraph
export const ArticleP: React.FC<ArticlePProps> = ({ children, style }) => {
  return (
    <div
      style={{
        marginBottom: "1rem",
        fontSize: "1rem",
        lineHeight: "1.6em",
        letterSpacing: "0",
        color: "hsla(var(--color-primary-dark-2), 0.9)",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// image
export const ArticleImage: React.FC<ArticleImageProps> = ({ src, alt }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "0.5rem",
        marginTop: unitSpace(2),
        marginBottom: unitSpace(2),
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <img
        style={{
          maxWidth: "100%",
          objectFit: "contain",
          display: "block",
          borderRadius: "0.7rem",
          // boxShadow: "0 0 1rem 0 " + colors.black(0.15),
          outline: "0.1rem solid " + "hsl(var(--color-primary-9))",
        }}
        src={src}
        alt={alt}
      />
      <ArticleP
        style={{
          fontSize: "0.9rem",
          color: "hsl(var(--color-primary-6))",
          margin: 0,
        }}
      >
        {alt}
      </ArticleP>
    </div>
  );
};

// paragraph
export const ArticleA: React.FC<ArticleAProps> = ({ children, href }) => {
  return (
    <a
      style={{
        marginBottom: unitSpace(),
        fontSize: "1rem",
        color: "hsl(var(--color-primary-dark-7))",
        fontWeight: 500,
      }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export const ArticleHR: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = ({}) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "3rem",
        marginBottom: "3rem",
        gap: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: "hsl(var(--color-primary-8))",
          height: "0.2rem",
          width: "0.2rem",
          borderRadius: "100%",
        }}
      />
      <div
        style={{
          backgroundColor: "hsl(var(--color-primary-8))",
          height: "0.2rem",
          width: "0.2rem",
          borderRadius: "100%",
        }}
      />
      <div
        style={{
          backgroundColor: "hsl(var(--color-primary-8))",
          height: "0.2rem",
          width: "0.2rem",
          borderRadius: "100%",
        }}
      />
    </div>
  );
};

export const ArticleLi: React.FC<React.LiHTMLAttributes<HTMLElement>> = ({
  children,
  style,
}) => {
  return (
    <li>
      <ArticleP style={style || {}}>{children}</ArticleP>
    </li>
  );
};

export const ArticleViewer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  style,
}) => {
  const [windowSize, setWindowSize] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Initialize width on mount
    setWindowSize(window.innerWidth);

    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    setMounted(true);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div
        style={{
          width: windowSize < 835 ? `calc(${windowSize}px - 3rem)` : "35rem",
          ...style,
        }}
      >
        {children}
      </div>
    </>
  );
};
