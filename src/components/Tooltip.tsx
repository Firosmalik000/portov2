'use client';
import React from 'react';
import { AnimatedTooltip } from './ui/components/ui/animated-tooltip';

import HeroImage from '@/asset/hero.jpg';
const people = [
  {
    id: 1,
    name: 'Whatsapp',
    designation: 'Software Engineer',
    image: HeroImage,
  },
  {
    id: 2,
    name: 'Instagram',
    designation: 'Product Manager',
    image: HeroImage,
  },
  {
    id: 3,
    name: 'Linked In',
    designation: 'Data Scientist',
    image: HeroImage,
  },
  {
    id: 4,
    name: 'Github',
    designation: 'UX Designer',
    image: HeroImage,
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
