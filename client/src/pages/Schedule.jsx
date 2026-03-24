import { motion } from 'framer-motion';
import AnimatedSection from '../components/animations/AnimatedSection';
import AnimatedText from '../components/animations/AnimatedText';

const SchedulePhaseCard = ({ phase, index }) => {
  return (
    <AnimatedSection 
      direction="up" 
      delay={index * 0.15}
      className="mb-12 ml-6 md:ml-12 relative group"
    >
      {/* Timeline Node / Phase Number */}
      <div className="absolute -left-[35px] md:-left-[59px] top-4 w-12 h-12 rounded-full bg-white border-4 border-foreground group-hover:border-primary transition-colors duration-500 shadow-sm flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-10">
        <span className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">0{index + 1}</span>
      </div>
      
      <div className="bg-white p-8 rounded-2xl border border-border shadow-sm group-hover:shadow-glass group-hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
        {/* Decorative corner glow on hover */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/0 group-hover:bg-primary/5 transition-colors rounded-bl-full duration-500" />
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6 border-b border-border pb-6 relative z-10">
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">{phase.title}</h3>
            <span className="text-sm font-bold tracking-widest text-primary uppercase mt-1 block">{phase.date}</span>
          </div>
        </div>
        
        <ul className="space-y-4 relative z-10">
          {phase.events.map((event, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700 font-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0 group-hover:bg-primary transition-colors" />
              <span className="leading-relaxed">{event}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
};

const Schedule = () => {
  const schedulePhases = [
    {
      title: "Phase 1 — Pre-Mentorship",
      date: "16 – 20 March",
      events: [
        "Orientation & Introduction",
        "Problem Statement Release",
        "Mentor Allocation",
        "Initial Guidance Sessions"
      ]
    },
    {
      title: "Phase 2 — Development Phase",
      date: "20 – 31 March",
      events: [
        "Team Formation & Ideation",
        "Project Development",
        "Continuous Mentorship Support",
        "Internal Progress Reviews"
      ]
    },
    {
      title: "Phase 3 — Screening",
      date: "1 – 4 April",
      events: [
        "Project Submissions",
        "Evaluation by Experts",
        "Shortlisting of Top Teams"
      ]
    },
    {
      title: "Phase 4 — Post-Mentorship",
      date: "6 – 10 April",
      events: [
        "Advanced Mentorship Sessions",
        "Pitch Refinement",
        "Product Improvement & Debugging"
      ]
    },
    {
      title: "Phase 5 — Exhibition (Phase 1)",
      date: "15 April",
      events: [
        "Project Showcase (Round 1)",
        "Live Demonstrations",
        "Initial Jury Interaction"
      ]
    },
    {
      title: "Phase 6 — Exhibition (Phase 2)",
      date: "16 April",
      events: [
        "Advanced Evaluation",
        "Final Shortlisting",
        "Jury Deep Dive"
      ]
    },
    {
      title: "Final Day — The Vault",
      date: "18 April",
      events: [
        "Final Presentations & Pitching",
        "Winner Selection",
        "Awards & Closing Ceremony",
        "Money Mystery DJ Night"
      ]
    }
  ];

  return (
    <div className="py-12 min-h-[80vh] max-w-4xl mx-auto px-4 md:px-0">
      <div className="text-center mb-20">
        <AnimatedText text="SCHEDULE" el="h1" className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4" />
        <AnimatedSection direction="up" delay={0.2}>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The complete journey of Prayogam 2k26 — from mentorship to the final vault.
          </p>
        </AnimatedSection>
      </div>

      <div className="relative border-l-2 border-border ml-6 md:ml-10 pt-4">
        {schedulePhases.map((phase, i) => (
          <SchedulePhaseCard key={i} phase={phase} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
