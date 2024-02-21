import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <div className='flex flex-col items-center w-full'>
      <h1 className='text-main font-extrabold text-5xl mt-[10%]'>Welcome to Our Questioner</h1>
      <Link href="/questions" className='w-full flex justify-center'>
        <button className='text-white bg-main rounded w-[10%] mt-[10%] text-center h-10'>Start</button>
      </Link>
    </div>
  );
}
