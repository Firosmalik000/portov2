/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    icon: React.ReactNode;
    link: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 8 };

  // Motion values
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-50, 50], [-10, 10]), springConfig);
  const translateX = useSpring(useTransform(x, [-50, 50], [-20, 20]), springConfig);

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {items.map((item, index) => (
        <div className="mr-4 relative group" key={item.id} onMouseEnter={() => setHoveredIndex(item.id)} onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: 'nowrap',
                }}
                className="absolute -top-16 -left-1/2 translate-x-2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-white relative z-30 text-base">{item.name}</div>
                <div className="text-white text-xs">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <a href={item.link}>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                duration: 0.6,
                delay: 0.5 * index,
                ease: 'easeOut',
                bounce: 0.4,
              }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
            >
              <div onMouseMove={handleMouseMove} className="flex items-center justify-center rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white bg-gray-800 text-white relative transition duration-500">
                {item.icon}
              </div>
            </motion.div>
          </a>
        </div>
      ))}
    </>
  );
};
