"use client";

import { ListCard } from "@/entities/listCard";
import { ActivityItem } from "@/features/activityItem";
import { PageHeader } from "@/features/pageHeader";
import { ActivityKeys, IconPlayer } from "@/icons";
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
    background: "hsla(339, 76%, 59%, 1)",
    player: true,
    activity: "run",
  },
  {
    title: "Лыжи",
    description: "2 добрика = 1 км",
    background: "hsla(207, 91%, 64%, 1)",
    player: true,
    activity: "skis",
  },
  {
    title: "Велосипед",
    description: "1 добрик = 2 км",
    background: "hsla(131, 50%, 50%, 1)",
    player: true,
    activity: "bike",
  },
  {
    title: "Ходьба",
    description: "1 добрик = 100 шагов",
    background: "hsla(42, 96%, 50%, 1)",
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
              ({ title, description, background, player, activity }, index) => (
                <Card
                  shadow={false}
                  key={index}
                  className={cn(
                    "relative",
                    index === items.length - 1 ? "col-span-2" : ""
                  )}
                  style={{ background }}
                >
                  <ActivityItem
                    title={title}
                    description={description}
                    player={player}
                    activity={activity}
                  />
                </Card>
              )
            )}
          </div>
        )}
      />
    </div>
  );
}
