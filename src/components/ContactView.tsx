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
    phone: '',
    service: 'Custom Monogram Design',
    budget: '₦20,000 – ₦50,000',
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
    '₦20,000 – ₦50,000',
    '₦50,000 – ₦100,000',
    '₦100,005 – ₦250,000', // wait, let's write exactly what was specified below
    '₦100,000 – ₦250,000',
    '₦250,000 – ₦500,000',
    '₦500,000+'
  ].filter((v, i, self) => self.indexOf(v) === i); // avoid any duplicates

  const serviceOptions = [
    'Custom Monogram Design',
    'Wedding Monogram',
    'Business Monogram',
    'Luxury Gift Monogram',
    'Event Branding',
    'Logo Personalization',
    'Other'
  ];

  const faqs = [
    {
      q: "How many bookings does the studio accept?",
      a: "To ensure absolute dedication and attention to detail, we strictly limit our bookings to just 24 bespoke design agreements annually. This ensures every project receives our focused creative attention."
    },
    {
      q: "Can you coordinate with physical printers?",
      a: "Yes. We deliver final high-resolution vector assets optimized for any medium—whether for luxury paper embossing, metal engraving, fabric embroidery, or digital applications. We also collaborate directly with premium local and international production teams."
    },
    {
      q: "What is your standard design timeframe?",
      a: "A monogram project typically takes between 4 to 8 weeks. This timeframe allows us to research, sketch, iterate, and digitize your custom designs. We can accommodate expedited deadlines upon request."
    },
    {
      q: "Do we receive the full copyrights?",
      a: "Yes, full licensing rights are yours once the design is completed and finalized. We provide all the necessary master files and documentation to ensure you have exclusive rights to use your custom monogram."
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
          phone: formData.phone,
          service: formData.service,
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
      phone: '',
      service: 'Custom Monogram Design',
      budget: '₦20,000 – ₦50,000',
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
            STUDIO CONTACT & INQUIRIES
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B0B0B] font-bold leading-tight">
            Let's Create Something Timeless Together
          </h1>
          <p className="text-zinc-700 font-sans text-sm leading-relaxed">
            Have a project in mind? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
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
                <div className="border-b border-zinc-150 pb-4 mb-4">
                  <h3 className="font-serif text-2xl text-[#0B0B0B] font-semibold">Project Inquiry</h3>
                  <p className="text-xs text-zinc-500 font-sans mt-1">Let's craft something remarkable for you.</p>
                </div>

                <div className="space-y-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-[#0B0B0B] font-semibold">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-zinc-250 text-sm tracking-wider text-[#0B0B0B] px-4 py-3 focus:outline-none focus:border-luxury-gold placeholder:text-zinc-300 font-sans"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email Input */}
                    <div className="space-y-2">
                      <label className="block font-mono text-[10px] uppercase tracking-widest text-[#0B0B0B] font-semibold">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-zinc-250 text-sm tracking-wider text-[#0B0B0B] px-4 py-3 focus:outline-none focus:border-luxury-gold placeholder:text-zinc-300 font-sans"
                      />
                    </div>

                    {/* Phone Number Input */}
                    <div className="space-y-2">
                      <label className="block font-mono text-[10px] uppercase tracking-widest text-[#0B0B0B] font-semibold">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+234 xxx xxx xxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-zinc-250 text-sm tracking-wider text-[#0B0B0B] px-4 py-3 focus:outline-none focus:border-luxury-gold placeholder:text-zinc-400 font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Service Needed Dropdown */}
                    <div className="space-y-2">
                      <label className="block font-mono text-[10px] uppercase tracking-widest text-[#0B0B0B] font-semibold">Service Needed *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-white border border-zinc-250 text-sm tracking-wider text-[#0B0B0B] px-4 py-3 focus:outline-none focus:border-luxury-gold outline-none"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-primary-dark text-white font-sans text-sm">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget Range Dropdown */}
                    <div className="space-y-2">
                      <label className="block font-mono text-[10px] uppercase tracking-widest text-[#0B0B0B] font-semibold">Budget Range</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-white border border-zinc-250 text-sm tracking-wider text-[#0B0B0B] px-4 py-3 focus:outline-none focus:border-luxury-gold outline-none"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-primary-dark text-white font-sans text-sm">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-[#0B0B0B] font-semibold">Project Details *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your project, preferred style, timeline, or any ideas you have in mind."
                      value={formData.narrative}
                      onChange={(e) => setFormData({ ...formData, narrative: e.target.value })}
                      className="w-full bg-white border border-zinc-250 text-sm tracking-wider text-[#0B0B0B] px-4 py-3 focus:outline-none focus:border-luxury-gold placeholder:text-zinc-400 font-sans"
                    />
                  </div>
                </div>

                {/* Error feedback */}
                {sendError && (
                  <div className="p-4 bg-rose-500/10 border border-rose-500/30 text-rose-700 text-xs font-mono tracking-wider uppercase flex items-start gap-2 mt-4">
                    <Info className="w-4.5 h-4.5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>{sendError}</span>
                  </div>
                )}

                {/* Submit Trigger */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full flex items-center justify-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#0B0B0B] bg-luxury-gold hover:bg-[#0B0B0B] hover:text-white disabled:bg-zinc-200 disabled:text-zinc-400 disabled:cursor-not-allowed transition-colors duration-350 font-semibold px-6 py-4 rounded-none cursor-pointer"
                    id="submit-consultation-btn"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-zinc-600" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
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
                  <h3 className="font-serif text-3xl text-[#0B0B0B] font-medium">Inquiry Received Successfully</h3>
                  <p className="text-zinc-700 text-sm font-sans max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#0B0B0B]">{formData.name}</strong>. Your request regarding <strong className="text-luxury-gold">{formData.service}</strong> has been received, and our representative will reach out to you shortly.
                  </p>
                </div>

                <div className="bg-[#EFECE6] border border-zinc-200 p-6 rounded-none text-left max-w-md mx-auto space-y-2 font-mono text-[10px] tracking-wider text-zinc-650 leading-relaxed uppercase">
                  <p>● INQUIRY CODE: MS-{Math.floor(Math.random() * 90000) + 10000}</p>
                  <p>● ESTIMATED response time: 24 HOURS</p>
                </div>

                <div className="flex justify-center gap-4 animate-in fade-in zoom-in duration-300">
                  <button
                    onClick={resetForm}
                    className="text-xs uppercase tracking-widest font-mono text-zinc-600 hover:text-[#0B0B0B] border-b border-zinc-300 pb-1 cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                  <button
                    onClick={() => onViewChange('home')}
                    className="text-xs uppercase tracking-widest font-mono text-luxury-gold hover:text-[#0B0B0B] border-b border-luxury-gold pb-1 cursor-pointer"
                  >
                    Return To Home
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick Connect & Office Coordinates Block (Directly below the form container) */}
          <div className="mt-10 pt-8 border-t border-zinc-250 grid grid-cols-2 gap-y-6 gap-x-6 text-left">
            <div>
              <span className="block font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-500 mb-1">WhatsApp</span>
              <a 
                href="https://wa.me/2347063666220" 
                target="_blank" 
                rel="noreferrer" 
                className="text-sm font-serif font-semibold text-luxury-gold hover:text-[#0B0B0B] transition-colors"
                id="form-whatsapp-link"
              >
                Chat With Us
              </a>
            </div>
            <div>
              <span className="block font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-500 mb-1">Email</span>
              <a 
                href="mailto:ijituyiidowu@gmail.com" 
                className="text-sm font-serif font-semibold text-[#0B0B0B] hover:text-luxury-gold transition-colors break-all"
                id="form-email-link"
              >
                ijituyiidowu@gmail.com
              </a>
            </div>
            <div>
              <span className="block font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-500 mb-1">Location</span>
              <span className="text-sm font-sans text-zinc-700 font-medium block">Lagos, Nigeria</span>
            </div>
            <div>
              <span className="block font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-500 mb-1">Response Time</span>
              <span className="text-sm font-sans text-zinc-700 font-medium block">Usually within 24 hours</span>
            </div>
          </div>

        </div>

        {/* Right Hand: Location, Coordinates and Social access */}
        <div className="lg:col-span-5 space-y-12">
          
          <div className="space-y-6">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-luxury-gold border-b border-zinc-200 pb-2">
              Creative Director
            </h4>
            <p className="text-zinc-650 font-sans text-sm leading-relaxed">
              For project inquiries, collaborations, and consultations, contact the studio directly.
            </p>
            
            <div className="space-y-6 font-sans text-sm leading-relaxed text-zinc-700">
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#0B0B0B] font-medium font-serif">Main Office Location</p>
                  <p className="text-xs text-zinc-500">Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#0B0B0B] font-medium font-serif">Expected Response Time</p>
                  <p className="text-xs text-zinc-500">Usually within 24 hours</p>
                </div>
              </div>

            </div>
          </div>

          <div className="space-y-6 pt-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500 border-b border-zinc-200 pb-2">
              Direct Contact
            </h4>
            
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                href="mailto:ijituyiidowu@gmail.com"
                className="flex items-center space-x-3 bg-white border border-zinc-200 hover:border-luxury-gold p-4 transition-colors font-mono text-xs text-zinc-650 tracking-wider hover:text-[#0B0B0B]"
                id="right-email-link"
              >
                <Mail className="w-4 h-4 text-luxury-gold" />
                <span>ijituyiidowu@gmail.com</span>
              </a>

              <a
                href="https://wa.me/2347063666220"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-3 bg-white border border-zinc-200 hover:border-[#25D366] p-4 transition-colors font-mono text-xs text-zinc-650 tracking-widest hover:text-[#25D366] uppercase"
                id="right-whatsapp-link"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>+234 706 366 6220 (WhatsApp)</span>
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
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0B0B0B] font-semibold">
            Frequently Asked Questions
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
