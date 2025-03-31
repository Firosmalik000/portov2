'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { CardDemo } from '@/components/ui/CardDemo';
import { Rubik } from 'next/font/google';
import { cn } from '@/app/lib/utils';

// Inisialisasi font di luar komponen
const rubik = Rubik({ subsets: ['latin'], weight: ['400', '700'] });

const Contact = () => {
  const inputRef = useRef<HTMLFormElement>(null);

  return (
    <div className="text-white  w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-transparent to-gray-800">
      <motion.h2 initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut' }} className={cn('text-3xl md:text-4xl font-extrabold text-center mb-6', rubik.className)}>
        Connect with Me!
      </motion.h2>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        className="container bg-gray-800 shadow-2xl  rounded-xl lg:w-2/3 w-11/12 max-w-4xl p-8"
      >
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/2">
            <CardDemo />
          </div>
          <div className="w-full lg:w-1/2">
            <form className="w-full" ref={inputRef}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                    <label className="block text-gray-300  font-medium mb-1" htmlFor="name">
                      Name
                    </label>
                    <input type="text" id="name" className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="w-full">
                    <label className="block text-gray-300  font-medium mb-1" htmlFor="phone">
                      Phone Number
                    </label>
                    <input type="text" id="phone" className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300  font-medium mb-1" htmlFor="email">
                    Email
                  </label>
                  <input type="email" id="email" className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                  <label className="block text-gray-300  font-medium mb-1" htmlFor="subject">
                    Subject
                  </label>
                  <input type="text" id="subject" className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                  <label className="block text-gray-300  font-medium mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea id="message" className="textarea textarea-bordered w-full px-4 py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4} />
                </div>

                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300">
                  Send Message
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
