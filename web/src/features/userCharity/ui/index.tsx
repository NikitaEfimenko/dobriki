import { Panel } from "@/entities/panel"
import { IconHomeSmile } from "@/icons/home-smile";
import { IconChevronRight } from "@/icons";
import { routes } from "@/shared/routes";
import { useMyCharity } from "..";
import { useRouter } from "@/shared/hooks";

export const UserCharityPanel = () => {
  const router = useRouter()
  const { data: myChatiry } = useMyCharity()
  // const applyCharity = useСhooseCharity()

  return <Panel
    variant="primary"
    size="tiny"
    onClick={router.organizations}
    renderIcon={() => <IconHomeSmile />}
    renderTrigger={() => (
      <IconChevronRight />
    )}
  >
    Выбрано {myChatiry?.charity.name}
  </Panel>
}