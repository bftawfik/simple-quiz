'use client';

import { useRouter } from 'next/navigation';

import Button from '../_components/button/Button';

const Success = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-screen">
      <Button text="Back to Homepage" onClick={() => router.push('/')} />
    </div>
  );
};

export default Success;
