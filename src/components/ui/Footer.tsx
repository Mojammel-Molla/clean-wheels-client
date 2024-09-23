import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-700 text-white py-8">
      <div className="max-w-7xl mx-auto px-6  grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Tagline */}
        <div>
          <Link to="/" className="flex items-center space-x-2">
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
            <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-blue-400 drop-shadow-md">
              Clean Wheels
            </span>
          </Link>
          <p className="mt-2 text-gray-300">
            Your trusted partner for the best car washing and detailing
            services.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-300">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/services" className="hover:text-yellow-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/booking" className="hover:text-yellow-300">
                Booking
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-300">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-yellow-300">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-300">
            Stay Updated
          </h3>
          <p className="text-gray-300 mb-4">
            Sign up for our newsletter and get exclusive updates and offers.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l bg-gray-600 text-white  placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-300 focus:border-yellow-300"
            />
            <button
              type="submit"
              className="bg-yellow-300 px-4 py-2 rounded-r hover:bg-yellow-400 text-blue-900 font-bold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 border-t border-yellow-300 pt-6 text-center text-sm text-gray-300">
        <p>
          &copy; {new Date().getFullYear()} Clean Wheels. All rights reserved.
        </p>
        <p className="mt-2">
          <Link to="/privacy" className="hover:text-yellow-300">
            Privacy Policy
          </Link>{' '}
          |{' '}
          <Link to="/terms" className="hover:text-yellow-300">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
