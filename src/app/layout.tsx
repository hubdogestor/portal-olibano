import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Portal Olíbano",
  description:
    "Área logada para liberar ebooks, aulas e materiais de Olíbano - Práticas Integrativas Complementares em Saúde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${lato.variable} ${cormorant.variable} antialiased bg-body-gradient text-olibano-forest`}
      >
        {children}
      </body>
    </html>
  );
}
