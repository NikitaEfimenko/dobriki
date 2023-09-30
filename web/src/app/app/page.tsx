import { routes } from "@/shared/routes";
import { redirect } from "next/navigation";

export default async function AppPage() {
  redirect(routes.home());
}
