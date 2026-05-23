/* eslint-disable react/prop-types */
function ProjectDetailsFeatures({ features }) {
  return (
    <section className="text-start">
      <h3 className="font-bold text-lg text-accent mb-3">Features</h3>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 list-disc">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <p className="font-medium text-md text-dark-gray dark:text-soft-white">
              {feature}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectDetailsFeatures;
