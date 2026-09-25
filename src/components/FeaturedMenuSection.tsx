import React, { useState } from 'react';
import { MenuItem } from '../types';
import { ArrowRight, Flame, Plus } from 'lucide-react';

interface FeaturedMenuSectionProps {
  items: MenuItem[];
  onViewFullMenu: () => void;
  onAddToQuote?: (item: MenuItem) => void;
}

export const FeaturedMenuSection: React.FC<FeaturedMenuSectionProps> = ({
  items,
  onViewFullMenu,
  onAddToQuote
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Chinese' | 'South Indian' | 'Fast Food' | 'Main Course'>('All');

  const popularItems = items.filter(item => item.isPopular && item.isAvailable);
  const displayedItems = selectedFilter === 'All' 
    ? popularItems.slice(0, 6)
    : items.filter(i => i.category === selectedFilter && i.isAvailable).slice(0, 6);

  return (
    <section className="py-20 bg-[#1e040b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            <Flame className="w-4 h-4" />
            <span>Masterpiece Culinary Creations</span>
          </div>

          <h2 className="font-royal text-3xl sm:text-4xl md:text-5xl font-bold text-[#FDF8F0] tracking-wide mb-4">
            Curated Menu Highlights
          </h2>

          <p className="text-sm sm:text-base text-[#CBB89D] font-light leading-relaxed">
            A glimpse into our celebrated culinary repertoire crafted for weddings and events in Neemuch. 
            From sizzling live Chinese woks and South Indian tawa dosas to royal wedding feasts.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {(['All', 'Chinese', 'South Indian', 'Fast Food', 'Main Course'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-md transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-[#D4AF37] text-[#1e040b] font-semibold shadow-md'
                    : 'bg-[#2a0712] text-[#CBB89D] border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:text-[#FDF8F0]'
                }`}
              >
                {cat === 'All' ? 'Featured Specials' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedItems.map((dish) => (
            <div
              key={dish.id}
              className="group bg-[#2a0712] border border-[#D4AF37]/25 hover:border-[#D4AF37] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(212,175,55,0.22)] flex flex-col justify-between relative"
            >
              {/* Image Container with Scrim */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-[#180308]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a0712] via-transparent to-black/40 group-hover:opacity-80 transition-opacity" />
                
                {/* Category & Subcategory Unboxed Text */}
                <div className="absolute top-3 left-3 bg-[#180308]/90 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-medium tracking-wider uppercase text-[#FFF0BD] border border-[#D4AF37]/50 shadow-md">
                  {dish.category}
                </div>

                {/* Popular or Chef Signature Badge */}
                {dish.isPopular && (
                  <div className="absolute bottom-3 left-3 bg-[#D4AF37] text-[#1e040b] text-[10px] font-bold px-2 py-0.5 rounded shadow-lg uppercase tracking-wider flex items-center gap-1">
                    <Flame className="w-3 h-3 fill-current" />
                    <span>Popular</span>
                  </div>
                )}

                {/* Veg Indicator */}
                <div className="absolute top-3 right-3 bg-[#180308]/90 backdrop-blur-md p-1.5 rounded border border-emerald-500/60 flex items-center justify-center shadow-md" title="Pure Vegetarian">
                  <div className="w-3.5 h-3.5 border-2 border-emerald-500 rounded-xs flex items-center justify-center p-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-royal text-lg font-bold text-[#FDF8F0] group-hover:text-[#FFF0BD] transition-colors leading-snug">
                      {dish.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#CBB89D] font-light leading-relaxed line-clamp-2 mb-4">
                    {dish.description}
                  </p>
                </div>

                {/* Card Footer with Price and Quick Add */}
                <div className="pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#CBB89D] block">Pricing</span>
                    <span className="font-semibold text-sm text-[#FFF0BD] tabular-nums">
                      {dish.price}
                    </span>
                  </div>

                  {onAddToQuote && (
                    <button
                      onClick={() => onAddToQuote(dish)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/40 hover:bg-[#D4AF37] hover:text-[#1e040b] hover:shadow-[0_0_12px_rgba(212,175,55,0.4)] rounded transition-all cursor-pointer"
                      title="Add to Event Quote Builder"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Dish</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Callout Button */}
        <div className="mt-14 text-center">
          <button
            onClick={onViewFullMenu}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#1e040b] bg-[#D4AF37] hover:bg-[#F3E08F] rounded-md transition-all shadow-xl hover:shadow-[#D4AF37]/25 cursor-pointer"
          >
            <span>View Complete Catering Menu (All Categories)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs text-[#CBB89D] mt-3">
            Explore 40+ dishes across Chinese, South Indian, Fast Food, Indian Gravies & Royal Desserts
          </p>
        </div>

      </div>
    </section>
  );
};
