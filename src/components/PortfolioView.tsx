import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioItem, ViewType } from '../types';
import { portfolioItems } from '../data';
import { ArrowUpRight, Grid, Sparkles, SlidersHorizontal } from 'lucide-react';

interface PortfolioViewProps {
  onViewChange: (view: ViewType) => void;
  onSelectCaseStudy: (item: PortfolioItem) => void;
}

type CategoryType = 'All' | 'Wedding' | 'Corporate' | 'Luxury' | 'Fashion' | 'Personal';

export default function PortfolioView({ onViewChange, onSelectCaseStudy }: PortfolioViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');

  const categories: CategoryType[] = ['All', 'Wedding', 'Corporate', 'Luxury', 'Fashion', 'Personal'];

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  const handleCaseStudyClick = (item: PortfolioItem) => {
    onSelectCaseStudy(item);
    onViewChange('casestudy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full relative py-20 bg-primary-dark" id="portfolio-archive-view">
      
      {/* Editorial Header */}
      <section className="pt-24 pb-12 px-6 max-w-7xl mx-auto border-b border-zinc-200">
        <div className="space-y-4 max-w-3xl">
          <span className="font-mono text-zinc-500 text-xs uppercase tracking-[0.3em] flex items-center">
            <Sparkles className="w-3.5 h-3.5 mr-2 text-luxury-gold" />
            STUDIO PROJECTS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#0B0B0B] font-bold leading-none">
            Portfolio
          </h1>
          <p className="text-zinc-700 font-sans text-sm leading-relaxed">
            Our portfolio showcases our featured designs. From custom monograms and prestige brandmarks to digital identity systems, every design represents rigorous geometry and creative excellence.
          </p>
        </div>
      </section>

      {/* Interactive Category Filter Menu */}
      <section className="py-8 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-20">
        
        {/* Filter Badges Wrapper */}
        <div className="flex overflow-x-auto min-w-full md:min-w-0 md:flex-wrap items-center gap-2 pb-3 md:pb-0 scrollbar-none snap-x snap-mandatory">
          <div className="flex items-center space-x-2 mr-3 font-mono text-xs text-zinc-500 uppercase tracking-widest flex-shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-luxury-gold" />
            <span>Filter:</span>
          </div>
          
          {categories.map((cat) => (
            <button
               key={cat}
               onClick={() => setSelectedCategory(cat)}
               className={`px-5 py-3 md:py-2 text-[11px] font-sans uppercase tracking-widest transition-all focus:outline-none rounded-none cursor-pointer border flex-shrink-0 snap-center min-h-[44px] sm:min-h-0 ${
                 selectedCategory === cat
                   ? 'bg-luxury-gold text-primary-dark border-luxury-gold font-semibold shadow-md'
                   : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-300 hover:text-[#0B0B0B]'
               }`}
              id={`filter-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Counter Grid Indicator */}
        <div className="flex items-center space-x-2 text-zinc-500 font-mono text-xs">
          <Grid className="w-4 h-4" />
          <span>SHOWING {filteredItems.length} OF {portfolioItems.length} PROJECTS</span>
        </div>
      </section>

      {/* Grid container */}
      <section className="py-8 px-6 max-w-7xl mx-auto min-h-[450px]">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="portfolio-grid-masonry"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.05 }}
                className="group relative bg-[#F7F5F2] border border-zinc-200 hover:border-luxury-gold/50 cursor-pointer overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300"
                onClick={() => handleCaseStudyClick(item)}
                id={`portfolio-card-${item.id}`}
              >
                
                {/* Embedded Canvas Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFECE6]">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 duration-700 ease-out grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 right-4 bg-primary-dark/95 backdrop-blur-md px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-[#D4AF37] z-20 border border-zinc-200">
                    {item.category}
                  </span>
                </div>

                {/* Info & Secondary Action Links */}
                <div className="p-6 bg-primary-dark border-t border-zinc-250 relative z-20">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-zinc-500">
                      <span>{item.client}</span>
                      <span>{item.year}</span>
                    </div>
                    <h3 className="font-serif text-xl text-[#0B0B0B] group-hover:text-luxury-gold font-medium duration-300">
                      {item.title}
                    </h3>
                    <p className="text-zinc-700 text-xs font-sans leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-luxury-gold">
                    <span>View Project Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="py-24 text-center space-y-4">
            <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">No projects found in this category.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-luxury-gold hover:text-white font-mono text-xs uppercase underline tracking-widest"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

    </div>
  );
}
