import * as React from "react";
import { Input as NextUIInput } from "@nextui-org/input";

import { cn } from "@/shared/utils";

export const Input: React.FC<
  React.ComponentPropsWithRef<typeof NextUIInput>
> = ({
  className,
  type = "text",
  variant = "bordered",
  size = "lg",
  value,
  ...props
}) => {
  return (
    <NextUIInput
      className={cn(
        // "bg-transparent border-secondary border-[1px] rounded-md text-secondary",
        className
      )}
      type={type}
      variant={variant}
      size={size}
      {...props}
    />
  );
};
