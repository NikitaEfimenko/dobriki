"use client";

import { PageHeader } from "@/features/pageHeader";
import { useRouter } from "@/shared/hooks";
import { Card } from "@/shared/ui/card";

export default function AuthSendedPage() {
  const router = useRouter();
  return (
    <Card className="flex flex-col gap-8 rounded-t-none" shadow={false}>
      <PageHeader top="Отправили ссылку" onClick={router.formAuth} />
      <div className="text-secondary">
        Ссылка на вход уже у вас на почте. Перейдите по ней, чтобы войти в
        приложение
      </div>
    </Card>
  );
}
