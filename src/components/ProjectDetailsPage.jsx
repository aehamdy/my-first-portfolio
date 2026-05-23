import { useParams } from "react-router-dom";
import ProjectDetailsMedia from "./projectCard/ProjectDetailsMedia";
import ProjectDetailsHeader from "./projectCard/ProjectDetailsHeader";
import ProjectDetailsChallenge from "./projectCard/ProjectDetailsChallenge";
import ProjectDetailsTechStack from "./projectCard/ProjectDetailsTechStack";
import ProjectDetailsDescription from "./projectCard/ProjectDetailsDescription";
import ProjectDetailsMetrics from "./ProjectDetailsMetrics";
import ProjectDetailsFeatures from "./ProjectDetailsFeatures";
import ProjectDetailsHighlights from "./ProjectDetailsHighlights";
import { useEffect, useState } from "react";
import { useLoading } from "../context/LoadingContext";
import ProjectDetailsLoading from "./ProjectDetailsLoading";
import ProjectDetailsNotFound from "./ProjectDetailsNotFound";
import projectsList from "../data/projectsList";

function ProjectDetailsPage() {
  const { slug } = useParams();

  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { setLoading } = useLoading();

  useEffect(() => {
    let isMounted = true;

    function loadProject() {
      try {
        setIsLoading(true);

        const foundProject = projectsList.find((p) => p.slug === slug);

        if (isMounted) {
          setProject(foundProject || null);
        }
      } catch (error) {
        console.error("Failed to load project:", error);
        setProject(null);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadProject();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  if (isLoading) return <ProjectDetailsLoading />;

  if (!project) return <ProjectDetailsNotFound />;

  return (
    <section className="space-y-4 pb-6 bg-section-light dark:bg-section-dark">
      <ProjectDetailsHeader info={project.info} />

      <div className="space-y-4 p-3 overflow-hidden">
        <ProjectDetailsMedia
          gallery={project.media.gallery}
          thumbnail={project.media.thumbnail.image}
        />

        <div className="flex flex-col gap-10">
          {project.metrics && Object.keys(project.metrics).length > 0 && (
            <ProjectDetailsMetrics metrics={project.metrics} />
          )}

          {project.features && project.features.length > 0 && (
            <ProjectDetailsFeatures features={project.features} />
          )}

          {project.technologies && project.technologies.length > 0 && (
            <ProjectDetailsTechStack technologies={project.technologies} />
          )}

          {project.description?.trim() && (
            <ProjectDetailsDescription description={project.description} />
          )}

          {project.highlights && project.highlights.length > 0 && (
            <ProjectDetailsHighlights highlights={project.highlights} />
          )}

          {project.challenge &&
            (project.challenge.problem ||
              project.challenge.solution?.length > 0) && (
              <ProjectDetailsChallenge challenge={project.challenge} />
            )}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetailsPage;
