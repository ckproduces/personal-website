"use client";
import { useState } from "react";

interface SectionProps {
  className?: string; // optional extra Tailwind classes
  style?: React.CSSProperties; // optional inline styles
  title: string;
  elementList: string[];
  MapElements: React.ReactNode;
}
export const Section: React.FC<SectionProps> = ({
  className,
  style,
  title,
  elementList,
  MapElements,
}) => {
  return (
    <section
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        ...style,
      }}
    >
      <h1>{title}</h1>
      <div></div>
    </section>
  );
};
