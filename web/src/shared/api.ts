import {
  ActivityApi,
  CompetitionsApi,
  FeedApi,
  AchievementApi,
} from "../shared/api/api";

export const feedApiInstance = new FeedApi();
export const competitionsApiInstance = new CompetitionsApi();
export const activityApiInstance = new ActivityApi();
export const achievementsApiInstance = new AchievementApi();
