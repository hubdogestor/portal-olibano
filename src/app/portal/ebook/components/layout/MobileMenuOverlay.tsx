'use client';

import { menuItems } from '../../data/menuItems';
import type { SectionId } from '../../data/menuItems';

type MobileMenuOverlayProps = {
  isOpen: boolean;
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
};

const MobileMenuOverlay = ({ isOpen, activeSection, onNavigate }: MobileMenuOverlayProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-20 pt-24 px-6 overflow-y-auto md:hidden animate-fadeIn bg-gradient-to-b from-white via-olibano-cream/80 to-white">
      <nav className="space-y-3">
        {menuItems.map(({ id, label, summary, Icon, accent }) => {
          const isActive = activeSection === id;
          return (
            <button
              type="button"
              key={id}
              onClick={() => onNavigate(id)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all text-left border ${
                isActive
                  ? 'bg-white text-olibano-forest border-olibano-gold/30 shadow-lg'
                  : 'text-olibano-forest/80 border-transparent bg-white/60'
              }`}
            >
              <div className={`w-11 h-11 rounded-olibano flex items-center justify-center bg-gradient-to-br ${accent} text-white shadow-md`}>
                <Icon size={20} />
              </div>
              <div>
                <p className="font-semibold text-base">{label}</p>
                <p className="text-[10px] uppercase tracking-[0.45em] text-olibano-forest/40 mt-1">{summary}</p>
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default MobileMenuOverlay;
