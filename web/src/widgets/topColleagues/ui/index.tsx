import { ListCard } from "@/entities/listCard";
import { topColleagues } from "@/features/listItems/config";
import { ListItem } from "@/shared/ui/list-item";
import { Avatar } from "@nextui-org/react";
import * as React from "react";

interface TopColleaguesProps extends React.HTMLAttributes<HTMLDivElement> {
  limit?: number;
}

export const TopColleagues: React.FC<TopColleaguesProps> = ({
  limit = 5,
  className,
  ...attrs
}) => {
  return (
    <ListCard
      items={topColleagues.slice(limit)}
      renderItem={({ id, title, description }) => (
        <ListItem
          key={id}
          title={title}
          description={description}
          renderImage={() => (
            <Avatar
              // isBordered
              // color="success"
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            />
          )}
        />
      )}
      title="Топ коллег"
      route="topColleagues"
      {...attrs}
    />
  );
};
