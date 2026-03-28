import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { REGISTRATION_LINK } from '../constants';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/animations/AnimatedSection';
import AnimatedText from '../components/animations/AnimatedText';

const formatUrl = (title) => title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

const EventCard = ({ event, index }) => {
  return (
    <AnimatedSection direction={index % 2 === 0 ? "left" : "right"} delay={(index % 3) * 0.1}>
      <motion.div 
        layout
        className="group bg-white border border-border rounded-[2.5rem] overflow-hidden hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full shadow-sm"
      >
      <div className="relative h-60 bg-foreground overflow-hidden">
        <div className="absolute inset-0 bg-transparent group-hover:bg-primary/20 transition-colors z-10 pointer-events-none duration-500" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
        <img 
          src={event.image || `https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=1000&auto=format&fit=crop`} 
          alt={event.title}
          loading="lazy"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute top-5 left-5 z-20 flex flex-col gap-2">
          <div className="bg-primary text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg self-start">
            {event.category}
          </div>
          {event.isFun && (
            <div className="bg-black text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg self-start">
              Open for All
            </div>
          )}
        </div>
      </div>
      
      <div className="p-8 md:p-10 flex flex-col flex-1">
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-black text-foreground mb-1 leading-tight group-hover:text-primary transition-colors">{event.title}</h3>
          {event.subtitle && (
            <p className="text-primary font-black text-xs uppercase tracking-[0.2em] italic mb-4">{event.subtitle}</p>
          )}
        </div>

        <p className="text-gray-600 font-medium mb-8 flex-1 leading-relaxed text-sm">
          {event.description}
        </p>

        {(event.recognition || event.rewards) && (
          <div className="space-y-6 mb-8 pt-6 border-t border-border/50">
            {event.recognition && (
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-primary block mb-2">Recognition</span>
                <p className="text-xs text-foreground font-bold leading-relaxed">{event.recognition}</p>
              </div>
            )}
            {event.rewards && (
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-primary block mb-2">Rewards</span>
                <p className="text-xs text-foreground font-bold leading-relaxed">{event.rewards}</p>
              </div>
            )}
          </div>
        )}
        
        <div className="mt-auto space-y-4">
          <div className="flex flex-col gap-2">
            <div className="inline-block bg-gray-50 text-gray-500 text-[10px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wide self-start border border-border/50">
              Free with Pass
            </div>
          </div>
          <Link to={`/events/${formatUrl(event.title)}`} className="w-full bg-background border border-border text-foreground font-black py-4 rounded-2xl group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 flex justify-center items-center gap-2 text-xs uppercase tracking-widest shadow-sm">
            View Details <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
      </motion.div>
    </AnimatedSection>
  );
};

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const allEvents = [
    {
      title: "Exhibition — Phase 1",
      category: "Innovation",
      description: "Initial showcase of student-built projects and working prototypes. Participants present their ideas, system flow, and implementation.",
      image: null
    },
    {
      title: "Exhibition — Phase 2",
      category: "Innovation",
      description: "Shortlisted projects move forward for deeper evaluation and mentor interaction. Focus on clarity, working model, and improvements.",
      image: null
    },
    {
      title: "The Grand Finale",
      category: "Innovation",
      description: "Final presentation of selected projects in front of experts and evaluators. Only the strongest solutions are recognized.",
      image: null
    },
    {
      title: "Cash Quest 2k26",
      category: "Marketing",
      subtitle: "The Ultimate CR System",
      description: "A premium, gamified class representative competition where performance, creativity, and reach lead to massive recognition.",
      recognition: "Daily Top 3 + Final Stage Recognition + Official Features",
      rewards: "Wildcard Pass + Tech Swag + Exclusive Networking + Certificates",
      image: null
    },
    {
      title: "Reel Competition",
      category: "Content",
      subtitle: "Top Creators",
      description: "Create reels based on Prayogam, your project, or event moments. Top creators get featured.",
      recognition: "Top 3 Post + Story + Highlight + Announcement",
      rewards: "Certificate + Goodies + Wildcard Pass + Networking Access",
      image: null
    },
    {
      title: "Influencer Clash",
      category: "Content",
      subtitle: "Top Influencer",
      description: "Compete to become the most impactful voice during Prayogam through consistent content.",
      recognition: "Post + Story + Highlight + Announcement",
      rewards: "Certificate + Wildcard Pass",
      image: null
    }
  ];

  const categories = ['All', ...new Set(allEvents.map(e => e.category))];

  const filteredEvents = activeFilter === 'All' 
    ? allEvents 
    : allEvents.filter(e => e.category === activeFilter);

  return (
    <div className="min-h-screen py-12">
      
      {/* PAGE HEADER */}
      <div className="text-center mb-16">
        <AnimatedText text="TECHNICAL EXHIBITIONS" el="h1" className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase" />
        <AnimatedSection direction="up" delay={0.2}>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium uppercase tracking-widest italic">
            "Explore all activities designed to test, present, and evaluate your skills."
          </p>
        </AnimatedSection>
      </div>

      <AnimatedSection 
        direction="up" 
        delay={0.3}
        className="max-w-4xl mx-auto mb-16 bg-red-50/50 border border-primary/20 p-8 rounded-3xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div>
          <h3 className="font-black text-xl text-primary uppercase tracking-tight mb-1">Registration Access</h3>
          <p className="text-foreground font-medium text-sm">
            To participate in these activities, you must complete your <span className="font-bold text-primary italic uppercase">event registration through the Transaction File Pass</span> and secure your access.
            <br />
            <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-2 block">Only participants with a valid Transaction File Pass will be allowed to take part.</span>
          </p>
        </div>
        <a href={REGISTRATION_LINK} target="_blank" rel="noopener noreferrer" className="shrink-0 block w-full sm:w-auto text-center bg-primary text-white font-bold py-4 px-10 rounded-full shadow-glow hover:bg-black transition-all uppercase tracking-widest text-sm">
          Secure Your Pass
        </a>
      </AnimatedSection>

      <div className="flex flex-wrap justify-center gap-2 mb-20 max-w-4xl mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2.5 rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-300 ${
              activeFilter === category 
                ? 'bg-foreground text-background shadow-lg scale-105' 
                : 'bg-white border text-gray-400 hover:border-foreground hover:text-foreground'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
        <AnimatePresence mode="popLayout">
          {filteredEvents.map((event, index) => (
            <EventCard key={event.title} event={event} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

    </div>
  );
};


export default Events;
