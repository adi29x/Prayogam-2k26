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
          Prayogam 2k26 is not just another college fest. It is an immersive, high-stakes convergence of technology, finance, and culture — built for creators who think, build, and execute at the highest level.
        </p>

        <div className="bg-gray-50 border border-border p-6 rounded-2xl mb-10">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm font-bold text-primary tracking-wider uppercase mb-4 shadow-sm">
            Theme: Money Mystery 💸
          </div>
          <p className="text-gray-600 font-medium">
            This year’s theme explores modern finance, blockchain, cybersecurity, and the systems that govern global wealth.<br/><br/>
            <strong className="text-foreground">Hack the vault. Secure the assets. Build solutions that matter.</strong>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
          <Link to="/events" className="block text-center w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 hover:shadow-glow transition-all">
            Explore Events
          </Link>
          <Link to="/passes" className="block text-center w-full sm:w-auto border-2 border-foreground text-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-foreground hover:text-white transition-all">
            Get Your Pass
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="left" delay={0.2} className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
        <div className="absolute inset-0 bg-gradient-to-tr from-foreground/80 via-transparent to-transparent z-10" />
        <img 
          src="/about-new.jpg" 
          alt="Prayogam Tech Innovation"
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-1000 grayscale hover:grayscale-0"
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
        { val: "96h", label: "Hackathon" },
        { val: "10+", label: "Events" },
        { val: "1K+", label: "Attendees" },
        { val: "₹5L+", label: "Prize Pool" }
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
      { icon: MapPin, title: "Venue", value: "Poornima University, Sitapura Extension, Jaipur, Rajasthan" },
      { icon: Calendar, title: "Final Event Date", value: "18 April 2026" },
      { icon: Hourglass, title: "Duration", value: "Multi-phase event (March – April 2026)" },
      { icon: Users, title: "Expected Footfall", value: "1000+ Participants" },
      { icon: Lightbulb, title: "Projects", value: "100+ Innovative Projects" },
      { icon: Brain, title: "Event Format", value: "Hackathons, Exhibitions, Competitions, Fun Activities" }
    ];
  
    return (
      <section className="mb-24 px-4 md:px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-2">Event Details</h2>
          <p className="text-gray-500 font-medium tracking-wide uppercase text-xs sm:text-sm">Everything you need to know before entering the system.</p>
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
          Prayogam aims to become a flagship innovation platform where students consistently showcase ideas, projects, and prototypes built during their academic journey.
        </p>
        <p>
          It is designed to cultivate a culture of experimentation, creativity, and problem-solving — transforming theoretical knowledge into real-world applications.
        </p>
        <p>
          Over time, Prayogam envisions becoming a recognized hub where student innovations evolve into impactful products, research initiatives, and startup ventures.
        </p>
      </div>

      <div className="bg-foreground text-white p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full grayscale transition-all duration-500 hover:grayscale-0" />
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary" />
          Driving Innovation with PU-iNCENT
        </h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          Prayogam plays a critical role in strengthening the innovation ecosystem of PU-iNCENT (Poornima University Incubation Center). It acts as a discovery platform for student-led ideas and projects, enabling mentorship, validation, and incubation pathways.
        </p>
        <p className="text-gray-300 leading-relaxed">
          By connecting students with mentors, experts, and the incubation system, Prayogam bridges creativity with real-world innovation and entrepreneurship.
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
          The mission of Prayogam 2k26 is to provide a structured platform for students to present their projects, demonstrate practical skills, and solve real-world problems.
        </p>
        <p>
          The event encourages students to move beyond theory and build meaningful, impactful solutions while gaining feedback from mentors, faculty, and industry experts.
        </p>
      </div>

      <div className="bg-gray-50 border border-border p-8 rounded-3xl">
        <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary" />
          The Impact We Create
        </h3>
        <p className="text-gray-600 leading-relaxed font-medium mb-4">
          Prayogam fosters a strong culture of innovation and project-based learning within the university. It inspires students to transform academic projects into startup ideas by exposing them to mentorship, evaluation, and real-world challenges.
        </p>
        <p className="text-gray-600 leading-relaxed font-medium">
          The goal is to nurture future innovators, problem solvers, and entrepreneurs who can build impactful solutions.
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
    "Fintech", "Blockchain", "Cybersecurity", 
    "AI / ML", "Web & App Development", "Data Science"
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

const EventGuidelines = () => (
  <section className="mb-24 border-t border-border pt-24 px-4 md:px-0 text-center">
    <div className="max-w-3xl mx-auto space-y-8">
      <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter">Event Guidelines</h2>
      <p className="text-lg text-gray-600 font-medium leading-relaxed">
        Participants are required to follow the official rules and regulations during all phases of Prayogam 2k26. Ensure you decode every instruction carefully to stay ahead in the system.
      </p>
      
      <div className="pt-4">
        <a 
          href="#" 
          onClick={(e) => e.preventDefault()}
          className="inline-flex items-center gap-3 border-2 border-primary text-primary px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all group"
        >
          Download Rules & Regulations
          <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-white animate-pulse" />
        </a>
      </div>
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
    </div>
  );
};

export default About;
