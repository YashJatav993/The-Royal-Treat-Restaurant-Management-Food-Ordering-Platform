import React from 'react';
import { ChefHat, Utensils, Award, Sparkles, Sliders, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: ChefHat,
      title: 'Supreme Quality Food',
      desc: '100% fresh ingredients, pure cow desi ghee, handpicked authentic spices, and hygienic cooking standards.'
    },
    {
      icon: Utensils,
      title: 'Versatile Multi-Cuisine Menu',
      desc: 'Seamless mastery across Indo-Chinese, South Indian tawas, modern fast food, street chaats, and royal Indian gravies.'
    },
    {
      icon: Award,
      title: 'Wedding & Event Specialists',
      desc: 'Decades of seasoned catering expertise managing smooth food service for grand weddings of up to 2,000+ guests.'
    },
    {
      icon: Sparkles,
      title: 'Royal Visual Presentation',
      desc: 'Ornate brass and copper chafers, themed live stalls, spotless buffet linen, and royal aesthetic layout design.'
    },
    {
      icon: Sliders,
      title: 'Flexible Custom Packages',
      desc: 'Tailored per-plate packages built around your specific menu choices, event scale, and realistic family budgets.'
    },
    {
      icon: HeartHandshake,
      title: 'Punctual & Reliable Service',
      desc: 'Disciplined uniformed serving staff, warm hospitality, strict arrival punctuality, and spotless cleanup.'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#1e040b] text-[#FDF8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            <Award className="w-4 h-4" />
            <span>The Royal Distinction</span>
          </div>

          <h2 className="font-royal text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#FDF8F0] mb-4">
            Why Choose The Royal Treat
          </h2>

          <p className="text-sm sm:text-base text-[#CBB89D] font-light leading-relaxed">
            We don't merely prepare food; we curate memorable dining feasts that leave every guest complimenting your family's hospitality.
          </p>
        </div>

        {/* 6 Luxury Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-[#270712] border border-[#D4AF37]/25 hover:border-[#D4AF37] rounded-xl p-6 sm:p-7 flex flex-col justify-start transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(212,175,55,0.2)] group relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-lg bg-[#3b0c1b] border border-[#D4AF37]/30 group-hover:border-[#D4AF37] group-hover:bg-[#4a1024] flex items-center justify-center text-[#D4AF37] group-hover:text-[#FFF0BD] mb-4 transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-royal text-lg font-bold text-[#FDF8F0] group-hover:text-[#FFF0BD] transition-colors mb-2">
                  {pt.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#CBB89D] font-light leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
