import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from './SocialIcons';
import { REGISTRATION_LINK } from '../../constants';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Team', path: '/team' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Passes', path: '/passes' },
    { name: 'Prizes', path: '/prizes' },
    { name: 'Leaderboard', path: '/leaderboard' },
    { name: 'Announcements', path: '/announcements' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/pu_incent?igsh=aW54eGs4MjBpbHVz' },
    { name: 'YouTube', icon: YoutubeIcon, href: 'https://youtube.com/@puincent?si=X0RK6p8VOeDbM665' },
    { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://www.linkedin.com/company/puincent/' },
  ];

  return (
    <footer className="bg-foreground text-background py-16 mt-12 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: BRANDING */}
          <div className="space-y-6">
            <Link to="/" className="group inline-block cursor-pointer">
              <h2 className="text-2xl md:text-3xl font-black tracking-widest uppercase transition-colors group-hover:text-primary">
                PRAYOGAM 2K26
              </h2>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium uppercase tracking-tight">
              Crack the Code. Control the Game. <br/>
              The state's ultimate tech-cultural flagship convergence.
            </p>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h3 className="text-base font-bold mb-6 text-white uppercase tracking-widest border-l-2 border-primary pl-3">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {quickLinks.slice(0, 10).map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-primary transition-colors text-xs font-bold uppercase tracking-tighter">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CONTACT INFO */}
          <div className="space-y-6">
            <h3 className="text-base font-bold mb-6 text-white uppercase tracking-widest border-l-2 border-primary pl-3">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={16} className="text-primary shrink-0 mt-1" />
                <p className="text-xs leading-relaxed font-bold uppercase tracking-tight">
                  Poornima University, Sitapura, Jaipur
                </p>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={16} className="text-primary shrink-0" />
                <a href="mailto:hod.1year@poornima.edu.in" className="text-xs font-black hover:text-primary transition-colors uppercase">
                  hod.1year@poornima.edu.in
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 4: CTA + SOCIAL */}
          <div className="flex flex-col justify-start">
            <h3 className="text-base font-bold mb-6 text-white uppercase tracking-widest border-l-2 border-primary pl-3">The System</h3>
            <a 
              href={REGISTRATION_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-primary transition-all border border-primary mb-8 shadow-glow"
            >
              Secure Your Pass
              <ExternalLink size={14} />
            </a>
            
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM: COPYRIGHT */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[10px] gap-4 font-bold uppercase tracking-[0.3em]">
          <p>&copy; 2026 PRAYOGAM CORE TEAM. ALL RIGHTS RESERVED.</p>
          <p>DESIGNED & DEVELOPED BY <span className="text-white font-black ml-1">HEXORA</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
