import { Calendar, Sparkles } from 'lucide-react';
import GoldenCard from '../components/common/GoldenCard';
import SectionHeading from '../components/common/SectionHeading';
import SectionWrapper from '../components/common/SectionWrapper';

const roteiroSemana = [
  { day: 1, title: 'Acalmar', desc: 'Lavanda + Respiração 4-6 (5 min) + "Banho de Cor" Azul.', color: 'from-blue-400 to-blue-600' },
  { day: 2, title: 'Foco', desc: 'Hortelã-pimenta + Box Breathing + Binaural Alfa.', color: 'from-emerald-400 to-emerald-600' },
  { day: 3, title: 'Sono', desc: 'Luz âmbar à noite + Meditação de respiração + Camomila.', color: 'from-indigo-400 to-indigo-600' },
  { day: 4, title: 'Criatividade', desc: 'Cromoterapia Amarela + Teta + Intenção com Citrino.', color: 'from-yellow-400 to-amber-500' },
  { day: 5, title: 'Presença', desc: 'Varredura corporal + Quartzo Rosa (Autocuidado).', color: 'from-pink-400 to-pink-600' },
  { day: 6, title: 'Reset Emocional', desc: 'Suspiro fisiológico 3x + Lavanda + Journaling (Gratidão).', color: 'from-purple-400 to-purple-600' },
  { day: 7, title: 'Flow', desc: 'Micro-ritual completo + 50 min na tarefa mais importante.', color: 'from-olibano-gold to-olibano-terracotta' },
] as const;

const checklistItens = ['Respirei intencionalmente', 'Ajustei luz/cores', 'Usei aroma ou âncora'];

const Roteiro = () => (
  <SectionWrapper>
    <SectionHeading Icon={Calendar} title="Roteiro de 7 Dias" eyebrow="Plano guiado" accentClasses="bg-gradient-to-br from-olibano-gold/30 to-olibano-terracotta/30 text-olibano-terracotta" />

    <div className="space-y-4">
      {roteiroSemana.map((item) => (
        <div
          key={item.day}
          className="flex bg-white rounded-2xl shadow-md border border-olibano-sage/10 overflow-hidden hover:shadow-lg transition-all group"
        >
          <div className={`bg-gradient-to-br ${item.color} text-white w-20 flex flex-col items-center justify-center py-4 shrink-0`}>
            <span className="text-sm opacity-80">DIA</span>
            <span className="font-bold text-3xl font-serif">{item.day}</span>
          </div>
          <div className="p-5 flex-1">
            <h4 className="font-serif font-bold text-olibano-forest text-lg uppercase tracking-wide group-hover:text-olibano-terracotta transition-colors">
              {item.title}
            </h4>
            <p className="text-olibano-forest/60 mt-1 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <GoldenCard className="mt-12">
      <h3 className="font-serif text-olibano-forest mb-5 text-xl flex items-center gap-3">
        <Sparkles className="text-olibano-gold" size={22} />
        Checklist Diário
      </h3>
      <div className="space-y-4 text-olibano-forest/80">
        {checklistItens.map((item) => (
          <label
            key={item}
            className="flex items-center gap-4 cursor-pointer p-3 rounded-xl hover:bg-olibano-cream/50 transition-colors"
          >
            <input
              type="checkbox"
              className="w-5 h-5 rounded-md border-2 border-olibano-sage text-olibano-forest focus:ring-olibano-gold focus:ring-offset-0"
            />
            <span className="text-lg">{item}</span>
          </label>
        ))}
      </div>
    </GoldenCard>
  </SectionWrapper>
);

export default Roteiro;
