import ResultsSection from '../_components/resultsSection/ResultsSection';

interface SectionResults {
  id: number;
  category: string;
  question: string;
  score: number;
}

interface ResultsPageProps {
  sectionResults: SectionResults[];
}
const ResultsPage = ({ sectionResults }: ResultsPageProps) => {
  return (
    <div className="flex justify-center items-center">
      {sectionResults.map((sectionResult) => (
        <ResultsSection
          key={sectionResult.id}
          category={sectionResult.category}
          question={sectionResult.question}
          score={sectionResult.score}
        />
      ))}
    </div>
  );
};

export default ResultsPage;
