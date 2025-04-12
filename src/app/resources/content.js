import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Anh",
  lastName: "Ngo",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Visual Artist & Pianist",
  avatar: "/images/avatar.jpg",
  location: "Hanoi, Vietnam", // Vietnam time zone
  languages: ["Vietnamese", "English"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Art Updates</>,
  description: (
    <>
      I occasionally share my latest artwork, music performances, and thoughts
      on Vietnam's rich artistic heritage.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/_ngohaanh/", // Add your Instagram link
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/haanh.ngo.5076", // Add your YouTube link for piano performances
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:anhngo@example.com", // Update with your actual email
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Art Portfolio`,
  description: `Portfolio showcasing my artwork, music, and creative projects inspired by Vietnamese heritage`,
  headline: <>Visual Artist & Classical Pianist</>,
  subline: (
    <>
      I'm Anh, a student at <InlineCode>Hanoi-Amsterdam High School</InlineCode>{" "}
      with a passion for
      <br /> traditional Vietnamese art, vibrant paintings, and classical piano.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, a young artist and pianist from Vietnam`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a high school student at Hanoi Amsterdam High School majoring in
        History. As an artist, I express myself through various mediums
        including drawing, painting, and music, with a special focus on piano
        performance. My artwork is heavily influenced by Vietnam's rich cultural
        heritage, combining vibrant colors with vintage aesthetics to celebrate
        our traditional values.
      </>
    ),
  },
  work: {
    display: true,
    title: "Extracurricular Activities",
    experiences: [
      {
        company: "Glee Ams Club",
        timeframe: "2022 - Present",
        role: "Instrumental Lead",
        achievements: [
          <>
            Led the instrumental section of the club, coordinating performances
            and arranging music for various school events.
          </>,
          <>
            Integrated traditional Vietnamese musical elements with contemporary
            pieces to create unique performance arrangements.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Glee Ams Club Performance",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Ams Baking Club",
        timeframe: "2021 - Present",
        role: "Active Member",
        achievements: [
          <>
            Created traditional Vietnamese pastries with modern artistic
            presentations, combining culinary and visual arts.
          </>,
          <>
            Participated in school bake sales and cultural festivals, showcasing
            Vietnam's rich culinary heritage.
          </>,
        ],
        images: [],
      },
      {
        company: "Ams Martial Art Club",
        timeframe: "2020 - Present",
        role: "Member",
        achievements: [
          <>
            Practiced traditional Vietnamese martial arts, developing discipline
            and cultural appreciation.
          </>,
          <>
            Incorporated martial arts movements into artistic expressions,
            creating a unique blend of physical and visual arts.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Hanoi Amsterdam High School",
        description: <>Currently studying with a major in History.</>,
      },
      {
        name: "Vietnam National Academy of Music",
        description: <>Piano studies and performance training.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Artistic skills",
    skills: [
      {
        title: "Piano Performance",
        description: (
          <>
            Classically trained pianist with over 8 years of experience,
            specializing in both Vietnamese compositions and Western classical
            music.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Piano performance",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Traditional Vietnamese Painting",
        description: (
          <>
            Creating vibrant, historically-inspired artwork that celebrates
            Vietnam's cultural heritage using both traditional and contemporary
            techniques.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Traditional painting",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "My artistic journey",
  description: `Follow ${person.name}'s creative process and inspirations`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My artwork",
  description: `A collection of paintings, drawings, and creative projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
  work: {
    display: true,
    title: "Extracurricular Activities",
    experiences: [
      {
        company: "Glee Ams Club",
        timeframe: "2022 - Present",
        role: "Instrumental Lead",
        achievements: [
          <>
            Led the instrumental section of the club, coordinating performances
            and arranging music for various school events.
          </>,
          <>
            Integrated traditional Vietnamese musical elements with contemporary
            pieces to create unique performance arrangements.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Glee Ams Club Performance",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Ams Baking Club",
        timeframe: "2021 - Present",
        role: "Active Member",
        achievements: [
          <>
            Created traditional Vietnamese pastries with modern artistic
            presentations, combining culinary and visual arts.
          </>,
          <>
            Participated in school bake sales and cultural festivals, showcasing
            Vietnam's rich culinary heritage.
          </>,
        ],
        images: [],
      },
      {
        company: "Ams Martial Art Club",
        timeframe: "2020 - Present",
        role: "Member",
        achievements: [
          <>
            Practiced traditional Vietnamese martial arts, developing discipline
            and cultural appreciation.
          </>,
          <>
            Incorporated martial arts movements into artistic expressions,
            creating a unique blend of physical and visual arts.
          </>,
        ],
        images: [],
      },
    ],
  },
};

const gallery = {
  label: "Gallery",
  title: "My art gallery",
  description: `A collection of my artwork inspired by Vietnamese heritage`,
  // Images can be updated with your actual artwork
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "Vietnamese traditional artwork",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "Hanoi street scene painting",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "Watercolor portrait",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "Traditional Vietnamese landscape",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "Piano performance",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "Historical scene painting",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "Cultural festival artwork",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "Traditional Vietnamese costume study",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "Rural Vietnam painting",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "Musical theme artwork",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "Historical figure portrait",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "Vietnamese cultural symbols",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "Modern interpretation of traditional art",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "Piano-inspired artwork",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
