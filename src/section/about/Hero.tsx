'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[500px] md:min-h-[600px] w-full rounded-md shadow-xl mx-auto bg-cover flex items-center justify-start p-6 sm:p-10" style={{ backgroundImage: "url('/about2.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-white p-4 sm:p-6">
        {/* Animated Heading */}
        <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}>
          <p className="text-2xl sm:text-3xl font-bold mb-4">About Me</p>
        </motion.div>

        {/* Animated Description */}
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }} className="text-sm sm:text-lg leading-relaxed indent-6 sm:indent-8">
          Dynamic and dedicated Web Developer with expertise in the MERN stack and a strong focus on crafting responsive, user-friendly interfaces using React.js, TypeScript, and Tailwind CSS. Proficient in building scalable backends with
          Node.js and Express.js, managing databases with MongoDB and MySQL, and delivering robust APIs with REST and GraphQL. Experienced in developing multi-language websites and mobile applications, with a track record of successful
          freelance and contract roles. Enthusiastic about problem-solving and continuous learning, aiming to excel as a Full-Stack Developer while delivering impactful digital solutions.
        </motion.p>

        {/* Animated Button */}
        <motion.a initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.9 }} href="/resumefiros.pdf" download className="block mt-6">
          <button className="w-full sm:w-auto transition duration-300 hover:bg-blue-900 text-white py-3 px-4 bg-blue-600 rounded-lg text-sm sm:text-base">Download CV</button>
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
