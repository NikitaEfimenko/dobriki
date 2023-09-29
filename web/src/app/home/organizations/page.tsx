"use client";

import { PageHeader } from "@/features/pageHeader";
import { IconBack } from "@/icons/back";
import { useRouter } from "@/shared/hooks";
import { Card } from "@/shared/ui/card";
import { Organizations } from "@/widgets/organizations";

export default function OrganizationsPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4">
      <Card className="flex flex-col gap-8 rounded-t-none">
        <div className="flex flex-col gap-2">
          <IconBack onClick={router.home} />
          <PageHeader top="Вы выбрали" middle="Дари добро" />
        </div>
        <div className="text-secondary">
          Каждый день в 00:00 заработанные вами добрики будут перечисляться в
          эту организацию
        </div>
      </Card>
      <Organizations />
    </div>
  );
}
