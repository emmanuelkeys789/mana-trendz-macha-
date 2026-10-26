export interface Product {
  id: string;
  name: string;
  category: 'Shirts' | 'T-Shirts' | 'Pants' | 'Shoes' | 'Accessories';
  vibes: ('Street' | 'Minimal' | 'Date Night' | 'College' | 'Weekend' | 'Festive' | 'Oversized')[];
  price: number;
  originalPrice: number;
  offerTag?: string; // e.g. '3 FOR ₹1000', '2 FOR ₹1000', '4 FOR ₹1000', '3 FOR ₹1200'
  rating: number;
  reviewCount: number;
  image: string;
  hoverImage: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  description: string;
  details: string[];
  fabric: string;
  fit: string;
  inStock: boolean;
  featured?: boolean;
  isNewDrop?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'classic-checked-shirt',
    name: 'Classic Checked Flannel Shirt',
    category: 'Shirts',
    vibes: ['College', 'Festive', 'Weekend'],
    price: 499,
    originalPrice: 899,
    offerTag: '3 FOR ₹1000',
    rating: 4.9,
    reviewCount: 142,
    image: '/images/products/classic-checked-shirt.jpg',
    hoverImage: '/images/products/classic-checked-shirt-alt.jpg',
    colors: [
      { name: 'Mustard Check', hex: '#D2B347' },
      { name: 'Charcoal Black', hex: '#252620' },
      { name: 'Stone Grey', hex: '#B7B5AC' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Heavyweight brushed cotton flannel in a signature mustard yellow and black plaid pattern. Tailored for effortless everyday layering over clean white tees.',
    details: [
      '100% Breathable Brushed Cotton',
      'Dual chest utility flap pockets',
      'Relaxed comfort drop-shoulder cut',
      'Part of our signature 3 for ₹1000 shirt combo'
    ],
    fabric: '100% Brushed Cotton Twill',
    fit: 'Relaxed Casual Fit',
    inStock: true,
    featured: true,
    isNewDrop: true
  },
  {
    id: 'beige-relaxed-shirt',
    name: 'Beige Relaxed-Fit Camp Shirt',
    category: 'Shirts',
    vibes: ['Minimal', 'Weekend', 'Date Night'],
    price: 499,
    originalPrice: 899,
    offerTag: '3 FOR ₹1000',
    rating: 4.8,
    reviewCount: 98,
    image: '/images/products/beige-relaxed-shirt.jpg',
    hoverImage: '/images/products/beige-relaxed-shirt-alt.jpg',
    colors: [
      { name: 'Warm Cream', hex: '#F4F1E8' },
      { name: 'Oatmeal', hex: '#E5D48A' },
      { name: 'Washed Charcoal', hex: '#252620' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Clean resort-collar silhouette crafted with breezy linen blend weave. Understated luxury that transitions smoothly from sunset coffee to casual dinner dates.',
    details: [
      'Linen-cotton breathable blend',
      'Cuban notch collar design',
      'Natural coconut shell tonal buttons',
      'Pre-washed for instant soft hand-feel'
    ],
    fabric: '60% Linen, 40% Cotton',
    fit: 'Boxy Relaxed Fit',
    inStock: true,
    featured: true
  },
  {
    id: 'graphic-streetwear-tee',
    name: 'Graphic Streetwear Oversized Tee',
    category: 'T-Shirts',
    vibes: ['Street', 'Oversized', 'College'],
    price: 349,
    originalPrice: 699,
    offerTag: '4 FOR ₹1000',
    rating: 4.9,
    reviewCount: 215,
    image: '/images/products/graphic-streetwear-tee.jpg',
    hoverImage: '/images/products/graphic-streetwear-tee-alt.jpg',
    colors: [
      { name: 'Nocturne Olive', hex: '#3B4032' },
      { name: 'Onyx Black', hex: '#171815' },
      { name: 'Vintage Stone', hex: '#B7B5AC' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: '240 GSM heavy cotton oversized streetwear t-shirt featuring high-density screen print and dropped shoulders for authentic street silhouette.',
    details: [
      '240 GSM Heavyweight French Terry Cotton',
      'High-density fade-resistant screen print',
      'Ribbed thick collar that retains shape',
      'Part of our 4 T-Shirts for ₹1000 store offer'
    ],
    fabric: '100% Combed Heavy Cotton',
    fit: 'Oversized Boxy Fit',
    inStock: true,
    featured: true,
    isNewDrop: true
  },
  {
    id: 'black-oversized-printed-shirt',
    name: 'Black Oversized Printed Shirt',
    category: 'Shirts',
    vibes: ['Street', 'Oversized', 'Date Night'],
    price: 499,
    originalPrice: 999,
    offerTag: '3 FOR ₹1000',
    rating: 4.7,
    reviewCount: 84,
    image: '/images/products/black-oversized-printed-shirt.jpg',
    hoverImage: '/images/products/black-oversized-printed-shirt-alt.jpg',
    colors: [
      { name: 'Midnight Black', hex: '#171815' },
      { name: 'Muted Mustard Accent', hex: '#D2B347' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Statement oversized button-down with textured tonal prints. Designed for the modern Hyderabad street style aficionado who appreciates volume and movement.',
    details: [
      'Flowing Rayon-Cotton Blend',
      'Dropped shoulder architecture',
      'Straight hemline with side slits',
      'Available under the 3 for ₹1000 offer'
    ],
    fabric: 'Rayon-Viscose Dobby',
    fit: 'Modern Oversized Drop',
    inStock: true,
    isNewDrop: true
  },
  {
    id: 'white-premium-shirt',
    name: 'White Premium Textured Linen Shirt',
    category: 'Shirts',
    vibes: ['Minimal', 'Date Night', 'Festive'],
    price: 599,
    originalPrice: 1199,
    offerTag: '2 FOR ₹1000',
    rating: 5.0,
    reviewCount: 167,
    image: '/images/products/white-premium-shirt.jpg',
    hoverImage: '/images/products/white-premium-shirt-alt.jpg',
    colors: [
      { name: 'Pure Chalk White', hex: '#F4F1E8' },
      { name: 'Sand Cream', hex: '#E5D48A' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Fine structured weave shirt with immaculate drape. A staple piece that commands attention at any evening gathering or upscale dining spot.',
    details: [
      'Premium European linen yarn blend',
      'Curved hemline tailored for tuck or untuck',
      'Single button barrel cuffs with tonal stitching',
      'Qualifies for 2 Premium Shirts for ₹1000 offer'
    ],
    fabric: '100% Pure Fine Linen',
    fit: 'Tailored Slim-Regular Fit',
    inStock: true,
    featured: true
  },
  {
    id: 'blue-straight-jeans',
    name: 'Vintage Blue Straight-Fit Jeans',
    category: 'Pants',
    vibes: ['College', 'Weekend', 'Minimal'],
    price: 499,
    originalPrice: 1299,
    offerTag: '3 FOR ₹1200',
    rating: 4.9,
    reviewCount: 178,
    image: '/images/products/blue-straight-jeans.jpg',
    hoverImage: '/images/products/blue-straight-jeans-alt.jpg',
    colors: [
      { name: 'Vintage Mid Wash', hex: '#4B6B94' },
      { name: 'Deep Indigo', hex: '#1F2937' }
    ],
    sizes: ['30', '32', '34', '36'],
    description: 'Authentic 13.5 oz non-stretch rigid denim crafted in a classic mid-rise straight leg cut. Fades gracefully with wear to match your distinct stride.',
    details: [
      '13.5 oz Heavyweight Ring-Spun Denim',
      'Reinforced bar-tack pocket points',
      'Custom brass hardware and zip fly',
      'Part of our 3 Pants for ₹1200 combo'
    ],
    fabric: '100% Rigid Ring-Spun Cotton Denim',
    fit: 'Classic Straight Leg Fit',
    inStock: true,
    featured: true
  },
  {
    id: 'black-baggy-jeans',
    name: 'Washed Black Baggy Denim Jeans',
    category: 'Pants',
    vibes: ['Street', 'Oversized', 'College'],
    price: 499,
    originalPrice: 1299,
    offerTag: '3 FOR ₹1200',
    rating: 4.8,
    reviewCount: 192,
    image: '/images/products/black-baggy-jeans.jpg',
    hoverImage: '/images/products/black-baggy-jeans-alt.jpg',
    colors: [
      { name: 'Washed Pitch Black', hex: '#171815' },
      { name: 'Acid Ash Grey', hex: '#374151' }
    ],
    sizes: ['30', '32', '34', '36', '38'],
    description: 'Generous 90s skater cut featuring stacking ankles and wide thighs. The quintessential youth culture bottom that pairs effortlessly with retro sneakers.',
    details: [
      '14 oz High-Density Skater Denim',
      'Subtle stone wash whiskering treatment',
      'Deep front pocket bags & utility loop',
      'Part of our 3 Pants for ₹1200 combo'
    ],
    fabric: '100% Heavy Cotton Denim',
    fit: 'Wide-Leg Baggy Fit',
    inStock: true,
    featured: true,
    isNewDrop: true
  },
  {
    id: 'olive-cargo-pants',
    name: 'Olive Multi-Pocket Tactical Cargo Pants',
    category: 'Pants',
    vibes: ['Street', 'College', 'Weekend'],
    price: 499,
    originalPrice: 1299,
    offerTag: '3 FOR ₹1200',
    rating: 4.9,
    reviewCount: 153,
    image: '/images/products/olive-cargo-pants.jpg',
    hoverImage: '/images/products/olive-cargo-pants-alt.jpg',
    colors: [
      { name: 'Military Olive', hex: '#3F4435' },
      { name: 'Onyx Black', hex: '#171815' },
      { name: 'Desert Khaki', hex: '#D2B347' }
    ],
    sizes: ['30', '32', '34', '36'],
    description: 'Functional ripstop tactical cargos equipped with 6 accordion cargo bellows and adjustable drawcord ankle cuffs for customizable taper.',
    details: [
      'Tough Cotton-Nylon Ripstop Weave',
      '6 Modular Cargo Storage Compartments',
      'Adjustable bungee cords at hem cuffs',
      'Available under 3 Pants for ₹1200 offer'
    ],
    fabric: 'Ripstop Cotton-Polyamide',
    fit: 'Articulated Relaxed Taper',
    inStock: true,
    isNewDrop: true
  },
  {
    id: 'white-sneakers',
    name: 'Retro White Court Sneakers',
    category: 'Shoes',
    vibes: ['Minimal', 'College', 'Weekend'],
    price: 399,
    originalPrice: 999,
    offerTag: '3 PAIRS FOR ₹1000',
    rating: 4.8,
    reviewCount: 164,
    image: '/images/products/white-sneakers.jpg',
    hoverImage: '/images/products/white-sneakers-alt.jpg',
    colors: [
      { name: 'Chalk White / Black', hex: '#F4F1E8' },
      { name: 'Triple White', hex: '#FFFFFF' }
    ],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'],
    description: 'Clean low-top court sneakers featuring supple vegan leather uppers, vulcanized rubber cupsole, and cushioned memory insoles for day-long street comfort.',
    details: [
      'Durable micro-leather upper',
      'Cushioned memory foam footbed',
      'Non-marking gum grip rubber outsole',
      'Part of our 3 Shoes for ₹1000 store offer'
    ],
    fabric: 'Vegan Napa Leather & Vulcanized Rubber',
    fit: 'True to Size',
    inStock: true,
    featured: true
  },
  {
    id: 'black-loafers',
    name: 'Heritage Black Bit Loafers',
    category: 'Shoes',
    vibes: ['Date Night', 'Weekend', 'Minimal', 'Festive'],
    price: 399,
    originalPrice: 1199,
    offerTag: '3 PAIRS FOR ₹1000',
    rating: 4.9,
    reviewCount: 112,
    image: '/images/products/black-loafers.jpg',
    hoverImage: '/images/products/black-loafers-alt.jpg',
    colors: [
      { name: 'Polished Black', hex: '#171815' },
      { name: 'Dark Mocha Brown', hex: '#3B2F2F' }
    ],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'],
    description: 'Refined slip-on dress loafers accented with brushed brass horsebit hardware. Elegantly finishes off cropped chinos and tailored trousers.',
    details: [
      'Supple textured faux leather upper',
      'Antiqued muted-brass bit buckle accent',
      'Flexible driving sole construction',
      'Part of our 3 Shoes for ₹1000 store offer'
    ],
    fabric: 'Engineered Synthetic Leather',
    fit: 'Comfort Slip-On Fit',
    inStock: true,
    featured: true
  },
  {
    id: 'casual-sandals',
    name: 'Classic Dual-Strap Leather Sandals',
    category: 'Shoes',
    vibes: ['Weekend', 'Festive', 'College'],
    price: 399,
    originalPrice: 799,
    offerTag: '3 PAIRS FOR ₹1000',
    rating: 4.7,
    reviewCount: 89,
    image: '/images/products/casual-sandals.jpg',
    hoverImage: '/images/products/casual-sandals-alt.jpg',
    colors: [
      { name: 'Warm Tan Brown', hex: '#8B5A2B' },
      { name: 'Pitch Black', hex: '#171815' }
    ],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'],
    description: 'Anatomical cork-inspired footbed sandals with dual buckled straps. Designed for hot Hyderabad afternoons and relaxed weekend hangouts.',
    details: [
      'Dual adjustable matte pin-buckles',
      'Ergonomic contour footbed',
      'Lightweight shock-absorbing EVA sole',
      'Part of our 3 Shoes for ₹1000 combo'
    ],
    fabric: 'Suede-Finish Faux Leather & EVA',
    fit: 'Adjustable Dual Strap',
    inStock: true
  },
  {
    id: 'panda-sneakers',
    name: 'Panda Monochrome Street Sneakers',
    category: 'Shoes',
    vibes: ['Street', 'Oversized', 'College'],
    price: 399,
    originalPrice: 1299,
    offerTag: '3 PAIRS FOR ₹1000',
    rating: 5.0,
    reviewCount: 247,
    image: '/images/products/panda-sneakers.jpg',
    hoverImage: '/images/products/panda-sneakers-alt.jpg',
    colors: [
      { name: 'Black & White Panda', hex: '#171815' },
      { name: 'Grey Smoke', hex: '#B7B5AC' }
    ],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    description: 'The iconic black-and-white skate dunk silhouette. Cushioned collar, perforated toe box, and high-traction pivot circle rubber outsole.',
    details: [
      'Colorblock premium synthetic panels',
      'Perforated toe ventilation',
      'Heavy-duty cupsole stitching',
      'Part of our 3 Shoes for ₹1000 combo'
    ],
    fabric: 'Synthetic Leather & Gum Rubber',
    fit: 'Padded Skate Fit',
    inStock: true,
    featured: true,
    isNewDrop: true
  },
  {
    id: 'black-textured-shirt',
    name: 'Nocturne Textured Camp-Collar Shirt',
    category: 'Shirts',
    vibes: ['Date Night', 'Festive'],
    price: 599,
    originalPrice: 1199,
    offerTag: '2 FOR ₹1000',
    rating: 4.8,
    reviewCount: 76,
    image: '/images/products/black-textured-shirt.jpg',
    hoverImage: '/images/products/black-textured-shirt-alt.jpg',
    colors: [
      { name: 'Textured Jet Black', hex: '#171815' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Subtle jacquard geometric texture gives this black shirt remarkable depth under evening lights. Designed for high-impact night outs in Jubilee Hills and Gachibowli.',
    details: [
      'Self-woven jacquard tonal micro-pattern',
      'Cuban open collar construction',
      'Slight stretch for freedom of movement',
      'Qualifies for 2 Premium Shirts for ₹1000 offer'
    ],
    fabric: 'Cotton-Poly Micro Jacquard',
    fit: 'Modern Slim-Tailored',
    inStock: true
  },
  {
    id: 'charcoal-pleated-trousers',
    name: 'Charcoal Tailored Pleated Trousers',
    category: 'Pants',
    vibes: ['Minimal', 'Date Night', 'Festive'],
    price: 499,
    originalPrice: 1299,
    offerTag: '3 FOR ₹1200',
    rating: 4.9,
    reviewCount: 118,
    image: '/images/products/charcoal-pleated-trousers.jpg',
    hoverImage: '/images/products/charcoal-pleated-trousers-alt.jpg',
    colors: [
      { name: 'Charcoal Grey', hex: '#252620' },
      { name: 'Deep Black', hex: '#171815' }
    ],
    sizes: ['30', '32', '34', '36'],
    description: 'Double reverse pleats give these trousers a luxurious, draped drape. Side waist tabs provide a bespoke silhouette without requiring a belt.',
    details: [
      'Tropical wool-feel blended suiting fabric',
      'Double front forward pleats with pressed crease',
      'Side waist cinch buckles',
      'Part of our 3 Pants for ₹1200 combo'
    ],
    fabric: 'Poly-Viscose Suiting Drape',
    fit: 'Wide-Leg Pleated Tailoring',
    inStock: true
  }
];

export const ACCESSORIES = [
  {
    id: 'acc-chain',
    name: 'Minimal Cuban Curb Chain',
    category: 'Accessories',
    price: 299,
    image: '/images/products/classic-checked-shirt.jpg',
    colors: [{ name: 'Polished Silver', hex: '#B7B5AC' }]
  },
  {
    id: 'acc-shades',
    name: 'Retro Square Black Sunglasses',
    category: 'Accessories',
    price: 399,
    image: '/images/products/beige-relaxed-shirt.jpg',
    colors: [{ name: 'Matte Black', hex: '#171815' }]
  },
  {
    id: 'acc-watch',
    name: 'Minimalist Steel Chrono Watch',
    category: 'Accessories',
    price: 599,
    image: '/images/products/white-sneakers.jpg',
    colors: [{ name: 'Silver Steel', hex: '#B7B5AC' }]
  }
];
