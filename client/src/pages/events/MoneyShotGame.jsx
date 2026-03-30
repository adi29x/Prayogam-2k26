import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Users, Shield, Clock, AlertTriangle, AlertCircle,
  Trophy, Star, Share2, Camera, BarChart, BarChart3,
  TrendingUp, Zap, ChevronRight, CheckCircle2,
  ArrowLeft, Download, FileText, Scale, Gavel,
  CheckCircle, XCircle, Image as ImageIcon
} from 'lucide-react';
import { InstagramIcon } from '../../components/common/SocialIcons';
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

const MoneyShotEventPage = () => {
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
              onClick={() => navigate('/leaderboard/money-shot-game')}
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:bg-black transition-all font-black uppercase tracking-widest text-[10px] shadow-glow"
            >
              <TrendingUp size={14} /> Live Leaderboard
            </button>
             <button className="flex items-center gap-2 bg-foreground text-white px-6 py-3 rounded-xl hover:bg-primary transition-all font-black uppercase tracking-widest text-[10px] shadow-sm">
              <Download size={14} /> Download Rulebook
            </button>
          </div>
        </div>

        {/* PAGE HEADER */}
        <div className="mb-24">
          <AnimatedText text="THE MONEY SHOT 2K26" el="h1" className="text-5xl md:text-9xl font-black tracking-tighter mb-4 uppercase leading-[0.85]" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <p className="text-lg md:text-2xl text-gray-500 font-bold uppercase tracking-widest italic">
              OFFICIAL PHOTOGRAPHY COMPETITION <span className="text-primary mx-3">/</span> <span className="text-foreground">PRAYOGAM 2K26</span>
            </p>
            <div className="w-24 h-2 bg-primary mt-8 shadow-glow" />
          </motion.div>
        </div>

        {/* SECTION 1: OVERVIEW & OBJECTIVE */}
        <AnimatedSection direction="up" className="mb-24">
          <SectionHeader icon={Target} title="01. Overview & Objective" />
          <div className="bg-white border border-border p-10 md:p-16 rounded-[3rem]">
            <p className="text-xl font-bold text-foreground mb-10 leading-relaxed italic">
              "Encourage creativity and storytelling through photography, capturing impactful moments aligned with the theme of Prayogam 2k26."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Visual Storytelling", desc: "Highlight talent in composition, lighting, and conceptual artistic thinking." },
                { title: "Event Capture", desc: "Capture authentic moments that reflect the essence of Prayogam 2k26." },
                { title: "Talent Showcase", desc: "Promote artistic perspective and creative expression among students." },
                { title: "Daily Challenges", desc: "Participate in theme-based photography across 3 days of competition." }
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

        {/* MANDATORY ALERT SECTION */}
        <AnimatedSection direction="up" className="mb-24">
           <div className="bg-red-50 border border-primary/40 rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center text-center">
               <div className="flex items-center gap-4 mb-6 text-primary">
                 <AlertTriangle size={40} />
                 <h3 className="text-3xl font-black uppercase tracking-tight">MANDATORY RULE</h3>
               </div>
               <p className="text-lg font-bold text-red-900 leading-relaxed mb-6 italic underline uppercase max-w-2xl">
                 🚨 Transaction File Pass is mandatory for all participants of Money Shot 2k26.
               </p>
               <p className="text-sm text-red-800/80 font-medium leading-relaxed max-w-xl">
                 Daily participation for all 3 days is compulsory for leaderboard eligibility.
               </p>
            </div>
        </AnimatedSection>

        {/* SECTION 2: PARTICIPATION & ELIGIBILITY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
           <AnimatedSection direction="left">
              <RuleCard title="02. Participation & Roles" icon={Users} className="h-full">
                 <ul className="space-y-4">
                   {[
                     "Open to all registered Prayogam 2k26 participants.",
                     "Individual or Team-based (as defined in registration).",
                     "Submit entries via personal social media or devices.",
                     "Participants responsible for original captures & originality.",
                     "Core Team manages themes, evaluation, and rankings."
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-primary mt-1 flex-shrink-0" />
                        <p>{item}</p>
                     </li>
                   ))}
                 </ul>
              </RuleCard>
           </AnimatedSection>

           <AnimatedSection direction="right">
              <RuleCard title="03. How It Works" icon={Camera} className="h-full">
                 <div className="space-y-6">
                    {[
                      { step: "Daily Theme", text: "New creative theme revealed each day by the Core Team." },
                      { step: "The Capture", text: "Capture original photographs representing the theme." },
                      { step: "Post & Tag", text: "Upload on Instagram with @PU-iNCENT & #Prayogam2k26." },
                      { step: "Submission", text: "Submit 2-3 photos per day before the 3:00 PM deadline." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-primary font-black text-xs shrink-0">{i+1}</div>
                        <div>
                          <span className="font-black uppercase text-[10px] text-primary tracking-widest block mb-1">{item.step}</span>
                          <p className="text-xs font-bold text-gray-600">{item.text}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </RuleCard>
           </AnimatedSection>
        </div>

        {/* SECTION 4: CONTENT & SUBMISSION GUIDELINES */}
        <AnimatedSection direction="up" className="mb-24">
           <SectionHeader icon={InstagramIcon} title="04. Submission Guidelines" />
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-10 bg-white border border-border rounded-[2.5rem] relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform" />
                 <h4 className="text-xs font-black uppercase text-gray-400 mb-2">Required Action</h4>
                 <h4 className="text-xl font-black uppercase text-foreground mb-6">Social Interaction</h4>
                 <ul className="text-xs font-medium text-gray-500 space-y-3 italic">
                   <li>• Tag official @PU-iNCENT in the post.</li>
                   <li>• Use official hashtag: #Prayogam2k26</li>
                   <li>• Share post to story & tag official @iNCENT page.</li>
                   <li>• Follow official @iNCENT Instagram page.</li>
                 </ul>
              </div>

              <div className="p-10 bg-white border border-border rounded-[2.5rem] relative overflow-hidden group border-primary/20 bg-primary/[0.02]">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform" />
                 <h4 className="text-xs font-black uppercase text-gray-400 mb-2">Posting Schedule</h4>
                 <h4 className="text-xl font-black uppercase text-foreground mb-6">Daily Deadline</h4>
                 <div className="flex items-baseline gap-2 mb-6 text-primary">
                    <span className="text-5xl font-black italic">3:00</span>
                    <span className="text-xl font-black uppercase tracking-widest">PM</span>
                 </div>
                 <p className="text-xs font-medium text-gray-600 leading-relaxed italic">
                   Only posts submitted before the deadline will be considered for evaluation each day.
                 </p>
              </div>

              <div className="p-10 bg-white border border-border rounded-[2.5rem] relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform" />
                 <h4 className="text-xs font-black uppercase text-gray-400 mb-2">Content Standards</h4>
                 <h4 className="text-xl font-black uppercase text-foreground mb-6">Photography Rules</h4>
                 <p className="text-xs font-medium text-gray-500 leading-relaxed italic">
                   Original captures only. Basic editing allowed. No AI manipulation. No plagiarized content. 2-3 photos daily.
                 </p>
              </div>
           </div>
        </AnimatedSection>

        {/* SECTION 5: EVALUATION CRITERIA */}
        <AnimatedSection direction="up" className="mb-24">
           <SectionHeader icon={BarChart3} title="05. Scoring & Evaluation" />
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <RuleCard title="Judging Parameters" icon={Star}>
                 <div className="space-y-4">
                    {[
                      { l: "Creativity", d: "Original thinking and conceptual depth." },
                      { l: "Technicality", d: "Lighting, clarity, framing, and technical quality." },
                      { l: "Theme Sync", d: "Relevance of the capture to the daily theme." },
                      { l: "Impact", d: "Storytelling power and visual engagement metrics." },
                      { l: "Consistency", d: "High-quality performance maintained across the 3 days." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-2xl">
                         <div className="text-primary font-black text-xs uppercase tracking-widest w-24">{item.l}</div>
                         <p className="text-[10px] uppercase font-black text-gray-500 flex-1">{item.d}</p>
                      </div>
                    ))}
                 </div>
              </RuleCard>

              <div className="bg-foreground text-white p-12 md:p-16 rounded-[4rem] relative overflow-hidden flex flex-col justify-center shadow-lg">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
                 <Trophy size={48} className="text-primary mb-8" />
                 <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-4 italic">Rewards & Recognition</h4>
                 <ul className="space-y-6 relative z-10 font-black uppercase tracking-tight text-sm">
                   {[
                     "Official Platform Features",
                     "Merit Certificates for Winners",
                     "Special Event Goodies",
                     "Free Prayogam Passes (Eligibility based)",
                     "Stage Recognition & Prizes"
                   ].map((reward, i) => (
                     <li key={i} className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{reward}</span>
                     </li>
                   ))}
                 </ul>
              </div>
           </div>
        </AnimatedSection>

        {/* EDITING POLICY SECTION */}
        <AnimatedSection direction="up" className="mb-24">
           <div className="p-10 md:p-16 bg-white border border-border rounded-[3rem] text-center max-w-4xl mx-auto">
              <ImageIcon size={48} className="text-primary mx-auto mb-8" />
              <h3 className="text-4xl font-black uppercase tracking-tight text-foreground mb-6 underline decoration-primary/20 decoration-8 underline-offset-4">Editing Policy</h3>
              <p className="text-lg font-bold text-gray-600 mb-10 italic">
                "Basic editing (color, crop, light) is allowed. Excessive manipulation or AI-generation is strictly prohibited."
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                 <div className="flex items-center gap-4 text-green-600 font-black uppercase tracking-widest text-xs">
                    <CheckCircle size={20} /> Color Correction & Cropping
                 </div>
                 <div className="flex items-center gap-4 text-red-600 font-black uppercase tracking-widest text-xs">
                    <XCircle size={20} /> AI Manipulation & Plagiarism
                 </div>
              </div>
           </div>
        </AnimatedSection>

        {/* RULES & PENALTIES */}
        <AnimatedSection direction="up" className="mb-24">
           <RuleCard title="06. Strict Rules & Penalties" icon={AlertTriangle} className="border-primary/20 shadow-glow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                 {[
                   "Mandatory participation on all three days for leaderboard.",
                   "Submission of plagiarized content results in immediate DQ.",
                   "Missing required social media tags voids the entry.",
                   "Late submissions (after 3:00 PM) will not be evaluated.",
                   "Inappropriate content results in permanent ban from Prayogam.",
                   "Any manipulation of engagement results in disqualification.",
                   "Core Team reserves right to request original camera files."
                 ].map((rule, i) => (
                   <div key={i} className="flex items-start gap-3">
                     <XCircle size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
                     <p className="text-xs font-bold text-gray-600 italic underline decoration-primary/20">{rule}</p>
                   </div>
                 ))}
              </div>
           </RuleCard>
        </AnimatedSection>

        {/* POLICIES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
           {[
             { num: "11", title: "Verification", text: "Entries verified by Core Team. Original files may be requested for validation.", icon: FileText },
             { num: "12", title: "Fair Play", text: "Maintain ethical conduct. Content should reflect creativity and ORIGINALITY.", icon: Scale },
             { num: "13", title: "Authority", text: "Core Team decisions are final and binding across all evaluations.", icon: Gavel },
             { num: "14", title: "Competition", text: "Structure and timeline subject to adjustments for event coordination.", icon: Zap }
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
             "Creativity, Composition, and Precision for Prayogam 2k26."
           </p>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default MoneyShotEventPage;
