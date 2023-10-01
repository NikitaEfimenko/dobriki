"use client";

import { LoginButton } from "@/features/loginButton";
import { PageHeader } from "@/features/pageHeader";
import { useRouter } from "@/shared/hooks";
import { Card } from "@/shared/ui/card";
import { FloatingButton } from "@/shared/ui/floating-button";
import { RunningManLottie } from "@/shared/ui/lotties";
import { signIn } from "next-auth/react";

export default function FormPage() {
  const router = useRouter();
  return (
    <div className="relative">
      <Card className="flex flex-col gap-6 rounded-t-none" shadow={false}>
        <PageHeader top="Привет" />
        <div className="text-secondary">
          Это корпоративное приложение, где сотрудники “Кокос” могут
          конвертировать свою физическую активность в деньги на
          благотворительность
        </div>
      </Card>
      <RunningManLottie />
      <FloatingButton onClick={async () => await signIn("fusionauth")}>
        Войти
      </FloatingButton>
    </div>
  );
}
