import React from 'react';
import HeroSection from './HeroSection';
import ReviewSection from './ReviewSection';
import ServiceList from './ServiceList';
const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100">
      <HeroSection />
      <ServiceList />
      <ReviewSection />
    </div>
  );
};

export default Home;
