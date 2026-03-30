import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Hourglass, Users, Lightbulb, Brain } from 'lucide-react';
import AnimatedSection from '../components/animations/AnimatedSection';
import AnimatedText from '../components/animations/AnimatedText';

const AboutHero = () => (
  <section className="pt-12 pb-24 relative">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <AnimatedSection direction="right" className="space-y-6">
        <AnimatedText text="ABOUT PRAYOGAM" className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-2 uppercase" el="h1" />
        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-500 font-bold mb-8 uppercase tracking-widest">The Flagship Event of the Era</h2>
        
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium mb-8">
          Prayogam 2k26 is a platform where first-year students get the opportunity to present what they have built. <br/><br/>
          It is not just about showing projects, but about understanding how ideas work in real situations. <br/><br/>
          Students come here to:
          <ul className="mt-4 space-y-2 list-disc list-inside text-primary font-bold">
            <li>Build something practical</li>
            <li>Explain their work</li>
            <li>Get feedback from mentors and experts</li>
          </ul>
        </p>

        <div className="bg-gray-50 border border-border p-6 rounded-2xl mb-10">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm font-bold text-primary tracking-wider uppercase mb-4 shadow-sm">
            Theme: Money Mystery 💸
          </div>
          <p className="text-gray-600 font-medium leading-relaxed">
            This year’s theme, Money Mystery, focuses on logic, strategy, and problem-solving in real-world systems. <br/><br/>
            <span className="text-primary font-black uppercase tracking-widest text-xs block mb-2">Tagline: Build clearly. Think logically. Present confidently.</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
          <Link to="/events" className="block text-center w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 hover:shadow-glow transition-all">
            Explore Events
          </Link>
          <Link to="/passes" className="block text-center w-full sm:w-auto border-2 border-foreground text-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-foreground hover:text-white transition-all">
            Secure Your Pass
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="left" delay={0.2} className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
        <div className="absolute inset-0 bg-gradient-to-tr from-foreground/80 via-transparent to-transparent z-10" />
        <img 
          src="/about-vision.jpg" 
          alt="Prayogam Tech Innovation"
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none z-20" />
      </AnimatedSection>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="py-12 border-y border-border bg-gray-50 -mx-6 px-6 lg:-mx-20 lg:px-20 mb-24">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { val: "1K+", label: "Participants" },
        { val: "₹5L+", label: "Prize Pool" },
        { val: "10+", label: "Events" },
        { val: "200+", label: "Projects" }
      ].map((stat, i) => (
        <AnimatedSection direction="up" delay={i * 0.1} key={i} className="text-center group">
          <div className="text-4xl md:text-5xl font-black mb-2 text-foreground group-hover:text-primary transition-colors">{stat.val}</div>
          <div className="text-sm font-bold text-gray-500 tracking-widest uppercase">{stat.label}</div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

const EventDetailItem = ({ icon: Icon, title, value }) => (
    <AnimatedSection direction="up" className="bg-white border border-border p-6 rounded-2xl flex items-start gap-4 transition-all duration-300 hover:border-primary/30">
      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-primary shrink-0">
        <Icon size={20} />
      </div>
      <div>
        <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">{title}</h4>
        <p className="text-sm font-bold text-foreground leading-snug">{value}</p>
      </div>
    </AnimatedSection>
  );
  
  const EventDetailsSection = () => {
    const details = [
      { icon: MapPin, title: "Venue", value: "Poornima University, Jaipur" },
      { icon: Calendar, title: "Event Date", value: "18 April 2026" },
      { icon: Hourglass, title: "Duration", value: "Multi-phase Tech Expo (March – April 2026)" },
      { icon: Users, title: "Network", value: "1K+ Technical Participants" },
      { icon: Lightbulb, title: "Scoping", value: "100+ Live Project Demos" },
      { icon: Brain, title: "Format", value: "Exhibitions, Hackathons, & Tech Battles" }
    ];
  
    return (
      <section className="mb-24 px-4 md:px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-2">Prayogam Tech Innovation</h2>
          <p className="text-gray-500 font-medium tracking-wide uppercase text-xs sm:text-sm">Innovation in real-world systems.</p>
          <div className="w-12 h-1 bg-primary mx-auto mt-4" />
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {details.map((detail, i) => (
            <EventDetailItem key={i} {...detail} />
          ))}
        </div>
      </section>
    );
  };

const VisionSection = () => (
  <section className="mb-24 grid grid-cols-1 md:grid-cols-12 gap-12 sm:px-4 md:px-0">
    <div className="md:col-span-4">
      <AnimatedText text="Our Vision" el="h2" className="text-3xl sm:text-4xl font-black uppercase tracking-tighter sticky top-28" />
    </div>
    <AnimatedSection direction="up" className="md:col-span-8 space-y-12">
      <div className="text-lg text-gray-700 leading-relaxed font-medium space-y-6">
        <p>
          Prayogam aims to become a strong platform where students can present their ideas and projects every year.
        </p>
        <p>
          It encourages students to:
          <ul className="mt-4 space-y-2 list-disc list-inside text-primary font-bold">
            <li>Try new ideas</li>
            <li>Build real solutions</li>
            <li>Learn by doing</li>
          </ul>
        </p>
        <p className="font-bold text-foreground italic border-l-4 border-primary pl-4">
          The goal is simple — turn what you learn in class into something useful and practical.
        </p>
      </div>

      <div className="bg-foreground text-white p-8 rounded-3xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full transition-all duration-700 group-hover:bg-primary/40" />
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 relative z-10 uppercase tracking-tight">
          <div className="w-2 h-2 rounded-full bg-primary" />
          Collaborating with PU-iNCENT
        </h3>
        <p className="text-gray-300 leading-relaxed mb-4 relative z-10">
          Prayogam is connected with the PU-iNCENT (Poornima University Incubation Center).
        </p>
        <div className="space-y-3 mb-6 relative z-10">
          {[
            "Good projects can get further guidance",
            "Students can improve their ideas",
            "Some projects may even grow into startup ideas"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-400">
               <div className="w-1.5 h-1.5 rounded-full bg-primary" />
               {item}
            </div>
          ))}
        </div>
        <p className="text-white font-bold leading-relaxed relative z-10 italic border-t border-white/10 pt-4">
          It helps students move from basic ideas to real solutions.
        </p>
      </div>
    </AnimatedSection>
  </section>
);

const MissionSection = () => (
  <section className="mb-24 grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-border pt-24 sm:px-4 md:px-0">
    <div className="md:col-span-4">
      <AnimatedText text="Our Mission" el="h2" className="text-3xl sm:text-4xl font-black uppercase tracking-tighter sticky top-28" />
    </div>
    <AnimatedSection direction="up" className="md:col-span-8 space-y-12">
      <div className="text-lg text-gray-700 leading-relaxed font-medium space-y-6">
        <p>
          The mission of Prayogam 2k26 is to give students a proper platform to:
          <ul className="mt-4 space-y-2 list-disc list-inside text-primary font-bold">
            <li>Present their projects</li>
            <li>Improve their technical skills</li>
            <li>Solve real-world problems</li>
          </ul>
        </p>
        <p>
          Students are encouraged to move beyond theory and focus on building something that works.
        </p>
        <p className="font-bold text-foreground">
          They also receive feedback from: Mentors, Faculty, and Industry experts.
        </p>
      </div>

      <div className="bg-gray-50 border border-border p-8 rounded-3xl">
        <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary" />
          The Impact We Create
        </h3>
        <p className="text-gray-600 leading-relaxed font-medium mb-4">
          Prayogam helps students develop:
          <ul className="mt-2 space-y-2 list-disc list-inside text-foreground font-black uppercase text-xs tracking-widest">
            <li>Practical skills</li>
            <li>Confidence in presenting ideas</li>
            <li>Problem-solving ability</li>
          </ul>
        </p>
        <p className="text-gray-600 leading-relaxed font-medium mb-4">
          It also encourages students to think about how their projects can be used in real life or developed further.
        </p>
        <p className="text-primary font-black uppercase tracking-tighter italic">
          The goal is to build students who can create, improve, and innovate.
        </p>
      </div>
    </AnimatedSection>
  </section>
);

const ObjectivesGrid = () => {
  const objectives = [
    { title: "Encourage Innovation", desc: "Promote creative thinking and practical project development." },
    { title: "Promote Startup Culture", desc: "Inspire students to view projects as real-world solutions and startup opportunities." },
    { title: "Mentorship & Guidance", desc: "Connect students with industry experts and mentors." },
    { title: "Idea Validation", desc: "Provide a platform for pitching and improving ideas." },
    { title: "Build Ecosystem", desc: "Strengthen the university’s startup and innovation ecosystem." },
    { title: "Scale Prayogam", desc: "Establish it as the biggest tech and innovation event in the university." }
  ];

  return (
    <section className="mb-24 border-t border-border pt-24 px-4 md:px-0">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-4">Our Objectives</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600">The core pillars driving the Prayogam platform.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {objectives.map((obj, i) => (
          <AnimatedSection direction="up" delay={i * 0.1} key={i} className="bg-white border border-border p-8 rounded-2xl hover:border-primary/50 transition-all group">
            <div className="text-4xl font-black text-gray-100 group-hover:text-primary/10 transition-colors mb-4 block">
              0{i + 1}
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">{obj.title}</h3>
            <p className="text-gray-600 font-medium">{obj.desc}</p>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

const ProjectDomains = () => {
  const domains = [
    "Web development", "App development", "AI/ML", 
    "Core Engg.", "Cybersecurity", "Game Development"
  ];

  return (
    <section className="mb-24 border-t border-border pt-24 px-4 md:px-0">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-4">Project Domains</h2>
        <div className="w-12 h-1 bg-primary mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {domains.map((domain, i) => (
          <AnimatedSection key={i} direction="up" delay={i * 0.05} className="bg-white border border-border p-10 rounded-2xl text-center group hover:border-primary/30 transition-all">
            <h3 className="text-xl font-black group-hover:text-primary transition-colors tracking-tight uppercase">
              {domain}
            </h3>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

const EventGuidelines = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [showModal]);

  return (
    <section className="mb-24 border-t border-border pt-24 px-4 md:px-0 text-center relative">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter">Event Guidelines</h2>
        <p className="text-lg text-gray-600 font-medium leading-relaxed italic border-l-4 border-primary pl-6">
          "Participants must follow the standards of Prayogam 2k26. Focus on originality, clarity, and proper implementation of your project."
        </p>
        
        <div className="pt-4">
          <button 
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-3 bg-foreground text-white border-2 border-foreground px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-primary hover:border-primary transition-all group shadow-sm"
          >
            Download Guidelines Document
            <div className="w-2 h-2 rounded-full bg-white group-hover:bg-white animate-pulse" />
          </button>
        </div>
      </div>

      {/* MODAL */}
      {showModal && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer" 
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-white w-full max-w-sm rounded-[2rem] p-10 text-center shadow-2xl">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-black transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            <h3 className="text-2xl font-black uppercase tracking-tighter mt-2 mb-4">Guidelines</h3>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">To be announced</p>
            <div className="w-8 h-1 bg-primary mx-auto mt-6" />
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

const ParticipantInstructions = () => (
  <section className="mb-24 px-4 md:px-0">
    <div className="max-w-4xl mx-auto bg-white border border-border rounded-[2.5rem] p-8 md:p-12 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-1 bg-primary" />
      <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Important Instructions for Participants</h2>
      <ul className="space-y-6">
        {[
          <>A valid <span className="text-primary font-bold uppercase italic">Transaction File Pass is mandatory</span> for entry and participation in Prayogam 2k26</>,
          "Participants must carry their pass confirmation and valid identification",
          "Entry without a registered pass will not be permitted",
          "Follow the official schedule and reporting times for each phase",
          "Maintain proper documentation of your project (idea, implementation, and working model)",
          "Ensure your system is functional and ready for live demonstration",
          "Adhere to event rules, discipline, and evaluation guidelines"
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-4 text-gray-700 font-medium text-sm md:text-base">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);


const About = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <StatsSection />
      <EventDetailsSection />
      <VisionSection />
      <MissionSection />
      <ObjectivesGrid />
      <ProjectDomains />
      <EventGuidelines />
      <ParticipantInstructions />
    </div>
  );
};

export default About;
