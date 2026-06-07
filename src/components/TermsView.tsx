import { ViewType } from '../types';
import { ArrowLeft, Scale, ShieldCheck, Mail, ClipboardList } from 'lucide-react';

interface TermsViewProps {
  onViewChange: (view: ViewType) => void;
}

export default function TermsView({ onViewChange }: TermsViewProps) {
  return (
    <div className="w-full relative py-20 bg-primary-dark animate-fade-in" id="terms-view-container">
      
      {/* Back Button and Section Intro Header */}
      <section className="pt-16 pb-12 px-6 max-w-4xl mx-auto">
        <button
          onClick={() => {
            onViewChange('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center space-x-2 text-xs font-mono tracking-widest text-zinc-500 hover:text-luxury-gold transition-colors duration-200 uppercase mb-8 focus:outline-none cursor-pointer"
          id="terms-back-btn"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <span className="font-mono text-luxury-gold text-xs uppercase tracking-[0.3em] block mb-2">
          LEGAL FRAMEWORK
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#0B0B0B] font-bold leading-tight mb-6">
          Terms & Conditions
        </h1>
        <p className="text-zinc-700 font-sans text-sm sm:text-base leading-relaxed border-l-2 border-luxury-gold/50 pl-6 my-6 italic">
          "These Terms & Conditions govern the use of our website and services. By accessing this website, you agree to comply with these terms."
        </p>
      </section>

      {/* Main Content Body */}
      <section className="pb-24 px-6 max-w-4xl mx-auto">
        <div className="bg-white border border-zinc-200 p-8 sm:p-12 space-y-10 shadow-sm relative">
          
          {/* Decorative Subtle Icon */}
          <div className="absolute right-8 top-8 opacity-10 pointer-events-none">
            <Scale className="w-12 h-12 text-luxury-gold" />
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-xl text-[#0B0B0B] font-semibold flex items-center gap-3">
              <span className="font-mono text-xs text-luxury-gold bg-[#EFECE6] w-6 h-6 flex items-center justify-center rounded-none font-bold">1</span>
              Use of the Website
            </h2>
            <p className="text-zinc-650 font-sans text-sm leading-relaxed pl-9">
              Welcome to our website. By continuing to browse, explore our design showcases, and utilize our interactive elements, you agree to use this platform strictly for lawful purposes and personal, non-commercial research. Any unauthorized scraping, cloning, or structural manipulation of this platform is strictly forbidden.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-xl text-[#0B0B0B] font-semibold flex items-center gap-3">
              <span className="font-mono text-xs text-luxury-gold bg-[#EFECE6] w-6 h-6 flex items-center justify-center rounded-none font-bold">2</span>
              Intellectual Property & Ownership
            </h2>
            <p className="text-zinc-650 font-sans text-sm leading-relaxed pl-9">
              All visual designs, typography layouts, interactive comparison sliders, high-fidelity gallery media, graphics, source codes, and branding elements present on this website are the intellectual property of Monogram Design Studio. Reproducing, republishing, or redistributing our signature monograms or artwork without written consent represents an infringement under local and international intellectual property laws.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-xl text-[#0B0B0B] font-semibold flex items-center gap-3">
              <span className="font-mono text-xs text-luxury-gold bg-[#EFECE6] w-6 h-6 flex items-center justify-center rounded-none font-bold">3</span>
              Project Inquiries & Consultations
            </h2>
            <p className="text-zinc-650 font-sans text-sm leading-relaxed pl-9">
              Submitting an inquiry via our contact modules or requesting a consult represents a invitation to dialogue. Because we strictly cap our schedule to 24 large design commissions annually, submitters acknowledge that inquiry submission does not guarantee project acceptance. Our booking agreements are fully formed only once a legal design contract is signed by both the studio and the client.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-xl text-[#0B0B0B] font-semibold flex items-center gap-3">
              <span className="font-mono text-xs text-luxury-gold bg-[#EFECE6] w-6 h-6 flex items-center justify-center rounded-none font-bold">4</span>
              Design Proposals & Creative Process
            </h2>
            <p className="text-zinc-650 font-sans text-sm leading-relaxed pl-9">
              Our signature workflow involves bespoke hand-sketching followed by digitization. Initial design directions, interactive prototypes, and drafts shared during the iterative process remain the exclusive property of Monogram Design Studio. Final high-resolution vector archives and copyrights are formally transferred only upon full settlement of the agreed project fees.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-xl text-[#0B0B0B] font-semibold flex items-center gap-3">
              <span className="font-mono text-xs text-luxury-gold bg-[#EFECE6] w-6 h-6 flex items-center justify-center rounded-none font-bold">5</span>
              Communication Expectations
            </h2>
            <p className="text-zinc-650 font-sans text-sm leading-relaxed pl-9">
              We hold our client relationships with the highest level of respect and professionalism. We maintain an expected response rate of under 24 hours on premium communications. Clients are expected to provide clear, timely feedback during design review stages to keep standard timelines on schedule.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-xl text-[#0B0B0B] font-semibold flex items-center gap-3">
              <span className="font-mono text-xs text-luxury-gold bg-[#EFECE6] w-6 h-6 flex items-center justify-center rounded-none font-bold">6</span>
              Limitation of Liability
            </h2>
            <p className="text-zinc-650 font-sans text-sm leading-relaxed pl-9">
              While we guarantee absolute creative precision and rigorous technical safety across our digital assets, Monogram Design Studio shall not be liable for any direct or indirect damages, losses, or print-material production errors once final vector assets are reviewed and formally signed off by the client.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-xl text-[#0B0B0B] font-semibold flex items-center gap-3">
              <span className="font-mono text-xs text-luxury-gold bg-[#EFECE6] w-6 h-6 flex items-center justify-center rounded-none font-bold">7</span>
              Third-Party Links & Integrations
            </h2>
            <p className="text-zinc-650 font-sans text-sm leading-relaxed pl-9">
              This site may feature integrations or external connection links, such as WhatsApp messaging links or contact interfaces. We do not control and are not responsible for the privacy actions, security, or terms of third-party platforms.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-xl text-[#0B0B0B] font-semibold flex items-center gap-3">
              <span className="font-mono text-xs text-luxury-gold bg-[#EFECE6] w-6 h-6 flex items-center justify-center rounded-none font-bold">8</span>
              Updates to These Terms
            </h2>
            <p className="text-zinc-650 font-sans text-sm leading-relaxed pl-9">
              We reserve the right to refine or optimize these Terms & Conditions as our studio services expand and adapt. Visitors are encouraged to review this page periodically. The continuing use of our portal signifies agreement to any modernized terms.
            </p>
          </div>

          {/* Contact Studio Box */}
          <div className="border-t border-zinc-200 pt-8 mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0B0B0B] block">Questions regarding patronage?</span>
              <p className="text-xs text-zinc-500 font-sans">Reach our creative director directly for prompt coordination.</p>
            </div>
            <button
              onClick={() => {
                onViewChange('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-[#0B0B0B] text-white hover:bg-luxury-gold transition-colors duration-300 font-mono text-xs tracking-widest uppercase cursor-pointer focus:outline-none"
              id="terms-contact-cta"
            >
              Contact Studio
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
