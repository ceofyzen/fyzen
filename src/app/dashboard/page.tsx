// src/app/dashboard/page.tsx

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  // 1. Obter a sessão no lado do servidor
  const session = await auth();

  // 2. Lógica de proteção
  // Se não houver sessão (usuário não logado), redireciona para a página inicial.
  if (!session?.user) {
    redirect("/");
  }

  // 3. Se o usuário estiver logado, renderiza a página
  return (
    <div>
      <h1>Dashboard Seguro</h1>
      <p>
        Olá, <strong>{session.user.name ?? "Usuário"}</strong>! Seja bem-vindo(a).
      </p>
      <p>Seu e-mail é: {session.user.email}</p>
      
      <hr style={{ margin: "20px 0" }} />

      <h2>Dados completos da sessão:</h2>
      <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>
    </div>
  );
}