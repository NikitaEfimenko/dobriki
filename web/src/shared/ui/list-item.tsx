"use client";

import * as React from "react";
import { cn } from "../utils";
import { Avatar } from "@nextui-org/react";
import { Skeleton } from "./skeleton";
// import { Avatar, AvatarFallback } from "./avatar";

interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  selected?: boolean;

  renderImage?: (selected?: boolean) => React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({
  title,
  description,
  selected,
  className,
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
        <div>{title}</div>
        <div className="text-secondary text-xs">{description}</div>
      </div>
    </div>
  );
};
