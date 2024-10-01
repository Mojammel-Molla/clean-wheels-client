import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-700 p-6 drop-shadow-2xl shadow-2xl ">
      <div className="max-w-7xl mx-auto flex justify-between items-center ">
        {/* Logo */}
        <div className="text-white text-3xl font-extrabold">
          <Link to="/" className="flex items-center space-x-2">
            {/* Car wash icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 text-yellow-300 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16v2a1 1 0 001 1h16a1 1 0 001-1v-2M3 8v8m0-4h18m-7 0v8m-2-8v8m-7 0v8"
              />
            </svg>
            {/* Logo text */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-blue-400 drop-shadow-md">
              Clean Wheels
            </span>
          </Link>
        </div>

        {/* Menu Links for larger screens */}
        <div className="hidden md:flex space-x-8 items-center font-semibold">
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive
                ? 'text-yellow-400 underline'
                : 'text-white hover:text-yellow-300'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? 'text-yellow-400 underline'
                : 'text-white hover:text-yellow-300'
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/bookings"
            className={({ isActive }) =>
              isActive
                ? 'text-yellow-400 underline'
                : 'text-white hover:text-yellow-300'
            }
          >
            Booking
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-yellow-400 underline'
                : 'text-white hover:text-yellow-300'
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? 'text-yellow-400 underline'
                : 'text-white hover:text-yellow-300'
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? 'text-yellow-400 underline'
                : 'text-white hover:text-yellow-300'
            }
          >
            Register
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? 'text-yellow-400 underline'
                : 'text-white hover:text-yellow-300'
            }
          >
            Dashboard
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? 'M6 18L18 6M6 6l12 12' // X (close menu)
                    : 'M4 6h16M4 12h16M4 18h16' // Hamburger (open menu)
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 mt-4">
            <Link
              to="/"
              className="text-white hover:text-yellow-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-yellow-300"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/booking"
              className="text-white hover:text-yellow-300"
              onClick={toggleMenu}
            >
              Booking
            </Link>
            <Link
              to="/login"
              className="text-white hover:text-yellow-300"
              onClick={toggleMenu}
            >
              Login
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-yellow-300"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/dashboard"
              className="text-white hover:text-yellow-300"
              onClick={toggleMenu}
            >
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
