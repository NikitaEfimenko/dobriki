import * as React from "react";
import { cn } from "../utils";
import { Skeleton } from "./skeleton";

interface OnlineBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  online?: boolean;
}

export const OnlineBadge: React.FC<OnlineBadgeProps> = ({
  online,
  className,
  ...attrs
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-[6px] bg-white/[0.16] py-1 px-3 rounded-2xl text-xs",
        className
      )}
      {...attrs}
    >
      <Skeleton className="w-[6px] h-[6px] rounded-full overflow-hidden" />
      <div>Активен</div>
    </div>
  );
};
