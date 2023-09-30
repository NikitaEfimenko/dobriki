"use client";

import { PageHeader } from "@/features/pageHeader";
import { IconBigDobrik } from "@/icons/big-dobrik";
import { IconDobrik } from "@/icons/dobrik";
import { Card } from "@/shared/ui/card";
import { GoalProgress } from "@/shared/ui/goal-progress";

export default function StatisticsPage() {

  return (
    <div className="flex flex-col gap-4">
      <Card className="flex flex-col gap-8 rounded-t-none">
        <PageHeader top="Цель 10 000 шагов" middle="9 382 шага " />
        <div className="text-secondary">
          <GoalProgress value={93} title="ежедневной цели" />
        </div>
      </Card>
      <Card className="flex flex-col gap-5">
        <IconBigDobrik/>
      </Card>
    </div>
  );
}
