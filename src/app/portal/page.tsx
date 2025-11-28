import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { getServerComponentClient } from "@/lib/supabase/server";
import { materials, type Material } from "@/data/materials";
import { LogoutButton } from "./LogoutButton";

const statusTokens: Record<Material["status"], { label: string; className: string }> = {
  disponivel: {
    label: "Disponível",
    className: "bg-olibano-forest/10 text-olibano-forest",
  },
  "em-breve": {
    label: "Em breve",
    className: "bg-olibano-gold/20 text-olibano-terracotta",
  },
};

export const metadata: Metadata = {
  title: "Portal | Olíbano",
};

const collectionHighlights = [
  "Sequências de respiração consciente com áudio guiado",
  "Ebooks autorais com trilhas e exercícios complementares",
  "Materiais impressos e digitais alinhados ao padrão cromático",
];

export default async function PortalPage() {
  const supabase = await getServerComponentClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.user) {
    redirect("/login");
  }

  const { user } = session;
  const displayName = (user.user_metadata.full_name as string | undefined) ?? user.email ?? "Parceira Olíbano";
  const lastSignIn = user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString("pt-BR") : null;

  return (
    <div className="min-h-screen px-6 py-12 lg:px-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <Image src="/brand/logo-olibano.png" alt="Logo Olíbano" width={160} height={60} priority />
          <p className="text-xs uppercase tracking-[0.4em] text-olibano-forest/70">Press Kit Exclusivo</p>
        </div>
        <div className="flex flex-col items-start gap-2 text-sm text-olibano-forest/70 lg:items-end">
          <p className="font-semibold text-olibano-forest">{displayName}</p>
          <p>{user.email}</p>
          {lastSignIn && <p className="text-olibano-forest/60">Último acesso: {lastSignIn}</p>}
        </div>
      </div>

      <section className="portal-hero mx-auto mt-10 w-full max-w-5xl p-10">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <p className="olibano-label text-olibano-forest/60">Coleção autenticada</p>
          <h1 className="text-4xl font-serif text-olibano-forest">Experiências completas do Olíbano</h1>
          <p className="text-lg text-olibano-forest/70">
            Acesse meditações originais, apostilas e assets gráficos para fortalecer sua presença como facilitadora da
            marca.
          </p>
          <div className="grid gap-4 lg:grid-cols-3">
            {collectionHighlights.map((item) => (
              <div key={item} className="rounded-2xl border border-olibano-sage/40 bg-white/70 px-4 py-5 text-sm text-olibano-forest/80">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-5xl space-y-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="olibano-label text-olibano-forest/60">Materiais</p>
            <h2 className="text-3xl font-serif text-olibano-forest">Seleção curada para o seu encontro</h2>
          </div>
          <LogoutButton />
        </div>

        <div className="card-grid">
          {materials.map((material) => {
            const badge = statusTokens[material.status];
            const isAvailable = material.status === "disponivel" && Boolean(material.href);
            const linkTarget = isAvailable ? material.href! : "#";
            return (
              <article key={material.slug} className="olibano-shell flex flex-col justify-between p-8">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="pill bg-white/70 text-xs font-semibold text-olibano-forest/80">
                      {material.format}
                    </span>
                    <span className={`pill text-xs font-semibold ${badge.className}`}>{badge.label}</span>
                    <span className="text-xs uppercase tracking-[0.3em] text-olibano-sage">{material.updatedAt}</span>
                  </div>
                  <h2 className="text-3xl font-serif text-olibano-forest">{material.title}</h2>
                  <p className="text-sm text-olibano-forest/70">{material.description}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-olibano-terracotta">{material.focus}</p>
                </div>
                <div className="mt-6 flex items-center justify-between text-sm">
                  <p className="text-olibano-forest/70">
                    {material.status === "disponivel"
                      ? "Liberar acesso imediato após login."
                      : "Status bloqueado até a próxima publicação."}
                  </p>
                  <Link
                    href={linkTarget}
                    aria-disabled={!isAvailable}
                    className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] transition ${
                      isAvailable
                        ? "cursor-pointer border-olibano-forest text-olibano-forest hover:bg-olibano-forest hover:text-white"
                        : "cursor-not-allowed border-olibano-sage/60 text-olibano-sage"
                    }`}
                  >
                    {isAvailable ? "Acessar" : "Bloqueado"}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
