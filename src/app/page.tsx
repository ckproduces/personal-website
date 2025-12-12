"use client";
import portfolio, {
  education,
  experiences,
  gallery,
  socials,
  portfolioItem,
} from "@/data/data";
import PortfolioItem from "@/components/PortfolioItem";
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
        padding: "5rem 5rem 2rem 5rem",
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
            marginBottom: "3rem",
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
            <div className="scroll-container-bg" />
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
                      backgroundColor: "hsla(var(--color-primary-dark-7), 1)",
                      borderRadius: "50%",
                      ...({ ["--i"]: i } as React.CSSProperties),
                    }}
                  />
                );
              })}
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
                    key={i}
                    style={{
                      width: "0.5rem",
                      height: "0.5rem",
                      backgroundColor: "hsla(var(--color-primary-dark-7), 0.15)",
                      borderRadius: "50%",
                      ...({ ["--i"]: i } as React.CSSProperties),
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
            fontSize: "1.2rem",
            textAlign: "left",
            marginBottom: "3.8rem",
          }}
        >
          <span
            style={{
              fontSize: "2.4rem",
              fontWeight: 750,
              color: "hsla(var(--color-primary-dark-2), 1)",
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
              fontSize: "1.4rem",
            }}
          >
            Çağrı Okan
          </span>
          , an aspiring AI engineer & researcher, data scientist, full stack web developer, and tech entrepreneur.<br />
          <br />I have experience in{" "}
          <span
            className="attention-span-secondary"
            style={{
              color: "hsla(var(--color-secondary-dark-7), 1)",
              backgroundColor: "hsla(var(--color-secondary-light-11), 0.5)",
              fontWeight: 500,
              fontSize: "1.4rem",
            }}
          >
            music production, graphic design, UI/UX design, full-stack web
            development, data science, artificial intelligence, and AI agents.
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
              fontSize: "1.4rem",
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
                        marginBottom: "1.7rem",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <h1
                        style={{
                          fontWeight: 600,
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
                              : index === 3
                              && "connections"}
                      </h1>
                    </div>                      <div
                      className="portfolio-item-grid"
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: section[0].section === "project" ? "0.7rem" : "2.7rem",
                        position: "relative",
                      }}
                    >
                      {(section as portfolioItem[]).map((item) => {
                        return (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "1.4rem",
                            }}
                            key={item.id}
                          >
                            {(item.section === "education" ||
                              item.section === "experience") && (
                                <div
                                  className="çubuk"
                                  style={{
                                    position: "absolute",
                                    top: "calc(3%)",
                                    left: "calc(0.2rem - 0.07rem)",
                                    height: "94%",
                                    width: "0.14rem",
                                    zIndex: "5",
                                    borderRadius: "100rem",
                                  }}
                                />
                              )}
                            {(item.section === "education" ||
                              item.section == "experience") && (
                                <div
                                  style={{
                                    height: "0.4rem",
                                    width: "0.4rem",
                                    borderRadius: "50%",
                                    backgroundColor:
                                      "hsla(var(--color-primary-dark-8))",
                                    zIndex: "40",
                                    flexShrink: "0",
                                    marginBottom: "0.7rem",
                                  }}
                                />
                              )}
                            <PortfolioItem key={item.id} {...item} />
                          </div>
                        );
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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.3rem",
            width: "100%",
          }}
        >
          <p
            style={{
              color: "hsla(var(--color-primary-dark-1), 0.5)",
              fontSize: "0.8rem",
              width: "100%",
              textAlign: "center",
            }}
          >
            built with 🌪️🧠
          </p>
          <p
            style={{
              color: "hsla(var(--color-primary-dark-1), 0.5)",
              fontSize: "0.8rem",
              width: "100%",
              textAlign: "center",
            }}
          >
            © {new Date().getFullYear()} Çağrı Okan. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
