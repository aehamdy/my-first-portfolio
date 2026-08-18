/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { arrowLeft } from "../../data/icons";
import ProjectDetailsLinks from "./ProjectDetailsLinks";

function ProjectDetailsHeader({ info }) {
  const { title, role, links } = info;

  return (
    <div className="sticky top-0 flex justify-between items-center py-2 px-5 bg-section-light/80 dark:bg-section-dark/80 backdrop-blur-md shadow-sm z-10">
      <div className="flex justify-center items-center w-fit text-light-gray dark:text-medium-gray hover:text-dark-gray hover:bg-accent border border-gray-197 dark:border-dark-gray hover:border-accent rounded-md duration-300">
        <Link to="/#projects" className="p-2 text-current duration-300">
          {arrowLeft}
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="font-bold text-lg text-accent">{title}</h2>

        <p className="text-xs text-start text-dark-gray dark:text-white-90">
          Role: {role}
        </p>
      </div>

      <ProjectDetailsLinks links={links} />
    </div>
  );
}

export default ProjectDetailsHeader;
