'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Logo from '@/asset/logo_white.png';
import { cn } from '@/app/lib/utils';
import { CiMenuFries } from 'react-icons/ci';

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Navbar({ className }: { className?: string }) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={cn('fixed top-0 inset-x-0 z-[1000] h-16 backdrop-blur-md shadow-lg rounded-b-xl overflow-hidden', className)}
      >
        <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.2 }} className="mx-auto flex items-center justify-between px-8 md:px-16 lg:px-24 py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={Logo} width={40} height={40} alt="Logo" />
          </Link>

          {/* Navbar Links */}
          <div className="hidden md:flex items-center space-x-6">
            {['About', 'Projects', 'ContactPage'].map((text, index) => (
              <motion.div key={index} variants={linkVariants}>
                <Link href={`/${text.toLowerCase()}`} className="relative text-sm font-semibold text-white hover:text-gray-300 transition duration-300">
                  {text === 'ContactPage' ? 'Contact' : text}
                  <motion.span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-300 origin-left scale-x-0 transition-transform" whileHover={{ scaleX: 1 }} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none" onClick={() => setOpen(!open)}>
              <CiMenuFries />
            </button>
          </div>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="fixed top-0 left-0 w-full h-screen bg-blue-500/80 z-[999] " onClick={() => setOpen(false)}>
            <motion.div className="flex flex-col items-center justify-center h-full space-y-6" onClick={(e) => e.stopPropagation()}>
              {['Home', 'About', 'Projects', 'ContactPage'].map((text, index) => (
                <motion.div key={index} variants={linkVariants}>
                  <Link href={`/${text === 'Home' ? '' : text.toLowerCase()}`} className="relative text-lg font-semibold text-white hover:text-gray-300 transition duration-300" onClick={() => setOpen(false)}>
                    {text === 'ContactPage' ? 'Contact' : text}
                    <motion.span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-300 origin-left scale-x-0 transition-transform" whileHover={{ scaleX: 1 }} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
