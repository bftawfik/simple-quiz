import SectionResults from "../sectionResults/SectionResults";

interface SectionResults {
  id: number;
  category: string;
  question: string;
  score: number;
}

interface AllSectionsResultsProps {
  sectionResults: SectionResults[];
}
const AllSectionsResults = ({ sectionResults }: AllSectionsResultsProps) => {
  return (
    <div>
      {sectionResults.map((sectionResult) => (
        <SectionResults
          key={sectionResult.id}
          category={sectionResult.category}
          question={sectionResult.question}
          score={sectionResult.score}
        />
      ))}
    </div>
  );
};

export default AllSectionsResults;
