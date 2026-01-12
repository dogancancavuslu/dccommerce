
import React from 'react';
import { NavItem, StatItem } from './types';
import { Rocket, Globe, Code, TrendingUp, Server, ShoppingCart, Package } from 'lucide-react';

export const COLORS = {
  navy: '#1A2B4A',
  white: '#FFFFFF',
  gray: '#5B6C7D',
  electricBlue: '#2E7DD2',
  silver: '#E8ECEF',
  successGreen: '#10B981',
  errorRed: '#DC2626'
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' }
];

export const STATS: StatItem[] = [
  { label: 'Founded', value: '2024' },
  { label: 'Countries', value: '5+' },
  { label: 'Projects Delivered', value: '10+' },
  { label: 'Clients Served', value: '15+' }
];

export const DIFFERENTIATORS = [
  {
    title: 'Agile & Fast',
    description: 'We move quickly and adapt to your needs. No bureaucracy, just results.',
    icon: <Rocket className="w-8 h-8 text-[#2E7DD2]" />
  },
  {
    title: 'Global Mindset',
    description: 'Experience in international trade and cross-border e-commerce solutions.',
    icon: <Globe className="w-8 h-8 text-[#2E7DD2]" />
  },
  {
    title: 'Tech-First',
    description: 'Modern tech stack and clean code. We build scalable solutions from day one.',
    icon: <Code className="w-8 h-8 text-[#2E7DD2]" />
  },
  {
    title: 'Growth Partners',
    description: 'We grow with you. Your success is our success.',
    icon: <TrendingUp className="w-8 h-8 text-[#2E7DD2]" />
  }
];

export const SERVICE_HIGHLIGHTS = [
  {
    title: 'Software Development',
    description: 'SaaS products and custom software solutions. Our Tralyz finance platform is live, with Gifty coming soon.',
    icon: <Code className="w-10 h-10 text-[#2E7DD2]" />
  },
  {
    title: 'E-commerce Solutions',
    description: 'Global e-commerce operations with warehousing infrastructure in multiple countries.',
    icon: <ShoppingCart className="w-10 h-10 text-[#2E7DD2]" />
  },
  {
    title: 'Import & Export',
    description: 'Consulting services for international trade and cross-border business expansion.',
    icon: <Package className="w-10 h-10 text-[#2E7DD2]" />
  }
];
