import type { LucideIcon } from 'lucide-react';
import {
  Leaf,
  Info,
  Droplets,
  Wind,
  Brain,
  Gem,
  Sun,
  Headphones,
  Calendar,
  Heart,
} from 'lucide-react';

export type SectionId =
  | 'capa'
  | 'intro'
  | 'aroma'
  | 'breath'
  | 'meditacao'
  | 'gemologia'
  | 'cromoterapia'
  | 'binaural'
  | 'roteiro'
  | 'autora';

export type MenuItem = {
  id: SectionId;
  label: string;
  summary: string;
  accent: string;
  Icon: LucideIcon;
};

export const menuItems: MenuItem[] = [
  { id: 'capa', label: 'Capa', summary: 'Portal inicial', Icon: Leaf, accent: 'from-olibano-forest to-olibano-forest/70' },
  { id: 'intro', label: 'Boas-vindas & EFV', summary: 'Conceitos essenciais', Icon: Info, accent: 'from-olibano-gold to-olibano-terracotta/70' },
  { id: 'aroma', label: 'Aromaterapia', summary: 'Óleos essenciais', Icon: Droplets, accent: 'from-purple-400 to-pink-400' },
  { id: 'breath', label: 'Breathwork', summary: 'Respirações guiadas', Icon: Wind, accent: 'from-sky-400 to-emerald-400' },
  { id: 'meditacao', label: 'Meditação', summary: 'Atenção plena', Icon: Brain, accent: 'from-teal-400 to-emerald-400' },
  { id: 'gemologia', label: 'Gemologia', summary: 'Cristais âncora', Icon: Gem, accent: 'from-rose-400 to-amber-300' },
  { id: 'cromoterapia', label: 'Cromoterapia', summary: 'Cura pelas cores', Icon: Sun, accent: 'from-yellow-400 to-orange-400' },
  { id: 'binaural', label: 'Ondas Binaurais', summary: 'Sintonia sonora', Icon: Headphones, accent: 'from-indigo-400 to-purple-500' },
  { id: 'roteiro', label: 'Roteiro 7 Dias', summary: 'Plano guiado', Icon: Calendar, accent: 'from-emerald-400 to-olibano-gold' },
  { id: 'autora', label: 'Sobre a Autora', summary: 'Quem conduz', Icon: Heart, accent: 'from-olibano-terracotta to-olibano-gold' },
];

export const getSectionIndex = (sectionId: SectionId) => menuItems.findIndex((item) => item.id === sectionId);

export const getNextSectionId = (sectionId: SectionId): SectionId | null => {
  const currentIndex = getSectionIndex(sectionId);
  if (currentIndex === -1 || currentIndex === menuItems.length - 1) {
    return null;
  }
  return menuItems[currentIndex + 1].id;
};
