import { Citrus, Droplets, Flower2, Leaf, Sparkles, Sprout } from 'lucide-react';
import GoldenCard from '../components/common/GoldenCard';
import SectionHeading from '../components/common/SectionHeading';
import SectionWrapper from '../components/common/SectionWrapper';

const essentialOils = [
  { name: 'Lavanda', effect: 'Redução de estresse e ansiedade', gradient: 'from-purple-400 to-purple-600', bg: 'bg-purple-50', border: 'border-purple-200', Icon: Flower2 },
  { name: 'Laranja-doce', effect: 'Calma e bem-estar', gradient: 'from-orange-400 to-orange-600', bg: 'bg-orange-50', border: 'border-orange-200', Icon: Citrus },
  { name: 'Hortelã-pimenta', effect: 'Clareza mental e foco', gradient: 'from-emerald-400 to-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', Icon: Leaf },
  { name: 'Alecrim', effect: 'Concentração', gradient: 'from-green-400 to-green-600', bg: 'bg-green-50', border: 'border-green-200', Icon: Sprout },
] as const;

const Aromaterapia = () => (
  <SectionWrapper>
    <SectionHeading Icon={Droplets} title="Aromaterapia" eyebrow="Prática 01" accentClasses="bg-gradient-to-br from-purple-100 to-purple-200 text-purple-700" />

    <p className="text-olibano-forest/80 mb-10 leading-relaxed text-lg font-light">
      Uso de óleos essenciais 100% puros para promover bem-estar. Não são apenas &ldquo;cheirinhos&rdquo;, são <span className="text-olibano-terracotta font-medium">moléculas químicas complexas</span> que interagem com nosso sistema límbico.
    </p>

    <div className="grid md:grid-cols-2 gap-5 mb-12">
      {essentialOils.map((oil) => (
        <div
          key={oil.name}
          className={`${oil.bg} ${oil.border} border p-6 rounded-2xl flex items-start gap-4 hover:shadow-lg transition-all duration-300 group`}
        >
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${oil.gradient} shadow-lg group-hover:scale-110 transition-transform flex-shrink-0 text-white flex items-center justify-center`}>
            <oil.Icon size={22} />
          </div>
          <div>
            <span className="font-serif font-bold text-olibano-forest text-xl block mb-1">{oil.name}</span>
            <span className="text-olibano-forest/60">{oil.effect}</span>
          </div>
        </div>
      ))}
    </div>

    <GoldenCard>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-serif text-2xl text-olibano-forest flex items-center gap-3">
          <Sparkles className="text-olibano-gold" size={24} />
          Exercício: Âncora Aromática
        </h3>
        <span className="bg-olibano-gold/20 text-olibano-forest text-sm px-4 py-2 rounded-full font-bold">3 min</span>
      </div>
      <ol className="list-none space-y-4 text-olibano-forest/80">
        {[
          'Escolha um óleo essencial (ex: Lavanda ou Hortelã).',
          'Pingue 1 gota em algodão.',
          'Inspire gentilmente a 20 cm do nariz por 3 ciclos (4s inspirar, 6s expirar).',
          'Nomeie em voz baixa o estado desejado (ex: &ldquo;calma&rdquo;).',
        ].map((step, index) => (
          <li key={step} className="flex items-start gap-4">
            <span className="w-8 h-8 bg-gradient-to-br from-olibano-gold to-olibano-terracotta rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              {index + 1}
            </span>
            <span className="pt-1">{step}</span>
          </li>
        ))}
      </ol>
    </GoldenCard>
  </SectionWrapper>
);

export default Aromaterapia;
