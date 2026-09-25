import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Sparkles, Maximize2 } from 'lucide-react';

interface GallerySectionProps {
  items: GalleryItem[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ items }) => {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'WEDDINGS' | 'FOOD' | 'BUFFET' | 'DECORATION' | 'EVENTS'>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['ALL', 'WEDDINGS', 'FOOD', 'BUFFET', 'DECORATION', 'EVENTS'] as const;

  const filteredItems = activeCategory === 'ALL'
    ? items
    : items.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-[#1a040b] text-[#FDF8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Visual Splendour & Catering Portfolio</span>
          </div>

          <h2 className="font-royal text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#FDF8F0] mb-4">
            Our Royal Event Gallery
          </h2>

          <p className="text-sm sm:text-base text-[#CBB89D] font-light leading-relaxed">
            Feast your eyes on authentic culinary setups, live cooking stations, lavish dessert spreads, 
            and regal wedding banquets orchestrated by The Royal Treat across Neemuch and Madhya Pradesh.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#D4AF37] text-[#1e040b] font-bold shadow-md'
                    : 'bg-[#270712] text-[#CBB89D] border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:text-[#FFF0BD]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-72 sm:h-80 rounded-xl overflow-hidden cursor-pointer border border-[#D4AF37]/30 bg-[#25060f] shadow-lg hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              {/* Dark Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#180308] via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Tag & View icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-[#180308]/80 p-2 rounded-full border border-[#D4AF37]/50 text-[#FFF0BD]">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-0 inset-x-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
                  {item.category}
                </span>
                <h4 className="font-royal text-base sm:text-lg font-bold text-[#FDF8F0] leading-snug">
                  {item.title}
                </h4>
                {item.description && (
                  <p className="text-xs text-[#CBB89D] line-clamp-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-[#340B18] border border-[#D4AF37]/50 text-[#FFF0BD] hover:text-white hover:bg-[#4a1221] transition-all cursor-pointer"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#340B18]/80 border border-[#D4AF37]/50 text-[#FFF0BD] hover:bg-[#4a1221] transition-all cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#340B18]/80 border border-[#D4AF37]/50 text-[#FFF0BD] hover:bg-[#4a1221] transition-all cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content Window */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
          >
            <div className="relative rounded-lg overflow-hidden border border-[#D4AF37]/40 shadow-2xl max-h-[75vh] w-auto">
              <img
                src={filteredItems[lightboxIndex].imageUrl}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                {filteredItems[lightboxIndex].category} · Image {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <h3 className="font-royal text-xl sm:text-2xl font-bold text-[#FDF8F0] mt-1">
                {filteredItems[lightboxIndex].title}
              </h3>
              {filteredItems[lightboxIndex].description && (
                <p className="text-xs sm:text-sm text-[#CBB89D] max-w-xl mx-auto mt-1">
                  {filteredItems[lightboxIndex].description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
