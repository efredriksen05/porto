import { useParams } from "react-router-dom";
import { projectData } from "../projectData";

import { Link } from "lucide-react";
import { ChevronLeft } from "lucide-react";

export default function ProjectPage() {
  const { slug } = useParams();

  const project = projectData.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="p-10 md:p-20">
        <div className="flex flex-col md:flex-row gap-16 h-fit w-full items-center justify-center">
            <div className="left flex-2 order-2 md:order-1">
            <img
                src={project.pic}
                alt={project.title}
                className="w-lg md:w-3xl h-48 md:h-120 rounded-xl md:rounded-3xl object-cover"
            />
            </div>
            <div className="right flex-1 order-1 md:order-2">
                <h1 style={{color: "var(--current-color)"}}>{project.title}</h1>
                <p className="text-black py-2 pt-2">{project.description}</p>

                <p className="text-[#989898] pt-4">Techstack</p>
                {project.tech.map((tech) => (
                    <span
                    key={tech}
                    className="text-black text-sm"
                >
                {tech} - 
                </span>
                ))}

                <p className="text-[#989898] pt-5">Links</p>
                {(project.weblink && project.githublink) && (
                    <div className="flex gap-2 pt-4 text-black">
                        <Link />
                        <a href={project.weblink} className="text-black">{project.weblink}</a>
                    </div>
                )}
                {project.githublink && (
                    <div className="flex gap-2 pt-2">
                        <img src="/github.svg" alt="" className="w-6" />
                        <a href={project.githublink} className="text-black">{project.githublink}</a>
                    </div>
                )}

            </div>

        </div>
        <button className="rounded-3xl my-10 p-2 text-xs md:hidden" style={{backgroundColor: "var(--current-color)"}} onClick={() => window.history.back()}>
            <ChevronLeft />
        </button>
    </main>
  );
}