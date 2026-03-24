import { motion } from 'framer-motion';

const MotionCard = ({ children, className = "", delay = 0, style = {} }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      whileHover={!isMobile ? { 
        y: -6, 
        scale: 1.02, 
        borderColor: "rgba(255,0,0,0.4)" 
      } : {}}
      transition={{ 
        duration: isMobile ? 0.4 : 0.6, 
        ease: [0.25, 1, 0.5, 1],
        delay: isMobile ? 0 : delay,
        hover: { type: "spring", stiffness: 400, damping: 25 }
      }}
      className={`border border-border bg-white rounded-2xl will-change-transform overflow-hidden ${className}`}
      style={{ ...style }}
    >
      {children}
    </motion.div>
  );
};

export default MotionCard;
