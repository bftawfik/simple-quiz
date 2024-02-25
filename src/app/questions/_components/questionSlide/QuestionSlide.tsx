"use client";
import { useState } from "react";

import { NextArrow, PreviousArrow } from "@/app/_components/svg";

import ScoreSelectors from "../scoreSelectors/scoreSelectors";
import { useDispatch } from "react-redux";
import { Section, setScore } from "@/redux/questions/questionsSlice";

const QuestionsSlider = ({ data }: { data: Section[] }) => {
  const dispatch = useDispatch();

  const [sectionIndex, setSectionIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  const section = data[sectionIndex];
  const question = section.questions[questionIndex];

  const totalQuestions = section.questions.length;
  const currentQuestionNumber = questionIndex + 1;

  const handleClick = (value: number) => {
    dispatch(
      setScore({
        sectionId: sectionIndex,
        questionId: questionIndex,
        score: value,
      })
    );
  };

  const handleNextQuestion = () => {
    if (questionIndex + 1 < section.questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      if (sectionIndex + 1 < data.length) {
        setSectionIndex(sectionIndex + 1);
        setQuestionIndex(0);
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    } else {
      if (sectionIndex > 0) {
        setSectionIndex(sectionIndex - 1);
        setQuestionIndex(data[sectionIndex - 1].questions.length - 1);
      }
    }
  };

  const PrevDisabled = questionIndex === 0 && sectionIndex === 0;
  const NextDisabled =
    questionIndex + 1 === totalQuestions && sectionIndex + 1 === data.length;

  return (
    <div className="flex flex-col items-center space-y-12">
      <div className="text-center items-start text-emerald-500 mt-12">
        <h1 className="font-semibold text-2xl">{section.section}</h1>
        Question {currentQuestionNumber} of {totalQuestions}
      </div>
      <div className="lg:text-2xl text-lg md:text-xl flex justify-center items-center rounded-lg bg-slate-50 w-3/4 text-center h-64 lg:p-5 p-1 border border-gray-300 shadow-sm">
        {question.question}
      </div>
      <div className="text-xl rounded-md w-20 text-slate-800 bg-slate-50 text-center h-15 p-2 border border-gray-300 shadow-sm">
        {question.score}
      </div>
      <ScoreSelectors onClick={handleClick} />
      <div className="flex gap-5 items-center ">
        <button
          className={`flex gap-12 hover:bg-slate-100 rounded-md p-1 ${
            PrevDisabled ? "text-white" : null
          }`}
          onClick={handlePreviousQuestion}
        >
          <PreviousArrow fill={`${PrevDisabled ? "white" : "black"}`} />
          Prev
        </button>
        |
        <button
          className={`flex gap-12 hover:bg-slate-100 rounded-md p-1 ${
            NextDisabled ? "text-white" : null
          }`}
          onClick={handleNextQuestion}
        >
          Next <NextArrow fill={`${NextDisabled ? "white" : "black"}`} />
        </button>
      </div>
    </div>
  );
};

export default QuestionsSlider;
