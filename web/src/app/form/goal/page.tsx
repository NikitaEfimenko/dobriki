"use client";

import { PageHeader } from "@/features/pageHeader";
import { Card } from "@/shared/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "@/shared/hooks";
import { FloatingButton } from "@/shared/ui/floating-button";

const formSchema = z.object({
  goal: z.string(),
});

export default function GoalFormPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      goal: "10000",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.organizationForm();
  }

  return (
    <div>
      <Card className="flex flex-col gap-8" shadow={false}>
        <PageHeader top="Цель на день" />
        <div className="text-secondary">
          Задайте цель по количеству шагов в день, будем показывать статистику
          по вашей активности
        </div>
      </Card>
      <Card shadow={false}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="goal"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      required
                      label="Количество шагов"
                      {...field}
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FloatingButton type="submit">Продолжить</FloatingButton>
          </form>
        </Form>
      </Card>
    </div>
  );
}
