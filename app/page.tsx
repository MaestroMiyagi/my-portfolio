import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section className="max-w-3xl mx-auto">
      <div className="flex flex-col-reverse sm:flex-row items-start">
        <div className="flex-grow">
          <h1 className="mb-4 text-3xl font-bold tracking-tight">
            Iyari Maldonado Fiesco
          </h1>
          <p className="mb-4 text-lg">
            Full-Stack Developer | Mechatronic Engineer | Lifelong Learner
          </p>
        </div>
        <Image
          src="/profile.jpeg"
          alt="Iyari Maldonado"
          className="rounded-full bg-gray-100 sm:ml-6 mb-6 sm:mb-0 mx-auto sm:mx-0 grayscale hover:grayscale-0"
          width={160}
          height={160}
          priority
        />
      </div>

      <div className="prose prose-neutral dark:prose-invert mt-6">
        <h2>Welcome to My Digital Workshop</h2>
        <p>
          Hey there! I'm Iyari, a full-stack developer with a twist. My journey into the world of web development is anything but ordinary. Picture this: a mechatronic engineer who's equally comfortable tinkering with PLCs and crafting elegant code. That's me!
        </p>

        <p>
          My background in mechatronics isn't just a footnote—it's the secret sauce that flavors my approach to web development. I bring a unique blend of hardware intuition and software finesse to every project I touch. This cross-disciplinary expertise allows me to bridge the gap between physical systems and digital interfaces, creating web applications that are not just functional, but intuitive and robust.
        </p>

        <h2>From Circuits to Code</h2>
        <p>
          My transition from the world of circuits and sensors to the realm of JavaScript and React has been an exhilarating ride. I've channeled my engineering problem-solving skills into crafting efficient, scalable web solutions. Whether it's optimizing database queries or designing responsive UIs, I approach each challenge with the same meticulous attention to detail that I once applied to calibrating robotic systems.
        </p>

        <h2><a href="https://yali.vercel.app/">The YALI Project</a>: Where Passion Meets Purpose</h2>
        <p>
          One of my proudest achievements is the YALI project—a full-stack animal adoption and rescue platform that I developed during my time at Kodemia. This project wasn't just about showcasing my technical skills; it was about leveraging technology to make a real difference. Using a stack that included React, Node.js, and MongoDB, I created a platform that connects animals in need with loving homes. The <a href='https://www.youtube.com/live/5tFLXEuknNs?si=vGw66hWd2dMF4FAW&t=1270'>unanimous approval from the jury</a> was the cherry on top!
        </p>

        <h2>Always Learning, Always Growing</h2>
        <p>
          In the fast-paced world of web development, standing still means falling behind. That's why I'm constantly expanding my skill set. Currently, I'm diving into the world of cybersecurity with a diploma in Ethical Hacking. This pursuit not only satisfies my curiosity but also enhances my ability to build secure, robust web applications.
        </p>

        <h2>Let's Build Something Amazing</h2>
        <p>
          I'm excited about the possibilities that lie at the intersection of hardware and software, of creativity and functionality. Whether you're looking to bring a bold new web application to life or need someone who can translate complex technical requirements into elegant code, I'm ready to roll up my sleeves and dive in.
        </p>

        <p>
          Want to chat about a project, swap ideas, or just geek out about the latest in tech? Drop me a line at <b></b>mffchmono@gmail.com or connect with me on <a href="https://linkedin.com/in/iyarimal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>. Let's create something extraordinary together!
        </p>

        <div className="mt-6">
          <h2>Tech Stack Snapshot</h2>
          <p>
            HTML5 | CSS3 | JavaScript | React | Node.js | Express | MongoDB | AWS | Next.js | Git | Java | Python | Saas | Astro | Assembly | Vitest | SCRUM | GCP | Git | And always expanding!
          </p>
        </div>
      </div>
    </section>
  );
}