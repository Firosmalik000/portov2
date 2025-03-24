'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Logo from '@/asset/logo_white.png';
import { cn } from '@/app/lib/utils';

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Navbar({ className }: { className?: string }) {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={cn('fixed top-0 inset-x-0 z-50 h-16 backdrop-blur-md shadow-lg rounded-b-xl overflow-hidden', className)}
    >
      <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.2 }} className="mx-auto flex items-center justify-between px-8 md:px-16 lg:px-24 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={Logo} width={40} height={40} alt="Logo" />
        </Link>

        {/* Navbar Links */}
        <div className="flex items-center space-x-6">
          {['About', 'Education', 'Experience', 'Contact'].map((text, index) => (
            <motion.div key={index} variants={linkVariants}>
              <Link href={`/${text.toLowerCase()}`} className="relative text-sm font-semibold text-white hover:text-gray-300 transition duration-300">
                {text}
                <motion.span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-300 origin-left scale-x-0 transition-transform" whileHover={{ scaleX: 1 }} />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;
