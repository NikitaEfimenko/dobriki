import { ReactNode } from "react"

export type ChallengeCardProps = {
  label: string | ReactNode,
  avatar?: string,
  title: string | ReactNode,
  description: string | ReactNode,
  extSlot?: ReactNode,
  actionSlot?: ReactNode
}
