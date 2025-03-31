import Hero from '@/section/about/Hero';
import Contact from '@/section/Contact';
import React from 'react';

const About = () => {
  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center">
      <Hero />
      <Contact />
    </div>
  );
};

export default About;
