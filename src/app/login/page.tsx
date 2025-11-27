import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Portal Olíbano",
};

const roadmap = [
  "Verificação de credenciais via Auth0 / Clerk",
  "Single Sign-On para parceiros",
  "Perfis com acesso segmentado a materiais",
];

export default function LoginPage() {
  return (
    <div className="min-h-screen grid bg-body-gradient lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative hidden overflow-hidden rounded-r-[4rem] bg-gradient-to-br from-olibano-forest via-olibano-ink to-olibano-terracotta/80 p-16 text-white lg:flex">
        <div className="max-w-xl space-y-6">
          <p className="olibano-label text-white/60">Bem-vinda(o)</p>
          <h1 className="text-5xl font-serif leading-tight">Olíbano - Práticas Integrativas Complementares</h1>
          <p className="text-white/80 text-lg">
            Esta área reúne ebooks, exercícios guiados e materiais exclusivos liberados somente após autenticação.
            Use este layout como base para integrar seu provedor de identidade preferido.
          </p>
          <div className="space-y-3 text-sm">
            {roadmap.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-white/80"
              >
                <span className="h-2 w-2 rounded-full bg-olibano-gold"></span>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -left-20 top-16 h-72 w-72 rounded-full border border-white/30"></div>
          <div className="absolute right-12 bottom-10 h-48 w-48 rounded-full border border-white/20"></div>
          <div className="absolute right-1/3 top-1/4 h-24 w-24 rounded-full border border-white/20"></div>
        </div>
      </div>

      <div className="flex items-center justify-center px-6 py-16">
        <div className="olibano-shell w-full max-w-md p-10">
          <p className="olibano-label mb-6 text-olibano-forest/60">Acesso restrito</p>
          <div className="space-y-3">
            <h2 className="text-4xl font-serif text-olibano-forest">Portal Olíbano</h2>
            <p className="text-sm text-olibano-forest/70">
              Configure seu provedor de autenticação e troque este formulário pelo widget/SDK oficial.
              O botão abaixo permanece desabilitado até que as credenciais reais estejam prontas.
            </p>
          </div>

          <form className="mt-8 space-y-4" aria-label="Formulário de login placeholder">
            <label className="block text-sm font-semibold text-olibano-forest/80">
              Usuário ou e-mail
              <input
                type="email"
                placeholder="voce@olibano.com"
                className="mt-2 w-full rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm text-olibano-forest focus:border-olibano-terracotta focus:outline-none focus:ring-2 focus:ring-olibano-terracotta/40"
              />
            </label>
            <label className="block text-sm font-semibold text-olibano-forest/80">
              Senha
              <input
                type="password"
                placeholder="********"
                className="mt-2 w-full rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm text-olibano-forest focus:border-olibano-terracotta focus:outline-none focus:ring-2 focus:ring-olibano-terracotta/40"
              />
            </label>
            <button
              type="button"
              disabled
              className="w-full rounded-2xl bg-gradient-to-r from-olibano-gold to-olibano-terracotta py-3 font-semibold uppercase tracking-[0.4em] text-olibano-forest/90 opacity-80"
            >
              Autenticar (aguardando provider)
            </button>
          </form>

          <div className="mt-8 space-y-3 text-sm text-olibano-forest/70">
            <p>
              Dica: após conectar o provider, direcione o usuário autenticado para <code className="rounded bg-olibano-cream/70 px-2 py-1">/portal</code>.
            </p>
            <p>
              Precisa visualizar o layout final?
              <Link href="/portal" className="ml-1 font-semibold text-olibano-terracotta underline-offset-4 hover:underline">
                Acesse a amostra do portal
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
