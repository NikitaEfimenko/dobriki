"use client";

import * as React from "react";
import { IconHeart, IconHome, IconTrendUp, IconUser } from "@/icons";
import { NavbarItem } from "@/shared/ui/navbar-item";
import { cn } from "@/shared/utils";
import { useRouter } from "@/shared/hooks";
import { usePathname } from "next/navigation";
import { routes } from "@/shared/routes";
import { IconActivity } from "@/icons/activity";

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
        component: <IconActivity />,
        active: pathname.includes(routes.activity()),
        onClick: router.activity,
        background: "rgba(41, 215, 13, 0.16)",
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
      {items.map(({ component, active, onClick, ...rest }, index) => {
        const background = active ? rest.background : "";
        return (
          <NavbarItem
            key={index}
            active={active}
            onClick={onClick}
            style={{ background }}
          >
            {component}
          </NavbarItem>
        );
      })}
    </div>
  );
};
