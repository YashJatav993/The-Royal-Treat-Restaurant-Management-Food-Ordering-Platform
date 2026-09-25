import React, { useState } from 'react';
import { Enquiry } from '../types';
import { MapPin, Phone, MessageCircle, Mail, Send, CheckCircle2, Navigation, Clock } from 'lucide-react';
import { RoyalLogo } from './RoyalLogo';

interface ContactSectionProps {
  onSubmitEnquiry: (enquiry: Omit<Enquiry, 'id' | 'status' | 'createdAt'>) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSubmitEnquiry }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState<'Wedding' | 'Reception' | 'Birthday' | 'Engagement' | 'Corporate' | 'Private Party' | 'Other'>('Wedding');
  const [eventDate, setEventDate] = useState('');
  const [guests, setGuests] = useState('300');
  const [location, setLocation] = useState('');
  const [cuisinePref, setCuisinePref] = useState('North Indian, Chinese & Live Dosa Counter');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !location.trim()) {
      alert('Please fill in required fields: Name, Phone Number, and Location.');
      return;
    }

    const payload: Omit<Enquiry, 'id' | 'status' | 'createdAt'> = {
      customerName: name,
      phone,
      eventType,
      eventDate: eventDate || new Date().toISOString().split('T')[0],
      guestCount: parseInt(guests) || 100,
      location,
      cuisines: [cuisinePref],
      message: message || `Enquiry for ${eventType} on ${eventDate || 'upcoming date'} in ${location}.`,
      estimatedBudget: (parseInt(guests) || 100) * 350
    };

    onSubmitEnquiry(payload);
    setIsSubmitted(true);
  };

  const getWhatsAppEnquiryLink = () => {
    const text = `Hello The Royal Treat,
My Name: ${name || 'Prospective Host'}
Phone: ${phone || 'Not shared yet'}
Event Type: ${eventType}
Expected Guests: ${guests}
Location: ${location || 'Neemuch, MP'}
Date: ${eventDate || 'Upcoming'}
Cuisines: ${cuisinePref}
Message: ${message || 'I would like to enquire about your wedding & event catering packages.'}`;

    return `https://wa.me/918359817717?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-20 sm:py-24 bg-[#180308] text-[#FDF8F0] relative" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            <MessageCircle className="w-4 h-4" />
            <span>Connect Directly With Sonu Ji</span>
          </div>

          <h2 className="font-royal text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#FDF8F0] mb-4">
            Let's Plan Your Celebration
          </h2>

          <p className="text-sm sm:text-base text-[#CBB89D] font-light leading-relaxed">
            Reach out today to discuss customized catering packages, food tastings, and seamless event arrangements in Neemuch, Madhya Pradesh.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Official Business Details & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Business Card Box */}
            <div className="bg-[#240710] border border-[#D4AF37]/35 rounded-2xl p-6 sm:p-8 shadow-xl">
              <RoyalLogo variant="full" className="mb-6" />

              <div className="space-y-4 pt-4 border-t border-[#D4AF37]/20 text-sm">
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FFF0BD] block text-xs uppercase tracking-wider">Business Location</strong>
                    <span className="text-[#E2D5C3] text-xs sm:text-sm">
                      Tagor Marg / Station Road, Neemuch, Madhya Pradesh 458441
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FFF0BD] block text-xs uppercase tracking-wider">Official Calling Number</strong>
                    <div className="space-y-0.5 text-xs sm:text-sm font-mono text-[#FDF8F0]">
                      <div>
                        <a href="tel:+918359817717" className="hover:text-[#D4AF37] transition-colors">
                          +91 83598 17717 (Sonu Ji)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FFF0BD] block text-xs uppercase tracking-wider">WhatsApp Instant Chat</strong>
                    <a
                      href="https://wa.me/918359817717?text=Hello%20The%20Royal%20Treat,%20I%20would%20like%20to%20enquire%20about%20catering%20for%20my%20event."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-emerald-300 hover:text-emerald-200 underline font-mono"
                    >
                      +91 83598 17717 (Click to Chat)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FFF0BD] block text-xs uppercase tracking-wider">Service Coverage</strong>
                    <span className="text-[#E2D5C3] text-xs">
                      Neemuch, Manasa, Jawad, Singoli, Mandsaur, Chittorgarh & surrounding regions.
                    </span>
                  </div>
                </div>

              </div>

              {/* Direct Call & WhatsApp Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-[#D4AF37]/20">
                <a
                  href="tel:+918359817717"
                  className="flex items-center justify-center gap-2 py-3 px-3 text-xs font-semibold uppercase tracking-wider text-[#1e040b] bg-[#D4AF37] hover:bg-[#F3E08F] rounded-lg transition-all shadow-md text-center"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Caterer</span>
                </a>

                <a
                  href="https://wa.me/918359817717?text=Hello%20The%20Royal%20Treat,%20I%20would%20like%20to%20enquire%20about%20catering%20for%20my%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 text-xs font-semibold uppercase tracking-wider text-[#FDF8F0] bg-emerald-800/80 hover:bg-emerald-700 rounded-lg border border-emerald-500/50 transition-all text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Interactive OpenStreetMap Embed of Neemuch, MP */}
            <div className="bg-[#240710] border border-[#D4AF37]/30 rounded-2xl overflow-hidden shadow-xl p-4">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FFF0BD]">
                  <Navigation className="w-4 h-4 text-[#D4AF37]" />
                  <span>Neemuch, Madhya Pradesh</span>
                </div>
                <a
                  href="https://www.google.com/maps/search/Neemuch+Madhya+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#D4AF37] hover:underline flex items-center gap-1"
                >
                  <span>Get Directions</span>
                  <span>↗</span>
                </a>
              </div>

              <div className="h-48 w-full rounded-xl overflow-hidden border border-[#D4AF37]/20 relative">
                <iframe
                  title="The Royal Treat Neemuch Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=74.8400%2C24.4300%2C74.9100%2C24.4900&amp;layer=mapnik&amp;marker=24.4600%2C74.8700"
                  className="filter invert-[90%] hue-rotate-180 contrast-90"
                />
              </div>
              <div className="text-[11px] text-[#CBB89D] text-center mt-2">
                Proudly based in Neemuch, MP · Available for on-location banquet catering
              </div>
            </div>

          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#240710] border-2 border-[#D4AF37]/40 rounded-2xl p-6 sm:p-9 shadow-2xl relative">
              
              <h3 className="font-royal text-2xl font-bold text-[#FDF8F0] mb-2">
                Send an Event Enquiry
              </h3>
              
              <p className="text-xs sm:text-sm text-[#CBB89D] font-light mb-6">
                Tell us about your upcoming wedding, reception, or party. We will get back with customized menu proposals and pricing.
              </p>

              {isSubmitted ? (
                <div className="py-12 px-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-900/60 border border-emerald-500/60 flex items-center justify-center mx-auto mb-4 text-emerald-400">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-royal text-2xl font-bold text-[#FFF0BD] mb-2">
                    Enquiry Received!
                  </h4>
                  <p className="text-sm text-[#E2D5C3] font-light max-w-md mx-auto mb-6">
                    Thank you! Your enquiry has been received. Our team will contact you shortly.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppEnquiryLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold bg-emerald-700 hover:bg-emerald-600 text-white rounded-md transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Ping Sonu Ji on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setName('');
                        setPhone('');
                        setLocation('');
                        setMessage('');
                      }}
                      className="px-5 py-2.5 text-xs uppercase tracking-wider font-medium text-[#CBB89D] hover:text-[#FFF0BD] border border-[#D4AF37]/30 rounded-md"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ramesh Patel"
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0] placeholder-[#CBB89D]/50 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 83598 XXXXX"
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0] placeholder-[#CBB89D]/50 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-1">
                        Event Type *
                      </label>
                      <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value as any)}
                        className="w-full px-3 py-2.5 text-xs rounded-lg bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0] focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="Wedding">Wedding</option>
                        <option value="Reception">Reception</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Corporate">Corporate Event</option>
                        <option value="Private Party">Private Party</option>
                        <option value="Other">Other Celebration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-1">
                        Event Date
                      </label>
                      <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs rounded-lg bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0] focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-1">
                        No. of Guests *
                      </label>
                      <input
                        type="number"
                        required
                        min="20"
                        max="5000"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        placeholder="e.g. 350"
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0] focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-1">
                        Event Location / Venue *
                      </label>
                      <input
                        type="text"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Radhaswami Garden, Neemuch"
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0] placeholder-[#CBB89D]/50 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-1">
                        Cuisine Preference
                      </label>
                      <input
                        type="text"
                        value={cuisinePref}
                        onChange={(e) => setCuisinePref(e.target.value)}
                        placeholder="e.g. Chinese + South Indian + Desi Ghee Sweets"
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0] placeholder-[#CBB89D]/50 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-1">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Mention any requirements like Live Dosa station, Chinese Wok, Jain menu requirements, budget targets, etc."
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0] placeholder-[#CBB89D]/50 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1e040b] bg-[#D4AF37] hover:bg-[#F3E08F] rounded-lg transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Enquiry</span>
                    </button>

                    <a
                      href={getWhatsAppEnquiryLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#FDF8F0] bg-emerald-800/80 hover:bg-emerald-700 rounded-lg border border-emerald-500/50 transition-all flex items-center justify-center gap-2 text-center"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>WhatsApp Directly</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-[#CBB89D]/75 text-center mt-2">
                    🔒 Your details are safe with us. Sonu ji personally contacts every event host.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
