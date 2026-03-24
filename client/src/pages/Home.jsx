import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import HeroParticlesBackground from '../components/home/HeroParticlesBackground';
import CountdownTimer from '../components/home/CountdownTimer';
import { REGISTRATION_LINK } from '../constants';
import AnimatedSection from '../components/animations/AnimatedSection';
import SponsorSlider from '../components/home/SponsorSlider';
// Custom lightweight counter hook for Stats
const AnimatedCounter = ({ from, to, duration = 2, delay = 0, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    let animationFrame;

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp + (delay * 1000);
      const progress = timestamp - startTime;

      if (progress < 0) {
        animationFrame = requestAnimationFrame(updateCounter);
        return;
      }

      if (progress < duration * 1000) {
        const easeOutQuart = 1 - Math.pow(1 - progress / (duration * 1000), 4);
        setCount(Math.floor(from + (to - from) * easeOutQuart));
        animationFrame = requestAnimationFrame(updateCounter);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, delay, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
};


const Home = () => {
  return (
    <div className="flex flex-col gap-32 py-12 w-full overflow-x-hidden">
      {/* 1. ORIGINAL HERO SECTION */}
      <section className="min-h-[80vh] flex flex-col justify-center relative overflow-hidden">
        <HeroParticlesBackground />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl relative z-10"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-border text-sm font-medium mb-6 bg-white shadow-sm">
            <span className="text-primary font-bold">18 April 2026</span> • Annual TechFest
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter leading-tight mb-6">
            CRACK THE CODE. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-gray-500">
              CONTROL THE GAME.
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
            Welcome to Prayogam 2k26 — where technology meets high-stakes finance. Step into a system built for innovators, risk-takers, and creators.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
            <a href="https://luma.com/tqtln2i2" target="_blank" rel="noopener noreferrer" className="block text-center bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_6px_20px_rgba(255,0,0,0.39)] hover:-translate-y-1 transition-all w-full sm:w-auto">
              Register Now
            </a>
            <a href="/events" className="block text-center bg-white border-2 border-foreground text-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 hover:-translate-y-1 transition-all w-full sm:w-auto">
              Explore Events
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4 font-medium sm:mt-3 text-center sm:text-left">Secure your pass to enter the system.</p>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 -z-10 opacity-30 md:opacity-100 hidden lg:block">
          <div className="w-[500px] h-[500px] bg-gradient-to-tr from-gray-100 to-white rounded-full blur-3xl absolute top-0 right-0" />
          <div className="w-[300px] h-[300px] bg-red-500/10 rounded-full blur-3xl absolute bottom-0 left-0" />
        </div>
      </section>

      {/* COUNTDOWN TIMER SECTION */}
      <CountdownTimer />

      {/* 2. IMMERSIVE TRANSITION SECTION */}
      <section className="py-24 border-y border-border relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-50/50 -z-10" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gray-300">
            THIS IS NOT JUST AN EVENT.
          </h2>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground mt-2">
            IT'S A <span className="text-primary italic">SYSTEM.</span>
          </h2>
        </motion.div>
      </section>

      {/* 3. DEEP DIVE: THE MONEY MYSTERY */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <AnimatedSection direction="left" className="aspect-square bg-foreground rounded-3xl relative overflow-hidden group shadow-lg">
          <img 
            src="/about-new.jpg" 
            alt="The Money Mystery"
            className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 z-10">
            <span className="text-white text-xs font-bold tracking-widest uppercase bg-primary px-3 py-1 rounded-full">Secure Vault Access</span>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right" className="space-y-8">
          <div>
            <div className="w-12 h-1 bg-primary mb-6" />
            <h2 className="text-4xl font-black tracking-tighter mb-4 text-foreground uppercase">What is Prayogam 2k26?</h2>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              We are decoding the architecture of modern wealth. From algorithmic trading to blockchain security, Prayogam 2k26 dives deep into the technology powering the global financial ecosystem.
            </p>
          </div>
          
          <div className="space-y-4 pt-6 border-t border-border">
            <h3 className="text-xl font-bold">What You Will Experience</h3>
            <ul className="space-y-3 font-medium text-gray-700">
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /> Algorithmic Tech Exhibition</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /> Content Battles</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /> Real-time Networking</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /> High-stakes Opportunities</li>
            </ul>
          </div>
        </AnimatedSection>
      </section>

      {/* 4. ORIGINAL HIGHLIGHTS / WHY ATTEND */}
      <section>
        <h2 className="text-3xl font-bold tracking-tight mb-12">Core Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Hack the Vault", desc: "Our flagship 96-hour hackathon with a prize pool of ₹5,00,000." },
            { title: "Tech Exhibition", desc: "Interact with industry leaders shaping the future of finance." },
            { title: "Network & Build", desc: "Connect with 1000+ developers, creators, and innovators from across the state." }
          ].map((item, i) => (
              <AnimatedSection 
                key={i}
                direction="up"
                delay={i * 0.1}
                className="p-8 rounded-2xl bg-white border border-border shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-2 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-50 transition-colors">
                  <div className="w-4 h-4 rounded-full bg-foreground group-hover:bg-primary transition-colors hover:shadow-[0_0_10px_rgba(255,0,0,0.8)]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 5. EXPERIENCE BREAKDOWN (TIMELINE) */}
      <section className="bg-gray-50 py-24 -mx-6 px-6 lg:-mx-20 lg:px-20 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black tracking-tight mb-16 text-center">Your Path to the Vault</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-[28px] left-0 right-0 h-0.5 bg-border z-0" />
            <div className="hidden md:block absolute top-[28px] left-0 w-1/3 h-0.5 bg-primary z-0" />
            
            {[
              { step: "01", title: "Register", desc: "Secure your unique ID and unlock your entry pass." },
              { step: "02", title: "Decode", desc: "Complete the process and gain access to the system." },
              { step: "03", title: "Compete", desc: "Enter the arena. Code, pitch, and perform." },
              { step: "04", title: "Win", desc: "Claim the rewards. Control the game." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10"
              >
                <div className="w-14 h-14 rounded-full bg-white border-4 border-gray-50 shadow-sm flex items-center justify-center font-black text-gray-400 mb-6 group-hover:text-primary transition-colors">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT YOU GET (VALUE SECTION) */}
      <section>
        <h2 className="text-3xl font-bold tracking-tight mb-12">The Return on Investment</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { tag: "Access", title: "Elite Networking", text: "Connect directly with VCs, founders, and tech leaders." },
            { tag: "Growth", title: "Real Exposure", text: "Solve real-world problems using live datasets." },
            { tag: "Proof", title: "Certificates", text: "Earn verifiable credentials (blockchain-enabled)." },
            { tag: "Reward", title: "Prize Pool", text: "Compete for significant financial rewards." }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-border p-6 rounded-2xl hover:border-primary/30 transition-all hover:-translate-y-1">
              <span className="text-xs font-bold text-primary tracking-widest uppercase mb-4 block">{item.tag}</span>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SPONSOR SLIDER */}
      <SponsorSlider />

      {/* 7. STATS / IMPACT COUNTERS */}
      <section className="bg-foreground text-white rounded-3xl p-8 sm:p-12 lg:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
          <div>
            <div className="text-5xl md:text-7xl font-black mb-2 text-white"><AnimatedCounter from={0} to={1000} suffix="+" /></div>
            <div className="text-primary font-bold tracking-widest text-sm uppercase">Participants</div>
          </div>
          <div>
            <div className="text-5xl md:text-7xl font-black mb-2 text-white">₹<AnimatedCounter from={0} to={5} suffix="L+" /></div>
            <div className="text-primary font-bold tracking-widest text-sm uppercase">Prize Pool</div>
          </div>
          <div>
            <div className="text-5xl md:text-7xl font-black mb-2 text-white"><AnimatedCounter from={0} to={10} suffix="+" /></div>
            <div className="text-primary font-bold tracking-widest text-sm uppercase">Events</div>
          </div>
          <div>
            <div className="text-5xl md:text-7xl font-black mb-2 text-white"><AnimatedCounter from={0} to={100} suffix="+" /></div>
            <div className="text-primary font-bold tracking-widest text-sm uppercase">Projects</div>
          </div>
        </div>
      </section>

      {/* 8. COMMUNITY / SOCIAL PROOF (TESTIMONIALS) */}
      <section>
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold tracking-tight max-w-sm">Builders who successfully cracked the system last year.</h2>
          <span className="hidden md:block text-primary font-bold hover:underline cursor-pointer">Read All Stories →</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { quote: "The scale of the hackathon pushed us to build production-ready solutions. Exceptionally well managed.", author: "Team Cryptic", role: "Winners 2k25" },
            { quote: "Networking at the fintech summit landed me my summer internship. Best 3 days of my college life.", author: "Aman S.", role: "VIP Pass Holder" },
            { quote: "Prayogam sets the gold standard for tech fests. The energy, the aesthetics, the competition — unmatched.", author: "Shruti P.", role: "Participant" }
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 border border-border p-8 rounded-2xl relative">
              <div className="text-4xl text-gray-300 font-serif absolute top-6 right-6">"</div>
              <p className="text-gray-700 italic mb-8 relative z-10">"{item.quote}"</p>
              <div>
                <div className="font-bold">{item.author}</div>
                <div className="text-sm text-primary font-medium">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. PAST EVENT GALLERY */}
      <section className="py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-4">Past Event Glimpses</h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium">Moments from previous Prayogam editions.</p>
          <div className="w-12 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80", alt: "Hackathon Night" },
            { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80", alt: "Tech Exhibition" },
            { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80", alt: "Team Collaboration" },
            { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80", alt: "Keynote Session" }
          ].map((img, i) => (
            <AnimatedSection 
              key={i} 
              direction="up" 
              delay={i * 0.1}
              className="group overflow-hidden rounded-2xl border border-border aspect-[4/3] bg-gray-100 flex items-center justify-center relative shadow-none"
            >
              {/* Image with fallback and lazy loading */}
              <img 
                src={img.url} 
                alt={img.alt} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-[1.03]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&h=300&auto=format&fit=crop";
                }}
              />
              {/* Subtle overlay for context on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white text-xs font-bold uppercase tracking-widest">{img.alt}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 9. FINAL PRE-CTA BUILDUP + STRONG CTA */}
      <section className="py-12 px-4 sm:px-6 relative flex justify-center mt-6 mb-12">
        <div className="w-full max-w-5xl bg-[#0a0a0a] border border-primary/30 rounded-3xl p-10 md:p-24 text-center relative overflow-hidden shadow-[0_0_30px_rgba(255,0,0,0.15)] hover:shadow-[0_0_50px_rgba(255,0,0,0.3)] hover:border-primary/60 transition-all duration-700">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="w-16 h-1 bg-primary mx-auto mb-8 shadow-[0_0_10px_rgba(255,0,0,0.8)]" />
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 text-glow">
              THE SYSTEM IS WAITING.
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-12 font-medium max-w-2xl mx-auto">
              Are you ready to enter the most intense tech-cultural convergence of 2026? Registrations closing soon.
            </p>
            
            <a href={REGISTRATION_LINK} target="_blank" rel="noopener noreferrer" className="block sm:inline-block w-full sm:w-auto bg-primary text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-primary transition-all active:scale-95 border border-primary">
              Unlock Your Pass
            </a>
            <p className="text-gray-500 text-sm mt-6 font-medium">Secure your pass to enter the system.</p>
          </motion.div>
          
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />
        </div>
      </section>

    </div>
  );
};

export default Home;
