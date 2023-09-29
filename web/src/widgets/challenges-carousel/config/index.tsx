"use client";

import { Button } from "@/shared/ui/button";
import type { ChallengeItemProps } from "@/entities/challenge/types";
import { nullable } from "@/shared/utils";
import { GoalProgress } from "@/shared/ui/goal-progress";
import { ReactNode } from "react";

const renderDescription = ({
  description,
  preDescription,
}: {
  description: string;
  preDescription?: string;
}) => {
  return (
    <div className="flex items-baseline gap-[6px]">
      <div className="text-base text-accent">{description}</div>
      {nullable(preDescription, (preDesc) => (
        <div className="text-secondary">{preDesc}</div>
      ))}
    </div>
  );
};

const title = "Октябрь 2023";
export const carouselConfig = [
  {
    title,
    renderTrigger: () => (
      <Button className="w-full h-[34px] bg-accent text-black">
        Участвовать
      </Button>
    ),
    renderDescription: () =>
      renderDescription({
        description: "120 000 шагов",
        preDescription: "до 31 октября",
      }),
  },
  {
    title,
    renderTrigger: (value = 9) => <GoalProgress value={value} />,
    renderDescription: () =>
      renderDescription({
        description: "9 238 из 120 000 шагов",
      }),
  },
  {
    title,
    renderTrigger: (value = 100) => <GoalProgress value={value} />,
    renderDescription: () =>
      renderDescription({
        description: "Челлендж пройден",
      }),
  },
] satisfies Array<ChallengeItemProps>;
