"use client";

import { useActivity } from "@/entities/feeds/api";
import { ListCard } from "@/entities/listCard";
import { ActivityItem } from "@/features/activityItem";
import { PageHeader } from "@/features/pageHeader";
import { ActivityKeys } from "@/icons";
import {
  activityColors,
  useActivityPreview,
} from "@/shared/providers/activity";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Skeleton } from "@/shared/ui/skeleton";
import { cn } from "@/shared/utils";
import { useCallback, useMemo } from "react";

type Activity = {
  title: string;
  description: string;
  background: string;
  player?: boolean;
  activity?: ActivityKeys;
};

const activitiesMock: Partial<Activity>[] = [
  {
    background: activityColors["Бег"],
    player: true,
    activity: "Бег",
  },
  {
    background: activityColors["Лыжи"],
    player: true,
    activity: "Лыжи",
  },
  {
    background: activityColors["Велосипед"],
    player: true,
    activity: "Велосипед",
  },
  {
    background: activityColors["Ходьба"],
    player: true,
    activity: "Ходьба",
  },
];

const activityMock = {
  title: "Собери добрики",
  description: "Посети 5 парков Москвы и получи 500 добриков",
  background: "hsla(256, 100%, 67%, 1)",
};

export default function ActivityPage() {
  const { data } = useActivity();

  const activities = useMemo(() => {
    return (
      (data?.map(({ id, name, description }, index) => {
        const mock = activitiesMock[index];
        return {
          id,
          title: name || mock.title,
          description: description || mock.description,
          background: mock.background,
          player: mock.player,
          activity: name,
        };
      }) as Activity[]) || Array(4).fill(null)
    );
  }, [data]);

  const {
    activity: selectedActivity,
    color,
    setPreview,
  } = useActivityPreview();

  const onActivityItemSelect = useCallback(
    (activity?: ActivityKeys) => {
      return () => {
        if (selectedActivity === activity) {
          setPreview?.(undefined);
          return;
        }

        if (selectedActivity) {
          return;
        }

        if (!selectedActivity) {
          setPreview?.(activity);
          return;
        }
      };
    },
    [selectedActivity, setPreview]
  );

  return (
    <div className="flex flex-col gap-4">
      <Card className="flex flex-col gap-6 rounded-t-none">
        <PageHeader top="Активности" />
        <div className="text-secondary">
          За разные активности вам начисляется разное количество добриков
        </div>
      </Card>
      <Card
        style={{ background: activityMock.background }}
        className="flex flex-col gap-5 rounded-lg"
      >
        <div className="flex flex-col gap-[2px]">
          <div className=" font-semibold">{activityMock.title}</div>
          <div className="text-white/80">{activityMock.description}</div>
        </div>
        <Button className="w-fit bg-white">Подробнее</Button>
      </Card>
      <ListCard
        items={activities}
        renderItems={(items) => (
          <div className="grid grid-cols-2 gap-4">
            {items.map((item, index) => {
              const { title, description, background, player, activity } =
                item || {};
              const on = selectedActivity === (activity || null);
              return (
                <Card
                  shadow={false}
                  key={index}
                  className={cn(
                    "relative",
                    !on && selectedActivity ? "opacity-40" : ""
                  )}
                  style={{ background }}
                >
                  {title ? (
                    <ActivityItem
                      title={title}
                      description={description}
                      player={player}
                      on={on}
                      activity={activity}
                      onClick={onActivityItemSelect(activity)}
                    />
                  ) : (
                    <Skeleton className="h-[142px] w-[163.5px] rounded-2xl -m-4" />
                  )}
                </Card>
              );
            })}
          </div>
        )}
      />
    </div>
  );
}
