"use client";

import { ListItems } from "@/features/listItems";
import { topColleagues } from "@/features/listItems/config";
import { PageHeader } from "@/features/pageHeader";
import { IconBack } from "@/icons/back";
import { useRouter } from "@/shared/hooks";
import { Card } from "@/shared/ui/card";
import { ListItem } from "@/shared/ui/list-item";

export default function TopColleaguesPage() {
  const router = useRouter();
  return (
    <Card shadow={false} className="flex flex-col gap-8">
      <PageHeader top="Топ коллег" onClick={router.home} />
      <ListItems
        items={topColleagues}
        renderItem={({ id, title, description }) => (
          <ListItem key={id} title={title} description={description} />
        )}
      />
    </Card>
  );
}
