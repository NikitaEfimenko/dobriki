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
  weight: z.string().min(2, {
    message: "сдует",
  }),
  height: z.string().min(3, {
    message: "коротковат",
  }),
  age: z.string().min(2, {
    message: "маловат",
  }),
});

export default function PersonalFormPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: "",
      height: "",
      weight: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.goalForm();
  }

  return (
    <div>
      <Card className="flex flex-col gap-8" shadow={false}>
        <PageHeader top="Ваши данные" />
        <div className="text-secondary">
          Введите данные по возрасту, росту и весу для подсчета вашего среднего
          шага
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
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input label="Вес, кг" {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input label="Рост, см" {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input label="Возраст, лет" {...field} type="number" />
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
