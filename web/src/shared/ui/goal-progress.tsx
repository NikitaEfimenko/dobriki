import * as React from "react";
import { cn } from "../utils";
import { Progress } from "./progress";

interface GoalProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  value: number;
}

export const GoalProgress: React.FC<GoalProgressProps> = ({
  title = "от цели челенджа",
  value,
  className,
  ...rest
}) => {
  return (
    <div className={cn("flex flex-col gap-2", className)} {...rest}>
      <div>{`${value}% ${title}`}</div>
      <Progress value={value} />
    </div>
  );
};
