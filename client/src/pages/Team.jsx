import { motion } from 'framer-motion';
import MotionCard from '../components/animations/MotionCard';
import AnimatedText from '../components/animations/AnimatedText';

const TeamCard = ({ name, role, image, size = 'sm', delay = 0 }) => {
  // Premium monochrome UI avatars as fallback
  const imgSource = image || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0A0A0A&color=FFFFFF&size=400&font-size=0.33`;

  let scaleClasses = "";
  let textClasses = "";
  let roleClasses = "";
  let aspectClasses = "";

  // Dynamic layout sizing for hierarchy strictness
  if (size === 'xl') {
    scaleClasses = "md:w-[400px] mx-auto";
    textClasses = "text-3xl md:text-4xl mb-2";
    roleClasses = "text-base font-bold text-primary";
    aspectClasses = "aspect-[4/5]";
  } else if (size === 'lg') {
    scaleClasses = "md:w-[320px] mx-auto";
    textClasses = "text-2xl md:text-3xl mb-1";
    roleClasses = "text-sm font-bold text-primary";
    aspectClasses = "aspect-[4/5]";
  } else if (size === 'md') {
    scaleClasses = "w-full max-w-[280px] mx-auto";
    textClasses = "text-xl md:text-2xl mb-1";
    roleClasses = "text-sm font-semibold text-gray-500";
    aspectClasses = "aspect-[4/5]";
  } else {
    scaleClasses = "w-full";
    textClasses = "text-lg md:text-xl mb-0.5";
    roleClasses = "text-xs font-semibold text-gray-500";
    aspectClasses = "aspect-[4/5]";
  }

  return (
    <MotionCard 
      delay={delay}
      className={`group cursor-pointer p-4 md:p-5 ${scaleClasses}`}
    >
      <div className={`w-full overflow-hidden rounded-xl mb-5 relative ${aspectClasses}`}>
        <img 
          src={imgSource} 
          alt={name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          loading="lazy"
        />
      </div>
      <div className="text-center">
        <h3 className={`font-black tracking-tight text-foreground transition-colors group-hover:text-primary ${textClasses}`}>
          {name}
        </h3>
        <p className={`${roleClasses} uppercase tracking-wide`}>
          {role}
        </p>
        <div className="w-0 h-0.5 bg-primary mx-auto mt-4 group-hover:w-12 transition-all duration-500" />
      </div>
    </MotionCard>
  );
};

const SectionDivider = ({ title }) => (
  <div className="flex items-center gap-4 mb-16 justify-center mt-12">
    <div className="h-px bg-border flex-1 max-w-[120px]" />
    <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase">{title}</h2>
    <div className="h-px bg-border flex-1 max-w-[120px]" />
  </div>
);

const Team = () => {
  const hierarchyData = {
    chief: { name: "Aditya Kapoor", role: "Chief Event Director", image: "/team/aditya.jpg" },
    director: { name: "Himanshu Sharma", role: "Event Director", image: "/team/himanshu.jpg" },
    leadershipRow: [
      { name: "Kanishtha Madaan", role: "Deputy Event Director", image: "/team/kanishtha.jpg" },
      { name: "Himanshu Sharma", role: "Deputy Event Director", image: "/team/himanshu_sgs.jpg" },
      { name: "Prisha Jain", role: "Assistant Deputy Event Director", image: "/team/prisha.png" }
    ],
    organizingTeam: [
      {
        category: "MARKETING",
        members: [
          { name: "Apoorv Raj Shringi", role: "Design & Creative Lead", image: "/team/apoorv.jpg" },
          { name: "Lalit Kumar Choudhary", role: "Social Media & Content Lead", image: "/team/lalit.jpg" }
        ]
      },
      {
        category: "OPERATIONS",
        members: [
          { name: "Dishika Agarwal", role: "Volunteer & Mentor Management Lead", image: "/team/dishika.jpg" },
          { name: "Sumit Upadhayay", role: "Operations & Logistics Lead", image: "/team/sumit.jpg" }
        ]
      },
      {
        category: "TECH",
        members: [
          { name: "Vikas Jangid", role: "Website & Tech Lead", image: "/team/vikas.jpg" }
        ]
      },
      {
        category: "MANAGEMENT / SUPPORT",
        members: [
          { name: "Piyush Agar", role: "Registration & Participants Lead", image: "/team/piyush.jpg" },
          { name: "Aman Nehra", role: "Sponsorship & Partnerships Lead", image: "/team/aman.jpg" },
          { name: "Khushi Sharma", role: "Hospitality & Guest Management Lead", image: "/team/khushi.jpg" },
          { name: "Vishnu Jaiswal", role: "Event Security Lead", image: "/team/vishnu.jpg" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen py-12 px-4 md:px-0 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        
        {/* PAGE HEADER */}
        <div className="text-center mb-24">
          <AnimatedText text="OUR TEAM" el="h1" className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-4" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The collaborative force driving Prayogam 2k26 — a blend of wisdom, leadership, and execution.
            </p>
          </motion.div>
        </div>

        {/* --- 1. FACULTY TEAM (NEW) --- */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-foreground">Faculty Team</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Guiding the vision, structure, and execution of Prayogam 2k26.</p>
          </div>
          <div className="max-w-4xl mx-auto bg-gray-50/50 border border-border/50 rounded-[2.5rem] p-12 text-center group hover:border-primary/30 transition-all duration-500">
            <div className="w-16 h-1 bg-primary/20 mx-auto mb-6 group-hover:w-24 group-hover:bg-primary transition-all duration-500" />
            <p className="text-2xl md:text-3xl font-black text-gray-400 uppercase tracking-tighter italic">
              To be announced soon
            </p>
            <p className="text-xs text-gray-500 mt-4 uppercase tracking-[0.2em] font-bold">Stay connected for updates</p>
          </div>
        </div>

        {/* --- 2. STUDENT ORGANIZING TEAM --- */}
        <div className="mb-32">
          <SectionDivider title="Student Organizing Team" />
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-foreground">The Leadership</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">The core student team leading the strategy, operations, and experience of Prayogam 2k26.</p>
          </div>
          
          {/* Executive Leadership */}
          <div className="mb-20">
            <TeamCard 
              name={hierarchyData.chief.name} 
              role={hierarchyData.chief.role} 
              image={hierarchyData.chief.image} 
              size="xl" 
            />
          </div>

          {/* Event Director */}
          <div className="mb-20">
            <TeamCard 
              name={hierarchyData.director.name} 
              role={hierarchyData.director.role} 
              image={hierarchyData.director.image} 
              size="lg" 
            />
          </div>

          {/* Leadership Row (3 in a row) */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto px-4">
              {hierarchyData.leadershipRow.map((leader, idx) => (
                <TeamCard 
                  key={idx} 
                  name={leader.name} 
                  role={leader.role} 
                  image={leader.image} 
                  size="lg"
                  delay={idx * 0.1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* --- 3. ORGANIZING TEAM (Renamed) --- */}
        <div className="max-w-6xl mx-auto border-t border-border pt-20 mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-foreground">Organizing Team</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">The student team driving execution, operations, and experience.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-4">
            {hierarchyData.organizingTeam.flatMap(group => group.members).map((member, idx) => (
              <TeamCard 
                key={idx} 
                name={member.name} 
                role={member.role} 
                image={member.image} 
                size="sm"
                delay={idx * 0.05}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Team;
