import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Megaphone, Calendar, MapPin, Bell, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
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
      title: "Pass Registration",
      content: "Participants can now secure their entry by obtaining the Transaction File Pass. Entry and participation are allowed only through a valid pass.",
      date: "REGISTRATIONS ACTIVE"
    },
    {
      icon: Calendar,
      title: "Important Dates",
      content: "Screening Phase: 1 – 3 April 2026. Final Event Day: 18 April 2026. Note: Participants are advised to follow the schedule and prepare accordingly for each phase.",
      date: "Key Timeline Updated"
    },
    {
      icon: MapPin,
      title: "Venue Details",
      content: "Poornima University, Sitapura Extension, Jaipur.",
      date: "Confirmed"
    },
    {
      icon: Bell,
      title: "Event Updates",
      content: "All activities, competitions, and participation-based events have been updated. Refer to the Events page for complete details.",
      date: "Latest"
    }
  ];

  const faqs = [
    {
      q: "How can I get a pass for Prayogam 2k26?",
      a: "Passes can be obtained through the official platform. The Transaction File Pass is required for participation."
    },
    {
      q: "Is registration required to attend the event?",
      a: "Yes, a valid pass is required to enter and participate in Prayogam 2k26."
    },
    {
      q: "Where will the registration form be available?",
      a: "The registration and pass access will be available through the official event platform."
    },
    {
      q: "Can I attend without a pass?",
      a: "No, entry is restricted to participants with a valid pass."
    },
    {
      q: "What should I bring for the event?",
      a: "Participants should carry their project materials, required setup, and identification."
    },
    {
      q: "Can I participate in multiple activities?",
      a: "Yes, participants can take part in multiple activities based on their interest and eligibility."
    },
    {
      q: "Will I get updates after registration?",
      a: "Yes, important updates and instructions will be shared through official communication channels."
    },
    {
      q: "Who can attend Prayogam 2k26?",
      a: "First-year students of the Faculty of Computer Engineering are eligible to participate."
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
              Stay informed with the latest updates and important information related to Prayogam 2k26.
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
          <Link to="/contact" className="inline-flex flex-col items-center group">
            <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">Contact Support Team</span>
            <div className="w-1/2 h-0.5 bg-primary group-hover:w-full transition-all duration-300 mt-1 shadow-glow" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default Announcements;
