import type { ProjectItem } from "../projectData";

interface Props {
  project: ProjectItem;
}

export default function NewCard({ project }: Props) {
  return (
    <div className="max-w-84 md:max-w-lg py-2">
      <img
        src={project.pic}
        alt={project.title}
        className="
          w-full
          rounded-lg
          hover:scale-105
          transition-transform
          duration-500
          ease-in-out
        "
      />

      <div className="content flex justify-between">
        <div className="left">
            <h2 className="text-black text-xl md:text-3xl py-2">
                {project.title}
            </h2>
            <p className="text-black">
            {project.product}
            </p>
        </div>
        <div className="flex justify-end items-end">
            <button className="py-2 px-6 rounded-3xl hover:cursor-pointer" style={{backgroundColor: "var(--current-color)"}}>View</button>
        </div>
      </div>


    </div>
  );
}