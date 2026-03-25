import { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';

// Memoized individual timer unit to prevent unnecessary re-renders
const TimerUnit = memo(({ value, label, animate = false }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 border border-border p-4 md:p-6 rounded-xl min-w-[100px] md:min-w-[140px] shadow-sm">
      {animate ? (
        <motion.span
          key={value}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-black text-foreground mb-1"
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      ) : (
        <span className="text-3xl md:text-5xl font-black text-foreground mb-1">
          {String(value).padStart(2, '0')}
        </span>
      )}
      <span className="text-primary text-[10px] md:text-xs font-bold tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
});

TimerUnit.displayName = 'TimerUnit';

const CountdownTimer = () => {
  const targetDate = new Date('2026-04-18T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setIsLive(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      };
    };

    // Initial sync
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isLive) {
    return (
      <div className="bg-white py-12 px-6 border-y border-border flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground uppercase mb-4">
          COUNTDOWN TO THE VAULT
        </h2>
        <div className="text-4xl md:text-6xl font-black text-primary animate-pulse uppercase">
          THE SYSTEM IS LIVE
        </div>
      </div>
    );
  }

  return (
    <section className="bg-white py-16 px-6 border-y border-border">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-xl md:text-3xl font-black tracking-tighter text-foreground uppercase mb-1">
          COUNTDOWN TO THE VAULT
        </h2>
        <p className="text-gray-500 text-sm font-medium mb-10 uppercase tracking-widest">The system unlocks on 18 April 2026</p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
          <TimerUnit value={timeLeft.days} label="Days" />
          <TimerUnit value={timeLeft.hours} label="Hours" />
          <TimerUnit value={timeLeft.minutes} label="Minutes" />
          <TimerUnit value={timeLeft.seconds} label="Seconds" animate={true} />
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
