"use client";

import { PageHeader } from "@/features/pageHeader";
import { Card } from "@/shared/ui/card";
import { Organizations } from "@/widgets/organizations";

export default function DashboardOrganizationsPage() {
  return (
    <div>
      <Card>
        <PageHeader top="Организации" />
      </Card>
      <Organizations className="shadow-non bg-inherit" title=" " />
    </div>
  );
}
