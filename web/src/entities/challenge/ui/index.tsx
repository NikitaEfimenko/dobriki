"use client";

import * as React from "react";
import type { ChallengeItemProps } from "../types";
import { ListItem } from "@/shared/ui/list-item";

export const ChallengeItem: React.FC<ChallengeItemProps> = ({
  title,
  renderTrigger,
  renderDescription,
}: ChallengeItemProps) => {
  return (
    <div className="flex flex-col gap-4">
      <ListItem title={title} renderDescription={renderDescription} />
      {renderTrigger?.()}
    </div>
  );
};
