'use client';
import React, { useState } from 'react';
import MarkButton from '../markButton/MarkButton';
import { NextArrow, PreviousArrow } from '../svg';

export default function QuestionsNumber() {
  const numbersArray: number[] = Array.from(
    { length: 10 },
    (_, index) => index + 1
  );
  const [clickedButton, setClickedButton] = useState(0);

  const handleClick = (value: number) => {
    console.log(`Button ${value} clicked`);
    setClickedButton(value);
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questions: { id: number; question: string }[] = [
    {
      id: 1,
      question:
        'List the Advantages of TypeScript and why can TypeScript be chosen over JavaScript?',
    },
    { id: 2, question: 'What are the main features of React?' },
    { id: 3, question: 'Explain the concept of state in React.' },
  ];

  const goToNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      Math.min(prevIndex + 1, questions.length - 1)
    );
  };

  const goToPreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="p-5">
      <div className="p-5 text-[#4CB087]">
        <h2 className="font-semibold text-2xl">Tailwind</h2>
        <p className="text-xl">Question 1 of 5</p>
      </div>
      <div className="flex flex-col items-center p-5">
        <div className="overflow-hidden lg:text-2xl flex justify-center items-center text-xs rounded bg-slate-50 w-3/4 text-center h-64 lg:p-5 m-10 p-1 border border-gray-500">
          {questions[currentQuestionIndex].question}{' '}
        </div>
        <div className="m-10 text-2xl rounded w-20 text-slate-500 bg-slate-50 text-center h-15 p-2 border border-gray-500">
          {clickedButton}
        </div>
        <div className="p-5 flex flex-col">
          <MarkButton onClick={handleClick} values={numbersArray} />
          <div className="flex justify-center items-center p-5 gap-5 ">
            <button
              className="flex basis-1/2 justify-end justify-between"
              onClick={goToPreviousQuestion}
            >
              <PreviousArrow />
              Prev
            </button>
            |
            <button
              className="flex basis-1/2 justify-between"
              onClick={goToNextQuestion}
            >
              Next <NextArrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
