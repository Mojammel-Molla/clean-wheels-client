import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-700 text-white">
      {/* Animated 404 Error */}
      <div className="relative">
        <h1 className="text-9xl font-extrabold text-yellow-400 animate-pulse">
          404
        </h1>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <svg
            className="w-32 h-32 opacity-20 text-yellow-300 animate-spin-slow"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9l3-3m0 0l-3-3m3 3H9m12 6h-6m-6 6H3m0 0l3-3m-3 3l3 3"
            />
          </svg>
        </div>
      </div>

      {/* Error Message */}
      <p className="mt-6 text-2xl font-semibold">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="mt-2 text-lg text-yellow-200">
        It looks like the page you were trying to reach isn’t available.
      </p>

      {/* Home Button */}
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-yellow-400 text-blue-800 font-bold rounded-md shadow-lg hover:bg-yellow-500 transition duration-300 ease-in-out"
      >
        Go Back Home
      </Link>

      {/* Extra Decorative Element */}
      <div className="mt-8 flex justify-center">
        <svg
          className="w-16 h-16 text-yellow-400 animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9l3-3m0 0l-3-3m3 3H9m12 6h-6m-6 6H3m0 0l3-3m-3 3l3 3"
          />
        </svg>
      </div>
    </div>
  );
};

export default ErrorPage;
