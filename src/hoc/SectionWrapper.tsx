import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

interface SectionWrapperProps {
  Component: React.ComponentType;
  idName: string;
}

const SectionWrapper = (Component: React.ComponentType, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="padding section-wrapper"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;