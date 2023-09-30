"use client";

import * as React from "react";
import { cn, nullable } from "../utils";
import { Avatar } from "@nextui-org/react";
import { Skeleton } from "./skeleton";
import { CheckIcon } from "lucide-react";

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  selected?: boolean;
  src?: string;

  renderTitle?: (selected?: boolean) => React.ReactNode;
  renderDescription?: () => React.ReactNode;
  renderStatus?: () => React.ReactNode;
  renderImage?: ({
    selected,
    src,
  }: {
    selected?: boolean;
    src?: string;
  }) => React.ReactNode;
}

const selectedColor =
  "linear-gradient(0deg, rgba(41, 215, 13, 0.16) 0%, rgba(41, 215, 13, 0.16) 100%), #414141";

export const ListItem: React.FC<ListItemProps> = ({
  title,
  description,
  selected,
  className,
  src,
  renderTitle,
  renderDescription,
  renderStatus,
  renderImage = ({ selected, src }: { selected?: boolean; src?: string }) => {
    const background = selected ? selectedColor : "";
    return (
      <Avatar
        showFallback
        src={src}
        fallback={
          <Skeleton
            className={cn("w-10 h-10 rounded-e-full overflow-hidden")}
            style={{ background }}
          />
        }
      />
    );
  },
  ...attrs
}) => {
  return (
    <div className={cn("flex gap-3", className)} {...attrs}>
      <div className="relative">
        {renderImage({ selected, src })}
        {nullable(selected, () => (
          <CheckIcon
            size={14}
            className="absolute z-[99] translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] stroke-accent"
          />
        ))}
      </div>
      <div className={"flex flex-col"}>
        <div className={cn(selected ? "text-accent" : "")}>
          {renderTitle ? renderTitle(selected) : title}
        </div>
        <div className="text-secondary text-xs">
          {renderDescription ? renderDescription() : description}
        </div>
        <div className="text-secondary text-xs">
          {renderStatus ? renderStatus() : null}
        </div>
      </div>
    </div>
  );
};
