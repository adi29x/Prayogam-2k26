import { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { systemAudio } from './utils/soundManager';
import Preloader from './components/common/Preloader';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import CustomCursor from './components/common/CustomCursor';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const Events = lazy(() => import('./pages/Events'));
const EventDetail = lazy(() => import('./pages/EventDetail'));
const Passes = lazy(() => import('./pages/Passes'));
const Team = lazy(() => import('./pages/Team'));
const About = lazy(() => import('./pages/About'));
const Schedule = lazy(() => import('./pages/Schedule'));
const Sponsors = lazy(() => import('./pages/Sponsors'));
const ContactSponsors = lazy(() => import('./pages/ContactSponsors'));
const Contact = lazy(() => import('./pages/Contact'));
const Announcements = lazy(() => import('./pages/Announcements'));
const Prizes = lazy(() => import('./pages/Prizes'));
const LeaderboardPage = lazy(() => import('./pages/Leaderboard'));

// Event Detail Pages
const CashQuestEventPage = lazy(() => import('./pages/events/CashQuest2026'));
const InfluencerClashEventPage = lazy(() => import('./pages/events/InfluencerClash'));
const QRHuntEventPage = lazy(() => import('./pages/events/QRHunt'));
const ReelCompetitionEventPage = lazy(() => import('./pages/events/ReelCompetition'));
const MoneyShotEventPage = lazy(() => import('./pages/events/MoneyShotGame'));

// Leaderboard Pages
const CashQuestLeaderboard = lazy(() => import('./pages/leaderboard/CashQuest2026'));
const InfluencerClashLeaderboard = lazy(() => import('./pages/leaderboard/InfluencerClash'));
const ReelCompetitionLeaderboard = lazy(() => import('./pages/leaderboard/ReelCompetition'));
const QRHuntLeaderboard = lazy(() => import('./pages/leaderboard/QRHunt'));
const MoneyShotLeaderboard = lazy(() => import('./pages/leaderboard/MoneyShotGame'));
const ProjectSelectionsLeaderboard = lazy(() => import('./pages/leaderboard/ProjectSelections'));

const PageWrapper = ({ children }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  return (
    <motion.div
      initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: isMobile ? -10 : -30 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} 
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Global UI Interaction Sounds
    const handleGlobalClick = (e) => {
      const target = e.target.closest('button, a, .cursor-pointer');
      if (target) {
        systemAudio.playClick();
      }
    };
    document.addEventListener('click', handleGlobalClick);

    // Initial Preloader Timeout
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
      clearTimeout(timer);
    };
  }, []);

  if (loading) return <Preloader />;

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 mt-20">
        <AnimatePresence mode="wait">
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-foreground font-semibold">Loading...</div>}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/events" element={<PageWrapper><Events /></PageWrapper>} />
              
              {/* Specialized Event Pages */}
              <Route path="/events/cash-quest-2k26" element={<PageWrapper><CashQuestEventPage /></PageWrapper>} />
              <Route path="/events/influencer-clash" element={<PageWrapper><InfluencerClashEventPage /></PageWrapper>} />
              <Route path="/events/qr-hunt-2k26" element={<PageWrapper><QRHuntEventPage /></PageWrapper>} />
              <Route path="/events/reel-competition" element={<PageWrapper><ReelCompetitionEventPage /></PageWrapper>} />
              <Route path="/events/money-shot-game" element={<PageWrapper><MoneyShotEventPage /></PageWrapper>} />
              
              {/* Generic Event Page */}
              <Route path="/events/:eventName" element={<PageWrapper><EventDetail /></PageWrapper>} />
              
              <Route path="/passes" element={<PageWrapper><Passes /></PageWrapper>} />
              <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/schedule" element={<PageWrapper><Schedule /></PageWrapper>} />
              <Route path="/sponsors" element={<PageWrapper><Sponsors /></PageWrapper>} />
              <Route path="/contact-sponsors" element={<PageWrapper><ContactSponsors /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              
              {/* Leaderboard Routes */}
              <Route path="/leaderboard" element={<PageWrapper><LeaderboardPage /></PageWrapper>} />
              <Route path="/leaderboard/cash-quest-2k26" element={<PageWrapper><CashQuestLeaderboard /></PageWrapper>} />
              <Route path="/leaderboard/influencer-clash" element={<PageWrapper><InfluencerClashLeaderboard /></PageWrapper>} />
              <Route path="/leaderboard/reel-competition" element={<PageWrapper><ReelCompetitionLeaderboard /></PageWrapper>} />
              <Route path="/leaderboard/qr-hunt-2k26" element={<PageWrapper><QRHuntLeaderboard /></PageWrapper>} />
              <Route path="/leaderboard/money-shot-game" element={<PageWrapper><MoneyShotLeaderboard /></PageWrapper>} />
              <Route path="/leaderboard/project-selections" element={<PageWrapper><ProjectSelectionsLeaderboard /></PageWrapper>} />
              
              <Route path="/announcements" element={<PageWrapper><Announcements /></PageWrapper>} />
              <Route path="/prizes" element={<PageWrapper><Prizes /></PageWrapper>} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default App;
