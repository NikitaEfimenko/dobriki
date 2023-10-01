'use client'
import { useActivity } from "@/features/motion/helpers/hooks";
import { Activity } from "@/features/motion/types";
import { usePresence } from "@ably-labs/react-hooks";
import { useSession } from "next-auth/react";

const team = "team"

export const useRealtimeStats = () => {
  const session = useSession()
  const { activities } = useActivity()
  // Взять команду с session.user.team
  
  const [presenceData] = usePresence<Activity>(team, activities);
  console.log(presenceData)
  return presenceData
}