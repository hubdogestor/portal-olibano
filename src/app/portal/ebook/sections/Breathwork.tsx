import { Wind } from 'lucide-react';
import BreathingExercise from '../components/common/BreathingExercise';
import SectionHeading from '../components/common/SectionHeading';
import SectionWrapper from '../components/common/SectionWrapper';

const breathCards = [
  {
    label: 'Respiração 4-6 (Relaxamento)',
    description: 'Inspire por 4 segundos, expire por 6 segundos. Induz o sistema parassimpático (descanso e digestão).',
    badge: '4-6',
    border: 'border-sky-400',
    badgeBg: 'bg-sky-100',
    badgeColor: 'text-sky-600',
  },
  {
    label: 'Box Breathing (Foco)',
    description: 'Inspire 4s → Segure 4s → Expire 4s → Segure 4s. Usada por militares para manter a calma sob pressão.',
    badge: 'BOX',
    border: 'border-indigo-400',
    badgeBg: 'bg-indigo-100',
    badgeColor: 'text-indigo-600',
  },
  {
    label: 'Suspiro Fisiológico (Reset)',
    description: '2 inspirações rápidas pelo nariz + 1 expiração longa pela boca. O botão de "reset" da ansiedade.',
    badge: '2+1',
    border: 'border-rose-400',
    badgeBg: 'bg-rose-100',
    badgeColor: 'text-rose-600',
  },
] as const;

const Breathwork = () => (
  <SectionWrapper>
    <SectionHeading Icon={Wind} title="Breathwork" eyebrow="Prática 02" accentClasses="bg-gradient-to-br from-sky-100 to-sky-200 text-sky-700" />

    <div className="space-y-8">
      <p className="text-olibano-forest/80 leading-relaxed text-lg font-light">
        Técnicas intencionais de respiração para modular energia. É a ferramenta mais rápida para <span className="text-olibano-terracotta font-medium">hackear seu sistema nervoso autônomo</span>.
      </p>

      <BreathingExercise />
    </div>

    <div className="grid gap-5 mt-10">
      {breathCards.map((card) => (
        <div
          key={card.label}
          className={`bg-white p-6 rounded-2xl shadow-md border-l-4 ${card.border} hover:shadow-lg transition-all`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-10 h-10 ${card.badgeBg} rounded-xl flex items-center justify-center`}>
              <span className={`${card.badgeColor} font-bold text-xs`}>{card.badge}</span>
            </div>
            <h4 className="font-serif font-bold text-xl text-olibano-forest">{card.label}</h4>
          </div>
          <p className="text-olibano-forest/60 leading-relaxed">{card.description}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Breathwork;
