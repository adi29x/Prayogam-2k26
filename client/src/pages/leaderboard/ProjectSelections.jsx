import AnimatedSection from '../../components/animations/AnimatedSection';
import AnimatedText from '../../components/animations/AnimatedText';

const ProjectSelections = () => {
  const categories = [
    {
      title: "Day 1 Selected",
      date: "1 April 2026",
      teams: []
    },
    {
      title: "Day 2 Selected",
      date: "2 April 2026",
      teams: []
    },
    {
      title: "Final Day Selected",
      date: "18 April 2026",
      teams: []
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 md:px-0">
      <div className="text-center mb-16">
        <AnimatedText text="Project Selections" spanText="Selections" spanClass="text-primary" el="h1" className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 uppercase" />
        <AnimatedSection direction="up" delay={0.2}>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-bold uppercase tracking-widest">
            Real-time status of technical projects officially selected for Prayogam 2k26.
          </p>
        </AnimatedSection>
      </div>

      <div className="max-w-6xl mx-auto space-y-12 mb-24">
        {categories.map((cat, idx) => (
          <AnimatedSection key={cat.title} direction="up" delay={idx * 0.1}>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-0.5 flex-1 bg-border" />
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-black uppercase tracking-[0.2em] text-foreground">{cat.title}</h3>
                <span className="text-[10px] font-bold text-primary tracking-widest uppercase mt-1">{cat.date}</span>
              </div>
              <div className="h-0.5 flex-1 bg-border" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cat.teams.length > 0 ? (
                cat.teams.map((team, tIdx) => (
                  <div key={tIdx} className="bg-white border border-border p-6 rounded-3xl hover:border-primary/30 transition-all group">
                    <div className="w-10 h-1 bg-primary mb-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                    <h4 className="text-lg font-black uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">{team.name}</h4>
                    <p className="text-gray-500 text-xs font-bold mb-4 uppercase">{team.leads}</p>
                    <span className={`inline-block px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-widest ${
                      team.status.includes('Gold') ? 'bg-primary text-white shadow-glow' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {team.status}
                    </span>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-12 text-center bg-gray-50/50 rounded-[2rem] border border-dashed border-border">
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest italic">System Update: Selections Pending Analysis.</p>
                </div>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
      
      <div className="max-w-5xl mx-auto mt-12 text-center">
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em]">Selection is based on technical proposal, prototype readiness, and system architecture.</p>
      </div>
    </div>
  );
};

export default ProjectSelections;
