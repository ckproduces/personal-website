import { M } from "@/components/Md";

export const path = "/";
export const title = "Çağrı Okan";

export default function HomePage() {
  return (
    <M.Page>
      <M.Flex
        alignItems="center"
        gap={1.5}
        style={{ flexWrap: "wrap", marginBottom: "1.5rem" }}
      >
        <img
          src="/images/cisimcik_text_logo.svg"
          alt="Cisimcik"
          style={{ height: "1.75rem", width: "auto", objectFit: "contain" }}
        />
        <img
          src="/images/aibs.jpeg"
          alt="AIBS"
          style={{ height: "1.75rem", width: "auto", objectFit: "contain" }}
        />
        <img
          src="/images/pera_text_logo.svg"
          alt="Pera"
          style={{ height: "1.75rem", width: "auto", objectFit: "contain" }}
        />
      </M.Flex>

      <M.H1>Çağrı Okan</M.H1>

      <M.P>
        Hello there! I am <M.Strong>Çağrı Okan</M.Strong>, an aspiring AI
        engineer & researcher, data scientist, full stack web developer, and
        tech entrepreneur. I have experience in:
      </M.P>

      <M.Ul>
        <M.Li>Music production</M.Li>
        <M.Li>Graphic design</M.Li>
        <M.Li>UI/UX design</M.Li>
        <M.Li>Full-stack web development</M.Li>
        <M.Li>Data science</M.Li>
        <M.Li>Artificial intelligence</M.Li>
        <M.Li>AI agents</M.Li>
      </M.Ul>

      <M.P>
        Here, you’ll find everything I’ve done so far—detailed, polished, and
        styled with a great UI. Feel free to reach out to: cagrokan@gmail.com.
      </M.P>

      <M.Hr />

      <M.H1>Experience</M.H1>
      <M.H2>Monitoring Specialist @ Artı ve Artı IT Consulting</M.H2>
      <M.P>
        <M.Strong>July 2025 → Present</M.Strong>
      </M.P>
      <M.P>
        I provide 24/7 IT service management, reviewing and triaging incoming
        tickets. I ensure accurate classification and timely escalation to the
        appropriate technical teams, maintaining service continuity and
        adherence to operational standards.
      </M.P>
      <M.P>
        Website: <M.A href="https://artivearti.com">https://artivearti.com</M.A>
      </M.P>

      <M.H2>Coordinator of Education Committee @ YTÜ Data Science Club</M.H2>
      <M.P>
        <M.Strong>June 2025 → Present</M.Strong>
      </M.P>
      <M.P>
        I coordinate the education committee, focusing on organizing workshops,
        seminars, and educational events related to data science.
      </M.P>
      <M.P>
        Instagram:{" "}
        <M.A href="https://instagram.com/ytuveribilimi">
          https://instagram.com/ytuveribilimi
        </M.A>
      </M.P>

      <M.H2>
        Head of Research and Data Analysis Commission @ Küçükçekmece City
        Council
      </M.H2>
      <M.P>
        <M.Strong>March 2025 → Present</M.Strong>
      </M.P>
      <M.P>
        I lead the research and data analysis commission, focusing on
        data-driven decision making and policy development.
      </M.P>

      <M.Hr />

      <M.H1>Projects</M.H1>

      <M.H2>Overtime</M.H2>
      <M.P>
        <M.Strong>December 5, 2025 → December 7, 2025</M.Strong>
      </M.P>
      <M.P>
        Overtime is an AI warehouse & inventory management agent. It was built
        in a hackathon in 48 hours.
      </M.P>

      <M.H2>EcoIstanbul</M.H2>
      <M.P>
        <M.Strong>March 26, 2023 → June 30, 2023</M.Strong>
      </M.P>
      <M.P>
        A sustainable tourism app that shows all possible green routes and
        places in Istanbul.
      </M.P>
      <M.P>
        Instagram:{" "}
        <M.A href="https://instagram.com/ecoistanbulapp">
          https://instagram.com/ecoistanbulapp
        </M.A>
      </M.P>

      <M.H2>Senato</M.H2>
      <M.P>
        <M.Strong>December 22, 2022 → May 20, 2023</M.Strong>
      </M.P>
      <M.P>
        Senato is a philosophy journal that turned into a website over time.
      </M.P>

      <M.Hr />

      <M.H1>Education</M.H1>

      <M.H2>Yıldız Technical University — BSc Statistics</M.H2>
      <M.P>
        <M.Strong>October 2024 → Present</M.Strong>
      </M.P>
      <M.P>
        Yıldız Technical University (YTU) is one of Istanbul’s oldest public
        institutions, focused on engineering, natural sciences, and more
        recently, social sciences.
      </M.P>
      <M.P>
        Website:{" "}
        <M.A href="https://yildiz.edu.tr/en">https://yildiz.edu.tr/en</M.A>
      </M.P>

      <M.Hr />

      <M.H2>TEV İnanç Türkeş Private High School</M.H2>
      <M.P>
        <M.Strong>August 2020 → June 2024</M.Strong>
      </M.P>
      <M.P>
        TEV İnanç Türkeş Private High School is a co-educational boarding school
        in Gebze, Kocaeli, operated by the Turkish Education Foundation and
        admitting gifted students through a selective process.
      </M.P>
      <M.P>
        Website: <M.A href="https://tevitol.k12.tr">https://tevitol.k12.tr</M.A>
      </M.P>

      <M.Hr />

      <M.H1>Connections</M.H1>

      <M.H2>GitHub</M.H2>
      <M.P>
        <M.A href="https://github.com/ckproduces">
          Find my public code repositories here
        </M.A>
      </M.P>

      <M.Hr />

      <M.H2>LinkedIn</M.H2>
      <M.P>
        <M.A href="https://linkedin.com/in/cagriokan">Let’s connect</M.A>
      </M.P>

      <M.Hr />

      <M.H2>Kaggle</M.H2>
      <M.P>
        <M.A href="https://kaggle.com/cagrokan">import pandas as pd</M.A>
      </M.P>

      <M.Hr />

      <M.H2>Instagram</M.H2>
      <M.P>
        <M.A href="https://instagram.com/crokan">holy algorithm</M.A>
      </M.P>
    </M.Page>
  );
}
