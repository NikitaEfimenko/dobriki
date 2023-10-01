"use client";

import { PageHeader } from "@/features/pageHeader";
import { Card } from "@/shared/ui/card";
import { TopColleagues } from "@/widgets/topColleagues";

export default function DashboardUsersPage() {
  return (
    <div className="flex flex-col gap-10">
      <Card>
        <PageHeader top="Пользователи" />
      </Card>
      <TopColleagues route={null} title=" " className="shadow-non bg-inherit" />
    </div>
  );
}
