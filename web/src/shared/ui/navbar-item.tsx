import * as React from "react";
import { cn } from "../utils";

interface NavbarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  active: boolean;
}

export const NavbarItem: React.FC<NavbarItemProps> = ({
  active,
  className,
  children,
  ...attrs
}) => {
  return (
    <div
      className={cn(
        "py-[10px] px-4 rounded-lg",
        active ? "bg-items-active" : "",
        className
      )}
      {...attrs}
    >
      {children}
    </div>
  );
};
