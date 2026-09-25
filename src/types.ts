export type CuisineCategory = 
  | 'Chinese'
  | 'South Indian'
  | 'Fast Food'
  | 'Starters'
  | 'Main Course'
  | 'Desserts'
  | 'Beverages';

export interface MenuItem {
  id: string;
  name: string;
  category: CuisineCategory;
  subCategory?: string;
  description: string;
  price: string; // e.g. "Price on Enquiry" or "Starting ₹140"
  numericPrice?: number; // For custom quote calculator estimates
  isVeg: boolean;
  image: string;
  isPopular?: boolean;
  isAvailable: boolean;
}

export type EnquiryStatus = 'New' | 'Contacted' | 'Confirmed' | 'Completed' | 'Cancelled';

export interface Enquiry {
  id: string;
  customerName: string;
  phone: string;
  email?: string;
  eventType: 'Wedding' | 'Reception' | 'Birthday' | 'Engagement' | 'Corporate' | 'Private Party' | 'Other';
  eventDate: string;
  guestCount: number;
  location: string;
  cuisines: string[];
  selectedDishes?: string[];
  message: string;
  status: EnquiryStatus;
  createdAt: string;
  estimatedBudget?: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'ALL' | 'WEDDINGS' | 'FOOD' | 'BUFFET' | 'DECORATION' | 'EVENTS';
  imageUrl: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  eventType: string;
  quote: string;
  rating: number;
  date: string;
}

export interface BusinessStats {
  guestsServed: string;
  eventsCatered: string;
  menuSpecialties: string;
  qualityCommitment: string;
}
