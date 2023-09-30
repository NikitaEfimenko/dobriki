const app = "/app";
const forms = "/form";

export const routes = {
  app: () => `${app}/`,
  home: () => `${app}/home/`,
  donations: () => `${app}/home/donations/`,
  topColleagues: () => `${app}/home/top-colleagues`,

  statistics: () => `${app}/statistics/`,

  digest: () => `${app}/digest/`,
  organizations: () => `${app}/digest/organizations/`,

  profile: () => `${app}/profile/`,

  activity: () => `${app}/activity/`,

  // ***

  form: () => `${forms}/`,
  personalForm: () => `${forms}/personal/`,
  goalForm: () => `${forms}/goal/`,
  organizationForm: () => `${forms}/organization/`,
};
