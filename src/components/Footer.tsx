import React from 'react';
import Link from 'next/link';
import { cn } from '@/app/lib/utils';

function Footer({ className }: { className?: string }) {
  return (
    <nav className={cn('relative inset-x-0 z-50 h-16 backdrop-blur-md  shadow-lg rounded-b-xl', className)}>
      <div className=" mx-auto flex items-center justify-center px-8 md:px-16 lg:px-24 py-2">
        <div className="flex items-center space-x-6">
          <Link href="/about" className="text-sm font-semibold text-white hover:text-gray-300 transition duration-300">
            Firos Malik
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
