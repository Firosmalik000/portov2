'use client';
import { Tabs } from '@/components/ui/tabs';
import { FaGraduationCap, FaBriefcase, FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/moving-border';

const Background = () => {
  return (
    <div className="flex flex-col    items-center justify-center h-screen w-full text-white">
      <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}>
        <p className="text-4xl md:text-3xl  font-extrabold">Profesional Background</p>
      </motion.div>
      <Tabs
        containerClassName="w-full max-w-3xl px-6 py-8  rounded-xl shadow-lg"
        tabClassName="px-6 py-3 text-lg font-semibold transition duration-300 border-b-2 border-transparent hover:border-white"
        activeTabClassName="border-white text-white"
        tabs={[
          { title: 'Education', value: 'tab-1', content: <Education /> },
          { title: 'Experience', value: 'tab-2', content: <Experience /> },
          { title: 'Certificate', value: 'tab-3', content: <Certificate /> },
        ]}
      />
    </div>
  );
};

export default Background;

// Data Dummy
const educationData = [
  { degree: 'Bachelor of Dakwa Islamiya', school: 'Al - Azhar University', year: '2019 - present' },
  { degree: 'High School', school: 'SMA Bina Insan Mandiri', year: '2015 - 2018' },
];

const experienceData = [
  { role: 'IT Programmer', company: 'PT Inti Surya Laboratorium', year: 'Sep 2024 - present', desc: 'Developed administration panel using React JS and Laravel.' },
  { role: 'Front End Developer Frelance', company: 'DB Click', year: 'Sep 2024 - present', desc: 'Worked on a website for a company.' },
  { role: 'Frontend Developer', company: 'PT Hash Rekayasa Teknologi', year: 'Jan 2024 - Jul 2024', desc: 'Developed administration panel.' },
];

const certificateData = [
  { title: 'React (Basic) Certificate', issuer: 'HackerRank', year: '2024', link: 'https://www.hackerrank.com/certificates/dfbffa406aa2' },
  { title: 'Frontend Developer (React) Certificate', issuer: 'HackerRank', year: '2024', link: 'https://www.hackerrank.com/certificates/f967be31a095' },
  { title: 'Problem Solving (Basic) Certificate', issuer: 'HackerRank', year: '2024', link: 'https://www.hackerrank.com/certificates/8a35c9cc75f2' },
];

// Components
const Education = () => {
  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-md">
      <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
        <FaGraduationCap className="text-yellow-400" /> Education
      </h2>
      <ul className="space-y-3">
        {educationData.map((edu, index) => (
          <li key={index} className="border-l-4 border-yellow-400 pl-4">
            <p className="text-lg font-semibold">{edu.degree}</p>
            <p className="text-sm text-gray-300">
              {edu.school}, {edu.year}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
        <FaBriefcase className="text-blue-400" /> Experience
      </h2>
      <ul className="space-y-3">
        {experienceData.map((exp, index) => (
          <li key={index} className="border-l-4 border-blue-400 pl-4">
            <p className="text-lg font-semibold">{exp.role}</p>
            <p className="text-sm text-gray-300">
              {exp.company}, {exp.year}
            </p>
            <p className="text-gray-400 text-sm">{exp.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Certificate = () => {
  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
        <FaCertificate className="text-green-400" /> Certificates
      </h2>
      <div className="space-y-3">
        {certificateData.map((cert, index) => (
          <div key={index} className="border-l-4 border-green-400 pl-4 flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">{cert.title}</p>
              <p className="text-sm text-gray-300">
                {cert.issuer}, {cert.year}
              </p>
            </div>

            <a href={cert.link}>
              <Button className="">Show Credential</Button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
