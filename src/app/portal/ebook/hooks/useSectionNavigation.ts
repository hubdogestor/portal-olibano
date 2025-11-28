'use client';

import { useState } from 'react';
import type { SectionId } from '../data/menuItems';
import { getNextSectionId } from '../data/menuItems';

type Handler = (sectionId: SectionId, afterNavigate?: () => void) => void;

type UseSectionNavigationReturn = {
  activeSection: SectionId;
  isMenuOpen: boolean;
  handleNavClick: Handler;
  toggleMenu: () => void;
  closeMenu: () => void;
  goToNextSection: () => SectionId | null;
};

const useSectionNavigation = (initialSection: SectionId = 'capa'): UseSectionNavigationReturn => {
  const [activeSection, setActiveSection] = useState<SectionId>(initialSection);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick: Handler = (sectionId, afterNavigate) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    if (typeof afterNavigate === 'function') {
      afterNavigate();
    }
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const goToNextSection = () => {
    const nextId = getNextSectionId(activeSection);
    if (nextId) {
      setActiveSection(nextId);
    }
    return nextId;
  };

  return {
    activeSection,
    isMenuOpen,
    handleNavClick,
    toggleMenu,
    closeMenu,
    goToNextSection,
  };
};

export default useSectionNavigation;
