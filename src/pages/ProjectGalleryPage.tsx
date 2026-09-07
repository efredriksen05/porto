import { Link } from "react-router-dom";
import { projectData } from "../projectData";
import ProjectCard from "../components/ProjectCard";

export default function ProjectGalleryPage() {
  return (
    <div className="mx-8 md:mx-20 py-20">
      <h1 style={{ color: "var(--current-color)" }}>
        Projects
      </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mt-14">
      {projectData.map((project) => (
        <Link
          key={project.slug}
          to={`/projects/${project.slug}`}
          className="block"
        >
          <ProjectCard project={project} />
        </Link>
      ))}
    </div>
    </div>
  );
}