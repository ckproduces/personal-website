"use client";
import portfolio, { education, experiences, socials } from "@/data/data";
import PortfolioItem from "@/components/PortfolioItem";

export default function Home() {
  return (
    <div
      className="everything"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "2rem",
      }}
    >
      <div
        className="everythingsel"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "35rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            gap: "0.1rem",
            width: "100%",
          }}
        >
          <p
            style={{
              color: "hsla(var(--color-primary-dark-1), 0.5)",
              fontSize: "0.8rem",
              marginBottom: "4rem",
              width: "100%",
              textAlign: "center",
            }}
          >
            last updated: 28 october 2025
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              width: "100%",
              gap: "0.6rem",
            }}
          >
            <img
              className="ck-image"
              src={"/images/crokan.jpeg"}
              alt="çağrı okan"
            />
            <div>
              <p
                style={{
                  fontSize: "1.3rem",
                  width: "100%",
                  textAlign: "left",
                  marginBottom: "0.1rem",
                }}
              >
                Çağrı Okan
              </p>
              <p
                style={{
                  color: "hsla(var(--color-primary-dark-1), 0.5)",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                everything i have done so far
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "0.1rem",
            width: "100%",
            backgroundColor: "hsl(var(--color-primary-light-11))",
            margin: "2.5rem 0",
          }}
        />

        <div
          className="portfolio-item-container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            width: "100%",
            marginBottom: "5rem",
          }}
        >
          <h1
            style={{
              fontWeight: 400,
              fontSize: "1.3rem",
              marginBottom: "1.5rem",
            }}
          >
            experience
          </h1>
          <div
            className="portfolio-item-grid"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
            }}
          >
            {experiences.map((item) => {
              return <PortfolioItem key={item.id} {...item} />;
            })}
          </div>
        </div>

        <div
          className="portfolio-item-container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            width: "100%",
            marginBottom: "5rem",
          }}
        >
          <h1
            style={{
              fontWeight: 400,
              fontSize: "1.3rem",
              marginBottom: "1.5rem",
            }}
          >
            projects
          </h1>
          <div
            className="portfolio-item-grid"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
            }}
          >
            {portfolio.map((item) => {
              return <PortfolioItem key={item.id} {...item} />;
            })}
          </div>
        </div>

        <div
          className="portfolio-item-container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            width: "100%",
            marginBottom: "5rem",
          }}
        >
          <h1
            style={{
              fontWeight: 400,
              fontSize: "1.3rem",
              marginBottom: "1.5rem",
            }}
          >
            education
          </h1>
          <div
            className="portfolio-item-grid"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
            }}
          >
            {education.map((item) => {
              return <PortfolioItem key={item.id} {...item} />;
            })}
          </div>
        </div>

        <div
          className="portfolio-item-container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            width: "100%",
            marginBottom: "5rem",
          }}
        >
          <h1
            style={{
              fontWeight: 400,
              fontSize: "1.3rem",
              marginBottom: "1.5rem",
            }}
          >
            about çağrı
          </h1>
          <div
            className="portfolio-item-grid"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
            }}
          >
            <p
              className="preview"
              style={{
                width: "100%",
                lineHeight: "1.7em",
                color: "hsla(var(--color-primary-dark-2), 0.7)",
                fontSize: "0.9rem",
                textAlign: "left",
              }}
            >
              I am Çağrı Okan, born in 2006 in Istanbul. I am a graduate of TEV
              İnanç Türkeş Private High School and currently an undergraduate
              student in Statistics at Yıldız Technical University. I have
              experience in music production, graphic design, UI/UX design,
              full-stack web development, data science and artificial
              intelligence. Additionally, I continuously develop my knowledge
              and skills in the fields of mathematics, statistics,
              sustainability, psychology, and entrepreneurship. Feel free to
              reach out to{" "}
              <a
                href="mailto:cagrokan@gmail.com"
                style={{
                  color: "hsl(var(--color-primary-dark-7))",
                  fontWeight: 500,
                  textDecoration: "underline",
                }}
              >
                cagrokan@gmail.com
              </a>{" "}
              or from the connections below.
            </p>
          </div>
        </div>

        <div
          className="portfolio-item-container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            width: "100%",
          }}
        >
          <h1
            style={{
              fontWeight: 400,
              fontSize: "1.3rem",
              marginBottom: "1.5rem",
            }}
          >
            connections
          </h1>
          <div
            className="portfolio-item-grid"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {socials.map((item) => {
              return <PortfolioItem key={item.id} {...item} />;
            })}
          </div>
        </div>

        <div
          style={{
            height: "0.1rem",
            width: "100%",
            backgroundColor: "hsl(var(--color-primary-light-11))",
            margin: "2.5rem 0",
          }}
        />

        <p
          style={{
            color: "hsla(var(--color-primary-dark-1), 0.8)",
            fontSize: "0.8rem",
            marginBottom: "3rem",
            width: "100%",
            textAlign: "left",
          }}
        >
          built with 🌪️🧠
        </p>
      </div>
    </div>
  );
}
