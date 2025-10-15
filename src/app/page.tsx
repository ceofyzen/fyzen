// src/app/page.tsx

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      
      {/* Implementação: Trocamos o componente <Image> pela tag <video>. */}
      {/* A estilização (classes do Tailwind) é praticamente a mesma. */}
      <div className="absolute inset-0 z-[-1] brightness-[0.4]">
        
        <video poster="public/hero-background.jpg"
          // Implementação: Atributos essenciais para um vídeo de fundo.
          autoPlay // Inicia o vídeo automaticamente.
          loop     // Faz o vídeo repetir.
          muted    // Remove o som (obrigatório para autoplay na maioria dos navegadores).
          playsInline // Importante para que o vídeo rode no lugar em iPhones.
          className="w-full h-full object-cover"
        >
          {/* Implementação: O 'src' aponta para o arquivo na pasta 'public'. */}
          <source src="/hero-video.mp4" type="video/mp4" />
          Seu navegador não suporta o vídeo.
        </video>
      </div>

      {/* O conteúdo da Hero Section permanece o mesmo */}
      <div className="container mx-auto text-center max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          Construa o Futuro do seu Negócio Digital
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Com a Fyzen, você tem a plataforma completa para lançar, escalar e
          gerenciar seu SaaS. Inovação, performance e segurança em um só lugar.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="/dashboard">Explorar Plataforma</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            <Link href="/docs">Ver Documentação</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}