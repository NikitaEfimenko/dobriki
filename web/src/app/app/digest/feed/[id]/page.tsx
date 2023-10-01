"use client";

import { PageHeader } from "@/features/pageHeader";
import { Card } from "@/shared/ui/card";

export default function FeedPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <Card className="flex flex-col gap-6 rounded-t-none">
        <PageHeader top="За месяц собрано" middle="92 345 добриков" />
      </Card>
    </div>
  );
}
