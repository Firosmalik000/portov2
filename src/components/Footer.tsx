import React from 'react';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">© 2025 Firos Malik Abdillah. All rights reserved.</p>

        {/* Social Media */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="https://wa.me/+6285236446961" target="_blank" className="hover:text-white transition duration-300">
            <FaWhatsapp size={20} />
          </Link>
          <Link href="https://github.com/Firosmalik000/" target="_blank" className="hover:text-white transition duration-300">
            <FaGithub size={20} />
          </Link>
          <Link href="https://www.instagram.com/firos_malik/" target="_blank" className="hover:text-white transition duration-300">
            <FaInstagram size={20} />
          </Link>
          <Link href="https://www.linkedin.com/in/firos-malik-abdillah/" target="_blank" className="hover:text-white transition duration-300">
            <FaLinkedin size={20} />
          </Link>
        </div>

        {/* Navigation Links */}

        <nav className="flex space-x-6 mt-4 md:mt-0">
          {['About', 'Projects', 'Contactpage'].map((text, index) => (
            <Link key={index} href={`/${text.toLowerCase()}`} className="text-sm hover:text-white transition duration-300">
              {text === 'Contactpage' ? 'Contact' : text}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
