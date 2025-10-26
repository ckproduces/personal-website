export interface portfolioItem {
  id: number;
  name: string;
  date?: Date;
  dateEnd?: Date;
  preview: string;
  program?: string;
  type: string[];
  image?: string;
  alt?: string;
  tags?: string[];
  imageBorderRadius?: number;
  seperatePage?: boolean;
  pageContent?: string; // markdown
  href?: string;
}

let educationlist: portfolioItem[] = [
  {
    id: 1,
    name: "tev inanç türkeş private high school",
    date: new Date(2020, 7, 16),
    dateEnd: new Date(2024, 5, 30),
    preview:
      "Turkish Education Foundation İnanç Türkeş Private High School is an independent co-educational boarding high school located in Gebze, Kocaeli, Turkey. It operates under the umbrella of the Turkish Education Foundation and accepts gifted and talented students through a tailored student selection process.",
    type: ["", "education"],
    image: "/images/tevitol.png",
    alt: "Image of TEV İnanç Türkeş Private High School logo",
    href: "https://tevitol.k12.tr/",
  },
  {
    id: 2,
    name: `yıldız technical university - basc statistics`,
    date: new Date(2024, 9, 1),
    preview:
      "Yıldız Technical University (Turkish: Yıldız Teknik Üniversitesi, often simply referred to as YTU or Yıldız) is a prominent public technical university dedicated to engineering and natural sciences, as well as social sciences recently, and is one of the oldest educational institutions in Istanbul, Turkey.",
    type: ["", "education"],

    image: "/images/ytu.png",
    alt: "Image of Yıldız Technical University logo",
    href: "https://www.yildiz.edu.tr/en",
  },
];

let experienceslist: portfolioItem[] = [
  {
    id: 1,
    name: "monitoring specialist @ artı ve artı it consulting",
    preview:
      "I provide 24/7 IT service management, reviewing and triaging incoming tickets. I ensure accurate classification and timely escalation to the appropriate technical teams, maintaining service continuity and adherence to operational standards.",
    date: new Date(2025, 6, 1),
    type: ["", "experience"],
    tags: ["hybrid", "it", "consulting", "monitoring", "specialist"],
    href: "https://www.artivearti.com/",
  },
  {
    id: 2,
    name: "head of research and data analysis commission @ küçükçekmece city council",
    preview:
      "I lead the research and data analysis commission, focusing on data-driven decision making and policy development.",
    date: new Date(2025, 2, 17),
    type: ["", "experience"],
    tags: ["research", "data analysis", "policy", "council"],
  },
  {
    id: 3,
    name: "coordinator of education committee @ ytü data science club",
    preview:
      "I coordinate the education committee, focusing on organizing workshops, seminars, and educational events related to data science.",
    date: new Date(2025, 5, 1),
    type: ["", "experience"],
    tags: ["education", "data science", "workshops", "seminars"],
    href: "https://www.instagram.com/ytuveribilimi/",
  },
];

export const socials: portfolioItem[] = [
  {
    id: 1,
    name: "github",
    preview: "find my public code repositories here",
    type: ["", "socials"],
    image: "/images/github.svg",
    alt: "GitHub logo",
    href: "https://github.com/ckproduces",
  },
  {
    id: 2,
    name: "linkedin",

    preview: "#letsconnect",
    type: ["", "socials"],
    image: "/images/linkedin.png",
    alt: "LinkedIn logo",
    href: "https://www.linkedin.com/in/cagriokan",
  },
  {
    id: 3,
    name: "kaggle",
    preview: "import pandas as pd",
    type: ["", "socials"],
    image: "/images/kaggle.png",
    alt: "Kaggle logo",
    href: "https://www.kaggle.com/cagrokan",
  },
];

let portfolio: portfolioItem[] = [
  {
    id: 1,
    name: "EcoIstanbul",
    date: new Date(2023, 2, 26),
    dateEnd: new Date(2023, 5, 30),
    preview:
      "A sustainable tourism app that shows all possible green routes and places in Istanbul.",
    type: ["", "projects", "competitions"],
    tags: [
      "eco",
      "istanbul",
      "sustainability",
      "environment",
      "nature",
      "tourism",
      "green",
      "tourists",
      "app",
    ],
    image: "/images/ecoistanbul.png",
    alt: "EcoIstanbul project image",
    pageContent: `
# ecoistanbul
EcoIstanbul is a green artificial intelligence project that was made to ensure locals and tourists in Istanbul use the most ecological ways of living. It was created for the international competition [World Affairs Challenge (WAC)](https://worlddenver.org/world-affairs-challenge/) and got us 6th place worldwide.

Below is an explanation of the technical side and our solution to the problem of unsustainable tourism in Istanbul.

## what it is
it was intended to be an android mobile app. The preliminary round began with the following design.
![EcoIstanbul app first design](/images/ecoistanbul-ui.png)
it had four main tabs: **directions, accommodations, leisure, and eco-tips.**

directions, accommodations, and leisure tabs are self-explanatory: they list the possible options for users. the main improvement is that they use a ranking system that gives importance to options' eco-friendliness scores. eco-friendliness score is calculated with methods used in literature.

eco-tips tab was an educational attempt. it served as an endless-scroll page that had ecological tips, quizzes, facts, and valuable resources for the user.

## after the results
well, 6th place did not make us happy. so we kept improving the product. below is displayed the new design.
![EcoIstanbul app new design](/images/ecoistanbul-ui-2.png)
it had a much more minimalistic look, with a clean representation of the features.

---
needless to say, the app was never published. we eventually stopped working on it due to the inadequacy of technical skills in the team and lack of R&D time on school campus. but it was a valuable experience that made me go through every single step of designing, developing, and deploying a project. also, my current main area of interest is artificial intelligence, thanks to hours of research spent for ecoistanbul.
`,
    seperatePage: true,
  },

  {
    id: 2,
    name: "Senato",
    date: new Date(2022, 11, 22),
    dateEnd: new Date(2023, 4, 20),
    preview:
      "Senato is a philosophy journal that turned into a website over time",
    type: ["", "projects", "website"],
    tags: ["senato", "philosophy", "journal", "website", "ui", "design"],
    seperatePage: true,
    pageContent: `
# senato
Senato was started as a philosophy journal in the philosophy club of my high school. After the first issue was published, I wanted to digitalize it for more people to read it. When I had become the head of the club and the main editor of the second issue, I started working on a website that would go parallel with the journal and include articles written by the club members. 
## "Write Your Spark"
It all started with the motto "Write your spark." I worked for hours to create a prototype for the website. This was the first idea:
![Senato website design](/images/senato-ui.png)
I constantly improved the product and aligned it to club members' needs. It was the first **serious** project that I have created involving complex UI management, database processes, and managing user behavior.

The website is not live anymore, but traces from Senato can be easily noticed in my life since I felt emotionally committed to the project.

---
[read the second issue of senato](https://www.yumpu.com/tr/document/view/67057044/senato-2-sayi) 
    `,
  },
];

portfolio = portfolio
  .sort((a, b) => {
    return (a.date?.getTime() ?? 0) - (b.date?.getTime() ?? 0);
  })
  .reverse();

portfolio.map((i) => {
  // shuffle tags
  if (i.tags) {
    i.tags = i.tags.sort(() => Math.random() - 0.5);
  }
});

educationlist = educationlist
  .sort((a, b) => {
    const aTime = a.date?.getTime() ?? 0;
    const bTime = b.date?.getTime() ?? 0;
    return aTime - bTime;
  })
  .reverse();

experienceslist = experienceslist
  .sort((a, b) => {
    const aTime = a.date?.getTime() ?? 0;
    const bTime = b.date?.getTime() ?? 0;
    return aTime - bTime;
  })
  .reverse();

educationlist.map((i) => {
  // shuffle tags
  if (i.tags) {
    i.tags = i.tags.sort(() => Math.random() - 0.5);
  }
});

export const experiences = experienceslist;
export const education = educationlist;
export default portfolio;
