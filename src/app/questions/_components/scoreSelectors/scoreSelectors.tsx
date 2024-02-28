"use client";

interface ButtonProps {
  onClick: (number: number) => void;
}

const ScoreSelectors = ({ onClick }: ButtonProps) => {
  const numbersArray: number[] = Array.from(Array(11).keys());
  return (
    <div className="flex flex-wrap gap-2 px-10">
      {numbersArray.map((number) => (
        <button
          key={number}
          title={`shortcut: ${number < 10 ? number : "f"}`}
          onClick={() => onClick(number)}
          className="bg-emerald-500 text-white font-bold p-2 rounded focus:outline-none  hover:bg-emerald-500/60 w-10 "
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default ScoreSelectors;
