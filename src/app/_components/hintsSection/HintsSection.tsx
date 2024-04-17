import React from "react";

interface HintsSectionProps {
  hints: string[];
}
const HintsSection = ({ hints }: HintsSectionProps) => {
  return (
    <div className="border-2 p-2 rounded-lg w-3/4  h-40 space-y-2  overflow-y-auto">
      <p className="font-semibold ">Answer must contain :</p>
      <ul className="list-disc ps-4">
        {hints?.map((hint, index) => (
          <li className="text-wrap" key={index}>
            {hint}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HintsSection;
