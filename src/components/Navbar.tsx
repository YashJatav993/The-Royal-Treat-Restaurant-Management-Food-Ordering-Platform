import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';
import { RoyalLogo } from './RoyalLogo';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenAdmin: () => void;
  isAdminLoggedIn: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenAdmin,
  isAdminLoggedIn
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'menu', label: 'Menu' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'custom-quote', label: 'Quote Builder' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1c040c]/95 backdrop-blur-md border-b border-[#D4AF37]/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Brand Title */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="focus:outline-none text-left cursor-pointer group"
          aria-label="The Royal Treat Home"
        >
          <RoyalLogo variant="compact" />
        </button>

        {/* Zone 2: 4-6 Clean Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm tracking-wider uppercase font-medium transition-colors whitespace-nowrap cursor-pointer relative py-1 ${
                  isActive 
                    ? 'text-[#FFF0BD] font-semibold' 
                    : 'text-[#CBB89D] hover:text-[#FDF8F0]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions (Call Now & WhatsApp) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+918359817717"
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#1e040b] bg-[#D4AF37] hover:bg-[#F3E08F] rounded-md transition-all shadow-md hover:shadow-[#D4AF37]/20 whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Now</span>
          </a>

          <a
            href="https://wa.me/918359817717?text=Hello%20The%20Royal%20Treat,%20I%20would%20like%20to%20enquire%20about%20catering%20for%20my%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium uppercase tracking-wider text-[#FDF8F0] border border-[#D4AF37]/40 hover:bg-[#340B18] rounded-md transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          {/* Admin shortcut button */}
          <button
            onClick={onOpenAdmin}
            title="Open Admin Dashboard"
            className={`p-2 rounded-md border transition-all cursor-pointer ${
              isAdminLoggedIn 
                ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#FFF0BD]' 
                : 'border-[#D4AF37]/30 text-[#CBB89D] hover:text-[#FFF0BD] hover:border-[#D4AF37]'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:+918359817717"
            className="p-2 text-[#1e040b] bg-[#D4AF37] rounded-md"
            aria-label="Call caterer"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#CBB89D] hover:text-[#FDF8F0] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#240710] border-b border-[#D4AF37]/30 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2.5 rounded text-xs tracking-wider uppercase font-medium ${
                  activeTab === item.id
                    ? 'bg-[#3b0c1b] text-[#FFF0BD] border border-[#D4AF37]/40'
                    : 'text-[#CBB89D] hover:bg-[#340B18] hover:text-[#FDF8F0]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col gap-2">
            <a
              href="https://wa.me/918359817717?text=Hello%20The%20Royal%20Treat,%20I%20would%20like%20to%20enquire%20about%20catering%20for%20my%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FDF8F0] bg-emerald-800/60 border border-emerald-500/50 rounded-md"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium uppercase tracking-wider text-[#D4AF37] border border-[#D4AF37]/40 rounded-md hover:bg-[#340B18]"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{isAdminLoggedIn ? 'Admin Panel (Logged In)' : 'Admin Login'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
