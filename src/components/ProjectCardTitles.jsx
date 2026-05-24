/* eslint-disable react/prop-types */
function ProjectCardTitles({ title, desc, status }) {
  return (
    <div className="flex flex-col gap-1">
      <h4
        className={`font-semibold text-base ${status === "completed" ? "text-dark-gray dark:text-white-90 group-hover:text-accent" : "text-gray-400 dark:text-gray-500"} duration-short`}
      >
        {title}
      </h4>

      <p
        className={`text-sm ${status === "completed" ? "text-medium-gray dark:text-light-gray group-hover:text-gray-800 dark:group-hover:text-white-90" : "text-gray-400 dark:text-gray-500"} duration-short`}
      >
        {desc}
      </p>
    </div>
  );
}

export default ProjectCardTitles;
