import { charityApiInstance } from "@/shared/api";
import { useQuery, useMutation } from "@tanstack/react-query";

export const useCharities = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["CharityList"],
    queryFn: charityApiInstance.charityList
  })

  return {
    data: data?.data,
    ...rest    
  }
}
