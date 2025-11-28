'use client';

import { ChevronRight } from 'lucide-react';

type NextSectionButtonProps = {
  isVisible: boolean;
  onNext: () => void;
};

const NextSectionButton = ({ isVisible, onNext }: NextSectionButtonProps) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-8 right-8 md:right-12 z-20">
      <button
        type="button"
        onClick={onNext}
        className="bg-gradient-to-r from-olibano-forest to-olibano-forest/90 text-olibano-cream p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 transform duration-300 group"
      >
        <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default NextSectionButton;
