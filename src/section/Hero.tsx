import Tooltip from '@/components/Tooltip';
import { BackgroundBeamsWithCollision } from '@/components/ui/components/ui/background-beams-with-collision';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import Image from 'next/image';
import HeroImage from '@/asset/hero.jpg';

const Hero = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className=" flex  items-center justify-between h-screen w-full px-[100px]">
        {/* Hero Text */}
        <div className="max-w-4xl">
          <p className="text-5xl md:text-6xl font-extrabold text-white">Firos Malik Abdillah</p>
          <TypewriterEffectSmooth words={[{ text: 'Junior Frontend Developer', className: 'text-blue-500 text-2xl md:text-3xl' }]} />
          <button className="px-6 py-3 mt-4 text-white bg-transparent border border-blue-500 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">Contact Me</button>
        </div>

        {/* Hero Image */}
        <div className="  flex flex-col items-center justify-center">
          <div className="relative w-full h-[600px]  flex flex-col">
            <Image src={HeroImage} alt="Hero Image" layout="fill" objectFit="cover" className="rounded-lg shadow-xl" />
          </div>

          {/* Stats Section */}
          <div className="bg-white w-full px-2 py-6 mt-2 flex justify-center gap-8 text-gray-800 shadow-md rounded-lg">
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
          </div>
        </div>
      </div>
      <div className="absolute bottom-[100px] left-[100px]">
        <Tooltip />
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Hero;
