"use client";

import { PageHeader } from "@/features/pageHeader";
import { useMyCharity } from "@/features/userCharity";
import { useRouter } from "@/shared/hooks";
import { Card } from "@/shared/ui/card";
import { Organizations } from "@/widgets/organizations";

export default function OrganizationsPage() {
  const router = useRouter();
  const myCharity = useMyCharity()

  return (
    <div className="flex flex-col gap-4">
      <Card className="flex flex-col gap-6 rounded-t-none">
        <PageHeader
          top="Вы выбрали"
          middle={myCharity.data?.charity.name}
          onClick={router.app}
        />
        <div className="text-secondary">
          Каждый день в 00:00 заработанные вами добрики будут перечисляться в
          эту организацию
        </div>
      </Card>
      <Organizations />
    </div>
  );
}
