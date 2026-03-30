import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ArrowRight, Zap, Sparkles, TrendingUp, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/animations/AnimatedSection';
import AnimatedText from '../components/animations/AnimatedText';
import { REGISTRATION_LINK } from '../constants';

const Events = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Innovation', 'Content', 'Marketing'];

  const allEvents = [
    {
      title: "Exhibition Day 1",
      slug: "exhibition-day-1",
      category: "Innovation",
      subtitle: "Initial Showcase",
      description: "Initial phase of the project exhibition where participants present their systems, ideas, and working prototypes.",
      isFeatured: true
    },
    {
      title: "Exhibition Day 2",
      slug: "exhibition-day-2",
      category: "Innovation",
      subtitle: "Advanced Showcase",
      description: "Advanced showcase with deeper evaluation, mentor interaction, and refinement of project presentations.",
      isFeatured: true
    },
    {
      title: "Grand Finale",
      slug: "exhibition-day-3",
      category: "Innovation",
      subtitle: "The Grand Finale",
      description: "Final stage where shortlisted projects are presented before experts and evaluated for top recognition.",
      isFeatured: true
    },
    {
      title: "CASH QUEST 2K26",
      slug: "cash-quest-2k26",
      category: "Marketing",
      subtitle: "The Ultimate Promotion Challenge",
      description: "A competitive challenge where participants build influence and personal brands through consistent creativity, reach, and Prayogam 2k26 promotion.",
    },
    {
      title: "REELS MAKING COMPETITION 2K26",
      slug: "reel-competition",
      category: "Content",
      subtitle: "3-Day Creator Challenge",
      description: "A content-driven challenge where participants create reels showcasing creativity, storytelling, and Prayogam 2k26 promotion across 3 days.",
    },
    {
      title: "INFLUENCER CLASH 2K26",
      slug: "influencer-clash",
      category: "Content",
      subtitle: "The Ultimate Influencer Challenge",
      description: "A competitive challenge where participants build influence and personal brands through consistent creativity, reach, and Prayogam 2k26 promotion.",
    },
    {
      title: "QR HUNT 2K26",
      slug: "qr-hunt-2k26",
      category: "Marketing/Game",
      subtitle: "Campus-Wide Gamified Experience",
      description: "A real-world interactive campus hunt where participants scan QR codes, decode secrets, and race against time to submit winning triggers.",
    },
    {
      title: "THE MONEY SHOT 2K26",
      slug: "money-shot-game",
      category: "Content",
      subtitle: "The Ultimate Photography Challenge",
      description: "A high-energy precision photography competition where participants capture impactful moments aligned with daily themes and storytelling.",
    }
  ];

  // Map internal categories to UI filters
  const getDisplayCategory = (dataCat) => {
    if (dataCat === 'Marketing/Game') return 'Marketing';
    return dataCat;
  };

  const filteredEvents = allEvents.filter(event => {
    if (activeFilter === 'All') return true;
    return getDisplayCategory(event.category) === activeFilter;
  });

  const featuredEvents = filteredEvents.filter(e => e.isFeatured);
  const otherEvents = filteredEvents.filter(e => !e.isFeatured);

  return (
    <div className="min-h-screen py-16 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <header className="mb-20 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 relative"
          >
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none text-black relative z-10">
              EVENTS
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-bold uppercase tracking-widest italic mb-8"
          >
            Explore all structured activities, competitions, and showcases of Prayogam 2k26.
          </motion.p>
          <div className="w-20 h-1.5 bg-primary shadow-glow mb-4" />
        </header>

        {/* CATEGORY FILTER BAR */}
        <div className="flex items-center justify-start md:justify-center gap-10 mb-16 border-b border-gray-100 overflow-x-auto no-scrollbar pb-1">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="relative py-4 text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap"
            >
              <span className={activeFilter === filter ? 'text-black' : 'text-gray-400 hover:text-black'}>
                {filter}
              </span>
              {activeFilter === filter && (
                <motion.div 
                  layoutId="activeFilter"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" 
                />
              )}
            </button>
          ))}
        </div>

        {/* FEATURED SECTION */}
        {featuredEvents.length > 0 && (
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <span className="w-8 h-1 bg-primary" />
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary italic">Featured Showcases</h2>
            </div>
            <div className="space-y-6">
              {featuredEvents.map((event) => (
                <FeaturedCard key={event.slug} event={event} onClick={() => navigate(`/events/${event.slug}`)} />
              ))}
            </div>
          </section>
        )}

        {/* OTHER EVENTS SECTION */}
        {otherEvents.length > 0 && (
          <section>
            <div className="flex items-center gap-4 mb-10">
              <span className="w-8 h-1 bg-primary" />
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary italic">Competitions & Activities</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherEvents.map((event) => (
                <EventCard key={event.slug} event={event} onClick={() => navigate(`/events/${event.slug}`)} />
              ))}
            </div>
          </section>
        )}

        {/* EMPTY STATE */}
        {filteredEvents.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32 border border-dashed border-gray-200 rounded-3xl"
          >
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">No events found in this category</p>
          </motion.div>
        )}

      </div>
    </div>
  );
};

/* --- COMPONENTS --- */

const FeaturedCard = ({ event, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.01 }}
    onClick={onClick}
    className="group flex flex-col md:flex-row bg-white border border-gray-100 rounded-[2rem] h-full md:h-80 cursor-pointer overflow-hidden transition-all duration-300 hover:border-primary/30"
  >
    {/* Left: Visual Area (Placeholder for Image) */}
    <div className="md:w-5/12 bg-gray-50 relative flex items-center justify-center p-12 overflow-hidden border-b md:border-b-0 md:border-r border-gray-100">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent mix-blend-overlay" />
      <Sparkles className="text-primary/10 group-hover:scale-110 transition-transform duration-500" size={140} />
      <div className="absolute top-6 left-6">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary bg-primary/5 px-4 py-1.5 rounded-full inline-block shadow-sm border border-primary/10 backdrop-blur-sm">
          {event.category}
        </span>
      </div>
    </div>

    {/* Right: Content Area */}
    <div className="flex-1 p-10 md:p-14 flex flex-col justify-center">
      <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors leading-[0.9]">
        {event.title}
      </h3>
      <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed mb-8 max-w-lg">
        {event.description}
      </p>
      <button className="self-start flex items-center gap-3 bg-foreground text-white px-8 py-4 rounded-full hover:bg-primary transition-all font-black uppercase tracking-[0.2em] text-[10px] overflow-hidden group/btn relative mt-2">
        <span className="relative z-10">View Details</span>
        <ArrowRight size={14} className="relative z-10 group-hover/btn:translate-x-2 transition-transform" />
      </button>
    </div>
  </motion.div>
);

const EventCard = ({ event, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    onClick={onClick}
    className="group bg-white border border-gray-100 p-10 rounded-[2rem] cursor-pointer transition-all duration-300 hover:border-primary flex flex-col h-full overflow-hidden"
  >
    <div className="mb-8">
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary bg-primary/5 px-4 py-1.5 rounded-full inline-block shadow-sm border border-primary/10">
        {event.category}
      </span>
    </div>

    <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 leading-none">
      {event.title}
    </h3>

    <p className="text-gray-400 text-xs font-medium leading-relaxed mb-10 overflow-hidden line-clamp-3">
      {event.description}
    </p>

    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between gap-2">
      <a 
        onClick={(e) => e.stopPropagation()}
        href={REGISTRATION_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-1 text-center bg-transparent border border-gray-200 text-gray-500 px-3 md:px-5 py-3 rounded-full hover:border-primary hover:text-primary transition-all font-black uppercase tracking-[0.2em] text-[10px]"
      >
        Register
      </a>
      <button className="flex-1 flex items-center justify-center gap-2 bg-foreground text-white px-3 md:px-5 py-3 rounded-full hover:bg-primary transition-all font-black uppercase tracking-[0.2em] text-[10px] group/btn">
        <span className="relative z-10">Details</span>
        <ArrowRight size={14} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  </motion.div>
);

export default Events;
