import * as React from "react";
import { IconActivityForeground, IconPlayer } from "@/icons";
import { cn, nullable } from "@/shared/utils";

interface ActivityItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  player?: boolean;
}

export const ActivityItem: React.FC<ActivityItemProps> = ({
  title,
  description,
  player,
  className,
  ...attrs
}) => {
  return (
    <div {...attrs} className={cn("flex flex-col gap-5", className)}>
      {nullable(player, () => (
        <IconPlayer />
      ))}
      <div className="flex flex-col gap-[2px]">
        <div className="font-semibold">{title}</div>
        <div className="text-[13px] text-white/80">{description}</div>
      </div>
      <IconActivityForeground className="absolute top-1 right-[-0.5px] opacity-20" />
    </div>
  );
};
