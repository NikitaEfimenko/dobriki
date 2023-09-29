import * as React from "react";
import { CardHeader as Header } from "@/shared/ui/card";
import { useRouter } from "@/shared/hooks";
import { cn, nullable } from "@/shared/utils";
import { IconChevronRight } from "@/icons/chevron-right";
import { routes } from "@/shared/routes";

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  route?: keyof typeof routes;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  route,
  className,
  ...attrs
}) => {
  const router = useRouter();
  return (
    <Header className={cn(className)} {...attrs}>
      <div className="font-semibold">{title}</div>
      {nullable(route, (r) => (
        <div onClick={router[r]}>
          <IconChevronRight />
        </div>
      ))}
    </Header>
  );
};
