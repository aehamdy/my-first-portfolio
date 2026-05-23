/* eslint-disable react/prop-types */
import {
  caseStudyIcon,
  externalLinkicon,
  figmaIcon,
  githubIcon,
} from "../../data/icons";

function ProjectDetailsLinks({ links }) {
  return (
    <div className="flex items-center gap-4">
      {links.github && (
        <div className="text-dark-gray dark:text-light-gray hover:text-accent rounded-md duration-300">
          <a
            href={links.github}
            target="_blank"
            className="text-current text-xl"
          >
            {githubIcon}
          </a>
        </div>
      )}

      {links.live && (
        <div className="text-dark-gray dark:text-light-gray hover:text-accent rounded-md duration-300">
          <a href={links.live} target="_blank" className="text-current text-xl">
            {externalLinkicon}
          </a>
        </div>
      )}

      {links.figma && (
        <div className="text-medium-gray hover:text-accent bg-dark-gray rounded-md duration-300">
          <a
            href={links.figma}
            target="_blank"
            className="text-current text-xl"
          >
            {figmaIcon}
          </a>
        </div>
      )}

      {links.caseStudy && (
        <div className="text-medium-gray hover:text-accent bg-dark-gray rounded-md duration-300">
          <a
            href={links.caseStudy}
            target="_blank"
            className="text-current text-xl"
          >
            {caseStudyIcon}
          </a>
        </div>
      )}
    </div>
  );
}

export default ProjectDetailsLinks;
