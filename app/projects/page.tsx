import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="space-y-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="block group hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 rounded-lg p-4"
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex flex-col">
                <div className="w-full flex justify-between items-baseline mb-2">
                  <span className="text-black dark:text-white font-medium tracking-tight text-xl">
                    {project.title}
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                    {project.year}
                  </span>
                </div>
                <p className="prose prose-neutral dark:prose-invert mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}