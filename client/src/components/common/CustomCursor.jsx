import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring config for the outer ring delay
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    let targetX = 0;
    let targetY = 0;

    const moveCursor = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      const target = e.target.closest('a, button, input, textarea, select, .cursor-pointer, .nav-link, .btn-primary');
      if (target) {
        setIsHovering(true);
        // Magnetic pull physics (pulls cursor 20% toward element center)
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        targetX = targetX + (centerX - targetX) * 0.2;
        targetY = targetY + (centerY - targetY) * 0.2;
      } else {
        setIsHovering(false);
      }

      cursorX.set(targetX - 16);
      cursorY.set(targetY - 16);
    };

    window.addEventListener('mousemove', moveCursor);

    // Initial hide of default cursor
    document.documentElement.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.documentElement.style.cursor = 'auto';
    };
  }, [cursorX, cursorY]);

  // Handle global hiding of pointer cursors
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Hide on smaller devices
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return null;
  }

  return (
    <>
      {/* Core Dot (Instant) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999]"
        style={{ x: cursorX, y: cursorY }}
      >
        <div className="w-2 h-2 bg-foreground rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
      
      {/* Outer Ring (Delayed Spring) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      >
        <motion.div 
          animate={{ 
            width: isHovering ? 48 : 32, 
            height: isHovering ? 48 : 32,
            opacity: isHovering ? 1 : 0.6,
            marginLeft: isHovering ? -8 : 0,
            marginTop: isHovering ? -8 : 0,
            boxShadow: isHovering ? '0 0 15px rgba(255,0,0,0.5)' : 'none'
          }}
          transition={{ duration: 0.2 }}
          className="border-2 border-primary rounded-full absolute top-0 left-0 bg-primary/5"
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
