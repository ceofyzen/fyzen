// src/components/auth-components.tsx
"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function SignInButton() {
  return <button onClick={() => signIn("github")}>Login com GitHub</button>;
}

export function SignOutButton() {
  const { data: session } = useSession();

  if (!session) return null;

  return <button onClick={() => signOut()}>Sair</button>;
}