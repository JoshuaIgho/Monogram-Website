import { useState } from 'react';
import { ViewType } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

export default function Header({ currentView, onViewChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; view: ViewType }[] = [
    { label: 'The Studio', view: 'home' },
    { label: 'Philosophy', view: 'about' },
    { label: 'Master Curations', view: 'portfolio' },
    { label: 'Tactile Gallery', view: 'gallery' },
    { label: 'Get in Touch', view: 'contact' },
  ];

  const handleNavClick = (view: ViewType) => {
    onViewChange(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-zinc-900/40 bg-primary-dark/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Left: Brand Identity */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex flex-col items-start focus:outline-none group cursor-pointer text-left"
          id="header-brand-logo"
        >
          <span className="font-serif text-xl md:text-2xl tracking-widest text-[#0B0B0B] group-hover:text-luxury-gold transition-colors duration-300">
            MONOGRAM
          </span>
          <span className="font-mono text-[9px] tracking-[0.3em] text-zinc-500 uppercase mt-0.5">
            Design Studio • Paris
          </span>
        </button>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = currentView === link.view || (link.view === 'portfolio' && currentView === 'casestudy');
            return (
              <button
                key={link.view}
                onClick={() => handleNavClick(link.view)}
                className={`relative font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-300 cursor-pointer pb-1 focus:outline-none ${
                  isActive ? 'text-luxury-gold font-medium' : 'text-zinc-600 hover:text-[#0B0B0B]'
                }`}
                id={`nav-${link.view}`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-gold origin-left" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Consultation CTA (Visible on Desktop) */}
        <div className="hidden lg:block">
          <button
            onClick={() => handleNavClick('contact')}
            className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#0B0B0B] bg-luxury-gold hover:bg-white transition-all duration-300 px-6 py-3 font-medium active:scale-95 cursor-pointer rounded-none border border-transparent hover:border-luxury-gold"
            id="header-cta"
          >
            <span>Inquire Studio</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        {/* Right: Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-zinc-800 hover:text-luxury-gold p-3.5 transition-colors duration-200 cursor-pointer focus:outline-none rounded-none"
          aria-label="Toggle navigation menu"
          id="header-mobile-toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Curtain Slide-in Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark blur-backdrop filter overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 h-screen w-screen bg-[#0B0B0B]/40 backdrop-blur-sm z-50 lg:hidden"
              id="mobile-drawer-backdrop"
            />

            {/* Premium Sliding Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 h-screen w-[85%] sm:w-[420px] bg-[#F7F5F2] border-l border-zinc-200 shadow-[0_0_50px_rgba(0,0,0,0.15)] z-50 flex flex-col justify-between p-8 sm:p-12 lg:hidden font-sans"
              id="mobile-drawer-panel"
            >
              {/* Drawer Top Header Row */}
              <div className="flex items-center justify-between pb-6 border-b border-zinc-200">
                <div className="flex flex-col">
                  <span className="font-serif text-lg tracking-widest text-[#0B0B0B]">MONOGRAM</span>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-zinc-500 uppercase mt-0.5">Design Studio</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 bg-white border border-zinc-200 text-zinc-600 hover:text-luxury-gold focus:outline-none rounded-none cursor-pointer transition-colors"
                  aria-label="Close mobile navigation menu"
                  id="mobile-drawer-close-btn"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Menu List */}
              <nav className="flex flex-col space-y-2 py-8 my-auto h-full overflow-y-auto max-h-[60vh] justify-center">
                {navLinks.map((link, index) => {
                  const isActive = currentView === link.view || (link.view === 'portfolio' && currentView === 'casestudy');
                  return (
                    <motion.button
                      key={link.view}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                      onClick={() => handleNavClick(link.view)}
                      className={`text-left font-serif text-2xl sm:text-3xl tracking-wide py-4 border-b border-zinc-100 flex items-center justify-between group cursor-pointer focus:outline-none w-full min-h-[48px] ${
                        isActive ? 'text-luxury-gold font-semibold' : 'text-zinc-650 hover:text-[#0B0B0B]'
                      }`}
                      id={`mobile-nav-${link.view}`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className={`w-5 h-5 transition-all duration-300 ${isActive ? 'text-luxury-gold opacity-100 translate-x-0' : 'text-zinc-400 opacity-60 group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
                    </motion.button>
                  );
                })}
              </nav>

              {/* Contact / Inquire Action coordinates at the bottom */}
              <div className="pt-6 border-t border-zinc-200 space-y-4">
                <span className="font-mono text-[9px] tracking-[0.25em] text-zinc-500 uppercase block">
                  PARIS • NEW YORK • SOHO
                </span>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full h-14 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#0B0B0B] bg-luxury-gold hover:bg-[#0B0B0B] hover:text-white px-6 font-semibold transition-all duration-300 cursor-pointer rounded-none shadow-md"
                  id="mobile-drawer-cta"
                >
                  <span>Begin Master Commission</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
