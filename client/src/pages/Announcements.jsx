import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Megaphone, Calendar, MapPin, Bell, Plus, Minus } from 'lucide-react';
import AnimatedSection from '../components/animations/AnimatedSection';
import AnimatedText from '../components/animations/AnimatedText';

const AnnouncementCard = ({ icon: Icon, title, content, date, index }) => (
  <AnimatedSection 
    direction="up" 
    delay={index * 0.1}
    className="bg-white border border-border p-6 md:p-8 rounded-3xl hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
    
    <div className="flex flex-col md:flex-row md:items-start gap-6 relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
        <Icon size={28} />
      </div>
      
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <h3 className="text-xl md:text-2xl font-black text-foreground group-hover:text-primary transition-colors uppercase tracking-tight">
            {title}
          </h3>
          {date && (
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-full">
              {date}
            </span>
          )}
        </div>
        <p className="text-gray-600 font-medium leading-relaxed italic">
          "{content}"
        </p>
      </div>
    </div>
  </AnimatedSection>
);

const FAQItem = ({ faq, index, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-border last:border-0">
      <button 
        onClick={() => toggleOpen(index)}
        className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
      >
        <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 pr-6 ${isOpen ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
          {faq.q}
        </h3>
        <div className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          {isOpen ? (
            <Minus className="w-6 h-6 text-primary" />
          ) : (
            <Plus className="w-6 h-6 text-primary" />
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 font-medium leading-relaxed pr-8 md:pr-12">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Announcements = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const announcements = [
    {
      icon: Megaphone,
      title: "Registrations Open",
      content: "Secure your Transaction File Pass now. Registrations are live on Luma.",
      date: "Active Now"
    },
    {
      icon: Calendar,
      title: "Important Dates",
      content: "Final Event: 18 April 2026. Mark your calendars for the ultimate tech-cultural convergence.",
      date: "18 April 2026"
    },
    {
      icon: MapPin,
      title: "Venue Update",
      content: "Poornima University, Sitapura Extension, Jaipur. The arena is being prepared for the system.",
      date: "Confirmed"
    },
    {
      icon: Bell,
      title: "Event Updates",
      content: "New high-stakes competitions and cultural activities have been added to the schedule. Check the Events page for details.",
      date: "New"
    }
  ];

  const faqs = [
    {
      q: "How do I register for Prayogam 2k26?",
      a: "You can register by securing your Transaction File Pass through the official registration link."
    },
    {
      q: "Do I need a pass to participate in events?",
      a: "Yes, all participants must have a valid Transaction File Pass to access events and competitions."
    },
    {
      q: "Where do I register?",
      a: "Use this official link: https://luma.com/tqtln2i2"
    },
    {
      q: "Can I attend without registering?",
      a: "No, entry is restricted to registered participants only."
    },
    {
      q: "What exactly is the “Money Mystery” theme?",
      a: "The theme revolves around modern finance, blockchain, cybersecurity, and hidden systems that drive global wealth. Expect challenges that combine technology, strategy, and problem-solving."
    },
    {
      q: "Do I need to bring my own laptop or equipment?",
      a: "Yes, participants are expected to bring their own laptops and any required tools for competitions, especially for hackathons and technical events."
    },
    {
      q: "Can I participate in multiple events?",
      a: "Yes, you can register for multiple events as long as their schedules do not clash."
    },
    {
      q: "How will I receive updates after registering?",
      a: "All important updates will be shared via email and official communication channels, so make sure to provide accurate contact details during registration."
    }
  ];

  return (
    <div className="py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-0">
        
        <div className="text-center mb-16 px-4">
          <AnimatedText 
            text="Announcements & Updates" 
            el="h1" 
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter mb-4 md:whitespace-nowrap" 
          />
          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-bold uppercase tracking-widest">
              Stay informed with the latest updates and find answers to common questions.
            </p>
            <div className="w-20 h-1.5 bg-primary mx-auto mt-6 shadow-glow" />
          </AnimatedSection>
        </div>

        {/* ANNOUNCEMENTS LIST */}
        <div className="space-y-6 mb-24">
          {announcements.map((item, index) => (
            <AnnouncementCard 
              key={index}
              {...item}
              index={index}
            />
          ))}
        </div>

        {/* FAQ SECTION */}
        <AnimatedSection direction="up" className="mb-16">
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-8 uppercase text-center flex items-center justify-center gap-4">
            <div className="w-8 h-1 bg-primary" />
            Frequently Asked Questions
            <div className="w-8 h-1 bg-primary" />
          </h2>
          <div className="bg-white border border-border rounded-3xl p-6 md:p-10 shadow-none relative overflow-hidden">
            <div className="relative z-10 divide-y divide-border">
              {faqs.map((faq, index) => (
                <FAQItem 
                  key={index}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  toggleOpen={toggleOpen}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* HELP FOOTER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-gray-500 font-medium mb-4">Still have unanswered questions?</p>
          <a href="mailto:hod.1year@poornima.edu.in" className="inline-flex flex-col items-center group">
            <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">Contact Support Team</span>
            <div className="w-1/2 h-0.5 bg-primary group-hover:w-full transition-all duration-300 mt-1 shadow-glow" />
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default Announcements;
