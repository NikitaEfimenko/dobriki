import * as React from "react";
import { NavbarItems } from "@/features/navbarItems";
import { cn } from "@/shared/utils";

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Navbar: React.FC<NavbarProps> = ({ className, ...attrs }) => {
  return (
    <div
      className={cn("fixed bottom-4 -translate-x-2/4 left-2/4", className)}
      {...attrs}
    >
      <NavbarItems />
    </div>
  );
};
