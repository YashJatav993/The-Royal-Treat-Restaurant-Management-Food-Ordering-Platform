import React from 'react';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onBookEvent: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onBookEvent }) => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* High-Resolution Royal Wedding Banquet Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/royal_wedding_buffet_1790340058322.jpg"
          alt="Royal Wedding Buffet & Catering Setup in Neemuch"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Deep Burgundy & Wine Royal Scrim Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#180308] via-[#24060f]/85 to-[#1a040b]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#1a040b]/60 to-[#180308]/95" />
      </div>

      {/* Floating Gold Dust Particles */}
      <div className="absolute inset-0 pointer-events-none z-1 overflow-hidden opacity-60">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-[#FFF0BD] blur-[1px] animate-royal-float" style={{ animationDelay: '0s', animationDuration: '7s' }} />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-[#D4AF37] blur-[1px] animate-royal-float" style={{ animationDelay: '2s', animationDuration: '9s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-[#FFF0BD] animate-royal-float" style={{ animationDelay: '1s', animationDuration: '6s' }} />
        <div className="absolute top-2/3 right-1/6 w-2.5 h-2.5 rounded-full bg-[#D4AF37] blur-[0.5px] animate-royal-float" style={{ animationDelay: '3s', animationDuration: '8s' }} />
        <div className="absolute top-1/6 right-1/3 w-2 h-2 rounded-full bg-[#AA820A] animate-royal-float" style={{ animationDelay: '4s', animationDuration: '10s' }} />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        
        {/* Royal Crest / Sonu Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#340B18]/90 border border-[#D4AF37]/60 backdrop-blur-md mb-6 shadow-xl animate-gold-glow">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#FFF0BD] font-semibold">
            SONU · The Royal Treat · Neemuch, MP
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
        </div>

        {/* Main Heading */}
        <h1 className="font-royal text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wider text-[#FDF8F0] mb-4 text-balance drop-shadow-md">
          THE ROYAL TREAT
        </h1>

        {/* Subheading */}
        <p className="font-subheading text-xl sm:text-2xl md:text-3xl italic text-[#FFF0BD] mb-4 font-normal tracking-wide">
          Premium Catering Services for Your Most Special Moments
        </p>

        {/* Gold Ornamental Divider */}
        <div className="flex items-center justify-center gap-3 my-4 opacity-90">
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <div className="w-2.5 h-2.5 rotate-45 border border-[#D4AF37] bg-[#F3E08F] shadow-[0_0_8px_#D4AF37]" />
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>

        {/* Supporting Text */}
        <p className="max-w-2xl text-base sm:text-lg text-[#E2D5C3] font-light leading-relaxed mb-8 text-balance">
          From grand weddings to intimate celebrations in Neemuch and beyond, we bring delicious food, 
          royal presentation, live culinary counters and unforgettable hospitality to your event.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 w-full max-w-md">
          <button
            onClick={onExploreMenu}
            className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#1e040b] gold-shimmer-btn rounded-md transition-all shadow-xl hover:shadow-[#D4AF37]/50 hover:scale-[1.03] cursor-pointer"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onBookEvent}
            className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#FFF0BD] bg-[#340B18]/90 hover:bg-[#430e20] border border-[#D4AF37]/80 hover:border-[#D4AF37] rounded-md transition-all cursor-pointer shadow-xl hover:scale-[1.03]"
          >
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            <span>Book Your Event</span>
          </button>
        </div>

        {/* WhatsApp Secondary Link */}
        <div className="mt-6 flex items-center justify-center">
          <a
            href="https://wa.me/918359817717?text=Hello%20The%20Royal%20Treat,%20I%20would%20like%20to%20enquire%20about%20catering%20for%20my%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#CBB89D] hover:text-[#FFF0BD] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span className="underline underline-offset-4 decoration-[#D4AF37]/40">WhatsApp Us Directly for Instant Inquiry</span>
          </a>
        </div>

        {/* Cuisines ticker text */}
        <div className="mt-12 pt-6 border-t border-[#D4AF37]/20 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#CBB89D]">
          <span>Wedding Catering</span>
          <span>·</span>
          <span>Chinese Specialties</span>
          <span>·</span>
          <span>South Indian Live Counters</span>
          <span>·</span>
          <span>Fast Food & Pizzas</span>
          <span>·</span>
          <span>Royal Desserts</span>
        </div>
      </div>
    </section>
  );
};
