import {
  achievementsApiInstance,
  activityApiInstance,
  competitionsApiInstance,
  feedApiInstance,
} from "@/shared/api";
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

export const useTeams = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["queryCompetitionsList"],
    queryFn: async () => {
      return competitionsApiInstance.competitionsTeamsList();
    },
  });

  return {
    data: data?.data.reduce<(typeof data)["data"][number]["members"]>(
      (acc, cur) => {
        if (cur.members && acc) {
          acc.push(...cur.members);
        }
        return acc;
      },
      []
    ),
    ...rest,
  };
};

export const useActivity = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["queryActivityList"],
    queryFn: async () => {
      return activityApiInstance.activityList();
    },
  });

  return {
    data: data?.data,
    ...rest,
  };
};

export const useAchievements = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["queryAchievementsList"],
    queryFn: async () => {
      return achievementsApiInstance.achievementList();
    },
  });

  return {
    data: data?.data,
    ...rest,
  };
};
