'use client';
import React from 'react';
interface ButtonProps {
  onClick: (value: number) => void;
  values: number[];
}

const MarkButton = ({ onClick, values }: ButtonProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {values.map((value) => (
        <button
          key={value}
          onClick={() => onClick(value)}
          className="bg-emerald-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default MarkButton;
