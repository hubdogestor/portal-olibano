import type { Metadata } from "next";
import Link from "next/link";
import { materials, type Material } from "@/data/materials";

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

export default function PortalPage() {
  return (
    <div className="min-h-screen px-6 py-16 lg:px-16">
      <header className="mx-auto flex w-full max-w-5xl flex-col gap-4 text-center">
        <p className="olibano-label text-olibano-forest/50">Área autenticada</p>
        <h1 className="text-5xl font-serif text-olibano-forest">Bem-vinda(o) ao Portal Olíbano</h1>
        <p className="text-lg text-olibano-forest/70">
          Esta rota será protegida por middleware assim que o provedor de identidade estiver configurado.
          Até lá, use este layout para validar conteúdos, cards e copy.
        </p>
      </header>

      <section className="mx-auto mt-16 w-full max-w-5xl space-y-6">
        <div className="rounded-3xl border border-olibano-sage/40 bg-white/80 p-6 text-sm text-olibano-forest/70 shadow-lg">
          <strong className="text-olibano-forest">Checklist Técnico</strong>
          <ol className="mt-3 list-decimal space-y-1 pl-4">
            <li>Configurar provider (Auth0/Clerk/Supabase) e salvar segredos em <code>.env.local</code>.</li>
            <li>Criar middleware que verifica o cookie de sessão e redireciona usuários não autenticados para <code>/login</code>.</li>
            <li>Usar as variáveis expostas via <code>process.env</code> para buscar materiais via API ou CMS.</li>
          </ol>
        </div>

        <div className="card-grid">
          {materials.map((material) => {
            const badge = statusTokens[material.status];
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
                    href={material.status === "disponivel" ? `/materiais/${material.slug}` : "#"}
                    aria-disabled={material.status !== "disponivel"}
                    className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] transition ${
                      material.status === "disponivel"
                        ? "cursor-pointer border-olibano-forest text-olibano-forest hover:bg-olibano-forest hover:text-white"
                        : "cursor-not-allowed border-olibano-sage/60 text-olibano-sage"
                    }`}
                  >
                    {material.status === "disponivel" ? "Acessar" : "Bloqueado"}
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
