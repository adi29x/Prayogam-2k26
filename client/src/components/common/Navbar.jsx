import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { REGISTRATION_LINK } from '../../constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
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

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md pt-3 pb-2 border-b border-primary/10 shadow-sm' : 'bg-white pt-5 pb-3'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="group flex items-center cursor-pointer transition-transform hover:scale-105 active:scale-95">
          <button onClick={() => setIsMenuOpen(false)} className="text-xl md:text-2xl font-black tracking-tighter uppercase flex items-center gap-1">
            <span className="text-foreground">PRAYOGAM</span>
            <span className="text-primary">2K26</span>
          </button>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-[13px] font-bold transition-all duration-300 pb-1 relative group ${
                isActive(link.path) ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
          <a href={REGISTRATION_LINK} target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-black hover:-translate-y-0.5 transition-all ml-4">
            Get Pass
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white flex flex-col items-center justify-center space-y-4 sm:space-y-6 p-6 touch-none">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              onClick={() => setIsMenuOpen(false)} 
              className={`text-2xl sm:text-3xl font-black transition-colors ${
                isActive(link.path) ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a href={REGISTRATION_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="bg-primary text-white text-center rounded-full font-bold w-full max-w-xs mt-4 py-4 text-lg shadow-[0_4px_14px_rgba(255,0,0,0.39)] hover:scale-105 active:scale-95 transition-transform">
            Get Pass
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
