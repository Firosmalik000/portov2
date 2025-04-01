'use client';

import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
export function CardDemo() {
  const content = [
    {
      icon: <FaWhatsapp />,
      link: 'https://wa.me/+6285236446961',
    },
    {
      icon: <FaInstagram />,
      link: 'https://www.instagram.com/firos_malik/',
    },
    {
      icon: <FaGithub />,
      link: 'https://github.com/firos-malik',
    },
  ];
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={'cursor-pointer overflow-hidden relative rounded-md shadow-xl bg-cover flex flex-col justify-between p-4 sm:p-6 text-white h-auto min-h-[500px] md:min-h-[600px] w-full max-w-sm sm:max-w-md md:max-w-lg'}
        style={{ backgroundImage: "url('/me.jpg')" }}
      >
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
                <Link href={item.link} target="_blank" className="hover:text-white transition duration-300">
                  {item.icon}
                </Link>
              </motion.div>
            ))}
          </div>{' '}
        </div>
      </div>
    </div>
  );
}
