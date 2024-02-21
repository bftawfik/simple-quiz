"use client"
import React, { useState } from "react";
import MarkButton from "./MarkButton";

export default function QuestionsNumber() {
  const numbersArray: number[] = Array.from({ length: 10 }, (_, index) => index + 1);
  const [clickedButton, setClickedButton] = useState(0); 

  const handleClick = (value: number) => {
    console.log(`Button ${value} clicked`);
    setClickedButton(value); 
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questions: { id: number, question: string }[] = [
    { id: 1, question: "List the Advantages of TypeScript and why can TypeScript be chosen over JavaScript?" },
    { id: 2, question: "What are the main features of React?" },
    { id: 3, question: "Explain the concept of state in React." },
  ];

  const goToNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, questions.length - 1));
  };

  const goToPreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="flex flex-col w-full ">
      <div className="mt-[3%] ml-[3%] text-[#4CB087]">
        <h2 className="font-semibold text-2xl">Tailwind</h2>
        <p className="text-xl">Question 1 of 5</p>
      </div>

      <div className="flex flex-col items-center mt-[10%]">
        <p className="text-gray-500">
          {questions[currentQuestionIndex].question}
        </p>

        <div className="mt-[7%] text-xl rounded w-[5%] bg-[#4CB087] text-white text-center">
          {clickedButton}
        </div>

        <div className="mt-[10%]">
          <MarkButton onClick={handleClick} values={numbersArray} />
        </div>
      </div>
      <div className="flex justify-around text-[#4CB087]">
        <button onClick={goToPreviousQuestion}>Previous</button>
        <button onClick={goToNextQuestion}>Next</button>
      </div>
    </div>
  );
}
