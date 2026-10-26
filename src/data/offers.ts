export interface SignatureOffer {
  id: string;
  category: string;
  headline: string;
  quantity: string;
  price: string;
  priceNumber: number;
  unitPrice: string;
  description: string;
  badge: string;
  bgType: 'dark' | 'light';
  targetFilter: {
    category?: 'Shirts' | 'T-Shirts' | 'Pants' | 'Shoes';
    offerTag?: string;
  };
}

export const SIGNATURE_OFFERS: SignatureOffer[] = [
  {
    id: 'offer-shirts',
    category: 'CASUAL & PRINTED SHIRTS',
    headline: 'SHIRTS',
    quantity: '3 FOR',
    price: '₹1000',
    priceNumber: 1000,
    unitPrice: '₹333 / shirt',
    description: 'Mix & match any 3 checked flannels, relaxed camp shirts, and printed oversized shirts.',
    badge: 'STORE FAVORITE',
    bgType: 'dark',
    targetFilter: { category: 'Shirts', offerTag: '3 FOR ₹1000' }
  },
  {
    id: 'offer-premium-shirts',
    category: 'LUXE LINEN & JACQUARD',
    headline: 'PREMIUM SHIRTS',
    quantity: '2 FOR',
    price: '₹1000',
    priceNumber: 1000,
    unitPrice: '₹500 / shirt',
    description: 'Structured fine linen weaves, pure cotton dobby, and date-night resort collars.',
    badge: 'LUXURY DROP',
    bgType: 'light',
    targetFilter: { category: 'Shirts', offerTag: '2 FOR ₹1000' }
  },
  {
    id: 'offer-tshirts',
    category: 'HEAVYWEIGHT STREETWEAR',
    headline: 'T-SHIRTS',
    quantity: '4 FOR',
    price: '₹1000',
    priceNumber: 1000,
    unitPrice: '₹250 / t-shirt',
    description: '240 GSM dense cotton street tees, graphic drop shoulders, and vintage mineral washes.',
    badge: 'YOUTH PACK',
    bgType: 'dark',
    targetFilter: { category: 'T-Shirts', offerTag: '4 FOR ₹1000' }
  },
  {
    id: 'offer-pants',
    category: 'DENIM & CARGOS',
    headline: 'PANTS',
    quantity: '3 FOR',
    price: '₹1200',
    priceNumber: 1200,
    unitPrice: '₹400 / bottom',
    description: 'Baggy skater denim, vintage straight-fit jeans, tactical ripstop cargos, and pleated trousers.',
    badge: 'SIGNATURE COMBO',
    bgType: 'light',
    targetFilter: { category: 'Pants', offerTag: '3 FOR ₹1200' }
  },
  {
    id: 'offer-shoes',
    category: 'SNEAKERS, LOAFERS & SANDALS',
    headline: 'SHOES',
    quantity: '3 PAIRS FOR',
    price: '₹1000',
    priceNumber: 1000,
    unitPrice: '₹333 / pair',
    description: 'Retro court sneakers, brass bit loafers, street dunks, and contoured dual-strap sandals.',
    badge: 'UNBEATABLE FOOTWEAR',
    bgType: 'dark',
    targetFilter: { category: 'Shoes', offerTag: '3 PAIRS FOR ₹1000' }
  }
];
