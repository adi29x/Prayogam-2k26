import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Users, Shield, Clock, AlertTriangle, 
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

const CashQuest2026 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scoringData = [
    { 
      category: "📢 Official Promotion",
      tasks: [
        { name: "Share Official Post", desc: "Share Prayogam post on story/feed", points: 15, freq: "Daily", proof: "Screenshot", notes: "Mandatory" },
        { name: "Story Tagging", desc: "Tag official Prayogam account", points: 10, freq: "Daily", proof: "Screenshot", notes: "Must be clearly visible" },
        { name: "Hashtag Use", desc: "Use #Prayogam2k26", points: 5, freq: "Per Post", proof: "Screenshot", notes: "Mandatory" },
        { name: "Comment on Official Post", desc: "Meaningful engagement comment", points: 5, freq: "Daily", proof: "Screenshot", notes: "Spam comments not allowed" }
      ]
    },
    {
      category: "📱 Content Creation",
      tasks: [
        { name: "Reel Creation", desc: "Upload original reel", points: 30, freq: "Daily", proof: "Reel Link", notes: "Only top 2 reels counted" },
        { name: "Stories (Min. 3)", desc: "Post minimum 3 stories", points: 20, freq: "Daily", proof: "Screenshots", notes: "Optional but recommended" },
        { name: "Static Post", desc: "Poster/meme/photo content", points: 15, freq: "Optional", proof: "Post Link", notes: "Extra effort" }
      ]
    },
    {
      category: "📊 Engagement",
      tasks: [
        { name: "100+ Views", desc: "Reel crosses 100 views", points: 10, freq: "Per Reel", proof: "Insights Screenshot", notes: "" },
        { name: "500+ Views", desc: "Reel crosses 500 views", points: 20, freq: "Per Reel", proof: "Insights Screenshot", notes: "" },
        { name: "1000+ Views", desc: "Reel crosses 1000 views", points: 40, freq: "Per Reel", proof: "Insights Screenshot", notes: "Points capped per reel" },
        { name: "Likes (10+)", desc: "Reel gets 10+ likes", points: 5, freq: "Per Reel", proof: "Screenshot", notes: "" },
        { name: "Likes (50+)", desc: "Reel gets 50+ likes", points: 15, freq: "Per Reel", proof: "Screenshot", notes: "" },
        { name: "Comments (5+)", desc: "Reel gets 5+ genuine comments", points: 15, freq: "Per Reel", proof: "Screenshot", notes: "Only real comments counted" }
      ]
    },
    {
      category: "👥 Growth",
      tasks: [
        { name: "Followers Gained", desc: "Each new follower", points: 10, freq: "Daily", proof: "Before/After Screenshot", notes: "Daily cap may apply after verification" }
      ]
    },
    {
      category: "👥 Participation",
      tasks: [
        { name: "Class Group Content", desc: "Group reel/photo with classmates", points: 40, freq: "Alternate Days", proof: "Media Proof", notes: "High impact activity" }
      ]
    },
    {
      category: "🔥 Bonus",
      tasks: [
        { name: "Creative Reel", desc: "Unique, high-quality idea", points: 30, freq: "Optional", proof: "Reel Link", notes: "Approval by core team" },
        { name: "Trend Reel", desc: "Based on trending audio", points: 20, freq: "Optional", proof: "Reel Link", notes: "" },
        { name: "Early Submission", desc: "Submit before 5 PM", points: 10, freq: "Daily", proof: "Timestamp", notes: "" },
        { name: "Viral Reel (Top 3)", desc: "Top 3 performing reels of the day", points: 60, freq: "Daily", proof: "Internal", notes: "Highest reward" }
      ]
    }
  ];

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
              onClick={() => navigate('/leaderboard/cash-quest-2k26')}
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:bg-black transition-all font-black uppercase tracking-widest text-[10px] shadow-glow"
            >
              <TrendingUp size={14} /> Live Leaderboard
            </button>
            <button className="flex items-center gap-2 bg-foreground text-white px-6 py-3 rounded-xl hover:bg-primary transition-all font-black uppercase tracking-widest text-[10px] shadow-sm">
              <Download size={14} /> Rule Book
            </button>
            <button className="flex items-center gap-2 bg-white border border-border px-6 py-3 rounded-xl hover:border-primary transition-all font-black uppercase tracking-widest text-[10px] shadow-sm">
              <FileText size={14} /> Points System
            </button>
          </div>
        </div>

        {/* PAGE HEADER */}
        <div className="mb-24">
          <AnimatedText text="CASH QUEST 2K26" el="h1" className="text-5xl md:text-9xl font-black tracking-tighter mb-4 uppercase leading-[0.85]" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <p className="text-lg md:text-2xl text-gray-500 font-bold uppercase tracking-widest italic">
              OFFICIAL RULEBOOK & CR SYSTEM <span className="text-primary mx-3">/</span> <span className="text-foreground">PRAYOGAM 2K26</span>
            </p>
            <div className="w-24 h-2 bg-primary mt-8 shadow-glow" />
          </motion.div>
        </div>

        {/* SECTION 1: OBJECTIVE */}
        <AnimatedSection direction="up" className="mb-24">
          <SectionHeader icon={Target} title="01. Objective" />
          <div className="bg-white border border-border p-10 md:p-16 rounded-[3rem]">
            <p className="text-xl font-bold text-foreground mb-10 leading-relaxed">
              The Class Representative (CR) System for Cash Quest 2k26 is a structured, gamified ecosystem designed to drive authentic engagement and reach.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Digital Awareness", desc: "Maximize awareness and reach of Prayogam 2k26 across all digital platforms." },
                { title: "Creativity & Competition", desc: "Encourage consistency and healthy competition among different classes." },
                { title: "Growth & Engagement", desc: "Drive authentic engagement and meaningful follower growth on official handles." },
                { title: "Daily Ecosystem", desc: "Build a gamified environment where classes compete daily through verified activities." }
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

        {/* SECTION 2: ROLES */}
        <AnimatedSection direction="up" className="mb-24">
          <SectionHeader icon={Users} title="02. Roles & Responsibilities" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RuleCard title="Class Representative (CR)" icon={Users}>
              {[
                "Acts as the official digital ambassador of their class",
                "Creates and publishes content daily in alignment with guidelines",
                "Promotes official Prayogam content within their network",
                "Ensures active participation from classmates",
                "Submits a complete daily performance report before the deadline"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-primary mt-1 flex-shrink-0" />
                  <p>{item}</p>
                </div>
              ))}
            </RuleCard>

            <RuleCard title="Core Team" icon={Shield}>
              {[
                "Governing and evaluation authority of the competition",
                "Verifies all submissions through a structured validation process",
                "Calculates and updates scores based on defined criteria",
                "Publishing the official leaderboard daily",
                "Conducting audits to ensure fairness and authenticity"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-primary/40 mt-1 flex-shrink-0" />
                  <p>{item}</p>
                </div>
              ))}
              <p className="mt-4 text-[10px] font-black uppercase text-gray-400 italic">All decisions will be taken with fairness & transparency.</p>
            </RuleCard>
          </div>
        </AnimatedSection>

        {/* SECTION 3: WORKFLOW */}
        <AnimatedSection direction="up" className="mb-24">
          <SectionHeader icon={Clock} title="03. Competition Structure" />
          <div className="bg-white border border-border p-10 rounded-[3rem] mb-12">
            <p className="text-lg font-bold text-foreground mb-4">The competition will be conducted over <span className="text-primary italic uppercase">3 Intense Days</span>.</p>
            <p className="text-sm text-gray-500 font-medium">Participation on all three days is mandatory for leaderboard eligibility. Daily tasks include content creation, promotion, and engagement activities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { time: "Morning", title: "Theme release", desc: "Daily themes or content directions shared", color: "bg-gray-50" },
              { time: "During Day", title: "Execution", desc: "CRs create, publish, and promote content", color: "bg-gray-50" },
              { time: "8:00 PM", title: "Deadline", desc: "Strict cut-off for daily submissions. NO late entries.", color: "bg-red-50" },
              { time: "8-10 PM", title: "Verification", desc: "Core team manual validation window", color: "bg-gray-50" },
              { time: "Next 8 AM", title: "Update", desc: "Leaderboard update on official platforms", color: "bg-green-50" }
            ].map((step, i) => (
              <div key={i} className={`${step.color} p-8 rounded-3xl border border-border group hover:border-primary/20 transition-all`}>
                <div className="text-[10px] font-black uppercase text-primary mb-2 tracking-widest">{step.time}</div>
                <h4 className="text-base font-black uppercase tracking-tight mb-2 text-foreground">{step.title}</h4>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* SECTION 4: PARTICIPATION REQUIREMENTS */}
        <AnimatedSection direction="up" className="mb-24">
          <SectionHeader icon={Shield} title="04. Participation & Eligibility" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <RuleCard title="Eligibility Criteria" icon={CheckCircle}>
               {[
                 "Open to all selected Class Representatives (CRs)",
                 "Participation is class-based through assigned representatives",
                 "Each CR must use their primary social media account",
                 "All activities must comply with the competition rules"
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
                 <h3 className="text-2xl font-black uppercase tracking-tight">CR ACCESS MANDATE</h3>
               </div>
               <p className="text-sm font-bold text-red-900 leading-relaxed mb-6 italic underline uppercase">
                 🚨 Transaction File Pass is mandatory for all CRs to participate in Cash Quest 2k26.
               </p>
               <p className="text-xs text-red-800/80 font-medium leading-relaxed">
                 Failure to secure your Transaction File Pass will result in immediate exclusion from the leaderboard and prize eligibility.
               </p>
            </div>
          </div>

          <div className="bg-white border border-border rounded-[3rem] p-10 md:p-16">
             <div className="flex flex-col md:flex-row gap-12 items-start">
               <div className="flex-1">
                 <h3 className="text-2xl font-black uppercase mb-8">Daily Scoring Requirements:</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                    {[
                      "Share at least one official Prayogam post",
                      "Create and upload at least one original reel",
                      "Use the official hashtag #Prayogam2k26",
                      "Tag the official Prayogam/iNCENT account",
                      "Share content on story and tag the official page"
                    ].map((req, i) => (
                      <div key={req} className="flex gap-4 items-center font-bold text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm">{req}</span>
                      </div>
                    ))}
                 </div>
               </div>
               <div className="w-full md:w-80 bg-red-600 text-white p-8 rounded-[2rem] shadow-glow">
                  <AlertTriangle className="text-white mb-4" size={32} />
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2 italic">Mandatory Task</h4>
                  <p className="text-xs font-medium leading-relaxed">
                    Failure to complete the minimum daily requirements (one reel + one official share) will result in <span className="font-black underline uppercase">zero points</span> for the entire day.
                  </p>
               </div>
             </div>
          </div>
        </AnimatedSection>

        {/* SECTION 5: SCORING SYSTEM */}
        <AnimatedSection direction="up" className="mb-24">
          <SectionHeader icon={BarChart3} title="05. Scoring System" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Share2, title: "Promotion", desc: "Earn points for sharing official content, using hashtags correctly, and engaging with official posts." },
              { icon: Clapperboard, title: "Content Creation", desc: "Points for original reels/stories. Only top 2 reels per day per CR will be considered." },
              { icon: TrendingUp, title: "Engagement", desc: "Organic views, likes, and genuine comments. Scoring per reel will have a reasonable cap." },
              { icon: Users, title: "Growth", desc: "Points for each new follower. Daily follower points may be capped to prevent unfair advantage." }
            ].map((cat, i) => (
              <div key={i} className="p-8 bg-white border border-border rounded-3xl group hover:border-primary/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gray-50 text-primary mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <cat.icon size={24} />
                </div>
                <h4 className="font-black uppercase tracking-tight text-foreground mb-3">{cat.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">{cat.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* SECTION 6: SCORING TABLE */}
        <AnimatedSection direction="up" className="mb-24">
          <div className="bg-white border border-border rounded-[3rem] overflow-hidden shadow-sm">
            <div className="p-8 md:p-12 border-b border-border bg-gray-50/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Structured Scoring Matrix</h3>
                <p className="text-gray-500 text-sm font-medium mt-2">Verified scoring criteria for digital ambassadors.</p>
              </div>
              <div className="text-[10px] font-black uppercase bg-primary text-white px-4 py-1.5 rounded-full tracking-widest">Live Document</div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-gray-50/80 border-b border-border">
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Category</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Task</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Description</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Points</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Frequency</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Proof Required</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {scoringData.map((group, idx) => (
                    <React.Fragment key={idx}>
                      <tr className="bg-gray-50/30">
                        <td colSpan="7" className="px-8 py-3 text-[10px] font-black text-primary uppercase tracking-widest">{group.category}</td>
                      </tr>
                      {group.tasks.map((task, tidx) => (
                        <tr key={tidx} className="hover:bg-gray-50/50 transition-colors group">
                          <td className="px-8 py-6"></td>
                          <td className="px-8 py-6 font-bold text-foreground text-sm">{task.name}</td>
                          <td className="px-8 py-6 text-xs text-gray-500 font-medium leading-relaxed max-w-[200px]">{task.desc}</td>
                          <td className="px-8 py-6 font-black text-primary text-base">
                            {typeof task.points === 'number' ? `+${task.points}` : task.points}
                          </td>
                          <td className="px-8 py-6 text-xs text-gray-500 font-bold uppercase tracking-tight">{task.freq}</td>
                          <td className="px-8 py-6 text-xs text-gray-600 font-medium italic">{task.proof}</td>
                          <td className="px-8 py-6 text-xs text-gray-400 font-medium border-l border-transparent group-hover:border-border transition-all">{task.notes}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                  <tr className="bg-red-50/30">
                    <td colSpan="7" className="px-8 py-4 text-[10px] font-black text-red-600 uppercase tracking-widest">⚠️ Penalty</td>
                  </tr>
                  {[
                    { name: "Late Submission", desc: "After 8 PM deadline", pts: "0 Points", freq: "Daily", proof: "—", notes: "Strict rule" },
                    { name: "Fake Engagement", desc: "Bots/paid growth detected", pts: "Disqualified ❌", freq: "Anytime", proof: "—", notes: "Immediate action" },
                    { name: "Missing Tag/Hashtag", desc: "Rule violation", pts: "-10", freq: "Per Post", proof: "System Check", notes: "Important" }
                  ].map((p, i) => (
                    <tr key={i} className="text-red-600/80 text-xs bg-red-50/10 hover:bg-red-50/30 transition-colors">
                      <td className="px-8 py-6"></td>
                      <td className="px-8 py-6 font-bold">{p.name}</td>
                      <td className="px-8 py-6 text-[11px] font-medium leading-relaxed">{p.desc}</td>
                      <td className="px-8 py-6 font-black">{p.pts}</td>
                      <td className="px-8 py-6 font-bold uppercase tracking-tighter">{p.freq}</td>
                      <td className="px-8 py-6 italic">{p.proof}</td>
                      <td className="px-8 py-6 font-bold uppercase text-[9px] tracking-widest">{p.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* SECTION 6: REPORTING SYSTEM */}
          <AnimatedSection direction="left">
            <RuleCard title="06. Submission & Reporting" icon={FileText} className="h-full">
              <p className="mb-6 text-foreground font-bold italic">Daily submission deadline is 8:00 PM. Late submissions will not be considered.</p>
              <ul className="space-y-3 mb-8">
                {["Submit Reel and Post links", "Provide Story screenshots", "Engagement insights (views/likes/shares)", "Follower count (Before & After screenshot)"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-gray-50 p-4 rounded-xl border border-border">
                <p className="text-[10px] font-black uppercase text-gray-400 mb-1 tracking-widest">Important</p>
                <p className="text-xs font-bold text-foreground">Participation is mandatory each day for leaderboard eligibility. Incomplete submissions will not be considered.</p>
              </div>
            </RuleCard>
          </AnimatedSection>

          {/* SECTION 7: LEADERBOARD SYSTEM */}
          <AnimatedSection direction="right">
            <RuleCard title="07. Leaderboard System" icon={TrendingUp} className="h-full">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl mb-4">
                <span className="text-[10px] font-black uppercase text-gray-400">Update Frequency</span>
                <span className="text-xs font-black text-foreground">Daily @ 8:00 AM</span>
              </div>
              <h4 className="text-xs font-black uppercase text-primary mb-4 italic tracking-widest">Tie-Breaker Rule</h4>
              <p className="text-sm text-gray-500 mb-6 font-medium italic">In case of equal points, ranking will be decided by:</p>
              <ul className="space-y-4">
                {["Higher engagement quality", "Higher genuine follower growth", "Earlier submission time"].map((r, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold">
                    <span className="text-primary text-[10px] font-black">#{i+1}</span> {r}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[10px] font-black uppercase text-gray-400">Scores once published will be considered final.</p>
            </RuleCard>
          </AnimatedSection>
        </div>

        {/* SECTION 8: REWARDS */}
        <AnimatedSection direction="up" className="mb-24">
          <SectionHeader icon={Trophy} title="08. Rewards & Recognition" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-10 bg-white border border-border rounded-[2.5rem]">
              <div className="text-primary text-4xl mb-6 flex justify-center"><Star /></div>
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Daily</h4>
              <h3 className="text-xl font-black uppercase text-foreground">Top Performers Featured</h3>
              <p className="text-xs text-gray-500 mt-4 font-medium italic">Broadcasted on official Prayogam platforms</p>
            </div>
            <div className="p-10 bg-white border border-border rounded-[3rem] shadow-glow border-primary/20 scale-105 relative z-10">
              <div className="text-primary text-5xl mb-6 flex justify-center"><Trophy /></div>
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Final Winners</h4>
              <h3 className="text-2xl font-black uppercase text-foreground">On-Stage Recognition</h3>
              <p className="text-xs text-gray-500 mt-4 font-medium leading-relaxed">Free Prayogam passes + Goods <br/> + Certificates + Wildcard passes</p>
            </div>
            <div className="p-10 bg-white border border-border rounded-[2.5rem]">
              <div className="text-primary text-4xl mb-6 flex justify-center"><CheckCircle /></div>
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Exclusive</h4>
              <h3 className="text-xl font-black uppercase text-foreground">Networking Access</h3>
              <p className="text-xs text-gray-500 mt-4 font-medium italic">Priority entry and Certificates</p>
            </div>
          </div>
        </AnimatedSection>

        {/* SECTION 9: RULES & PENALTIES */}
        <AnimatedSection direction="up" className="mb-24">
           <SectionHeader icon={AlertTriangle} title="09. Rules & Penalties" />
           <div className="bg-foreground text-white p-12 md:p-16 rounded-[4rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 relative z-10">
                 {[
                   { label: "Compliance", desc: "Strict compliance is mandatory. Failure to participate leads to disqualification.", icon: Shield },
                   { label: "Fake Growth", desc: "Fake followers, bots, or paid engagement results in immediate disqualification.", icon: XCircle },
                   { label: "Late Submission", desc: "After 8:00 PM results in zero points for the day. NO exceptions.", icon: Clock },
                   { label: "Duplicate Work", desc: "Duplicate or low-effort content will be rejected after manual audit.", icon: FileText },
                   { label: "Tags & Hashtags", desc: "Missing required tags or hashtags may result in heavy point penalties.", icon: AlertTriangle },
                   { label: "Single Account", desc: "Use of multiple accounts for engagement manipulation is strictly prohibited.", icon: Zap }
                 ].map((rule, i) => (
                   <div key={i} className="flex gap-4">
                      <rule.icon className="text-primary shrink-0" size={24} />
                      <div>
                        <h4 className="font-black uppercase tracking-tight mb-2">{rule.label}</h4>
                        <p className="text-gray-400 text-xs font-medium leading-relaxed">{rule.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
              <div className="mt-16 pt-10 border-t border-white/10 text-center">
                 <p className="text-xs font-black uppercase tracking-[0.4em] text-primary italic">Anti-Cheat Policy strictly enforced by iNCENT Core Team</p>
              </div>
            </div>
         </AnimatedSection>

         {/* SECTIONS 10-13: POLICIES */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {[
              { num: "10", title: "Verification", text: "All submissions undergo manual verification with random audits. Core Team reserves rights to request additional proof.", icon: FileText },
              { num: "11", title: "Fair Play", text: "Maintain ethical and respectful competition. Focus on originality and genuine engagement. Cheating results in permanent ban.", icon: Scale },
              { num: "12", title: "Adjustments", text: "Organizing team reserves the right to modify rules or scoring structure to ensure fairness during execution.", icon: Users },
              { num: "13", title: "Final Authority", text: "All decisions made by the iNCENT Core Team regarding evaluation and rankings will be final and binding.", icon: Gavel }
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
             "Rules may evolve to ensure system-wide fairness for all digital ambassadors."
           </p>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default CashQuest2026;
