import { useRef, useEffect } from "react";
import { useRouter as NextRouter } from "next/navigation";
import { routes } from "./routes";

export const usePrevious = <T>(value: T) => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export const useRouter = () => {
  const router = NextRouter();

  return {
    home: () => router.push(routes.home()),
    donations: () => router.push(routes.donations()),
    topColleagues: () => router.push(routes.topColleagues()),

    statistics: () => router.push(routes.statistics()),

    digest: () => router.push(routes.digest()),
    organizations: () => router.push(routes.organizations()),

    profile: () => router.push(routes.profile()),
  };
};
