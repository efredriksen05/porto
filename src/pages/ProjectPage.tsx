import { useParams } from "react-router-dom";
import { projectData } from "../projectData";

import { Link } from "lucide-react";

export default function ProjectPage() {
  const { slug } = useParams();

  const project = projectData.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="p-10 pt-20 flex gap-16 h-fit w-full items-center justify-center">
        <div className="left flex-2">
          <img
            src={project.pic}
            alt={project.title}
            className="w-3xl h-120 rounded-3xl object-cover"
          />
        </div>
        <div className="right flex-1">
            <h1 style={{color: "var(--current-color)"}}>{project.title}</h1>
            <p className="text-black py-2 pt-2">{project.description}</p>

            <p className="text-[#989898] pt-2">Techstack</p>
            {project.tech.map((tech) => (
                <span
                key={tech}
                className="text-black text-sm"
            >
            {tech} - 
            </span>
            ))}

            <p className="text-[#989898] pt-5">Links</p>
            <div className="flex gap-2 pt-2 text-black">
                <Link className=""/>
                <a href={project.link} className="text-black">{project.link}</a>
            </div>
            <div className="flex gap-2 pt-2">
                <img src="/github.svg" alt="" className="w-6" />
                <a href={project.link} className="text-black">{project.link}</a>
            </div>

        </div>






      <div className="flex gap-2 py-2">
      </div>
      <div className="flex gap-2">
      </div>

    </main>
  );
}