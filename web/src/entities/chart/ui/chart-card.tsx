import { Card } from "@/shared/ui/card";
import { nullable } from "@/shared/utils";
import { CardHeader } from "@/features/cardHeader";


interface ChartCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
  React.ComponentProps<typeof Card> {
  title?: React.ComponentProps<typeof CardHeader>["title"];
  route?: React.ComponentProps<typeof CardHeader>["route"];
  renderTrigger?: () => React.ReactNode;
}

export const ChartCard = ({
  title,
  route,
  renderTrigger,
  children,
  ...attrs
}: ChartCardProps) => {
  return <Card {...attrs} className="flex flex-col gap-5">
    {nullable(title || route || renderTrigger, () => (
        <CardHeader title={title} route={route} renderTrigger={renderTrigger} />
      ))}
    {children}
  </Card>
}