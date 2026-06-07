import { useState, useRef, useEffect } from 'react';
import { PortfolioItem, ViewType } from '../types';
import { ArrowLeft, Clock, Award, Shield, FileText, ChevronRight } from 'lucide-react';
import { clientTestimonials } from '../data';

interface CaseStudyViewProps {
  item: PortfolioItem | null;
  onViewChange: (view: ViewType) => void;
}

export default function CaseStudyView({ item, onViewChange }: CaseStudyViewProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100 representing percentage of width
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(800);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [item]);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [item]);

  if (!item) {
    return (
      <div className="py-32 text-center text-zinc-500 font-mono">
        <p>No project was loaded. Please return to the portfolio page.</p>
        <button onClick={() => onViewChange('portfolio')} className="mt-4 text-luxury-gold underline">
          Back to Portfolio
        </button>
      </div>
    );
  }

  // Find corresponding testimonial
  const projectTestimonial = clientTestimonials.find(t => t.brand.toLowerCase().includes(item.title.split(' ')[0].toLowerCase()));

  // Drag handlers for Before & After slider
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const positionPercentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(positionPercentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="w-full relative py-20 bg-primary-dark" id="casestudy-view-container">
      
      {/* 1. HERO PREAMBLE */}
      <section className="pt-24 pb-12 px-6 max-w-7xl mx-auto border-b border-zinc-200">
        
        {/* Navigation Action Links */}
        <button
          onClick={() => onViewChange('portfolio')}
          className="flex items-center space-x-2 text-xs font-mono text-zinc-500 hover:text-luxury-gold uppercase tracking-widest pb-8 focus:outline-none cursor-pointer"
          id="casestudy-back-to-portfolio"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-luxury-gold text-xs uppercase tracking-[0.3em] block">
              CASE ARCHIVE // LATEST PRESENTATION
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#0B0B0B] font-bold leading-tight">
              {item.title}
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-2 font-mono text-[11px] text-zinc-500 uppercase tracking-widest leading-loose">
            <div><strong className="text-[#0B0B0B]">Client:</strong> {item.client}</div>
            <div><strong className="text-[#0B0B0B]">Project Year:</strong> {item.year}</div>
            <div><strong className="text-[#0B0B0B]">Category:</strong> {item.category}</div>
          </div>
        </div>
      </section>

      {/* 2. CASE HEADER BANNER */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="w-full aspect-[16/9] overflow-hidden border border-zinc-200 relative">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover filter grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
          <div className="absolute bottom-6 left-6 z-20 font-mono text-[10px] tracking-widest uppercase text-luxury-gold">
            PROJECT OVERVIEW SCREENSHOT
          </div>
        </div>
      </section>

      {/* 3. CASE STATEMENT CHALLENGE & THE PROCESS */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-zinc-200" id="challenge-outcome-blocks">
        
        {/* Left Column: Challenge & Solution */}
        <div className="lg:col-span-7 space-y-12">
          
          <div className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0B0B0B] font-semibold flex items-center">
              <span className="w-1.5 h-6 bg-luxury-gold mr-4 block" />
              The Design Challenge
            </h2>
            <p className="text-zinc-700 font-sans text-sm leading-relaxed">
              {item.challenge || 'Every brand identity deserves a profound, unforgettable signifier. The principal challenge was parsing our client\'s family or corporate heritage markers into a simple geometric layout that scales seamlessly from small stationary templates up to massive office walls and physical steel installations.'}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0B0B0B] font-semibold flex items-center">
              <span className="w-1.5 h-6 bg-luxury-gold mr-4 block" />
              The Creative Solution
            </h2>
            <p className="text-zinc-700 font-sans text-sm leading-relaxed">
              {item.solution || 'Our team formulated a dynamic vector layout pairing classical roman ligatures with contemporary sans-serif math grids. We calibrated line weights specifically for dual embossing, digital application, and wax heat pressing.'}
            </p>
          </div>

        </div>

        {/* Right Column: Execution Services */}
        <div className="lg:col-span-5 bg-white border border-zinc-200 p-8 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-luxury-gold border-b border-zinc-200 pb-4">
              Atelier Services Utilized
            </h3>
            <ul className="space-y-3 font-sans text-sm text-zinc-700">
              {item.services.map((service, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8 border-t border-zinc-200 mt-8 space-y-4 text-zinc-500 font-sans text-xs">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-luxury-gold flex-shrink-0" />
              <span>COMMISSION COMPLIANT WITH DESIGN PATENTS</span>
            </div>
          </div>
        </div>

      </section>

      {/* 4. INTERACTIVE BEFORE & AFTER SLIDER COMPARE */}
      <section className="py-20 px-6 max-w-7xl mx-auto" id="interactive-slider-compare-section">
        <div className="text-center space-y-4 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-luxury-gold block">
            VISUAL METAMORPHOSIS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0B0B0B] font-semibold">
            Draft Sketch vs Tactile Gilding
          </h2>
          <p className="text-zinc-600 font-sans text-sm max-w-lg mx-auto">
            Swipe the center golden bar to view the transition from initial calligraphic pencil-draft to final physically stamped hot-gold embossing.
          </p>
        </div>

        {/* Tactile Slider Container */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          className="slider-container relative w-full aspect-[16/9] border border-zinc-200 cursor-ew-resize overflow-hidden touch-none"
          id="before-after-tactile-slider"
        >
          {/* Before Image (Hand Drawing / Calligraphy) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
            <img
              src={item.beforeImg || "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1200&auto=format&fit=crop"}
              alt="Initial studio calligraphy pencil concept draft"
              className="w-full h-full object-cover filter sepia grayscale contrast-125"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1.5 font-mono text-[9px] text-zinc-400 tracking-wider">
              STAGE 01: INTUITION PEN SKETCH
            </div>
          </div>

          {/* After Image (Debossed gold leaf on luxurious paper) */}
          <div
            className="absolute inset-x-0 inset-y-0 h-full pointer-events-none select-none overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="absolute inset-0 w-full h-full" style={{ width: `${containerWidth}px` }}>
              <img
                 src={item.afterImg || item.image}
                 alt="Final gilded, luxury hot debossed monogram outcome"
                 className="w-full h-full object-cover filter grayscale-0"
                 referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 bg-[#D4AF37] text-primary-dark font-mono text-[9px] font-bold tracking-wider px-3 py-1.5">
                STAGE 05: FINISHED GILDED COMMISSION
              </div>
            </div>
          </div>

          {/* Swipe Indicator Line Handle */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-luxury-gold z-30 flex items-center justify-center cursor-ew-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-8 h-8 rounded-full bg-luxury-gold hover:bg-white text-primary-dark flex items-center justify-center shadow-lg border border-luxury-gold hover:scale-105 duration-200">
              <ChevronRight className="w-5 h-5 -mx-1" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDIVIDUAL TESTIMONIAL DISPLAY */}
      {projectTestimonial && (
        <section className="py-16 px-6 max-w-7xl mx-auto bg-secondary-dark border border-zinc-200 p-8 sm:p-12 relative shadow-md" id="project-case-testimonial">
          <div className="absolute top-8 right-8 text-zinc-300/15 font-serif text-[12rem] leading-none select-none pointer-events-none">
            “
          </div>

          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-luxury-gold block">
              PATRON ASSURANCE
            </span>
            <p className="font-serif text-lg sm:text-xl md:text-2xl text-zinc-700 leading-relaxed italic">
              "{projectTestimonial.quote}"
            </p>
            
            <div className="flex items-center space-x-4 pt-4">
              <img
                src={projectTestimonial.avatar}
                alt={projectTestimonial.author}
                className="w-12 h-12 rounded-full object-cover filter grayscale border border-zinc-200"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="text-[#0B0B0B] font-serif text-sm font-semibold">{projectTestimonial.author}</h4>
                <p className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
                  {projectTestimonial.role}, {projectTestimonial.brand}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. BOTTOM ARCHIVE RETURN ACTION CARD */}
      <section className="py-16 px-6 max-w-7xl mx-auto text-center" id="return-case-footer">
        <button
          onClick={() => onViewChange('portfolio')}
          className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#0B0B0B] hover:text-luxury-gold font-semibold cursor-pointer border border-zinc-200 hover:border-luxury-gold px-8 py-4 duration-300"
          id="case-study-bottom-back-btn"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </button>
      </section>

    </div>
  );
}
