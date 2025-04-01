'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Rubik } from 'next/font/google';
import { cn } from '@/app/lib/utils';
import { Carousel } from '@/components/ui/carousel';
import { Kevin, Kyp, Nabina, Salam, Sri, Yhh } from '@/asset';

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '700'] });

const Project = () => {
  const slideData = [
    {
      title: 'PT Kevin Shipping',
      button: 'Explore',
      link: 'https://kevinshipping.com/',
      src: Kevin,
    },
    {
      title: 'Sri Rahayu Silver',
      button: 'Explore',
      link: 'https://www.srirahayusilver.com/',
      src: Sri,
    },
    {
      title: 'YHH',
      button: 'Explore',
      link: 'https://yhh.co.id/',
      src: Yhh,
    },
    {
      title: 'KYP Bali Trans',
      button: 'Explore',
      link: 'https://www.kypbalitrans.com/',
      src: Kyp,
    },
    {
      title: 'Salam Pesona Bahari',
      button: 'Explore',
      link: 'https://salampesonabahari.com/',
      src: Salam,
    },
    {
      title: 'Nabina Travel',
      button: 'Explore',
      link: 'https://www.muhammadnabina.com/',
      src: Nabina,
    },
  ];

  return (
    <div className="text-white w-full min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-transparent via-gray-900 to-transparent overflow-hidden">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className={cn('text-2xl md:text-4xl lg:text-3xl text-center font-extrabold  mb-8 text-white', rubik.className)}
      >
        MY AWESOME PROJECTS
      </motion.h2>
      <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }} className="w-full max-w-4xl">
        <Carousel slides={slideData} />
      </motion.div>
    </div>
  );
};

export default Project;
