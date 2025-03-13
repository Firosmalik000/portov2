import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const TechStack = () => {
  const data = [
    {
      id: 1,
      icon: <FaReact className="text-blue-500 text-4xl" />,
    },
    {
      id: 2,
      icon: <SiTypescript className="text-blue-600 text-4xl" />,
    },
    {
      id: 3,
      icon: <SiTypescript className="text-blue-600 text-4xl" />,
    },
    {
      id: 4,
      icon: <SiTypescript className="text-blue-600 text-4xl" />,
    },
  ];

  return (
    <div className="min-h-screen md:h-[40rem] bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-900 dark:to-black flex items-center justify-center">
      <div className="grid grid-cols-2 gap-6">
        {data.map((item) => (
          <div key={item.id} className="flex  items-center p-6 bg-white dark:bg-neutral-800 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
