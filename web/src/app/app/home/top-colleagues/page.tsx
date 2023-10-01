"use client";

import { useTeams } from "@/entities/feeds/api";
import { ListItems } from "@/features/listItems";
import { PageHeader } from "@/features/pageHeader";
import { useRouter } from "@/shared/hooks";
import { Card } from "@/shared/ui/card";
import { ListItem } from "@/shared/ui/list-item";
import { OnlineBadge } from "@/shared/ui/online-badge";
import { nullable } from "@/shared/utils";

export default function TopColleaguesPage() {
  const router = useRouter();
  const { data = [] } = useTeams();

  return (
    <Card shadow={false} className="flex flex-col gap-8">
      <PageHeader top="Топ коллег" onClick={router.home} />
      <ListItems
        items={data}
        renderItem={({
          username,
          email,
          first_name,
          last_name,
        }) => {
          const title = first_name ? `${first_name} ${last_name}` : username;
          return (
            <ListItem key={email} title={title} description={username}>
              {nullable(Math.random() > 0.5, () => (
                <OnlineBadge />
              ))}
            </ListItem>
          );
        }}
      />
    </Card>
  );
}
