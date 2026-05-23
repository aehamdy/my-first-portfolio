/* eslint-disable react/prop-types */
function ProjectDetailsMetrics({ metrics }) {
  if (!metrics) return null;

  return (
    <section className="text-start">
      <h3 className="font-bold text-lg text-accent mb-3">Metrics</h3>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(metrics).map(([key, value]) => (
          <li
            key={key}
            className="p-3 border border-gray-197 dark:border-dark-gray hover:border-yellow-500/70 rounded-lg duration-v-short"
          >
            <h4 className="font-semibold text-md text-medium-gray dark:text-light-gray capitalize">
              {key}
            </h4>

            <p className="font-medium text-lg text-dark-gray dark:text-soft-white">
              {value}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectDetailsMetrics;
