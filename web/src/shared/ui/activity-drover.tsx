import * as React from "react";
import { cn, nullable } from "../utils";
import { Skeleton } from "@nextui-org/react";
import { ActivityKeys } from "@/icons";
import { useRouter } from "../hooks";

interface ActivityDroverProps extends React.HTMLAttributes<HTMLDivElement> {
  activity?: ActivityKeys;
  color?: string;
  description?: string;
}

export const ActivityDrover: React.FC<ActivityDroverProps> = ({
  activity,
  color,
  description,
  ...attrs
}) => {
  const router = useRouter();
  return (
    <div
      onClick={router.activity}
      className={cn(
        "rounded-b-2xl -mx-4 transition-all duration-500",
        "py-2 flex justify-center",
        activity ? "h-[54px] leading-0" : "h-0 leading-0"
      )}
      style={{ background: color }}
      {...attrs}
    >
      {nullable(activity, () => (
        <div className="flex flex-col items-center gap-[2px]">
          <div className="flex items-center gap-[6px]">
            <Skeleton className="w-3 h-3 rounded-full" />
            <div className={"font-extrabold transition-all duration-1000"}>
              {activity}
            </div>
          </div>
          <div className="text-xs font-semibold">{description}</div>
        </div>
      ))}
    </div>
  );
};
