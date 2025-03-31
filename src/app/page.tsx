import Background from '@/section/Background';
import Contact from '@/section/Contact';
import Hero from '@/section/Hero';
import Project from '@/section/Project';
import TechStack from '@/section/TechStack';

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Background />
      <Project />
      <Contact />
    </>
  );
}
