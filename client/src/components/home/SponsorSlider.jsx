import React from 'react';

const SponsorSlider = () => {
  const sponsors = [
    { name: "To be announced soon", logo: null },
    { name: "To be announced soon", logo: null },
    { name: "To be announced soon", logo: null },
    { name: "To be announced soon", logo: null },
    { name: "To be announced soon", logo: null },
  ];

  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <section className="py-12 border-y border-border bg-white overflow-hidden relative">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .pause-on-hover:hover .animate-scroll {
            animation-play-state: paused;
          }
        `}
      </style>
      
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center md:text-left">
        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-gray-400">Our Network & Partners</h3>
      </div>
      
      <div className="relative flex overflow-hidden pause-on-hover">
        <div className="flex whitespace-nowrap animate-scroll">
          {duplicatedSponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center px-12 md:px-20 select-none group shrink-0"
            >
              <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-gray-300 opacity-60 hover:text-primary hover:opacity-100 transition-colors duration-500">
                To be announced soon
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorSlider;
