'use client';
import Tooltip from '@/components/Tooltip';
import { BackgroundBeamsWithCollision } from '@/components/ui/components/ui/background-beams-with-collision';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import Image from 'next/image';
import HeroImage from '@/asset/hero.jpg';
import { Button } from '@/components/ui/moving-border';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className=" flex  items-center justify-between h-screen w-full px-[200px]">
        {/* Hero Text */}
        <div className="max-w-4xl">
          <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}>
            <p className="text-5xl md:text-4xl font-bold text-white">Firos Malik Abdillah</p>
          </motion.div>
          <TypewriterEffectSmooth
            words={{
              text: ['Junior Frontend Developer', 'Fullstack Developer'],
              className: 'text-blue-500 text-2xl md:text-3xl',
            }}
          />
          <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}>
            <Button borderRadius="1.75rem" className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
              Contact Me
            </Button>
          </motion.div>
        </div>

        {/* Hero Image */}
        <div className="  flex flex-col items-center justify-center">
          <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }} className="relative w-full h-[600px]  flex flex-col">
            <Image src={HeroImage} alt="Hero Image" layout="fill" objectFit="cover" className="rounded-lg shadow-xl" />
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
            className="bg-white w-full px-2 py-6 mt-2 flex justify-center gap-8 text-gray-800 shadow-md rounded-lg"
          >
            <div className="text-center">
              <p className="text-2xl font-semibold">6+</p>
              <p className="text-sm">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-semibold">9+</p>
              <p className="text-sm">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-semibold">1+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-[100px] left-[200px]">
        <Tooltip />
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Hero;
