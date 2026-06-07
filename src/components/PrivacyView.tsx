import { ViewType } from '../types';
import { ArrowLeft, ShieldCheck, Eye, Lock, Mail, CheckCircle } from 'lucide-react';

interface PrivacyViewProps {
  onViewChange: (view: ViewType) => void;
}

export default function PrivacyView({ onViewChange }: PrivacyViewProps) {
  return (
    <div className="w-full relative py-20 bg-primary-dark animate-fade-in" id="privacy-view-container">
      
      {/* Back Button and Section Intro Header */}
      <section className="pt-16 pb-12 px-6 max-w-4xl mx-auto">
        <button
          onClick={() => {
            onViewChange('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center space-x-2 text-xs font-mono tracking-widest text-zinc-500 hover:text-luxury-gold transition-colors duration-200 uppercase mb-8 focus:outline-none cursor-pointer"
          id="privacy-back-btn"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <span className="font-mono text-luxury-gold text-xs uppercase tracking-[0.3em] block mb-2">
          DATA SAFEGUARD
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#0B0B0B] font-bold leading-tight mb-6">
          Privacy Policy
        </h1>
        <p className="text-zinc-700 font-sans text-sm sm:text-base leading-relaxed border-l-2 border-luxury-gold/50 pl-6 my-6 italic">
          "We respect your privacy and are committed to protecting any information you share with us."
        </p>
      </section>

      {/* Main Content Body */}
      <section className="pb-24 px-6 max-w-4xl mx-auto">
        <div className="bg-white border border-zinc-200 p-8 sm:p-12 space-y-10 shadow-sm relative">
          
          {/* Decorative Subtle Icon */}
          <div className="absolute right-8 top-8 opacity-10 pointer-events-none">
            <Lock className="w-12 h-12 text-luxury-gold" />
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-xl text-[#0B0B0B] font-semibold flex items-center gap-3">
              <span className="font-mono text-xs text-luxury-gold bg-[#EFECE6] w-6 h-6 flex items-center justify-center rounded-none font-bold">1</span>
              Information Collected Through Contact Forms
            </h2>
            <p className="text-zinc-650 font-sans text-sm leading-relaxed pl-9">
              When you interact with our studio via our online contact modules, schedule inquiry panels, or subscribe to our newsletters, we compile standard identifying details that you voluntarily submit:
            </p>
            <ul className="pl-9 space-y-2 text-zinc-650 font-sans text-sm">
              <li className="flex items-start gap-2">
                <span className="text-luxury-gold mt-1">•</span>
                <span><strong>Personal Coordinates:</strong> Your full name, direct email address, and active phone number (such as your WhatsApp contact number for prompt coordination).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-luxury-gold mt-1">•</span>
                <span><strong>Project Specifications:</strong> The brand details, design requirements, timing schedule, and aesthetic goals shared during your inquiry.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-xl text-[#0B0B0B] font-semibold flex items-center gap-3">
              <span className="font-mono text-xs text-luxury-gold bg-[#EFECE6] w-6 h-6 flex items-center justify-center rounded-none font-bold">2</span>
              How Information is Used
            </h2>
            <p className="text-zinc-650 font-sans text-sm leading-relaxed pl-9">
              Your details will be used specifically for premium coordination and bespoke creative service delivery:
            </p>
            <ul className="pl-9 space-y-2 text-zinc-650 font-sans text-sm">
              <li className="flex items-start gap-2">
                <span className="text-luxury-gold mt-1">•</span>
                <span>To respond to project inquiries and schedule brand consultations on our design calendar.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-luxury-gold mt-1">•</span>
                <span>To produce customized design proposals and pricing matrices tailored to your brand goals.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-luxury-gold mt-1">•</span>
                <span>To communicate project milestones, share calligraphic sketch progress reviews, and deliver final vector templates.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-xl text-[#0B0B0B] font-semibold flex items-center gap-3">
              <span className="font-mono text-xs text-luxury-gold bg-[#EFECE6] w-6 h-6 flex items-center justify-center rounded-none font-bold">3</span>
              Communication with Potential Clients
            </h2>
            <p className="text-zinc-650 font-sans text-sm leading-relaxed pl-9">
              We highly value your digital boundaries and despise spam. We only contact you to follow up on your direct project requests, confirm visual consultations, or share premium design concepts you have requested. If you choose to subscribe to our newsletter, you may receive periodic design journals, but you remain free to unsubscribe instantly.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-[#0B0B0B] text-xl font-semibold flex items-center gap-3">
              <span className="font-mono text-xs text-luxury-gold bg-[#EFECE6] w-6 h-6 flex items-center justify-center rounded-none font-bold">4</span>
              Data Protection & Security
            </h2>
            <p className="text-zinc-650 font-sans text-sm leading-relaxed pl-9">
              Our studio takes visual and digital security with absolute seriousness. All contact requests and project briefs submitted via our forms are compiled securely, and access is strictly restricted to our active creative design team. We never rent, trade, or sell our client lists, identity specs, or inquiry details to third-party marketing entities.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-[#0B0B0B] text-xl font-semibold flex items-center gap-3">
              <span className="font-mono text-xs text-luxury-gold bg-[#EFECE6] w-6 h-6 flex items-center justify-center rounded-none font-bold">5</span>
              Third-Party Services
            </h2>
            <p className="text-zinc-650 font-sans text-sm leading-relaxed pl-9">
              To support professional digital communications, we utilize secure, premium services (such as EmailJS and reliable server environments) to relay your contact form data safely to our operational inbox. These partners operate under strict confidentiality agreements and do not use your information for outside reasons.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-[#0B0B0B] text-xl font-semibold flex items-center gap-3">
              <span className="font-mono text-xs text-luxury-gold bg-[#EFECE6] w-6 h-6 flex items-center justify-center rounded-none font-bold">6</span>
              User Rights & Control
            </h2>
            <p className="text-zinc-650 font-sans text-sm leading-relaxed pl-9">
              Your data belongs completely to you. At any time, you hold the legal right to request a full disclosure of the contact credentials we have stored, update any inaccuracies, or ask for the immediate and absolute deletion of all your project details from our active correspondence databases.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-[#0B0B0B] text-xl font-semibold flex items-center gap-3">
              <span className="font-mono text-xs text-luxury-gold bg-[#EFECE6] w-6 h-6 flex items-center justify-center rounded-none font-bold">7</span>
              Privacy Contact Information
            </h2>
            <p className="text-zinc-650 font-sans text-sm leading-relaxed pl-9">
              For any privacy-centered feedback, questions regarding data security, or to submit a data erasure request, please reach out to us. We will address your inquiry inside one business day:
            </p>
            <div className="pl-9 pt-2">
              <div className="bg-[#EFECE6] p-6 inline-block border border-zinc-200 text-xs font-mono tracking-widest text-[#0B0B0B] space-y-2 uppercase">
                <p>● Monogram Design Studio</p>
                <p>● Lagos, Nigeria</p>
                <p>● Contact: hello@businessname.com</p>
              </div>
            </div>
          </div>

          {/* Contact Studio Box */}
          <div className="border-t border-zinc-200 pt-8 mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0B0B0B] block font-bold">HAVE DATA INQUIRIES?</span>
              <p className="text-xs text-zinc-500 font-sans">Our studio coordinate team is here to assist always.</p>
            </div>
            <button
              onClick={() => {
                onViewChange('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-[#0B0B0B] text-white hover:bg-luxury-gold transition-colors duration-300 font-mono text-xs tracking-widest uppercase cursor-pointer focus:outline-none"
              id="privacy-contact-cta"
            >
              Contact Studio
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
