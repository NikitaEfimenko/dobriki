import { useTeams } from "@/entities/feeds/api";
import { ListCard } from "@/entities/listCard";
import { ListItem } from "@/shared/ui/list-item";
import { OnlineBadge } from "@/shared/ui/online-badge";
import { nullable } from "@/shared/utils";
import { Avatar } from "@nextui-org/react";
import * as React from "react";

interface TopColleaguesProps extends React.HTMLAttributes<HTMLDivElement> {
  limit?: number;
  title?: string;
  route?: null;
}

export const TopColleagues: React.FC<TopColleaguesProps> = ({
  limit = 5,
  className,
  title = "Топ коллег",
  route,
  ...attrs
}) => {
  const { data = [] } = useTeams();

  return (
    <ListCard
      className={className}
      items={data.slice(0, limit)}
      // FIXME: ONLINE PROP IS REQUIRED
      renderItem={({
        username,
        email,
        first_name,
        last_name,
        // online = true,
      }) => {
        const title = first_name ? `${first_name} ${last_name}` : username;
        return (
          <ListItem
            key={email}
            title={title}
            description={username}
            renderImage={() => (
              <Avatar
                // isBordered
                // color="success"
                src="https://i.pravatar.cc/150?u=a04258114e29026302d"
              />
            )}
          >
            {nullable(Math.random() > 0.5, () => (
              <OnlineBadge />
            ))}
          </ListItem>
        );
      }}
      title={title}
      route={route === null ? undefined : "topColleagues"}
      {...attrs}
    />
  );
};
