import { Card } from "@/shared/ui/card";
import { CircleProgress } from "@/shared/ui/circle-progress";
import { cn, nullable } from "@/shared/utils";
import * as React from "react";

type AwardItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  percent: number;
};

export const AwardItem: React.FC<AwardItemProps> = ({
  icon,
  title,
  description,
  percent,
}) => {
  const done = percent >= 100;
  return (
    <div className="flex flex-col gap-2">
      <Card shadow={false} className="p-3 relative bg-items rounded-xl">
        <div className={cn(!done ? "award-hidden" : "")}>{icon}</div>
        {nullable(!done, () => (
          <CircleProgress
            className="absolute bottom-2 right-2"
            percent={percent}
            size="s"
          />
        ))}
      </Card>
      <div className="text-center">
        <div className="font-semibold text-[11px] whitespace-nowrap">
          {title}
        </div>
        <div className="text-[10px] text-secondary leading-[120%]">
          {description}
        </div>
      </div>
    </div>
  );
};
