import ProjectCard from "../components/ProjectCard";
import { projectData } from "../projectData";

export default function ProjectPage(){
    return(
        <div className="h-fit text-black mx-20 mt-20">
            <h1 style={{color: ("var(--current-color")}}>Projects</h1>
            <div className="flex flex-col gap-10 text-black mt-10">
                {projectData.map((project) => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                    />
                ))}
            </div>
        </div>
    )
}