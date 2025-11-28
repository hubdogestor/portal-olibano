import { Diamond, Gem, Heart, Hexagon, Sparkles, Sun } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import SectionWrapper from '../components/common/SectionWrapper';

const crystals = [
  { name: 'Quartzo Transparente', effect: 'Clareza e Foco', gradient: 'from-gray-200 via-white to-gray-100', iconBg: 'bg-gray-100', Icon: Diamond },
  { name: 'Ametista', effect: 'Calma e Introspecção', gradient: 'from-purple-300 via-purple-200 to-purple-400', iconBg: 'bg-purple-100', Icon: Hexagon },
  { name: 'Quartzo Rosa', effect: 'Autocuidado', gradient: 'from-pink-300 via-pink-200 to-pink-400', iconBg: 'bg-pink-100', Icon: Heart },
  { name: 'Citrino', effect: 'Vitalidade', gradient: 'from-yellow-300 via-yellow-200 to-amber-400', iconBg: 'bg-yellow-100', Icon: Sun },
] as const;

const Gemologia = () => (
  <SectionWrapper>
    <SectionHeading Icon={Gem} title="Gemologia Contemplativa" eyebrow="Prática 04" accentClasses="bg-gradient-to-br from-pink-100 to-pink-200 text-pink-700" />

    <p className="text-olibano-forest/80 mb-10 leading-relaxed text-lg font-light">
      Uso de cristais como <span className="text-olibano-terracotta font-medium">âncoras sensoriais</span>. Segurar uma pedra pode servir como um lembrete físico de uma intenção mental.
    </p>

    <div className="grid grid-cols-2 gap-5 mb-10">
      {crystals.map((crystal) => (
        <div
          key={crystal.name}
          className="bg-white rounded-3xl shadow-md flex flex-col items-center justify-center p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-olibano-sage/10 group"
        >
          <div className={`w-16 h-16 ${crystal.iconBg} rounded-full mb-4 overflow-hidden relative shadow-inner group-hover:scale-110 transition-transform flex items-center justify-center text-olibano-forest/80`}>
            <div className={`absolute inset-0 bg-gradient-to-tr ${crystal.gradient} opacity-90`}></div>
            <div className="absolute inset-0 bg-white/15 rounded-full"></div>
            <crystal.Icon className="relative z-10" size={26} />
          </div>
          <strong className="text-olibano-forest font-serif text-lg">{crystal.name}</strong>
          <span className="text-olibano-forest/50 text-sm mt-2">{crystal.effect}</span>
        </div>
      ))}
    </div>

    <div className="bg-gradient-to-r from-olibano-cream to-olibano-sage/20 p-6 rounded-2xl border border-olibano-sage/30">
      <strong className="text-olibano-forest flex items-center gap-2 mb-2">
        <Sparkles className="text-olibano-gold" size={18} />
        Dica:
      </strong>
      <p className="text-olibano-forest/70 leading-relaxed">
        Mantenha a prática no campo simbólico. Segure o cristal, sinta a textura e nomeie sua intenção (ex: &ldquo;Fé&rdquo;, &ldquo;Foco&rdquo;).
      </p>
    </div>
  </SectionWrapper>
);

export default Gemologia;
