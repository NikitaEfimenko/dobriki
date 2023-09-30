"use client";

import { ActivityProvider } from "@/shared/providers/activity";
import { Navbar } from "@/widgets/navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ActivityProvider>
      {children}
      <Navbar />
    </ActivityProvider>
  );
}
