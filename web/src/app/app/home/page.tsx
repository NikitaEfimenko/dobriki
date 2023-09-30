"use client";
import { LoginButton } from "@/features/loginButton";
import { ChallengesCarousel } from "@/widgets/challenges-carousel/ui";
import { MotionStats } from "@/widgets/motionstats/ui";
import { TopColleagues } from "@/widgets/topColleagues";

import { CircularProgress, Spinner } from "@nextui-org/react";
import dynamic from "next/dynamic";

import { Suspense, useEffect } from "react";
import { AblyProvider } from "@/shared/ui/ably-provider";



const Routemap = dynamic(() =>
  import("@/widgets/routemap").then((c) => ({ default: c.Routemap }))
);
const TopColleaguesRealtime = dynamic(() => import('@/widgets/topColleagues/ui/realtime').then(module => module.TopColleaguesRealtime), {
  ssr: false,
})



export default function HomePage() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 flex gap-4 flex-col w-full">
        <AblyProvider>
          <MotionStats />
        </AblyProvider>
        <ChallengesCarousel />
        <TopColleagues />
        <Suspense fallback={<Spinner  size="lg"/>}>
          <TopColleaguesRealtime/>
        </Suspense>
      </div>

    </main>
  );
}
