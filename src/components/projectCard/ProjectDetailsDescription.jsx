/* eslint-disable react/prop-types */
function ProjectDetailsDescription({ description }) {
  return (
    <section className="text-start">
      <h3 className="font-bold text-lg text-accent mb-3">
        Project Description
      </h3>

      <p className="text-md text-dark-gray dark:text-soft-white">
        {description}
      </p>
    </section>
  );
}

export default ProjectDetailsDescription;
