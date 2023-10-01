import { UserDetails } from "@/shared/api/models/user-details"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useSession } from "next-auth/react"

export const useUserDetails = () => {
  // return useQuery(({
  //   queryKey: ["userDetails"],
  //   queryFn: async () => {
  //     return axios.get<UserDetails>(`/backend/api/auth/user/`)
  //   }
  // }))
  const session = useSession()
  return {
    ...session.data?.user,
    id: (session.data?.user as any)?.pk
  } 
}