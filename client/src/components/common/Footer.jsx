import { Link } from 'react-router-dom';
import { Instagram, Youtube, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
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
    { name: 'Announcements', path: '/announcements' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  ];

  return (
    <footer className="bg-foreground text-background py-16 mt-24 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: BRANDING */}
          <div className="space-y-6">
            <Link to="/" className="group inline-block cursor-pointer">
              <h2 className="text-2xl md:text-3xl font-black tracking-widest uppercase transition-colors group-hover:text-primary">
                PRAYOGAM 2K26
              </h2>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Crack the Code. Control the Game. <br/>
              The state's ultimate tech-cultural flagship convergence.
            </p>
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

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h3 className="text-base font-bold mb-6 text-white uppercase tracking-widest border-l-2 border-primary pl-3">System Navigation</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {quickLinks.map((link) => (
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
            <h3 className="text-base font-bold mb-6 text-white uppercase tracking-widest border-l-2 border-primary pl-3">Contact Support</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={16} className="text-primary shrink-0 mt-1" />
                <p className="text-xs leading-relaxed font-medium">
                  IS-2027–2031, Ramchandrapura, Sitapura Extension, Jaipur, Rajasthan – 303905
                </p>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={16} className="text-primary shrink-0" />
                <a href="mailto:hod.1year@poornima.edu.in" className="text-xs font-bold hover:text-primary transition-colors">
                  hod.1year@poornima.edu.in
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={16} className="text-primary shrink-0" />
                <a href="tel:+919826054814" className="text-xs font-bold hover:text-primary transition-colors">
                  +91 98260 54814
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 4: CTA */}
          <div className="flex flex-col justify-start">
            <h3 className="text-base font-bold mb-6 text-white uppercase tracking-widest border-l-2 border-primary pl-3">Enter the System</h3>
            <p className="text-gray-400 text-xs mb-6 font-medium leading-relaxed">
              Secure your unique ID and unlock your entry pass to the most intense tech event of 2026.
            </p>
            <a 
              href={REGISTRATION_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-primary transition-all border border-primary shadow-glow"
            >
              Get Pass
              <ExternalLink size={14} />
            </a>
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
