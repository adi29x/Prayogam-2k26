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
        className="group bg-white border border-border rounded-[2rem] overflow-hidden hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full shadow-sm"
      >
      <div className="relative h-56 bg-foreground overflow-hidden">
        <div className="absolute inset-0 bg-transparent group-hover:bg-primary/20 transition-colors z-10 pointer-events-none duration-500" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
        <img 
          src={event.image || `https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=1000&auto=format&fit=crop`} 
          alt={event.title}
          loading="lazy"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          <div className="bg-primary text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
            {event.category}
          </div>
          {event.isFun && (
            <div className="bg-black text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
              Open for All
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-black text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">{event.title}</h3>
        <p className="text-gray-600 font-medium mb-6 flex-1 leading-relaxed text-sm">
          {event.description}
        </p>
        
        <div className="mt-auto space-y-4">
          <div className="flex flex-col gap-2">
            <div className="inline-block bg-gray-50 text-gray-500 text-[10px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wide self-start border border-border/50">
              Free with Pass
            </div>
          </div>
          <Link to={`/events/${formatUrl(event.title)}`} className="w-full bg-background border border-border text-foreground font-bold py-3 rounded-xl group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 flex justify-center items-center gap-2 text-sm uppercase tracking-wider">
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
      description: "Initial showcase of diverse technical projects and student-led prototypes.",
      image: null
    },
    {
      title: "Exhibition — Phase 2",
      category: "Innovation",
      description: "Advanced project demonstrations and technical evaluation by industry mentors.",
      image: null
    },
    {
      title: "The Grand Finale",
      category: "Innovation",
      description: "Final presentation of top-tier technical solutions competing for key awards.",
      image: null
    },
    {
      title: "Dev Showcase",
      category: "Content",
      description: "Create high-impact technical demos and project walk-throughs.",
      image: null
    },
    {
      title: "Tech Influencer",
      category: "Content",
      description: "Strategic sharing of technical insights and development journeys.",
      image: null
    },
    {
      title: "The Code Enigma",
      category: "Tech",
      description: "Solve complex technical sequences and logic-based development puzzles.",
      image: null
    },
    {
      title: "Debug Challenge",
      category: "Tech",
      description: "A rapid-fire technical challenge testing debugging and architecture skills.",
      image: null
    },
    { title: "Innovation Hunt", category: "Fun", description: "Spot the most creative features across the exhibition.", isFun: true },
    { title: "Tech Capture", category: "Fun", description: "Document your tech exhibition experience at the photobooth.", isFun: true },
    { title: "Spin the Tech-Wheel", category: "Fun", description: "Test your luck for instant tech-related rewards.", isFun: true },
    { title: "Logic Quiz", category: "Fun", description: "Speed, precision, and technical knowledge determine the winner.", isFun: true },
    { title: "Dev Survival", category: "Fun", description: "A high-stakes game of technical focus and focus.", isFun: true },
    { title: "The Tech Debate", category: "Fun", description: "Decide the future of tech in this high-energy audience battle.", isFun: true },
    { title: "Rapid Code", category: "Fun", description: "One requirement, five required outputs. Implement it fast.", isFun: true },
    { title: "Tech Valuation", category: "Fun", description: "Estimate the potential impact of technical innovations.", isFun: true },
    { title: "Open Stage", category: "Fun", description: "The stage is yours. Share your development talent with the community.", isFun: true }
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
            "Explore the full range of innovative project challenges."
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
            To participate in these sessions, you must complete your <span className="font-bold text-primary italic uppercase">Project Submission Entry</span>.
          </p>
        </div>
        <a href={REGISTRATION_LINK} target="_blank" rel="noopener noreferrer" className="shrink-0 block w-full sm:w-auto text-center bg-primary text-white font-bold py-4 px-10 rounded-full shadow-glow hover:bg-black transition-all uppercase tracking-widest text-sm">
          Secure Pass
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

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
