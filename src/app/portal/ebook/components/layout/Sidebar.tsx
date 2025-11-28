'use client';

import Image from 'next/image';
import { menuItems } from '../../data/menuItems';
import type { SectionId } from '../../data/menuItems';

type SidebarProps = {
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
};

const Sidebar = ({ activeSection, onNavigate }: SidebarProps) => (
  <aside
    className="hidden md:flex flex-col w-80 border-r border-olibano-sage/20 h-full shadow-xl z-20 bg-white/90"
    style={{
      backgroundImage:
        "linear-gradient(180deg, rgba(250,247,242,0.95) 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0.95) 100%), url('/images/pattern.png')",
      backgroundSize: '420px',
    }}
  >
    <div className="p-8 border-b border-olibano-sage/10 flex flex-col items-center bg-gradient-to-b from-olibano-cream to-white">
      <Image
        src="/images/logo-simbolo.png"
        alt="Olíbano"
        width={160}
        height={160}
        className="w-16 h-16 object-contain mb-4"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
          const fallback = event.currentTarget.nextElementSibling as HTMLElement | null;
          if (fallback) {
            fallback.style.display = 'flex';
          }
        }}
        priority
      />
      <div className="w-16 h-16 hidden bg-gradient-to-br from-olibano-forest to-olibano-forest/80 rounded-full items-center justify-center text-olibano-cream font-serif font-bold text-2xl mb-4 shadow-lg">
        O
      </div>
      <span className="text-olibano-forest font-serif font-bold tracking-[0.3em] text-sm">OLÍBANO</span>
      <span className="text-olibano-forest/50 text-xs mt-1 tracking-wider">PRÁTICAS INTEGRATIVAS</span>
    </div>
    <nav className="flex-1 overflow-y-auto py-6 px-5 space-y-2">
      {menuItems.map(({ id, label, summary, Icon, accent }) => {
        const isActive = activeSection === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onNavigate(id)}
            className={`group w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-sm transition-all duration-300 border border-transparent ${
              isActive
                ? 'bg-white text-olibano-forest shadow-olibano-soft border-olibano-gold/20'
                : 'text-olibano-forest/80 hover:bg-white/70 hover:border-olibano-sage/30'
            }`}
          >
            <div
              className={`w-11 h-11 rounded-olibano flex items-center justify-center text-white shadow-md bg-gradient-to-br ${accent} ${
                isActive ? '' : 'opacity-90'
              }`}
            >
              <Icon size={20} />
            </div>
            <div className="text-left">
              <span className="font-semibold block text-base tracking-wide">{label}</span>
              <span className="text-[10px] uppercase tracking-[0.45em] text-olibano-forest/40 block mt-1">{summary}</span>
            </div>
            <span
              className={`ml-auto w-1.5 h-10 rounded-full transition-colors ${
                isActive ? 'bg-olibano-gold' : 'bg-olibano-sage/20 group-hover:bg-olibano-sage/50'
              }`}
            ></span>
          </button>
        );
      })}
    </nav>
    <div className="p-6 border-t border-olibano-sage/10 bg-olibano-cream/50">
      <p className="text-xs text-olibano-forest/40 text-center">© 2025 Olíbano VIP</p>
    </div>
  </aside>
);

export default Sidebar;
