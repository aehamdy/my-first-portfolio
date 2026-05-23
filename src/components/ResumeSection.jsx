import { documentIcon } from "../data/icons";
import personalInfo from "../data/personalInfo";
import History from "./History";
import Quotes from "./Quotes";
import SectionTitle from "./SectionTitle";
import SeparatorToRight from "./SeparatorToRight";

function ResumeSection() {
  return (
    <section
      id="resume"
      className="py-main-section-padding bg-section-light dark:bg-section-dark rounded-main-section duration-short"
    >
      <div className="flex justify-between items-center">
        <SectionTitle title="resume" />

        <a
          href={personalInfo.resumeLink}
          target="_blank"
          className="flex items-center gap-2 me-3 text-dark-gray hover:text-accent dark:text-light-gray-dd transition-colors duration-short"
        >
          View Resume {documentIcon}
        </a>
      </div>
      <div className="mt-horizontal-separator-mt">
        <SeparatorToRight />
      </div>
      <History />
      <Quotes />
    </section>
  );
}

export default ResumeSection;
