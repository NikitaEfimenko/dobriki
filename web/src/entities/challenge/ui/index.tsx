'use client'
import { ChevronRightIcon } from "lucide-react"
import type { ChallengeCardProps } from "../types"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/ui/avatar"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/shared/ui/card"


export function ChallengeCard(props: ChallengeCardProps) {
  const { title, avatar, label, description, extSlot, actionSlot } = props
  return (
    <Card className="border-0 ring-0 shadow-0">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-md font-mono">{label}</CardTitle>
          <ChevronRightIcon size={16}/>
        </div>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex flex-col gap-4">

        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center  space-x-4 w-full">
            <div className="flex-col felx-start">
            <Avatar>
              <AvatarImage src={avatar ?? "/dobrik.png"}>
              </AvatarImage>
              <AvatarFallback></AvatarFallback>
            </Avatar>
            </div>
            <div className="w-full">
              <p className="text-sm font-medium leading-none">{title}</p>
              <p className="text-sm text-muted-foreground">{description}</p>
              <div className="mt-6">
                {extSlot}
              </div>
            </div>
          </div>
        </div>
        <div>
          {actionSlot}
        </div>
        </div>
      </CardContent>
    </Card>
  )
}