import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  category: 'massage' | 'facial' | 'body-treatment';
}

export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
  location: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface Therapist {
  id: string;
  name: string;
  nickname: string;
  country: string;
  height: string;
  weight: string;
  specialties: string[];
  image: string;
}
