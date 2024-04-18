"use client";

import AllSectionsResults from "@/app/_components/allSectionsResults/AllSectionsResults";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getScoreAndLength, getTotalScore } from "../_helpers";
import {
  Question,
  Section,
  resetScore,
} from "@/redux/questions/questionsSlice";
import { PreviousArrow } from "../_components/svg";
import { useRouter } from "next/navigation";
const getScoreText = (sectionsData: Section[]) => {
  const [totalScore, totalLength] = sectionsData.reduce(
    (acc, curr) => {
      const [accScore, accLength] = acc;
      const [currScore, currLength] = getScoreAndLength(curr.questions);
      return [accScore + currScore, accLength + currLength];
    },
    [0, 0]
  );

  const score = (totalScore / totalLength) * 10;
  const roundedScore = Math.round(score);
  return sectionsData
    ? `${roundedScore !== score ? "~" : ""}${roundedScore}%`
    : "0%";
};

const getSectionScore = (questions: Question[]) => {
  const score = (getTotalScore(questions) / questions.length) * 10;
  const roundedScore = Math.round(score);
  return roundedScore;
};
const createCsvFile = (results: any[]) => {
  let csvContent = "";

  results.forEach((row) => {
    csvContent += row + "\n";
  });

  const blob = new Blob([csvContent], {
    endings: "native",
    type: "text/csv;charset=utf-8,",
  });
  const objUrl = URL.createObjectURL(blob);

  return objUrl;
};
const ResultsPage = () => {
  const dispatch = useDispatch();

  const sectionsData = useSelector((state: RootState) => state.questions.value);

  const scoreText = getScoreText(sectionsData);
  const router = useRouter();

  const handleClick = () => {
    dispatch(resetScore());
    router.push("/");
  };
  const resultFileDatatFormatter = () => {
    const allQuestions = sectionsData.flatMap((section) => section.questions);
    const finalScore = getSectionScore(allQuestions);

    const EachQuestionScore = (questions: Question[]) =>
      questions.map(
        (question) => `"${question.question}",,,,,,,,${question.score}`
      );

    const sections = sectionsData.reduce((acc, curr) => {
      const quesions = EachQuestionScore(curr.questions);
      return [
        ...acc,
        `"${curr.section}",,,,,,,,${getSectionScore(curr.questions)}%`,
        ...quesions,
        "\n",
      ];
    }, [] as string[]);

    return [`"Final Score",,,,,,,,${finalScore}%\n`, ...sections];
  };

  const downloadFile = () => {
    const result = resultFileDatatFormatter();
    const urlValue = createCsvFile(result);
    router.push(`${urlValue}`);
  };
  return (
    <div className="flex flex-col justify-center items-center  py-16">
      <h1 className="text-2xl font-bold flex justify-between items-center max-w-[800px] w-full py-8 ">
        Results:
        <span className="w-[140px] h-[70px] rounded-lg bg-neutral-200 flex justify-center items-center">
          {scoreText}
        </span>
      </h1>
      <AllSectionsResults sectionResults={sectionsData} />
      <button
        onClick={handleClick}
        className="mt-10 text-white p-3 bg-emerald-500 rounded text-center w-36 focus:outline-none focus:ring focus:ring-slate-500 hover:bg-emerald-600 flex justify-center"
      >
        <PreviousArrow fill="white" /> Back Home
      </button>
      <button
        name="download"
        onClick={downloadFile}
        className="mt-10 text-white p-3 bg-emerald-500 rounded text-center focus:outline-none focus:ring focus:ring-slate-500 hover:bg-emerald-600 flex justify-center"
      >
        Download the result
      </button>
    </div>
  );
};
export default ResultsPage;
