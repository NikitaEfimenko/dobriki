import { feedApiInstance } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

export const useFeeds = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["queryFeedsList"],
    queryFn: async () => {
      return feedApiInstance.feedArticlesList();
    },
  });

  return {
    data: data?.data.results,
    ...rest,
  };
};

export const useFeed = (id: string) => {
  const { data, ...rest } = useQuery({
    queryKey: ["queryFeed"],
    queryFn: async () => {
      return feedApiInstance.feedArticlesRead({ id: +id });
    },
  });

  return {
    data: data?.data,
    ...rest,
  };
};
