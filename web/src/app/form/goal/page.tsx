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
import { Button } from "@/shared/ui/button";
import { useRouter } from "@/shared/hooks";

const formSchema = z.object({
  goal: z.string().min(2, {
    message: "сдует",
  }),
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
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="goal"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input label="Количество шагов" {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="fixed bottom-4 left-4 right-4">
              <Button type="submit" className="w-full h-[52px] text-base">
                Продолжить
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
}
