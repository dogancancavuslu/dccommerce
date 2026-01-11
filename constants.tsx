
import React from 'react';
import { NavItem, StatItem } from './types';
import { Shield, Globe, Cpu, BarChart, Server, ShoppingCart } from 'lucide-react';

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
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' }
];

export const STATS: StatItem[] = [
  { label: 'Years in Operation', value: '12+' },
  { label: 'Countries Served', value: '45+' },
  { label: 'Enterprise Clients', value: '500+' },
  { label: 'Technical Specialists', value: '150+' }
];

export const DIFFERENTIATORS = [
  {
    title: 'Innovation',
    description: 'Continuously evolving our technology stack to meet the demands of tomorrow.',
    icon: <Cpu className="w-8 h-8 text-[#2E7DD2]" />
  },
  {
    title: 'Reliability',
    description: 'Enterprise-grade uptime and security protocols for mission-critical operations.',
    icon: <Shield className="w-8 h-8 text-[#2E7DD2]" />
  },
  {
    title: 'Global Reach',
    description: 'Infrastructure designed for international scale and seamless cross-border trade.',
    icon: <Globe className="w-8 h-8 text-[#2E7DD2]" />
  },
  {
    title: 'Technical Expertise',
    description: 'Expert engineering teams delivering complex solutions with precision.',
    icon: <BarChart className="w-8 h-8 text-[#2E7DD2]" />
  }
];

export const SERVICE_HIGHLIGHTS = [
  {
    title: 'SaaS Solutions',
    description: 'Scalable cloud architecture designed for international enterprise management and data intelligence.',
    icon: <Server className="w-10 h-10 text-[#2E7DD2]" />
  },
  {
    title: 'E-commerce Operations',
    description: 'Advanced transactional systems powering high-volume international digital commerce platforms.',
    icon: <ShoppingCart className="w-10 h-10 text-[#2E7DD2]" />
  },
  {
    title: 'Global Trade Expertise',
    description: 'Navigating regulatory complexities with technological precision across international markets.',
    icon: <Globe className="w-10 h-10 text-[#2E7DD2]" />
  }
];
