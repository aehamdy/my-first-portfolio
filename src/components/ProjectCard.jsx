/* eslint-disable react/prop-types */
import ProjectCardThumbnail from "./ProjectCardThumbnail";
import ProjectCardTitles from "./ProjectCardTitles";

function ProjectCard({ project }) {
  return (
    <article
      className={`group relative w-full h-fit ${project.status === "completed" ? "cursor-pointer" : "cursor-default"}`}
    >
      <div className="flex flex-col gap-3">
        <div className="relative w-full rounded-[25px] overflow-hidden">
          {/* Status Overlay */}
          {project.status !== "completed" && (
            <div className="absolute w-full h-full start-0 top-0 flex flex-col justify-center items-center font-semibold text-lg text-accent bg-black/50 backdrop-blur-sm z-10">
              {project.status !== "completed" && (
                <p className="">{project.status}</p>
              )}
            </div>
          )}

          <ProjectCardThumbnail
            thumbnail={project.media.thumbnail}
            status={project.status}
          />
        </div>

        <ProjectCardTitles
          title={project.info.title}
          desc={project.simpleDiscribtion}
          status={project.status}
        />
      </div>
    </article>
  );
}

export default ProjectCard;
