import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FeaturedMenuSection } from './components/FeaturedMenuSection';
import { MenuExplorer } from './components/MenuExplorer';
import { WeddingServices } from './components/WeddingServices';
import { CustomMenuBuilder } from './components/CustomMenuBuilder';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { AdminPanel } from './components/AdminPanel';

import { 
  INITIAL_MENU_ITEMS, 
  INITIAL_STATS, 
  INITIAL_GALLERY, 
  INITIAL_TESTIMONIALS, 
  INITIAL_ENQUIRIES 
} from './data/initialData';
import { MenuItem, Enquiry, EnquiryStatus, BusinessStats, Testimonial, GalleryItem } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [adminOpen, setAdminOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Persistent States
  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    const saved = localStorage.getItem('royal_treat_menu');
    if (!saved) return INITIAL_MENU_ITEMS;
    try {
      const parsed: MenuItem[] = JSON.parse(saved);
      // Merge with latest image paths so newly generated high-res dish photos display
      return INITIAL_MENU_ITEMS.map(initialItem => {
        const found = parsed.find(p => p.id === initialItem.id);
        if (found) {
          return {
            ...found,
            image: initialItem.image // use the newly assigned specialized image
          };
        }
        return initialItem;
      });
    } catch {
      return INITIAL_MENU_ITEMS;
    }
  });

  const [stats, setStats] = useState<BusinessStats>(() => {
    const saved = localStorage.getItem('royal_treat_stats');
    return saved ? JSON.parse(saved) : INITIAL_STATS;
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('royal_treat_testimonials');
    return saved ? JSON.parse(saved) : INITIAL_TESTIMONIALS;
  });

  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem('royal_treat_gallery');
    return saved ? JSON.parse(saved) : INITIAL_GALLERY;
  });

  const [enquiries, setEnquiries] = useState<Enquiry[]>(() => {
    const saved = localStorage.getItem('royal_treat_enquiries');
    return saved ? JSON.parse(saved) : INITIAL_ENQUIRIES;
  });

  const [selectedDishIds, setSelectedDishIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('royal_treat_selected_dishes');
    return saved ? JSON.parse(saved) : ['ch-st-2', 'ch-mc-1', 'si-ds-3', 'mc-ind-1', 'ds-1'];
  });

  // Save to LocalStorage on change
  useEffect(() => {
    localStorage.setItem('royal_treat_menu', JSON.stringify(menuItems));
  }, [menuItems]);

  useEffect(() => {
    localStorage.setItem('royal_treat_stats', JSON.stringify(stats));
  }, [stats]);

  useEffect(() => {
    localStorage.setItem('royal_treat_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem('royal_treat_gallery', JSON.stringify(galleryItems));
  }, [galleryItems]);

  useEffect(() => {
    localStorage.setItem('royal_treat_enquiries', JSON.stringify(enquiries));
  }, [enquiries]);

  useEffect(() => {
    localStorage.setItem('royal_treat_selected_dishes', JSON.stringify(selectedDishIds));
  }, [selectedDishIds]);

  // Handlers for Custom Quote Builder
  const handleToggleDish = (dishId: string) => {
    setSelectedDishIds(prev => 
      prev.includes(dishId) 
        ? prev.filter(id => id !== dishId) 
        : [...prev, dishId]
    );
  };

  const handleAddDishToQuote = (dish: MenuItem) => {
    if (!selectedDishIds.includes(dish.id)) {
      setSelectedDishIds(prev => [...prev, dish.id]);
    }
  };

  const handleClearDishes = () => {
    setSelectedDishIds([]);
  };

  // Submit Enquiry - Syncs to MySQL database & opens WhatsApp alert
  const handleSubmitEnquiry = async (enquiryData: Omit<Enquiry, 'id' | 'status' | 'createdAt'>) => {
    const tempId = `RT-${Date.now().toString().slice(-6)}`;
    const newEnquiry: Enquiry = {
      ...enquiryData,
      id: tempId,
      status: 'New',
      createdAt: new Date().toISOString()
    };
    setEnquiries(prev => [newEnquiry, ...prev]);

    // Send order to MySQL Workbench backend server
    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: enquiryData.customerName,
          phone: enquiryData.phone,
          eventType: enquiryData.eventType,
          eventDate: enquiryData.eventDate,
          guestCount: enquiryData.guestCount,
          location: enquiryData.location,
          cuisines: enquiryData.cuisines,
          selectedDishes: enquiryData.selectedDishes,
          message: enquiryData.message,
          estimatedBudget: enquiryData.estimatedBudget
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('✅ Order saved to MySQL Workbench:', data);
        if (data.whatsAppUrl) {
          // Open WhatsApp alert with formatted message for caterer owner (+91 8359817717)
          window.open(data.whatsAppUrl, '_blank');
        }
      }
    } catch (err) {
      console.warn('Backend server notification:', err);
      // Fallback: If backend is offline, still trigger direct WhatsApp message
      const dishesStr = enquiryData.selectedDishes?.join(', ') || 'Custom Menu';
      const fallbackMsg = `🔔 *NEW CATERING BOOKING - THE ROYAL TREAT*\n━━━━━━━━━━━━━━━━━━━━\n👤 *Customer:* ${enquiryData.customerName}\n📞 *Phone:* ${enquiryData.phone}\n🎉 *Event:* ${enquiryData.eventType} (${enquiryData.guestCount} Guests)\n📅 *Date:* ${enquiryData.eventDate}\n📍 *Location:* ${enquiryData.location}\n🍲 *Dishes:* ${dishesStr}\n💰 *Est. Amount:* ₹${enquiryData.estimatedBudget || 0}\n━━━━━━━━━━━━━━━━━━━━`;
      window.open(`https://wa.me/918359817717?text=${encodeURIComponent(fallbackMsg)}`, '_blank');
    }
  };

  // Admin Actions
  const handleSaveMenuItem = (item: MenuItem) => {
    setMenuItems(prev => {
      const idx = prev.findIndex(i => i.id === item.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = item;
        return copy;
      }
      return [item, ...prev];
    });
  };

  const handleDeleteMenuItem = (id: string) => {
    setMenuItems(prev => prev.filter(i => i.id !== id));
    setSelectedDishIds(prev => prev.filter(dishId => dishId !== id));
  };

  const handleUpdateEnquiryStatus = (id: string, status: EnquiryStatus) => {
    setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status } : e));
  };

  const handleDeleteEnquiry = (id: string) => {
    setEnquiries(prev => prev.filter(e => e.id !== id));
  };

  const handleSaveTestimonial = (item: Testimonial) => {
    setTestimonials(prev => {
      const idx = prev.findIndex(t => t.id === item.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = item;
        return copy;
      }
      return [item, ...prev];
    });
  };

  const handleDeleteTestimonial = (id: string) => {
    setTestimonials(prev => prev.filter(t => t.id !== id));
  };

  const handleSaveGalleryItem = (item: GalleryItem) => {
    setGalleryItems(prev => {
      const idx = prev.findIndex(g => g.id === item.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = item;
        return copy;
      }
      return [item, ...prev];
    });
  };

  const handleDeleteGalleryItem = (id: string) => {
    setGalleryItems(prev => prev.filter(g => g.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#180308] text-[#FDF8F0] flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-[#FDF8F0]">
      
      {/* Top Bar Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAdmin={() => setAdminOpen(true)}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <Hero
              onExploreMenu={() => {
                setActiveTab('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onBookEvent={() => {
                setActiveTab('custom-quote');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <AboutSection
              stats={stats}
              onExploreMenu={() => {
                setActiveTab('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <FeaturedMenuSection
              items={menuItems}
              onViewFullMenu={() => {
                setActiveTab('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onAddToQuote={handleAddDishToQuote}
            />

            <WeddingServices
              onPlanEvent={() => {
                setActiveTab('custom-quote');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onExploreMenu={() => {
                setActiveTab('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <WhyChooseUs />

            <GallerySection items={galleryItems} />

            <TestimonialsSection testimonials={testimonials} />

            <ContactSection onSubmitEnquiry={handleSubmitEnquiry} />
          </>
        )}

        {activeTab === 'about' && (
          <div className="pt-4">
            <AboutSection
              stats={stats}
              onExploreMenu={() => setActiveTab('menu')}
            />
            <WhyChooseUs />
            <TestimonialsSection testimonials={testimonials} />
            <ContactSection onSubmitEnquiry={handleSubmitEnquiry} />
          </div>
        )}

        {activeTab === 'menu' && (
          <MenuExplorer
            items={menuItems}
            onAddToQuote={handleAddDishToQuote}
            selectedDishIds={selectedDishIds}
            onRequestCustomQuote={() => {
              setActiveTab('custom-quote');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'services' && (
          <div className="pt-4">
            <WeddingServices
              onPlanEvent={() => {
                setActiveTab('custom-quote');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onExploreMenu={() => {
                setActiveTab('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <WhyChooseUs />
            <ContactSection onSubmitEnquiry={handleSubmitEnquiry} />
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="pt-4">
            <GallerySection items={galleryItems} />
            <ContactSection onSubmitEnquiry={handleSubmitEnquiry} />
          </div>
        )}

        {activeTab === 'custom-quote' && (
          <CustomMenuBuilder
            allDishes={menuItems}
            selectedDishIds={selectedDishIds}
            onToggleDish={handleToggleDish}
            onSubmitEnquiry={handleSubmitEnquiry}
            onClearDishes={handleClearDishes}
          />
        )}

        {activeTab === 'contact' && (
          <div className="pt-4">
            <ContactSection onSubmitEnquiry={handleSubmitEnquiry} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* Floating Call & WhatsApp Bar */}
      <FloatingActions
        onQuickQuote={() => {
          setActiveTab('custom-quote');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Staff & Admin Modal */}
      <AdminPanel
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        menuItems={menuItems}
        onSaveMenuItem={handleSaveMenuItem}
        onDeleteMenuItem={handleDeleteMenuItem}
        enquiries={enquiries}
        onUpdateEnquiryStatus={handleUpdateEnquiryStatus}
        onDeleteEnquiry={handleDeleteEnquiry}
        stats={stats}
        onUpdateStats={setStats}
        testimonials={testimonials}
        onSaveTestimonial={handleSaveTestimonial}
        onDeleteTestimonial={handleDeleteTestimonial}
        galleryItems={galleryItems}
        onSaveGalleryItem={handleSaveGalleryItem}
        onDeleteGalleryItem={handleDeleteGalleryItem}
        isLoggedIn={isAdminLoggedIn}
        setIsLoggedIn={setIsAdminLoggedIn}
      />

    </div>
  );
}
