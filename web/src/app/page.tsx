import { routes } from "@/shared/routes";
import { redirect } from "next/navigation";

export default async function Main() {
  redirect(routes.home());
}
