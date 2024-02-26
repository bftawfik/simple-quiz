'use client';

import Button from '@/app/_components/button/Button';

interface AlertMessageProps {
  message: string;
  onClose: () => void;
  onConfirm: () => void;
}

const AlertMessage = ({ message, onClose, onConfirm }: AlertMessageProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-md border border-gray-300 max-w-md">
        <p>{message}</p>
        <div className="mt-4 flex justify-end">
          <Button
            className="px-4 py-2 bg-emerald-500 text-white rounded-md mr-4"
            onClick={() => {
              onConfirm();
              onClose();
            }}
            text="Yes"
          />
          <Button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
            onClick={() => {
              onClose();
            }}
            text="No"
          />
        </div>
      </div>
    </div>
  );
};

export default AlertMessage;
