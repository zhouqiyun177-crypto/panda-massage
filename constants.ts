import { Service, Testimonial, NavItem, Therapist } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Therapists', path: '/therapists' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

// Using specific Unsplash IDs for high quality massage/spa images
export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Royal Thai Massage',
    description: 'A traditional therapy combining acupressure, Indian Ayurvedic principles, and assisted yoga postures.',
    duration: '60 min / 90 min',
    price: 'AED 250 / AED 350',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop', // Massage back
    category: 'massage',
  },
  {
    id: '2',
    title: 'Aromatherapy Bliss',
    description: 'Gentle massage using essential oils to promote healing, a feeling of well-being, and relaxation.',
    duration: '60 min',
    price: 'AED 280',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=800&auto=format&fit=crop', // Bottles of oil (New)
    category: 'massage',
  },
  {
    id: '3',
    title: 'Deep Tissue Revival',
    description: 'Designed to relieve severe tension in the muscle and the connective tissue or fascia.',
    duration: '60 min',
    price: 'AED 300',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop', // Massage hands
    category: 'massage',
  },
  {
    id: '4',
    title: 'Gold Facial Treatment',
    description: 'Luxurious anti-aging treatment using 24k gold leafs to restore skin elasticity and glow.',
    duration: '75 min',
    price: 'AED 450',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop', // Facial
    category: 'facial',
  },
  {
    id: '5',
    title: 'Moroccan Bath (Hammam)',
    description: 'Traditional cleansing ritual involving steam, black soap scrub, and full body exfoliation.',
    duration: '60 min',
    price: 'AED 350',
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800&auto=format&fit=crop', // Interior/Bath (New)
    category: 'body-treatment',
  },
  {
    id: '6',
    title: 'Hot Stone Therapy',
    description: 'Smooth, flat, heated stones are placed on specific parts of your body to maximize relaxation.',
    duration: '90 min',
    price: 'AED 400',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop', // Pink flower/spa vibe (Originally used for Aroma)
    category: 'massage',
  },
];

export const TESTIMONIALS: Testimonial[] = [];

export const THERAPISTS: Therapist[] = [
  {
    id: 't1',
    name: 'Natasha',
    nickname: 'Bella',
    country: 'Russia',
    flag: '🇷🇺',
    height: '172 cm',
    weight: '55 kg',
    specialties: ['Deep Tissue', 'Swedish', 'Relaxing'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800&h=1000'
  },
  {
    id: 't2',
    name: 'Ploi',
    nickname: 'Lisa',
    country: 'Thailand',
    flag: '🇹🇭',
    height: '160 cm',
    weight: '48 kg',
    specialties: ['Traditional Thai', 'Yoga Stretching', 'Reflexology'],
    image: 'https://images.unsplash.com/photo-1595152452543-e5cca283f585?auto=format&fit=crop&q=80&w=800&h=1000'
  },
  {
    id: 't3',
    name: 'Amina',
    nickname: 'Zara',
    country: 'Morocco',
    flag: '🇲🇦',
    height: '168 cm',
    weight: '62 kg',
    specialties: ['Moroccan Bath', 'Hammam', 'Scrub'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=1000'
  },
  {
    id: 't4',
    name: 'Elena',
    nickname: 'Elly',
    country: 'Ukraine',
    flag: '🇺🇦',
    height: '175 cm',
    weight: '58 kg',
    specialties: ['Aromatherapy', 'Lomi Lomi', 'Hot Stone'],
    image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&q=80&w=800&h=1000'
  },
  {
    id: 't5',
    name: 'Li Wei',
    nickname: 'Lily',
    country: 'China',
    flag: '🇨🇳',
    height: '165 cm',
    weight: '50 kg',
    specialties: ['Chinese Tuina', 'Reflexology', 'Back Massage'],
    image: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?auto=format&fit=crop&q=80&w=800&h=1000'
  },
  {
    id: 't6',
    name: 'Grace',
    nickname: 'Grace',
    country: 'South Korea',
    flag: '🇰🇷',
    height: '168 cm',
    weight: '53 kg',
    specialties: ['Shiatsu', 'Deep Tissue', 'Oil Massage'],
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800&h=1000'
  },
  {
    id: 't7',
    name: 'Hana',
    nickname: 'Hana',
    country: 'Japan',
    flag: '🇯🇵',
    height: '162 cm',
    weight: '49 kg',
    specialties: ['Relaxing', 'Face Massage', 'Head Massage'],
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800&h=1000'
  },
  {
    id: 't8',
    name: 'Isabella',
    nickname: 'Bella',
    country: 'Brazil',
    flag: '🇧🇷',
    height: '170 cm',
    weight: '60 kg',
    specialties: ['Sports Massage', 'Deep Tissue', 'Body Scrub'],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800&h=1000'
  }
];