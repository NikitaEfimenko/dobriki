"use client";

import { useFeeds } from "@/entities/feeds/api";
import { ListCard } from "@/entities/listCard";
import { organizations } from "@/features/listItems/config";
import { PageHeader } from "@/features/pageHeader";
import { useRouter } from "@/shared/hooks";
import { Card } from "@/shared/ui/card";
import { ListItem } from "@/shared/ui/list-item";

export default function DigestPage() {
  const router = useRouter();
  const { data, isLoading } = useFeeds();
  return (
    <div className="flex flex-col gap-4">
      <Card className="flex flex-col gap-6 rounded-t-none">
        <PageHeader top="За месяц собрано" middle="92 345 добриков" />
      </Card>
      <div className="flex gap-5 px-4 py-2">
        {data?.map((feed) => {
          return (
            <div
              key={feed.id}
              className="w-20 h-20 rounded-2xl bg-red-400 p-[6px] flex items-end"
              onClick={() => router.feed(feed.id!)}
            >
              {feed.title}
            </div>
          );
        })}
      </div>
      <ListCard
        items={organizations.slice(5)}
        renderItem={({ id, title, description }) => (
          <ListItem key={id} title={title} description={description} />
        )}
        title="Топ организаций"
        route="organizations"
      />
    </div>
  );
}
