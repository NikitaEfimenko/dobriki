import { Card } from "@/shared/ui/card";
import type { CardProps } from "@/shared/ui/card";
import { nullable } from "@/shared/utils";
import { ReactNode } from "react";

interface PanelProps extends CardProps {
  renderIcon?: () => ReactNode;
  renderTrigger?: () => ReactNode;
}

export const Panel = ({
  renderIcon,
  renderTrigger,
  children,
  ...attr
}: PanelProps) => {
  return (
    <Card {...attr}>
      <div className="flex items-center gap-2">
        {nullable(renderIcon, () => renderIcon?.())}
        {children}
        <div className="grow"></div>
        {nullable(renderTrigger, () => renderTrigger?.())}
      </div>
    </Card>
  );
};
