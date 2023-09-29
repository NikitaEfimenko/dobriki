"use client";

import * as React from "react";
import { cn } from "../utils";
import { Avatar } from "@nextui-org/react";
import { Skeleton } from "./skeleton";

interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  selected?: boolean;

  renderTitle?: () => React.ReactNode;
  renderDescription?: () => React.ReactNode;
  renderImage?: (selected?: boolean) => React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({
  title,
  description,
  selected,
  className,
  renderTitle,
  renderDescription,
  renderImage = (selected?: boolean) => (
    <Avatar
      showFallback
      fallback={
        <Skeleton
          className={cn(
            "w-10 h-10 rounded-e-full",
            selected ? "bg-green-500" : ""
          )}
        />
      }
    />
  ),
  ...attrs
}) => {
  return (
    <div className={cn("flex gap-3", className)} {...attrs}>
      {renderImage(selected)}
      <div className="flex flex-col">
        {renderTitle ? renderTitle() : title}
        <div className="text-secondary text-xs">
          {renderDescription ? renderDescription() : description}
        </div>
      </div>
    </div>
  );
};
