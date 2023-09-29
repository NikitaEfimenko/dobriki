"use client";

import { WeeklyStats } from "@/entities/stats";
import { useWalkActivity } from "@/features/motion/helpers/hooks";
import { PageHeader } from "@/features/pageHeader";

export const MotionStats = () => {
  const { activities } = useWalkActivity();

  return (
    <div className="flex gap-8 flex-col">
      <PageHeader
        top="Вы сделали"
        middle={`${activities.stepCount.toFixed(0)} шагов`}
        end={`и прошли ${(activities.distance / 1000).toFixed(2)} км (${(
          activities.calories / 1000
        ).toFixed(0)} ккал)`}
      />
      <WeeklyStats />
    </div>
  );
};
