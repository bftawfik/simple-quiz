"use client";

import AllSectionsResults from "@/app/_components/allSectionsResults/AllSectionsResults";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { getScoreAndLength } from "../_helpers";
import { Section } from "@/redux/questions/questionsSlice";
import Link from "next/link";
import { PreviousArrow } from "../_components/svg";
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
const ResultsPage = () => {
  const sectionsData = useSelector((state: RootState) => state.questions.value);

  const scoreText = getScoreText(sectionsData);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-16">
      <h1 className="text-2xl font-bold flex justify-between items-center max-w-[800px] w-full py-8 ">
        Results:
        <span className="w-[140px] h-[70px] rounded-lg bg-neutral-200 flex justify-center items-center">
          {scoreText}
        </span>
      </h1>
      <AllSectionsResults sectionResults={sectionsData} />
      <Link
        href="/"
        className="mt-10 text-white p-3 bg-emerald-500 rounded text-center w-36 focus:outline-none focus:ring focus:ring-slate-500 hover:bg-emerald-600 flex justify-center"
      >
        <PreviousArrow fill="white" /> Back Home
      </Link>
    </div>
  );
};
export default ResultsPage;
