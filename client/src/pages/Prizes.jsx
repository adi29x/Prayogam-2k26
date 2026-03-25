import { motion } from 'framer-motion';
import { Trophy, Award, Gift, Star, Target, Crown } from 'lucide-react';
import AnimatedSection from '../components/animations/AnimatedSection';
import AnimatedText from '../components/animations/AnimatedText';

const PrizeCard = ({ title, amount, description, icon: Icon, color = "primary" }) => (
  <AnimatedSection direction="up" className="h-full">
    <div className={`relative h-full bg-white border-2 border-border rounded-[2.5rem] p-8 md:p-10 flex flex-col hover:-translate-y-2 hover:border-primary/30 transition-all duration-500 overflow-hidden group shadow-sm hover:shadow-glass`}>
      <div className={`w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-red-50 group-hover:scale-110 transition-all duration-500 text-gray-400 group-hover:text-primary`}>
        <Icon size={32} />
      </div>

      <h3 className="text-xl font-black text-foreground mb-2 uppercase tracking-tight">{title}</h3>
      <div className="text-3xl md:text-4xl font-black text-primary mb-6 tracking-tighter">
        {amount}
      </div>
      <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8">
        {description}
      </p>

      <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Recognition Tier</span>
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
      </div>
    </div>
  </AnimatedSection>
);

const Prizes = () => {
  const mainPrizes = [
    {
      title: "The Ultimate Innovator",
      amount: "Grand Title",
      description: "Awarded to the project showing overall strength in idea, execution, and presentation.",
      icon: Trophy
    },
    {
      title: "Technical Excellence",
      amount: "Technical Title",
      description: "Recognition for strong technical understanding, structure, and implementation.",
      icon: Award
    },
    {
      title: "Emerging Tech Recognition",
      amount: "Innovation Title",
      description: "Focused on projects exploring modern technologies such as AI, ML, or advanced systems.",
      icon: Crown
    }
  ];

  const specialCategories = [
    { title: "Best UI/UX Design", amount: "Design Tier", icon: Star, desc: "For clear, structured, and user-focused design." },
    { title: "Best Social Impact", amount: "Impact Tier", icon: Target, desc: "For projects addressing real-world problems and use cases." },
    { title: "Rising Innovators", amount: "Rising Tier", icon: Gift, desc: "For strong performance and promising potential among early-stage participants." }
  ];

  return (
    <div className="min-h-screen py-12 px-4 md:px-0">
      
      {/* PAGE HEADER */}
      <div className="text-center mb-24">
        <AnimatedText text="Prizes & Recognition" el="h1" className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase" />
        <AnimatedSection direction="up" delay={0.2}>
          <h2 className="text-gray-400 font-bold uppercase tracking-[0.3em] text-sm mb-2 font-black">Total Prize Pool Worth</h2>
          <div className="text-5xl md:text-8xl font-black text-foreground tracking-tighter mb-8 tabular-nums">
            ₹5,00,000+
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium italic">
            "Recognizing individuals and teams demonstrating strong technical thinking, execution, and clarity."
          </p>
        </AnimatedSection>
      </div>

      {/* FEATURED TITLES */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Featured Titles</h2>
          <div className="w-16 h-1 bg-primary" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mainPrizes.map((prize, i) => (
            <PrizeCard key={i} {...prize} />
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Categories</h2>
          <div className="w-16 h-1 bg-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialCategories.map((cat, i) => (
            <AnimatedSection key={i} direction="up" delay={i * 0.1} className="bg-gray-50 border border-border p-8 rounded-3xl hover:border-primary/20 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                  <cat.icon size={24} />
                </div>
                <div>
                  <h3 className="font-black uppercase tracking-tight text-foreground">{cat.title}</h3>
                  <div className="text-primary font-bold text-xs uppercase tracking-widest">{cat.amount}</div>
                </div>
              </div>
              <p className="text-gray-500 text-sm font-medium">{cat.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* EVENT-BASED RECOGNITION */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Event-Based Recognition Titles</h2>
          <div className="w-16 h-1 bg-primary" />
        </div>
        
        <div className="bg-foreground text-white p-10 md:p-16 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
          <p className="text-gray-400 font-medium mb-12 text-center max-w-2xl mx-auto leading-relaxed">
            Participants across different activities may be recognized under the following titles. Recognition is based on performance, participation, and consistency across activities.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "Top Promoter", "Top Creators", "Growth Hacker", 
              "Top Influencer", "Code Breaker", "Master Decoder", 
              "Best Moment", "Best Reel / Moment", "Lucky Player", 
              "Quick Trigger", "Truth Identifier", "Decision Maker", 
              "Precision Predictor", "Market Predictor", "Best Speaker"
            ].map((title, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center group hover:border-primary/50 transition-all">
                <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-1 opacity-50 group-hover:opacity-100 transition-opacity">Title</div>
                <div className="text-xs font-bold text-gray-200 group-hover:text-white transition-colors">{title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REWARDS BREAKDOWN */}
      <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center border-t border-border pt-12 pb-24">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">Rewards Breakdown</h2>
        <p className="text-gray-500 font-medium mb-12 leading-relaxed">
          Participants may receive a combination of the following rewards structured to encourage learning, participation, and continuous improvement.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {[
            "Achievement Certificates", "Official Recognition", "Event Merchandise",
            "Special Access Benefits", "Tech Tools & Subs", "Mentorship Access",
            "Internship Opportunities", "Ecosystem Exposure", "PU-iNCENT Guidance"
          ].map((item, i) => (
            <div key={i} className="px-6 py-5 bg-gray-50 rounded-2xl text-[10px] font-black text-foreground uppercase tracking-widest border border-border hover:border-primary/20 hover:bg-white transition-all shadow-sm">
              {item}
            </div>
          ))}
        </div>

        <p className="text-primary font-black uppercase tracking-tighter italic text-sm">
           Recognition and rewards are structured to encourage learning, participation, and continuous improvement throughout the event.
        </p>
      </AnimatedSection>

    </div>
  );
};

export default Prizes;
