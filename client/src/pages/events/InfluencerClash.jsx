import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Users, Shield, Clock, AlertTriangle, AlertCircle,
  Trophy, Star, Share2, Clapperboard, BarChart, BarChart3,
  TrendingUp, Zap, ChevronRight, CheckCircle2,
  ArrowLeft, Download, FileText, Scale, Gavel,
  CheckCircle, XCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../../components/animations/AnimatedSection';
import AnimatedText from '../../components/animations/AnimatedText';

const SectionHeader = ({ icon: Icon, title, color = "text-primary" }) => (
  <div className="flex items-center gap-4 mb-8">
    <div className={`w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center ${color}`}>
      <Icon size={24} />
    </div>
    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground">{title}</h2>
  </div>
);

const RuleCard = ({ title, children, icon: Icon, className = "" }) => (
  <div className={`bg-white border border-border p-8 rounded-[2rem] hover:border-primary/20 transition-all ${className}`}>
    {Icon && <Icon className="text-primary mb-6" size={28} />}
    <h3 className="text-xl font-black uppercase tracking-tight mb-6 text-foreground">{title}</h3>
    <div className="space-y-3 text-sm font-medium text-gray-500 leading-relaxed">
      {children}
    </div>
  </div>
);

const InfluencerClash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-16 px-4 md:px-0 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        
        {/* BACK BUTTON & ACTIONS */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <button 
            onClick={() => navigate('/events')}
            className="flex items-center text-gray-500 hover:text-primary transition-colors group font-bold uppercase tracking-widest text-xs"
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-2 transition-transform" />
            Back to Events
          </button>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/leaderboard/influencer-clash')}
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:bg-black transition-all font-black uppercase tracking-widest text-[10px] shadow-glow"
            >
              <TrendingUp size={14} /> Live Leaderboard
            </button>
            <button className="flex items-center gap-2 bg-foreground text-white px-6 py-3 rounded-xl hover:bg-primary transition-all font-black uppercase tracking-widest text-[10px] shadow-sm">
              <Download size={14} /> Official Guidelines
            </button>
          </div>
        </div>

        {/* PAGE HEADER */}
        <div className="mb-24">
          <AnimatedText text="INFLUENCER CLASH 2K26" el="h1" className="text-5xl md:text-9xl font-black tracking-tighter mb-4 uppercase leading-[0.85]" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <p className="text-lg md:text-2xl text-gray-500 font-bold uppercase tracking-widest italic">
              SOCIAL MEDIA GROWTH & IMPACT CHALLENGE <span className="text-primary mx-3">/</span> <span className="text-foreground">PRAYOGAM 2K26</span>
            </p>
            <div className="w-24 h-2 bg-primary mt-8 shadow-glow" />
          </motion.div>
        </div>

        {/* SECTION 1: OVERVIEW & OBJECTIVE */}
        <AnimatedSection direction="up" className="mb-24">
          <SectionHeader icon={Target} title="01. Overview & Objective" />
          <div className="bg-white border border-border p-10 md:p-16 rounded-[3rem]">
            <p className="text-xl font-bold text-foreground mb-10 leading-relaxed">
              Influencer Clash 2k26 is a premier social media competition designed to identify and reward the most impactful student creators on campus.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Personal Branding", desc: "Encourage personal branding and audience engagement." },
                { title: "Creativity & Growth", desc: "Build influence through growth, creativity, and consistency." },
                { title: "Prayogam Reach", desc: "Promote Prayogam 2k26 through individual influence." },
                { title: "Competitive Ecosystem", desc: "Create a data-driven environment based on content impact." }
              ].map((obj, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform" />
                  <div>
                    <h4 className="font-black uppercase tracking-tight text-foreground mb-2">{obj.title}</h4>
                    <p className="text-gray-500 text-sm font-medium">{obj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* SECTION 2: PARTICIPATION & MANDATE */}
        <AnimatedSection direction="up" className="mb-24">
          <SectionHeader icon={Shield} title="02. Participation & Mandate" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RuleCard title="Eligibility Rules" icon={Users}>
               {[
                 "Open to all registered participants of Prayogam 2k26",
                 "Participation is individual-based",
                 "Each participant must use their primary social media account",
                 "All entries must comply with competition guidelines"
               ].map((item, i) => (
                 <div key={i} className="flex items-start gap-3">
                   <CheckCircle2 size={16} className="text-primary mt-1 flex-shrink-0" />
                   <p>{item}</p>
                 </div>
               ))}
            </RuleCard>

             <div className="bg-red-50 border border-primary/40 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-center">
               <div className="flex items-center gap-4 mb-6 text-primary">
                 <AlertTriangle size={32} />
                 <h3 className="text-2xl font-black uppercase tracking-tight">MANDATORY RULE</h3>
               </div>
               <p className="text-sm font-bold text-red-900 leading-relaxed mb-6 italic underline uppercase">
                 🚨 Transaction File Pass is mandatory for all participants to qualify in Influencer Clash.
               </p>
               <p className="text-xs text-red-800/80 font-medium leading-relaxed">
                 Failure to secure your Transaction File Pass will result in immediate disqualification and exclusion from evaluation.
               </p>
            </div>
          </div>
        </AnimatedSection>

        {/* SECTION 3: HOW IT WORKS */}
        <AnimatedSection direction="up" className="mb-24">
          <SectionHeader icon={Clock} title="03. How It Works" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { time: "Duration", title: "3-Day Challenge", desc: "Continuous competition over three Intense days.", color: "bg-gray-50" },
              { time: "Format", title: "Daily Posting", desc: "Participation each day is mandatory for ranking.", color: "bg-gray-50" },
              { time: "Themes", title: "Theme release", desc: "Themes/challenges may be released daily.", color: "bg-gray-50" },
              { time: "Results", title: "Leaderboards", desc: "Updated daily based on cumulative impact.", color: "bg-green-50" }
            ].map((step, i) => (
              <div key={i} className={`${step.color} p-8 rounded-3xl border border-border group hover:border-primary/20 transition-all`}>
                <div className="text-[10px] font-black uppercase text-primary mb-2 tracking-widest">{step.time}</div>
                <h4 className="text-base font-black uppercase tracking-tight mb-2 text-foreground">{step.title}</h4>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* SECTION 4: CONTENT GUIDELINES */}
        <AnimatedSection direction="up" className="mb-24">
          <SectionHeader icon={Clapperboard} title="04. Content Guidelines" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RuleCard title="The Do's" className="border-green-100">
               {[
                 "High-quality original content created by you",
                 "Relevant to Prayogam 2k26 or assigned themes",
                 "Respectful standards and appropriate content",
                 "Tag official PU-iNCENT page in all posts",
                 "Share content on story and tag iNCENT page",
                 "Follow the official iNCENT Instagram page"
               ].map((item, i) => (
                 <div key={i} className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                   <p className="text-gray-600">{item}</p>
                 </div>
               ))}
            </RuleCard>
            <RuleCard title="The Don'ts" className="border-red-100">
               {[
                 "Plagiarized or copied material from others",
                 "Copyrighted music/media without permission",
                 "Offensive, harmful, or misleading information",
                 "Low-effort content that violates policy",
                 "Maximum 2 reels per day allowed"
               ].map((item, i) => (
                 <div key={i} className="flex items-start gap-3">
                   <XCircle size={16} className="text-red-500 mt-1 flex-shrink-0" />
                   <p className="text-gray-600">{item}</p>
                 </div>
               ))}
               <p className="mt-4 text-[10px] font-black uppercase text-red-500 italic">Strictly enforced: Any violation leads to rejection.</p>
            </RuleCard>
          </div>
        </AnimatedSection>

        {/* SECTION 5: EVALUATION CRITERIA */}
        <AnimatedSection direction="up" className="mb-24">
          <SectionHeader icon={BarChart3} title="05. Evaluation Criteria" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Creativity", desc: "Overall content quality, visual appeal, and originality." },
              { icon: Share2, title: "Engagement", desc: "Organic views, likes, comments, and shares count." },
              { icon: TrendingUp, title: "Influence", desc: "Follower growth and meaningful impact during the fest." }
            ].map((cat, i) => (
              <div key={i} className="p-10 bg-white border border-border rounded-[2.5rem] group hover:border-primary/20 transition-all text-center">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 text-primary mb-6 flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-white transition-all">
                  <cat.icon size={28} />
                </div>
                <h4 className="text-xl font-black uppercase tracking-tight text-foreground mb-4">{cat.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{cat.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* SECTION 6: DEADLINE & REPORTING */}
        <AnimatedSection direction="up" className="mb-24">
          <div className="bg-foreground text-white p-12 md:p-16 rounded-[4rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
            <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
              <div className="flex-1">
                 <h3 className="text-3xl font-black uppercase mb-6">Submission Deadline</h3>
                 <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-6xl md:text-8xl font-black italic tracking-tighter text-primary">8:00</span>
                    <span className="text-2xl font-black uppercase tracking-widest text-gray-400">PM Daily</span>
                 </div>
                 <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-md">
                   Only content posted and submitted before the 8:00 PM cutoff will be considered for that day's evaluation.
                 </p>
              </div>
              <div className="shrink-0 space-y-4">
                 <div className="bg-white/10 p-4 rounded-2xl border border-white/10 flex items-center gap-4">
                    <CheckCircle className="text-primary" size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest">3 Days Mandatory</span>
                 </div>
                 <div className="bg-white/10 p-4 rounded-2xl border border-white/10 flex items-center gap-4">
                    <CheckCircle className="text-primary" size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest">Organic Engagement Only</span>
                 </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* SECTION 7: REWARDS */}
        <AnimatedSection direction="up" className="mb-24">
          <SectionHeader icon={Trophy} title="07. Rewards & Recognition" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { icon: FileText, title: "Certificates", desc: "Official recognition for top performers." },
               { icon: Star, title: "Features", desc: "Spotlight on official Prayogam platforms." },
               { icon: Zap, title: "Passes", desc: "Free Prayogam passes for the winners." },
               { icon: Trophy, title: "Goodies", desc: "Special recognition and exclusive goodies." }
             ].map((reward, i) => (
               <div key={i} className="bg-white border border-border p-8 rounded-3xl group hover:border-primary/20 transition-all">
                  <reward.icon className="text-primary mb-6" size={24} />
                  <h4 className="font-black uppercase tracking-tight text-foreground mb-3">{reward.title}</h4>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed">{reward.desc}</p>
               </div>
             ))}
          </div>
        </AnimatedSection>

        {/* RULES & PENALTIES */}
        <AnimatedSection direction="up" className="mb-24">
           <RuleCard title="Rules & Penalties" icon={AlertTriangle} className="border-primary/20 shadow-glow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                 {[
                   "Fake followers, bots, or paid growth leads to instant DQ.",
                   "Missing tags or hashtags results in point rejection.",
                   "Late submissions after 8 PM will not be evaluated.",
                   "Multiple accounts for unfair advantage is prohibited.",
                   "Misleading data will lead to permanent disqualification.",
                   "Decision by Core Team will be final and binding."
                 ].map((rule, i) => (
                   <div key={i} className="flex items-start gap-3">
                     <AlertCircle size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
                     <p className="text-xs font-bold text-gray-600">{rule}</p>
                   </div>
                 ))}
              </div>
           </RuleCard>
        </AnimatedSection>

        {/* POLICIES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
           {[
             { num: "11", title: "Verification", text: "Manual verification with random audits. Analytics proof may be requested.", icon: FileText },
             { num: "12", title: "Fair Play", text: "Originality and consistency are key. Ethical competition only.", icon: Scale },
             { num: "13", title: "Authority", text: "iNCENT Core Team decisions are final regarding all rules and criteria.", icon: Gavel },
             { num: "—", title: "Ethics", text: "Inappropriate material results in immediate exclusion from the event.", icon: Zap }
           ].map((policy, i) => (
             <div key={i} className="bg-white border border-border p-8 rounded-3xl group hover:border-primary/20 transition-all">
                <div className="text-[10px] font-black text-gray-300 mb-4 group-hover:text-primary transition-colors">POLICY {policy.num}</div>
                <h4 className="font-black uppercase tracking-tight text-foreground mb-4">{policy.title}</h4>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">{policy.text}</p>
             </div>
           ))}
        </div>

        {/* FINAL FOOTER */}
        <AnimatedSection direction="up" className="text-center pb-24">
           <div className="w-16 h-1 bg-primary mx-auto mb-8" />
           <p className="text-gray-400 max-w-2xl mx-auto text-xs font-medium leading-relaxed uppercase tracking-widest italic">
             "Influencing campus culture through creativity and consistency."
           </p>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default InfluencerClash;
