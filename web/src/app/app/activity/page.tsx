"use client";

import { ListCard } from "@/entities/listCard";
import { ActivityItem } from "@/features/activityItem";
import { PageHeader } from "@/features/pageHeader";
import { ActivityKeys } from "@/icons";
import {
  activityColors,
  useActivityPreview,
} from "@/shared/providers/activity";
import { Card } from "@/shared/ui/card";
import { cn } from "@/shared/utils";

type Activity = {
  title: string;
  description: string;
  background: string;
  player?: boolean;
  activity?: ActivityKeys;
};

const activities: Activity[] = [
  {
    title: "Бег",
    description: "1 добрик = 1 км",
    background: activityColors["run"],
    player: true,
    activity: "run",
  },
  {
    title: "Лыжи",
    description: "2 добрика = 1 км",
    background: activityColors["skis"],
    player: true,
    activity: "skis",
  },
  {
    title: "Велосипед",
    description: "1 добрик = 2 км",
    background: activityColors["bike"],
    player: true,
    activity: "bike",
  },
  {
    title: "Ходьба",
    description: "1 добрик = 100 шагов",
    background: activityColors["step"],
    player: true,
    activity: "step",
  },
  {
    title: "Собери добрики",
    description: "Посети 5 парков Москвы и получи 500 добриков",
    background: "hsla(256, 100%, 67%, 1)",
  },
];

export default function ActivityPage() {
  const {
    activity: selectedActivity,
    color,
    setPreview,
  } = useActivityPreview();

  return (
    <div className="flex flex-col gap-4">
      <Card className="flex flex-col gap-8 rounded-t-none">
        <PageHeader top="Активности" />
        <div className="text-secondary">
          За разные активности вам начисляется разное количество добриков
        </div>
      </Card>
      <ListCard
        items={activities}
        renderItems={(items) => (
          <div className="grid grid-cols-2 gap-4">
            {items.map(
              ({ title, description, background, player, activity }, index) => {
                const on = selectedActivity === (activity || null);
                return (
                  <Card
                    shadow={false}
                    key={index}
                    className={cn(
                      "relative",
                      index === items.length - 1 ? "col-span-2" : "",
                      !on && selectedActivity ? "opacity-40" : ""
                    )}
                    style={{ background }}
                  >
                    <ActivityItem
                      title={title}
                      description={description}
                      player={player}
                      on={on}
                      activity={activity}
                      onClick={() => setPreview?.(activity)}
                    />
                  </Card>
                );
              }
            )}
          </div>
        )}
      />
    </div>
  );
}
