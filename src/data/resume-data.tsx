import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Shinichi Wijaya",
  initials: "SW",
  location: "West Jakarta, Indonesia, WIB",
  locationLink: "https://www.google.com/maps/place/West+Jakarta",
  about:
    "Full-stack web developer experienced in Next.js, React, and MySQL, with strong problem-solving and teamwork skills honed through robotics and competition achievements.",
  summary: (
    <>
      Passionate full-stack web developer currently pursuing a degree at
      Tarumanagara University, with expertise in Next.js, React, Tailwind CSS,
      and MySQL. Skilled in adapting to diverse technologies like Vue.js,
      Laravel, and MongoDB, and experienced in leveraging teamwork and
      problem-solving skills through robotics development internships and
      leadership in game development competitions. Driven to build impactful web
      applications while growing professionally in innovative environments.
    </>
  ),
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D5603AQEqZLd0saXIcQ/profile-displayphoto-shrink_800_800/B56ZOw0F8_GkAc-/0/1733838266650?e=1743638400&v=beta&t=BU5QNndRzfUmo5_bKS46tizHpMMzESQJPWozQOJ89tM",
  personalWebsiteUrl: "https://besalt.site",
  contact: {
    email: "wijayashinichi@gmail.com",
    tel: "+6287804035353",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/BeSalt1080",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shinichi-wijaya/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/besalt1080",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "SMK Cinta Kasih Tzu Chi",
      degree: "Diploma in Software Engineering",
      start: "2021",
      end: "2024",
    },
    {
      school: "Tarumanagara University",
      degree: "Bachelor's Degree in Information Technology",
      start: "2024",
      end: "Present",
    },
  ],
  work: [
    {
      company: "PT Megah Alam Semesta",
      link: "https://megahalamsemesta.web.indotrading.com/about",
      badges: ["On Site", "Arduino", "Problem Solving"],
      title: "Robotics Developer",
      start: "07/2022",
      end: "09/2022",
      description:
        "Collaborated with team members to brainstorm ideas, develop prototypes, and ensure successful implementation of robotic solutions.",
    },
    {
      company: "PT Panasonic Gobel Indonesia",
      link: "https://www.panasonic.com/id/",
      badges: ["On Site", "Laravel", "Go"],
      title: "Management Information System",
      start: "02/2025",
      end: "03/2025",
      description:
        "Collaborated with team members to brainstorm ideas, develop prototypes, and ensure successful implementation of robotic solutions.",
    },
  ],
  skills: [
    "React/Next.js",
    "Tailwind CSS",
    "MySQL",
    "TypeScript",
    "Vue.js",
    "Laravel",
    "MongoDB",
    "Flask",
    "Git",
    "Linux",
    "C#",
    "UI/UX",
    "Unity",
    "Team Work",
    "Problem Solving",
  ],
  projects: [
    {
      title: "Kuma",
      techStack: ["Vue.js", "Flask", "MySQL", "Tailwind CSS"],
      description:
        "Commissioned university project: Full-stack e-commerce platform for shoe sales featuring CMS, search filters, wishlist, JWT authentication, and invoice system. Built with Vue.js frontend, Flask backend, and MySQL database.",
      link: {
        label: "GitHub Repo",
        href: "https://github.com/BeSalt1080/kuma",
      },
    },
    {
      title: "Pengaduan Sekolah",
      techStack: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS"],
      description:
        "School issue-reporting CRUD application with Laravel backend and Vue.js frontend. Demonstrates full-stack development skills through streamlined issue tracking and management features.",
      link: {
        label: "GitHub Repo",
        href: "https://github.com/BeSalt1080/pengaduanSekolah",
      },
    },
  ],
  achievements: [
    {
      title: "GameJam+ Indonesia",
      badges: ["Unity", "Team Work", "Leadership", "Problem Solving"],
      position: "Honorable Mention for Best Pitch",
      date: "11/2024",
      description:
        "Collaborated with a team to design and develop a game titled 'One Last Game' within a tight 3-day deadline, using Unity. Chose 'Sprite & Sphere' as the theme, creating a unique and engaging gameplay experience. Earned an Honorable Mention for Best Pitch for effectively presenting our game concept, showcasing strong teamwork, leadership, and problem-solving skills under pressure.",
    },
    {
      title: "Hology 7.0 Game Development",
      badges: ["Unity", "Team Work", "Leadership", "Problem Solving"],
      position: "Participant",
      date: "09/2024",
      description:
        "Participated in a competitive game development event, working with a team to create a functional game prototype using Unity. Contributed to brainstorming, design, and development phases, showcasing teamwork, leadership, and problem-solving abilities under time constraints.",
    },
    {
      title: "IT Fest 4.0 Game Making",
      badges: ["Unity", "Team Work", "Leadership", "Problem Solving"],
      position: "Participant",
      date: "08/2024",
      description:
        "Engaged in a game development competition, collaborating with a team to build a game prototype using Unity. Played an active role in planning, coding, and debugging, while demonstrating strong teamwork, leadership, and creative problem-solving skills.",
    },
    {
      title: "LKS IT Software Solution in West Jakarta",
      badges: ["Laravel", "Vue.js", "Tailwind CSS", "Problem Solving"],
      position: "5th Place",
      date: "08/2023",
      description:
        "Competed in a regional IT competition, securing 5th Place by developing a software solution using Laravel, Vue.js, and Tailwind CSS. Applied problem-solving skills to design and implement a functional application, showcasing technical expertise and the ability to work under pressure.",
    },
  ],
} as const;
