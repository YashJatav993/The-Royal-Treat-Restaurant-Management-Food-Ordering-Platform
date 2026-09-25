import React from 'react';
import { Sparkles, CalendarCheck, UtensilsCrossed, CheckCircle2 } from 'lucide-react';

interface WeddingServicesProps {
  onPlanEvent: () => void;
  onExploreMenu: () => void;
}

export const WeddingServices: React.FC<WeddingServicesProps> = ({ onPlanEvent, onExploreMenu }) => {
  const services = [
    {
      id: 'wedding',
      title: 'Grand Wedding Catering',
      icon: '💍',
      tagline: 'Complete royal feasts from baraat welcome to vidaai breakfast',
      description: 'End-to-end culinary management for 200 to 2,000+ guests. Includes royal welcome drinks, multi-cuisine live stations, lavish main course buffet with pure desi ghee preparations, and opulent dessert counters.',
      highlights: ['Customized Bride & Groom Special Menu', 'Brass & Silver-Toned Chafing Buffets', 'Dedicated Head Chef & Uniformed Servers', 'Fresh Live Counter Installations']
    },
    {
      id: 'reception',
      title: 'Engagement & Reception',
      icon: '🏛️',
      tagline: 'Sophisticated dining and stylish modern presentation',
      description: 'Celebrate your ring ceremony or grand reception with a curated fusion menu of North Indian gravies, Indo-Chinese woks, and live tawa breads designed to dazzle family and esteemed guests.',
      highlights: ['Finger Food & Cocktail Starters', 'Aromatic Dum Biryani Counters', 'Artisanal Dessert Displays', 'Elegant Table Service Option']
    },
    {
      id: 'birthday',
      title: 'Birthday Celebrations',
      icon: '🎉',
      tagline: 'Fun, flavourful food stations for all age groups',
      description: 'Exciting food packages featuring live fast food stations, cheesy pizzas, sliders, crispy momos, pasta woks, and mocktail punch bars that kids and adults alike adore.',
      highlights: ['Live Burger & Fries Station', 'Custom Kids-Friendly Spice Levels', 'Mocktail Bar & Welcome Coolers', 'Dessert & Cupcake Presentation']
    },
    {
      id: 'corporate',
      title: 'Corporate Events & Seminars',
      icon: '🏢',
      tagline: 'Punctual, hygienic, executive culinary hospitality',
      description: 'From executive high tea boxes to high-profile conference lunch buffets in Neemuch and Malwa region. Seamless logistical execution keeping schedules strictly on time.',
      highlights: ['High Tea & Assorted Canapés', 'Balanced Multi-Course Luncheons', 'Eco-Friendly Premium Cutlery', 'Professional Invoice & Billing']
    },
    {
      id: 'private',
      title: 'Private Family Functions',
      icon: '🥳',
      tagline: 'Intimate warmth with unmatched royal taste',
      description: 'Anniversary dinners, housewarming feasts (Griha Pravesh), pooja mahaprasad, and family reunions tailored with customized dietary preferences including pure Jain menus.',
      highlights: ['Special Jain Catering Options', 'Traditional Neemuch / Malwi Specialties', 'Flexible Guest Counts (50+)', 'Complete Post-Event Cleanup']
    }
  ];

  const liveCounters = [
    {
      name: 'South Indian Dosa Counter',
      icon: '🥘',
      desc: 'Sizzling hot tawa dosas (Mysore Masala, Cheese Burst, Butter Dosa) with 4 freshly ground chutneys & hot drumstick sambar.'
    },
    {
      name: 'Live Indo-Chinese Wok Counter',
      icon: '🍜',
      desc: 'Master chefs tossing fiery Hakka noodles, fried rice, crispy chilli paneer, and veg Manchurian right before your guests.'
    },
    {
      name: 'Royal Chaat & Street Counter',
      icon: '🥗',
      desc: 'Crisp puris with 3 flavoured water varieties, dahi papdi chaat, khasta kachori, and aloo tikki with tamarind sonth.'
    },
    {
      name: 'Artisanal Pasta & Pizza Bar',
      icon: '🍕',
      desc: 'Live pasta cooked in velvety Alfredo, spicy Arrabbiata, and pink sauces with fresh garlic herb baguettes and hot pizzas.'
    },
    {
      name: 'Live Rabdi Jalebi & Halwa Counter',
      icon: '🍰',
      desc: 'Golden spiral jalebis fried live in pure desi ghee, served piping hot over thick chilled kesar badam rabdi.'
    },
    {
      name: 'Signature Mocktail & Beverage Bar',
      icon: '🥤',
      desc: 'Handcrafted Blue Lagoons, Mint Mojitos, and warm Shahi Kesar Badam Milk served in earthen kulhad cups.'
    }
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#1e040b] text-[#FDF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Wedding Services Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Royal Event Hospitality</span>
          </div>

          <h2 className="font-royal text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#FDF8F0] mb-4">
            Make Your Wedding Truly Royal
          </h2>

          <p className="text-sm sm:text-base text-[#CBB89D] font-light leading-relaxed">
            From welcome drinks and royal starters to the grand banquet main course and authentic live culinary counters, 
            The Royal Treat provides customised catering solutions designed seamlessly around your celebration in Neemuch.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="bg-[#270712] border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="text-3xl mb-3">{svc.icon}</div>
                <h3 className="font-royal text-xl font-bold text-[#FDF8F0] mb-1">
                  {svc.title}
                </h3>
                <p className="text-xs text-[#D4AF37] italic font-subheading mb-3">
                  {svc.tagline}
                </p>
                <p className="text-xs sm:text-sm text-[#CBB89D] font-light leading-relaxed mb-5">
                  {svc.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#D4AF37]/15">
                  {svc.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#E2D5C3]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
                <button
                  onClick={onPlanEvent}
                  className="text-xs font-semibold uppercase tracking-wider text-[#FFF0BD] hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Request Quote for this →
                </button>
              </div>
            </div>
          ))}

          {/* Quick Consultation Spotlight Card */}
          <div className="bg-gradient-to-br from-[#3b0c1b] to-[#1e040b] border-2 border-[#D4AF37]/60 rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="text-3xl mb-3">👑</div>
              <h3 className="font-royal text-xl font-bold text-[#FFF0BD] mb-2">
                Custom Wedding Packages
              </h3>
              <p className="text-xs sm:text-sm text-[#E2D5C3] font-light leading-relaxed mb-6">
                Planning a large wedding in Neemuch or surrounding cities? 
                Talk directly with Sonu ji to sample food, customize spice profiles, and match your budget perfectly.
              </p>
              <div className="p-4 rounded-lg bg-[#180308]/60 border border-[#D4AF37]/30 text-xs text-[#CBB89D] space-y-1">
                <div>✓ Free In-Person Menu Consultation</div>
                <div>✓ Authentic Tasting Sessions</div>
                <div>✓ Flexible Per-Plate Packages</div>
              </div>
            </div>

            <button
              onClick={onPlanEvent}
              className="mt-6 w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#1e040b] bg-[#D4AF37] hover:bg-[#F3E08F] rounded-md transition-all shadow-md cursor-pointer"
            >
              Book Catering Consultation
            </button>
          </div>
        </div>

        {/* Section 2: Live Food Counters Showcase */}
        <div className="pt-12 border-t border-[#D4AF37]/20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
              <UtensilsCrossed className="w-4 h-4" />
              <span>Interactive Dining Experiences</span>
            </div>

            <h3 className="font-royal text-2xl sm:text-3xl md:text-4xl font-bold text-[#FDF8F0] tracking-wide mb-3">
              Live Counters for Your Celebration
            </h3>

            <p className="text-xs sm:text-sm text-[#CBB89D] font-light">
              Live cooking stations bring unmatched theatrical excitement and piping hot freshness to your party. 
              Guests love seeing their food prepared fresh right in front of their eyes!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveCounters.map((counter, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#25060f] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-[#3b0c1b] border border-[#D4AF37]/30 flex items-center justify-center text-2xl shrink-0">
                  {counter.icon}
                </div>
                <div>
                  <h4 className="font-royal text-base font-bold text-[#FDF8F0] mb-1">
                    {counter.name}
                  </h4>
                  <p className="text-xs text-[#CBB89D] font-light leading-relaxed">
                    {counter.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onExploreMenu}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-[#FFF0BD] border border-[#D4AF37]/50 hover:bg-[#340B18] rounded-md transition-all cursor-pointer"
            >
              <span>Explore All Dishes For Your Live Stations</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
