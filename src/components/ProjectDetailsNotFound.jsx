import { Link } from "react-router-dom";
import { arrowLeft } from "../data/icons";

function ProjectDetailsNotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-section-light dark:bg-section-dark">
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-bold text-heading-light dark:text-heading-dark">
          Project Not Found
        </h2>

        <p className="text-paragraph-light dark:text-paragraph-dark">
          The requested project does not exist.
        </p>

        <div className="flex justify-center">
          <Link
            to="/#projects"
            className="flex items-center gap-2 hover:gap-4 w-fit p-2 text-accent hover:text-black hover:bg-accent border border-yellow-600/30 rounded-md duration-300"
          >
            {arrowLeft} Back
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetailsNotFound;
