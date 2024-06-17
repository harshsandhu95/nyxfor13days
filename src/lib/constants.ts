import { Certification, Education, Experience, Project, Skill } from "./types";

export const details = {
  name: "Harshdeep Sandhu",
  title: "Software Engineer",
  location: "Ludhiana, India",
  email: "me@harshsandhu.com",
  phone: "(+91) 734 723 7673",
  website: "harshsandhu.com",
  linkedin: "linkedin.com/in/nyxfor13days",
  github: "github.com/nyxfor13days",
  objective:
    "Tech enthusiast and problem solver with a knack for creative solutions. Passionate about innovation, lifelong learning, and making a positive impact. 🚀🌟",
};

export const education: Education[] = [
  {
    id: 1,
    institute: "CT University",
    degree: "B.Tech Computer Science",
    location: "Ludhiana, Ind",
    startDate: "August 2019",
    endDate: "August 2022",
    description:
      "Completed B.Tech in Computer Science with a focus on Artificial Intelligence, gaining expertise in DSA, System Design, C, Web Development, Computer Architecture, and Cyber Security. Contributed to a robotics and automation lab as an ambassador. Engaged in a 6-month training to develop AI models and integrate them into web applications.",
  },
  {
    id: 2,
    institute: "Guru Nanak Dev Engineering College",
    degree: "Diploma in Computer Science",
    location: "Ludhiana, Ind",
    startDate: "August 2015",
    endDate: "June 2019",
    description:
      "I completed a diploma in Computer Science specializing in Web Development, mastering DSA, ASP.NET basics, OOP, PHP, HTML, CSS, JavaScript, Computer Architecture, and Open Source Tech. I also attended a 6-week training on front-end and PHP backend development.",
  },
];

export const experience: Experience[] = [
  {
    id: 1,
    company: "Dhan Technology Labs India Pvt. Ltd.",
    position: "Sr. Frontend Developer",
    location: "Remote",
    startDate: "Nov 2022",
    endDate: "Present",
    description:
      "Guided the team to develop a high-performing SaaS app using MUI and React. Conducted R&D on React Data Grids and Charts. Implemented unit and end-to-end tests. Explored React Native with Expo through research, enhancing app capabilities.",
  },
  {
    id: 2,
    company: "Pragyaware Informatics Pvt. Ltd.",
    position: "Jr. Frontend Developer",
    location: "Ludhiana, Ind",
    startDate: "Feb 2022",
    endDate: "Nov 2022",
    description:
      "Translated Adobe XD designs into Next.js and React apps. Optimized and maintained legacy websites. Developed user interfaces for WordPress sites, improving functionality and user experience.",
  },
  {
    id: 3,
    company: "Pragyaware Informatics Pvt. Ltd.",
    position: "Frontend Developer",
    location: "Ludhiana, Ind",
    startDate: "Feb 2020",
    endDate: "Mar 2021",
    description:
      "During the lockdown, while attending online B.Tech lectures, I gained expertise in system design processes. Converted wireframe designs into functional React applications and maintained legacy WordPress sites, enhancing their performance and usability.",
  },
];

export const skills: Skill[] = [
  {
    title: "Programming",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Golang",
      "Lua",
      "Bash",
      "PHP",
    ],
  },

  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Astro",
      "HTML",
      "CSS",
      "SASS",
      "CSS Frameworks",
      "Wordpress",
    ],
  },

  {
    title: "Backend",
    skills: ["Node.js", "Express", "Django", "Flask", "Go", "REST", "GraphQL"],
  },

  {
    title: "Design",
    skills: ["Figma", "Adobe Illustrator", "Adobe XD", "Adobe Photoshop"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "Docker",
      "Nginx",
      "GitHub Actions",
      "Postman",
      "VS Code",
      "Neovim",
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "The Bible App",
    description:
      "Built with Expo, JavaScript, React Native, Native Base, and Styled Components, the Bible App provides an ad-free, simple, and appealing Bible experience. It features cross-platform compatibility, allowing access to Bible teachings on both iOS and Android devices.",
  },
  {
    id: 2,
    title: "Gradin App",
    description:
      "The Gradin App leverages NextJs, TailwindCSS, and AI algorithms to streamline educational processes. It simplifies administrative tasks, offers personalized feedback, and enhances learning environments through innovative assessments.",
  },
  {
    id: 3,
    title: "BeautiCanvas",
    description:
      "BeautiCanvas facilitates beauty service transactions by connecting clients with stylists. It offers free customer registration and stylist membership options, streamlining the process for beauty services.",
    link: "https://beauticanvas.com",
  },
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Design and Develop a Website using Figma and CSS",
    issuer: "Coursera",
    date: "Sep 2022",
    skills: ["CSS", "Front-End Development", "HTML", "User Interface Design"],
  },
  {
    id: 2,
    title: "Introduction to Front-End Development",
    issuer: "Coursera",
    date: "Sep 2022",
    skills: ["CSS", "Front-End Development", "HTML", "User Interface Design"],
  },
  {
    id: 3,
    title: "Programming with JavaScript",
    issuer: "Coursera",
    date: "Sep 2022",
    skills: ["Front-End Development", "JavaScript"],
  },
  {
    id: 4,
    title: "Version Control",
    issuer: "Coursera",
    date: "Sep 2022",
    skills: ["Git"],
  },
  {
    id: 5,
    title: "CSS",
    issuer: "HackerRank",
    date: "Aug 2022",
    skills: ["CSS", "Front-End Development", "HTML", "User Interface Design"],
  },
  {
    id: 6,
    title: "Javascript (Basic)",
    issuer: "HackerRank",
    date: "Aug 2022",
    skills: ["Front-End Development", "HTML", "JavaScript"],
  },
  {
    id: 7,
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "Aug 2022",
    skills: ["Problem Solving"],
  },
  {
    id: 8,
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "Aug 2022",
    skills: ["Python"],
  },
  {
    id: 9,
    title: "React (Basic)",
    issuer: "HackerRank",
    date: "Aug 2022",
    skills: ["CSS", "Front-End Development", "HTML", "React.js", "JavaScript"],
  },
];

export const navigation = [
  { id: 0, name: "Home", link: "/" },
  { id: 1, name: "Blog", link: "/blog" },
  { id: 2, name: "Resume", link: "/resume" },
  { id: 3, name: "Contact", link: "/contact" },
];
