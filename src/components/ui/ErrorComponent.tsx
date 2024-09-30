import React from 'react';
import { Link } from 'react-router-dom';

const ErrorComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <div className="text-red-500 mb-4">
          <svg
            className="w-16 h-16 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.364 5.636l-12.728 12.728m0-12.728l12.728 12.728"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-red-600 mb-2">
          Oops! Something went wrong.
        </h2>
        <p className="text-gray-600 mb-4">
          We encountered an error while trying to load the services. Please try
          again later or contact support if the issue persists.
        </p>

        <div className="space-y-4">
          <Link
            to="/services"
            className="inline-block w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            Retry Loading Services
          </Link>
          <Link
            to="/contact"
            className="inline-block w-full bg-gray-500 text-white py-2 rounded-lg shadow-md hover:bg-gray-600 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
