import { useCharities } from "@/entities/charity/hooks";
import { ListCard } from "@/entities/listCard";
import { organizations } from "@/features/listItems/config";
import { useMyCharity } from "@/features/userCharity";
import { ListItem } from "@/shared/ui/list-item";
import * as React from "react";

interface OrganizationsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Organizations: React.FC<OrganizationsProps> = ({
  className,
  ...attrs
}) => {
  const organizations = useCharities()
  const myCharity = useMyCharity()
  return (
    <ListCard
      items={organizations.data ?? []}
      renderItem={({ id, name, description }) => (
        <ListItem
          key={id}
          title={name}
          description={description}
          selected={myCharity.data?.charity.id === id}
        />
      )}
      title="Организации"
      {...attrs}
    />
  );
};
