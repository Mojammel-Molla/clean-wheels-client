import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full space-y-6">
        {/* Logo Section */}
        <div className="text-center text-3xl font-bold text-gray-800">
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-blue-500">
            Clean Wheels
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Welcome back! Please login to your account
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 font-semibold rounded-lg shadow-md transition-all duration-200"
            >
              Log In
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?{' '}
            <Link
              to={'/register'}
              className="text-blue-500 font-semibold hover:underline"
            >
              Register
            </Link>{' '}
            now
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
