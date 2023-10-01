import { IconBack } from "@/icons/back";
import { useActivityPreview } from "@/shared/providers/activity";
import { ActivityDrover } from "@/shared/ui/activity-drover";
import { cn, nullable } from "@/shared/utils";
import * as React from "react";

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  top?: string;
  middle?: string;
  end?: string;
  onClick?: React.MouseEventHandler;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  top,
  middle,
  end,
  className,
  onClick,
  ...attrs
}) => {
  const { activity, color, activitiesValues } = useActivityPreview();

  return (
    <div>
      <ActivityDrover
        color={color}
        activity={activity}
        description={`Прошли ${activitiesValues?.stepCount ?? 0} шагов (${activitiesValues?.distance / 1000} км)`}
      />
      <div className="flex flex-col gap-2">
        <div className="h-8">
          {nullable(onClick, () => (
            <IconBack onClick={onClick} />
          ))}
        </div>
        <div
          className={cn("flex flex-col gap-1 font-extrabold", className)}
          {...attrs}
        >
          {nullable(top, (string) => (
            <div className="text-[26px] leading-[130%]">{string}</div>
          ))}
          {nullable(middle, (string) => (
            <div className="text-[36px] text-accent leading-[130%]">
              {string}
            </div>
          ))}
          {nullable(end, (string) => (
            <div className="text-[20px] font-bold leading-[130%]">{string}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
