"use client";
import { useRouter as NextRouter } from "next/navigation";

export const routes = {
  home: () => "/home/",
  donations: () => "/home/donations/",
  topColleagues: () => "/home/top-colleagues",

  statistics: () => "/statistics/",
  digest: () => "/digest/",
  profile: () => "/profile/",
};

export const useRouter = () => {
  const router = NextRouter();

  return {
    home: () => router.push(routes.home()),
    donations: () => router.push(routes.donations()),
    topColleagues: () => router.push(routes.topColleagues()),

    statistics: () => router.push(routes.statistics()),
    digest: () => router.push(routes.digest()),
    profile: () => router.push(routes.profile()),
  };
};
