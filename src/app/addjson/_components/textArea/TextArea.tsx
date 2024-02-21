'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const TextArea: React.FC = () => {
  const router = useRouter();
  const [jsonInput, setJsonInput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [showDetailedError, setShowDetailedError] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setJsonInput(value);
    setError(null);
  };

  const handleSubmit = () => {
    try {
      const jsonData = JSON.parse(jsonInput);
      if (jsonData && typeof jsonData === 'object') {
        router.push('/success');
      } else {
        throw new Error('Input is not a valid JSON object');
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  return (
    <div>
      <textarea
        className="w-full h-40 p-4 border rounded-md"
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
            {showDetailedError ? 'Hide Details' : 'View More'}
          </button>
          {showDetailedError && (
            <div className="text-sm text-slate-500 mt-2">{error}</div>
          )}
        </div>
      )}
      <button
        className="mt-4 bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-400"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default TextArea;
