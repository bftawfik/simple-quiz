interface ResultsSectionProps {
  category: string;
  question: string;
  score: number;
}

const SectionResults = ({ category, question, score }: ResultsSectionProps) => {
  return (
    <div className="bg-opacity-50 bg-emerald-500 m-2 p-2 rounded-lg w-3/6">
      <h1 className="text-base font-bold">{category}</h1>
      <p className="text-white text-base font-normal">{question}</p>
      <p>Score: {score}/10</p>
    </div>
  );
};

export default SectionResults;
