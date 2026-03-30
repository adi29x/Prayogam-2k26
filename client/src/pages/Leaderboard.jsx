import { Trophy, Share2, Users, Clapperboard, CheckSquare, Sparkles, ChevronRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/animations/AnimatedSection';
import AnimatedText from '../components/animations/AnimatedText';

const ProjectSelectionCard = ({ day, status, description }) => (
  <div className="bg-white border-2 border-border border-dashed rounded-[2rem] p-8 md:p-10 flex flex-col justify-center items-center text-center group hover:border-primary/50 transition-all duration-300">
     <div className="w-16 h-16 rounded-3xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
       <Sparkles size={28} className="text-gray-400 group-hover:text-primary transition-colors" />
     </div>
     <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">{day}</h3>
     <p className="text-gray-500 font-medium text-sm leading-relaxed mb-6">{description}</p>
     <div className="px-6 py-2 bg-gray-100 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:bg-primary group-hover:text-white transition-colors">
       {status}
     </div>
  </div>
);

const Leaderboard = () => {
  const eventCategories = [
    {
      title: "CASH QUEST 2K26",
      route: "/leaderboard/cash-quest-2k26",
      description: "Track the performance of participants across event promotion and engagement activities.",
      icon: Users,
    },
    {
      title: "REELS MAKING COMPETITION 2K26",
      route: "/leaderboard/reel-competition",
      description: "Top creators showcasing their perspective of Prayogam 2k26.",
      icon: Clapperboard,
    },
    {
      title: "INFLUENCER CLASH 2K26",
      route: "/leaderboard/influencer-clash",
      description: "Rankings based on social reach and engagement across the system.",
      icon: Trophy,
    },
    {
      title: "QR HUNT 2K26",
      route: "/leaderboard/qr-hunt-2k26",
      description: "Real-time rankings based on submission timestamps and code accuracy.",
      icon: Search,
    },
    {
      title: "THE MONEY SHOT 2K26",
      route: "/leaderboard/money-shot-game",
      description: "Rankings based on photography creativity, technical quality, and engagement.",
      icon: Trophy,
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 md:px-0 bg-white">
      
      {/* PAGE HEADER */}
      <div className="text-center mb-24">
        <AnimatedText text="Leaderboard" el="h1" className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-4 uppercase leading-none" />
        <AnimatedSection direction="up" delay={0.2}>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-bold uppercase tracking-widest italic">
            "Track performance, rankings, and top participants across all Prayogam activities."
          </p>
          <div className="w-20 h-1.5 bg-primary mx-auto mt-8 shadow-glow" />
        </AnimatedSection>
      </div>

      {/* SECTION 1: PROJECT SELECTIONS */}
      <div className="max-w-7xl mx-auto mb-32">
         <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-foreground">PROJECT SELECTIONS</h2>
            <div className="w-12 h-1 bg-primary mx-auto mt-6" />
         </AnimatedSection>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection direction="up" delay={0.1}>
              <ProjectSelectionCard 
                day="Day 1" 
                status="To Be Announced" 
                description="List of projects selected from the initial exhibition showcase to proceed to the next phase." 
              />
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.2}>
              <ProjectSelectionCard 
                day="Day 2" 
                status="To Be Announced" 
                description="Advanced shortlist of projects demonstrating exceptional execution and mentor alignment." 
              />
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.3}>
              <ProjectSelectionCard 
                day="Grand Finale" 
                status="To Be Announced" 
                description="The ultimate finalists competing for the top recognitions and rewards." 
              />
            </AnimatedSection>
         </div>
      </div>

      {/* SECTION 2: EVENT LEADERBOARDS */}
      <div className="max-w-7xl mx-auto mb-24">
         <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-foreground">EVENT LEADERBOARDS</h2>
            <div className="w-12 h-1 bg-primary mx-auto mt-6" />
         </AnimatedSection>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {eventCategories.map((cat, index) => (
             <AnimatedSection 
               key={cat.title} 
               direction="up" 
               delay={index * 0.1}
               className="group h-full"
             >
               <Link to={cat.route} className="block h-full bg-white border-2 border-border rounded-[2.5rem] p-10 hover:border-primary transition-all duration-300 relative overflow-hidden flex flex-col items-start hover:-translate-y-2">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                  
                  <div className="w-16 h-16 rounded-3xl bg-gray-50 flex items-center justify-center mb-8 border border-border group-hover:border-primary/20 group-hover:bg-primary/5 transition-all">
                     <cat.icon size={28} className="text-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                  
                  <p className="text-gray-500 font-medium text-sm leading-relaxed mb-10 overflow-hidden line-clamp-2 w-full">
                    {cat.description}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-gray-50 w-full flex items-center justify-between">
                     <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest transition-colors group-hover:text-foreground">Access Leaderboard</span>
                     <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all text-foreground">
                        <ChevronRight size={16} />
                     </div>
                  </div>
               </Link>
             </AnimatedSection>
           ))}
         </div>
      </div>

    </div>
  );
};

export default Leaderboard;
