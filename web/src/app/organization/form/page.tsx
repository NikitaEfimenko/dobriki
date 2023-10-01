"use client";

import { Button } from "@/shared/ui/button";
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

const formSchema = z.object({
  title: z.string().min(2, {
    message: "сдует",
  }),
  description: z.string().min(3, {
    message: "коротковат",
  }),
  email: z.string().min(2, {
    message: "маловат",
  }),
});

export default function OrganizationFormPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.goalForm();
  }

  return (
    <div className="max-w-[675px] mx-auto">
      <div className="flex flex-col gap-14 items-center pt-28">
        <div className="flex flex-col gap-5 font-extrabold">
          <div className="flex items-center gap-3 justify-center text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M12.0823 13.8594C12.0823 14.1706 11.8303 14.4229 11.5193 14.4229C11.2084 14.4229 10.9563 14.1706 10.9563 13.8594C10.9563 13.5482 11.2084 13.2959 11.5193 13.2959C11.8303 13.2959 12.0823 13.5482 12.0823 13.8594Z"
                fill="#8459FF"
              />
              <path
                d="M23.2232 12.4506C23.2232 12.7618 22.9711 13.0141 22.6602 13.0141C22.3493 13.0141 22.0972 12.7618 22.0972 12.4506C22.0972 12.1394 22.3493 11.8871 22.6602 11.8871C22.9711 11.8871 23.2232 12.1394 23.2232 12.4506Z"
                fill="#8459FF"
              />
              <path
                d="M1.24487 20.6216C2.51159 16.9588 3.21532 16.0431 5.608 13.0141C2.7227 14.8456 1.66711 14.5638 1.66711 13.2254C1.66711 11.8871 4.27091 10.4078 5.74874 10.9009C8.91553 7.66067 11.8008 5.6179 14.1231 5.33614C14.1231 3.5047 14.0058 2.98813 13.912 2.80029C14.8269 3.57514 15.3195 4.49086 15.6713 5.12482C16.4032 4.61765 17.1961 4.16214 17.501 3.99778V5.6179L18.5566 5.12482V5.9701C20.1283 6.41623 23.0124 8.41859 25.0309 10.9009C27.494 13.9299 27.6833 18.4877 25.2004 20.3003C24.3744 20.9033 23.1004 21.2002 21.6803 21.2002M9.55634 18.2003C9.55634 19.7875 10.5004 21.4467 11.9004 21.7003C12.9113 21.8834 14.7893 21.7623 16.1912 21.2002M16.1912 21.2002C18.7155 20.1881 22.0198 18.3032 21.6803 16.6525C21.1877 14.2575 15.6986 15.0324 15.6986 16.9343C15.6986 18.0083 17.612 19.752 19.2172 20.5971M16.1912 21.2002L15.6986 26.5141L18.9357 24.894M18.9357 24.894L21.1173 25.2462L21.6803 21.2002M18.9357 24.894L19.2172 20.5971M21.6803 21.2002C21.1173 21.2002 20.1532 21.0899 19.2172 20.5971M12.0823 13.8594C12.0823 14.1706 11.8303 14.4229 11.5193 14.4229C11.2084 14.4229 10.9563 14.1706 10.9563 13.8594C10.9563 13.5482 11.2084 13.2959 11.5193 13.2959C11.8303 13.2959 12.0823 13.5482 12.0823 13.8594ZM23.2232 12.4506C23.2232 12.7618 22.9711 13.0141 22.6602 13.0141C22.3493 13.0141 22.0972 12.7618 22.0972 12.4506C22.0972 12.1394 22.3493 11.8871 22.6602 11.8871C22.9711 11.8871 23.2232 12.1394 23.2232 12.4506Z"
                stroke="#8459FF"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <div>ДОБРИКИ</div>
          </div>
          <div className="text-[40px] leading-[130%] text-center">
            Форма для благотворительной огранизации
          </div>
        </div>
        <div className="w-96">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input label="Название " {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input label="Описание" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input label="Электронная почта" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Отправить на модерацию</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
