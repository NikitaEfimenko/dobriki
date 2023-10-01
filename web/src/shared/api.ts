
import {
  ActivityApi,
  CompetitionsApi,
  FeedApi,
  AchievementApi,
  CharityApi,
  CharitySubscriptionApi 
} from "../shared/api/api";

export const feedApiInstance = new FeedApi();
export const competitionsApiInstance = new CompetitionsApi();
export const activityApiInstance = new ActivityApi();
export const achievementsApiInstance = new AchievementApi();
export const charityApiInstance = new CharityApi();
export const charitySubscriptionInstance = new CharitySubscriptionApi();