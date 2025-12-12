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
  section: "experience" | "education" | "project" | "social" | "bos-yapma";
  story?: boolean
  description?: string;
  text?: string;
  storyColor?: "primary" | "secondary" | "tertiary"
}

export interface galleryItem {
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
  section: "gallery";
  description: string;
  horizontal: boolean;
  story: boolean;
  text: string;
  storyColor?: "primary" | "secondary" | "tertiary"
}

export interface story {
  id?: number;
  name?: string;
  date?: Date;
  dateEnd?: Date;
  preview?: string;
  program?: string;
  type?: string[];
  image?: string;
  alt?: string;
  tags?: string[];
  imageBorderRadius?: number;
  seperatePage?: boolean;
  pageContent?: string; // markdown
  href?: string;
  description?: string;
  horizontal?: boolean;
  story?: boolean,
  text?: string,
  section?: "gallery",
  storyColor?: "primary" | "secondary" | "tertiary"
}

let educationlist: portfolioItem[] = [
  {
    id: 1,
    name: "tev inanç türkeş private high school",
    date: new Date(2020, 7, 16),
    dateEnd: new Date(2024, 5, 30),
    preview:
      "TEV İnanç Türkeş Private High School is a co-educational boarding school in Gebze, Kocaeli, operated by the Turkish Education Foundation and admitting gifted students through a selective process.",
    type: ["", "education"],
    image: "/images/tevitol.png",
    alt: "Image of TEV İnanç Türkeş Private High School logo",
    href: "https://tevitol.k12.tr/",
    section: "education",
  },
  {
    id: 2,
    name: `yıldız technical university - basc statistics`,
    date: new Date(2024, 9, 1),
    preview:
      "Yıldız Technical University (YTU) is one of Istanbul’s oldest public institutions, focused on engineering, natural sciences, and more recently, social sciences.",
    type: ["", "education"],

    image: "/images/ytu.png",
    alt: "Image of Yıldız Technical University logo",
    href: "https://www.yildiz.edu.tr/en",
    section: "education",
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
    href: "https://www.artivearti.com/",
    section: "experience",
  },
  {
    id: 2,
    name: "head of research and data analysis commission @ küçükçekmece city council",
    preview:
      "I lead the research and data analysis commission, focusing on data-driven decision making and policy development.",
    date: new Date(2025, 2, 17),
    type: ["", "experience"],
    section: "experience",
  },
  {
    id: 3,
    name: "coordinator of education committee @ ytü data science club",
    preview:
      "I coordinate the education committee, focusing on organizing workshops, seminars, and educational events related to data science.",
    date: new Date(2025, 5, 1),
    type: ["", "experience"],
    href: "https://www.instagram.com/ytuveribilimi/",
    section: "experience",
    seperatePage: true,
    pageContent: `
# YTU Data Science Club
Yıldız Technical University Data Science Club is a community that brings together data-driven solution generation, analytical thinking, and technology. Our aim is to enable students to develop their knowledge and competencies in the field of data science and to support them in turning theory into practice through projects and workshops.

it consists of five departments: **projects/competitions, education, organization, network, and media**. I coordinate the education department.

here is a table of the workshops/events we organized so far.

| Name    | Mentor | Date | Place |
| -------- | ------- | ------- | ------- |
| AI Eşliğinde Veri Bilimi | Ferhat İşyapan, Founder @ Verinin Mutfağı | 2025-10-27 - 2025-11-4 | Online  |
| Veri Biliminin Evrimi ve Yapay Zeka Çağı: AI101 | Oğuzhan Şan MSc. | 2025-10-22 | YTU, class FEF - BZ-A06  |
| Github Workshop | Baki Gül, Software Engineer @ HUAWEI | 2025-12-09 | YTU, class FEF - B2D13  |
`,
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
    section: "social",
  },
  {
    id: 2,
    name: "linkedin",

    preview: "#letsconnect",
    type: ["", "socials"],
    image: "/images/linkedin.png",
    alt: "LinkedIn logo",
    href: "https://www.linkedin.com/in/cagriokan",
    section: "social",
  },
  {
    id: 3,
    name: "kaggle",
    preview: "import pandas as pd",
    type: ["", "socials"],
    image: "/images/kaggle.png",
    alt: "Kaggle logo",
    href: "https://www.kaggle.com/cagrokan",
    section: "social",
  },
  {
    id: 4,
    name: "instagram",
    preview: "holy algorithm",
    type: ["", "socials"],
    image: "/images/instagram.png",
    alt: "Instagram logo",
    href: "https://www.instagram.com/crokan_",
    section: "social",
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
    href: "https://www.instagram.com/ecoistanbulapp",
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
    section: "project",
  },

  {
    id: 2,
    name: "Senato",
    date: new Date(2022, 11, 22),
    dateEnd: new Date(2023, 4, 20),
    preview:
      "Senato is a philosophy journal that turned into a website over time.",
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
    section: "project",
  },
  {
    id: 3,
    name: "Overtime",
    date: new Date(2025, 11, 5),
    dateEnd: new Date(2025, 11, 7),
    image: "/images/overtime.png",
    preview:
      "Overtime is an AI warehouse & inventory management agent. It was built in a hackathon in 48 hours!",
    type: ["", "projects", "website"],
    tags: ["warehouse", "inventory", "ai agent", "hackathon", "logistics"],
    seperatePage: true,
    section: "project",
    pageContent: `
# building overtime: a quick overview
we tackled the problem of slow product searches in warehouses with overtime, an ai assistant for warehouse workers. the core idea? make finding items faster and easier.
![](/images/overtime/overtime-banner.png)
technically, we built overtime using a few key things:

- **gemini-2.5-flash-lite**: this is our main ai brain, handling natural language understanding and generating helpful responses.
- **google agent development kit**: we used this to structure overtime as a helpful agent that workers can interact with.
- **flask**: this is our backend, managing the logic and data flow.
- **next js**: this powers our user-friendly web interface.

we also built in warehouse mapping, real-time inventory data integration, and detailed reporting to help warehouse managers optimize their operations. it's a combination of powerful ai and practical tools, all designed to make warehouse work more efficient.

here is some images:
![walking route optimization on warehouse map](/images/overtime/route.jpeg)
![general info providing about warehouse](/images/overtime/general.jpeg)
    `
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

const changeLog: portfolioItem[] = [
  {
    id: 1,
    name: "change log",
    preview: "change log of the website",
    type: [""],
    tags: ["changes", "change log"],
    seperatePage: true,
    section: "bos-yapma",
    pageContent: `
# change log
---
## november 9, 2025
- home page UI changes
  - added pacman animation
  - info cards are more readable now
  - timeline item added next to time-related sections
- there was a bug about links, fixed it.

---
## november 4, 2025
- added "/change-log" page
- ui changes on the home page
---
## october 28, 2025
- initial commit
    `,
  },
];

export const gallery: (galleryItem | story)[] = [
  {
    story: true,
    text: "welcome to my memories!",
    section: "gallery",
    storyColor: "primary"
  },
  {
    story: true,
    text: "did you know that i became vegan a month ago?",
    section: "gallery",
    storyColor: "secondary"
  },
  {
    id: 1,
    name: "vegfest",
    image: "/gallery/vegfest.jpg",
    description: "istanbul vegfest was awesome!",
    preview: "vegfest",
    date: new Date(2025, 10, 29),
    type: ["gallery"],
    section: "gallery",
    horizontal: false,
    story: false
  },
  {
    id: 2,
    name: "techstars startup weekend",
    image: "/gallery/techstars.jpg",
    description: "techstars startup weekend",
    preview: "techstars startup weekend",
    date: new Date(2025, 11, 7),
    type: ["gallery"],
    section: "gallery",
    horizontal: true,
    story: false
  },
  {
    story: true,
    text: "my go-to profile picture nowadays",
    section: "gallery",
    storyColor: "secondary"
  },
  {
    id: 3,
    name: "pp",
    image: "/gallery/pp.jpeg",
    description: "pp",
    preview: "pp",
    date: new Date(2025, 7, 12),
    type: ["gallery"],
    section: "gallery",
    horizontal: true,
    story: false
  },
  {
    story: true,
    text: "what is she drinking?",
    section: "gallery",
    storyColor: "primary"
  },
  {
    id: 4,
    name: "cute",
    image: "/gallery/cute.jpg",
    description: "a cute day with my girlfriend",
    preview: "cute",
    date: new Date(2025, 7, 12),
    type: ["gallery"],
    section: "gallery",
    horizontal: true,
    story: false
  },
]

export const allData = experienceslist
  .concat(educationlist)
  .concat(portfolio)
  .concat(changeLog);
export const experiences = experienceslist;
export const education = educationlist;
export default portfolio;
