'use client';
import Tooltip from '@/components/Tooltip';
import { BackgroundBeamsWithCollision } from '@/components/ui/components/ui/background-beams-with-collision';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import Image from 'next/image';
import HeroImage from '@/asset/hero.jpg';
import { Button } from '@/components/ui/moving-border';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col md:flex-row items-center justify-between min-h-screen w-full px-0 md:px-8 lg:px-16 xl:px-32 2xl:px-48 py-8 md:py-0 m-12 md:m-0 lg:m-0 xl:m-0 2xl:m-0 bg-[#0a0a0a]">
        {/* Hero Text */}
        <div className="h-full md:h-screen relative  flex items-center justify-center pb-[90px]">
          <div className="max-w-4xl mb-8 md:mb-0">
            <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}>
              <p className="text-xl md:text-2xl lg:text-2xl xl:text-2xl text-center md:text-start xl:text-start lg:text-start font-bold text-blue-500 mb-2">Hey 👋, it s me</p>
            </motion.div>
            <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}>
              <p className="text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-white text-center md:text-start xl:text-start lg:text-start">Firos Malik Abdillah</p>
            </motion.div>
            <TypewriterEffectSmooth
              className="text-center md:text-start xl:text-start lg:text-start"
              words={{
                text: ['Junior Frontend Developer', 'Fullstack Developer'],
                className: 'text-2xl md:text-2xl tektur',
              }}
            />
            <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }} className="flex justify-center md:justify-start xl:justify-start lg:justify-start">
              <Link href="https://wa.me/+6285236446961" target="_blank">
                <Button borderRadius="1.75rem" className=" bg-slate-900  text-white  border-slate-800 hover:bg-blue-800 transition duration-300 hover:cursor-pointer">
                  Contact Me
                </Button>
              </Link>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 md:bottom-8  ">
            <Tooltip />
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex flex-col items-center justify-center w-full md:w-auto">
          <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }} className="relative w-full md:w-[500px] h-[300px] md:h-[600px] flex flex-col mb-4 md:mb-0">
            <Image src={HeroImage} alt="Hero Image" layout="fill" objectFit="cover" className="rounded-lg shadow-xl" />
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
            className="bg-white w-full px-4 py-6 mt-4 md:mt-2 flex justify-center gap-8 text-gray-800 shadow-md rounded-lg"
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
    </BackgroundBeamsWithCollision>
  );
};

export default Hero;
