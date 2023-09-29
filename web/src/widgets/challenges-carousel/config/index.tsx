'use client'

import { Button } from "@/shared/ui/button"
import { Progress } from "@/shared/ui/progress"
import type { ChallengeCardProps } from "@/entities/challenge/types"

const actionSlot = <Button variant="default" className="w-full">Участвовать</Button>
const stepsSlot = <div className="inline-flex items-center gap-1">
  <span className="text-primary text-lg">120 000 шагов</span>
  <span className="text-primary-muted text-sm">до 31 октября</span>
</div>

const progressSlot = <div>
  <div  className="inline-flex items-center gap-1">
    <span className="text-primary">120 000 шагов</span>
    <span className="text-primary-muted text-sm">до 31 октября</span>
  </div>
  <Progress value={43}/>
</div>
const progressDoneSlot = <div>
  <div  className="inline-flex items-center gap-1">
    <span className="text-primary">100%</span>
    <span className="text-primary-muted text-sm">от цели челденджа</span>
  </div>
  <Progress value={100}/>
</div>

const progressStepSlot = <span className="text-primary text-lg">120 000 шагов</span>
const challengeDone = <span className="text-primary text-lg">Челлендж пройден</span>

const labelSlot = "Челленджи"
const titleSlot = "Октябрь 2023"

export const carouselConfig = [
  {
    label: labelSlot,
    title: titleSlot,
    description: stepsSlot,
    actionSlot: actionSlot
  },
  {
    label: labelSlot,
    title: titleSlot,
    description: progressStepSlot,
    extSlot: progressSlot
  },
  {
    label: labelSlot,
    title: titleSlot,
    description: challengeDone,
    extSlot: progressDoneSlot
  },
] satisfies Array<ChallengeCardProps>