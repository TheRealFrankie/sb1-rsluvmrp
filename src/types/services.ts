import { LucideIcon } from 'lucide-react';

export interface Benefit {
  title: string;
  description: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  brief: string;
  description: string;
  benefits: Benefit[];
  metrics?: Metric[];
}