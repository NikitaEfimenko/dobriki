"use client";

import * as React from "react";

import { ListCard } from "@/entities/listCard";
import { PageHeader } from "@/features/pageHeader";
import { Card } from "@/shared/ui/card";
import { animals, goals } from "@/icons/animals";
import { AwardItem } from "@/shared/ui/awardItem";
import { Input } from "@/shared/ui/input";
import { useAchievements } from "@/entities/feeds/api";
import { Achievement } from "@/shared/api/models/achievement";
import { nullable } from "@/shared/utils";
import { Skeleton } from "@/shared/ui/skeleton";

interface Award extends Achievement {
  renderItem: (
    props: React.ComponentProps<typeof AwardItem>
  ) => React.ReactNode;
  icon: React.ReactNode;
  title: string;
  percent: number;
}

const defaultStepsValue = 10_000;

export default function ProfilePage() {
  const { data } = useAchievements();

  const profileSettings = React.useMemo(() => {
    return [
      {
        renderItem: (value?: number) => (
          <Input
            label="Количество шагов"
            type="number"
            min={0}
            value={`${value}`}
          />
        ),
      },
    ];
  }, []);

  const awards: Award[] | undefined = React.useMemo(() => {
    return data?.map((item, index) => {
      return {
        icon: animals[index],
        ...item,
        title: item?.name,
        percent: goals[index].percent,
        renderItem: (props: React.ComponentProps<typeof AwardItem>) => (
          <AwardItem {...props} />
        ),
      };
    });
  }, [data]);

  return (
    <div className="flex flex-col gap-4">
      <Card className="flex flex-col gap-6 rounded-t-none">
        <PageHeader
          top={`Цель ${defaultStepsValue} шагов`}
          middle="9 382 шага"
        />
      </Card>
      <ListCard
        title="Цель на день"
        items={profileSettings}
        renderItem={({ renderItem }) => renderItem(defaultStepsValue)}
      />
      <ListCard
        title="Награды"
        items={awards}
        renderItems={(items) => (
          <div className="grid grid-cols-3 gap-y-5 gap-x-4">
            {data
              ? items.map(({ renderItem, ...rest }, index) => (
                  <div key={index}>{renderItem(rest)}</div>
                ))
              : animals.map((animal) => (
                  <Skeleton
                    key={animal.key}
                    className="w-[100px] h-[100px] rounded-xl"
                  />
                ))}
          </div>
        )}
      />
    </div>
  );
}
