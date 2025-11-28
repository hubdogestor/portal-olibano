'use client';

import { lazy, Suspense, useRef, type ComponentType, type LazyExoticComponent } from 'react';
import ActiveSectionBadge from './components/common/ActiveSectionBadge';
import MobileHeader from './components/layout/MobileHeader';
import MobileMenuOverlay from './components/layout/MobileMenuOverlay';
import NextSectionButton from './components/layout/NextSectionButton';
import Sidebar from './components/layout/Sidebar';
import { getNextSectionId, getSectionIndex, menuItems, type SectionId } from './data/menuItems';
import useSectionNavigation from './hooks/useSectionNavigation';

type SectionComponent = LazyExoticComponent<ComponentType<{ onStartReading?: () => void }>>;

const sectionComponents: Record<SectionId, SectionComponent> = {
  capa: lazy(() => import('./sections/Capa')),
  intro: lazy(() => import('./sections/Intro')),
  aroma: lazy(() => import('./sections/Aromaterapia')),
  breath: lazy(() => import('./sections/Breathwork')),
  meditacao: lazy(() => import('./sections/Meditacao')),
  gemologia: lazy(() => import('./sections/Gemologia')),
  cromoterapia: lazy(() => import('./sections/Cromoterapia')),
  binaural: lazy(() => import('./sections/Binaural')),
  roteiro: lazy(() => import('./sections/Roteiro')),
  autora: lazy(() => import('./sections/Autora')),
};

const SectionLoading = ({ label = 'Carregando' }: { label?: string }) => (
  <div className="px-6 py-24 max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
    <div className="w-16 h-16 rounded-full border-4 border-olibano-sage/30 border-t-olibano-forest animate-spin"></div>
    <p className="text-olibano-forest/60 tracking-[0.3em] text-xs uppercase">{label}</p>
  </div>
);

const EbookExperience = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { activeSection, isMenuOpen, handleNavClick, toggleMenu, goToNextSection } = useSectionNavigation('capa');

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  };

  const navigateTo = (sectionId: SectionId) => handleNavClick(sectionId, scrollToTop);

  const renderActiveSection = () => {
    const Component = sectionComponents[activeSection];
    if (!Component) {
      return null;
    }

    const sectionProps = activeSection === 'capa' ? { onStartReading: () => navigateTo('intro') } : {};

    const currentItem = menuItems[getSectionIndex(activeSection)];

    return (
      <Suspense fallback={<SectionLoading label={currentItem?.label} />}>
        <Component {...sectionProps} />
      </Suspense>
    );
  };

  const currentIndex = getSectionIndex(activeSection);
  const nextSectionId = getNextSectionId(activeSection);

  const handleNextSection = () => {
    const movedTo = goToNextSection();
    if (movedTo) {
      scrollToTop();
    }
  };

  return (
    <div className="flex h-screen bg-olibano-cream font-sans text-olibano-forest overflow-hidden relative selection:bg-olibano-gold/30">
      <Sidebar activeSection={activeSection} onNavigate={navigateTo} />
      <MobileHeader isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} />
      <MobileMenuOverlay isOpen={isMenuOpen} activeSection={activeSection} onNavigate={navigateTo} />

      <main ref={scrollRef} className="flex-1 h-full overflow-y-auto pt-20 md:pt-0 bg-olibano-cream scroll-smooth relative">
        <div
          className="fixed inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: "url(/images/pattern.png)", backgroundSize: '400px' }}
        ></div>
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-olibano-sage rounded-full mix-blend-multiply filter blur-[100px] opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="fixed bottom-0 left-0 w-96 h-96 bg-olibano-gold rounded-full mix-blend-multiply filter blur-[80px] opacity-15 pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
        <div className="fixed top-1/2 right-0 w-64 h-64 bg-olibano-terracotta rounded-full mix-blend-multiply filter blur-[60px] opacity-10 pointer-events-none translate-x-1/2"></div>

        {typeof currentIndex === 'number' && currentIndex >= 0 && (
          <div className="hidden lg:flex fixed top-10 right-10 z-20">
            <ActiveSectionBadge currentIndex={currentIndex} total={menuItems.length} label={menuItems[currentIndex]?.label} />
          </div>
        )}

        <div className="relative z-10 pb-24">{renderActiveSection()}</div>

        <NextSectionButton
          isVisible={Boolean(nextSectionId) && !isMenuOpen && activeSection !== 'autora'}
          onNext={handleNextSection}
        />
      </main>
    </div>
  );
};

export default EbookExperience;
