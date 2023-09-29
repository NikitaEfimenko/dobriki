"use client";

import { ListCard } from "@/entities/listCard";
import { ActivityItem } from "@/features/activityItem";
import { PageHeader } from "@/features/pageHeader";
import { IconPlayer } from "@/icons";
import { Card } from "@/shared/ui/card";
import { cn, nullable } from "@/shared/utils";

const activities = [
  {
    title: "Бег",
    description: "1 добрик = 1 км",
    background: "hsla(313, 77%, 56%, 0.46)",
    player: true,
  },
  {
    title: "Лыжи",
    description: "2 добрика = 1 км",
    background: "hsla(223, 100%, 67%, 0.66)",
    player: true,
  },
  {
    title: "Велосипед",
    description: "1 добрик = 2 км",
    background: "hsla(122, 77%, 60%, 0.46)",
    player: true,
  },
  {
    title: "Ходьба",
    description: "1 добрик = 100 шагов",
    background: "hsla(234, 100%, 56%, 0.56)",
    player: true,
  },
  {
    title: "Собери добрики",
    description: "Посети 5 парков Москвы и получи 500 добриков",
    background: "hsla(256, 100%, 67%, 0.56)",
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
          <div className="grid grid-cols-2 gap-y-5 gap-x-4">
            {items.map(({ title, description, background, player }, index) => (
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
                />
              </Card>
            ))}
          </div>
        )}
      />
    </div>
  );
}
