import { motion } from 'framer-motion';
import { Ticket, Star, Zap, Users, Shield, Crown } from 'lucide-react';
import AnimatedSection from '../components/animations/AnimatedSection';
import AnimatedText from '../components/animations/AnimatedText';
import { REGISTRATION_LINK } from '../constants';

const PassCard = ({ title, description, benefits, icon: Icon, highlight = false, badge = "" }) => (
  <AnimatedSection direction="up" className={`h-full`}>
    <div className={`relative h-full bg-white border-2 ${highlight ? 'border-primary shadow-[0_20px_50px_rgba(255,0,0,0.1)]' : 'border-border shadow-sm'} rounded-[2.5rem] p-8 md:p-10 flex flex-col hover:-translate-y-2 transition-all duration-500 overflow-hidden group`}>
      {highlight && (
        <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-bl-2xl">
          Most Popular
        </div>
      )}
      
      <div className={`w-16 h-16 rounded-2xl ${highlight ? 'bg-primary text-white' : 'bg-gray-50 text-gray-400'} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
        <Icon size={32} />
      </div>

      <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tight">{title}</h3>
      <p className="text-gray-500 font-medium text-sm mb-8 leading-relaxed">
        {description}
      </p>

      <div className="space-y-4 mb-10 flex-1">
        {benefits.map((benefit, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
            <span className="text-sm font-semibold text-gray-700">{benefit}</span>
          </div>
        ))}
      </div>

      <a 
        href={REGISTRATION_LINK} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm text-center transition-all ${
          highlight 
            ? 'bg-primary text-white hover:bg-black shadow-glow' 
            : 'bg-foreground text-white hover:bg-primary'
        }`}
      >
        Claim This Pass
      </a>
    </div>
  </AnimatedSection>
);

const Passes = () => {
  const passData = [
    {
      title: "Black Ledger Pass",
      description: "Elite access for VIP guests, keynote speakers, global sponsors, and system authorities.",
      benefits: ["VIP Seating & Lounge Access", "Exclusive Networking Dinners", "Reserved Entry to All High-Stakes Events", "Custom Digital Badge"],
      icon: Crown,
      badge: "VIP"
    },
    {
      title: "Transaction File Pass",
      description: "The essential entry for all participants. Your primary key to navigate the Prayogam system.",
      benefits: ["Entry to All Competitions", "Access to Technical Exhibitions", "Participation Certificate", "Official Event Kit"],
      icon: Ticket,
      highlight: true,
      badge: "GENERAL"
    },
    {
      title: "Consortium Dossier Pass",
      description: "Calculated for team-based competitions requiring collective high-performance execution.",
      benefits: ["Team Slot Registration", "Collaborative Workspaces", "Group Mentorship Sessions", "Consortium Member Recognition"],
      icon: Users,
      badge: "TEAM"
    },
    {
      title: "Insider Clearance Pass",
      description: "High-level clearance for organizers, volunteers, and the core team building the vault.",
      benefits: ["Backstage & Control Room Access", "Task & Priority Management", "Official Team Gear", "Leadership Recognition"],
      icon: Shield,
      badge: "TEAM ONLY"
    },
    {
      title: "Wildcard Entry Pass",
      description: "Special access unlocked via referrals, secret codes, or winning mid-event challenges.",
      benefits: ["Instant Access Upgrades", "Mystery Box Rewards", "Special Event Entries", " Referral Bounty Access"],
      icon: Zap,
      badge: "SPECIAL"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 md:px-0">
      
      {/* PAGE HEADER */}
      <div className="text-center mb-20">
        <AnimatedText text="PASS CATEGORIES" el="h1" className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase" />
        <AnimatedSection direction="up" delay={0.2}>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium uppercase tracking-wide">
            Select your clearance level. Enter the vault. control the system.
          </p>
        </AnimatedSection>
      </div>

      {/* PASSES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
        {passData.map((pass, i) => (
          <PassCard key={i} {...pass} />
        ))}
      </div>

      {/* FOOTER CALLOUT */}
      <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center border-t border-border pt-12">
        <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Registration Closing Soon</h2>
        <p className="text-gray-500 font-medium mb-8">Secure your transaction file before the system reaches capacity.</p>
        <div className="flex justify-center flex-wrap gap-4">
             <div className="px-6 py-2 bg-gray-50 rounded-full text-xs font-bold text-gray-400 uppercase tracking-widest border border-border">Limited Slots Available</div>
             <div className="px-6 py-2 bg-gray-50 rounded-full text-xs font-bold text-gray-400 uppercase tracking-widest border border-border">Secure Checkout</div>
        </div>
      </AnimatedSection>

    </div>
  );
};

export default Passes;
