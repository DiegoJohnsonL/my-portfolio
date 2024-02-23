import { motion } from 'framer-motion';
import React from 'react'
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import { StarWrapper } from '../hoc';

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
    </>
  );
}

const WrappedExperience = StarWrapper(Experience, 'work');
export default WrappedExperience;