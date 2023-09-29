import { ReactNode } from "react";

export type ChallengeItemProps = {
  title: string;
  renderTrigger?: (value?: number) => ReactNode;
  renderDescription?: () => ReactNode;
};
