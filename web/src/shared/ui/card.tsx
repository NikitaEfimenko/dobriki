import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shared/utils";

const cardVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      size: {
        tiny: "p-3 bg-card rounded-xl border-0 leading-[130%]",
        default: "p-4 pb-6 bg-card rounded-3xl border-0",
      },
      variant: {
        default: "",
        primary: "bg-accent-darken",
        secondary: "bg-secondary-darken"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    },
  }
)
interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  shadow?: boolean;
}


const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ shadow = true, className, size, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        cardVariants({ size, variant}),
        shadow ? "shadow" : "",
        className,
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ title, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex justify-between gap-2 font-semibold", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};

export type {
  CardProps
}
