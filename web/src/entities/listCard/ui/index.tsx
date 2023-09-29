import * as React from "react";
import { CardHeader } from "@/features/cardHeader";
import { ListItems } from "@/features/listItems";
import { Card } from "@/shared/ui/card";

interface ListCardProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ComponentProps<typeof CardHeader>["title"];
  route?: React.ComponentProps<typeof CardHeader>["route"];

  items: T[];
  renderItem: (props: T) => React.ReactNode;
}

export function ListCard<T>({
  title,
  route,
  items,
  renderItem,
  ...attrs
}: ListCardProps<T>) {
  return (
    <Card {...attrs} className="flex flex-col gap-5">
      <CardHeader title={title} route={route} />
      <ListItems items={items} renderItem={renderItem} />
    </Card>
  );
}
