"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { confirmAlert } from "react-confirm-alert";

import Button from "@/app/_components/button/Button";

import "react-confirm-alert/src/react-confirm-alert.css";
import AlertMessage from "../alertMessage/AlertMessage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  Question,
  Section,
  setQuestions,
} from "@/redux/questions/questionsSlice";

const TextArea = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [jsonInput, setJsonInput] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [showDetailedError, setShowDetailedError] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState(false);

  const questions = useSelector((state: RootState) => state.questions.value);

  useMemo(() => {
    setJsonInput(JSON.stringify(questions, null, "\t"));
  }, [questions]);

  const onConfirm = () => {
    return router.push("/");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setJsonInput(value);
    setError(null);
  };

  function followsSectionType(data: unknown): data is Section[] {
    if (!Array.isArray(data)) {
      return false;
    }

    return data.every(
      (section) =>
        typeof section.id === "number" &&
        typeof section.section === "string" &&
        Array.isArray(section.questions) &&
        section.questions.every(
          (question: any) =>
            typeof question.id === "number" &&
            typeof question.question === "string" &&
            typeof question.score === "number"
        )
    );
  }

  const handleSubmit = () => {
    try {
      const jsonData = JSON.parse(jsonInput);
      if (
        jsonData &&
        typeof jsonData === "object" &&
        followsSectionType(jsonData)
      ) {
        dispatch(setQuestions(jsonData));
        setSubmitted(true);
        handleAlert("Data submitted successfully, leave to home page");
      } else {
        throw new Error("Input is not a valid JSON object");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const handleAlert = (message: string) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AlertMessage
            message={message}
            onClose={onClose}
            onConfirm={onConfirm}
          />
        );
      },
    });
  };

  const textUpdated = jsonInput !== JSON.stringify(questions);

  return (
    <div className="w-full items-center flex flex-col gap-5">
      <textarea
        className={`w-full h-96 p-4 border rounded-md focus:ring-emerald-500 ${
          textUpdated ? "text-black" : "text-black/60"
        }`}
        placeholder="Enter valid JSON here..."
        value={jsonInput}
        onChange={handleInputChange}
      />
      {error && (
        <div className="mt-2 text-red-500">
          <p>Input is not a valid JSON object</p>
          <button
            className="cursor-pointer text-sm text-blue-500 ml-1"
            onClick={() => setShowDetailedError(!showDetailedError)}
          >
            {showDetailedError ? "Hide Details" : "View More"}
          </button>
          {showDetailedError && (
            <div className="text-sm text-slate-500 mt-2">{error}</div>
          )}
        </div>
      )}
      <div className="flex justify-center w-full space-x-5 p-2">
        <Button text="Submit" disabled={!textUpdated} onClick={handleSubmit} />
        <Button
          text="Return to Homepage"
          onClick={() =>
            textUpdated
              ? handleAlert(
                  "Are you sure you want to leave the page? Any unsubmitted data will be lost"
                )
              : onConfirm()
          }
        />
      </div>
    </div>
  );
};

export default TextArea;
