import * as React from "react";
import { CardHeader } from "@/features/cardHeader";
import { ListItems } from "@/features/listItems";
import { Card } from "@/shared/ui/card";
import { nullable } from "@/shared/utils";

interface ListCardProps<T>
  extends React.HTMLAttributes<HTMLDivElement>,
    React.ComponentProps<typeof Card> {
  title?: React.ComponentProps<typeof CardHeader>["title"];
  route?: React.ComponentProps<typeof CardHeader>["route"];

  items?: T[];
  renderItem?: (props: T) => React.ReactNode;
  renderItems?: (items: T[]) => React.ReactNode;
  renderTrigger?: () => React.ReactNode;
}

export function ListCard<T>({
  title,
  route,
  items,
  renderItem,
  renderItems,
  renderTrigger,
  ...attrs
}: ListCardProps<T>) {
  return (
    <Card {...attrs} className="flex flex-col gap-5">
      {nullable(title || route || renderTrigger, () => (
        <CardHeader title={title} route={route} renderTrigger={renderTrigger} />
      ))}
      <ListItems
        items={items || []}
        renderItem={renderItem}
        renderItems={renderItems}
      />
    </Card>
  );
}
