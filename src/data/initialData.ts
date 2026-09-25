import { MenuItem, GalleryItem, Testimonial, BusinessStats, Enquiry } from '../types';

export const INITIAL_STATS: BusinessStats = {
  guestsServed: '1000+',
  eventsCatered: '50+',
  menuSpecialties: '20+',
  qualityCommitment: '100%'
};

export const INITIAL_MENU_ITEMS: MenuItem[] = [
  // --- CHINESE STARTERS ---
  {
    id: 'ch-st-1',
    name: 'Veg Manchurian Dry',
    category: 'Chinese',
    subCategory: 'Chinese Starters',
    description: 'Crisp minced vegetable dumplings wok-tossed in a fragrant ginger, garlic, and dark soy glaze.',
    price: 'Starting from ₹120',
    numericPrice: 120,
    isVeg: true,
    image: '/src/assets/images/chinese_catering_spread_1790340095706.jpg',
    isPopular: true,
    isAvailable: true
  },
  {
    id: 'ch-st-2',
    name: 'Paneer Chilli',
    category: 'Chinese',
    subCategory: 'Chinese Starters',
    description: 'Crispy cottage cheese cubes tossed with crunchy bell peppers, onions, spring greens, and house chilli sauce.',
    price: 'Starting from ₹160',
    numericPrice: 160,
    isVeg: true,
    image: '/src/assets/images/chilli_paneer_dry_1790340934598.jpg',
    isPopular: true,
    isAvailable: true
  },
  {
    id: 'ch-st-3',
    name: 'Chilli Potato',
    category: 'Chinese',
    subCategory: 'Chinese Starters',
    description: 'Golden fried potato batons tossed in a spicy Indo-Chinese chilli garlic paste with sesame seeds.',
    price: 'Starting from ₹110',
    numericPrice: 110,
    isVeg: true,
    image: '/src/assets/images/chinese_catering_spread_1790340095706.jpg',
    isAvailable: true
  },
  {
    id: 'ch-st-4',
    name: 'Honey Chilli Potato',
    category: 'Chinese',
    subCategory: 'Chinese Starters',
    description: 'Crisp potatoes tossed in a luscious sweet-and-spicy honey chilli sauce, garnished with toasted sesame.',
    price: 'Starting from ₹130',
    numericPrice: 130,
    isVeg: true,
    image: '/src/assets/images/chinese_catering_spread_1790340095706.jpg',
    isPopular: true,
    isAvailable: true
  },
  {
    id: 'ch-st-5',
    name: 'Crispy Veg Spring Roll',
    category: 'Chinese',
    subCategory: 'Chinese Starters',
    description: 'Flaky golden pastry sheets filled with spiced shredded carrots, cabbage, and glass noodles, served with sweet chilli dip.',
    price: 'Starting from ₹120',
    numericPrice: 120,
    isVeg: true,
    image: '/src/assets/images/chinese_catering_spread_1790340095706.jpg',
    isAvailable: true
  },
  {
    id: 'ch-st-6',
    name: 'Crispy Corn Salt & Pepper',
    category: 'Chinese',
    subCategory: 'Chinese Starters',
    description: 'Crispy crackling sweet corn kernels flash-fried with fresh scallions, crushed black pepper, and herbs.',
    price: 'Starting from ₹140',
    numericPrice: 140,
    isVeg: true,
    image: '/src/assets/images/chinese_catering_spread_1790340095706.jpg',
    isAvailable: true
  },
  {
    id: 'ch-st-7',
    name: 'Steamed & Fried Veg Momos',
    category: 'Chinese',
    subCategory: 'Chinese Starters',
    description: 'Handcrafted Himalayan dumplings stuffed with seasoned garden vegetables, served with fiery red chilli chutney.',
    price: 'Starting from ₹100',
    numericPrice: 100,
    isVeg: true,
    image: '/src/assets/images/chinese_catering_spread_1790340095706.jpg',
    isAvailable: true
  },
  {
    id: 'ch-st-8',
    name: 'Paneer 65',
    category: 'Chinese',
    subCategory: 'Chinese Starters',
    description: 'Crispy fried cottage cheese morsels infused with South-Indian spices, tempered curry leaves, and green chillies.',
    price: 'Starting from ₹160',
    numericPrice: 160,
    isVeg: true,
    image: '/src/assets/images/chinese_catering_spread_1790340095706.jpg',
    isAvailable: true
  },

  // --- CHINESE MAIN COURSE ---
  {
    id: 'ch-mc-1',
    name: 'Veg Hakka Noodles',
    category: 'Chinese',
    subCategory: 'Chinese Main Course',
    description: 'Classic wok-tossed ribbon noodles with julienned vegetables, white pepper, and light aromatic soy seasoning.',
    price: 'Starting from ₹130',
    numericPrice: 130,
    isVeg: true,
    image: '/src/assets/images/chinese_catering_spread_1790340095706.jpg',
    isPopular: true,
    isAvailable: true
  },
  {
    id: 'ch-mc-2',
    name: 'Fiery Schezwan Noodles',
    category: 'Chinese',
    subCategory: 'Chinese Main Course',
    description: 'Noodles tossed in our authentic home-ground Sichuan chilli pepper sauce, garlic, and crisp seasonal veggies.',
    price: 'Starting from ₹140',
    numericPrice: 140,
    isVeg: true,
    image: '/src/assets/images/chinese_catering_spread_1790340095706.jpg',
    isAvailable: true
  },
  {
    id: 'ch-mc-3',
    name: 'Classic Veg Fried Rice',
    category: 'Chinese',
    subCategory: 'Chinese Main Course',
    description: 'Fluffy long-grain basmati rice tossed with diced carrots, beans, baby corn, spring onions, and roasted garlic.',
    price: 'Starting from ₹130',
    numericPrice: 130,
    isVeg: true,
    image: '/src/assets/images/chinese_catering_spread_1790340095706.jpg',
    isAvailable: true
  },
  {
    id: 'ch-mc-4',
    name: 'Schezwan Fried Rice',
    category: 'Chinese',
    subCategory: 'Chinese Main Course',
    description: 'Spicy wok-fried rice spiced with red chillies, crushed garlic, and farm vegetables.',
    price: 'Starting from ₹140',
    numericPrice: 140,
    isVeg: true,
    image: '/src/assets/images/chinese_catering_spread_1790340095706.jpg',
    isAvailable: true
  },
  {
    id: 'ch-mc-5',
    name: 'Veg Manchurian Gravy',
    category: 'Chinese',
    subCategory: 'Chinese Main Course',
    description: 'Soft vegetable kofta dumplings drenched in a rich, velvety garlic coriander dark soy gravy.',
    price: 'Starting from ₹150',
    numericPrice: 150,
    isVeg: true,
    image: '/src/assets/images/chinese_catering_spread_1790340095706.jpg',
    isAvailable: true
  },
  {
    id: 'ch-mc-6',
    name: 'Chilli Paneer Gravy',
    category: 'Chinese',
    subCategory: 'Chinese Main Course',
    description: 'Tender paneer cubes simmered in a robust chilli, garlic, and bell pepper reduction.',
    price: 'Starting from ₹180',
    numericPrice: 180,
    isVeg: true,
    image: '/src/assets/images/chinese_catering_spread_1790340095706.jpg',
    isAvailable: true
  },
  {
    id: 'ch-mc-7',
    name: 'Burnt Garlic Noodles',
    category: 'Chinese',
    subCategory: 'Chinese Main Course',
    description: 'Aromatic noodles tossed with golden crispy roasted garlic cloves, chilli oil, and coriander.',
    price: 'Starting from ₹140',
    numericPrice: 140,
    isVeg: true,
    image: '/src/assets/images/chinese_catering_spread_1790340095706.jpg',
    isAvailable: true
  },
  {
    id: 'ch-mc-8',
    name: 'Royal Chinese Banquet Platter',
    category: 'Chinese',
    subCategory: 'Chinese Combo',
    description: 'Chef combination featuring Hakka noodles, Schezwan fried rice, Manchurian gravy, and spring rolls.',
    price: 'Price on Enquiry',
    numericPrice: 220,
    isVeg: true,
    image: '/src/assets/images/chinese_catering_spread_1790340095706.jpg',
    isPopular: true,
    isAvailable: true
  },

  // --- SOUTH INDIAN MENU ---
  {
    id: 'si-ds-1',
    name: 'Crispy Plain Dosa',
    category: 'South Indian',
    subCategory: 'Dosa',
    description: 'Golden paper-crisp fermented rice & black gram crepe served with piping hot drumstick sambar and chutneys.',
    price: 'Starting from ₹80',
    numericPrice: 80,
    isVeg: true,
    image: '/src/assets/images/indian_live_dosa_counter_1790340077578.jpg',
    isAvailable: true
  },
  {
    id: 'si-ds-2',
    name: 'Special Masala Dosa',
    category: 'South Indian',
    subCategory: 'Dosa',
    description: 'Crispy golden crepe stuffed with mildly spiced mustard and turmeric tempered potato mash.',
    price: 'Starting from ₹100',
    numericPrice: 100,
    isVeg: true,
    image: '/src/assets/images/indian_live_dosa_counter_1790340077578.jpg',
    isPopular: true,
    isAvailable: true
  },
  {
    id: 'si-ds-3',
    name: 'Mysore Masala Dosa',
    category: 'South Indian',
    subCategory: 'Dosa',
    description: 'Smothered inside with authentic fiery red garlic-chilli chutney and packed with potato masala.',
    price: 'Starting from ₹120',
    numericPrice: 120,
    isVeg: true,
    image: '/src/assets/images/indian_live_dosa_counter_1790340077578.jpg',
    isPopular: true,
    isAvailable: true
  },
  {
    id: 'si-ds-4',
    name: 'Paneer Masala Dosa',
    category: 'South Indian',
    subCategory: 'Dosa',
    description: 'Crisp crepe generously stuffed with grated fresh malai paneer, chopped onions, green chillies, and podi.',
    price: 'Starting from ₹140',
    numericPrice: 140,
    isVeg: true,
    image: '/src/assets/images/indian_live_dosa_counter_1790340077578.jpg',
    isAvailable: true
  },
  {
    id: 'si-ds-5',
    name: 'Cheese Burst Dosa',
    category: 'South Indian',
    subCategory: 'Dosa',
    description: 'Melt-in-mouth mozzarella & cheese blend grilled over steaming hot tawa dosa.',
    price: 'Starting from ₹150',
    numericPrice: 150,
    isVeg: true,
    image: '/src/assets/images/indian_live_dosa_counter_1790340077578.jpg',
    isAvailable: true
  },
  {
    id: 'si-ds-6',
    name: 'Amul Butter Masala Dosa',
    category: 'South Indian',
    subCategory: 'Dosa',
    description: 'Prepared with a generous dollop of pure Amul butter on a sizzling hot cast-iron tawa.',
    price: 'Starting from ₹130',
    numericPrice: 130,
    isVeg: true,
    image: '/src/assets/images/indian_live_dosa_counter_1790340077578.jpg',
    isAvailable: true
  },
  {
    id: 'si-id-1',
    name: 'Steamed Fluffy Idli (2 Pcs)',
    category: 'South Indian',
    subCategory: 'Idli',
    description: 'Pillow-soft fermented rice cakes served with fresh coconut chutney and aromatic lentil sambar.',
    price: 'Starting from ₹60',
    numericPrice: 60,
    isVeg: true,
    image: '/src/assets/images/steamed_idli_sambar_1790340947646.jpg',
    isAvailable: true
  },
  {
    id: 'si-id-2',
    name: 'Tawa Masala Idli',
    category: 'South Indian',
    subCategory: 'Idli',
    description: 'Bite-sized button idlis sautéed with mustard seeds, curry leaves, onions, and gunpowder masala.',
    price: 'Starting from ₹90',
    numericPrice: 90,
    isVeg: true,
    image: '/src/assets/images/steamed_idli_sambar_1790340947646.jpg',
    isAvailable: true
  },
  {
    id: 'si-id-3',
    name: 'Crispy Fried Idli',
    category: 'South Indian',
    subCategory: 'Idli',
    description: 'Deep golden-fried idli fingers dusted with tangy chaat masala and South Indian spice mix.',
    price: 'Starting from ₹80',
    numericPrice: 80,
    isVeg: true,
    image: '/src/assets/images/steamed_idli_sambar_1790340947646.jpg',
    isAvailable: true
  },
  {
    id: 'si-id-4',
    name: 'Dipped Idli Sambar Bowl',
    category: 'South Indian',
    subCategory: 'Idli',
    description: 'Soft idlis soaked in a deep bowl of slow-simmered piping hot Madras drumstick sambar with ghee.',
    price: 'Starting from ₹80',
    numericPrice: 80,
    isVeg: true,
    image: '/src/assets/images/steamed_idli_sambar_1790340947646.jpg',
    isAvailable: true
  },
  {
    id: 'si-ut-1',
    name: 'Onion Tomato Uttapam',
    category: 'South Indian',
    subCategory: 'Uttapam',
    description: 'Thick, fluffy savory pancake topped with sweet caramelized onions, juicy tomatoes, and green chillies.',
    price: 'Starting from ₹100',
    numericPrice: 100,
    isVeg: true,
    image: '/src/assets/images/indian_live_dosa_counter_1790340077578.jpg',
    isAvailable: true
  },
  {
    id: 'si-ut-2',
    name: 'Special Mix Veg Uttapam',
    category: 'South Indian',
    subCategory: 'Uttapam',
    description: 'Soft fermented base topped with finely chopped capsicum, carrots, onions, coriander, and mild spices.',
    price: 'Starting from ₹120',
    numericPrice: 120,
    isVeg: true,
    image: '/src/assets/images/indian_live_dosa_counter_1790340077578.jpg',
    isAvailable: true
  },
  {
    id: 'si-ut-3',
    name: 'Cheese Uttapam',
    category: 'South Indian',
    subCategory: 'Uttapam',
    description: 'Thick savory pancake loaded with vegetables and crusted with golden melted cheese.',
    price: 'Starting from ₹140',
    numericPrice: 140,
    isVeg: true,
    image: '/src/assets/images/indian_live_dosa_counter_1790340077578.jpg',
    isAvailable: true
  },
  {
    id: 'si-ot-1',
    name: 'Crispy Medu Vada (2 Pcs)',
    category: 'South Indian',
    subCategory: 'Other',
    description: 'Crispy exterior, airy interior black-gram donuts infused with ginger, peppercorns, and fresh curry leaves.',
    price: 'Starting from ₹70',
    numericPrice: 70,
    isVeg: true,
    image: '/src/assets/images/indian_live_dosa_counter_1790340077578.jpg',
    isAvailable: true
  },
  {
    id: 'si-ot-2',
    name: 'Grand South Indian Feast Counter',
    category: 'South Indian',
    subCategory: 'South Indian Meals',
    description: 'Live catering counter featuring dosas, idlis, vadas, rasam shot bar, and variety of fresh chutneys.',
    price: 'Price on Enquiry',
    numericPrice: 200,
    isVeg: true,
    image: '/src/assets/images/indian_live_dosa_counter_1790340077578.jpg',
    isPopular: true,
    isAvailable: true
  },

  // --- FAST FOOD MENU ---
  {
    id: 'ff-bg-1',
    name: 'Royal Veg Crunchy Burger',
    category: 'Fast Food',
    subCategory: 'Burgers',
    description: 'Golden spiced potato and vegetable patty, fresh tomato slices, crisp iceberg lettuce, and tangy mayo in a toasted sesame bun.',
    price: 'Starting from ₹80',
    numericPrice: 80,
    isVeg: true,
    image: '/src/assets/images/veg_burger_fries_1790340812917.jpg',
    isAvailable: true
  },
  {
    id: 'ff-bg-2',
    name: 'Double Cheese Burger',
    category: 'Fast Food',
    subCategory: 'Burgers',
    description: 'Crisp vegetable patty with layered melted cheddar cheese, caramelized onions, and herb dressing.',
    price: 'Starting from ₹100',
    numericPrice: 100,
    isVeg: true,
    image: '/src/assets/images/veg_burger_fries_1790340812917.jpg',
    isAvailable: true
  },
  {
    id: 'ff-bg-3',
    name: 'Crispy Paneer Tikka Burger',
    category: 'Fast Food',
    subCategory: 'Burgers',
    description: 'Thick marinated cottage cheese steak fried crisp, topped with tandoori mayo and pickled onions.',
    price: 'Starting from ₹120',
    numericPrice: 120,
    isVeg: true,
    image: '/src/assets/images/veg_burger_fries_1790340812917.jpg',
    isPopular: true,
    isAvailable: true
  },
  {
    id: 'ff-sw-1',
    name: 'Bombay Veg Grilled Sandwich',
    category: 'Fast Food',
    subCategory: 'Sandwiches',
    description: 'Triple-decker bread stuffed with spiced potato masala, cucumber, beetroot, mint chutney, and chaat masala.',
    price: 'Starting from ₹90',
    numericPrice: 90,
    isVeg: true,
    image: '/src/assets/images/grilled_sandwich_1790340965089.jpg',
    isAvailable: true
  },
  {
    id: 'ff-sw-2',
    name: 'Paneer Cheese Corn Sandwich',
    category: 'Fast Food',
    subCategory: 'Sandwiches',
    description: 'Loaded with seasoned paneer cubes, sweet corn kernels, mozzarella, and grilled to crispy golden perfection.',
    price: 'Starting from ₹120',
    numericPrice: 120,
    isVeg: true,
    image: '/src/assets/images/grilled_sandwich_1790340965089.jpg',
    isAvailable: true
  },
  {
    id: 'ff-pz-1',
    name: 'Artisanal Margherita Pizza',
    category: 'Fast Food',
    subCategory: 'Pizza',
    description: 'Fresh basil leaves, rich Italian marinara tomato reduction, and generous fresh mozzarella cheese.',
    price: 'Starting from ₹150',
    numericPrice: 150,
    isVeg: true,
    image: '/src/assets/images/paneer_tikka_pizza_1790340826401.jpg',
    isAvailable: true
  },
  {
    id: 'ff-pz-2',
    name: 'Paneer Tikka Pizza',
    category: 'Fast Food',
    subCategory: 'Pizza',
    description: 'Stone-baked pizza topped with spiced cottage cheese cubes, red onions, bell peppers, and oregano herbs.',
    price: 'Starting from ₹180',
    numericPrice: 180,
    isVeg: true,
    image: '/src/assets/images/paneer_tikka_pizza_1790340826401.jpg',
    isPopular: true,
    isAvailable: true
  },
  {
    id: 'ff-sn-1',
    name: 'Golden French Fries & Peri Peri Fries',
    category: 'Fast Food',
    subCategory: 'Snacks',
    description: 'Crispy salted potato fries served with zesty peri-peri shaker dust and creamy dips.',
    price: 'Starting from ₹70',
    numericPrice: 70,
    isVeg: true,
    image: '/src/assets/images/veg_burger_fries_1790340812917.jpg',
    isAvailable: true
  },
  {
    id: 'ff-sn-2',
    name: 'Cheese Garlic Bread',
    category: 'Fast Food',
    subCategory: 'Snacks',
    description: 'Warm baguette slices toasted with roasted garlic butter and overflowing melted mozzarella cheese.',
    price: 'Starting from ₹90',
    numericPrice: 90,
    isVeg: true,
    image: '/src/assets/images/paneer_tikka_pizza_1790340826401.jpg',
    isAvailable: true
  },

  // --- STARTERS (INDIAN / ROYAL) ---
  {
    id: 'st-ind-1',
    name: 'Hara Bhara Kebab',
    category: 'Starters',
    subCategory: 'Royal Starters',
    description: 'Nutritious patties made from fresh spinach, green peas, and cottage cheese, seasoned with royal aromatic spices.',
    price: 'Price on Enquiry',
    numericPrice: 140,
    isVeg: true,
    image: '/src/assets/images/royal_wedding_buffet_1790340058322.jpg',
    isPopular: true,
    isAvailable: true
  },
  {
    id: 'st-ind-2',
    name: 'Dahi Ke Shahi Kebab',
    category: 'Starters',
    subCategory: 'Royal Starters',
    description: 'Crisp exterior with molten hung yogurt and roasted cumin centre, infused with saffron and fresh coriander.',
    price: 'Price on Enquiry',
    numericPrice: 160,
    isVeg: true,
    image: '/src/assets/images/royal_wedding_buffet_1790340058322.jpg',
    isPopular: true,
    isAvailable: true
  },
  {
    id: 'st-ind-3',
    name: 'Paneer Tikka Angara',
    category: 'Starters',
    subCategory: 'Tandoor Specials',
    description: 'Charcoal grilled cottage cheese marinated in mustard oil, roasted gram flour, and spicy red Mathania chillies.',
    price: 'Price on Enquiry',
    numericPrice: 170,
    isVeg: true,
    image: '/src/assets/images/royal_wedding_buffet_1790340058322.jpg',
    isAvailable: true
  },
  {
    id: 'st-ind-4',
    name: 'Tandoori Malai Soya Chaap',
    category: 'Starters',
    subCategory: 'Tandoor Specials',
    description: 'Succulent soya chaap marinated in fresh cream, cashew paste, green cardamom, and grilled on skewers.',
    price: 'Price on Enquiry',
    numericPrice: 150,
    isVeg: true,
    image: '/src/assets/images/royal_wedding_buffet_1790340058322.jpg',
    isAvailable: true
  },

  // --- MAIN COURSE ---
  {
    id: 'mc-ind-1',
    name: 'Shahi Paneer Butter Masala',
    category: 'Main Course',
    subCategory: 'Paneer Specialties',
    description: 'Fresh malai paneer simmered in an opulent satin-smooth tomato, cashew, and white butter gravy.',
    price: 'Price on Enquiry',
    numericPrice: 190,
    isVeg: true,
    image: '/src/assets/images/shahi_paneer_butter_1790340838635.jpg',
    isPopular: true,
    isAvailable: true
  },
  {
    id: 'mc-ind-2',
    name: 'Dal Makhani Slow-Simmered (Desi Ghee)',
    category: 'Main Course',
    subCategory: 'Lentils',
    description: 'Black urad lentils and kidney beans slow-cooked overnight over charcoal with churned butter and fresh cream.',
    price: 'Price on Enquiry',
    numericPrice: 170,
    isVeg: true,
    image: '/src/assets/images/dal_makhani_dum_1790340859156.jpg',
    isPopular: true,
    isAvailable: true
  },
  {
    id: 'mc-ind-3',
    name: 'Royal Nizami Veg Dum Biryani',
    category: 'Main Course',
    subCategory: 'Rice & Biryani',
    description: 'Long grain fragrant basmati rice sealed with clay pot dum, layered with saffron, mint, and marinated farm vegetables.',
    price: 'Price on Enquiry',
    numericPrice: 180,
    isVeg: true,
    image: '/src/assets/images/veg_dum_biryani_1790340871647.jpg',
    isPopular: true,
    isAvailable: true
  },
  {
    id: 'mc-ind-4',
    name: 'Assorted Royal Bread Basket',
    category: 'Main Course',
    subCategory: 'Breads',
    description: 'Fresh tandoori rotis, butter naans, garlic naans, laccha parathas, and spiced missi rotis straight from the clay oven.',
    price: 'Price on Enquiry',
    numericPrice: 50,
    isVeg: true,
    image: '/src/assets/images/royal_wedding_buffet_1790340058322.jpg',
    isAvailable: true
  },

  // --- DESSERTS ---
  {
    id: 'ds-1',
    name: 'Hot Desi Ghee Gulab Jamun',
    category: 'Desserts',
    subCategory: 'Traditional Sweets',
    description: 'Khoya dumplings fried in pure cow ghee and soaked in warm saffron and cardamom scented rose water syrup.',
    price: 'Price on Enquiry',
    numericPrice: 70,
    isVeg: true,
    image: '/src/assets/images/gulab_jamun_sweet_1790340885507.jpg',
    isPopular: true,
    isAvailable: true
  },
  {
    id: 'ds-2',
    name: 'Kesar Rasmalai with Pistachio Flakes',
    category: 'Desserts',
    subCategory: 'Traditional Sweets',
    description: 'Delicate cottage cheese patties floating in chilled, thickened saffron and green cardamom infused milk.',
    price: 'Price on Enquiry',
    numericPrice: 90,
    isVeg: true,
    image: '/src/assets/images/kesar_rasmalai_cup_1790340898601.jpg',
    isPopular: true,
    isAvailable: true
  },
  {
    id: 'ds-3',
    name: 'Live Rabdi Jalebi Counter',
    category: 'Desserts',
    subCategory: 'Live Dessert Counters',
    description: 'Crisp spiral jalebis fried live on tawa and served atop chilled malai rabdi with silver vark.',
    price: 'Price on Enquiry',
    numericPrice: 110,
    isVeg: true,
    image: '/src/assets/images/live_rabdi_jalebi_1790340913375.jpg',
    isPopular: true,
    isAvailable: true
  },
  {
    id: 'ds-4',
    name: 'Matka Malai Kulfi with Falooda',
    category: 'Desserts',
    subCategory: 'Traditional Sweets',
    description: 'Traditional slow-reduced dense kulfi served in earthen clay pots with rose falooda and sabja seeds.',
    price: 'Price on Enquiry',
    numericPrice: 80,
    isVeg: true,
    image: '/src/assets/images/royal_dessert_buffet_1790340109555.jpg',
    isAvailable: true
  },

  // --- BEVERAGES ---
  {
    id: 'bv-1',
    name: 'Shahi Kesar Badam Milk (Hot / Cold)',
    category: 'Beverages',
    subCategory: 'Royal Welcome Drinks',
    description: 'Rich buffalo milk slow-simmered with crushed almonds, Kashmiri saffron threads, and green cardamom.',
    price: 'Starting from ₹70',
    numericPrice: 70,
    isVeg: true,
    image: '/src/assets/images/kesar_badam_milk_1790340781960.jpg',
    isAvailable: true
  },
  {
    id: 'bv-2',
    name: 'Fresh Mint Mojito Mocktail',
    category: 'Beverages',
    subCategory: 'Mocktails',
    description: 'Crushed garden mint, freshly squeezed key lime, and sparkling soda served chilled over crushed ice.',
    price: 'Starting from ₹80',
    numericPrice: 80,
    isVeg: true,
    image: '/src/assets/images/mint_mojito_mocktail_1790340797100.jpg',
    isAvailable: true
  },
  {
    id: 'bv-3',
    name: 'Blue Lagoon Cooler',
    category: 'Beverages',
    subCategory: 'Mocktails',
    description: 'Vibrant curacao citrus cooler with lemonade and crushed ice, perfect for welcome counters.',
    price: 'Starting from ₹80',
    numericPrice: 80,
    isVeg: true,
    image: '/src/assets/images/blue_lagoon_drink_1790340977612.jpg',
    isAvailable: true
  },
  {
    id: 'bv-4',
    name: 'Traditional Masala Buttermilk (Chaas)',
    category: 'Beverages',
    subCategory: 'Indian Coolers',
    description: 'Refreshing churned curd with roasted cumin, rock salt, mint leaves, and ginger essence.',
    price: 'Starting from ₹40',
    numericPrice: 40,
    isVeg: true,
    image: '/src/assets/images/kesar_badam_milk_1790340781960.jpg',
    isAvailable: true
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Grand Royal Wedding Banquet',
    category: 'WEDDINGS',
    imageUrl: '/src/assets/images/royal_wedding_buffet_1790340058322.jpg',
    description: 'Lavish 500-guest wedding reception setup at Neemuch with brass chafers and royal flower decor.'
  },
  {
    id: 'gal-2',
    title: 'Live South Indian Dosa & Idli Counter',
    category: 'BUFFET',
    imageUrl: '/src/assets/images/indian_live_dosa_counter_1790340077578.jpg',
    description: 'Hot sizzling tawa dosas with 5 fresh chutneys prepared live by our master chefs.'
  },
  {
    id: 'gal-3',
    title: 'Exotic Indo-Chinese Catering Station',
    category: 'FOOD',
    imageUrl: '/src/assets/images/chinese_catering_spread_1790340095706.jpg',
    description: 'Live wok stir-fries, crispy Manchurian, and sizzling noodles for Sangeet night.'
  },
  {
    id: 'gal-4',
    title: 'Regal Dessert & Sweet Table',
    category: 'BUFFET',
    imageUrl: '/src/assets/images/royal_dessert_buffet_1790340109555.jpg',
    description: 'Desi ghee gulab jamun, kesar rasmalai, and live rabdi jalebi counter for wedding feast.'
  },
  {
    id: 'gal-5',
    title: 'Decorative Wedding Dining Setup',
    category: 'DECORATION',
    imageUrl: '/src/assets/images/royal_wedding_buffet_1790340058322.jpg',
    description: 'Opulent table setting with golden cutlery, warm lighting, and traditional marigold centerpieces.'
  },
  {
    id: 'gal-6',
    title: 'Corporate Celebration Buffet',
    category: 'EVENTS',
    imageUrl: '/src/assets/images/chinese_catering_spread_1790340095706.jpg',
    description: 'Multi-course dinner buffet arranged for annual business convention in Madhya Pradesh.'
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rajesh & Sunita Patidar',
    location: 'Neemuch, MP',
    eventType: 'Grand Wedding Catering (800 Guests)',
    quote: 'Amazing food and excellent presentation. Our guests loved the Chinese wok station and South Indian live counters. Sonu ji and the team managed the entire dinner seamlessly!',
    rating: 5,
    date: 'February 2026'
  },
  {
    id: 'test-2',
    name: 'Dr. Vivek Sharma',
    location: 'Mandsaur - Neemuch Road',
    eventType: 'Daughter\'s Ring Ceremony & Dinner',
    quote: 'The catering arrangement was beautiful and every dish was served fresh and steaming hot. The royal dessert buffet with hot gulab jamun and rabdi jalebi was the highlight of the night.',
    rating: 5,
    date: 'January 2026'
  },
  {
    id: 'test-3',
    name: 'Anil Kumar Mittal',
    location: 'Vikas Nagar, Neemuch',
    eventType: 'Golden Anniversary Celebration',
    quote: 'A great choice for family functions and grand celebrations. Punctual service, hygienic staff in neat uniforms, and truly delicious taste. Highly recommended caterer in Neemuch!',
    rating: 5,
    date: 'December 2025'
  }
];

export const INITIAL_ENQUIRIES: Enquiry[] = [
  {
    id: 'enq-101',
    customerName: 'Vikram Singh Sisodia',
    phone: '+91 98261 44552',
    email: 'vikram.sisodia@gmail.com',
    eventType: 'Wedding',
    eventDate: '2026-11-18',
    guestCount: 650,
    location: 'Town Hall & Garden, Neemuch',
    cuisines: ['Indian', 'Chinese', 'South Indian', 'Desserts'],
    message: 'Looking for complete wedding reception dinner catering with live counters for 650 guests.',
    status: 'Confirmed',
    createdAt: '2026-09-20T10:30:00Z',
    estimatedBudget: 350000
  },
  {
    id: 'enq-102',
    customerName: 'Priya Rathore',
    phone: '+91 94253 11890',
    email: 'priya.rathore@outlook.com',
    eventType: 'Birthday',
    eventDate: '2026-10-05',
    guestCount: 120,
    location: 'Scheme No 36, Neemuch',
    cuisines: ['Fast Food', 'Chinese', 'Beverages'],
    message: 'Need live pizza, burger, pasta, and Chinese starters counter for 25th birthday party.',
    status: 'New',
    createdAt: '2026-09-24T14:15:00Z',
    estimatedBudget: 55000
  }
];
