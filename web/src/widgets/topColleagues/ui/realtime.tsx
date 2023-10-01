
'use client'
import { ListCard } from "@/entities/listCard";
import { topColleagues } from "@/features/listItems/config";
import { ListItem } from "@/shared/ui/list-item";
import { Avatar, Progress } from "@nextui-org/react";
import * as React from "react";

import { useRealtimeStats } from "../helpers/hooks";
import { listItemPropsBuilder } from "../config";
import { configureAbly } from "@ably-labs/react-hooks";

configureAbly({ authUrl: '/api/realtime'})

interface TopColleaguesProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TopColleaguesRealtime: React.FC<TopColleaguesProps> = ({
  className,
  ...attrs
}) => {

  const members = useRealtimeStats()

  console.log(members)

  return (
    <ListCard
      items={members}
      renderItem={(member) => (
        <ListItem
          key={member.connectionId}
          {...listItemPropsBuilder({...member.data, clientId: member.clientId})}
        />
      )}
      title="Коллеги сейчас"
      route="topColleagues"
      {...attrs}
    />
  );
};
