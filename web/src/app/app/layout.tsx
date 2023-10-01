"use client";

import { useRouter } from "@/shared/hooks";
import { ActivityProvider } from "@/shared/providers/activity";
import { DevicePreview } from "@/shared/ui/device-preview";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useEffect } from "react";
const Navbar = dynamic(
  () => import("@/widgets/navbar").then((module) => module.Navbar),
  {
    ssr: false,
  }
);

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log(status);
    if (status === "unauthenticated") {
      router.form();
    }
  }, [router, status]);

  return (
    <ActivityProvider>
      {children}
      <Navbar />
      <DevicePreview />
    </ActivityProvider>
  );
}
