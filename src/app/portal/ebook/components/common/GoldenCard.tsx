import type { ReactNode } from 'react';

type GoldenCardProps = {
  children: ReactNode;
  className?: string;
};

const GoldenCard = ({ children, className = '' }: GoldenCardProps) => (
  <div className={`relative bg-white rounded-2xl p-6 shadow-lg border border-olibano-gold/20 overflow-hidden ${className}`}>
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-olibano-gold via-olibano-terracotta to-olibano-gold"></div>
    {children}
  </div>
);

export default GoldenCard;
