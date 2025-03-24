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
  },
  {
    id: 2,
    name: 'Instagram',
    designation: 'Product Manager',
    icon: <FaInstagram />,
  },
  {
    id: 3,
    name: 'Linked In',
    designation: 'Data Scientist',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    name: 'Github',
    designation: 'UX Designer',
    icon: <FaGithub />,
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
