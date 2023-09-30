import * as React from "react";
import { cn } from "../utils";
import { Button } from "./button";

export const FloatingButton: React.FC<React.ComponentProps<typeof Button>> = ({
  className,
  children,
  ...attrs
}) => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-[10]">
      <Button className={cn("w-full h-[52px] text-base", className)} {...attrs}>
        {children}
      </Button>
    </div>
  );
};
