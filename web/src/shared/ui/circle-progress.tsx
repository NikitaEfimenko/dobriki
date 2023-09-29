import * as React from "react";
import { cn, nullable } from "../utils";
import { CircularProgress } from "@nextui-org/progress";
import { CheckIcon } from "lucide-react";

interface CircleProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  percent: number;
  size?: "s" | "m";
}

const sizes = {
  s: {
    height: "h-6",
    width: "h-6",
    iconSize: 12,
  },
  m: {
    height: "h-9",
    width: "h-9",
    iconSize: 14,
  },
};

export const CircleProgress: React.FC<CircleProgressProps> = ({
  percent,
  size = "m",
  className,
  ...attrs
}) => {
  const id = React.useId();
  const { height, width, iconSize } = sizes[size];
  return (
    <div className={cn("relative", className, height)} {...attrs}>
      <CircularProgress
        classNames={{
          svg: cn("drop-shadow-md", height, width),
          indicator: "stroke-accent stroke-[2px]",
          track: "stroke-white/10",
          value: "text-3xl font-semibold text-white",
        }}
        value={percent}
        showValueLabel={false}
        label
        id={id}
      />
      {nullable(percent >= 100, () => (
        <CheckIcon
          size={iconSize}
          className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] stroke-accent"
        />
      ))}
    </div>
  );
};
