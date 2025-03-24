'use client';

import { cn } from '@/app/lib/utils';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string[];
    className?: string;
  };
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseBetweenWords = 1000;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < words.text[currentWordIndex].length) {
      timeout = setTimeout(() => {
        setDisplayText(words.text[currentWordIndex].slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(words.text[currentWordIndex].slice(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && displayText.length === words.text[currentWordIndex].length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseBetweenWords);
    } else if (isDeleting && displayText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.text.length);
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words.text]);

  return (
    <div className={cn('flex items-center space-x-1 my-6', className)}>
      <motion.div className="overflow-hidden pb-2" initial={{ width: '0%' }} animate={{ width: 'fit-content' }} transition={{ duration: 2, ease: 'linear', delay: 1 }}>
        <div className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-4xl font-bold" style={{ whiteSpace: 'nowrap' }}>
          {displayText}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className={cn('block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500', cursorClassName)}
      ></motion.span>
    </div>
  );
};
