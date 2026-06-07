import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GalleryItem, ViewType } from '../types';
import { galleryItems } from '../data';
import { Sparkles, Maximize2, X, Image as ImageIcon, CheckCircle2 } from 'lucide-react';

interface GalleryViewProps {
  onViewChange: (view: ViewType) => void;
}

type GalleryFilter = 'All' | 'Detail' | 'Textile' | 'Metal' | 'Paper' | 'Sketch';

export default function GalleryView({ onViewChange }: GalleryViewProps) {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filters: GalleryFilter[] = ['All', 'Detail', 'Textile', 'Metal', 'Paper', 'Sketch'];

  const filteredGallery = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="w-full relative py-20 bg-primary-dark" id="tactile-gallery-view">
      
      {/* Editorial Title Header */}
      <section className="pt-24 pb-12 px-6 max-w-7xl mx-auto border-b border-zinc-200">
        <div className="space-y-4 max-w-3xl">
          <span className="font-mono text-zinc-500 text-xs uppercase tracking-[0.3em] flex items-center">
            <ImageIcon className="w-4 h-4 mr-2 text-luxury-gold" />
            DESIGN DETAILS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#0B0B0B] font-bold leading-none">
            Gallery & Details
          </h1>
          <p className="text-zinc-700 font-sans text-sm leading-relaxed">
            Explore our design details and materials. From fine sketching and traditional ink strokes to high-precision engraving and embroidery, see how our monograms translate across different mediums.
          </p>
        </div>
      </section>

      {/* Sub Filter Nav */}
      <section className="py-8 px-6 max-w-7xl mx-auto flex flex-wrap items-center gap-2 relative z-20">
        {filters.map((fil) => (
          <button
            key={fil}
            onClick={() => setActiveFilter(fil)}
            className={`px-4 py-2 text-[10px] font-mono uppercase tracking-widest transition-all focus:outline-none rounded-none cursor-pointer border ${
              activeFilter === fil
                ? 'bg-luxury-gold text-primary-dark border-luxury-gold font-semibold shadow-md'
                : 'bg-white text-zinc-650 border-zinc-200 hover:border-zinc-350 hover:text-[#0B0B0B]'
            }`}
            id={`gallery-filter-${fil.toLowerCase()}`}
          >
            {fil}s
          </button>
        ))}
      </section>

      {/* Grid of gallery items */}
      <section className="py-8 px-6 max-w-7xl mx-auto min-h-[400px]">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="gallery-masonry-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedItem(item)}
                className="group relative aspect-[3/4] overflow-hidden bg-[#EFECE6] border border-zinc-200 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                id={`gallery-card-${item.id}`}
              >
                {/* Image Cover */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 duration-700 ease-out transform scale-100 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Backdrop Blur Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10" />

                {/* Info Text Cover */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold mb-1">
                    {item.category} DETAIL
                  </span>
                  <h3 className="font-serif text-lg text-white font-medium mb-1">
                    {item.title}
                  </h3>
                  <p className="text-zinc-300 text-xs font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Floating Action scale icon */}
                  <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-primary-dark/90 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center transform scale-90 group-hover:scale-100 border border-zinc-200">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 5. IMMERSIVE LIGHTBOX LIGHT MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4" id="gallery-lightbox-modal">
            {/* Modal backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-primary-dark/95 backdrop-blur-xl"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-primary-dark border border-zinc-200 max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 overflow-hidden shadow-2xl relative z-10 font-sans"
            >
              
              {/* Close Button Trigger */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-40 bg-white/80 backdrop-blur-md text-zinc-600 hover:text-[#0B0B0B] p-2 border border-zinc-200 cursor-pointer focus:outline-none rounded-none"
                aria-label="Close detailed visual gallery showcase"
                id="lightbox-close-btn"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image Side */}
              <div className="md:col-span-7 relative aspect-[4/5] md:aspect-auto bg-[#EFECE6]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover filter grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Text specifications side */}
              <div className="md:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-primary-dark border-l border-zinc-200">
                <div className="space-y-6">
                  <span className="font-mono text-zinc-500 text-xs uppercase tracking-[0.25em] flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-luxury-gold" />
                    Project Details
                  </span>
                  
                  <div className="space-y-2">
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#0B0B0B] font-medium">
                      {selectedItem.title}
                    </h2>
                    <span className="inline-block bg-white border border-zinc-200 text-[9px] font-mono tracking-widest text-[#D4AF37] px-2.5 py-1">
                      {selectedItem.category.toUpperCase()} WORK
                    </span>
                  </div>

                  <p className="text-zinc-700 font-sans text-sm leading-relaxed">
                    {selectedItem.description}
                  </p>

                  <div className="border-t border-zinc-200 pt-4 space-y-4">
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-luxury-gold">Design Specifications</h4>
                    <ul className="font-mono text-[9px] text-zinc-500 space-y-2 tracking-widest uppercase">
                      <li>• Medium: Digital vector & physical prints</li>
                      <li>• Materials: Premium paper, engravings, or embroidery</li>
                      <li>• Color Palette: Soft charcoal, gold accents, and warm off-whites</li>
                      <li>• Process: Hand-drawn sketching converted to high-resolution vectors</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-200">
                  <button
                    onClick={() => {
                      setSelectedItem(null);
                      onViewChange('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full text-center text-xs uppercase tracking-[0.2em] text-[#0B0B0B] bg-luxury-gold hover:bg-[#0B0B0B] hover:text-white px-6 py-4 font-semibold active:scale-95 duration-200 cursor-pointer transition-colors duration-300"
                    id="lightbox-cta-btn"
                  >
                    Discuss Your Project
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
