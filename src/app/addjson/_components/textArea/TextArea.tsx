'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { confirmAlert } from 'react-confirm-alert';

import Button from '@/app/_components/button/Button';

import 'react-confirm-alert/src/react-confirm-alert.css';
import AlertMessage from '../alertMessage/AlertMessage';

const TextArea = () => {
  const router = useRouter();
  const [jsonInput, setJsonInput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [showDetailedError, setShowDetailedError] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState(false);

  const onConfirm = () => {
    return router.push('/');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setJsonInput(value);
    setError(null);
  };

  const handleSubmit = () => {
    try {
      const jsonData = JSON.parse(jsonInput);
      if (jsonData && typeof jsonData === 'object') {
        setSubmitted(true);
        alert('Data submitted successfully');
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

  const handleAlert = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AlertMessage
            message="Are you sure you want to leave the page? Any unsubmitted data will be lost"
            onClose={onClose}
            onConfirm={onConfirm}
          />
        );
      },
    });
  };

  if (submitted) {
    window.location.reload();
  }

  return (
    <div>
      <textarea
        className="w-full h-40 p-4 border rounded-md focus:ring-emerald-500"
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
      <div className="flex space-x-5 p-5">
        <Button text="Submit" onClick={handleSubmit} />
        <Button text="Return to Homepage" onClick={handleAlert} />
      </div>
    </div>
  );
};

export default TextArea;
