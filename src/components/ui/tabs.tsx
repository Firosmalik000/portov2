/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/app/lib/utils';

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);
  const [hovering, setHovering] = useState(false);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full space-y-4 px-2 sm:px-2 md:px-8">
      {/* Tab Buttons */}
      <div className={cn('flex items-center justify-center overflow-x-auto sm:overflow-visible no-visible-scrollbar overflow-hidden w-full max-w-xl ', containerClassName)}>
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => moveSelectedTabToTop(idx)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn('relative px-4 py-2 sm:px-3 sm:py-3 rounded-full transition-all duration-300 hover:bg-gray-300 dark:hover:bg-zinc-700 text-sm sm:text-base ', tabClassName)}
          >
            {active.value === tab.value && <motion.div layoutId="clickedbutton" transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }} className={cn('absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full', activeTabClassName)} />}
            <span className="relative block text-black dark:text-white">{tab.title}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <FadeInDiv tabs={tabs} active={active} key={active.value} hovering={hovering} className={cn('w-full max-w-4xl px-4 py-4 sm:px-6 sm:py-6 rounded-lg bg-gray-700 shadow-lg', contentClassName)} />
    </div>
  );
};

export const FadeInDiv = ({ className, tabs, hovering }: { className?: string; key?: string; tabs: Tab[]; active: Tab; hovering?: boolean }) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -20 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{ y: isActive(tab) ? [0, 10, 0] : 0 }}
          className={cn('absolute w-full max-w-2xl p-4 sm:p-6 rounded-lg shadow-md', className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
