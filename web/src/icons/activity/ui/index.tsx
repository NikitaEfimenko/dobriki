import { FC, HTMLAttributes } from "react";
import { activities } from "..";
import { useActivity } from "@/entities/feeds/api";

export type ActivityKeys = keyof typeof activities;

interface IconActivityProps extends HTMLAttributes<SVGSVGElement> {
  activity: ActivityKeys;
}

export const IconActivity: FC<IconActivityProps> = ({ activity, ...attrs }) => {
  return activities[activity](attrs);
};
