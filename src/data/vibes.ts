export interface VibeItem {
  id: string;
  name: string;
  slug: 'Street' | 'Minimal' | 'Date Night' | 'College' | 'Weekend' | 'Festive' | 'Oversized';
  tagline: string;
  description: string;
  image: string;
  accent: string;
  gridSpan: string; // for asymmetric editorial layout
  itemCount: number;
}

export const VIBES: VibeItem[] = [
  {
    id: 'vibe-street',
    name: 'STREET',
    slug: 'Street',
    tagline: 'Raw Energy & Heavy Drops',
    description: 'Boxy graphic tees, washed skater denim, and tactical cargo pockets built for the concrete pulse.',
    image: '/images/vibes/street.jpg',
    accent: '#D2B347',
    gridSpan: 'md:col-span-2 md:row-span-2',
    itemCount: 8
  },
  {
    id: 'vibe-minimal',
    name: 'MINIMAL',
    slug: 'Minimal',
    tagline: 'Clean Lines, Quiet Presence',
    description: 'Subtle European linens, fluid trousers, and tonal monochrome precision that speaks softly.',
    image: '/images/vibes/minimal.jpg',
    accent: '#E5D48A',
    gridSpan: 'md:col-span-1 md:row-span-1',
    itemCount: 6
  },
  {
    id: 'vibe-datenight',
    name: 'DATE NIGHT',
    slug: 'Date Night',
    tagline: 'After-Dark Sharpness',
    description: 'Open-collar textured jacquards, tailored pleats, and polished bit loafers that command the room.',
    image: '/images/vibes/datenight.jpg',
    accent: '#D2B347',
    gridSpan: 'md:col-span-1 md:row-span-2',
    itemCount: 5
  },
  {
    id: 'vibe-oversized',
    name: 'OVERSIZED',
    slug: 'Oversized',
    tagline: 'Sculpted Volume & Ease',
    description: 'Drop-shoulder silhouettes, generous drape, and effortless proportions engineered for relaxed posture.',
    image: '/images/vibes/oversized.jpg',
    accent: '#D2B347',
    gridSpan: 'md:col-span-2 md:row-span-1',
    itemCount: 7
  },
  {
    id: 'vibe-college',
    name: 'COLLEGE',
    slug: 'College',
    tagline: 'Campus Fits Done Right',
    description: 'Layered flannels over pristine white tees, rugged vintage jeans, and reliable court sneakers.',
    image: '/images/vibes/college.jpg',
    accent: '#E5D48A',
    gridSpan: 'md:col-span-1 md:row-span-1',
    itemCount: 9
  },
  {
    id: 'vibe-weekend',
    name: 'WEEKEND',
    slug: 'Weekend',
    tagline: 'Off-Duty Comfort',
    description: 'Breezy camp-collars, relaxed fit chinos, and effortless dual-strap sandals for golden-hour cafes.',
    image: '/images/vibes/weekend.jpg',
    accent: '#D2B347',
    gridSpan: 'md:col-span-1 md:row-span-1',
    itemCount: 6
  },
  {
    id: 'vibe-festive',
    name: 'FESTIVE',
    slug: 'Festive',
    tagline: 'Contemporary Celebration',
    description: 'Modern celebratory shirts with rich textures and mustard undertones that stand out with elegance.',
    image: '/images/vibes/festive.jpg',
    accent: '#D2B347',
    gridSpan: 'md:col-span-2 md:row-span-1',
    itemCount: 4
  }
];
