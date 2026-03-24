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
      amount: "₹2,50,000",
      description: "Awarded to the team with the most technically sophisticated and impactful project in the exhibition.",
      icon: Trophy
    },
    {
      title: "Technical Excellence",
      amount: "₹1,50,000",
      description: "Recognition for superior technical depth, architecture, and system design.",
      icon: Award
    },
    {
      title: "Emerging Tech Award",
      amount: "₹1,00,000",
      description: "Awarded to the most promising application of emerging technologies like AI/ML or Blockchain (technical focus).",
      icon: Crown
    }
  ];

  const specialCategories = [
    { title: "Best UI/UX Design", amount: "₹25,000", icon: Star, desc: "Superior aesthetics and user experience." },
    { title: "Best Social Impact", amount: "₹25,000", icon: Target, desc: "Projects driving meaningful social change." },
    { title: "Rising Innovators", amount: "₹20,000", icon: Gift, desc: "Best performance by a junior-level team." }
  ];

  return (
    <div className="min-h-screen py-12 px-4 md:px-0">
      
      {/* PAGE HEADER */}
      <div className="text-center mb-24">
        <AnimatedText text="Prizes & Recognition" el="h1" className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase" />
        <AnimatedSection direction="up" delay={0.2}>
          <div className="inline-block px-6 py-2 rounded-full border-2 border-primary text-primary font-black uppercase tracking-widest text-xs mb-6">
            Global Innovation Fund
          </div>
          <h2 className="text-gray-400 font-bold uppercase tracking-[0.3em] text-sm mb-2">Total Prize Pool</h2>
          <div className="text-5xl md:text-8xl font-black text-foreground tracking-tighter mb-8 tabular-nums">
            ₹5,00,000
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium italic">
            "Recognizing the minds that build the future. High-impact rewards for technical excellence."
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
                  <div className="text-primary font-bold">{cat.amount}</div>
                </div>
              </div>
              <p className="text-gray-500 text-sm font-medium">{cat.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* REWARDS BREAKDOWN */}
      <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center border-t border-border pt-12">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">Rewards Breakdown</h2>
        <p className="text-gray-500 font-medium mb-12 leading-relaxed">
          Beyond financial rewards, winners receive global mentorship, incubation opportunities at PU-iNCENT, and direct access to industry leaders.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Cash Prizes", "Goodies & Swag", "Tech Subscriptions",
            "Certificates", "Networking Opportunities", "Official Recognition"
          ].map((item, i) => (
            <div key={i} className="px-6 py-4 bg-gray-50 rounded-2xl text-[10px] font-black text-gray-600 uppercase tracking-widest border border-border hover:border-primary/20 hover:bg-white transition-all">
              {item}
            </div>
          ))}
        </div>
      </AnimatedSection>

    </div>
  );
};

export default Prizes;
