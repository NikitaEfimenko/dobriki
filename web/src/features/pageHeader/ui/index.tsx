import { IconBack } from "@/icons/back";
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
  return (
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
          <div className="text-[28px] leading-[130%]">{string}</div>
        ))}
        {nullable(middle, (string) => (
          <div className="text-[38px] text-accent leading-[130%]">{string}</div>
        ))}
        {nullable(end, (string) => (
          <div className="text-[20px] font-bold leading-[130%]">{string}</div>
        ))}
      </div>
    </div>
  );
};
