"use client";

import { PageHeader } from "@/features/pageHeader";
import { Card } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import * as React from "react";
import { ListCard } from "@/entities/listCard";
import { organizations } from "@/features/listItems/config";
import { ListItem } from "@/shared/ui/list-item";
import { useRouter } from "@/shared/hooks";
import { FloatingButton } from "@/shared/ui/floating-button";

export default function OrganizationFormPage() {
  const router = useRouter();
  const [selectedOrganization, setSelectedOrganization] = React.useState<
    (typeof organizations)[number] | undefined
  >();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(selectedOrganization);
    router.personalForm();
  }

  return (
    <div>
      <Card className="flex flex-col gap-8" shadow={false}>
        <PageHeader top="Кому хотите помочь" />
        <div className="text-secondary">
          Каждый день в 00:00 ваши шаги будут конвертироваться в “Добрики” по
          курсу 100 шагов = 1 добрик и отправляться в выбранную организацию.
          Если передумаете, сможете выбрать другую организацию
        </div>
      </Card>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <ListCard
          items={organizations}
          shadow={false}
          renderItem={(item) => (
            <ListItem
              key={item.id}
              title={item.title}
              description={item.description}
              selected={selectedOrganization?.id === item.id}
              onClick={() => setSelectedOrganization(item)}
            />
          )}
        />
        <FloatingButton type="submit">Продолжить</FloatingButton>
      </form>
    </div>
  );
}
