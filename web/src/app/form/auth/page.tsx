"use client";

import { PageHeader } from "@/features/pageHeader";
import { useRouter } from "@/shared/hooks";
import { Card } from "@/shared/ui/card";
import { FloatingButton } from "@/shared/ui/floating-button";
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

const formSchema = z.object({
  email: z.string().min(2, {
    message: "сдует",
  }),
});

export default function AuthPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.formAuthSended();
  }

  return (
    <div className="relative">
      <Card className="flex flex-col gap-8 rounded-t-none" shadow={false}>
        <PageHeader top="Поделитесь почтой" />
        <div className="text-secondary">
          Если ваша есть в нашей базе, мы отправим вам на нее ссылку для входа
          на платформу, в противном случае свяжитесь с администратором для
          получения доступа
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input label="Электронная почта" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FloatingButton type="submit">Отправить</FloatingButton>
          </form>
        </Form>
      </Card>
    </div>
  );
}
