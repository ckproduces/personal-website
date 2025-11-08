"use client";
import portfolio, { education, experiences, socials } from "@/data/data";
import PortfolioItem from "@/components/PortfolioItem";
import Link from "next/link";
import { Logo } from "@/components/icons/Logo";

export default function Home() {
  return (
    <div
      className="everything"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "5rem",
      }}
    >
      <div
        className="everythingsel"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "38rem",
        }}
      >
        <div
          style={{
            display: "flex",
            marginBottom: "2rem",
            width: "100%",
          }}
        >
          <div
            className="scroll-container"
            style={{
              width: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                gap: 0,
                width: "100%",
              }}
              className="scroll-track"
            >
              <Logo
                className="logo"
                size="5rem"
                color="hsl(var(--color-primary-dark-8))"
              />
              <img
                className="running-img"
                src="/images/crokan.jpeg"
                alt="a photo of çağrı"
                style={{
                  objectFit: "cover",
                  borderRadius: "1.4rem",
                  width: "5rem",
                  aspectRatio: "1/1",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                width: "100%",
                top: "calc(50% - 0.25rem)",
                right: "0%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                gap: "0.5rem",
                zIndex: "-1",
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
                return (
                  <div
                    className="dot"
                    key={i}
                    style={{
                      width: "0.5rem",
                      height: "0.5rem",
                      backgroundColor: "hsla(var(--color-primary-dark-7), 0.6)",
                      borderRadius: "50%",

                      // CSS custom properties are not part of React's CSSProperties type; cast the key to any
                      ["--i" as any]: i,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <p
          className="preview"
          style={{
            width: "100%",
            lineHeight: "1.9em",
            color: "hsla(var(--color-primary-dark-2), 0.9)",
            fontSize: "1rem",
            textAlign: "left",
            marginBottom: "3.8rem",
          }}
        >
          <span
            style={{
              fontSize: "1.3rem",
            }}
          >
            hello there! 👋
          </span>
          <br />
          <br />I am{" "}
          <span
            className="attention-span"
            style={{
              color: "hsla(var(--color-primary-dark-6), 1)",
              backgroundColor: "hsla(var(--color-primary-light-11), 0.5)",
              fontWeight: 500,
              fontSize: "1.2rem",
            }}
          >
            Çağrı Okan
          </span>
          , born in 2006 in Istanbul. I am a graduate of TEV İnanç Türkeş
          Private High School and currently an undergraduate student in
          Statistics at{" "}
          <span
            className="attention-span"
            style={{
              color: "hsla(var(--color-primary-dark-6), 1)",
              backgroundColor: "hsla(var(--color-primary-light-11), 0.5)",
              fontWeight: 500,
              fontSize: "1.2rem",
            }}
          >
            Yıldız Technical University
          </span>
          .<br />
          <br />I have experience in{" "}
          <span
            className="attention-span-secondary"
            style={{
              color: "hsla(var(--color-secondary-dark-7), 1)",
              backgroundColor: "hsla(var(--color-secondary-light-11), 0.5)",
              fontWeight: 500,
              fontSize: "1.2rem",
            }}
          >
            music production, graphic design, UI/UX design, full-stack web
            development, data science and artificial intelligence.
          </span>{" "}
          <br />
          <br />
          Additionally, I continuously develop my knowledge and skills in the
          fields of{" "}
          <span
            style={{
              color: "hsla(var(--color-secondary-dark-7), 1)",
              backgroundColor: "hsla(var(--color-secondary-light-11), 0.5)",
              fontWeight: 500,
              fontSize: "1.2rem",
            }}
          >
            mathematics, statistics, sustainability, psychology, and
            entrepreneurship.
          </span>{" "}
          <br />
          <br />
          Here, you’ll find everything I’ve done so far—detailed, polished, and
          styled with a great UI. Feel free to reach out to{" "}
          <a
            href="mailto:cagrokan@gmail.com"
            style={{
              color: "hsl(var(--color-primary-dark-7))",
              backgroundColor: "hsla(var(--color-primary-light-11), 0.5)",
              fontWeight: 500,
              textDecoration: "underline",
              fontSize: "1.2rem",
            }}
          >
            cagrokan@gmail.com
          </a>
          {", "}
          or from the connections at the end of the page.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3.8rem",
          }}
        >
          {[
            [experiences, portfolio, education, socials].map(
              (section, index) => {
                return (
                  <div
                    key={index}
                    className="portfolio-item-container"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "start",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        marginBottom: "1.4rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.2rem",
                      }}
                    >
                      <h1
                        style={{
                          fontWeight: 500,
                          fontSize: "1.6rem",
                          color: "hsla(var(--color-primary-light-1), 0.85)",
                        }}
                      >
                        {index === 0
                          ? "experience"
                          : index === 1
                          ? "projects"
                          : index === 2
                          ? "education"
                          : "connections"}
                      </h1>
                    </div>
                    <div
                      className="portfolio-item-grid"
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.7rem",
                      }}
                    >
                      {section.map((item) => {
                        return <PortfolioItem key={item.id} {...item} />;
                      })}
                    </div>
                  </div>
                );
              }
            ),
          ]}
        </div>

        <div
          style={{
            height: "0.1rem",
            width: "100%",
            backgroundColor: "hsla(var(--color-primary-dark-6), 0.1)",
            margin: "2.5rem 0",
          }}
        />

        <p
          style={{
            color: "hsla(var(--color-primary-dark-1), 0.5)",
            fontSize: "0.8rem",
            marginBottom: "0.6rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          built with 🌪️🧠
        </p>
        <Link
          style={{
            textDecoration: "none",
          }}
          href="/change-log"
        >
          <p
            style={{
              color: "hsl(var(--color-primary-dark-7))",
              marginTop: "0rem",
              fontWeight: 500,
              fontSize: "0.8rem",
            }}
          >
            see change log
          </p>
        </Link>
      </div>
    </div>
  );
}
