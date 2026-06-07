import { useState, FormEvent } from 'react';
import { ViewType } from '../types';
import { ArrowUpRight, Check } from 'lucide-react';

interface FooterProps {
  onViewChange: (view: ViewType) => void;
}

export default function Footer({ onViewChange }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const navTo = (view: ViewType, isServices: boolean = false) => {
    onViewChange(view);
    if (isServices) {
      setTimeout(() => {
        const servicesSection = document.getElementById('timeline-process-section');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#EFECE6] border-t border-zinc-200 pt-20 pb-8 relative overflow-hidden" id="main-footer">
      {/* Decorative large ambient monogram shadow background */}
      <div className="absolute right-0 bottom-0 select-none pointer-events-none opacity-[0.03]">
        <span className="font-serif text-[32rem] leading-none text-luxury-gold tracking-tighter">M</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        
        {/* Column 1: Studio Identity */}
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-widest text-[#0B0B0B]">MONOGRAM</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-zinc-500 uppercase mt-0.5">Design Studio</span>
          </div>
          <p className="text-sm text-zinc-600 font-sans leading-relaxed max-w-sm">
            Crafting custom brand identities, bespoke monograms, and timeless designs for distinguished organizations and private individuals.
          </p>
          <div className="flex space-x-4 pt-2 font-mono">
            {['Instagram', 'WhatsApp', 'Facebook'].map((soc) => (
              <a
                key={soc}
                href={soc === 'WhatsApp' ? 'https://wa.me/2348000000000' : `https://${soc.toLowerCase()}.com`}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono tracking-widest text-zinc-500 hover:text-luxury-gold transition-colors duration-200"
              >
                {soc.toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col space-y-6">
          <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-luxury-gold">Navigate</h4>
          <ul className="flex flex-col space-y-3 font-sans text-sm text-zinc-600">
            <li>
              <button onClick={() => navTo('about')} className="hover:text-[#0B0B0B] transition-colors duration-200 cursor-pointer text-left">
                About
              </button>
            </li>
            <li>
              <button onClick={() => navTo('home', true)} className="hover:text-[#0B0B0B] transition-colors duration-200 cursor-pointer text-left">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => navTo('portfolio')} className="hover:text-[#0B0B0B] transition-colors duration-200 cursor-pointer text-left">
                Portfolio
              </button>
            </li>
            <li>
              <button onClick={() => navTo('gallery')} className="hover:text-[#0B0B0B] transition-colors duration-200 cursor-pointer text-left">
                Gallery
              </button>
            </li>
            <li>
              <button onClick={() => navTo('contact')} className="hover:text-[#0B0B0B] transition-colors duration-200 cursor-pointer text-left">
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div className="flex flex-col space-y-6">
          <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-luxury-gold">Contact Information</h4>
          <div className="space-y-4 font-sans text-sm leading-relaxed text-zinc-650">
            <div>
              <p className="text-[#0B0B0B] font-medium">Main Office Location</p>
              <p className="text-xs text-zinc-550">Lagos, Nigeria</p>
            </div>
            <div>
              <p className="text-[#0B0B0B] font-medium">Expected Response Time</p>
              <p className="text-xs text-zinc-550">Usually within 24 hours</p>
            </div>
            <div>
              <p className="text-[#0B0B0B] font-medium">Visiting Hours</p>
              <p className="text-xs text-zinc-550">Mon — Fri • 10:00 to 18:00</p>
            </div>
          </div>
        </div>

        {/* Column 4: Private Correspondence Subscription */}
        <div className="flex flex-col space-y-6">
          <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-luxury-gold">Stay Connected</h4>
          <p className="text-sm text-zinc-605 font-sans leading-relaxed">
            Subscribe to receive our seasonal updates, design insights, and exclusive studio announcements.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
            <div className="relative border-b border-zinc-350 focus-within:border-luxury-gold transition-colors duration-300">
              <input
                type="email"
                required
                placeholder="YOUR.EMAIL@DOMAIN.COM"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-none text-xs tracking-widest text-[#0B0B0B] py-3 pr-10 focus:outline-none placeholder:text-zinc-400 font-mono uppercase"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-luxury-gold p-2 cursor-pointer focus:outline-none"
                aria-label="Submit subscriber application"
              >
                {subscribed ? <Check className="w-4 h-4 text-emerald-500" /> : <ArrowUpRight className="w-4 h-4" />}
              </button>
            </div>
            {subscribed && (
              <p className="text-[10px] text-emerald-600 font-mono uppercase tracking-wider animate-scale-in mt-1">
                Thank you for subscribing to our updates.
              </p>
            )}
          </form>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-zinc-250 flex flex-col md:flex-row items-center justify-between text-zinc-500 font-mono text-[10px] tracking-widest">
        <span>© {new Date().getFullYear()} MONOGRAM DESIGN STUDIO. ALL RIGHTS RESERVED.</span>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#terms" className="hover:text-luxury-gold transition-colors duration-200">TERMS & CONDITIONS</a>
          <a href="#privacy" className="hover:text-luxury-gold transition-colors duration-200">PRIVACY POLICY</a>
        </div>
      </div>
    </footer>
  );
}
