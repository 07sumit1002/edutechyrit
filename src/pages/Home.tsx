import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Courses from '../components/Courses';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Courses />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;