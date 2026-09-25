import React, { useState, useMemo } from 'react';
import { MenuItem, CuisineCategory } from '../types';
import { Search, Plus, Check, Sparkles, Filter } from 'lucide-react';

interface MenuExplorerProps {
  items: MenuItem[];
  onAddToQuote: (item: MenuItem) => void;
  selectedDishIds?: string[];
  onRequestCustomQuote?: () => void;
}

const CATEGORIES: { id: CuisineCategory | 'All'; label: string; icon: string }[] = [
  { id: 'All', label: 'All Items', icon: '✨' },
  { id: 'Chinese', label: 'Chinese', icon: '🍜' },
  { id: 'South Indian', label: 'South Indian', icon: '🥘' },
  { id: 'Fast Food', label: 'Fast Food', icon: '🍔' },
  { id: 'Starters', label: 'Royal Starters', icon: '🥗' },
  { id: 'Main Course', label: 'Main Course', icon: '🍛' },
  { id: 'Desserts', label: 'Desserts', icon: '🍰' },
  { id: 'Beverages', label: 'Beverages', icon: '🥤' }
];

export const MenuExplorer: React.FC<MenuExplorerProps> = ({
  items,
  onAddToQuote,
  selectedDishIds = [],
  onRequestCustomQuote
}) => {
  const [activeCategory, setActiveCategory] = useState<CuisineCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('All');

  // Filter available subcategories for the active category
  const availableSubCategories = useMemo(() => {
    if (activeCategory === 'All') return [];
    const subs = new Set<string>();
    items
      .filter(item => item.category === activeCategory && item.subCategory)
      .forEach(item => {
        if (item.subCategory) subs.add(item.subCategory);
      });
    return Array.from(subs);
  }, [items, activeCategory]);

  // Filter dishes
  const filteredDishes = useMemo(() => {
    return items.filter(dish => {
      if (!dish.isAvailable) return false;
      if (activeCategory !== 'All' && dish.category !== activeCategory) return false;
      if (selectedSubCategory !== 'All' && dish.subCategory !== selectedSubCategory) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = dish.name.toLowerCase().includes(query);
        const matchesDesc = dish.description.toLowerCase().includes(query);
        const matchesCat = dish.category.toLowerCase().includes(query);
        const matchesSub = dish.subCategory?.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCat && !matchesSub) return false;
      }
      return true;
    });
  }, [items, activeCategory, selectedSubCategory, searchQuery]);

  return (
    <div className="py-14 sm:py-20 bg-[#180308] min-h-screen text-[#FDF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            <Sparkles className="w-4 h-4" />
            <span>The Royal Treat Catering Menu</span>
          </div>

          <h1 className="font-royal text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#FDF8F0] mb-4">
            Explore Our Grand Menu
          </h1>

          <p className="text-sm sm:text-base text-[#CBB89D] font-light leading-relaxed">
            Every dish is prepared using fresh spices, traditional recipes, and highest hygiene standards. 
            For weddings and bulk events in Neemuch, prices are tailored to your guest count and customized menu selection.
          </p>
        </div>

        {/* Search Bar & Stats Filter Row */}
        <div className="max-w-2xl mx-auto mb-8 relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#CBB89D]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes (e.g. Manchurian, Dosa, Paneer, Biryani, Pizza)..."
              className="w-full pl-11 pr-4 py-3 text-sm rounded-lg bg-[#270712] border border-[#D4AF37]/30 text-[#FDF8F0] placeholder-[#CBB89D]/60 focus:outline-none focus:border-[#D4AF37] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#CBB89D] hover:text-[#FDF8F0] px-2 py-1"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Primary Cuisine Category Buttons */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedSubCategory('All');
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#D4AF37] text-[#1e040b] shadow-lg shadow-[#D4AF37]/20 font-bold'
                    : 'bg-[#270712] text-[#CBB89D] border border-[#D4AF37]/25 hover:border-[#D4AF37] hover:text-[#FFF0BD]'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Subcategory Pills (when a specific category is selected) */}
        {availableSubCategories.length > 0 && (
          <div className="flex items-center justify-center gap-2 flex-wrap mb-8 pb-2 border-b border-[#D4AF37]/15">
            <span className="text-xs text-[#CBB89D] flex items-center gap-1 mr-2">
              <Filter className="w-3 h-3 text-[#D4AF37]" /> Filter Section:
            </span>
            <button
              onClick={() => setSelectedSubCategory('All')}
              className={`px-3 py-1 rounded text-xs transition-colors cursor-pointer ${
                selectedSubCategory === 'All'
                  ? 'bg-[#3b0c1b] text-[#FFF0BD] font-semibold border border-[#D4AF37]/50'
                  : 'text-[#CBB89D] hover:text-[#FDF8F0]'
              }`}
            >
              All {activeCategory}
            </button>
            {availableSubCategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubCategory(sub)}
                className={`px-3 py-1 rounded text-xs transition-colors cursor-pointer ${
                  selectedSubCategory === sub
                    ? 'bg-[#3b0c1b] text-[#FFF0BD] font-semibold border border-[#D4AF37]/50'
                    : 'text-[#CBB89D] hover:text-[#FDF8F0]'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Dish Count & Custom Quote Floating Notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-[#25060f] p-4 rounded-xl border border-[#D4AF37]/25">
          <div className="text-xs text-[#CBB89D] text-center sm:text-left">
            Showing <strong className="text-[#FFF0BD]">{filteredDishes.length}</strong> delicious dishes
            {activeCategory !== 'All' && <span> in <strong className="text-[#D4AF37]">{activeCategory}</strong></span>}
            {selectedSubCategory !== 'All' && <span> · {selectedSubCategory}</span>}
          </div>

          {onRequestCustomQuote && (
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#E2D5C3]">
                {selectedDishIds.length > 0 
                  ? `${selectedDishIds.length} dishes chosen for custom quote` 
                  : 'Select dishes to build your event package'}
              </span>
              <button
                onClick={onRequestCustomQuote}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#1e040b] bg-[#D4AF37] hover:bg-[#F3E08F] rounded-md transition-all whitespace-nowrap cursor-pointer shadow-md"
              >
                {selectedDishIds.length > 0 ? 'Review Custom Quote →' : 'Launch Quote Builder'}
              </button>
            </div>
          )}
        </div>

        {/* Menu Cards Grid */}
        {filteredDishes.length === 0 ? (
          <div className="text-center py-20 bg-[#25060f]/60 rounded-2xl border border-[#D4AF37]/20 p-8">
            <p className="text-lg text-[#FFF0BD] font-royal mb-2">No dishes found matching your criteria</p>
            <p className="text-sm text-[#CBB89D] mb-6">Try clearing your search query or selecting a different category.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSelectedSubCategory('All');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold bg-[#D4AF37] text-[#1e040b] rounded-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDishes.map((dish) => {
              const isSelected = selectedDishIds.includes(dish.id);
              return (
                <div
                  key={dish.id}
                  className={`group bg-[#240710] rounded-xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                    isSelected 
                      ? 'border-[#D4AF37] shadow-xl shadow-[#D4AF37]/10 ring-1 ring-[#D4AF37]' 
                      : 'border-[#D4AF37]/25 hover:border-[#D4AF37]/60 hover:shadow-lg'
                  }`}
                >
                  {/* Food Image with Scrim */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-[#180308]">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#240710] via-transparent to-black/30" />

                    {/* Category Label */}
                    <div className="absolute top-3 left-3 bg-[#180308]/85 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-medium tracking-wider uppercase text-[#FFF0BD] border border-[#D4AF37]/35">
                      {dish.subCategory || dish.category}
                    </div>

                    {/* Veg Indicator Stamp */}
                    <div 
                      className="absolute top-3 right-3 bg-[#180308]/85 p-1.5 rounded border border-emerald-500/60 flex items-center justify-center shadow-md"
                      title={dish.isVeg ? "100% Pure Vegetarian" : "Non-Vegetarian"}
                    >
                      <div className="w-3.5 h-3.5 border-2 border-emerald-500 rounded-xs flex items-center justify-center p-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-royal text-lg font-bold text-[#FDF8F0] group-hover:text-[#FFF0BD] transition-colors leading-snug">
                          {dish.name}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-[#CBB89D] font-light leading-relaxed line-clamp-3 mb-4">
                        {dish.description}
                      </p>
                    </div>

                    {/* Card Action & Price Row */}
                    <div className="pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between mt-auto">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#CBB89D] block">Price Guide</span>
                        <span className="font-semibold text-sm text-[#FFF0BD] tabular-nums">
                          {dish.price}
                        </span>
                      </div>

                      <button
                        onClick={() => onAddToQuote(dish)}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#D4AF37] text-[#1e040b] shadow-md'
                            : 'text-[#FFF0BD] bg-[#340B18] border border-[#D4AF37]/40 hover:bg-[#D4AF37] hover:text-[#1e040b]'
                        }`}
                      >
                        {isSelected ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span>Add to Quote</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
