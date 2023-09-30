'use client'
import { Activity } from "@/features/motion/types";
import { usePresence } from "@ably-labs/react-hooks";
import { useSession } from "next-auth/react";

const team = "team"

export const useRealtimeStats = () => {
  const session = useSession()
  // Взять команду с session.user.team

  const [presenceData] = usePresence<Activity>(team);

  return presenceData
}