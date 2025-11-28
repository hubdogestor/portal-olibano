import { Brain, Sparkles } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import SectionWrapper from '../components/common/SectionWrapper';

const Meditacao = () => (
  <SectionWrapper>
    <SectionHeading Icon={Brain} title="Meditação" eyebrow="Prática 03" accentClasses="bg-gradient-to-br from-teal-100 to-teal-200 text-teal-700" />

    <p className="text-olibano-forest/80 mb-10 leading-relaxed text-lg font-light">
      Treino de atenção e consciência. Não é sobre &ldquo;esvaziar a mente&rdquo;, mas <span className="text-olibano-terracotta font-medium">observar os pensamentos sem embarcar neles</span>.
    </p>

    <div className="bg-gradient-to-br from-teal-50 via-emerald-50 to-olibano-cream p-10 rounded-3xl mb-10 border border-teal-100 shadow-lg">
      <h3 className="font-serif text-3xl text-olibano-forest mb-8 text-center flex items-center justify-center gap-3">
        <Sparkles className="text-olibano-gold" size={28} />
        Exercício: Palavra-Guia
      </h3>
      <div className="space-y-5 max-w-md mx-auto">
        <p className="text-olibano-forest/70 text-center mb-6">Sente-se confortavelmente.</p>
        <div className="flex justify-between items-center bg-white/80 p-5 rounded-2xl shadow-sm border border-teal-100">
          <span className="text-sm font-bold text-teal-600 uppercase tracking-wider">Inspire</span>
          <span className="text-2xl font-serif text-olibano-forest">&ldquo;Recebo&rdquo;</span>
        </div>
        <div className="flex justify-between items-center bg-white/80 p-5 rounded-2xl shadow-sm border border-teal-100">
          <span className="text-sm font-bold text-teal-600 uppercase tracking-wider">Expire</span>
          <span className="text-2xl font-serif text-olibano-forest">&ldquo;Solto&rdquo;</span>
        </div>
        <p className="text-sm text-olibano-forest/60 italic mt-6 text-center">
          Quando a mente vagar, gentilmente reconheça e volte para as palavras.
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default Meditacao;
