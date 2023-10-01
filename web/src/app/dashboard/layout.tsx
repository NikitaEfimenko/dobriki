"use client";

import { useRouter } from "@/shared/hooks";
import { routes } from "@/shared/routes";
import { Card } from "@/shared/ui/card";
import { cn } from "@/shared/utils";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-4">
      <Card className="rounded-l-none h-[100lvh] py-10 flex flex-col gap-10">
        <div className="flex items-center gap-3 px-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M10.3561 11.8796C10.3561 12.1464 10.1401 12.3626 9.87355 12.3626C9.60705 12.3626 9.391 12.1464 9.391 11.8796C9.391 11.6129 9.60705 11.3966 9.87355 11.3966C10.1401 11.3966 10.3561 11.6129 10.3561 11.8796Z"
              fill="#8459FF"
            />
            <path
              d="M19.9054 10.6721C19.9054 10.9388 19.6894 11.1551 19.4229 11.1551C19.1564 11.1551 18.9403 10.9388 18.9403 10.6721C18.9403 10.4053 19.1564 10.1891 19.4229 10.1891C19.6894 10.1891 19.9054 10.4053 19.9054 10.6721Z"
              fill="#8459FF"
            />
            <path
              d="M1.06689 17.6758C2.15265 14.5362 2.75584 13.7513 4.80671 11.1551C2.33361 12.7249 1.42881 12.4834 1.42881 11.3362C1.42881 10.1891 3.66064 8.92113 4.92735 9.34377C7.64173 6.56642 10.1148 4.81548 12.1054 4.57397C12.1054 3.00416 12.0048 2.5614 11.9244 2.40039C12.7086 3.06454 13.1308 3.84944 13.4324 4.39284C14.0597 3.95812 14.7393 3.56768 15.0007 3.4268V4.81548L15.9055 4.39284V5.11737C17.2526 5.49976 19.7247 7.21607 21.4549 9.34377C23.5661 11.94 23.7284 15.8467 21.6002 17.4004C20.8922 17.9172 19.8002 18.1717 18.5829 18.1717M8.191 15.6004C8.191 16.9609 9.0002 18.383 10.2002 18.6004C11.0667 18.7573 12.6764 18.6535 13.878 18.1717M13.878 18.1717C16.0417 17.3042 18.8739 15.6885 18.5829 14.2737C18.1607 12.2209 13.4558 12.885 13.4558 14.5152C13.4558 15.4358 15.0958 16.9304 16.4717 17.6548M13.878 18.1717L13.4558 22.7265L16.2305 21.3378M16.2305 21.3378L18.1004 21.6397L18.5829 18.1717M16.2305 21.3378L16.4717 17.6548M18.5829 18.1717C18.1004 18.1717 17.274 18.0772 16.4717 17.6548M10.3561 11.8796C10.3561 12.1464 10.1401 12.3626 9.87355 12.3626C9.60705 12.3626 9.391 12.1464 9.391 11.8796C9.391 11.6129 9.60705 11.3966 9.87355 11.3966C10.1401 11.3966 10.3561 11.6129 10.3561 11.8796ZM19.9054 10.6721C19.9054 10.9388 19.6894 11.1551 19.4229 11.1551C19.1564 11.1551 18.9403 10.9388 18.9403 10.6721C18.9403 10.4053 19.1564 10.1891 19.4229 10.1891C19.6894 10.1891 19.9054 10.4053 19.9054 10.6721Z"
              stroke="#8459FF"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <div className="font-extrabold text-xl">ДОБРИКИ</div>
        </div>
        <div className="font-semibold">
          <div
            className={cn(
              "py-3 px-6 cursor-pointer hover:bg-items",
              pathname.includes(routes.dashboardUsers()) ? "text-accent" : ""
            )}
            onClick={router.dashboardUsers}
          >
            Пользователи
          </div>
          <div
            className={cn(
              "py-3 px-6 cursor-pointer hover:bg-items",
              pathname.includes(routes.dashboardStatistics())
                ? "text-accent"
                : ""
            )}
            onClick={router.dashboardStatistics}
          >
            Статистика
          </div>
          <div
            className={cn(
              "py-3 px-6 cursor-pointer hover:bg-items",
              pathname.includes(routes.dashboardOrganizations())
                ? "text-accent"
                : ""
            )}
            onClick={router.dashboardOrganizations}
          >
            Организации
          </div>
        </div>
      </Card>
      <Card shadow={false} className="col-span-3 bg-inherit">
        {children}
      </Card>
    </div>
  );
}
