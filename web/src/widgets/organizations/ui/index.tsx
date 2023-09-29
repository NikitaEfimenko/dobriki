import { ListCard } from "@/entities/listCard";
import { organizations } from "@/features/listItems/config";
import { ListItem } from "@/shared/ui/list-item";
import * as React from "react";

interface OrganizationsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Organizations: React.FC<OrganizationsProps> = ({
  className,
  ...attrs
}) => {
  return (
    <ListCard
      items={organizations}
      renderItem={({ id, title, description, selected }) => (
        <ListItem
          key={id}
          title={title}
          description={description}
          selected={selected}
        />
      )}
      title="Организации"
      {...attrs}
    />
  );
};
