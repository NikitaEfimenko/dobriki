"use client";

import { ListCard } from "@/entities/listCard";
import { PageHeader } from "@/features/pageHeader";
import { Card } from "@/shared/ui/card";
import { GoalProgress } from "@/shared/ui/goal-progress";
import { ListItem } from "@/shared/ui/list-item";
import { cn, nullable } from "@/shared/utils";
import { BarChart } from "@/entities/chart";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@nextui-org/react";
import { OnlineBadge } from "@/shared/ui/online-badge";
import { useTeams } from "@/entities/feeds/api";

const Routemap = dynamic(
  () => import("@/widgets/routemap").then((c) => ({ default: c.Routemap })),
  { ssr: false }
);

const periods = [
  { id: 1, title: "За день" },
  { id: 2, title: "За неделю" },
  { id: 3, title: "За 30 дней" },
];

export default function StatisticsPage() {
  const [activePeriod, setActivePeriod] = useState(periods[1]);
  const { data = [] } = useTeams();

  return (
    <div className="flex flex-col gap-4">
      <Card className="flex flex-col gap-6 rounded-t-none">
        <PageHeader top="Цель 10 000 шагов" middle="9 382 шага " />
        <div className="text-secondary">
          <GoalProgress value={93} title="ежедневной цели" />
        </div>
      </Card>
      <BarChart />

      <Suspense fallback={<Skeleton></Skeleton>}>
        <Routemap />
      </Suspense>

      <ListCard
        title="Топ 10 коллег"
        items={data}
        renderItem={({
          username,
          email,
          first_name,
          last_name,
          // online = true,
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
        renderTrigger={() => (
          <Dropdown className="bg-items rounded-xl">
            <DropdownTrigger>
              <div className="text-accent flex items-center gap-1">
                <div>{activePeriod.title}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="#32E914"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </DropdownTrigger>
            <DropdownMenu>
              {periods.map((period) => (
                <DropdownItem
                  className={cn(
                    activePeriod.id === period.id ? "text-accent" : ""
                  )}
                  key={period.id}
                  onClick={() => setActivePeriod(period)}
                >
                  {period.title}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        )}
      />
    </div>
  );
}
