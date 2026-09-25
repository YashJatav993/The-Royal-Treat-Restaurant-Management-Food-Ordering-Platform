import React from 'react';

interface RoyalLogoProps {
  variant?: 'full' | 'compact' | 'badge';
  className?: string;
  showContact?: boolean;
}

export const RoyalLogo: React.FC<RoyalLogoProps> = ({ 
  variant = 'compact', 
  className = '', 
  showContact = false 
}) => {
  if (variant === 'badge') {
    return (
      <div className={`relative flex flex-col items-center justify-center text-center p-6 border-2 border-[#D4AF37]/50 rounded-2xl bg-[#25060f]/95 shadow-2xl ${className}`}>
        {/* Crown & Crossed Cutlery Crest */}
        <div className="relative mb-3 flex items-center justify-center">
          <svg className="w-16 h-16 text-[#D4AF37]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Ornate Gold Crown */}
            <path d="M18 42L28 62H72L82 42L65 52L50 32L35 52L18 42Z" fill="url(#goldGrad)" stroke="#F3E08F" strokeWidth="1.5"/>
            <circle cx="18" cy="40" r="3" fill="#FFF0BD"/>
            <circle cx="50" cy="30" r="3.5" fill="#FFF0BD"/>
            <circle cx="82" cy="40" r="3" fill="#FFF0BD"/>
            <circle cx="35" cy="50" r="2" fill="#FFF0BD"/>
            <circle cx="65" cy="50" r="2" fill="#FFF0BD"/>

            {/* Crossed Spoon & Fork below crown */}
            {/* Fork */}
            <path d="M38 72L62 92M42 68L44 65M39 71L41 68M45 65L47 62" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
            {/* Spoon */}
            <path d="M62 72L38 92" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
            <ellipse cx="64" cy="70" rx="4" ry="5" transform="rotate(45 64 70)" stroke="#D4AF37" strokeWidth="1.5" fill="#D4AF37" fillOpacity="0.2"/>

            {/* Decorative Filigree Oval */}
            <ellipse cx="50" cy="62" rx="46" ry="34" stroke="url(#goldGrad)" strokeWidth="1" strokeDasharray="3 3"/>

            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF0BD"/>
                <stop offset="50%" stopColor="#D4AF37"/>
                <stop offset="100%" stopColor="#997305"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* SONU */}
        <div className="tracking-[0.25em] text-xs font-semibold text-[#FFF0BD] uppercase px-3 py-0.5 border-y border-[#D4AF37]/40 mb-1">
          SONU
        </div>

        {/* Brand Name */}
        <div className="font-royal text-2xl font-bold tracking-wider text-[#FDF8F0] mt-1">
          THE ROYAL TREAT
        </div>

        {/* Tagline */}
        <div className="text-[11px] tracking-[0.2em] uppercase text-[#D4AF37] font-medium mt-1">
          Premium Catering Services
        </div>

        <div className="text-[10px] tracking-wider text-[#C8B9A6] mt-1">
          FAST FOOD • LIVE COUNTERS
        </div>

        <div className="text-[10px] text-[#D4AF37]/90 mt-2 font-medium">
          Neemuch, Madhya Pradesh
        </div>

        {showContact && (
          <div className="mt-3 pt-2 border-t border-[#D4AF37]/20 text-[11px] text-[#FDF8F0] font-mono">
            📞 +91 83598 17717
          </div>
        )}
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {/* Crown with Crossed Cutlery Graphic */}
        <div className="relative flex items-center justify-center mb-2">
          <svg className="w-14 h-14 text-[#D4AF37]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 42L28 62H72L82 42L65 52L50 32L35 52L18 42Z" fill="url(#goldGradFull)" stroke="#F3E08F" strokeWidth="1.5"/>
            <circle cx="18" cy="40" r="3" fill="#FFF0BD"/>
            <circle cx="50" cy="30" r="3.5" fill="#FFF0BD"/>
            <circle cx="82" cy="40" r="3" fill="#FFF0BD"/>
            {/* Crossed spoon and fork */}
            <path d="M38 72L62 92" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M62 72L38 92" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round"/>
            <ellipse cx="64" cy="70" rx="3.5" ry="5" transform="rotate(45 64 70)" stroke="#D4AF37" strokeWidth="1.5" fill="#D4AF37" fillOpacity="0.4"/>
            <defs>
              <linearGradient id="goldGradFull" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF0BD"/>
                <stop offset="50%" stopColor="#D4AF37"/>
                <stop offset="100%" stopColor="#997305"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold px-2 py-0.5 border-b border-[#D4AF37]/30">
          SONU
        </div>

        <div className="font-royal text-xl sm:text-2xl font-bold tracking-widest text-[#FDF8F0] mt-1">
          THE ROYAL TREAT
        </div>

        <div className="text-[11px] tracking-[0.2em] uppercase text-[#D4AF37] font-medium">
          Premium Catering Services
        </div>

        <div className="flex items-center gap-2 text-[10px] text-[#C8B9A6] mt-1">
          <span>Fast Food</span>
          <span>·</span>
          <span>Chinese</span>
          <span>·</span>
          <span>South Indian</span>
        </div>

        <div className="text-[11px] text-[#D4AF37]/80 mt-1 font-medium">
          Neemuch, Madhya Pradesh
        </div>

        {showContact && (
          <div className="mt-2 text-xs text-[#FDF8F0]/90 font-mono">
            Mob: +91 83598 17717
          </div>
        )}
      </div>
    );
  }

  // Default compact navbar lockup
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Crown Mini Emblem */}
      <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-[#3b0c1b] to-[#1e040b] border border-[#D4AF37]/40 flex items-center justify-center shadow-md shrink-0">
        <svg className="w-6 h-6 text-[#D4AF37]" viewBox="0 0 100 100" fill="none">
          <path d="M18 42L28 62H72L82 42L65 52L50 32L35 52L18 42Z" fill="url(#goldGradMini)" stroke="#F3E08F" strokeWidth="2"/>
          <circle cx="18" cy="40" r="3.5" fill="#FFF0BD"/>
          <circle cx="50" cy="30" r="4" fill="#FFF0BD"/>
          <circle cx="82" cy="40" r="3.5" fill="#FFF0BD"/>
          <defs>
            <linearGradient id="goldGradMini" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF0BD"/>
              <stop offset="100%" stopColor="#D4AF37"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-royal text-base sm:text-lg font-bold tracking-wider text-[#FDF8F0]">
            THE ROYAL TREAT
          </span>
          <span className="text-[9px] tracking-widest text-[#D4AF37] font-bold border border-[#D4AF37]/40 px-1 rounded-xs">
            SONU
          </span>
        </div>
        <div className="text-[9px] sm:text-[10px] tracking-[0.16em] uppercase text-[#D4AF37] font-medium leading-tight mt-0.5">
          Premium Catering Services · Neemuch
        </div>
      </div>
    </div>
  );
};
