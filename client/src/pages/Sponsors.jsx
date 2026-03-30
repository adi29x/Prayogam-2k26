import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MotionCard from '../components/animations/MotionCard';
import AnimatedText from '../components/animations/AnimatedText';
import AnimatedSection from '../components/animations/AnimatedSection';

const SponsorTierSection = ({ title, sponsors, size }) => {
  if (!sponsors || sponsors.length === 0) return null;

  const getGridCols = () => {
    if (size === 'large') return 'grid-cols-1 sm:grid-cols-2';
    if (size === 'medium') return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
    return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5';
  };

  const getHeight = () => {
    if (size === 'large') return 'h-48 md:h-64';
    if (size === 'medium') return 'h-32 md:h-40';
    return 'h-24 md:h-28';
  };

  return (
    <section className="max-w-6xl mx-auto px-6 w-full mb-20">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-xl md:text-2xl font-black tracking-widest text-foreground uppercase mb-2">{title}</h2>
        <div className="w-16 h-1 bg-primary" />
      </div>

      <div className={`grid ${getGridCols()} gap-6`}>
        {sponsors.map((sponsor, i) => (
          <MotionCard
            key={i}
            delay={i * 0.1}
            className={`${getHeight()} bg-white border border-border shadow-sm rounded-2xl flex items-center justify-center group hover:shadow-glass hover:border-primary/30 transition-all duration-300 cursor-pointer overflow-hidden relative`}
          >
            {/* If actual image URL is provided, use img tag with grayscale logic. Otherwise placeholder text */}
            {sponsor.logo ? (
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-3/4 h-3/4 object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            ) : (
              <span className={`font-bold tracking-widest text-center px-4 text-gray-400 group-hover:text-foreground group-hover:scale-105 transition-all duration-500 ${size === 'large' ? 'text-2xl' : size === 'medium' ? 'text-lg' : 'text-sm'}`}>
                {sponsor.name}
              </span>
            )}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-primary transition-colors duration-300" />
          </MotionCard>
        ))}
      </div>
    </section>
  );
};

const Sponsors = () => {
  const tiers = [
    {
      title: "Title Sponsors",
      size: "large",
      sponsors: [
        { name: "To be announced soon", logo: null },
        { name: "To be announced soon", logo: null }
      ]
    },
    {
      title: "Powered By",
      size: "medium",
      sponsors: [
        { name: "To be announced soon", logo: null },
        { name: "To be announced soon", logo: null },
        { name: "To be announced soon", logo: null }
      ]
    },
    {
      title: "Co-Powered By",
      size: "small",
      sponsors: [
        { name: "To be announced soon", logo: null },
        { name: "To be announced soon", logo: null },
        { name: "To be announced soon", logo: null },
        { name: "To be announced soon", logo: null },
        { name: "To be announced soon", logo: null }
      ]
    },
    {
      title: "Supported By",
      size: "small",
      sponsors: [
        { name: "To be announced soon", logo: null },
        { name: "To be announced soon", logo: null },
        { name: "To be announced soon", logo: null },
        { name: "To be announced soon", logo: null }
      ]
    },
    {
      title: "Sponsored By",
      size: "small",
      sponsors: [
        { name: "To be announced soon", logo: null },
        { name: "To be announced soon", logo: null }
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-12 py-12 min-h-screen">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto px-6 mb-12">
        <div className="flex flex-col items-center mb-6">
          <div className="flex flex-wrap justify-center gap-x-3 sm:gap-x-4">
            <AnimatedText text="POWERING" el="h1" className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-foreground uppercase" />
            <AnimatedText text="PRAYOGAM" el="h1" className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-foreground uppercase" />
          </div>
          <AnimatedText text="2K26" el="h1" className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-primary uppercase relative after:content-[''] after:absolute after:-bottom-2 md:after:-bottom-3 after:left-0 after:w-full after:h-1 md:after:h-1.5 after:bg-gradient-to-r after:from-primary/80 after:to-transparent shadow-glow" />
        </div>
        <AnimatedSection direction="up" delay={0.2}>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-medium uppercase tracking-tight italic">
            "Collaborating with organizations and partners to support innovation, student talent, and technical excellence."
          </p>
        </AnimatedSection>
      </section>

      {/* Dynamic Sponsor Tiers */}
      <div>
        {tiers.map((tier, index) => (
          <SponsorTierSection
            key={index}
            title={tier.title}
            size={tier.size}
            sponsors={tier.sponsors}
          />
        ))}
      </div>

      {/* Why Partner With Prayogam / Impact Metrics */}
      <section className="bg-foreground text-white py-24 mt-12 rounded-[3rem] mx-4 md:mx-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-12 leading-tight">
              Why Partner With <span className="text-primary block mt-2">Prayogam 2k26?</span>
            </h2>
            <div className="space-y-10">
              <div className="flex gap-5">
                <div className="mt-1 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                  <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_rgba(229,9,20,0.8)]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Direct Student Reach</h3>
                  <p className="text-gray-400 font-medium leading-relaxed">Connect with 1000+ students actively working on technical projects and innovation.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="mt-1 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                  <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_rgba(229,9,20,0.8)]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Strong Brand Visibility</h3>
                  <p className="text-gray-400 font-medium leading-relaxed">
                    Your brand will be visible across:
                    <ul className="mt-2 text-sm space-y-1 opacity-80 uppercase tracking-widest font-black">
                      <li>• Event platforms</li>
                      <li>• On-campus installations</li>
                      <li>• Digital promotions</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="mt-1 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                  <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_rgba(229,9,20,0.8)]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Access to Emerging Talent</h3>
                  <p className="text-gray-400 font-medium leading-relaxed">Engage with students who are building real projects and developing practical skills.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
            <h3 className="text-2xl font-bold mb-8 text-center text-white">Projected Impact</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-black/40 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors">
                <div className="text-4xl font-black text-primary mb-2">50K+</div>
                <div className="text-sm font-bold text-gray-400 tracking-widest uppercase">Digital Reach</div>
              </div>
              <div className="text-center p-6 bg-black/40 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors">
                <div className="text-4xl font-black text-white mb-2">1K+</div>
                <div className="text-sm font-bold text-gray-400 tracking-widest uppercase">Participants</div>
              </div>
              <div className="text-center p-6 bg-black/40 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors">
                <div className="text-4xl font-black text-white mb-2">200+</div>
                <div className="text-sm font-bold text-gray-400 tracking-widest uppercase">Projects</div>
              </div>
              <div className="text-center p-6 bg-black/40 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors">
                <div className="text-4xl font-black text-primary mb-2">96hr</div>
                <div className="text-sm font-bold text-gray-400 tracking-widest uppercase">Engagement</div>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-[0_4px_14px_rgba(255,0,0,0.39)] text-lg">
                Download Sponsorship Proposal
              </button>
              <Link to="/contact-sponsors" className="block w-full text-center bg-transparent border-2 border-white/20 text-white py-4 rounded-xl font-bold hover:bg-white hover:text-black transition-colors text-lg">
                Contact Sponsorship Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center max-w-2xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-6">Ready to Become a Catalyst?</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 font-medium italic">
          Be part of a structured platform where innovation is built, tested, and presented. <br /><br />
          Partner with Prayogam 2k26 to support student-driven ideas and gain meaningful visibility.
        </p>
        <Link to="/contact-sponsors" className="block sm:inline-block w-full sm:w-auto border-2 border-foreground bg-white text-foreground px-10 py-5 rounded-full font-bold hover:bg-foreground hover:text-white transition-all text-lg shadow-sm uppercase tracking-widest">
          Contact Sponsorship Team
        </Link>
      </section>
    </div>
  );
};

export default Sponsors;
