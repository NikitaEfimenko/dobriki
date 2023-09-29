import * as React from "react";
import { CardHeader as Header } from "@/shared/ui/card";
import { useRouter } from "@/shared/hooks";
import { cn, nullable } from "@/shared/utils";
import { IconChevronRight } from "@/icons/chevron-right";
import { routes } from "@/shared/routes";

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  route?: keyof typeof routes;
  renderTrigger?: () => React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  route,
  className,
  renderTrigger,
  ...attrs
}) => {
  const router = useRouter();
  return (
    <Header className={cn(className)} {...attrs}>
      <div className="flex gap-2">
        <div className="font-semibold">{title}</div>
        {renderTrigger?.()}
      </div>
      {nullable(route, (r) => (
        <div onClick={router[r]} className="rounded-md bg-items">
          <IconChevronRight />
        </div>
      ))}
    </Header>
  );
};
