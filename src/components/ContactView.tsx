import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageSquare, MapPin, Clock, ArrowUpRight, HelpCircle, ChevronDown, CheckCircle, Info, Loader2 } from 'lucide-react';
import { ViewType } from '../types';
import emailjs from '@emailjs/browser';

interface ContactViewProps {
  onViewChange: (view: ViewType) => void;
}

export default function ContactView({ onViewChange }: ContactViewProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    category: 'Luxury',
    budget: '$10,000 - $25,000',
    narrative: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

  const budgetOptions = [
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+'
  ];

  const categoryOptions = [
    'Luxury branding & Stationery',
    'Couture & Fashion fabric tags',
    'Heirloom & Wedding heraldry',
    'Corporate metal architectures',
    'Personal & Individual cyphers'
  ];

  const faqs = [
    {
      q: "How many commissions does the studio accept?",
      a: "To ensure our creative directors dedicate absolute attention to detail, we strictly limit our bookings to just 24 bespoke commissions per calendar year. Once this threshold is reached, subsequent projects are queued on our private waiting ledger."
    },
    {
      q: "Can you coordinate with physical luxury printers?",
      a: "Yes, we handle all file optimization and custom specifications required for physical production. We can supervise proof runs, carve dedicated hot-press brass matrix plates, and coordinate stamps directly with top-tier printers worldwide."
    },
    {
      q: "What is your standard design timeframe?",
      a: "Due to our dedication to manual drafting, ink testing, and GOLD matrix proofs, a monogram project usually spans 6 to 12 weeks. Urgent fashion or wedding deadlines may be accommodated on a case-by-case basis."
    },
    {
      q: "Do we receive the full licensing copyright?",
      a: "Absolutely. Once the commission is finalised and payment is settled, a physical, hand-signed legal deed transferring full international intellectual property and copyrights is dispatched to your registered address."
    }
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSending(true);
    setSendError(null);

    // If EmailJS credentials are not configured, simulate a luxury transmit sequence for smooth testing.
    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS credentials are not configured. To trigger a real email, set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your settings.");
      setTimeout(() => {
        setIsSending(false);
        setFormSubmitted(true);
      }, 1500);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          organization: formData.organization || 'Individual Entity',
          category: formData.category,
          budget: formData.budget,
          narrative: formData.narrative,
          to_name: 'Atelier Representative',
        },
        publicKey
      );
      setIsSending(false);
      setFormSubmitted(true);
    } catch (err: any) {
      console.error("EmailJS transmission failed:", err);
      setSendError(err?.text || err?.message || 'Transmission relay handshake failed. Please verify API Credentials.');
      setIsSending(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      organization: '',
      category: 'Luxury',
      budget: '$10,000 - $25,000',
      narrative: ''
    });
    setSendError(null);
    setFormSubmitted(false);
  };

  return (
    <div className="w-full relative py-20 bg-primary-dark" id="contact-atelier-view">
      
      {/* Editorial Title Pre */}
      <section className="pt-24 pb-12 px-6 max-w-7xl mx-auto border-b border-zinc-200">
        <div className="space-y-4 max-w-3xl">
          <span className="font-mono text-zinc-500 text-xs uppercase tracking-[0.3em] flex items-center">
            <Mail className="w-4 h-4 mr-2 text-luxury-gold" />
            SECURE LIAISON CORRESPONDENCE
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#0B0B0B] font-bold leading-none">
            Get in Touch
          </h1>
          <p className="text-zinc-700 font-sans text-sm leading-relaxed">
            Begin the creation of your physical or digital architectural cypher. Fill out our luxury consultation ledger, or get in touch directly over our secure digital liaison coordinates.
          </p>
        </div>
      </section>

      {/* Main split-screen layout */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16" id="liaison-body-grid">
        
        {/* Left Hand: In-depth Consultation Ledger (Form) */}
        <div className="lg:col-span-7 bg-white border border-zinc-200 p-8 sm:p-10 relative shadow-md">
          
          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
                id="consultation-ledger-form"
              >
                <div className="border-b border-zinc-200 pb-4 mb-4">
                  <h3 className="font-serif text-2xl text-[#0B0B0B] font-semibold">Consultation Ledger</h3>
                  <p className="text-xs text-zinc-500 font-sans mt-1">Please provide accurate background credentials.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-zinc-500">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="CONCEPCION AURELIA"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-zinc-250 text-sm tracking-wider text-[#0B0B0B] px-4 py-3 focus:outline-none focus:border-luxury-gold uppercase placeholder:text-zinc-300 font-mono"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-zinc-550">Direct Email Coordinate *</label>
                    <input
                      type="email"
                      required
                      placeholder="PATRON@AURELIA.CO"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-zinc-250 text-sm tracking-widest text-[#0B0B0B] px-4 py-3 focus:outline-none focus:border-luxury-gold uppercase placeholder:text-[#BBB] font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Organization (Optional) */}
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-zinc-550">Maison / Family House</label>
                    <input
                      type="text"
                      placeholder="AURELIA ESTATES LTD"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-white border border-zinc-250 text-sm tracking-wider text-[#0B0B0B] px-4 py-3 focus:outline-none focus:border-luxury-gold uppercase placeholder:text-zinc-350 font-mono"
                    />
                  </div>

                  {/* Budget Allocation */}
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-zinc-550">Intended Investment</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-white border border-zinc-250 text-sm tracking-wider text-[#0B0B0B] px-4 py-3 focus:outline-none focus:border-luxury-gold outline-none"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-primary-dark text-white uppercase font-mono">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Category Option Selector */}
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-zinc-500">Intended Commission Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-white border border-zinc-250 text-sm tracking-wider text-[#0B0B0B] px-4 py-3 focus:outline-none focus:border-luxury-gold outline-none"
                  >
                    {categoryOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-primary-dark text-white font-serif tracking-normal">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Narrative Description Textarea */}
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-zinc-550">The Design Brief / Narrative *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="DESCRIBE RELEVANT HERITAGE, INTENDED USES, TIMELINE REASONING OR GEOMETRICAL PREFERENCES..."
                    value={formData.narrative}
                    onChange={(e) => setFormData({ ...formData, narrative: e.target.value })}
                    className="w-full bg-white border border-zinc-250 text-sm tracking-wider text-[#0B0B0B] px-4 py-3 focus:outline-none focus:border-luxury-gold uppercase placeholder:text-zinc-350 font-sans"
                  />
                </div>

                {/* Error feedback */}
                {sendError && (
                  <div className="p-4 bg-rose-500/10 border border-rose-500/30 text-rose-700 text-xs font-mono tracking-wider uppercase flex items-start gap-2">
                    <Info className="w-4.5 h-4.5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>{sendError}</span>
                  </div>
                )}

                {/* Submit Trigger */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full flex items-center justify-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#0B0B0B] bg-luxury-gold hover:bg-[#0B0B0B] hover:text-white disabled:bg-zinc-200 disabled:text-zinc-400 disabled:cursor-not-allowed transition-colors duration-350 font-semibold px-6 py-4 rounded-none cursor-pointer"
                    id="submit-consultation-btn"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-zinc-600" />
                        <span>Transmitting Over Secure Relay...</span>
                      </>
                    ) : (
                      <>
                        <span>Log Professional Commission Proposal</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="thank-you-screen"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="text-center py-16 space-y-8"
                id="ledger-thankyou-message"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-555">
                  <CheckCircle className="w-8 h-8 animate-pulse text-emerald-600" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-serif text-3xl text-[#0B0B0B] font-medium">Liaison Ledger Registered</h3>
                  <p className="text-zinc-700 text-sm font-sans max-w-sm mx-auto leading-relaxed">
                    Greetings, <strong className="text-[#0B0B0B]">{formData.name}</strong>. Your requested proposal regarding <strong className="text-luxury-gold">{formData.category}</strong> has been successfully transmitted.
                  </p>
                </div>

                <div className="bg-[#EFECE6] border border-zinc-200 p-6 rounded-none text-left max-w-md mx-auto space-y-4 font-mono text-[10px] tracking-wider text-zinc-650 leading-relaxed uppercase">
                  <p>● PROPOSAL AUDIT ID: MS-{Math.floor(Math.random() * 90000) + 10000}</p>
                  <p>● ESTIMATED AUDIT CYCLE: 2 BUSINESS DAYS</p>
                  <p>● RELAY MODE: {(!serviceId || !templateId || !publicKey) ? 'DEMONSTRATION SIMULATOR (SET LIAISON KEYS TO GO LIVE)' : 'SECURE ACTIVE EMAILJS INTERFACE'}</p>
                  <p>● NEXT ACTION: ATELIER REPRESENTATIVE WILL CO-ORDINATE DIRECT AUDIO SCHEDULING TO REGISTER PRECISE PEN DRAFTS</p>
                </div>

                <div className="flex justify-center gap-4 animate-in fade-in zoom-in duration-300">
                  <button
                    onClick={resetForm}
                    className="text-xs uppercase tracking-widest font-mono text-zinc-600 hover:text-[#0B0B0B] border-b border-zinc-300 pb-1 cursor-pointer"
                  >
                    Log Another Commission
                  </button>
                  <button
                    onClick={() => onViewChange('home')}
                    className="text-xs uppercase tracking-widest font-mono text-luxury-gold hover:text-[#0B0B0B] border-b border-luxury-gold pb-1 cursor-pointer"
                  >
                    Return To Headquarters
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Right Hand: Location, Coordinates and Social access */}
        <div className="lg:col-span-5 space-y-12">
          
          <div className="space-y-6">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-luxury-gold border-b border-zinc-200 pb-2">
              Atelier Coordinates
            </h4>
            
            <div className="space-y-6 font-sans text-sm leading-relaxed text-zinc-700">
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#0B0B0B] font-medium font-serif">The Paris Headquarters</p>
                  <p className="text-xs text-zinc-500">14 Rue de la Paix, 75002 Paris, France</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#0B0B0B] font-medium font-serif">The Soho Salon</p>
                  <p className="text-xs text-zinc-500">72 Mercer Street, Soho, New York 10012</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#0B0B0B] font-medium font-serif">Salon Visiting Hours</p>
                  <p className="text-xs text-zinc-500">Monday — Friday • 10:00 to 18:00 (Private viewing by invite only)</p>
                </div>
              </div>

            </div>
          </div>

          <div className="space-y-6 pt-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500 border-b border-zinc-200 pb-2">
              Secure Direct Liaison
            </h4>
            
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                href="mailto:correspondence@monogramstudios.com"
                className="flex items-center space-x-3 bg-white border border-zinc-200 hover:border-luxury-gold p-4 transition-colors font-mono text-xs text-zinc-650 tracking-wider hover:text-[#0B0B0B]"
              >
                <Mail className="w-4 h-4 text-luxury-gold" />
                <span>CORRESPONDENCE@MONOGRAMSTUDIOS.COM</span>
              </a>

              <a
                href="https://wa.me/123456789"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-3 bg-white border border-zinc-200 hover:border-[#25D366] p-4 transition-colors font-mono text-xs text-zinc-650 tracking-widest hover:text-[#25D366] uppercase"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>SECURE INSTANT LIAISON (WHATSAPP)</span>
              </a>
            </div>
          </div>

        </div>

      </section>

      {/* 5. LUXURY FAQ ACCORDION ENGINE */}
      <section className="py-20 px-6 max-w-4xl mx-auto" id="contact-faq-accordions">
        <div className="text-center space-y-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-luxury-gold flex items-center justify-center">
            <HelpCircle className="w-4 h-4 mr-2" />
            FREQUENT CORRESPONDENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0B0B0B] font-semibold">
            Honored Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="border-b border-zinc-200 pb-4 transition-all duration-300"
                id={`faq-accordion-block-${index}`}
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-4 text-left focus:outline-none group cursor-pointer min-h-[48px]"
                >
                  <h3 className="font-serif text-lg text-[#0B0B0B] group-hover:text-luxury-gold transition-colors font-medium">
                    {faq.q}
                  </h3>
                  <ChevronDown className={`w-4 h-4 text-zinc-500 group-hover:text-luxury-gold transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden font-sans text-sm text-zinc-600 px-1 leading-relaxed space-y-2 pb-2"
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
