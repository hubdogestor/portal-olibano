import Link from "next/link";
import type { Metadata } from "next";

import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Login | Portal Olíbano",
};

const roadmap = [
  "Verificação de credenciais via Supabase",
  "Single Sign-On para parceiros",
  "Perfis com acesso segmentado a materiais",
];

export default function LoginPage({
  searchParams,
}: {
  searchParams?: { redirectTo?: string };
}) {
  const redirectTo = typeof searchParams?.redirectTo === "string" ? searchParams.redirectTo : undefined;
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
              Informe as credenciais liberadas no Supabase Authentication. Esta ação salva o cookie de sessão e
              direciona para a área segura automaticamente.
            </p>
          </div>

          <LoginForm redirectTo={redirectTo} />

          <div className="mt-8 space-y-3 text-sm text-olibano-forest/70">
            <p>
              Dica: após o login a sessão já direciona automaticamente para <code className="rounded bg-olibano-cream/70 px-2 py-1">/portal</code>.
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
