const app = "/app";
const form = "/form";
const feed = "/feed";
const organization = "/organization";
const dashboard = "/dashboard";

export const routes = {
  app: () => `${app}/`,
  home: () => `${app}/home/`,
  donations: () => `${app}/home/donations/`,
  topColleagues: () => `${app}/home/top-colleagues`,

  statistics: () => `${app}/statistics/`,

  digest: () => `${app}/digest/`,
  organizations: () => `${app}/digest/organizations/`,
  feed: (id: number) => `${app}/digest/${feed}/${id}`,

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

  // ***

  organization: () => `${organization}/`,
  organizationApproveForm: () => `${organization}/form/`,

  // ***
  dashboard: () => `${dashboard}/`,
  dashboardUsers: () => `${dashboard}/users/`,
  dashboardStatistics: () => `${dashboard}/statistics/`,
  dashboardOrganizations: () => `${dashboard}/organizations/`,
};
