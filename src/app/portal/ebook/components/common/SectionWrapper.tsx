import type { ReactNode } from 'react';

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
};

const SectionWrapper = ({ children, className = '' }: SectionWrapperProps) => (
  <section className={`section-shell ${className}`}>
    {children}
  </section>
);

export default SectionWrapper;
