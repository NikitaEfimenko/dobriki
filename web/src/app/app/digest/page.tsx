"use client";

import { useCharities } from "@/entities/charity/hooks";
import { useFeeds } from "@/entities/feeds/api";
import { ListCard } from "@/entities/listCard";
import { organizations } from "@/features/listItems/config";
import { PageHeader } from "@/features/pageHeader";
import { useRouter } from "@/shared/hooks";
import { Card } from "@/shared/ui/card";
import { ListItem } from "@/shared/ui/list-item";
import Image from "next/image";

export default function DigestPage() {
  const router = useRouter();
  const { data, isLoading } = useFeeds();
  const { data: organizations } = useCharities();

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
              className="w-20 h-20 rounded-2xl bg-red-400 p-[6px] flex items-end relative overflow-hidden"
              onClick={() => router.feed(feed.id!)}
            >
              <div className="z-10 text-[10px] font-medium">{feed.title}</div>
              <Image
                src={feed.image || ""}
                alt={feed.title}
                width={80}
                height={80}
                className="absolute top-0 left-0"
              />
            </div>
          );
        })}
      </div>
      <ListCard
        items={organizations ? organizations.slice(0, 5) : undefined}
        renderItem={({ name, id, description }) => (
          <ListItem key={id} title={name} description={description} />
        )}
        title="Топ организаций"
        route="organizations"
      />
    </div>
  );
}
