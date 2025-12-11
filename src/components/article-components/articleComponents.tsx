"use client";
import { unitSpace } from "@/design-system/spaces";
import React from "react";

interface ArticleImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
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
          fontSize: "2rem",
          fontWeight: 500,
          color: "hsla(var(--color-primary-2), 0.8)",
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
          fontSize: "calc(2rem/1.3)",
          fontWeight: 500,
          color: "hsla(var(--color-primary-2), 0.8)",
          paddingTop: "1.5rem",
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
        fontSize: "calc(2rem/1.3/1.3)",
        fontWeight: 500,
        color: "hsla(var(--color-primary-2), 0.8)",
        paddingTop: "0.9rem",
        marginBottom: "0.5rem",
      }}
    >
      {children}
    </h3>
  );
};

// paragraph
export const ArticleP: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ children, style }) => {
  return (
    <div
      style={{
        marginBottom: "1.4rem",
        fontSize: "1.1rem",
        lineHeight: "1.6em",
        color: "hsla(var(--color-primary-dark-2), 0.8)",
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
        className="article-image"
        style={{
          maxWidth: "100%",
          objectFit: "contain",
          display: "block",
          borderRadius: "0.6rem",
          outline: "0.1rem solid " + "hsla(var(--color-primary-2), 0.4)",
        }}
        src={src}
        alt={alt}
      />
      <ArticleP
        style={{
          fontSize: "0.9rem",
          color: "hsla(var(--color-primary-4), 0.6)",
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
      <ArticleP
        style={{ lineHeight: "1em", marginBottom: "0", ...(style || {}) }}
      >
        - {children}
      </ArticleP>
    </li>
  );
};

export const ArticleUl: React.FC<React.LiHTMLAttributes<HTMLElement>> = ({
  children,
  style,
}) => {
  return (
    <ul
      style={{
        margin: "1.1rem 0",
        display: "flex",
        flexDirection: "column",
        gap: "0rem",
      }}
    >
      {children}
    </ul>
  );
};

export const ArticleViewer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  style,
}) => {
  return (
    <>
      <div
        className="article-viewer"
        style={{
          width: "38rem",
          ...style,
        }}
      >
        {children}
      </div>
    </>
  );
};

export const ArticleTable: React.FC<React.HTMLAttributes<HTMLTableElement>> = ({
  children,
  style,
}) => {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "2.5rem",
        marginTop: "2rem",
        ...style,
      }}
    >
      {children}
    </table>
  );
};

export const ArticleThead: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({
  children,
  style,
}) => {
  return (
    <thead
      style={{
        borderBottom: "0.1rem solid hsla(var(--color-primary-4), 0.3)",
        ...style,
      }}
    >
      {children}
    </thead>
  );
};

export const ArticleTbody: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({
  children,
  style,
}) => {
  return (
    <tbody
      style={{
        ...style,
      }}
    >
      {children}
    </tbody>
  );
};

export const ArticleTr: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = ({
  children,
  style,
}) => {
  return (
    <tr
      style={{
        borderBottom: "0.1rem solid hsla(var(--color-primary-6), 0.15)",
        ...style,
      }}
    >
      {children}
    </tr>
  );
};

export const ArticleTh: React.FC<React.ThHTMLAttributes<HTMLTableCellElement>> = ({
  children,
  style,
}) => {
  return (
    <th
      style={{
        padding: "0.75rem 1rem",
        textAlign: "left",
        fontSize: "0.9rem",
        fontWeight: 600,
        color: "hsla(var(--color-primary-2), 0.9)",
        ...style,
      }}
    >
      {children}
    </th>
  );
};

export const ArticleTd: React.FC<React.TdHTMLAttributes<HTMLTableCellElement>> = ({
  children,
  style,
}) => {
  return (
    <td
      style={{
        padding: "0.75rem 1rem",
        fontSize: "0.9rem",
        color: "hsla(var(--color-primary-dark-2), 0.8)",
        ...style,
      }}
    >
      {children}
    </td>
  );
};
