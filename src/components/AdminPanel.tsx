import React, { useState } from 'react';
import { MenuItem, Enquiry, EnquiryStatus, CuisineCategory, BusinessStats, Testimonial, GalleryItem } from '../types';
import { 
  X, Plus, Edit2, Trash2, Check, ShieldCheck, Lock, 
  Users, Utensils, MessageSquare, Image as ImageIcon, Award, Eye, EyeOff, Phone, MessageCircle 
} from 'lucide-react';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
  onSaveMenuItem: (item: MenuItem) => void;
  onDeleteMenuItem: (id: string) => void;
  enquiries: Enquiry[];
  onUpdateEnquiryStatus: (id: string, status: EnquiryStatus) => void;
  onDeleteEnquiry: (id: string) => void;
  stats: BusinessStats;
  onUpdateStats: (stats: BusinessStats) => void;
  testimonials: Testimonial[];
  onSaveTestimonial: (item: Testimonial) => void;
  onDeleteTestimonial: (id: string) => void;
  galleryItems: GalleryItem[];
  onSaveGalleryItem: (item: GalleryItem) => void;
  onDeleteGalleryItem: (id: string) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  isOpen,
  onClose,
  menuItems,
  onSaveMenuItem,
  onDeleteMenuItem,
  enquiries,
  onUpdateEnquiryStatus,
  onDeleteEnquiry,
  stats,
  onUpdateStats,
  testimonials,
  onSaveTestimonial,
  onDeleteTestimonial,
  galleryItems,
  onSaveGalleryItem,
  onDeleteGalleryItem,
  isLoggedIn,
  setIsLoggedIn
}) => {
  const [adminTab, setAdminTab] = useState<'enquiries' | 'menu' | 'stats' | 'testimonials' | 'gallery'>('enquiries');
  const [pinInput, setPinInput] = useState('');
  const [authError, setAuthError] = useState('');

  // Editing state for Menu
  const [editingDish, setEditingDish] = useState<Partial<MenuItem> | null>(null);
  // Editing state for Testimonial
  const [editingTestimonial, setEditingTestimonial] = useState<Partial<Testimonial> | null>(null);
  // Editing state for Gallery
  const [editingGallery, setEditingGallery] = useState<Partial<GalleryItem> | null>(null);
  // Local Stats Form
  const [localStats, setLocalStats] = useState<BusinessStats>(stats);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === 'royal123' || pinInput === 'admin' || pinInput === 'sonu') {
      setIsLoggedIn(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect Password. (Hint: royal123)');
    }
  };

  const handleSaveDishForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingDish || !editingDish.name || !editingDish.category) return;

    const dishToSave: MenuItem = {
      id: editingDish.id || `dish-${Date.now()}`,
      name: editingDish.name,
      category: editingDish.category as CuisineCategory,
      subCategory: editingDish.subCategory || 'Specialties',
      description: editingDish.description || '',
      price: editingDish.price || 'Price on Enquiry',
      numericPrice: Number(editingDish.numericPrice) || 120,
      isVeg: editingDish.isVeg !== undefined ? editingDish.isVeg : true,
      image: editingDish.image || '/src/assets/images/chinese_catering_spread_1790340095706.jpg',
      isPopular: !!editingDish.isPopular,
      isAvailable: editingDish.isAvailable !== undefined ? editingDish.isAvailable : true
    };

    onSaveMenuItem(dishToSave);
    setEditingDish(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#1e040b] border-2 border-[#D4AF37]/50 rounded-2xl w-full max-w-6xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-[#290710] border-b border-[#D4AF37]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#3b0c1b] border border-[#D4AF37]/40 text-[#D4AF37]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-royal text-lg sm:text-xl font-bold text-[#FDF8F0]">
                The Royal Treat Admin Dashboard
              </h2>
              <span className="text-[11px] text-[#CBB89D]">
                Sonu Ji & Catering Staff Management Console
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isLoggedIn && (
              <button
                onClick={() => setIsLoggedIn(false)}
                className="text-xs text-[#CBB89D] hover:text-[#FFF0BD] px-2 py-1 border border-[#D4AF37]/30 rounded"
              >
                Lock / Logout
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#CBB89D] hover:text-white hover:bg-[#340B18] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Auth Barrier if not logged in */}
        {!isLoggedIn ? (
          <div className="p-8 sm:p-14 flex flex-col items-center justify-center text-center my-auto">
            <div className="w-16 h-16 rounded-full bg-[#340B18] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] mb-4">
              <Lock className="w-8 h-8" />
            </div>
            <h3 className="font-royal text-2xl font-bold text-[#FFF0BD] mb-2">
              Staff & Admin Authentication
            </h3>
            <p className="text-xs sm:text-sm text-[#CBB89D] max-w-md mb-6">
              Enter the manager passcode to access incoming wedding enquiries, update menu items, and modify website stats.
            </p>

            <form onSubmit={handleLogin} className="w-full max-w-xs space-y-3">
              <input
                type="password"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="Enter password (royal123)"
                className="w-full px-4 py-2.5 text-center text-sm rounded-lg bg-[#180308] border border-[#D4AF37]/40 text-[#FDF8F0] focus:outline-none focus:border-[#D4AF37]"
              />

              {authError && (
                <p className="text-xs text-rose-400">{authError}</p>
              )}

              <button
                type="submit"
                className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1e040b] bg-[#D4AF37] hover:bg-[#F3E08F] rounded-lg transition-all shadow-md cursor-pointer"
              >
                Access Dashboard
              </button>

              <button
                type="button"
                onClick={() => {
                  setPinInput('royal123');
                  setIsLoggedIn(true);
                }}
                className="text-[11px] text-[#D4AF37]/80 hover:text-[#D4AF37] underline block mx-auto pt-2 cursor-pointer"
              >
                Quick Demo Login (Use royal123)
              </button>
            </form>
          </div>
        ) : (
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            
            {/* Sidebar Navigation */}
            <div className="w-full md:w-56 bg-[#180308] border-r border-[#D4AF37]/20 p-3 sm:p-4 flex md:flex-col gap-1 overflow-x-auto shrink-0">
              <button
                onClick={() => setAdminTab('enquiries')}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-left transition-all ${
                  adminTab === 'enquiries'
                    ? 'bg-[#3b0c1b] text-[#FFF0BD] border border-[#D4AF37]/50'
                    : 'text-[#CBB89D] hover:bg-[#25060f] hover:text-[#FDF8F0]'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#D4AF37]" />
                  <span>Enquiries</span>
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#D4AF37] text-[#1e040b] font-bold">
                  {enquiries.length}
                </span>
              </button>

              <button
                onClick={() => setAdminTab('menu')}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-left transition-all ${
                  adminTab === 'menu'
                    ? 'bg-[#3b0c1b] text-[#FFF0BD] border border-[#D4AF37]/50'
                    : 'text-[#CBB89D] hover:bg-[#25060f] hover:text-[#FDF8F0]'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-[#D4AF37]" />
                  <span>Menu Dishes</span>
                </span>
                <span className="text-[10px] text-[#CBB89D]">
                  {menuItems.length}
                </span>
              </button>

              <button
                onClick={() => setAdminTab('stats')}
                className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-left transition-all ${
                  adminTab === 'stats'
                    ? 'bg-[#3b0c1b] text-[#FFF0BD] border border-[#D4AF37]/50'
                    : 'text-[#CBB89D] hover:bg-[#25060f] hover:text-[#FDF8F0]'
                }`}
              >
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>Stats Counters</span>
              </button>

              <button
                onClick={() => setAdminTab('testimonials')}
                className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-left transition-all ${
                  adminTab === 'testimonials'
                    ? 'bg-[#3b0c1b] text-[#FFF0BD] border border-[#D4AF37]/50'
                    : 'text-[#CBB89D] hover:bg-[#25060f] hover:text-[#FDF8F0]'
                }`}
              >
                <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
                <span>Testimonials</span>
              </button>

              <button
                onClick={() => setAdminTab('gallery')}
                className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-left transition-all ${
                  adminTab === 'gallery'
                    ? 'bg-[#3b0c1b] text-[#FFF0BD] border border-[#D4AF37]/50'
                    : 'text-[#CBB89D] hover:bg-[#25060f] hover:text-[#FDF8F0]'
                }`}
              >
                <ImageIcon className="w-4 h-4 text-[#D4AF37]" />
                <span>Gallery Photos</span>
              </button>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto max-h-[78vh]">
              
              {/* TAB 1: ENQUIRIES */}
              {adminTab === 'enquiries' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#D4AF37]/20">
                    <div>
                      <h3 className="font-royal text-lg font-bold text-[#FDF8F0]">
                        Customer Event Enquiries ({enquiries.length})
                      </h3>
                      <p className="text-xs text-[#CBB89D]">
                        Review, update statuses, or reply via WhatsApp to hosts planning events in Neemuch.
                      </p>
                    </div>
                  </div>

                  {enquiries.length === 0 ? (
                    <div className="text-center py-12 text-[#CBB89D]">
                      No enquiries received yet.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {enquiries.map((enq) => {
                        const statusColors: Record<EnquiryStatus, string> = {
                          New: 'bg-emerald-950 text-emerald-300 border-emerald-500/50',
                          Contacted: 'bg-amber-950 text-amber-300 border-amber-500/50',
                          Confirmed: 'bg-blue-950 text-blue-300 border-blue-500/50',
                          Completed: 'bg-purple-950 text-purple-300 border-purple-500/50',
                          Cancelled: 'bg-rose-950 text-rose-300 border-rose-500/50',
                        };

                        const cleanPhone = enq.phone.replace(/[^0-9]/g, '');

                        return (
                          <div
                            key={enq.id}
                            className="bg-[#270712] border border-[#D4AF37]/25 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row justify-between gap-4"
                          >
                            <div className="space-y-2 flex-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="font-royal text-base font-bold text-[#FFF0BD]">
                                  {enq.customerName}
                                </span>
                                <span className="text-xs text-[#CBB89D] font-mono">
                                  ({enq.phone})
                                </span>
                                <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded border ${statusColors[enq.status] || 'bg-slate-800'}`}>
                                  {enq.status}
                                </span>
                              </div>

                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-[#E2D5C3]">
                                <div><strong>Event:</strong> {enq.eventType}</div>
                                <div><strong>Guests:</strong> {enq.guestCount}</div>
                                <div><strong>Date:</strong> {enq.eventDate}</div>
                                <div><strong>Venue:</strong> {enq.location}</div>
                              </div>

                              {enq.cuisines && enq.cuisines.length > 0 && (
                                <div className="text-xs text-[#CBB89D]">
                                  <strong>Cuisines:</strong> {enq.cuisines.join(', ')}
                                </div>
                              )}

                              {enq.selectedDishes && enq.selectedDishes.length > 0 && (
                                <div className="text-xs text-[#CBB89D] line-clamp-2">
                                  <strong>Chosen Dishes ({enq.selectedDishes.length}):</strong> {enq.selectedDishes.join(', ')}
                                </div>
                              )}

                              <div className="text-xs text-[#CBB89D] bg-[#180308]/60 p-2.5 rounded border border-[#D4AF37]/15">
                                <strong>Message:</strong> {enq.message}
                              </div>

                              {enq.estimatedBudget && (
                                <div className="text-xs text-[#D4AF37] font-semibold">
                                  Approx Budget: ₹{enq.estimatedBudget.toLocaleString('en-IN')}
                                </div>
                              )}
                            </div>

                            {/* Actions & Status Dropdown */}
                            <div className="flex sm:flex-col items-center justify-between sm:justify-start gap-2 shrink-0 border-t sm:border-t-0 sm:border-l border-[#D4AF37]/20 pt-3 sm:pt-0 sm:pl-4">
                              <div className="w-full">
                                <label className="block text-[10px] uppercase text-[#CBB89D] mb-1">
                                  Status:
                                </label>
                                <select
                                  value={enq.status}
                                  onChange={(e) => onUpdateEnquiryStatus(enq.id, e.target.value as EnquiryStatus)}
                                  className="w-full text-xs px-2 py-1.5 rounded bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0]"
                                >
                                  <option value="New">New</option>
                                  <option value="Contacted">Contacted</option>
                                  <option value="Confirmed">Confirmed</option>
                                  <option value="Completed">Completed</option>
                                  <option value="Cancelled">Cancelled</option>
                                </select>
                              </div>

                              <div className="flex items-center gap-1.5 w-full">
                                <a
                                  href={`tel:${enq.phone}`}
                                  className="flex-1 p-2 rounded bg-[#3b0c1b] text-[#FFF0BD] hover:bg-[#D4AF37] hover:text-[#1e040b] text-center transition-colors text-xs flex items-center justify-center gap-1"
                                  title="Call Customer"
                                >
                                  <Phone className="w-3.5 h-3.5" />
                                  <span className="hidden sm:inline">Call</span>
                                </a>

                                <a
                                  href={`https://wa.me/${cleanPhone.startsWith('91') ? cleanPhone : '91' + cleanPhone}?text=Hello%20${encodeURIComponent(enq.customerName)},%20greetings%20from%20Sonu%20ji%20(The%20Royal%20Treat%20Catering,%20Neemuch).%20Regarding%20your%20${encodeURIComponent(enq.eventType)}%20enquiry...`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1 p-2 rounded bg-emerald-800 text-white hover:bg-emerald-700 text-center transition-colors text-xs flex items-center justify-center gap-1"
                                  title="Chat on WhatsApp"
                                >
                                  <MessageCircle className="w-3.5 h-3.5" />
                                  <span className="hidden sm:inline">WhatsApp</span>
                                </a>

                                <button
                                  onClick={() => {
                                    if (confirm('Delete this enquiry record?')) {
                                      onDeleteEnquiry(enq.id);
                                    }
                                  }}
                                  className="p-2 rounded text-rose-400 hover:text-white hover:bg-rose-900/60"
                                  title="Delete Enquiry"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: MENU DISHES */}
              {adminTab === 'menu' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-[#D4AF37]/20">
                    <div>
                      <h3 className="font-royal text-lg font-bold text-[#FDF8F0]">
                        Menu Management ({menuItems.length} Dishes)
                      </h3>
                      <p className="text-xs text-[#CBB89D]">
                        Add new dishes, edit pricing, toggle availability, or categorize into Chinese, South Indian, Fast Food, etc.
                      </p>
                    </div>

                    <button
                      onClick={() => setEditingDish({
                        name: '',
                        category: 'Chinese',
                        subCategory: 'Chinese Starters',
                        description: '',
                        price: 'Starting from ₹120',
                        numericPrice: 120,
                        isVeg: true,
                        image: '/src/assets/images/chinese_catering_spread_1790340095706.jpg',
                        isPopular: false,
                        isAvailable: true
                      })}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#1e040b] bg-[#D4AF37] hover:bg-[#F3E08F] rounded-md transition-all cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add New Dish</span>
                    </button>
                  </div>

                  {/* Add/Edit Modal/Drawer */}
                  {editingDish && (
                    <form onSubmit={handleSaveDishForm} className="bg-[#2a0712] border-2 border-[#D4AF37] rounded-xl p-5 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-royal text-base font-bold text-[#FFF0BD]">
                          {editingDish.id ? 'Edit Dish Details' : 'Add New Culinary Dish'}
                        </h4>
                        <button
                          type="button"
                          onClick={() => setEditingDish(null)}
                          className="text-xs text-[#CBB89D] hover:text-white"
                        >
                          Cancel
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs uppercase text-[#D4AF37] mb-1">Dish Name *</label>
                          <input
                            type="text"
                            required
                            value={editingDish.name || ''}
                            onChange={(e) => setEditingDish({ ...editingDish, name: e.target.value })}
                            className="w-full px-3 py-2 text-xs rounded bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs uppercase text-[#D4AF37] mb-1">Cuisine Category *</label>
                          <select
                            value={editingDish.category || 'Chinese'}
                            onChange={(e) => setEditingDish({ ...editingDish, category: e.target.value as CuisineCategory })}
                            className="w-full px-3 py-2 text-xs rounded bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0]"
                          >
                            <option value="Chinese">🍜 Chinese</option>
                            <option value="South Indian">🥘 South Indian</option>
                            <option value="Fast Food">🍔 Fast Food</option>
                            <option value="Starters">🥗 Starters</option>
                            <option value="Main Course">🍛 Main Course</option>
                            <option value="Desserts">🍰 Desserts</option>
                            <option value="Beverages">🥤 Beverages</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs uppercase text-[#D4AF37] mb-1">Subcategory / Tag</label>
                          <input
                            type="text"
                            value={editingDish.subCategory || ''}
                            onChange={(e) => setEditingDish({ ...editingDish, subCategory: e.target.value })}
                            placeholder="e.g. Dosa, Burgers, Tandoori"
                            className="w-full px-3 py-2 text-xs rounded bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs uppercase text-[#D4AF37] mb-1">Display Price *</label>
                          <input
                            type="text"
                            value={editingDish.price || ''}
                            onChange={(e) => setEditingDish({ ...editingDish, price: e.target.value })}
                            placeholder="e.g. Price on Enquiry / Starting ₹120"
                            className="w-full px-3 py-2 text-xs rounded bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs uppercase text-[#D4AF37] mb-1">Numeric Unit Estimate (₹)</label>
                          <input
                            type="number"
                            value={editingDish.numericPrice || 100}
                            onChange={(e) => setEditingDish({ ...editingDish, numericPrice: Number(e.target.value) })}
                            className="w-full px-3 py-2 text-xs rounded bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase text-[#D4AF37] mb-1">Short Description</label>
                        <textarea
                          rows={2}
                          value={editingDish.description || ''}
                          onChange={(e) => setEditingDish({ ...editingDish, description: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase text-[#D4AF37] mb-1">Image URL or Local Asset</label>
                        <input
                          type="text"
                          value={editingDish.image || ''}
                          onChange={(e) => setEditingDish({ ...editingDish, image: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0]"
                        />
                      </div>

                      <div className="flex flex-wrap items-center gap-6 pt-2">
                        <label className="flex items-center gap-2 text-xs text-[#FFF0BD] cursor-pointer">
                          <input
                            type="checkbox"
                            checked={editingDish.isVeg}
                            onChange={(e) => setEditingDish({ ...editingDish, isVeg: e.target.checked })}
                            className="accent-[#D4AF37]"
                          />
                          <span>100% Pure Vegetarian</span>
                        </label>

                        <label className="flex items-center gap-2 text-xs text-[#FFF0BD] cursor-pointer">
                          <input
                            type="checkbox"
                            checked={editingDish.isPopular}
                            onChange={(e) => setEditingDish({ ...editingDish, isPopular: e.target.checked })}
                            className="accent-[#D4AF37]"
                          />
                          <span>Highlight as Featured / Popular</span>
                        </label>

                        <label className="flex items-center gap-2 text-xs text-[#FFF0BD] cursor-pointer">
                          <input
                            type="checkbox"
                            checked={editingDish.isAvailable}
                            onChange={(e) => setEditingDish({ ...editingDish, isAvailable: e.target.checked })}
                            className="accent-[#D4AF37]"
                          />
                          <span>Available on Menu</span>
                        </label>
                      </div>

                      <div className="flex justify-end gap-3 pt-3">
                        <button
                          type="button"
                          onClick={() => setEditingDish(null)}
                          className="px-4 py-2 text-xs text-[#CBB89D] border border-[#D4AF37]/30 rounded"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-5 py-2 text-xs font-semibold uppercase bg-[#D4AF37] text-[#1e040b] rounded"
                        >
                          Save Dish
                        </button>
                      </div>
                    </form>
                  )}

                  {/* Dishes List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {menuItems.map((dish) => (
                      <div
                        key={dish.id}
                        className="bg-[#240710] border border-[#D4AF37]/20 rounded-lg p-3 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3 truncate">
                          <img
                            src={dish.image}
                            alt=""
                            className="w-12 h-12 object-cover rounded border border-[#D4AF37]/30 shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <div className="truncate">
                            <div className="flex items-center gap-1.5">
                              <span className="font-semibold text-xs text-[#FDF8F0] truncate">{dish.name}</span>
                              {!dish.isAvailable && (
                                <span className="text-[9px] bg-rose-950 text-rose-300 px-1 py-0.2 rounded border border-rose-500/40">Hidden</span>
                              )}
                            </div>
                            <div className="text-[11px] text-[#CBB89D] flex items-center gap-2">
                              <span>{dish.category}</span>
                              <span>·</span>
                              <span className="text-[#FFF0BD] font-mono">{dish.price}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => {
                              onSaveMenuItem({ ...dish, isAvailable: !dish.isAvailable });
                            }}
                            className={`p-1.5 rounded text-xs ${dish.isAvailable ? 'text-emerald-400 hover:bg-emerald-950' : 'text-slate-400 hover:bg-slate-800'}`}
                            title={dish.isAvailable ? 'Hide from public menu' : 'Make visible on menu'}
                          >
                            {dish.isAvailable ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                          </button>

                          <button
                            onClick={() => setEditingDish(dish)}
                            className="p-1.5 rounded text-[#D4AF37] hover:bg-[#340B18]"
                            title="Edit dish"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => {
                              if (confirm(`Delete dish "${dish.name}"?`)) {
                                onDeleteMenuItem(dish.id);
                              }
                            }}
                            className="p-1.5 rounded text-rose-400 hover:bg-rose-950"
                            title="Delete dish"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: STATS MANAGEMENT */}
              {adminTab === 'stats' && (
                <div className="max-w-xl mx-auto space-y-6">
                  <div className="pb-3 border-b border-[#D4AF37]/20">
                    <h3 className="font-royal text-lg font-bold text-[#FDF8F0]">
                      Editable Business Statistics
                    </h3>
                    <p className="text-xs text-[#CBB89D]">
                      Update the key achievement metrics displayed on the home page and about section.
                    </p>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      onUpdateStats(localStats);
                      alert('Stats updated successfully!');
                    }}
                    className="space-y-4 bg-[#240710] p-6 rounded-xl border border-[#D4AF37]/30"
                  >
                    <div>
                      <label className="block text-xs uppercase text-[#D4AF37] mb-1">Guests Delighted Counter</label>
                      <input
                        type="text"
                        value={localStats.guestsServed}
                        onChange={(e) => setLocalStats({ ...localStats, guestsServed: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase text-[#D4AF37] mb-1">Events Catered Counter</label>
                      <input
                        type="text"
                        value={localStats.eventsCatered}
                        onChange={(e) => setLocalStats({ ...localStats, eventsCatered: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase text-[#D4AF37] mb-1">Menu Specialties Counter</label>
                      <input
                        type="text"
                        value={localStats.menuSpecialties}
                        onChange={(e) => setLocalStats({ ...localStats, menuSpecialties: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase text-[#D4AF37] mb-1">Commitment to Quality</label>
                      <input
                        type="text"
                        value={localStats.qualityCommitment}
                        onChange={(e) => setLocalStats({ ...localStats, qualityCommitment: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#D4AF37] text-[#1e040b] rounded-lg shadow-md cursor-pointer hover:bg-[#F3E08F]"
                    >
                      Update Live Website Statistics
                    </button>
                  </form>
                </div>
              )}

              {/* TAB 4: TESTIMONIALS */}
              {adminTab === 'testimonials' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-[#D4AF37]/20">
                    <div>
                      <h3 className="font-royal text-lg font-bold text-[#FDF8F0]">
                        Guest Testimonials Management
                      </h3>
                      <p className="text-xs text-[#CBB89D]">
                        Add or modify host reviews from weddings and events.
                      </p>
                    </div>

                    <button
                      onClick={() => setEditingTestimonial({
                        name: '',
                        location: 'Neemuch, MP',
                        eventType: 'Wedding Reception',
                        quote: '',
                        rating: 5,
                        date: 'March 2026'
                      })}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase text-[#1e040b] bg-[#D4AF37] rounded"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Testimonial</span>
                    </button>
                  </div>

                  {editingTestimonial && (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!editingTestimonial.name || !editingTestimonial.quote) return;
                        onSaveTestimonial({
                          id: editingTestimonial.id || `test-${Date.now()}`,
                          name: editingTestimonial.name,
                          location: editingTestimonial.location || 'Neemuch, MP',
                          eventType: editingTestimonial.eventType || 'Event',
                          quote: editingTestimonial.quote,
                          rating: editingTestimonial.rating || 5,
                          date: editingTestimonial.date || '2026'
                        });
                        setEditingTestimonial(null);
                      }}
                      className="bg-[#2a0712] p-4 rounded-xl border border-[#D4AF37] space-y-3"
                    >
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          required
                          value={editingTestimonial.name || ''}
                          onChange={(e) => setEditingTestimonial({ ...editingTestimonial, name: e.target.value })}
                          placeholder="Client Name *"
                          className="px-3 py-2 text-xs rounded bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0]"
                        />
                        <input
                          type="text"
                          value={editingTestimonial.eventType || ''}
                          onChange={(e) => setEditingTestimonial({ ...editingTestimonial, eventType: e.target.value })}
                          placeholder="Event Type (e.g. Wedding 600 Guests)"
                          className="px-3 py-2 text-xs rounded bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0]"
                        />
                      </div>
                      <textarea
                        rows={2}
                        required
                        value={editingTestimonial.quote || ''}
                        onChange={(e) => setEditingTestimonial({ ...editingTestimonial, quote: e.target.value })}
                        placeholder="Quote text *"
                        className="w-full px-3 py-2 text-xs rounded bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0]"
                      />
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setEditingTestimonial(null)}
                          className="px-3 py-1.5 text-xs text-[#CBB89D]"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-1.5 text-xs font-semibold bg-[#D4AF37] text-[#1e040b] rounded"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  )}

                  <div className="space-y-3">
                    {testimonials.map((t) => (
                      <div key={t.id} className="p-4 rounded-lg bg-[#240710] border border-[#D4AF37]/20 flex items-start justify-between gap-4">
                        <div>
                          <div className="font-semibold text-sm text-[#FFF0BD]">{t.name} · <span className="text-xs text-[#D4AF37]">{t.eventType}</span></div>
                          <p className="text-xs text-[#E2D5C3] mt-1 italic">"{t.quote}"</p>
                          <span className="text-[10px] text-[#CBB89D]">{t.location} · {t.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => setEditingTestimonial(t)}
                            className="p-1.5 text-[#D4AF37]"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm('Delete testimonial?')) onDeleteTestimonial(t.id);
                            }}
                            className="p-1.5 text-rose-400"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: GALLERY */}
              {adminTab === 'gallery' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-[#D4AF37]/20">
                    <div>
                      <h3 className="font-royal text-lg font-bold text-[#FDF8F0]">
                        Gallery Management ({galleryItems.length} Photos)
                      </h3>
                      <p className="text-xs text-[#CBB89D]">
                        Add photos of live stalls, wedding setups, and buffet arrangements.
                      </p>
                    </div>

                    <button
                      onClick={() => setEditingGallery({
                        title: '',
                        category: 'WEDDINGS',
                        imageUrl: '/src/assets/images/royal_wedding_buffet_1790340058322.jpg',
                        description: ''
                      })}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase text-[#1e040b] bg-[#D4AF37] rounded"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Photo</span>
                    </button>
                  </div>

                  {editingGallery && (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!editingGallery.title || !editingGallery.imageUrl) return;
                        onSaveGalleryItem({
                          id: editingGallery.id || `gal-${Date.now()}`,
                          title: editingGallery.title,
                          category: editingGallery.category as any || 'WEDDINGS',
                          imageUrl: editingGallery.imageUrl,
                          description: editingGallery.description || ''
                        });
                        setEditingGallery(null);
                      }}
                      className="bg-[#2a0712] p-4 rounded-xl border border-[#D4AF37] space-y-3"
                    >
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          required
                          value={editingGallery.title || ''}
                          onChange={(e) => setEditingGallery({ ...editingGallery, title: e.target.value })}
                          placeholder="Photo Title *"
                          className="px-3 py-2 text-xs rounded bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0]"
                        />
                        <select
                          value={editingGallery.category || 'WEDDINGS'}
                          onChange={(e) => setEditingGallery({ ...editingGallery, category: e.target.value as any })}
                          className="px-3 py-2 text-xs rounded bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0]"
                        >
                          <option value="WEDDINGS">WEDDINGS</option>
                          <option value="FOOD">FOOD</option>
                          <option value="BUFFET">BUFFET</option>
                          <option value="DECORATION">DECORATION</option>
                          <option value="EVENTS">EVENTS</option>
                        </select>
                      </div>
                      <input
                        type="text"
                        required
                        value={editingGallery.imageUrl || ''}
                        onChange={(e) => setEditingGallery({ ...editingGallery, imageUrl: e.target.value })}
                        placeholder="Image URL or Path *"
                        className="w-full px-3 py-2 text-xs rounded bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0]"
                      />
                      <input
                        type="text"
                        value={editingGallery.description || ''}
                        onChange={(e) => setEditingGallery({ ...editingGallery, description: e.target.value })}
                        placeholder="Description (optional)"
                        className="w-full px-3 py-2 text-xs rounded bg-[#180308] border border-[#D4AF37]/30 text-[#FDF8F0]"
                      />
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setEditingGallery(null)}
                          className="px-3 py-1.5 text-xs text-[#CBB89D]"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-1.5 text-xs font-semibold bg-[#D4AF37] text-[#1e040b] rounded"
                        >
                          Save Photo
                        </button>
                      </div>
                    </form>
                  )}

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {galleryItems.map((g) => (
                      <div key={g.id} className="relative rounded-lg overflow-hidden border border-[#D4AF37]/20 group">
                        <img src={g.imageUrl} alt="" className="w-full h-32 object-cover" referrerPolicy="no-referrer" />
                        <div className="p-2 bg-[#240710] text-[11px]">
                          <span className="font-semibold text-[#FFF0BD] truncate block">{g.title}</span>
                          <span className="text-[#D4AF37] text-[10px]">{g.category}</span>
                        </div>
                        <button
                          onClick={() => {
                            if (confirm('Delete photo?')) onDeleteGalleryItem(g.id);
                          }}
                          className="absolute top-2 right-2 p-1 rounded bg-black/70 text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
