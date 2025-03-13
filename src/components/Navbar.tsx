import React from 'react';
import Link from 'next/link';

import Image from 'next/image';
import Logo from '@/asset/logo_white.png';
import { cn } from '@/app/lib/utils';

function Navbar({ className }: { className?: string }) {
  return (
    <nav className={cn('fixed top-0 inset-x-0 z-50 h-16 backdrop-blur-md  shadow-lg rounded-b-xl', className)}>
      <div className=" mx-auto flex items-center justify-between px-8 md:px-16 lg:px-24 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={Logo} width={40} height={40} alt="Logo" />
        </Link>

        {/* Navbar Links */}
        <div className="flex items-center space-x-6">
          <Link href="/about" className="text-sm font-semibold text-white hover:text-gray-300 transition duration-300">
            About
          </Link>
          <Link href="/about" className="text-sm font-semibold text-white hover:text-gray-300 transition duration-300">
            Education
          </Link>
          <Link href="/about" className="text-sm font-semibold text-white hover:text-gray-300 transition duration-300">
            Experience
          </Link>
          <Link href="/about" className="text-sm font-semibold text-white hover:text-gray-300 transition duration-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
