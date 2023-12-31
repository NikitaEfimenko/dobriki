"use client";

import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

import { Button } from "@/shared/ui/button";

export function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Status: Logged in as {session?.user?.email} <br />
        <Button onClick={async () => await signOut()}>Log out</Button>
      </>
    );
  }
  return (
    <>
      <Button onClick={async () => await signIn("fusionauth")}>Log in</Button>
    </>
  );
}
