export type Material = {
  slug: string;
  title: string;
  format: "E-book" | "Audio" | "Video" | "Workshop";
  status: "disponivel" | "em-breve";
  description: string;
  focus: string;
  updatedAt: string;
};

export const materials: Material[] = [
  {
    slug: "ebook-praticas-integrativas-01",
    title: "Práticas Integrativas – Volume 01",
    format: "E-book",
    status: "disponivel",
    description: "Versão interativa do material entregue neste projeto, pronta para leitura em navegadores.",
    focus: "Respiração, Aromaterapia, Ondas Binaurais",
    updatedAt: "Nov/2025",
  },
  {
    slug: "trilhas-binaurais-beta",
    title: "Trilhas Binaurais – Beta",
    format: "Audio",
    status: "em-breve",
    description: "Coleção de frequências com instruções de uso para foco, sono e visualização.",
    focus: "Frequência & Vibração",
    updatedAt: "Dez/2025",
  },
  {
    slug: "imersao-efv-showcase",
    title: "Imersão EFV ao vivo",
    format: "Workshop",
    status: "em-breve",
    description: "Agenda de aulas síncronas com exercícios guiados, checklists e roteiros.",
    focus: "Energia, Frequência e Vibração",
    updatedAt: "Jan/2026",
  },
];
