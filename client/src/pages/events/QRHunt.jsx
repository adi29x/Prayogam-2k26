import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Target, Users, Shield, Clock, AlertTriangle, AlertCircle,
  Trophy, Star, Share2, Clapperboard, BarChart,
  TrendingUp, Zap, ChevronRight, CheckCircle2,
  ArrowLeft, Download, FileText, Scale, Gavel,
  CheckCircle, XCircle, Search, QrCode, MapPin
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

const QRHunt = () => {
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
              onClick={() => navigate('/leaderboard/qr-hunt-2k26')}
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
          <AnimatedText text="QR HUNT 2K26" el="h1" className="text-5xl md:text-9xl font-black tracking-tighter mb-4 uppercase leading-[0.85]" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <p className="text-lg md:text-2xl text-gray-500 font-bold uppercase tracking-widest italic">
              CAMPUS-WIDE GAMIFIED SCAVENGER HUNT <span className="text-primary mx-3">/</span> <span className="text-foreground">PRAYOGAM 2K26</span>
            </p>
            <div className="w-24 h-2 bg-primary mt-8 shadow-glow" />
          </motion.div>
        </div>

        {/* SECTION 1: OVERVIEW & OBJECTIVE */}
        <AnimatedSection direction="up" className="mb-24">
          <SectionHeader icon={Target} title="01. Overview & Objective" />
          <div className="bg-white border border-border p-10 md:p-16 rounded-[3rem]">
            <p className="text-xl font-bold text-foreground mb-10 leading-relaxed italic">
              "A real-world interactive campus hunt where participants scan QR codes, solve clues, and race against time to submit winning triggers."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Campus Engagement", desc: "Create high-interaction engagement through a campus-wide game." },
                { title: "Gamification", desc: "Build curiosity and hype around Prayogam 2k26 through interactive challenges." },
                { title: "Interactive Exploration", desc: "Reward students for exploration, speed, and smart decision-making." },
                { title: "Time-Bound Competition", desc: "Competitive environment where accuracy determines the ultimate winners." }
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
              🚨 Transaction File Pass is mandatory for all participants to qualify in QR Hunt 2k26.
            </p>
            <p className="text-sm text-red-800/80 font-medium leading-relaxed max-w-xl">
              Participation without a valid Transaction File Pass will lead to immediate disqualification from rewards and recognition.
            </p>
          </div>
        </AnimatedSection>

        {/* SECTION 2: CORE CONCEPT & HOW IT WORKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <AnimatedSection direction="left">
            <RuleCard title="02. Core Concept" icon={QrCode} className="h-full">
              <p className="mb-6 font-bold text-foreground italic">Multiple QR codes will be placed across the campus with different contents:</p>
              <ul className="space-y-4">
                {[
                  "Decoy Codes: Contain event-related links only.",
                  "Secret Codes: Contain winning triggers and hidden keys.",
                  "Winning Triggers: Unlock reward submission portals."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary font-black">#</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </RuleCard>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <RuleCard title="03. How It Works" icon={Search} className="h-full">
              <div className="space-y-6">
                {[
                  { step: "Locate", text: "Find QR codes hidden across the campus grounds." },
                  { step: "Identify", text: "Find the specific QR containing the 'Secret Code'." },
                  { step: "Follow", text: "Follow the official iNCENT/Prayogam social media handle." },
                  { step: "DM Submission", text: "Send the code via Direct Message (DM) to official handle." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-primary font-black text-xs shrink-0">{i + 1}</div>
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

        {/* SECTION 4: GAME STRUCTURE & RULES */}
        <AnimatedSection direction="up" className="mb-24">
          <SectionHeader icon={Clock} title="04. Game Structure & Timing" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-white border border-border rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform" />
              <h4 className="text-xs font-black uppercase text-gray-400 mb-2">Round Duration</h4>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-black text-foreground italic">30</span>
                <span className="text-xl font-black uppercase tracking-widest text-primary">Minutes</span>
              </div>
              <p className="text-xs font-medium text-gray-500 leading-relaxed italic">
                Total game duration per round is strictly 30 minutes. Late submissions after the time window will be rejected.
              </p>
            </div>

            <div className="p-10 bg-white border border-border rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform" />
              <h4 className="text-xs font-black uppercase text-gray-400 mb-2">Announcement</h4>
              <h4 className="text-xl font-black uppercase text-foreground mb-6">Random Start</h4>
              <p className="text-xs font-medium text-gray-500 leading-relaxed italic">
                The game will be announced randomly by the anchor. QR codes are placed 24 hours prior by the Core Team.
              </p>
            </div>

            <div className="p-10 bg-white border border-border rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform" />
              <h4 className="text-xs font-black uppercase text-gray-400 mb-2">Submission Format</h4>
              <h4 className="text-xl font-black uppercase text-foreground mb-6 font-primary italic">Code + Name / Team Name</h4>
              <p className="text-xs font-medium text-gray-500 leading-relaxed italic">
                Only registered participants are eligible. Each participant/team can submit only one valid entry.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* SECTION 5: WINNING CRITERIA & REWARDS */}
        <AnimatedSection direction="up" className="mb-24">
          <SectionHeader icon={Trophy} title="05. Winning & Rewards" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RuleCard title="How to Win" icon={Star}>
              <div className="space-y-4">
                {[
                  { l: "Correctness", d: "The code submitted must be exactly correct." },
                  { l: "Timeline", d: "Earlier entries (DM timestamp) get higher priority." },
                  { l: "Compliance", d: "Follow official iNCENT/Prayogam pages before submission." },
                  { l: "Limit", d: "A participant/team can win only once per round." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="text-primary font-black text-xs uppercase tracking-widest">{item.l}</div>
                    <p className="text-[10px] uppercase font-black text-gray-500">{item.d}</p>
                  </div>
                ))}
              </div>
            </RuleCard>

            <div className="bg-foreground text-white p-12 md:p-16 rounded-[4rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
              <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-10 italic">Rewards List</h4>
              <ul className="space-y-6 relative z-10">
                {[
                  "Wildcard Passes for Prayogam 2k26",
                  "Official Merchandise & Goodies",
                  "Top Performer Certificates",
                  "On-Stage Recognition",
                  "Feature on Official Platforms"
                ].map((reward, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm font-black uppercase tracking-tight">{reward}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* RULES & RESTRICTIONS */}
        <AnimatedSection direction="up" className="mb-24">
          <RuleCard title="06. Strict Rules & RESTRICTIONS" icon={AlertTriangle} className="border-primary/20 shadow-glow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                "Tampering, removing, or relocating QR codes is strictly prohibited.",
                "Sharing the secret code with others will lead to disqualification.",
                "Only QR codes placed by the Core Team are valid.",
                "Use of unfair means or external help is not allowed.",
                "Spamming DMs or multiple attempts may lead to rejection.",
                "Misbehavior or violation of campus rules will result in removal.",
                "Low-effort or irrelevant submissions may be rejected."
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
            { num: "09", title: "Verification", text: "All entries manually verified via DM timestamp. Invalid formats are ignored.", icon: FileText },
            { num: "10", title: "Fair Play", text: "Compete with integrity. Skill and speed are the only deciding factors.", icon: Scale },
            { num: "11", title: "Authority", text: "Core Team manages fairness and rules. All decisions are final.", icon: Gavel },
            { num: "12", title: "Final Clause", text: "Organizers reserve the right to modify rules or gameplay structure if required for smooth execution.", icon: Zap }
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
            "Speed, Smartness, and a single scan to victory."
          </p>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default QRHunt;
