// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/navbar"; // Implementação: Importando a nova Navbar que vamos criar.

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Você pode atualizar o título e a descrição aqui para refletir sua empresa "Fyzen"
  title: "Fyzen - Construa o Futuro do seu Negócio",
  description: "A plataforma completa para lançar, escalar e gerenciar seu SaaS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Implementação: Adicionando a className="dark" para forçar o tema escuro em todo o site.
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} bg-background text-foreground`}>
        <Providers>
          {/* Implementação: Usando o componente Navbar no topo de todas as páginas. */}
          <Navbar />
          {/* Implementação: O <main> agora só contém o conteúdo da página específica. */}
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}