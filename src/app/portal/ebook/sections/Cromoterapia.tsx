import { Sparkles, Sun } from 'lucide-react';
import GoldenCard from '../components/common/GoldenCard';
import SectionHeading from '../components/common/SectionHeading';
import SectionWrapper from '../components/common/SectionWrapper';

const colorCombos = [
  {
    title: 'Azul & Verde',
    description: 'Calma, equilíbrio. Use luzes suaves à noite.',
    gradient: 'from-blue-50 to-green-50',
    border: 'border-blue-100',
    swatch: 'from-blue-400 to-green-400',
  },
  {
    title: 'Amarelo & Laranja',
    description: 'Criatividade, vitalidade. Luz natural pela manhã.',
    gradient: 'from-yellow-50 to-orange-50',
    border: 'border-yellow-100',
    swatch: 'from-yellow-400 to-orange-400',
  },
] as const;

const Cromoterapia = () => (
  <SectionWrapper>
    <SectionHeading Icon={Sun} title="Cromoterapia" eyebrow="Prática 05" accentClasses="bg-gradient-to-br from-yellow-100 to-yellow-200 text-yellow-700" />

    <p className="text-olibano-forest/80 mb-10 leading-relaxed text-lg font-light">
      Cores têm poder. A luz fria desperta, a luz quente acolhe. Usamos cores para <span className="text-olibano-terracotta font-medium">ajustar o estado de alerta</span>.
    </p>

    <div className="space-y-5 mb-10">
      {colorCombos.map(({ title, description, gradient, border, swatch }) => (
        <div
          key={title}
          className={`flex items-center p-6 bg-gradient-to-r ${gradient} rounded-2xl border ${border} shadow-sm hover:shadow-md transition-all`}
        >
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${swatch} mr-5 shadow-lg flex-shrink-0`}></div>
          <div>
            <h4 className="font-serif font-bold text-olibano-forest text-xl mb-1">{title}</h4>
            <p className="text-olibano-forest/60">{description}</p>
          </div>
        </div>
      ))}
    </div>

    <GoldenCard>
      <h3 className="font-serif text-2xl text-olibano-forest mb-4 flex items-center gap-3">
        <Sparkles className="text-olibano-gold" size={24} />
        Exercício: Banho de Cor
      </h3>
      <p className="text-olibano-forest/70 leading-relaxed">
        Feche os olhos. Imagine uma cor que representa o que você precisa agora preenchendo seu peito ao inspirar, e relaxando seus ombros ao expirar.
      </p>
    </GoldenCard>
  </SectionWrapper>
);

export default Cromoterapia;
