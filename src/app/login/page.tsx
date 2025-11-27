import Image from "next/image";
import type { Metadata } from "next";

import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Login | Portal Olíbano",
};

const highlights = [
  "Ebooks autorais com práticas guiadas",
  "Imersões sonoras exclusivas para terapeutas",
  "Materiais impressos e digitais alinhados à marca",
];

export default function LoginPage({
  searchParams,
}: {
  searchParams?: { redirectTo?: string };
}) {
  const redirectTo = typeof searchParams?.redirectTo === "string" ? searchParams.redirectTo : undefined;
  return (
    <div className="min-h-screen grid bg-body-gradient lg:grid-cols-[1.1fr_0.9fr]">
      <div className="brand-panel relative hidden overflow-hidden rounded-r-[4rem] p-16 lg:flex">
        <div className="relative z-10 flex max-w-xl flex-col gap-10">
          <Image src="/brand/logo-olibano.png" alt="Logo Olíbano" width={180} height={64} priority />
          <div className="space-y-4">
            <p className="olibano-label text-white/70">Press Kit Oficial</p>
            <h1 className="text-5xl font-serif leading-tight text-white">Coleção Olíbano</h1>
            <p className="text-white/80 text-lg">
              Conteúdos proprietários, meditações e materiais de suporte liberados somente para facilitadoras e
              terapeutas credenciados.
            </p>
          </div>
          <div className="space-y-3 text-sm">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-white/80">
                <span className="h-2 w-2 rounded-full bg-olibano-gold"></span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center px-6 py-16">
        <div className="olibano-shell w-full max-w-md p-10">
          <p className="olibano-label mb-6 text-olibano-forest/60">Acesso restrito</p>
          <div className="space-y-3">
            <h2 className="text-4xl font-serif text-olibano-forest">Portal Olíbano</h2>
            <p className="text-sm text-olibano-forest/70">
              Use o e-mail credenciado para resgatar o acervo completo de ebooks, trilhas sonoras e materiais
              proprietários do Olíbano.
            </p>
          </div>

          <LoginForm redirectTo={redirectTo} />
          <p className="mt-8 text-xs text-olibano-forest/60">
            Em caso de dúvidas sobre seu acesso, fale com a equipe Olíbano em canais oficiais.
          </p>
        </div>
      </div>
    </div>
  );
}
