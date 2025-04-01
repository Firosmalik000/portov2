import Contact from '@/section/Contact';
import Project from '@/section/Project';
import React from 'react';

const Projects = () => {
  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center mt-[50px]">
      <Project />
      <Contact />
    </div>
  );
};

export default Projects;
