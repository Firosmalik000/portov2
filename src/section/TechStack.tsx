'use client';
import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiNodedotjs, SiExpress, SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql, SiLaravel, SiFlutter } from 'react-icons/si';
import { motion } from 'framer-motion';

const TechStack = () => {
  const data = [
    { id: 1, icon: <FaReact className="text-blue-500 text-4xl" />, text: 'React' },
    { id: 2, icon: <SiTypescript className="text-blue-600 text-4xl" />, text: 'Typescript' },
    { id: 3, icon: <SiJavascript className="text-yellow-400 text-4xl" />, text: 'Javascript' },
    { id: 4, icon: <SiNodedotjs className="text-green-600 text-4xl" />, text: 'Node.js' },
    { id: 5, icon: <SiExpress className="text-gray-600 text-4xl" />, text: 'Express.js' },
    { id: 6, icon: <SiNextdotjs className="text-black text-4xl" />, text: 'Next.js' },
    { id: 7, icon: <SiTailwindcss className="text-blue-400 text-4xl" />, text: 'Tailwindcss' },
    { id: 8, icon: <SiMongodb className="text-green-500 text-4xl" />, text: 'MongoDB' },
    { id: 9, icon: <SiMysql className="text-blue-500 text-4xl" />, text: 'MySQL' },
    { id: 10, icon: <SiLaravel className="text-red-500 text-4xl" />, text: 'Laravel' },
    { id: 11, icon: <SiFlutter className="text-blue-400 text-4xl" />, text: 'Flutter' },
  ];

  return (
    <div className="min-h-screen md:h-[40rem] bg-gradient-to-b from-=[#0a0a0a] dark:to-transparent flex flex-col items-center justify-center gap-y-4 mb-6 ">
      <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}>
        <p className="text-4xl md:text-3xl font-extrabold text-center text-white mb-4">TECH STACK</p>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center p-6 bg-neutral-900 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            {item.icon}
            <p className="text-lg font-semibold text-white mt-2">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
