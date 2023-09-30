const app = "/app";
const form = "/form";

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

  dobriki: () => `${app}/dobriki/`,

  // ***

  form: () => `${form}/`,
  formAuth: () => `${form}/auth/`,
  formAuthSended: () => `${form}/auth/sended/`,
  personalForm: () => `${form}/personal/`,
  goalForm: () => `${form}/goal/`,
  organizationForm: () => `${form}/organization/`,
};
