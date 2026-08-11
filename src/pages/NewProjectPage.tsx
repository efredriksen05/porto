import { Link } from "react-router-dom";
import { projectData } from "../projectData";
import NewCard from "../components/NewCard";

export default function NewProjectPage() {
  return (
    <div className="mx-20 py-20">
      <h1 style={{ color: "var(--current-color)" }}>
        Projects
      </h1>

      <div className="flex flex-wrap gap-14 mt-14">
        {projectData.map((project) => (
          <Link
            key={project.title}
            to={`/projects/${project.slug}`}
            className="block"
          >
            <NewCard project={project} />
          </Link>
        ))}
      </div>
    </div>
  );
}