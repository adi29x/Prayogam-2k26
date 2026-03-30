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
  const topPerformers = [
    {
      title: "1st Position",
      amount: "Winner",
      description: "Overall top performer showing highest technical skill, quality of implementation, and presentation impact.",
      icon: Trophy
    },
    {
      title: "2nd Position",
      amount: "Runner Up",
      description: "Strong overall performance with significant depth in technical execution and consistency.",
      icon: Award
    },
    {
      title: "3rd Position",
      amount: "Special Runner Up",
      description: "Recognized for strong execution, clarity of thought, and high-impact project delivery.",
      icon: Star
    }
  ];

  const eventRecognitions = [
    { event: "CASH QUEST 2K26 (Marketing)", title: "Growth Strategist of Prayogam 2K26" },
    { event: "REELS MAKING COMPETITION 2K26 (Content)", title: "Content Creator of Prayogam 2K26" },
    { event: "INFLUENCER CLASH 2K26 (Content)", title: "Influencer of Prayogam 2K26" },
    { event: "QR HUNT 2K26 (Marketing/Game)", title: "Treasure Hunter of Prayogam 2K26" },
    { event: "THE MONEY SHOT 2K26 (Content)", title: "Creative Director of Prayogam 2K26" }
  ];

  return (
    <div className="min-h-screen py-12 px-4 md:px-0">
      
      {/* PAGE HEADER */}
      <div className="text-center mb-24">
        <AnimatedText text="Prizes & Recognition" el="h1" className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase" />
        <AnimatedSection direction="up" delay={0.2}>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium italic">
            "Recognizing individuals and teams demonstrating strong technical thinking, execution, and clarity."
          </p>
        </AnimatedSection>
      </div>

      {/* TOP PERFORMERS */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Top Performers</h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-sm md:text-base font-medium">
            Recognition will be awarded to the top-performing participants and teams based on overall performance, execution, and presentation.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topPerformers.map((prize, i) => (
            <PrizeCard key={i} {...prize} />
          ))}
        </div>
      </section>

      {/* EVENT-BASED RECOGNITION */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Event-Based Recognitions</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-6" />
        </div>
        
        <div className="bg-foreground text-white p-10 md:p-16 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
          <p className="text-gray-400 font-medium mb-12 text-center max-w-2xl mx-auto leading-relaxed text-sm">
            Specific titles awarded for individual event performance and consistent engagement.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {eventRecognitions.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[2rem] text-center flex flex-col justify-center h-full group hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight leading-snug drop-shadow-sm">{item.title}</div>
                <div className="text-[9px] md:text-[10px] font-black text-primary uppercase tracking-[0.2em] opacity-90">{item.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REWARDS BREAKDOWN */}
      <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center border-t border-border pt-16 pb-24">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">Rewards Breakdown</h2>
        <p className="text-gray-500 font-medium mb-12 leading-relaxed text-sm">
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

        <p className="text-primary font-black uppercase tracking-tighter italic text-xs">
           Recognition and rewards are structured to encourage learning, participation, and continuous improvement throughout the event.
        </p>
      </AnimatedSection>

    </div>
  );
};

export default Prizes;
