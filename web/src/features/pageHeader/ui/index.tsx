import { IconBack } from "@/icons/back";
import { useActivityPreview } from "@/shared/providers/activity";
import { Skeleton } from "@/shared/ui/skeleton";
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
  const { activity, color } = useActivityPreview();
  console.log(activity);

  return (
    <div>
      {/* FIXME: вынести эту херню */}
      <div
        className={cn(
          "rounded-b-2xl -mx-4 transition-all duration-500",
          "py-2 flex justify-center",
          activity ? "h-[54px] leading-0" : "h-0 leading-0"
        )}
        style={{ background: color }}
      >
        {nullable(activity, () => (
          <div className="flex flex-col items-center gap-[2px]">
            <div className="flex items-center gap-[6px]">
              <Skeleton className="w-3 h-3 rounded-full" />
              <div className={"font-extrabold transition-all duration-1000"}>
                {activity}
              </div>
            </div>
            <div className="text-xs font-semibold">
              Прошли 892 шагов (1,7 км)
            </div>
          </div>
        ))}
      </div>
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
