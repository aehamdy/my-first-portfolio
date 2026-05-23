/* eslint-disable react/prop-types */
function ProjectDetailsTechStack({ technologies }) {
  return (
    <section className="text-start">
      <h3 className="font-bold text-lg text-accent mb-3">Tech Stack</h3>

      <ul className="flex flex-wrap items-center gap-2">
        {technologies.map((tech, index) => (
          <li
            key={index}
            className="text-sm text-dark-gray dark:text-light-gray-dd dark:hover:text-dark-gray bg-light-gray-dd dark:bg-dark-gray hover:bg-accent border border-transparent hover:border-yellow-500/70 rounded-xl duration-v-short"
          >
            <span className="flex py-1 px-2">{tech}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectDetailsTechStack;
