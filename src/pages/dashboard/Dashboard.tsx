import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen ">
      {/* Toggle button for small screens */}
      <button
        className="md:hidden fixed top-4 left-2 z-50 bg-blue-700 text-white p-2 rounded"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Sidebar for Navigation */}
      <nav
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:relative z-40 w-1/6 bg-blue-700 text-white p-4 transition-transform duration-300 ease-in-out`}
      >
        <div className="text-3xl font-extrabold mb-8">
          <Link to="/" className="hover:text-yellow-300">
            Dashboard
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="space-y-6">
          <li>
            <Link
              to="/dashboard/overview"
              className="block py-2 px-4 hover:bg-blue-600 rounded-lg"
            >
              Overview
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/reports"
              className="block py-2 px-4 hover:bg-blue-600 rounded-lg"
            >
              Reports
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/settings"
              className="block py-2 px-4 hover:bg-blue-600 rounded-lg"
            >
              Settings
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/profile"
              className="block py-2 px-4 hover:bg-blue-600 rounded-lg"
            >
              Profile
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 bg-gray-100 p-6 ">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
