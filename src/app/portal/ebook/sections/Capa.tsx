import { ChevronRight, Sparkles } from 'lucide-react';
import GoldenCard from '../components/common/GoldenCard';

type CapaProps = {
  onStartReading?: () => void;
};

const Capa = ({ onStartReading }: CapaProps) => (
  <div className="flex flex-col items-center justify-center min-h-full text-center px-6 py-16 animate-fadeIn relative">
    <div className="absolute top-10 left-10 w-32 h-32 border border-olibano-gold/20 rounded-full"></div>
    <div className="absolute bottom-20 right-10 w-24 h-24 border border-olibano-sage/30 rounded-full"></div>

    <div className="mb-10">
      <img
        src="/images/logo-simbolo.png"
        alt="Olíbano"
        className="w-28 h-28 object-contain drop-shadow-lg"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
          const fallback = event.currentTarget.nextElementSibling as HTMLElement | null;
          if (fallback) {
            fallback.style.display = 'flex';
          }
        }}
      />
      <div className="w-28 h-28 hidden rounded-full border-2 border-olibano-gold bg-gradient-to-br from-olibano-cream to-olibano-sage/30 items-center justify-center">
        <Sparkles className="w-12 h-12 text-olibano-gold" />
      </div>
    </div>

    <div className="relative">
      <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-px bg-olibano-gold"></div>
      <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-px bg-olibano-gold"></div>
      <h1 className="text-5xl md:text-6xl font-serif text-olibano-forest mb-2 tracking-wide leading-tight">ENERGIA,</h1>
      <h1 className="text-5xl md:text-6xl font-serif text-olibano-forest mb-2 tracking-wide leading-tight">FREQUÊNCIA</h1>
      <h1 className="text-5xl md:text-6xl font-serif text-olibano-terracotta tracking-wide leading-tight">& VIBRAÇÃO</h1>
    </div>

    <div className="w-24 h-px bg-gradient-to-r from-transparent via-olibano-gold to-transparent my-8"></div>

    <p className="text-lg text-olibano-forest/70 max-w-lg mx-auto mb-12 font-light leading-relaxed">
      Um guia prático para experimentar <span className="text-olibano-terracotta font-medium">aromaterapia</span>, <span className="text-olibano-terracotta font-medium">breathwork</span>, <span className="text-olibano-terracotta font-medium">meditação</span>, <span className="text-olibano-terracotta font-medium">gemologia</span>, <span className="text-olibano-terracotta font-medium">cromoterapia</span> e <span className="text-olibano-terracotta font-medium">ondas binaurais</span>.
    </p>

    <GoldenCard className="max-w-xl">
      <p className="italic text-olibano-forest/80 font-serif text-lg leading-relaxed">
        &ldquo;Um convite para você sentir na prática como pequenas mudanças energéticas podem transformar bem-estar, foco e equilíbrio — em minutos por dia.&rdquo;
      </p>
    </GoldenCard>

    <button
      type="button"
      onClick={() => onStartReading?.()}
      className="mt-14 px-10 py-4 bg-gradient-to-r from-olibano-forest to-olibano-forest/90 text-olibano-cream rounded-full hover:from-olibano-forest/90 hover:to-olibano-forest transition-all shadow-xl flex items-center gap-3 text-lg font-medium hover:scale-105 transform duration-300"
    >
      Iniciar Leitura <ChevronRight size={22} />
    </button>
  </div>
);

export default Capa;
