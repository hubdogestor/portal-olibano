import Image from 'next/image';
import { Facebook, Heart, Instagram, MessageCircle, ShoppingBag } from 'lucide-react';
import SectionWrapper from '../components/common/SectionWrapper';

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/olibanovip', Icon: Instagram },
  { label: 'Facebook', href: 'https://www.facebook.com/olibano.vip', Icon: Facebook },
  { label: 'WhatsApp', href: 'http://wa.me/5551993622621', Icon: MessageCircle },
  { label: 'Loja Virtual', href: 'https://www.loja.olibanovip.com.br/', Icon: ShoppingBag },
] as const;

const Autora = () => (
  <SectionWrapper>
    <div className="bg-white rounded-3xl shadow-2xl border border-olibano-sage/10 overflow-hidden">
      <div className="bg-gradient-to-r from-olibano-forest via-olibano-forest/95 to-olibano-forest h-40 relative">
        <div className="absolute inset-0 opacity-20">
          {[10, 40, 70].map((left) => (
            <div
              key={left}
              className="absolute w-32 h-32 border border-olibano-gold/30 rounded-full"
              style={{ left: `${left}%`, top: '20%' }}
            ></div>
          ))}
        </div>
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="w-36 h-36 rounded-full border-4 border-white bg-olibano-cream flex items-center justify-center overflow-hidden shadow-xl">
            <Image src="/images/foto-betusa2.jpg" alt="Dra. Betusa" width={288} height={288} className="w-full h-full object-cover" priority />
          </div>
        </div>
      </div>
      <div className="pt-24 pb-10 px-8 text-center">
        <div className="inline-flex items-center justify-center gap-3 mb-4 text-olibano-terracotta uppercase tracking-widest text-xs font-semibold">
          <Heart size={16} />
          Quem conduz
        </div>
        <h2 className="text-3xl font-serif text-olibano-forest font-bold">Dra. Betusa</h2>
        <p className="text-olibano-terracotta text-sm uppercase tracking-widest mt-2 font-medium">Médica & Cofundadora Olíbano</p>

        <div className="w-16 h-px bg-gradient-to-r from-transparent via-olibano-gold to-transparent mx-auto my-6"></div>

        <p className="text-olibano-forest/70 mt-6 leading-relaxed">
          Médica com 25 anos de atuação em emergência pediátrica e referência em gestão médica no RS. Integra saberes tradicionais e ciência contemporânea para criar experiências práticas, seguras e transformadoras.
        </p>

        <div className="mt-10 space-y-4">
          <div className="p-6 bg-gradient-to-br from-olibano-cream to-olibano-sage/20 rounded-2xl border border-olibano-sage/30">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Image
                src="/images/logo-simbolo.png"
                alt="Olíbano"
                width={64}
                height={64}
                className="w-8 h-8 object-contain"
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />
              <h3 className="font-serif font-bold text-olibano-forest text-xl text-center">
                Olíbano - Práticas Integrativas Complementares em Saúde
              </h3>
            </div>
            <p className="text-olibano-forest/60 text-sm mb-5">📍 Rua Gomes Jardim, 201 - Salas 1016 e 1017 - MedPlex Santana - Torre</p>
            <a
              href="https://olibano.agende.ai/"
              target="_blank"
              rel="noreferrer"
              className="block w-full py-4 bg-gradient-to-r from-olibano-forest to-olibano-forest/90 text-olibano-cream rounded-xl font-bold hover:from-olibano-forest/90 hover:to-olibano-forest transition-all shadow-lg hover:shadow-xl"
            >
              Agendar Experiência
            </a>
          </div>
          <div className="text-sm text-olibano-forest/60 space-y-2">
            <p className="font-medium">www.olibanovip.com.br</p>
            <div className="grid gap-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-2 rounded-full border border-olibano-sage/30 hover:border-olibano-terracotta/60 hover:text-olibano-terracotta transition-colors"
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default Autora;
