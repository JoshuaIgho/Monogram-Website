import { motion } from 'motion/react';
import { PortfolioItem, ProcessStep, ViewType } from '../types';
import { portfolioItems, processSteps, clientTestimonials } from '../data';
import { ArrowDown, ArrowUpRight, Award, Compass, Heart, MessageSquare, Quote, Scale, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HomeViewProps {
  onViewChange: (view: ViewType) => void;
  onSelectCaseStudy: (item: PortfolioItem) => void;
}

export default function HomeView({ onViewChange, onSelectCaseStudy }: HomeViewProps) {
  const [activeProcessStep, setActiveProcessStep] = useState<number>(0);
  const [currentStatInView, setCurrentStatInView] = useState([0, 0, 0, 0]);

  // Handle subtle counter count-up when the section loaded
  useEffect(() => {
    const targets = [350, 15, 80, 12000];
    const duration = 2000;
    const steps = 50;
    const intervalTime = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      if (stepCount <= steps) {
        setCurrentStatInView(
          targets.map((target) => Math.floor((target / steps) * stepCount))
        );
      } else {
        setCurrentStatInView(targets);
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const handleCaseStudyClick = (item: PortfolioItem) => {
    onSelectCaseStudy(item);
    onViewChange('casestudy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full relative overflow-hidden" id="home-view-container">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden" id="hero-section">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20 py-12">
          
          {/* Left: Headline & Subheading */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-luxury-gold flex items-center">
                <span className="w-2 h-2 rounded-full bg-luxury-gold mr-3 animate-pulse" />
                ESTABLISHED MMXXV • BOUTIQUE DESIGN
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#0B0B0B] tracking-normal leading-[1.1] font-bold">
                Crafting Timeless <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B0B0B] via-[#555555] to-luxury-gold gold-glow">
                  Monograms
                </span> for <br/>
                Modern Legacies
              </h1>
            </motion.div>
 
             <motion.p
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="text-base sm:text-lg text-zinc-700 font-sans leading-relaxed max-w-xl"
             >
               Every mark tells a story. Every design leaves a legacy. We combine ancient mathematical drafting with premium materials to forge elite, custom emblems.
             </motion.p>
 
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
              >
                <button
                  onClick={() => {
                    onViewChange('portfolio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center justify-center space-x-3 text-xs uppercase tracking-[0.25em] text-white bg-[#0B0B0B] hover:bg-luxury-gold hover:text-[#0B0B0B] transition-all duration-300 px-8 py-4 font-semibold cursor-pointer rounded-none border border-transparent min-h-[48px] focus:outline-none"
                  id="hero-view-portfolio-btn"
                >
                  <span>View Portfolio</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                
                <button
                  onClick={() => {
                    onViewChange('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center justify-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#0B0B0B] hover:text-white bg-transparent hover:bg-[#0B0B0B] border border-[#0B0B0B] transition-all duration-300 px-8 py-4 font-semibold cursor-pointer rounded-none min-h-[48px] focus:outline-none"
                  id="hero-start-project-btn"
                >
                  <span>Start a Project</span>
                </button>
              </motion.div>
           </div>
 
           {/* Right: Giant Luxury Monogram Artwork */}
           <div className="lg:col-span-5 flex justify-center lg:justify-end items-center mt-12 lg:mt-0 relative">
             <motion.div
               initial={{ opacity: 0, scale: 0.85 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, type: 'spring', stiffness: 40 }}
               className="relative w-64 h-64 xs:w-72 xs:h-72 sm:w-96 sm:h-96 flex items-center justify-center"
             >
               {/* Spinning luxury outer orbit */}
               <div className="absolute inset-0 rounded-full border border-dashed border-zinc-300/60 animate-[spin_120s_linear_infinite]" />
               <div className="absolute inset-4 rounded-full border border-zinc-200/80 animate-[spin_60s_linear_infinite]" />
               <div className="absolute inset-10 rounded-full border border-zinc-200/50 flex items-center justify-center">
                 <div className="w-[1px] h-[75%] bg-gradient-to-b from-[#D4AF37]/20 via-transparent to-[#D4AF37]/20 rotate-45" />
                 <div className="w-[1px] h-[75%] bg-gradient-to-b from-[#D4AF37]/20 via-transparent to-[#D4AF37]/20 -rotate-45" />
               </div>
 
               {/* The Actual Centered Monogram Vector Showcase */}
               <div className="relative z-10 w-44 h-44 xs:w-48 xs:h-48 sm:w-64 sm:h-64 rounded-full bg-white/90 border border-zinc-200 shadow-xl shadow-zinc-250/20 backdrop-blur-md flex items-center justify-center p-6 xs:p-8 group interactive">
                 <svg
                   viewBox="0 0 200 200"
                   className="w-full h-full text-luxury-gold transition-transform duration-700 ease-out group-hover:scale-105"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path
                     d="M 50,40 Q 100,50 150,40 Q 140,100 150,160 Q 100,150 50,160 Q 60,100 50,40 Z"
                     fill="none"
                     stroke="#D4AF37"
                     strokeWidth="1.5"
                     strokeDasharray="4 2"
                     opacity="0.3"
                   />
                   {/* Styled central M and D ligature */}
                   <path
                     d="M 60,150 L 60,50 L 100,120 L 140,50 L 140,150"
                     fill="none"
                     stroke="#D4AF37"
                     strokeWidth="3.5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="animate-pulse"
                   />
                   <path
                     d="M 60,50 C 130,20 180,60 140,120 C 120,140 100,150 80,150"
                     fill="none"
                     stroke="#0B0B0B"
                     strokeWidth="2.5"
                     strokeLinecap="round"
                   />
                   <circle cx="100" cy="120" r="4" fill="#D4AF37" />
                   <circle cx="60" cy="50" r="3" fill="#0B0B0B" />
                   <circle cx="140" cy="50" r="3" fill="#0B0B0B" />
                 </svg>
               </div>

              {/* Floating aesthetic labels */}
              <span className="absolute bottom-4 left-4 font-mono text-[9px] tracking-widest text-[#D4AF37]/60">GOLD-RATIO DRAFT</span>
              <span className="absolute top-4 right-4 font-mono text-[9px] tracking-widest text-[#D4AF37]/60">MATHEMATICAL GRID</span>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-20">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-500">Scroll Story</span>
          <ArrowDown className="w-3.5 h-3.5 text-luxury-gold animate-bounce" />
        </div>
      </section>

      {/* 2. STORYTELLING SECTION */}
      <section className="py-24 px-6 bg-secondary-dark relative" id="storytelling-section">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Magazine layout columns */}
            <div className="lg:col-span-5 space-y-8 relative">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-luxury-gold block">
                CHAPTER I / HISTORIC FOCUS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B0B0B] tracking-tight leading-tight font-bold">
                The Art Behind <br/>
                Every Mark.
              </h2>
              
              <div className="border-l border-luxury-gold/50 pl-6 space-y-4">
                <p className="text-sm font-sans text-zinc-800 leading-relaxed italic">
                  "A monogram is not a collection of letters. It is a marriage of lines, an extraction of values, and a physical sigil of legacy designed to outlive its bearer."
                </p>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">— Tobi Adesina, Founder</p>
              </div>
            </div>

            {/* Right: Asymmetrical narrative content */}
            <div className="lg:col-span-7 space-y-6 text-zinc-700 font-sans text-sm leading-relaxed">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-[#0B0B0B] text-base font-serif font-semibold tracking-wider">Identity & Heritage</h3>
                  <p>
                    Throughout history, the elite marked their precious textiles, stone fortresses, and diplomatic letters with personalized monograms. We elevate this heritage, designing custom cyphers that encapsulate centuries of familial dignity in a pure, modern formulation.
                  </p>
                </div>
                <div className="space-y-4 pt-4 sm:pt-0">
                  <h3 className="text-[#0B0B0B] text-base font-serif font-semibold tracking-wider">Meticulous Craftsmanship</h3>
                  <p>
                    Every vector, ligature, and terminal curve is hand-crafted. Our process values deliberate slowness over high-speed mass production. We draft sketches on quality heavy paper and analyze them through classic mirrors to guarantee spatial balance before editing digitally.
                  </p>
                </div>
              </div>
              
              <div className="pt-8 border-t border-zinc-300 flex flex-col sm:flex-row items-center justify-between gap-6">
                <p className="text-xs font-mono tracking-wider text-zinc-500">
                  OUR CODE: TIMELESSNESS IS THE ULTIMATE LEVEL OF CONVICTION.
                </p>
                <button
                  onClick={() => {
                    onViewChange('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#0B0B0B] hover:text-luxury-gold transition-colors font-medium cursor-pointer"
                  id="story-read-chronicle-btn"
                >
                  <span>Learn Our Philosophy</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. ABOUT PREVIEW SECTION (SPLIT SCREEN & STATS) */}
      <section className="py-24 px-6 bg-primary-dark border-t border-zinc-200" id="about-preview-section">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-luxury-gold/5 -translate-x-3 translate-y-3 pointer-events-none border border-luxury-gold/20" />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByazScbuf-auAC3ecexMuzsnT648F8FvdXuMe5jx2sHO63r7DKpTaxFJTpSkgtcBz6fvxFccypxQYmzcs2KnvseQYeBRlRAw4xS8ydQUdeAviPsxXHUjytOV_4vfJrMIqPQvpgvvs64Q-2wym7ruKJLWcoplQ0k_iogc6QbOtzmkoN1mqG3B8LjjxH4Jo06VuQSgES30tulE5eaoNnRoI91i4AiCPoJMEsQK5aNKjnyc8ILlH8hXjcUbALjCTZKrzsKXtNSItGoWbH"
                alt="Tobi Adesina working in luxury sketching workshop"
                className="w-full object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border border-zinc-200"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 bg-primary-dark/95 backdrop-blur-md px-4 py-2 border border-zinc-200 font-mono text-[9px] uppercase tracking-[0.25em] text-luxury-gold">
                THE FOUNDER'S WORKSPACE
              </div>
            </div>

            {/* Right Meta Column & Counters */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-luxury-gold block">
                  ESTABLISHED IN LAGOS • CRAFTED FOR PRESTIGE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#0B0B0B] font-semibold leading-tight">
                  A Relentless Quest for Aesthetic Harmony.
                </h2>
                <p className="text-zinc-700 text-sm leading-relaxed font-sans">
                  Founded by Tobi Adesina, Monogram Design Studio represents the perfect cross-over of fine-art penmanship and precise visual geometry. By strictly limiting our bookings to just 24 bespoke commissions a year, we dedicate absolute concentration to designing emblems that resonate with authority and heritage.
                </p>
              </div>

              {/* Premium Animated Counters */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-8 pt-6 border-t border-zinc-200">
                <div className="space-y-1">
                  <p className="font-serif text-3xl sm:text-4xl text-luxury-gold font-bold tracking-tight">
                    {currentStatInView[0]}+
                  </p>
                  <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest leading-normal">
                    Custom Designs Created
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-serif text-3xl sm:text-4xl text-[#0B0B0B] font-bold tracking-tight">
                    {currentStatInView[1]}+
                  </p>
                  <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest leading-normal">
                    Years of Meticulous Craft
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-serif text-3xl sm:text-4xl text-[#0B0B0B] font-bold tracking-tight">
                    {currentStatInView[2]}+
                  </p>
                  <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest leading-normal">
                    Elite Entities Empowered
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-serif text-3xl sm:text-4xl text-luxury-gold font-bold tracking-tight">
                    {Math.round(currentStatInView[3] / 1000)}k+
                  </p>
                  <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest leading-normal">
                    Wax Hot-seals Stamped
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    onViewChange('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-white bg-[#0B0B0B] hover:bg-luxury-gold hover:text-[#0B0B0B] transition-colors duration-300 px-6 py-4 font-semibold cursor-pointer rounded-none"
                  id="about-preview-read-story-btn"
                >
                  <span>Explore Studio Journey</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. FEATURED PORTFOLIO */}
      <section className="py-24 px-6 bg-[#EFECE6] relative" id="featured-portfolio-section">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-luxury-gold block">
                MASTER CURATIONS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B0B0B] font-bold tracking-tight">
                Selected Commissions
              </h2>
            </div>
            <button
              onClick={() => {
                onViewChange('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] hover:text-[#0B0B0B] transition-colors duration-200 mt-6 md:mt-0 font-semibold cursor-pointer focus:outline-none"
              id="view-all-creations-btn"
            >
              Examine Full Archive (6) →
            </button>
          </div>

          {/* Grid of outstanding works */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 snap-x snap-mandatory scrollbar-none pb-4 md:pb-0">
            {portfolioItems.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative flex flex-col bg-primary-dark border border-zinc-200/80 overflow-hidden cursor-pointer flex-shrink-0 w-[85%] xs:w-[80%] md:w-auto snap-center md:snap-none"
                onClick={() => handleCaseStudyClick(item)}
                id={`featured-card-${item.id}`}
              >
                {/* Image Wrap */}
                <div className="relative overflow-hidden aspect-[4/3] bg-[#121212]">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 duration-700 ease-out grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle category tag top right */}
                  <span className="absolute top-4 right-4 bg-primary-dark/95 backdrop-blur-md px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-[#D4AF37] z-20 border border-zinc-200">
                    {item.category}
                  </span>
                </div>

                {/* Info block */}
                <div className="p-6 flex flex-col flex-grow justify-between bg-primary-dark z-20 relative">
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] text-zinc-500 tracking-[0.2em]">{item.client} • {item.year}</span>
                    <h3 className="font-serif text-xl text-[#0B0B0B] font-medium group-hover:text-luxury-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-zinc-700 text-xs font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-zinc-500 group-hover:text-luxury-gold transition-colors">
                    <span>Examine Case Presentation</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. PROCESS SECTION (INTERACTIVE SLIDER) */}
      <section className="py-24 px-6 bg-primary-dark border-t border-zinc-200" id="timeline-process-section">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center space-y-4 mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-luxury-gold flex items-center justify-center">
              <Compass className="w-4 h-4 mr-2" />
              PEDIGREE STEPS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B0B0B] font-bold tracking-tight">
              A Line of Pure Intention
            </h2>
            <p className="text-zinc-700 text-sm max-w-xl mx-auto font-sans leading-relaxed">
              Our unique five-stage signature creation trajectory guarantees mathematical grace combined with historical exclusivity.
            </p>
          </div>

          {/* Core Interactive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Timeline Steps Nav */}
            <div className="lg:col-span-5 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-4 lg:space-y-4 lg:gap-0 scrollbar-none pb-4 lg:pb-0 snap-x snap-mandatory min-w-full">
              {processSteps.map((step, idx) => (
                <button
                  key={step.number}
                  onClick={() => setActiveProcessStep(idx)}
                  className={`text-left p-5 sm:p-6 transition-all duration-300 border focus:outline-none cursor-pointer flex items-start space-x-4 sm:space-x-6 flex-shrink-0 w-[80%] xs:w-[70%] sm:w-[52%] lg:w-full snap-center lg:snap-none min-h-[48px] ${
                    activeProcessStep === idx
                      ? 'bg-white border-luxury-gold text-[#0B0B0B] shadow-md'
                      : 'bg-transparent border-zinc-200 hover:border-zinc-300 text-zinc-600'
                  }`}
                  id={`process-button-${step.number}`}
                >
                  <span className={`font-mono text-lg sm:text-xl ${activeProcessStep === idx ? 'text-luxury-gold' : 'text-zinc-400'}`}>
                    {step.number}
                  </span>
                  <div className="space-y-1">
                    <h3 className={`font-serif text-sm sm:text-base font-semibold ${activeProcessStep === idx ? 'text-[#0B0B0B]' : 'text-zinc-700'}`}>
                      {step.title}
                    </h3>
                    <p className="text-xs text-zinc-500 font-sans">{step.description}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Column: Narrative Detail Display */}
            <div className="lg:col-span-7 bg-white/80 border border-zinc-200 p-8 sm:p-12 min-h-[380px] flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 p-4 font-mono text-[8rem] text-zinc-350/20 leading-none select-none font-bold">
                {processSteps[activeProcessStep].number}
              </div>

              <div className="space-y-6 relative z-10">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-luxury-gold">
                  STEP {processSteps[activeProcessStep].number} IN VIEW
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#0B0B0B] font-medium">
                  {processSteps[activeProcessStep].title}
                </h3>
                <p className="text-zinc-700 text-sm font-sans leading-relaxed">
                  {processSteps[activeProcessStep].detail}
                </p>
              </div>

              <div className="pt-8 border-t border-zinc-200 mt-8 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-zinc-500 font-mono text-[10px] tracking-wider">
                  <Scale className="w-4 h-4 text-luxury-gold" />
                  <span>CRAFT QUALITY CONTROL CERTIFIED</span>
                </div>
                <button
                  onClick={() => {
                    onViewChange('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs uppercase tracking-[0.2em] text-[#0B0B0B] hover:text-luxury-gold font-medium cursor-pointer"
                  id={`process-inquire-btn-${processSteps[activeProcessStep].number}`}
                >
                  Inquire For This Service →
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="py-24 px-6 bg-secondary-dark relative" id="testimonials-section">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center space-y-4 mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-luxury-gold block">
              PATRON TESTIMONIALS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0B0B0B] font-semibold tracking-tight">
              In Words of Our Clients
            </h2>
          </div>

          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 snap-x snap-mandatory scrollbar-none pb-4 md:pb-0">
            {clientTestimonials.map((t, index) => (
              <div
                key={index}
                className="bg-primary-dark/95 border border-zinc-250 p-6 sm:p-8 flex flex-col justify-between space-y-6 sm:space-y-8 relative shadow-md flex-shrink-0 w-[85%] sm:w-[60%] md:w-auto snap-center md:snap-none"
                id={`testimonial-card-${index}`}
              >
                <div className="absolute top-6 right-6 text-zinc-200">
                  <Quote className="w-12 h-12" />
                </div>
                
                <p className="text-zinc-700 text-sm leading-relaxed italic relative z-10 font-sans">
                  "{t.quote}"
                </p>

                <div className="flex items-center space-x-4 pt-6 border-t border-zinc-200">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover filter grayscale border border-zinc-200"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-[#0B0B0B] font-serif text-sm font-semibold">{t.author}</h4>
                    <p className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">{t.role}, {t.brand}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CLIENT TRUST SECTION */}
      <section className="py-16 px-6 bg-primary-dark border-t border-zinc-200 select-none" id="client-trust-section">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-500 text-center mb-10">
            ENDORSED BY LEADING MAISON LABELS & PRIVATE FAMILIES
          </p>
          
          <div className="flex flex-wrap items-center justify-around gap-8 opacity-60 grayscale contrast-125">
            {['AURELIA ESTATE', 'VELVET COUTURE', 'MONOLITH PRIVATE', 'SOVEREIGN SPIRITS', 'LUMIERE NUPTIALS'].map((brand) => (
              <span
                key={brand}
                className="font-serif text-xs md:text-sm tracking-[0.4em] text-[#0B0B0B] hover:text-luxury-gold cursor-default duration-300 font-bold"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. EMOTIONAL CTA SECTION */}
      <section className="py-28 px-6 bg-primary-dark border-t border-zinc-200 relative" id="cta-section">
        <div className="max-w-4xl mx-auto text-center space-y-10 relative z-20">
          
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-luxury-gold flex items-center justify-center">
            <Award className="w-4 h-4 mr-2" />
            SECURE A PRIVATE BOOKING
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#0B0B0B] leading-tight tracking-normal font-bold">
            Let’s Create Something <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B0B0B] via-luxury-gold to-[#0B0B0B] py-1">
              Timeless Together
            </span>
          </h2>
          
          <p className="text-sm text-zinc-700 font-sans max-w-xl mx-auto leading-relaxed">
            Due to our commitment to absolute detail and traditional penmanship, Tobi Adesina maintains a strict allocation schedule of only 24 large commissions per calendar year. Request a private review of your requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                onViewChange('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto flex items-center justify-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#0B0B0B] bg-luxury-gold hover:bg-[#0B0B0B] hover:text-white transition-colors duration-300 px-8 py-4 font-semibold cursor-pointer rounded-none"
              id="cta-contact-btn"
            >
              <span>Submit Project Proposal</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#0B0B0B] hover:text-white bg-secondary-dark hover:bg-[#0B0B0B] border border-zinc-300 transition-all duration-300 px-8 py-4 font-semibold cursor-pointer rounded-none"
              id="cta-whatsapp-link"
            >
              <MessageSquare className="w-4 h-4 text-luxury-gold" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>

          <p className="text-[10px] font-mono text-emerald-500/80 uppercase tracking-widest pt-2">
            ● Atelier current booking status: Slots open for Q3 & Q4 2025
          </p>

        </div>
      </section>

    </div>
  );
}
