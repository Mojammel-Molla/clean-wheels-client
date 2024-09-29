import React from 'react';
import HeroSection from './HeroSection';
import ReviewSection from './ReviewSection';
import ServiceList from './ServiceList';
const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServiceList />
      <ReviewSection />
    </>
  );
};

export default Home;
