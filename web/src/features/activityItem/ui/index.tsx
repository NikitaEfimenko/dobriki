import * as React from "react";
import { ActivityKeys, IconActivity, IconPause, IconPlayer } from "@/icons";
import { cn, nullable } from "@/shared/utils";

interface ActivityItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  player?: boolean;
  activity?: ActivityKeys;
  on?: boolean;
}

export const ActivityItem: React.FC<ActivityItemProps> = ({
  title,
  description,
  on,
  player,
  activity,
  className,
  ...attrs
}) => {
  return (
    <div {...attrs} className={cn("flex flex-col gap-5", className)}>
      {nullable(player, () => (on ? <IconPause /> : <IconPlayer />))}
      <div className="flex flex-col gap-[2px]">
        <div className="font-semibold">{title}</div>
        <div className="text-[13px] text-white/80">{description}</div>
      </div>
      {nullable(activity, (act) => (
        <IconActivity
          activity={act}
          className="absolute top-2 right-2 opacity-80"
        />
      ))}
    </div>
  );
};
