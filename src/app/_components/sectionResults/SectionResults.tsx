import { getTotalScore } from "@/app/_helpers";
import { Question } from "@/redux/questions/questionsSlice";

interface ResultsSectionProps {
  label: string;
  questions: Question[];
}

const SectionResults = ({ label, questions }: ResultsSectionProps) => {
  const score = (getTotalScore(questions) / questions.length) * 10;
  const roundedScore = Math.round(score);
  const scoreText = questions
    ? `${roundedScore !== score ? "~" : ""}${roundedScore}%`
    : "0%";
  return (
    <div className=" bg-neutral-100/50 m-2 pt-5 pb-3 px-5 max-w-[800px] w-full rounded-lg">
      <h1 className="text-xl font-bold pb-4 border-b-2 border-teal-200 mb-4">
        {label} <span>({`${scoreText}`})</span>
      </h1>
      {questions.map((question) => (
        <div
          className="py-4 border-b last:border-none text-black text-base font-normal flex justify-between gap-4 w-full items-center  "
          key={question.id}
        >
          <p className="">{question.question}</p>
          <p className="text-bold text-xl bg-neutral-200 p-4 rounded-lg w-[50px] h-[50px] flex  justify-center items-center">
            {question.score}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionResults;
