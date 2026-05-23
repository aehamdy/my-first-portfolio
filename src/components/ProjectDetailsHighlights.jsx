/* eslint-disable react/prop-types */
function ProjectDetailsHighlights({ highlights }) {
  return (
    <section className="text-start">
      <h3 className="font-bold text-lg text-accent mb-3">Key Highlights</h3>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6 list-disc">
        {highlights.map((highlight, index) => (
          <li key={index}>
            <p className="font-medium text-md text-dark-gray dark:text-soft-white">
              {highlight}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectDetailsHighlights;
