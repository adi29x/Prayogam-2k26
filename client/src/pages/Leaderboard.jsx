import { Trophy, Share2, Users, Clapperboard, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/animations/AnimatedSection';
import AnimatedText from '../components/animations/AnimatedText';

const Leaderboard = () => {
  const categories = [
    {
      title: "Cash Quest 2k26",
      route: "/leaderboard/cash-quest-2k26",
      description: "Track the performance of participants across event promotion and engagement activities.",
      icon: Users,
    },
    {
      title: "Influencer Clash",
      route: "/leaderboard/influencer-clash",
      description: "Rankings based on social reach and engagement across the system.",
      icon: Trophy,
    },
    {
      title: "Reel Competition",
      route: "/leaderboard/reel-competition",
      description: "Top creators showcasing their perspective of Prayogam 2k26.",
      icon: Clapperboard,
    },
    {
      title: "Project Selections",
      route: "/leaderboard/project-selections",
      description: "Real-time updates on projects selected for different phases.",
      icon: CheckSquare,
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 md:px-0">
      
      {/* PAGE HEADER */}
      <div className="text-center mb-24">
        <AnimatedText text="Leaderboard" el="h1" className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase" />
        <AnimatedSection direction="up" delay={0.2}>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium uppercase tracking-widest italic">
            "Track performance, rankings, and top participants across all Prayogam activities."
          </p>
          <div className="w-20 h-1.5 bg-primary mx-auto mt-8 shadow-glow" />
        </AnimatedSection>
      </div>

      {/* DASHBOARD GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {categories.map((cat, index) => (
          <AnimatedSection 
            key={cat.title} 
            direction="up" 
            delay={index * 0.1}
            className="group h-full"
          >
            <Link to={cat.route} className="block h-full bg-white border border-border rounded-[2.5rem] p-10 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
               <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                  <cat.icon size={28} className="text-foreground group-hover:text-primary transition-colors" />
               </div>
               <h2 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">
                 {cat.title}
               </h2>
               <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8 h-12 overflow-hidden">
                 {cat.description}
               </p>
               <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-primary">
                 View Leaderboard <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
               </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>

    </div>
  );
};

export default Leaderboard;
