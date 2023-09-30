"use client";
import { ChallengesCarousel } from "@/widgets/challenges-carousel/ui";
import { MotionStats } from "@/widgets/motionstats/ui";
import { TopColleagues } from "@/widgets/topColleagues";

import { Spinner } from "@nextui-org/react";
import dynamic from "next/dynamic";

import { AblyProvider } from "@/shared/ui/ably-provider";
import { Suspense } from "react";

import { Card } from "@/shared/ui/card";
import { HotPanels } from "@/widgets/hot-panels/ui/index";

const TopColleaguesRealtime = dynamic(() => import('@/widgets/topColleagues/ui/realtime').then(module => module.TopColleaguesRealtime), {
  ssr: false,
})

export default function HomePage() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 flex gap-4 flex-col w-full">
        <Card className="flex gap-8 flex-col rounded-t-none">
          <AblyProvider>
            <div className="flex flex-col gap-8">
              <MotionStats />
            </div>
          </AblyProvider>
          <HotPanels/>
        </Card>
        <ChallengesCarousel />
        <TopColleagues />
        <Suspense fallback={<Spinner size="lg" />}>
          <TopColleaguesRealtime />
        </Suspense>
      </div>

    </main>
  );
}
