"use client";
import dynamic from "next/dynamic";
import { LoginButton } from "@/features/loginButton";
import { MotionStats } from "@/widgets/motionstats/ui";

import { ChallengesCarousel } from "@/widgets/challenges-carousel/ui";
import { TopColleagues } from "@/widgets/topColleagues";

const Routemap = dynamic(() =>
  import("@/widgets/routemap").then((c) => ({ default: c.Routemap }))
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 flex gap-4 flex-col w-full">
        <MotionStats />
        <ChallengesCarousel />
        <TopColleagues />
      </div>

      <div className="relative flex-col place-items-center">
        <LoginButton />
        <Routemap />
      </div>
    </main>
  );
}
