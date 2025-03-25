import React from 'react';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">© 2025 Firos Malik Abdillah. All rights reserved.</p>

        {/* Social Media */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="https://github.com/firos" target="_blank" className="hover:text-white transition duration-300">
            <FaGithub size={20} />
          </Link>
          <Link href="https://instagram.com/firos" target="_blank" className="hover:text-white transition duration-300">
            <FaInstagram size={20} />
          </Link>
          <Link href="https://linkedin.com/in/firos" target="_blank" className="hover:text-white transition duration-300">
            <FaLinkedin size={20} />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/about" className="text-sm hover:text-white transition duration-300">
            About
          </Link>
          <Link href="/projects" className="text-sm hover:text-white transition duration-300">
            Projects
          </Link>
          <Link href="/contact" className="text-sm hover:text-white transition duration-300">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
