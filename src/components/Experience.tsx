import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

import 'react-vertical-timeline-component/style.min.css';

import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

interface ExperienceCardProps {
  experience: {
    title: string;
    company_name: string;
    company_url?: string;
    iconBg: string;
    date: string;
    points: string[];
  };
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        color: '#fff',
        border: '1px solid rgba(100, 255, 218, 0.2)',
        borderRadius: '16px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      }}
      contentArrowStyle={{ borderRight: '7px solid rgba(100, 255, 218, 0.3)' }}
      date={experience.date}
      iconStyle={{ 
        background: experience.iconBg,
        border: '3px solid #64ffda',
        boxShadow: '0 0 20px rgba(100, 255, 218, 0.5)',
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Building2 className="w-[60%] h-[60%] text-white" />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        {experience.company_url ? (
          <a
            href={experience.company_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 text-[16px] font-semibold hover:text-white transition-colors"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </a>
        ) : (
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        )}
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider leading-relaxed"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="section-sub-text text-center">What I have done so far</p>
        <h2 className="section-head-text text-center">Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');