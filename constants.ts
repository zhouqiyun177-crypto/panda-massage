import { Service, Testimonial, NavItem, Therapist } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Therapists', path: '/therapists' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Royal Thai Massage',
    description: 'A traditional therapy combining acupressure, Indian Ayurvedic principles, and assisted yoga postures.',
    duration: '60 min / 90 min',
    price: 'AED 250 / AED 350',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop',
    category: 'massage',
  },
  {
    id: '2',
    title: 'Aromatherapy Bliss',
    description: 'Gentle massage using essential oils to promote healing, a feeling of well-being, and relaxation.',
    duration: '60 min',
    price: 'AED 280',
    image: '/spa-pic/aroma.png',
    category: 'massage',
  },
  {
    id: '3',
    title: 'Deep Tissue Revival',
    description: 'Designed to relieve severe tension in the muscle and the connective tissue or fascia.',
    duration: '60 min',
    price: 'AED 300',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop',
    category: 'massage',
  },
  {
    id: '4',
    title: 'Gold Facial Treatment',
    description: 'Luxurious anti-aging treatment using 24k gold leafs to restore skin elasticity and glow.',
    duration: '75 min',
    price: 'AED 450',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
    category: 'facial',
  },
  {
    id: '5',
    title: 'Moroccan Bath (Hammam)',
    description: 'Traditional cleansing ritual involving steam, black soap scrub, and full body exfoliation.',
    duration: '60 min',
    price: 'AED 350',
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800&auto=format&fit=crop',
    category: 'body-treatment',
  },
  {
    id: '6',
    title: 'Hot Stone Therapy',
    description: 'Smooth, flat, heated stones are placed on specific parts of your body to maximize relaxation.',
    duration: '90 min',
    price: 'AED 400',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop',
    category: 'massage',
  },
];

export const TESTIMONIALS: Testimonial[] = [];

export const THERAPISTS: Therapist[] = [
  {
    id: 't1',
    name: 'Jojo',
    nickname: 'Jojo',
    country: 'Thailand',
    height: '168 cm',
    weight: '55 kg',
    specialties: ['Traditional Thai', 'Deep Tissue', 'Relaxing'],
    image: '/spa-pic/Jojo.png'
  },
  {
    id: 't2',
    name: 'Judy',
    nickname: 'Judy',
    country: 'Thailand',
    height: '165 cm',
    weight: '50 kg',
    specialties: ['Aromatherapy', 'Swedish Massage', 'Hot Stone'],
    image: '/spa-pic/Judy.png'
  },
  {
    id: 't3',
    name: 'Lucy',
    nickname: 'Lucy',
    country: 'Thailand',
    height: '160 cm',
    weight: '48 kg',
    specialties: ['Reflexology', 'Body Scrub', 'Facial Treatment'],
    image: '/spa-pic/Lucy.png'
  }
];