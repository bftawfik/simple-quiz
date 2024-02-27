import { Section } from "@/redux/questions/questionsSlice";
import SectionResults from "../sectionResults/SectionResults";

interface AllSectionsResultsProps {
  sectionResults: Section[];
}
const AllSectionsResults = ({ sectionResults }: AllSectionsResultsProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      {sectionResults.map((sectionResult) => (
        <SectionResults
          label={sectionResult.section}
          key={sectionResult.id}
          questions={sectionResult.questions}
        />
      ))}
    </div>
  );
};

export default AllSectionsResults;
