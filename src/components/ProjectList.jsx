/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import NoProjectsFound from "./NoProjectsFound";
import ProjectCard from "./ProjectCard";
import SeparatorToBottom from "./SeparatorToBottom";
import { useLoading } from "../context/LoadingContext";
import projectsList from "../data/projectsList";

function ProjectList({ selectedCategory }) {
  const projectsArray = [];
  const { setLoading } = useLoading();
  const navigate = useNavigate();

  const filteredProjects = projectsList.filter((project) => {
    if (selectedCategory.toLowerCase() === "all") {
      return project.addToPortfolioProjects;
    } else {
      project.category.includes(selectedCategory.toLowerCase()) &&
        projectsArray.push(project);

      return (
        project.addToPortfolioProjects &&
        project.category.includes(selectedCategory.toLowerCase())
      );
    }
  });

  const handleClick = (slug) => {
    setLoading(true);
    navigate(`/projects/${slug}`);
  };

  return (
    <div
      className={`relative grid grid-cols-1 ${
        filteredProjects.length >= 1 && "sm:grid-cols-2"
      } gap-6 sm:gap-8 p-section-padding before:absolute before:hidden`}
    >
      {filteredProjects.length > 1 && (
        <div className="hidden sm:block absolute start-[50%] top-0 w-[1px] h-full">
          <SeparatorToBottom />
        </div>
      )}
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
          <div key={project.id} onClick={() => handleClick(project.slug)}>
            <ProjectCard project={project} />
          </div>
        ))
      ) : (
        <NoProjectsFound selectedCategory={selectedCategory} />
      )}
    </div>
  );
}

export default ProjectList;
