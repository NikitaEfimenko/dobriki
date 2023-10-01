"use client";

import { useRouter } from "@/shared/hooks";
import { DevicePreview } from "@/shared/ui/device-preview";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.app();
    }
  }, [router, status]);

  return (
    <>
      {children}
      <DevicePreview />
    </>
  );
}
