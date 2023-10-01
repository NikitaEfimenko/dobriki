"use client";

import { WeeklyStats } from "@/entities/stats";
import { useActivity } from "@/features/motion/helpers/hooks";
import { ActivityTypes } from "@/features/motion/types";
import { PageHeader } from "@/features/pageHeader";
import { useMemo } from "react";

export const MotionStats = () => {
  const { activities } = useActivity({
    activity: ActivityTypes.Walking
  });

  const activityProps = useMemo(() => {
    const defaultConfig = {
      top: "Вы сделали",
      middle: `${activities.stepCount.toFixed(0)} шагов`,
      end: `и прошли ${(activities.distance / 1000).toFixed(2)} км (${(
        activities.calories / 1000
      ).toFixed(0)} ккал)`,
    };
    switch (activities.type) {
      case ActivityTypes.Bicycle:
        return defaultConfig;
      case ActivityTypes.Rest:
        return defaultConfig;
      case ActivityTypes.Running:
        return defaultConfig;
      case ActivityTypes.Seek:
        return {
          ...defaultConfig,
          top: "Вы нашли",
          middle: `${activities.stepCount.toFixed(0)} `,
        };
      case ActivityTypes.Ski:
        return {
          ...defaultConfig,
        };
      case ActivityTypes.Walking:
        return defaultConfig;
      default:
        return defaultConfig;
    }
  }, [activities]);

  return (
    <>
      <PageHeader {...activityProps} />
      <WeeklyStats />
    </>
  );
};
