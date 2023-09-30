'use client'
import { ActivityTypes, type Activity } from "@/features/motion/types"
import type { ListItemProps } from "@/shared/ui/list-item"
import { Progress } from "@/shared/ui/progress"
import { Badge } from "@nextui-org/react"
import { Avatar } from "@nextui-org/react"
import { ActivityIcon, BellRingIcon } from "lucide-react"

type User = {
  clientId: string
}

export const listItemPropsBuilder = (memberActivity: Activity & User): Partial<ListItemProps> => {
  const defaultProps = {
    title: `Участник ${memberActivity.clientId.slice(0, 10)}`,
    renderDescription: () => <div className="flex items-center gap-1">
      <span>Сейчас в активности</span>
      <span>{memberActivity.type}</span>
    </div>,
    renderStatus: () => {
      return <div className="flex flex-col gap-2">
        {/* <div>Преодолел дистанцию {memberActivity.distance}</div> */}
        {/* <Progress value={memberActivity.distance / 100} /> */}
      </div>
    },
    renderImage: () => (
      <ActivityIcon className="animate-pulse" size={32} />
    )
  }

  switch (memberActivity.type) {
    case ActivityTypes.Bicycle:
      return {
        ...defaultProps
      }
    case ActivityTypes.Rest:
      return {
        ...defaultProps
      }
    case ActivityTypes.Running:
      return {
        ...defaultProps
      }
    case ActivityTypes.Seek:
      return {
        ...defaultProps,
        renderDescription: () => <div>
          <span>Поймал</span>
          <Badge>
            {memberActivity.found}
          </Badge>
          <span>Добриков</span>
        </div>
      }
    case ActivityTypes.Ski:
      return {
        ...defaultProps,
        renderDescription: () => <div>
          <span>Накатал уже</span>
          <Badge title={String(memberActivity.distance)}>
          </Badge>
          <span>(м) сугробов</span>
        </div>
      }
    case ActivityTypes.Walking:
      return {
        ...defaultProps,
        renderDescription: () => <div className="flex items-center gap-1">
          <span>Прошел уже</span>
          {memberActivity.distance.toFixed(2)}
          <span>метров</span>
        </div>
      }
    default:
      return {
        ...defaultProps
      }
  }
}