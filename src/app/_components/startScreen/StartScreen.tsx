import Link from 'next/link';
import React from 'react';

export default function StartScreen() {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-main font-extrabold text-5xl mt-[10%]">
        Welcome to Our Questioner
      </h1>
      <Link
        href="/questions"
        className="flex items-center justify-center text-white bg-main rounded w-[10%] mt-[10%] text-center h-10"
      >
        Start
      </Link>
    </div>
  );
}
