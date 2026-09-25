import React, { useState, useEffect, useRef } from 'react';
import { RoyalLogo } from './RoyalLogo';
import { BusinessStats } from '../types';
import { Sparkles, Utensils, HeartHandshake } from 'lucide-react';

interface AboutSectionProps {
  stats: BusinessStats;
  onExploreMenu: () => void;
}

// Hook to smoothly animate numbers from 0 to target on scroll
const useCountUp = (target: number, isVisible: boolean, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [target, isVisible, duration]);

  return count;
};

export const AboutSection: React.FC<AboutSectionProps> = ({ stats, onExploreMenu }) => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Numbers for live 0 -> target countup
  const guestsNumber = useCountUp(1000, isVisible, 2200);
  const eventsNumber = useCountUp(50, isVisible, 1800);
  const recipesNumber = useCountUp(20, isVisible, 1600);
  const qualityNumber = useCountUp(100, isVisible, 1500);

  return (
    <section className="py-20 sm:py-24 bg-[#1a040b] relative overflow-hidden" id="about-section">
      {/* Background watermark motif */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official Logo Crest Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm">
              <RoyalLogo variant="badge" showContact={true} className="border-gold-subtle bg-[#23060f]/90 animate-gold-glow" />
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>About The Royal Treat</span>
            </div>

            <h2 className="font-royal text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FDF8F0] tracking-wide mb-6 leading-tight">
              A Taste Worth Celebrating
            </h2>

            <p className="text-base sm:text-lg text-[#E2D5C3] font-light leading-relaxed mb-6">
              At <strong className="text-[#FFF0BD] font-semibold">The Royal Treat</strong>, led by Sonu ji in Neemuch, 
              we believe that food is the soulful heartbeat of every great Indian celebration. 
              From opulent wedding banquets and authentic traditional North Indian feasts to sizzling Indo-Chinese wok counters, 
              golden South Indian dosas, and modern artisanal fast food, our goal is to turn every event into an unforgettable culinary journey.
            </p>

            <p className="text-sm sm:text-base text-[#CBB89D] font-light leading-relaxed mb-8">
              We blend pure, fresh ingredients with royal presentation, hygienic food handling, 
              and heartfelt hospitality. Whether catering an intimate 50-guest gathering or a royal 1,000+ guest wedding reception, 
              our team ensures every dish is served fresh, hot, and bursting with authentic flavour.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-10">
              <div className="p-4 rounded-lg bg-[#270712] border border-[#D4AF37]/20 flex flex-col gap-2 hover:border-[#D4AF37] transition-colors">
                <Utensils className="w-5 h-5 text-[#D4AF37]" />
                <h4 className="text-sm font-semibold text-[#FDF8F0] font-royal">Authentic Flavours</h4>
                <p className="text-xs text-[#CBB89D]">Freshly prepared with pure spices and finest ingredients.</p>
              </div>

              <div className="p-4 rounded-lg bg-[#270712] border border-[#D4AF37]/20 flex flex-col gap-2 hover:border-[#D4AF37] transition-colors">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                <h4 className="text-sm font-semibold text-[#FDF8F0] font-royal">Royal Presentation</h4>
                <p className="text-xs text-[#CBB89D]">Brass chafers, live cooking counters, and elegant setups.</p>
              </div>

              <div className="p-4 rounded-lg bg-[#270712] border border-[#D4AF37]/20 flex flex-col gap-2 hover:border-[#D4AF37] transition-colors">
                <HeartHandshake className="w-5 h-5 text-[#D4AF37]" />
                <h4 className="text-sm font-semibold text-[#FDF8F0] font-royal">Warm Hospitality</h4>
                <p className="text-xs text-[#CBB89D]">Dedicated trained serving staff focused on guest delight.</p>
              </div>
            </div>

            <button
              onClick={onExploreMenu}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#1e040b] gold-shimmer-btn rounded-md transition-all shadow-xl hover:scale-105 cursor-pointer"
            >
              <span>Explore Our Menu Offerings</span>
            </button>
          </div>
        </div>

        {/* Live Animated 0 to Target Stats Counter Row on Scroll */}
        <div ref={statsRef} className="mt-16 pt-12 border-t border-[#D4AF37]/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="p-6 rounded-xl bg-[#23060f]/80 border border-[#D4AF37]/25 hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-300 hover:-translate-y-1.5 group">
              <div className="font-royal text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFF0BD] group-hover:text-[#D4AF37] tabular-nums mb-1 transition-colors">
                {isVisible ? `${guestsNumber.toLocaleString('en-IN')}+` : '0+'}
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-[#CBB89D] font-medium">
                Happy Guests Served
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#23060f]/80 border border-[#D4AF37]/25 hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-300 hover:-translate-y-1.5 group">
              <div className="font-royal text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFF0BD] group-hover:text-[#D4AF37] tabular-nums mb-1 transition-colors">
                {isVisible ? `${eventsNumber}+` : '0+'}
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-[#CBB89D] font-medium">
                Weddings & Events Catered
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#23060f]/80 border border-[#D4AF37]/25 hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-300 hover:-translate-y-1.5 group">
              <div className="font-royal text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFF0BD] group-hover:text-[#D4AF37] tabular-nums mb-1 transition-colors">
                {isVisible ? `${recipesNumber}+` : '0+'}
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-[#CBB89D] font-medium">
                Menu Specialties
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#23060f]/80 border border-[#D4AF37]/25 hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-300 hover:-translate-y-1.5 group">
              <div className="font-royal text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFF0BD] group-hover:text-[#D4AF37] tabular-nums mb-1 transition-colors">
                {isVisible ? `${qualityNumber}%` : '0%'}
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-[#CBB89D] font-medium">
                Shuddh Shakahari Desi Ghee
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
