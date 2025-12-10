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
    description: 'Traditional therapy combining acupressure and assisted yoga postures to align body and mind. Improves flexibility, energy flow, and promotes deep relaxation through ancient healing techniques.',
    duration: '60 min / 90 min',
    price: 'AED 250 / AED 350',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop',
    category: 'massage',
  },
  {
    id: '2',
    title: 'Aromatherapy Bliss',
    description: 'Gentle massage with essential oils to promote healing and relaxation. Aromatic oils enhance circulation and soothe tired muscles while creating well-being.',
    duration: '60 min',
    price: 'AED 300',
    image: '/spa-pic/aroma.png',
    category: 'massage',
  },
  {
    id: '3',
    title: 'Deep Tissue Revival',
    description: 'Intensive therapy targeting deep muscle layers with sustained pressure to relieve chronic tension. Improves mobility and releases severe muscle knots through specialized techniques.',
    duration: '60 min',
    price: 'AED 350',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop',
    category: 'massage',
  },
  {
    id: '4',
    title: 'Head, Shoulder & Neck Massage',
    description: 'Focused treatment relieving tension in head, shoulders, and neck areas. Alleviates headaches, reduces stiffness, and improves circulation in stress-prone zones.',
    duration: '60 min',
    price: 'AED 300',
    image: '/spa-pic/services_head_massage.png',
    category: 'massage',
  },
  {
    id: '5',
    title: 'Foot Massage',
    description: 'Reflexology-based treatment stimulating pressure points to promote relaxation and circulation. Balances body and mind while providing immediate comfort and energy restoration.',
    duration: '60 min',
    price: 'AED 250',
    image: '/spa-pic/services_foot_massage.png',
    category: 'massage',
  },
  {
    id: '6',
    title: 'Gua Sha Therapy',
    description: 'Ancient Chinese technique using smooth stones to improve circulation and release tension. Reduces inflammation and promotes healing energy flow throughout the body naturally.',
    duration: '60 min',
    price: 'AED 350',
    image: '/spa-pic/services_guasha.png',
    category: 'massage',
  },
  {
    id: '7',
    title: 'Couples Retreat Package',
    description: 'Synchronized 90-minute full body massage in a private romantic setting. Includes premium amenities and refreshments for ultimate relaxation together.',
    duration: '90 min',
    price: 'AED 600',
    image: '/spa-pic/services_couples_massages.png',
    category: 'massage',
  },
];

export const TESTIMONIALS: Testimonial[] = [];

// Therapist team members
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
    specialties: ['Aromatherapy', 'Swedish Massage', 'Deep Tissue Revival'],
    image: '/spa-pic/Judy.png'
  },
  {
    id: 't3',
    name: 'Lucy',
    nickname: 'Lucy',
    country: 'Thailand',
    height: '160 cm',
    weight: '48 kg',
    specialties: ['Reflexology', 'Body Scrub', 'Foot Massage'],
    image: '/spa-pic/Lucy.png'
  },
  {
    id: 't4',
    name: 'Jayjay',
    nickname: 'Jayjay',
    country: 'Thailand',
    height: '170 cm',
    weight: '80 kg',
    specialties: ['Royal Thai Massage', 'Gua Sha Therapy', 'Head, Shoulder & Neck Massage'],
    image: '/spa-pic/Jayjay.png'
  }
];
