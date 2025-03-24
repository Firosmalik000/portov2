'use client';
import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiNodedotjs, SiExpress, SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql, SiLaravel, SiFlutter } from 'react-icons/si';
import { motion } from 'framer-motion';

const TechStack = () => {
  const data = [
    { id: 1, icon: <FaReact className="text-blue-500 text-4xl" /> },
    { id: 2, icon: <SiTypescript className="text-blue-600 text-4xl" /> },
    { id: 3, icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
    { id: 4, icon: <SiNodedotjs className="text-green-600 text-4xl" /> },
    { id: 5, icon: <SiExpress className="text-gray-600 text-4xl" /> },
    { id: 6, icon: <SiNextdotjs className="text-black text-4xl" /> },
    { id: 7, icon: <SiTailwindcss className="text-blue-400 text-4xl" /> },
    { id: 8, icon: <SiMongodb className="text-green-500 text-4xl" /> },
    { id: 9, icon: <SiMysql className="text-blue-500 text-4xl" /> },
    { id: 10, icon: <SiLaravel className="text-red-500 text-4xl" /> },
    { id: 11, icon: <SiFlutter className="text-blue-400 text-4xl" /> },
  ];

  return (
    <div className="min-h-screen md:h-[40rem] bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-900 dark:to-transparent flex flex-col items-center justify-center gap-y-4">
      <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}>
        <p className="text-4xl md:text-3xl font-extrabold text-center text-gray-800 dark:text-white mb-4">TECH STACK</p>
      </motion.div>
      <div className="grid grid-cols-6 gap-6">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center p-6 bg-white dark:bg-neutral-800 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
