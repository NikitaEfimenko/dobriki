"use client";

import { BarChart } from "@/entities/chart";
import { PageHeader } from "@/features/pageHeader";
import { Card } from "@/shared/ui/card";
import { FC } from "react";

const StatCard: FC<(typeof items)[number]> = (props) => {
  return (
    <Card className="flex flex-col gap-3">
      <div className="">{props.title}</div>
      <div className="flex flex-col">
        <div className="text-xl font-extrabold">{props.description}</div>
        <div className="text-xs text-secondary">{props.stats}</div>
      </div>
    </Card>
  );
};

const items = [
  {
    title: "Количество шагов",
    description: "812 891 шагов",
    stats: "+23% с прошлой недели",
  },
  {
    title: "Количество килокалорий",
    description: "8 912 ккал",
    stats: "+12% с прошлой недели",
  },
  {
    title: "Собрано добриков",
    description: "+34 (10 человек)",
    stats: "-46% с прошлой недели",
  },
];

export default function DashboardStatisticsPage() {
  return (
    <div className="flex flex-col gap-10">
      <Card>
        <PageHeader top="Статистика" />
      </Card>
      <div className="grid grid-cols-3 gap-5">
        {items.map((item, index) => {
          return <StatCard key={index} {...item} />;
        })}
        <div className="col-span-2">
          <BarChart />
        </div>
      </div>
    </div>
  );
}
