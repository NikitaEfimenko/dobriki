"use client";

import { DevicePreview } from "@/shared/ui/device-preview";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <DevicePreview />
    </>
  );
}
