'use client';
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
          onClick={() => onClick(number)}
          className="bg-emerald-500 text-white font-bold p-2 rounded focus:outline-none focus:ring focus:ring-slate-500 w-10 hover:text-slate-800"
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default ScoreSelectors;
