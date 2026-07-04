import { Content } from "@/components/Content";
import { SmartLink } from "@/components/SmartLink";
import Image from "next/image";

export default function HomePage() {
  return (
    <Content>
      <Image src="/images/logo.svg" alt="" width={80} height={80} priority />
      <h1>Çağrı Okan</h1>
      <p>
        Hello there! I am <strong>Çağrı Okan</strong>, an aspiring AI engineer
        &amp; researcher, data scientist, full stack web developer, and tech
        entrepreneur. I work across language models, agentic systems, and
        full-stack web.
      </p>
      <p>
        Here, you&rsquo;ll find a concise snapshot of my background. Reach
        out: <SmartLink href="mailto:cagrokan@gmail.com">cagrokan@gmail.com</SmartLink>
      </p>

      <hr />

      <h2 className="section-heading">Experience</h2>

      <h3>Software Engineer Intern @ AI Business School</h3>
      <p>
        I contribute to the Adoption and Content platforms: production
        support, engineering tickets, and resolving live issues.
      </p>
      <p>
        <em>
          February 2026 → Present · Istanbul (remote) ·{" "}
          <SmartLink href="https://www.aibusinessschool.com">
            aibusinessschool.com
          </SmartLink>
        </em>
      </p>

      <h3>Monitoring Specialist @ Artı ve Artı IT Consulting</h3>
      <p>
        I provide 24/7 remote monitoring support: triaging technical tickets,
        forwarding them to the right teams, and preparing incident reports.
      </p>
      <p>
        <em>
          July 2025 → February 2026 · Istanbul (remote) ·{" "}
          <SmartLink href="https://artivearti.com">artivearti.com</SmartLink>
        </em>
      </p>

      <h3>Project Intern @ Yenibirlider Association</h3>
      <p>
        I supported entrepreneurship programs and built a full-stack web
        application—the <strong>HiFellow</strong> student panel.
      </p>
      <p>
        <em>July 2022 → August 2022 · Istanbul</em>
      </p>

      <hr />

      <h2 className="section-heading">Involvement</h2>

      <h3>Coordinator of Education Committee @ YTÜ Data Science Club</h3>
      <p>
        I organize workshops, summits, and competitions around data science.
      </p>
      <p>
        <em>
          June 2024 → Present · Istanbul ·{" "}
          <SmartLink href="https://instagram.com/ytuveribilimi">
            instagram.com/ytuveribilimi
          </SmartLink>
        </em>
      </p>

      <h3>Education Mentor @ Kodluyoruz</h3>
      <p>
        I taught JavaScript to about 100 beginner students through remote
        programs.
      </p>
      <p>
        <em>June 2022 → June 2023 · Istanbul</em>
      </p>

      <hr />

      <h2 className="section-heading">Projects</h2>

      <h3>Cisimcik AI Labs</h3>
      <p>
        <strong>Cisimcik AI Labs</strong> is a small research and engineering
        team building Turkish-first AI: practical language models and
        assistants that feel natural in Turkish, stay useful in English where
        it matters, and ship with real-world capabilities.
      </p>
      <p>
        <em>
          2026 ·{" "}
          <SmartLink href="https://www.cisimcik.com/">cisimcik.com</SmartLink>
        </em>
      </p>

      <h3>Bulut — Accessibility Web Assistant</h3>
      <p>
        An accessibility-focused web assistant that can read and navigate
        pages, scroll, click controls, and fill forms through an on-page
        widget.
      </p>
      <p>
        <em>
          2026 ·{" "}
          <SmartLink href="https://youtu.be/CvCZOk-YLrw?t=3430">
            watch hackathon presentation
          </SmartLink>
        </em>
      </p>

      <h3>Manifold — Synthetic Dataset Creator</h3>
      <p>
        A hackathon-winning synthetic dataset creator focused on image and
        video generation for near–edge cases.
      </p>
      <p>
        <em>
          2026 ·{" "}
          <SmartLink href="https://youtu.be/LfmWSh3rnm0?t=4544">
            watch hackathon presentation
          </SmartLink>
        </em>
      </p>

      <h3>EcoIstanbul — Sustainable Tourism App</h3>
      <p>
        An AI-powered sustainable tourism application built with{" "}
        <strong>Kotlin</strong> and Android Studio; our team placed{" "}
        <strong>6th globally</strong> in the World Affairs Challenge.
      </p>
      <p>
        <em>
          March 2023 → June 2023 ·{" "}
          <SmartLink href="https://instagram.com/ecoistanbulapp">
            instagram.com/ecoistanbulapp
          </SmartLink>
        </em>
      </p>

      <hr />

      <h2 className="section-heading">Education</h2>

      <h3>Yıldız Technical University, BSc Statistics</h3>
      <p>
        YTU is one of Istanbul&rsquo;s major public universities, strong in
        engineering and the natural sciences.
      </p>
      <p>
        <em>
          Expected June 2029 · Istanbul ·{" "}
          <SmartLink href="https://yildiz.edu.tr/en">yildiz.edu.tr</SmartLink>
        </em>
      </p>

      <h3>TEV İnanç Türkeş Private High School</h3>
      <p>
        A selective boarding program for gifted students, run by the Turkish
        Education Foundation.
      </p>
      <p>
        <em>
          August 2020 → June 2024 · Gebze, Kocaeli ·{" "}
          <SmartLink href="https://tevitol.k12.tr">tevitol.k12.tr</SmartLink>
        </em>
      </p>

      <hr />

      <h2 className="section-heading">Connections</h2>

      <ul>
        <li>
          GitHub:{" "}
          <SmartLink href="https://github.com/ckproduces">
            github.com/ckproduces
          </SmartLink>
        </li>
        <li>
          LinkedIn:{" "}
          <SmartLink href="https://linkedin.com/in/cagriokan">
            linkedin.com/in/cagriokan
          </SmartLink>
        </li>
        <li>
          Kaggle:{" "}
          <SmartLink href="https://kaggle.com/cagrokan">
            kaggle.com/cagrokan
          </SmartLink>
        </li>
        <li>
          Instagram:{" "}
          <SmartLink href="https://instagram.com/crokan">
            instagram.com/crokan
          </SmartLink>
        </li>
      </ul>
    </Content>
  );
}
