"use client";

import { useRouter } from "next/navigation";

import Button from "../button/Button";

export default function StartScreen() {
  const router = useRouter();

  const handleClick = (url: string) => {
    router.push(url);
  };
  return (
    <div className="flex flex-col items-center justify-center space-y-10 h-full w-[800px] max-w-[800px]">
      <h1 className="text-emerald-500 font-bold text-5xl mt-10">
        Welcome to Our Questionnaire
      </h1>
      <Button text="Start" onClick={() => handleClick("/questions")} />
      <Button text="Custom JSON" onClick={() => handleClick("/addjson")} />
    </div>
  );
}
