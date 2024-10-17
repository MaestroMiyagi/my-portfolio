export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: "Yali",
    year: 2023,
    description:
      "Yali is a full-stack animal adoption and rescue platform. It connects animals in need with loving homes, leveraging modern web technologies to make a positive impact on animal welfare.",
    url: "https://yali.vercel.app/",
    technologies: [
      "HTML", "CSS", "JavaScript", "Bootstrap", "React", "MongoDB", "npm",
      "Mongoose", "Express", "Bcrypt", "Node.js", "JWT", "Next.js", "AWS"
    ]
  },
  {
    title: "Text Editor Documentation",
    year: 2024,
    description:
      "A comprehensive documentation site for a specialized text editor. This editor is used by a company to create exam reactives in various programming languages, showcasing my ability to create clear, user-friendly technical documentation.",
    url: "https://my-starlight-exb.vercel.app/",
    technologies: ["HTML", "CSS", "TypeScript", "Astro", "MDX", "npm"]
  },
  {
    title: "Personal Portfolio",
    year: 2024,
    description:
      "My personal portfolio website showcasing my projects, skills, and journey as a full-stack developer. Built with modern web technologies, it represents my ability to create responsive and visually appealing web applications.",
    url: "https://www.iyari.dev/",
    technologies: [
      "HTML", "CSS", "React", "Next.js", "Tailwind CSS", "MDX", "pnpm",
      "TypeScript", "JavaScript"
    ]
  },
];