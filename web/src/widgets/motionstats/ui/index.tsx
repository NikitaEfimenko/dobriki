'use client'

import { Hero, WeeklyStats } from "@/entities/stats"
import { useWalkActivity } from "@/features/motion/helpers/hooks"

export const MotionStats = () => {
  const { activities } = useWalkActivity()

  return <div className="flex gap-8 flex-col">
    <Hero title={`${activities.stepCount.toFixed(0)} шагов`} subtitle="Вы сделали" description={`и прошли ${(activities.distance / 1000).toFixed(2)} км и сожгли ${activities.calories.toFixed(0)} калорий`} />
    <WeeklyStats />

  </div>
}