import React from 'react';
import { RoyalLogo } from './RoyalLogo';
import { Phone, MessageCircle, Mail, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAdmin }) => {
  return (
    <footer className="bg-[#140207] border-t border-[#D4AF37]/25 text-[#FDF8F0] pt-16 pb-20 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D4AF37]/15">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <RoyalLogo variant="compact" className="mb-4" />
            <p className="text-xs sm:text-sm text-[#CBB89D] font-light leading-relaxed mb-6">
              The Royal Treat (Sonu Ji) is Neemuch’s premier wedding and grand event catering service. 
              We bring royalty to your celebrations with authentic Indian gravies, live South Indian dosas, 
              sizzling Chinese woks, and artisanal desserts.
            </p>
            <div className="text-xs text-[#FFF0BD] flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Neemuch, Madhya Pradesh 458441</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-royal text-sm font-bold text-[#FFF0BD] uppercase tracking-wider mb-4 border-b border-[#D4AF37]/30 pb-1 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#CBB89D]">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#FFF0BD] transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#FFF0BD] transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-[#FFF0BD] transition-colors cursor-pointer">
                  Full Menu Explorer
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#FFF0BD] transition-colors cursor-pointer">
                  Catering Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-[#FFF0BD] transition-colors cursor-pointer">
                  Photo Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('custom-quote')} className="hover:text-[#FFF0BD] transition-colors cursor-pointer">
                  Custom Quote Builder
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#FFF0BD] transition-colors cursor-pointer">
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Cuisines */}
          <div className="lg:col-span-3">
            <h4 className="font-royal text-sm font-bold text-[#FFF0BD] uppercase tracking-wider mb-4 border-b border-[#D4AF37]/30 pb-1 inline-block">
              Our Cuisines
            </h4>
            <ul className="space-y-2.5 text-xs text-[#CBB89D]">
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-[#FFF0BD] transition-colors cursor-pointer text-left">
                  🍜 Indo-Chinese Delicacies & Woks
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-[#FFF0BD] transition-colors cursor-pointer text-left">
                  🥘 South Indian Tawa Dosa & Idli Live
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-[#FFF0BD] transition-colors cursor-pointer text-left">
                  🍔 Modern Fast Food, Pizzas & Snacks
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-[#FFF0BD] transition-colors cursor-pointer text-left">
                  🍛 Royal Shahi Gravies & Dal Makhani
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-[#FFF0BD] transition-colors cursor-pointer text-left">
                  🍰 Desi Ghee Sweets & Rabdi Jalebi
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-[#FFF0BD] transition-colors cursor-pointer text-left">
                  🥤 Refreshing Welcome Mocktails & Kesar Milk
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="font-royal text-sm font-bold text-[#FFF0BD] uppercase tracking-wider mb-4 border-b border-[#D4AF37]/30 pb-1 inline-block">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-[#CBB89D]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+918359817717" className="hover:text-[#FFF0BD] font-mono">
                  +91 83598 17717
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/918359817717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 font-mono"
                >
                  WhatsApp: +91 83598 17717
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="font-mono">theroyaltreat.neemuch@gmail.com</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenAdmin}
                  className="text-[11px] text-[#D4AF37] hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>Caterer Staff & Admin Login</span>
                  <span>⚙️</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#CBB89D]/80">
          <div>
            © 2026 The Royal Treat. All Rights Reserved. Premium Catering Services in Neemuch, MP.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with royal pride in Neemuch</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>

      </div>
    </footer>
  );
};
