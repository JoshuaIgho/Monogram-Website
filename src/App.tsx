import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioItem, ViewType } from './types';
import { portfolioItems } from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import WebGLCanvas from './components/WebGLCanvas';

// View Components
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import PortfolioView from './components/PortfolioView';
import CaseStudyView from './components/CaseStudyView';
import GalleryView from './components/GalleryView';
import ContactView from './components/ContactView';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<PortfolioItem | null>(null);

  // Default to first portfolio item so case-study view never crashes
  useEffect(() => {
    if (portfolioItems && portfolioItems.length > 0) {
      setSelectedCaseStudy(portfolioItems[0]);
    }
  }, []);

  const handleSelectCaseStudy = (item: PortfolioItem) => {
    setSelectedCaseStudy(item);
  };

  const renderActiveView = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomeView
            onViewChange={setCurrentView}
            onSelectCaseStudy={handleSelectCaseStudy}
          />
        );
      case 'about':
        return <AboutView onViewChange={setCurrentView} />;
      case 'portfolio':
        return (
          <PortfolioView
            onViewChange={setCurrentView}
            onSelectCaseStudy={handleSelectCaseStudy}
          />
        );
      case 'casestudy':
        return (
          <CaseStudyView
            item={selectedCaseStudy}
            onViewChange={setCurrentView}
          />
        );
      case 'gallery':
        return <GalleryView onViewChange={setCurrentView} />;
      case 'contact':
        return <ContactView onViewChange={setCurrentView} />;
      default:
        return (
          <HomeView
            onViewChange={setCurrentView}
            onSelectCaseStudy={handleSelectCaseStudy}
          />
        );
    }
  };

  return (
    <div className="min-h-screen text-[#0B0B0B] selection:bg-luxury-gold selection:text-primary-dark font-sans relative antialiased bg-primary-dark">
      
      {/* 1. Fine High-End Grain Noise Overlay */}
      <div className="noise-overlay" />

      {/* Decorative Background Large Monogram M */}
      <div className="bg-monogram font-serif text-center" id="bg-monogram-watermark">M</div>

      {/* 2. Custom Laser follower Cursor */}
      <CustomCursor />

      {/* 3. Persistent Drifting Gold Dust Canvas Background */}
      <WebGLCanvas />

      {/* 4. Elegant Fixed Header */}
      <Header currentView={currentView} onViewChange={setCurrentView} />

      {/* 5. Main Screen Switcher Wrapper with Animation */}
      <main className="relative z-10 w-full pt-16 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-full"
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 6. Unified Luxury Footer */}
      <Footer onViewChange={setCurrentView} />

    </div>
  );
}
