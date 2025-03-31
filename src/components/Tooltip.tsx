'use client';
import React from 'react';
import { AnimatedTooltip } from './ui/components/ui/animated-tooltip';

import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
const people = [
  {
    id: 1,
    name: 'Whatsapp',
    designation: 'Software Engineer',
    icon: <FaWhatsapp />,
    link: 'https://wa.me/+6285236446961',
  },
  {
    id: 2,
    name: 'Instagram',
    designation: 'Product Manager',
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/firos_malik/',
  },
  {
    id: 3,
    name: 'Linked In',
    designation: 'Data Scientist',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/firos-malik-abdillah/',
  },
  {
    id: 4,
    name: 'Github',
    designation: 'UX Designer',
    icon: <FaGithub />,
    link: 'https://github.com/Firosmalik000/',
  },
];

function Tooltip() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

export default Tooltip;
