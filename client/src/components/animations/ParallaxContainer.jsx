import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxContainer = ({ children, className = "", offset = 100, speed = 1 }) => {
  const ref = useRef(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const appliedOffset = isMobile ? offset * 0.3 : offset * speed;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-appliedOffset, appliedOffset]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div 
        style={{ y: isMobile ? 0 : y }} 
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxContainer;
