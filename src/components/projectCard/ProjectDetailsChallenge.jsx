/* eslint-disable react/prop-types */
function ProjectDetailsChallenge({ challenge }) {
  return (
    <section className="text-start">
      <h3 className="font-bold text-lg text-accent mb-3">Challenges</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
        <div className="md:col-span-1">
          <h4 className="font-bold text-start md:text-center text-md text-accent">
            Problem
          </h4>

          <p className="text-start font-medium text-md text-dark-gray dark:text-soft-white">
            {challenge.problem}
          </p>
        </div>

        <div className="md:col-span-1">
          <h4 className="font-bold text-start md:text-center text-md text-accent">
            Solution
          </h4>

          <ul className="list-disc text-start">
            {challenge.solution.map((solution, index) => (
              <li key={index} className="list-disc">
                <p className="text-start font-medium text-md text-dark-gray dark:text-soft-white">
                  {solution}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetailsChallenge;
