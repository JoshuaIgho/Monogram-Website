import { motion } from 'motion/react';
import { Milestone, ViewType } from '../types';
import { studioMilestones } from '../data';
import { Scale, Heart, Shield, Award, Clock, ArrowUpRight } from 'lucide-react';

interface AboutViewProps {
  onViewChange: (view: ViewType) => void;
}

export default function AboutView({ onViewChange }: AboutViewProps) {
  const coreValues = [
    {
      icon: <Clock className="w-6 h-6 text-luxury-gold" />,
      title: 'Deliberate Slowness',
      description: 'We reject automated tools. Every line vector is drafted after multiple steel-nib drafts, giving the design hand-forged warmth and physical purity.'
    },
    {
      icon: <Scale className="w-6 h-6 text-luxury-gold" />,
      title: 'Structural Ratios',
      description: 'We apply mathematical grids, sacred geometries, and the divine golden ratio to calibrate custom ligatures that scale perfectly from a tiny ring to skyscraper gates.'
    },
    {
      icon: <Heart className="w-6 h-6 text-luxury-gold" />,
      title: 'Material Authenticity',
      description: 'A digital mark must behave beautifully in nature. We specialize in hot-wax seals, deep 600gsm cotton card debossing, gold leafing, and premium embroidery curves.'
    },
    {
      icon: <Shield className="w-6 h-6 text-luxury-gold" />,
      title: 'Absolute Exclusivity',
      description: 'By strictly capping our calendar to 24 commissions a year, we ensure our creative directors provide uncompromised personal dedication to our clients.'
    }
  ];

  return (
    <div className="w-full relative py-20 bg-primary-dark" id="about-studio-view">
      
      {/* Editorial Page Title Intro */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto border-b border-zinc-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-zinc-500 text-xs uppercase tracking-[0.3em] block">
              COSMIC SYNERGIES • ESTABLISHED HISTORICALLY
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#0B0B0B] font-bold leading-tight">
              The Pedigree of <br/>
              <span className="text-luxury-gold italic gold-glow">Elise Moreau</span> Studio
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-zinc-700 font-sans text-sm leading-relaxed">
              We are an award-winning boutique studio. We design custom brand heraldry, bespoke digital monograms, and physical wax seal packages for royalty, fashion maisons, and high-end enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 1: The Founder Editorial Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto" id="founder-story-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Asymmetrical Left Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-x-0 bottom-0 top-1/4 bg-[#EFECE6]/80 border border-zinc-200 -z-10 -translate-x-6 translate-y-6" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC05wzPuitawxBNNRG_WvLQ6fxApzMcHr8tvQ1vY1QfiublbqtEID8zpS8lgbsZQEZ4iQE7an2CjnOMeJDF5poY898f9aa-VlHSfGAa8GIpjC_Wg7OJtpytNh4w4sUg9xajl8GcpLHlWhejKymErea8hkCADmg-izmhc3GrHWXvWQILyQD_ndGCUDWMTYnKlKA2evNYRrepnXQm3vOHBskvarCGGgTWjG-ubbI7Bm2oFgJo-pnlS3sAkCQfPXEF370TZktGmotx7z83"
              alt="Intricate couture monogram textile embroidery closeup"
              className="w-full object-cover aspect-[4/3] border border-zinc-200 filter grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 bg-primary-dark/95 backdrop-blur-md px-4 py-2 border border-zinc-200 font-mono text-[9px] uppercase tracking-[0.25em] text-[#D4AF37]">
              TACTILE TEXTILE THREADS
            </div>
          </div>

          {/* Right Magazine Layout narrative */}
          <div className="lg:col-span-6 space-y-8">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-luxury-gold block">
              FOUNDER STORY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0B0B0B] font-medium leading-tight">
              A Pencil, Ink, and Golden Ratios.
            </h2>
            <div className="space-y-6 text-zinc-700 font-sans text-sm leading-relaxed">
              <p>
                Elise Moreau began her career under classic calligraphers in the historic alleys of Marais, Paris. Spending her early years handjoining scripts for heritage wedding ceremonies and haute-couture fashion houses, she observed that digital vector tools had stripped letters of their organic balance.
              </p>
              <p>
                "Lines drawn by math files alone are dry and lifeless. But hand-sketched ink, with its organic flow and slight imperfections, has a soul," Elise explains. Thus, she developed her signature hybrid design workflow: starting on heavy linen cardstock with Steel-nib pens, finding organic balance, and then capturing the design inside premium high-fidelity CAD vector engines.
              </p>
              <p>
                In 2021, the studio relocated to premium consult suites in Soho, Manhattan while maintaining drafting studios in Paris, ensuring our clients receive world-tier, bespoke creative outputs.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Chapter 2: The Core Strategic Philosophy */}
      <section className="py-24 bg-[#EFECE6] border-y border-zinc-200 px-6" id="core-philosophy-section">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center space-y-4 mb-20">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-luxury-gold block">
              OUR GUIDING LIGHTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0B0B0B] font-bold tracking-tight">
              Values That Outlive Trends
            </h2>
            <p className="text-zinc-650 font-sans text-sm max-w-lg mx-auto">
              We design with structural discipline, rejecting cheap template builders and AI generators for custom aesthetic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((v, idx) => (
              <div
                key={idx}
                className="bg-primary-dark border border-zinc-200/80 p-8 flex flex-col justify-between space-y-8 hover:border-luxury-gold/50 transition-colors duration-300"
                id={`core-value-card-${idx}`}
              >
                <div className="w-12 h-12 rounded-none bg-white border border-zinc-200 flex items-center justify-center">
                  {v.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-lg text-[#0B0B0B] font-semibold">{v.title}</h3>
                  <p className="text-zinc-700 text-xs leading-relaxed font-sans">{v.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Chapter 3: Interactive Journey Timeline */}
      <section className="py-24 px-6 max-w-7xl mx-auto" id="journey-timeline-section">
        <div className="space-y-4 mb-20 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-luxury-gold block">
            THE CHRONOLOGY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0B0B0B] font-semibold">
            Honorable Studio Journey
          </h2>
        </div>

        {/* Milestone Timeline List */}
        <div className="relative border-l border-zinc-200 ml-4 md:ml-32 md:pl-20 pl-8 space-y-16">
          <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-luxury-gold via-zinc-200 to-transparent" />

          {studioMilestones.map((m, idx) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative"
              id={`milestone-${m.year}`}
            >
              {/* Spinning timeline gold dot */}
              <div className="absolute -left-[38px] md:-left-[125px] top-1.5 flex items-center justify-center bg-primary-dark">
                <span className="hidden md:inline font-serif text-2xl font-bold text-luxury-gold tracking-tight w-24 text-right">
                  {m.year}
                </span>
                <span className="w-3 h-3 rounded-full bg-luxury-gold md:ml-4 z-10 border-4 border-primary-dark box-content outline-dashed outline-1 outline-luxury-gold" />
              </div>

              {/* Box Info */}
              <div className="max-w-xl bg-[#EFECE6] border border-zinc-250 p-6 shadow-md hover:border-zinc-300 transition-colors">
                <span className="inline-block md:hidden font-serif text-xl font-bold text-luxury-gold tracking-tight mb-2">
                  {m.year}
                </span>
                <h3 className="font-serif text-lg text-[#0B0B0B] font-semibold mb-2">
                  {m.title}
                </h3>
                <p className="text-zinc-700 text-xs font-sans leading-relaxed">
                  {m.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* Chapter 4: Secondary Pitch Card */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center" id="about-pitch-card">
        <div className="bg-white/90 border border-zinc-200 p-12 backdrop-blur-md space-y-8">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#0B0B0B] font-medium">
            Commission a Signature Heirloom
          </h3>
          <p className="text-zinc-700 text-sm font-sans leading-relaxed max-w-xl mx-auto">
            Ready to explore an interlocking identity for your residence, family ledger, or boutique enterprise? Elise Moreau offers direct scheduled audio consults.
          </p>
          <button
            onClick={() => {
              onViewChange('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center justify-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#0B0B0B] bg-luxury-gold hover:bg-[#0B0B0B] hover:text-white transition-colors duration-300 px-6 py-4 font-semibold cursor-pointer rounded-none mx-auto"
            id="about-pitch-cta-btn"
          >
            <span>Request Private Consult</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

    </div>
  );
}
