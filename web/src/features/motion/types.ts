import { QueryKey } from "@tanstack/react-query"

export const QueueKeys =  {
  SYNC: "BACKGROUND_SYNC" as unknown as QueryKey
}

export const ActivityTypes = {
  Running: "running",
  Ski: "ski",
  Bicycle: "bicycle",
  Walking: "walking",
  Seek: "seek",
  Rest: "rest"
} as const

export type Activity = {
  stepCount: number
  distance: number
  calories: number
  type: typeof ActivityTypes[keyof typeof ActivityTypes]

  found?: number,
  coefficient?: number
}
