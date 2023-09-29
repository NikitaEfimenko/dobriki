import * as React from "react";
import { cn } from "@/shared/utils";

export interface ListItemsProps<T>
  extends React.HTMLAttributes<HTMLDivElement> {
  items: T[];
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
      {renderItems ? renderItems(items) : items.map(renderItem)}
    </div>
  );
}
