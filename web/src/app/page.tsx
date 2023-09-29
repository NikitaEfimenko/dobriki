import Image from "next/image";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { LogInIcon } from "lucide-react";
import { LoginButton } from "@/features/loginButton";
import { MotionStats } from "@/widgets/motionstats/ui";

import { ChallengesCarousel } from "@/widgets/challenges-carousel/ui";

const Routemap = dynamic(() =>
  import("@/widgets/routemap").then((c) => ({ default: c.Routemap }))
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 flex gap-16 flex-col w-full items-center justify-between text-sm lg:flex">
        <MotionStats />
        <ChallengesCarousel />
      </div>

      <div className="relative flex-col place-items-center">
        <LoginButton />
        <Routemap />
      </div>
    </main>
  );
}
