import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { systemAudio } from '../../utils/soundManager';

const Preloader = () => {

  useEffect(() => {
    // Play boot sound once on component mount
    const timer = setTimeout(() => {
      systemAudio.playBoot();
    }, 100); // small delay to ensure audio context can init properly based on user interaction
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-4 overflow-hidden"
    >
      {/* Cyber Loader Ring */}
      <div className="relative flex items-center justify-center mb-8">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-transparent border-t-primary border-b-primary/30 shadow-[0_0_20px_rgba(255,0,0,0.4)]"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-transparent border-l-black border-r-gray-300"
        />
      </div>

      <div className="flex flex-col items-center w-64">
        <div className="w-full h-1 relative overflow-hidden mb-6 bg-gradient-to-r from-transparent via-gray-200 to-transparent">
          <motion.div 
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 bottom-0 w-1/3 bg-primary shadow-[0_0_10px_rgba(255,0,0,0.8)]"
          />
        </div>
        <motion.p 
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-foreground text-sm font-black tracking-[0.2em] uppercase"
        >
          Initializing System...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;
