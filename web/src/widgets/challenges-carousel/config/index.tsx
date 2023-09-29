"use client";

import { Button } from "@/shared/ui/button";
import { Progress } from "@/shared/ui/progress";
import type { ChallengeItemProps } from "@/entities/challenge/types";
import { nullable } from "@/shared/utils";

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
        <div className="text-items">{preDesc}</div>
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
    renderTrigger: () => (
      <div className="flex flex-col gap-2">
        <div>9% от цели челенджа</div>
        <Progress value={9} />
      </div>
    ),
    renderDescription: () =>
      renderDescription({
        description: "9 238 из 120 000 шагов",
      }),
  },
  {
    title,
    renderTrigger: () => (
      <div className="flex flex-col gap-2">
        <div>100% от цели челенджа</div>
        <Progress value={100} />
      </div>
    ),
    renderDescription: () =>
      renderDescription({
        description: "Челлендж пройден",
      }),
  },
] satisfies Array<ChallengeItemProps>;
