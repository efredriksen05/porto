import type { ProjectItem } from "../projectData";

interface Props {
    project: ProjectItem;
}

export default function ProjectCard({ project }: Props) {
    return (
        <div className="shadow-md rounded-xl">
            <div className="flex gap-8 border border-[#D7D7D7] rounded-xl">
                <img
                    src={project.pic}
                    alt={project.title}
                    className="w-96 rounded-tl-lg rounded-bl-lg object-cover "
                />

                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold">
                        {project.title}
                    </h2>

                    <p className="mt-4 text-gray-600">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4 w-full">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                        <div className="mt-auto flex justify-start">
                            <a href={project.link} className="flex text-white w-18 h-8 items-center justify-center rounded-2xl" style={{backgroundColor: "var(--current-color)"}}>View</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}