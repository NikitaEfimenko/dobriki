import { Card,  } from "@/shared/ui/card"
import type { CardProps } from "@/shared/ui/card"
import { nullable } from "@/shared/utils"
import { ReactNode } from "react"

interface PanelProps extends CardProps {
  iconRender?: () => ReactNode,
  triggerRender?: () => ReactNode
}

export const Panel = ({ iconRender, triggerRender, children, ...attr}: PanelProps) => {
  return <Card {...attr}>
    <div className="flex items-center gap-2">
      {nullable(iconRender, () => iconRender?.())}
      {children}
      <div className="grow"></div>
      {nullable(triggerRender, () => triggerRender?.())}
    </div>
  </Card>
}

