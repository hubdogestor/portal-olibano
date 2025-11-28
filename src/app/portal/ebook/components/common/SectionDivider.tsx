type SectionDividerProps = {
  className?: string;
};

const SectionDivider = ({ className = '' }: SectionDividerProps) => (
  <div className={`w-full h-px bg-gradient-to-r from-transparent via-olibano-sage/40 to-transparent my-12 ${className}`}></div>
);

export default SectionDivider;
