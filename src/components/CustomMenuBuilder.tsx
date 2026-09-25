import React, { useState, useMemo } from 'react';
import { MenuItem, Enquiry, CuisineCategory } from '../types';
import { Calculator, Check, MessageCircle, Send, Plus, Trash2, Search, X, CheckCircle2 } from 'lucide-react';

interface CustomMenuBuilderProps {
  allDishes: MenuItem[];
  selectedDishIds: string[];
  onToggleDish: (dishId: string) => void;
  onSubmitEnquiry: (enquiry: Omit<Enquiry, 'id' | 'status' | 'createdAt'>) => void;
  onClearDishes: () => void;
}

export const CustomMenuBuilder: React.FC<CustomMenuBuilderProps> = ({
  allDishes,
  selectedDishIds,
  onToggleDish,
  onSubmitEnquiry,
  onClearDishes
}) => {
  const [eventType, setEventType] = useState<'Wedding' | 'Reception' | 'Birthday' | 'Engagement' | 'Corporate' | 'Private Party' | 'Other'>('Wedding');
  const [guestCount, setGuestCount] = useState<number>(300);
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>(['South Indian', 'Chinese', 'Main Course', 'Desserts']);
  const [activeDishCategory, setActiveDishCategory] = useState<string>('South Indian');
  const [dishSearchQuery, setDishSearchQuery] = useState<string>('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cuisineCategories: { id: string; label: string; icon: string; cat: CuisineCategory | 'All' }[] = [
    { id: 'South Indian', label: 'South Indian', icon: '🥘', cat: 'South Indian' },
    { id: 'Chinese', label: 'Chinese', icon: '🍜', cat: 'Chinese' },
    { id: 'Fast Food', label: 'Fast Food & Snacks', icon: '🍔', cat: 'Fast Food' },
    { id: 'Starters', label: 'Starters', icon: '🍢', cat: 'Starters' },
    { id: 'Main Course', label: 'Main Course', icon: '🍛', cat: 'Main Course' },
    { id: 'Desserts', label: 'Royal Desserts', icon: '🍰', cat: 'Desserts' },
    { id: 'Beverages', label: 'Mocktails & Drinks', icon: '🥤', cat: 'Beverages' },
    { id: 'All', label: 'All Dishes', icon: '✨', cat: 'All' },
  ];

  const handleCuisineToggle = (cuisineId: string) => {
    setSelectedCuisines(prev => 
      prev.includes(cuisineId) 
        ? prev.filter(c => c !== cuisineId)
        : [...prev, cuisineId]
    );
    // When a user selects a cuisine, also auto-switch the dish drawer tab to that category
    if (cuisineId !== 'All') {
      setActiveDishCategory(cuisineId);
    }
  };

  // Filtered dishes based on selected category tab AND search query
  const filteredDishes = useMemo(() => {
    return allDishes.filter(dish => {
      // Category filter: If specific category selected, show only that category
      const matchesCategory = 
        activeDishCategory === 'All' 
          ? true 
          : dish.category.toLowerCase() === activeDishCategory.toLowerCase();

      // Search query filter (search by dish name, subCategory, or description)
      const query = dishSearchQuery.trim().toLowerCase();
      const matchesSearch = !query || 
        dish.name.toLowerCase().includes(query) ||
        (dish.subCategory && dish.subCategory.toLowerCase().includes(query)) ||
        dish.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [allDishes, activeDishCategory, dishSearchQuery]);

  // Selected dishes details
  const selectedDishes = allDishes.filter(d => selectedDishIds.includes(d.id));

  // Estimated per-plate pricing calculation based on selected dishes & guest tiers
  const estimatedPerPlate = Math.max(
    250,
    selectedDishes.length > 0 
      ? Math.round(selectedDishes.reduce((acc, d) => acc + (d.numericPrice || 80) * 0.45, 120))
      : 350
  );

  const totalEstimatedBudget = guestCount * estimatedPerPlate;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !location) {
      alert('Please fill in Name, Phone, and Location.');
      return;
    }

    const payload: Omit<Enquiry, 'id' | 'status' | 'createdAt'> = {
      customerName,
      phone: customerPhone,
      eventType,
      eventDate: eventDate || new Date().toISOString().split('T')[0],
      guestCount,
      location,
      cuisines: selectedCuisines,
      selectedDishes: selectedDishes.map(d => d.name),
      message: notes || `Custom menu created with ${selectedDishes.length} dishes for ${guestCount} guests.`,
      estimatedBudget: totalEstimatedBudget
    };

    onSubmitEnquiry(payload);
    setIsSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const dishNames = selectedDishes.map(d => d.name).join(', ') || 'Chef recommendations';
    const text = `*New Catering Enquiry - The Royal Treat*
*Name:* ${customerName || 'Valued Guest'}
*Phone:* ${customerPhone || 'Not provided'}
*Event:* ${eventType}
*Guests:* ${guestCount}
*Date:* ${eventDate || 'TBD'}
*Location:* ${location || 'Neemuch'}
*Cuisines Selected:* ${selectedCuisines.join(', ')}
*Selected Dishes:* ${dishNames}
*Est. Per Plate:* ₹${estimatedPerPlate}
*Est. Total Budget:* ₹${totalEstimatedBudget.toLocaleString('en-IN')}
*Special Notes:* ${notes || 'None'}`;

    return encodeURIComponent(text);
  };

  return (
    <div className="py-16 sm:py-24 bg-[#180308] text-[#FDF8F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            <Calculator className="w-4 h-4" />
            <span>Interactive Catering Estimator</span>
          </div>

          <h1 className="font-royal text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#FDF8F0] mb-4">
            Custom Event Menu & Quote Builder
          </h1>

          <p className="text-sm sm:text-base text-[#CBB89D] font-light leading-relaxed">
            Select your celebration type, estimate your guest count, filter by cuisine (like South Indian or Chinese), 
            and search any specific dish to receive an instant transparent quotation with WhatsApp and database sync.
          </p>
        </div>

        {isSubmitted ? (
          <div className="max-w-2xl mx-auto bg-[#240710] border-2 border-[#D4AF37] rounded-2xl p-8 sm:p-12 text-center shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-emerald-900/60 border border-emerald-500/60 flex items-center justify-center mx-auto mb-6 text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-royal text-2xl sm:text-3xl font-bold text-[#FFF0BD] mb-3">
              Quote Request Received!
            </h3>

            <p className="text-sm sm:text-base text-[#E2D5C3] font-light mb-6">
              Thank you, <strong className="text-[#FFF0BD]">{customerName}</strong>! 
              Sonu ji and our royal catering team in Neemuch have received your requirements for your 
              <strong> {eventType}</strong> catering with {guestCount} guests. We will contact you within a few hours.
            </p>

            <div className="p-4 rounded-xl bg-[#180308] border border-[#D4AF37]/30 text-xs text-[#CBB89D] mb-8 space-y-1.5 text-left">
              <div>• <strong>Estimated Package:</strong> ₹{estimatedPerPlate} / plate</div>
              <div>• <strong>Approx. Total Budget:</strong> ₹{totalEstimatedBudget.toLocaleString('en-IN')}</div>
              <div>• <strong>Selected Items:</strong> {selectedDishes.length} dishes</div>
              <div>• <strong>Dishes:</strong> {selectedDishes.map(d => d.name).join(', ') || 'Standard Menu'}</div>
              <div>• <strong>Location:</strong> {location}</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/918359817717?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-[#FDF8F0] bg-emerald-700 hover:bg-emerald-600 rounded-md transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp Now</span>
              </a>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClearDishes();
                }}
                className="w-full sm:w-auto px-6 py-3.5 text-xs uppercase tracking-wider font-medium text-[#CBB89D] hover:text-[#FFF0BD] border border-[#D4AF37]/30 rounded-md"
              >
                Create Another Quote
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Columns: Selection Controls */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Step 1: Event Type */}
              <div className="bg-[#240710] p-6 rounded-xl border border-[#D4AF37]/25 shadow-md">
                <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold block mb-3">
                  Step 1: Select Event Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {(['Wedding', 'Reception', 'Birthday', 'Engagement', 'Corporate', 'Private Party', 'Other'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setEventType(type)}
                      className={`px-3 py-2.5 text-xs font-semibold rounded-lg uppercase tracking-wider transition-all cursor-pointer ${
                        eventType === type
                          ? 'bg-[#D4AF37] text-[#1e040b] shadow-md font-bold'
                          : 'bg-[#180308] text-[#CBB89D] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:text-[#FFF0BD]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Guest Count Selector */}
              <div className="bg-[#240710] p-6 rounded-xl border border-[#D4AF37]/25 shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                    Step 2: Number of Guests
                  </label>
                  <span className="font-royal text-xl font-bold text-[#FFF0BD] tabular-nums">
                    {guestCount} Guests
                  </span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-4">
                  {[50, 100, 200, 300, 500, 1000].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setGuestCount(count)}
                      className={`py-2 text-xs font-medium rounded transition-all cursor-pointer ${
                        guestCount === count
                          ? 'bg-[#3b0c1b] text-[#FFF0BD] border border-[#D4AF37]'
                          : 'bg-[#180308] text-[#CBB89D] border border-[#D4AF37]/15 hover:text-[#FFF0BD]'
                      }`}
                    >
                      {count}+
                    </button>
                  ))}
                </div>

                <input
                  type="range"
                  min="30"
                  max="2000"
                  step="10"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full accent-[#D4AF37] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#CBB89D] mt-1">
                  <span>30 Guests (Intimate)</span>
                  <span>500 (Grand Banquet)</span>
                  <span>2000+ (Royal Mega Wedding)</span>
                </div>
              </div>

              {/* Step 3: Cuisine Preferences */}
              <div className="bg-[#240710] p-6 rounded-xl border border-[#D4AF37]/25 shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                    Step 3: Cuisine Preferences
                  </label>
                  <span className="text-[11px] text-[#CBB89D]">
                    Click to select preferred styles
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {cuisineCategories.filter(c => c.id !== 'All').map((c) => {
                    const isChecked = selectedCuisines.includes(c.id);
                    return (
                      <div
                        key={c.id}
                        onClick={() => handleCuisineToggle(c.id)}
                        className={`p-2.5 rounded-lg border flex items-center justify-between cursor-pointer transition-all ${
                          isChecked 
                            ? 'bg-[#350b18] border-[#D4AF37] text-[#FFF0BD]' 
                            : 'bg-[#180308] border-[#D4AF37]/20 text-[#CBB89D] hover:border-[#D4AF37]/40'
                        }`}
                      >
                        <span className="text-xs font-medium flex items-center gap-1.5 truncate">
                          <span>{c.icon}</span>
                          <span className="truncate">{c.label}</span>
                        </span>
                        <div className={`w-4 h-4 rounded shrink-0 flex items-center justify-center border ${
                          isChecked ? 'bg-[#D4AF37] border-[#D4AF37] text-[#1e040b]' : 'border-[#CBB89D]/40'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Category Filtering & Live Dish Search */}
              <div className="bg-[#240710] p-6 rounded-xl border-2 border-[#D4AF37]/40 shadow-xl space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#D4AF37]/20">
                  <div>
                    <div className="flex items-center gap-2">
                      <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold">
                        Step 4: Pick Dishes ({selectedDishIds.length} Chosen)
                      </label>
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-[#D4AF37]/20 text-[#FFF0BD] rounded-full border border-[#D4AF37]/40">
                        {filteredDishes.length} available
                      </span>
                    </div>
                    <p className="text-[11px] text-[#CBB89D]">
                      Filter by cuisine or type dish name in search box
                    </p>
                  </div>

                  {selectedDishIds.length > 0 && (
                    <button
                      onClick={onClearDishes}
                      className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 self-start sm:self-auto cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Clear All ({selectedDishIds.length})</span>
                    </button>
                  )}
                </div>

                {/* 🔍 LIVE DISH SEARCH INPUT */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#D4AF37]">
                    <Search className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={dishSearchQuery}
                    onChange={(e) => setDishSearchQuery(e.target.value)}
                    placeholder="Search dish (e.g. Masala Dosa, Idli, Paneer, Manchurian, Dal Makhani)..."
                    className="w-full pl-9 pr-9 py-2.5 text-xs sm:text-sm rounded-lg bg-[#180308] border border-[#D4AF37]/40 text-[#FFF0BD] placeholder-[#CBB89D]/50 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                  {dishSearchQuery && (
                    <button
                      onClick={() => setDishSearchQuery('')}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#CBB89D] hover:text-[#FFF0BD]"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* 🏷️ CUISINE CATEGORY TABS (South Indian, Chinese, etc.) */}
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#CBB89D] mb-1.5 font-medium">
                    Filter by Cuisine Category:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cuisineCategories.map((cat) => {
                      const isActive = activeDishCategory.toLowerCase() === cat.id.toLowerCase();
                      const categoryCount = cat.id === 'All' 
                        ? allDishes.length 
                        : allDishes.filter(d => d.category.toLowerCase() === cat.id.toLowerCase()).length;

                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => {
                            setActiveDishCategory(cat.id);
                          }}
                          className={`px-3 py-1.5 text-xs rounded-full font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                            isActive
                              ? 'bg-[#D4AF37] text-[#1e040b] shadow-md font-bold'
                              : 'bg-[#180308] text-[#CBB89D] border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 hover:text-[#FFF0BD]'
                          }`}
                        >
                          <span>{cat.icon}</span>
                          <span>{cat.label}</span>
                          <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                            isActive ? 'bg-[#1e040b]/20 text-[#1e040b]' : 'bg-[#2a0712] text-[#D4AF37]'
                          }`}>
                            {categoryCount}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* DISHES LIST SCROLL AREA */}
                <div className="max-h-72 overflow-y-auto pr-1 space-y-2 border border-[#D4AF37]/15 rounded-lg p-2 bg-[#180308]/60">
                  {filteredDishes.length === 0 ? (
                    <div className="py-8 text-center text-[#CBB89D]">
                      <Search className="w-8 h-8 text-[#D4AF37]/40 mx-auto mb-2" />
                      <p className="text-xs">No dishes found matching &quot;{dishSearchQuery}&quot; in {activeDishCategory}.</p>
                      <button
                        onClick={() => {
                          setDishSearchQuery('');
                          setActiveDishCategory('All');
                        }}
                        className="mt-2 text-xs text-[#D4AF37] underline hover:text-[#FFF0BD]"
                      >
                        Reset filters & show all dishes
                      </button>
                    </div>
                  ) : (
                    filteredDishes.map((dish) => {
                      const isSelected = selectedDishIds.includes(dish.id);
                      return (
                        <div
                          key={dish.id}
                          onClick={() => onToggleDish(dish.id)}
                          className={`p-2.5 rounded-lg border flex items-center justify-between gap-3 text-xs cursor-pointer transition-all ${
                            isSelected 
                              ? 'bg-[#3b0c1b] border-[#D4AF37] text-[#FFF0BD] shadow-sm' 
                              : 'bg-[#180308]/90 border-[#D4AF37]/15 text-[#CBB89D] hover:bg-[#250611] hover:border-[#D4AF37]/40'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 truncate">
                            <span className="text-[10px] text-[#D4AF37] bg-[#2a0712] border border-[#D4AF37]/30 px-1.5 py-0.5 rounded shrink-0">
                              {dish.category}
                            </span>
                            <div className="truncate">
                              <span className="font-semibold text-[#FDF8F0] block truncate">
                                {dish.name}
                              </span>
                              {dish.subCategory && (
                                <span className="text-[10px] text-[#CBB89D]/75 block truncate">
                                  {dish.subCategory}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-2.5 shrink-0">
                            <span className="text-[11px] font-mono text-[#D4AF37]">{dish.price}</span>
                            <button
                              type="button"
                              className={`p-1.5 rounded-md transition-colors ${
                                isSelected 
                                  ? 'bg-[#D4AF37] text-[#1e040b]' 
                                  : 'bg-[#270712] text-[#D4AF37] border border-[#D4AF37]/30'
                              }`}
                            >
                              {isSelected ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Quick Info bar */}
                <div className="flex items-center justify-between text-[11px] text-[#CBB89D] pt-1 px-1">
                  <span>Selected in this list: <strong className="text-[#FFF0BD]">{selectedDishIds.length}</strong> items</span>
                  <span>Category view: <strong className="text-[#D4AF37]">{activeDishCategory}</strong></span>
                </div>
              </div>

            </div>

            {/* Right 5 Columns: Summary & Customer Contact Form */}
            <div className="lg:col-span-5 sticky top-24 space-y-6">
              
              {/* Estimated Quote Card */}
              <div className="bg-[#2a0712] rounded-2xl border-2 border-[#D4AF37]/50 p-6 sm:p-7 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-28 h-28 bg-[#D4AF37]/10 rounded-full blur-2xl" />

                <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/25 mb-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold block">
                      Estimated Catering Quote
                    </span>
                    <h3 className="font-royal text-xl font-bold text-[#FDF8F0]">
                      {eventType} Package
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-[#CBB89D] block">Est. Per Plate</span>
                    <span className="font-royal text-xl font-bold text-[#FFF0BD] tabular-nums">
                      ₹{estimatedPerPlate}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#CBB89D] mb-4">
                  <div className="flex justify-between">
                    <span>Expected Guests:</span>
                    <strong className="text-[#FFF0BD] tabular-nums">{guestCount}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Dishes Chosen:</span>
                    <strong className="text-[#FFF0BD] tabular-nums">{selectedDishes.length} items</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Live Counters Included:</span>
                    <strong className="text-[#FFF0BD]">Yes (Live Wok / Tawa Dosa)</strong>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-[#D4AF37]/15 text-sm text-[#FDF8F0] font-semibold">
                    <span>Approx. Total Estimate:</span>
                    <span className="text-[#D4AF37] tabular-nums text-base font-bold">
                      ₹{totalEstimatedBudget.toLocaleString('en-IN')}*
                    </span>
                  </div>
                </div>

                {/* Selected Dishes Chips */}
                {selectedDishes.length > 0 && (
                  <div className="mb-4 pt-3 border-t border-[#D4AF37]/15">
                    <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] block mb-1.5 font-semibold">
                      Chosen Menu ({selectedDishes.length}):
                    </span>
                    <div className="flex flex-wrap gap-1 max-h-24 overflow-y-auto pr-1">
                      {selectedDishes.map((dish) => (
                        <span 
                          key={dish.id}
                          className="inline-flex items-center gap-1 text-[10px] bg-[#180308] border border-[#D4AF37]/40 px-2 py-0.5 rounded-full text-[#FFF0BD]"
                        >
                          <span className="truncate max-w-[120px]">{dish.name}</span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleDish(dish.id);
                            }}
                            className="hover:text-rose-400 cursor-pointer"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Form to submit quote */}
                <form onSubmit={handleSubmit} className="space-y-3 pt-3 border-t border-[#D4AF37]/25">
                  <div>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Your Full Name *"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0] placeholder-[#CBB89D]/60 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="Phone / WhatsApp Number *"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0] placeholder-[#CBB89D]/60 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0] focus:outline-none focus:border-[#D4AF37]"
                    />
                    <input
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Event Venue / Neemuch *"
                      className="w-full px-3 py-2 text-xs rounded-lg bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0] placeholder-[#CBB89D]/60 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Special instructions (e.g. Jain food only, spicy Chinese wok, extra dessert counter)..."
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0] placeholder-[#CBB89D]/60 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#1e040b] bg-[#D4AF37] hover:bg-[#F3E08F] rounded-md transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Custom Quote & Save Order</span>
                  </button>

                  <a
                    href={`https://wa.me/918359817717?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FDF8F0] bg-[#180308] hover:bg-emerald-900/60 border border-emerald-500/50 rounded-md transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Share on WhatsApp with Sonu ji</span>
                  </a>
                </form>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

