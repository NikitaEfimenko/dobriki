import { useUserDetails } from "@/entities/user/hooks";
// import { Charity } from "@/shared/api";
import { charitySubscriptionInstance } from "@/shared/api";
import { useQuery, useMutation, QueryKey } from "@tanstack/react-query";

const queryKeys = ["MyCharity"] as any

export const useMyCharity = () => {
  const user = useUserDetails()

  const { data, ...rest } = useQuery({
    queryKey: queryKeys,
    queryFn: async () => {
      return charitySubscriptionInstance.charitySubscriptionList({ userId: user.id! })
    },
    enabled: !!user?.id
  })

  return {
    data: data?.data[0],
    ...rest    
  }
}

// export const useСhooseCharity = (charity: Charity) => {

//   const mutation = useMutation(async (charityId: number) => {
//     charitySubscriptionInstance.charitySubscriptionApply({ id: charityI }) 
//   })

//   return mutation
// }