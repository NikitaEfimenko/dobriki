"use client";

import { ListCard } from "@/entities/listCard";
import { organizations } from "@/features/listItems/config";
import { PageHeader } from "@/features/pageHeader";
import { Card } from "@/shared/ui/card";
import { ListItem } from "@/shared/ui/list-item";

export default function DigestPage() {
  return (
    <div className="flex flex-col gap-4">
      <Card className="flex flex-col gap-8 rounded-t-none">
        <PageHeader top="За месяц собрано" middle="92 345 добриков" />
      </Card>
      <ListCard
        items={organizations.slice(5)}
        renderItem={({ id, title, description }) => (
          <ListItem key={id} title={title} description={description} />
        )}
        title="Топ организаций"
      />
    </div>
  );
}
