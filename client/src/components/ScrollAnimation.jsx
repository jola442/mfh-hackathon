import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollAnimation = ({ children, duration, delay, width }) => {
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
    triggerOnce: true, // Trigger only once
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start state
      animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to these states when in view
      transition={{ duration: duration?duration: 0.5, delay: delay?delay:0 }} // Duration of the animation
      className={width=="full"?"w-full":""}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
