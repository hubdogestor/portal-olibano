type ActiveSectionBadgeProps = {
  currentIndex: number;
  total: number;
  label?: string;
};

const ActiveSectionBadge = ({ currentIndex, total, label }: ActiveSectionBadgeProps) => (
  <div className="section-progress-pill">
    <span className="section-progress-pill__index">
      {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
    </span>
    <span className="section-progress-pill__label">{label}</span>
  </div>
);

export default ActiveSectionBadge;
