import AnimatedSection from '../../components/animations/AnimatedSection';
import AnimatedText from '../../components/animations/AnimatedText';

const ReelCompetition = () => {
  const data = [];

  return (
    <div className="min-h-screen py-12 px-4 md:px-0">
      <div className="text-center mb-16">
        <AnimatedText text="Reel Making Competition 2k26" spanText="Leaderboard" spanClass="text-primary" el="h1" className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 uppercase" />
        <AnimatedSection direction="up" delay={0.2}>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-bold uppercase tracking-widest">
            Creative rankings for top Prayogam reels and short-form content.
          </p>
        </AnimatedSection>
      </div>

      <div className="max-w-5xl mx-auto bg-white border border-border rounded-[2.5rem] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-border">
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 w-24">Rank</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Name</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Views</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-right">Engagement</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item) => (
                  <tr 
                    key={item.rank} 
                    className={`border-b border-border/50 group hover:bg-gray-50/50 transition-colors ${item.rank === 1 ? 'bg-red-50/30' : ''}`}
                  >
                    <td className="px-8 py-6 font-black text-xl italic tracking-tighter w-24 relative">
                      {item.rank === 1 && <span className="text-2xl mr-2">🥇</span>}
                      {item.rank === 2 && <span className="text-xl mr-2">🥈</span>}
                      {item.rank === 3 && <span className="text-xl mr-2">🥉</span>}
                      {item.rank > 3 && <span className="text-gray-300 ml-1">#{item.rank}</span>}
                    </td>
                    <td className="px-8 py-6 font-bold text-foreground">
                      <span className="text-base group-hover:text-primary transition-colors">{item.name}</span>
                    </td>
                    <td className="px-8 py-6 text-sm font-black text-gray-400 uppercase tracking-widest">{item.views}</td>
                    <td className="px-8 py-6 text-right font-black text-primary tracking-tight text-lg">{item.engagement}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-8 py-20 text-center">
                    <p className="text-sm font-black text-gray-300 uppercase tracking-[0.3em]">System Update: No Data Finalized Yet.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto mt-12 text-center">
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em]">Views and engagement are verified via Instagram Insights on a weekly basis.</p>
      </div>
    </div>
  );
};

export default ReelCompetition;
