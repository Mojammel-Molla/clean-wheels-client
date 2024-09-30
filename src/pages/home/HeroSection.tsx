import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-300 text-white py-16 px-6  h-[70vh]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Branding Message */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold leading-tight tracking-wide">
            Get Your Car <span className="text-yellow-300">Spotless</span> in No
            Time
          </h1>
          <p className="text-lg leading-relaxed">
            Welcome to <span className="font-semibold">Clean Wheels</span>! We
            offer top-tier car wash services to make your car shine, inside and
            out. Book today for a hassle-free experience!
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 space-x-4">
            <Link
              to="/booking"
              className="px-6 py-3 bg-yellow-300 text-blue-900 font-bold rounded-md hover:bg-yellow-400 transition"
            >
              Book Now
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 bg-transparent border-2 border-yellow-300 text-yellow-300 font-bold rounded-md hover:bg-yellow-300 hover:text-blue-900 transition"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2">
          <img
            src="https://i.ibb.co.com/7pTYszf/Car-Wash-Image.png"
            alt="Car Wash Image"
            className="rounded-lg "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
