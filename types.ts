
import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  // Added React import to resolve 'Cannot find namespace React' error
  icon: React.ReactNode;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  sector: string;
  achievement: string;
  summary: string;
}
