import { Content } from "@/components/Content";
import type { Metadata } from "next";
import { ArticleSection } from "./article";
import { ComponentsSection } from "./components-section";
import { ColorsSection, ScaleSection, TypeSection } from "./foundations";

export const metadata: Metadata = {
  title: "Style guide — Çağrı Okan",
};

export default function StyleGuidePage() {
  return (
    <Content>
      <h1>style guide</h1>
      <p>
        the living reference for this site&rsquo;s design system: four brand
        colors expanded into scales, one modular ladder for every dimension,
        and the components built on top. if a change does not look right
        here, it is not right anywhere.
      </p>

      <hr />
      <ColorsSection />

      <hr />
      <ScaleSection />

      <hr />
      <TypeSection />

      <hr />
      <ComponentsSection />

      <hr />
      <ArticleSection />
    </Content>
  );
}
