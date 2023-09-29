"use client";

import * as React from "react";

import { ListCard } from "@/entities/listCard";
import { PageHeader } from "@/features/pageHeader";
import { Card } from "@/shared/ui/card";
import { animals, goals } from "@/icons/animals";
import { cn } from "@/shared/utils";
import { CircleProgress } from "@/shared/ui/circle-progress";
import { AwardItem } from "@/features/awardItem";

export default function ProfilePage() {
  const profileSettings = React.useMemo(() => {
    return [{ renderItem: () => <input /> }];
  }, []);

  const awards = React.useMemo(() => {
    return animals.map((icon, index) => {
      return {
        icon,
        ...goals[index],
        renderItem: (props: React.ComponentProps<typeof AwardItem>) => (
          <AwardItem {...props} />
        ),
      };
    });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <Card className="flex flex-col gap-8 rounded-t-none">
        <PageHeader top="Цель 10 000 шагов" middle="9 382 шага" />
      </Card>
      <ListCard
        title="Цель на день"
        items={profileSettings}
        renderItem={({ renderItem }) => renderItem()}
      />
      <ListCard
        title="Награды"
        items={awards}
        renderItems={(items) => (
          <div className="grid grid-cols-3 gap-y-5 gap-x-4">
            {items.map(({ renderItem, ...rest }, index) => (
              <div key={index}>{renderItem(rest)}</div>
            ))}
          </div>
        )}
      />
    </div>
  );
}
