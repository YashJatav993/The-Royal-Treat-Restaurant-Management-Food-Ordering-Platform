import React from 'react';
import { Testimonial } from '../types';
import { Star, MessageSquareQuote } from 'lucide-react';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="py-20 sm:py-24 bg-[#180308] text-[#FDF8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            <MessageSquareQuote className="w-4 h-4" />
            <span>Honourable Client Reviews</span>
          </div>

          <h2 className="font-royal text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#FDF8F0] mb-4">
            What Our Guests Say
          </h2>

          <p className="text-sm sm:text-base text-[#CBB89D] font-light leading-relaxed">
            Real words of appreciation from wedding families and party hosts in Neemuch and Malwa region.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#240710] border border-[#D4AF37]/30 hover:border-[#D4AF37]/70 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-lg relative"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-[#D4AF37]">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>

                <p className="font-subheading text-base sm:text-lg italic text-[#FDF8F0] leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col">
                <span className="font-royal text-sm font-bold text-[#FFF0BD]">
                  {t.name}
                </span>
                <span className="text-xs text-[#D4AF37] font-medium mt-0.5">
                  {t.eventType}
                </span>
                <div className="flex items-center gap-2 text-[11px] text-[#CBB89D] mt-1">
                  <span>{t.location}</span>
                  <span>·</span>
                  <span>{t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
