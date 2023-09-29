import { Card } from "@/shared/ui/card";
import { cn, nullable } from "@/shared/utils";
import * as React from "react";

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  top?: string;
  middle?: string;
  end?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  top,
  middle,
  end,
  className,
  ...attrs
}) => {
  return (
    <Card
      className={cn("flex flex-col gap-1 font-extrabold", className)}
      shadow={false}
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
    </Card>
  );
};