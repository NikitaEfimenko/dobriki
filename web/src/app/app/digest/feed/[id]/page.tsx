"use client";

import { useFeed } from "@/entities/feeds/api";
import { PageHeader } from "@/features/pageHeader";
import { useRouter } from "@/shared/hooks";
import { Card } from "@/shared/ui/card";

export default function FeedPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { data } = useFeed(params.id);
  return (
    <div className="flex flex-col gap-8">
      <Card className="flex flex-col gap-6 rounded-t-none">
        <PageHeader
          top="Дайджест"
          middle={data?.title}
          onClick={router.digest}
        />
      </Card>
      <Card dangerouslySetInnerHTML={{ __html: data?.content || "" }} />
    </div>
  );
}
