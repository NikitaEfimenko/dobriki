import * as React from "react";
import { cn } from "@/shared/utils";
import { Skeleton } from "@/shared/ui/skeleton";

export interface ListItemsProps<T>
  extends React.HTMLAttributes<HTMLDivElement> {
  items?: T[];
  renderItem?: (props: T) => React.ReactNode;
  renderItems?: (items: T[]) => React.ReactNode;
}

export function ListItems<T>({
  items,
  className,
  renderItem = () => null,
  renderItems,
  ...attrs
}: ListItemsProps<T>) {
  return (
    <div className={cn("flex flex-col gap-5", className)} {...attrs}>
      {!items
        ? Array.from({ length: 5 })
            .fill(null)
            .map((_, index) => {
              return (
                <div key={index} className="flex gap-3">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <Skeleton className="w-[260px] h-8" />
                </div>
              );
            })
        : renderItems
        ? renderItems(items)
        : items.map(renderItem)}
    </div>
  );
}
