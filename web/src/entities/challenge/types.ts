import { ReactNode } from "react";

export type ChallengeItemProps = {
  title: string;
  renderTrigger?: () => ReactNode;
  renderDescription?: () => ReactNode;
};
