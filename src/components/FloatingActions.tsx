import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface FloatingActionsProps {
  onQuickQuote: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onQuickQuote }) => {
  return (
    <>
      {/* Floating WhatsApp Action Button on Bottom Right */}
      <aside aria-label="Quick contact links" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <a
          href="https://wa.me/918359817717?text=Hello%20The%20Royal%20Treat,%20I%20would%20like%20to%20enquire%20about%20catering%20for%20my%20event."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:scale-105 transition-all duration-200 border-2 border-emerald-300/40"
          aria-label="Chat on WhatsApp with The Royal Treat"
        >
          <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
          <span className="hidden sm:inline-block max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold uppercase tracking-wider pr-1">
            WhatsApp Us
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Action Bar - adheres strictly to <= 15% mobile viewport cap */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[#1c040c]/95 backdrop-blur-md border-t border-[#D4AF37]/30 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href="tel:+918359817717"
          className="flex-1 py-2.5 px-2 bg-[#D4AF37] hover:bg-[#F3E08F] text-[#1e040b] text-xs font-bold uppercase tracking-wider rounded-md flex items-center justify-center gap-1.5 shadow-md"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Now</span>
        </a>

        <a
          href="https://wa.me/918359817717?text=Hello%20The%20Royal%20Treat,%20I%20would%20like%20to%20enquire%20about%20catering%20for%20my%20event."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider rounded-md flex items-center justify-center gap-1.5 border border-emerald-500/40 shadow-md"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onQuickQuote}
          className="py-2.5 px-3 bg-[#340B18] text-[#FFF0BD] border border-[#D4AF37]/50 text-xs font-semibold uppercase tracking-wider rounded-md flex items-center justify-center"
        >
          <span>Quote</span>
        </button>
      </div>
    </>
  );
};
