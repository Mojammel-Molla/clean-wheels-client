import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
      <div className="flex flex-col justify-center items-center space-y-6">
        <div className="w-24 h-24 rounded-full border-8 border-t-transparent border-white animate-spin"></div>
        <p className="text-white text-lg font-semibold">
          Fetching Data... Please wait
        </p>
        <div className="flex items-center justify-center mt-4">
          <div className="bg-white p-2 rounded-lg shadow-lg">
            <svg
              className="w-8 h-8 animate-pulse text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18M9 3v18m6-18v18M3 3l9 9m0 0l9-9M9 12l9 9M3 21l9-9"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
