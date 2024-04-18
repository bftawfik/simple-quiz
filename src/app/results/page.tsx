"use client";

import AllSectionsResults from "@/app/_components/allSectionsResults/AllSectionsResults";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getScoreAndLength } from "../_helpers";
import { Section, resetScore } from "@/redux/questions/questionsSlice";
import { PreviousArrow } from "../_components/svg";
import { useRouter } from "next/navigation";
import { useState } from "react";
import NameModal from "../_components/nameModal/NameModal";
import {
  createCsvFile,
  resultFileDatatFormatter,
} from "../_helpers/downloadResults";
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
  const [openNameModal, setOpenNameModal] = useState(false);
  const dispatch = useDispatch();

  const sectionsData = useSelector((state: RootState) => state.questions.value);

  const scoreText = getScoreText(sectionsData);
  const router = useRouter();

  const handleClick = () => {
    dispatch(resetScore());
    router.push("/");
  };

  const downloadFile = (fileName: string) => {
    const result = resultFileDatatFormatter(sectionsData);
    createCsvFile(result, fileName);
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
        onClick={() => setOpenNameModal(true)}
        className="mt-10 text-white p-3 bg-emerald-500 rounded text-center focus:outline-none focus:ring focus:ring-slate-500 hover:bg-emerald-600 flex justify-center"
      >
        Save the result
      </button>
      {openNameModal ? (
        <NameModal closeModal={setOpenNameModal} downloadFile={downloadFile} />
      ) : null}
    </div>
  );
};
export default ResultsPage;
