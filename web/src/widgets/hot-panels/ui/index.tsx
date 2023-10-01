import { Panel } from "@/entities/panel";
import { UserCharityPanel } from "@/features/userCharity/ui";
import { IconChevronRight } from "@/icons";
import { IconDobrik } from "@/icons/dobrik";
import { useRouter } from "@/shared/hooks";

export const HotPanels = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col gap-3">
      <UserCharityPanel/>
      <Panel
        variant="secondary"
        onClick={router.dobriki}
        size="tiny"
        renderIcon={() => <IconDobrik />}
        renderTrigger={() => <IconChevronRight />}
      >
        Сегодня вы заработали 93 добрика
      </Panel>
    </div>
  );
};
