import React from 'react';

const SponsorSlider = () => {
  const sponsors = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg" },
    { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" },
    { name: "Nvidia", logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" },
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
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="h-8 md:h-12 w-auto grayscale transition-all duration-500 group-hover:grayscale-0 opacity-40 group-hover:opacity-100 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorSlider;
