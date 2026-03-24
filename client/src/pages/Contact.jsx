import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from '../components/common/SocialIcons';
import AnimatedSection from '../components/animations/AnimatedSection';
import AnimatedText from '../components/animations/AnimatedText';

const Contact = () => {
  return (
    <div className="min-h-screen py-12 px-4 md:px-0">
      
      {/* HERO SECTION */}
      <div className="text-center mb-24">
        <AnimatedText text="CONTACT THE SYSTEM" spanText="THE SYSTEM" spanClass="text-primary" el="h1" className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase" />
        <AnimatedSection direction="up" delay={0.2}>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium uppercase tracking-wide">
            Have questions, partnerships, or ideas? Reach out to the Prayogam Core Team.
          </p>
        </AnimatedSection>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* LEFT COLUMN: INFO & LOCATION */}
        <div className="lg:col-span-1 space-y-8">
          <AnimatedSection direction="left" className="bg-white border border-border p-8 rounded-3xl shadow-sm">
            <h3 className="text-xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
              <MapPin size={24} className="text-primary" />
              Location
            </h3>
            <div className="space-y-2">
              <p className="font-bold text-foreground">Room No. 147, Academic Block</p>
              <p className="text-gray-500 font-medium">Poornima University</p>
              <p className="text-gray-400 text-sm italic mt-4">The headquarters of the 2k26 operation.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.1} className="bg-foreground text-white p-8 rounded-3xl overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
            <h3 className="text-xl font-black uppercase tracking-tight mb-8 relative z-10 flex items-center gap-3">
                <MessageSquare size={24} className="text-primary" />
                Connect
            </h3>
            <div className="flex gap-4 relative z-10">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-primary transition-all duration-300">
                <InstagramIcon size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-primary transition-all duration-300">
                <YoutubeIcon size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-primary transition-all duration-300">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* RIGHT COLUMN: CORE CONTACTS */}
        <div className="lg:col-span-2 space-y-12">
          <AnimatedSection direction="up" className="bg-gray-50 border border-border rounded-[2.5rem] p-8 md:p-12">
            <h2 className="text-2xl font-black uppercase tracking-tight mb-12 flex items-center gap-4">
               <div className="w-2 h-2 rounded-full bg-primary" />
               Core Response Team
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "Aditya Kapoor", role: "Chief Event Director", phone: "7599666728", email: "2023csaditya14648@poornima.edu.in" },
                { name: "Himanshu Sharma", role: "Event Director", phone: "6377648387", email: "2024cshimanshu16902@poornima.edu.in" },
                { name: "Kanishtha Madaan", role: "Deputy Event Director", phone: "7229908173", email: "2025bbakanishtha21962@poornima.edu.in" },
                { name: "Himanshu Sharma", role: "Deputy Event Director", phone: "9799633969", email: "2025btechaidshimanshu24533@poornima.edu.in" }
              ].map((c, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:border-primary/30 transition-all flex flex-col group">
                  <h3 className="text-xl font-black tracking-tight mb-1 transition-colors group-hover:text-primary">{c.name}</h3>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-6">{c.role}</p>
                  <div className="space-y-3 mt-auto pt-4 border-t border-gray-50">
                    <a href={`tel:+91${c.phone}`} className="flex items-center gap-3 text-gray-500 hover:text-foreground transition-colors font-medium text-xs">
                      <Phone size={14} className="text-primary"/> +91 {c.phone}
                    </a>
                    <a href={`mailto:${c.email}`} className="flex items-center gap-3 text-gray-500 hover:text-foreground transition-colors font-medium text-xs break-all">
                      <Mail size={14} className="text-primary shrink-0"/> {c.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2} className="p-8 md:p-12 bg-white border border-border rounded-[2.5rem]">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Contact Departments</h2>
              <p className="text-gray-500 font-medium">Reach out to the right team for quick support.</p>
              <div className="w-12 h-1 bg-primary mx-auto mt-4" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  dept: "Tech Support", 
                  name: "Vikas Jangid", 
                  email: "2025ecsvikas23976@poornima.edu.in" 
                },
                { 
                  dept: "Registrations", 
                  name: "Piyush Agar", 
                  email: "2024btechaidspiyush19641@poornima.edu.in" 
                },
                { 
                  dept: "Sponsorship", 
                  name: "Aman Nehra", 
                  email: "2025btechaidsaman20789@poornima.edu.in" 
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="bg-white border border-border p-6 rounded-2xl flex flex-col hover:border-primary transition-colors duration-300"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3">
                    {item.dept}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-1">{item.name}</h3>
                  <a 
                    href={`mailto:${item.email}`} 
                    className="text-xs text-gray-500 hover:text-primary transition-colors truncate block"
                  >
                    {item.email}
                  </a>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

      </div>
    </div>
  );
};

export default Contact;
