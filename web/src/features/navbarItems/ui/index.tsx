"use client";

import * as React from "react";
import { IconHeart, IconHome, IconTrendUp, IconUser } from "@/icons";
import { NavbarItem } from "@/shared/ui/navbar-item";
import { cn } from "@/shared/utils";
import { routes, useRouter } from "@/shared/routes";
import { usePathname } from "next/navigation";

interface NavbarItemsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const NavbarItems: React.FC<NavbarItemsProps> = ({
  className,
  ...attrs
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const items = React.useMemo(() => {
    return [
      {
        component: <IconHome />,
        active: pathname.includes(routes.home()),
        onClick: router.home,
      },
      {
        component: <IconTrendUp />,
        active: pathname.includes(routes.statistics()),
        onClick: router.statistics,
      },
      {
        component: <IconHeart />,
        active: pathname.includes(routes.digest()),
        onClick: router.digest,
      },
      {
        component: <IconUser />,
        active: pathname.includes(routes.profile()),
        onClick: router.profile,
      },
    ];
  }, [pathname, router]);

  return (
    <div
      className={cn(
        "flex items-center gap-1 p-1 rounded-xl bg-items",
        className
      )}
      {...attrs}
    >
      {items.map(({ component, active, onClick }, index) => {
        return (
          <NavbarItem key={index} active={active} onClick={onClick}>
            {component}
          </NavbarItem>
        );
      })}
    </div>
  );
};
