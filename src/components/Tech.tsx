import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

import { BrainCanvas } from './canvas/Brain';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

interface TechCardProps {
  index: number;
  name: string;
  skills: string[];
  icon: string;
  category: string;
  link?: string;
}

const TechCard: React.FC<TechCardProps> = ({ index, name, skills, icon, category, link }) => {
  return (
    <Tilt className="xs:w-[350px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.2, 0.75)}
        className={`tech-wedge ${category}-wedge`}
      >
        <div className="tech-wedge-content">
          <div className="flex items-center gap-4 mb-4">
            <img src={icon} alt={name} className="w-12 h-12 object-cover rounded-lg" />
            {link ? (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-xl font-bold hover:text-[#915EFF] transition-colors"
              >
                {name}
              </a>
            ) : (
              <h3 className="text-white text-xl font-bold">
                {name}
              </h3>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-black bg-opacity-30 rounded-full text-sm text-white"
              >
                {skill}
              </span>
            ))}
          </div>
          {link && (
            <div className="mt-3">
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#915EFF] hover:text-white transition-colors"
              >
                Visit Official Site →
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <div className="relative">
      <motion.div variants={textVariant()}>
        <p className="section-sub-text">My Technical Skills</p>
        <h2 className="section-head-text">Technologies.</h2>
      </motion.div>

      <div className="mt-16">
        {["frontend", "backend", "devops", "marketing", "ai"].map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-white text-[24px] font-bold capitalize mb-8">
              {category === "ai" ? "AI & ML" : 
               category === "devops" ? "DevOps & Tools" : 
               category === "backend" ? "Backend & Server Technologies" :
               `${category} Development`}
            </h3>
            <div className="flex flex-row flex-wrap justify-start gap-10">
              {technologies
                .filter(tech => tech.category === category)
                .map((technology, index) => (
                  <div key={technology.name}>
                    <TechCard index={index} {...technology} />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-[-1] flex justify-center items-center">
        <BrainCanvas />
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");