'use client';

import { cn } from '@/app/lib/utils';
import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import meImage from '@/asset/me.jpg';
export function CardDemo() {
  const content = [
    {
      icon: <FaWhatsapp />,
    },
    {
      icon: <FaInstagram />,
    },
    {
      icon: <FaGithub />,
    },
  ];
  return (
    <div className="max-w-xs w-full group/card">
      <div className={cn('cursor-pointer overflow-hidden relative card h-[600px] w-[400px] rounded-md shadow-xl max-w-sm mx-auto bg-cover flex flex-col justify-between p-4', `bg-[url(${meImage})]`)}>
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 hover:bg-black bg-gray-900   opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <div className="flex flex-col"></div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-2xl md:text-2xl text-gray-50 relative z-10">Firos Malik Abdillah</h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">Front End Developer | Fullstack Developer</p>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">Available for new project, partnership and work recruitment.</p>
          <div className="flex gap-x-2 group-hover/card:scale-110 transition-all duration-300 group-hover/card:translate-x-3  ">
            {content.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="bg-transparent border border-white w-10 h-10 rounded-full flex items-center justify-center"
              >
                {item.icon}
              </motion.div>
            ))}
          </div>{' '}
        </div>
      </div>
    </div>
  );
}
