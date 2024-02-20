import ResultSection from '../resultSection/resultSection';

interface SectionResults {
  id: number;
  category: string;
  question: string;
  score: number;
}

interface ResultsProps {
  sectionResults: SectionResults[];
}
const Results = ({ sectionResults }: ResultsProps) => {
  return (
    <div className="flex justify-center items-center">
      {sectionResults.map((sectionResult) => (
        <ResultSection
          key={sectionResult.id}
          category={sectionResult.category}
          question={sectionResult.question}
          score={sectionResult.score}
        />
      ))}
    </div>
  );
};

export default Results;
