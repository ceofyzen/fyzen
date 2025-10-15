// src/components/navbar.tsx [VERSÃO COM REDESIGN COMPLETO E DEFINITIVO]

"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Code, Server, AppWindow, ArrowRight } from 'lucide-react';

// --- DEFINIÇÃO DOS DADOS DO MENU ---
const servicos: { title: string; href: string; description: string; icon: React.ElementType }[] = [
  {
    title: "Criação de Sites",
    href: "/servicos/criacao-de-sites",
    description: "Landing pages e e-commerces de alta performance e design.",
    icon: AppWindow
  },
  {
    title: "Hospedagem e Domínios",
    href: "/servicos/hospedagem",
    description: "Soluções completas de hospedagem e registro de domínios.",
    icon: Server
  },
];

// Serviço que ficará em destaque
const servicoDestaque = {
  title: "Desenvolvimento de SaaS",
  href: "/servicos/saas",
  description: "Transformamos sua ideia em um software como serviço escalável, robusto e pronto para o mercado.",
  icon: Code
};

// --- COMPONENTE NAVBAR PRINCIPAL ---
export default function Navbar() {
  const linkStyles = "bg-transparent text-gray-300 hover:text-white/80 rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none";

  return (
    <header className="absolute top-0 z-50 w-full p-4">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          Fyzen
        </Link>
        
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className={linkStyles}>Página Inicial</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={linkStyles}>Serviços</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {/* Implementação: O novo painel de menu com design e estrutura completamente novos */}
                  <section className="w-[600px] lg:w-[750px] grid grid-cols-2 bg-black/30 backdrop-blur-xl shadow-2xl rounded-xl overflow-hidden">
                    {/* Coluna da Esquerda: Destaque Principal */}
                    <div className="p-8 bg-gradient-to-br from-white/10 to-transparent flex flex-col justify-between">
                      <div>
                        <servicoDestaque.icon className="h-8 w-8 text-white mb-4" />
                        <h3 className="text-lg font-bold text-white">{servicoDestaque.title}</h3>
                        <p className="mt-2 text-sm text-gray-300">{servicoDestaque.description}</p>
                      </div>
                      <Link href={servicoDestaque.href} className="mt-6 text-sm font-semibold text-white flex items-center gap-2 group">
                        Saiba Mais <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                    {/* Coluna da Direita: Lista de outros serviços */}
                    <div className="p-6 flex flex-col gap-4">
                      {servicos.map((servico) => (
                        <ListItem key={servico.title} href={servico.href} title={servico.title} icon={servico.icon}>
                          {servico.description}
                        </ListItem>
                      ))}
                    </div>
                  </section>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/portfolio" className={linkStyles}>Portfólio</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/sobre" className={linkStyles}>Sobre</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="hidden md:flex items-center gap-x-4">
          <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white" asChild>
            <Link href="/api/auth/signin">Entrar</Link>
          </Button>
          <Button asChild>
            <Link href="/orcamento">Solicite um Orçamento</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}

// --- COMPONENTE LISTITEM REFINADO ---
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ElementType }
>(({ className, title, children, href, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className="flex items-start gap-4 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 focus:bg-white/5"
          {...props}
        >
          <div className="flex-shrink-0">
            <Icon className="h-6 w-6 text-white/80" />
          </div>
          <div>
            <div className="text-base font-semibold leading-none text-white">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-gray-400 mt-1">
              {children}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";