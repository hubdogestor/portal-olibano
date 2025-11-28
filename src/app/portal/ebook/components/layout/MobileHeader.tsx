'use client';

import { Menu, X } from 'lucide-react';

type MobileHeaderProps = {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
};

const MobileHeader = ({ isMenuOpen, onToggleMenu }: MobileHeaderProps) => (
  <div className="md:hidden fixed top-0 w-full bg-white/95 backdrop-blur-lg z-30 border-b border-olibano-sage/20 px-5 py-4 flex justify-between items-center shadow-lg">
    <div className="flex items-center gap-3">
      <img
        src="/images/logo-simbolo.png"
        alt="Olíbano"
        className="w-8 h-8 object-contain"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />
      <div>
        <span className="text-olibano-forest font-serif font-bold tracking-[0.2em] text-xs block">OLÍBANO</span>
        <span className="text-[10px] tracking-[0.45em] uppercase text-olibano-forest/50">Práticas</span>
      </div>
    </div>
    <button
      type="button"
      onClick={onToggleMenu}
      className="p-2 text-olibano-forest hover:bg-olibano-cream rounded-xl transition-colors"
      aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
    >
      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>
);

export default MobileHeader;
