import { AlertTriangle, Sparkles, Vibrate, Waves, Zap } from 'lucide-react';
import SectionDivider from '../components/common/SectionDivider';
import SectionWrapper from '../components/common/SectionWrapper';

const efvItems = [
  {
    Icon: Zap,
    title: 'Energia',
    description: 'Capacidade de produzir mudança — no corpo, mente e ambiente.',
    gradient: 'from-olibano-gold to-olibano-terracotta',
  },
  {
    Icon: Waves,
    title: 'Frequência',
    description: 'Quão rápido algo vibra ou oscila. Ex: ritmos cardíacos.',
    gradient: 'from-olibano-sage to-olibano-forest',
  },
  {
    Icon: Vibrate,
    title: 'Vibração',
    description: 'Movimento oscilatório em nós e ao nosso redor.',
    gradient: 'from-olibano-terracotta to-olibano-gold',
  },
] as const;

const Intro = () => (
  <SectionWrapper>
    <div className="bg-gradient-to-r from-olibano-terracotta/10 to-olibano-gold/10 border-l-4 border-olibano-terracotta p-6 mb-12 rounded-r-2xl">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-olibano-terracotta/20 rounded-full">
          <AlertTriangle className="text-olibano-terracotta shrink-0" size={24} />
        </div>
        <div>
          <h3 className="font-bold text-olibano-forest text-lg">Aviso de Segurança</h3>
          <p className="text-olibano-forest/70 mt-2 leading-relaxed">
            Este material é educativo. Em caso de condições de saúde específicas, procure orientação profissional. Use o princípio &ldquo;Menos é Mais&rdquo;.
          </p>
        </div>
      </div>
    </div>

    <div className="flex items-center gap-4 mb-8">
      <div className="w-12 h-px bg-olibano-gold"></div>
      <h2 className="text-4xl font-serif text-olibano-forest">Boas-vindas</h2>
    </div>

    <p className="text-olibano-forest/80 leading-relaxed mb-10 text-lg font-light">
      Este e-book foi pensado para quem está começando — de forma leve, acolhedora e prática. Você vai conquistar o entendimento essencial sobre seis práticas holísticas e experimentar exercícios simples de <span className="text-olibano-terracotta font-semibold">3 a 10 minutos</span>.
    </p>

    <SectionDivider />

    <div className="flex items-center gap-4 mb-8">
      <div className="w-12 h-px bg-olibano-gold"></div>
      <h2 className="text-4xl font-serif text-olibano-forest">A Linguagem Comum (EFV)</h2>
    </div>

    <div className="grid md:grid-cols-3 gap-6 mb-10">
      {efvItems.map(({ Icon, title, description, gradient }) => (
        <div
          key={title}
          className="group bg-white p-8 rounded-3xl shadow-md border border-olibano-sage/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform text-white`}>
            <Icon size={26} />
          </div>
          <div className="text-olibano-forest mb-3 font-serif font-bold text-2xl">{title}</div>
          <p className="text-olibano-forest/60 leading-relaxed">{description}</p>
        </div>
      ))}
    </div>

    <div className="bg-gradient-to-br from-olibano-sage/20 to-olibano-cream p-8 rounded-3xl border border-olibano-sage/30">
      <h4 className="font-serif font-bold text-olibano-forest mb-4 text-xl flex items-center gap-3">
        <Sparkles className="text-olibano-gold" size={24} />
        Como tudo se conecta?
      </h4>
      <p className="text-olibano-forest/70 leading-relaxed">
        Aromas alcançam o sistema límbico em segundos. O Breathwork ajusta ritmos internos. A Meditação modula ondas cerebrais. Tudo é uma orquestração de frequências para o seu bem-estar.
      </p>
    </div>
  </SectionWrapper>
);

export default Intro;
