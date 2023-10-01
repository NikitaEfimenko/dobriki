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
    app: () => router.push(routes.app()),
    home: () => router.push(routes.home()),
    donations: () => router.push(routes.donations()),
    topColleagues: () => router.push(routes.topColleagues()),

    statistics: () => router.push(routes.statistics()),

    digest: () => router.push(routes.digest()),
    organizations: () => router.push(routes.organizations()),

    profile: () => router.push(routes.profile()),

    activity: () => router.push(routes.activity()),

    // **

    form: () => router.push(routes.form()),
    formAuth: () => router.push(routes.formAuth()),
    formAuthSended: () => router.push(routes.formAuthSended()),
    personalForm: () => router.push(routes.personalForm()),
    goalForm: () => router.push(routes.goalForm()),
    organizationForm: () => router.push(routes.organizationForm()),

    // **

    feed: (id: number) => router.push(routes.feed(id)),
  };
};
