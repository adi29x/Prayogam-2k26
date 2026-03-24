import { motion } from 'framer-motion';
import { useMemo } from 'react';

const AnimatedSection = ({ children, className = '', delay = 0, direction = 'up', stagger = false }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  const variants = {
    hidden: { 
      opacity: 0, 
      ...directions[direction] 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: { 
        duration: isMobile ? 0.6 : 0.8, 
        ease: [0.25, 1, 0.5, 1], // Swift ease-out (Apple style)
        delay: isMobile ? 0 : delay,
        staggerChildren: stagger ? 0.1 : 0
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
