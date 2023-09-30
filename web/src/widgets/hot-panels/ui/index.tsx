import { Panel } from "@/entities/panel"
import { IconChevronRight } from "@/icons"
import { IconHomeSmile } from "@/icons/home-smile"
import { IconDobrik } from "@/icons/dobrik"
import { routes } from "@/shared/routes"

export const HotPanels = () => {
  return <div className="flex flex-col gap-3 px-3">
  <Panel
    variant="primary"
    size="tiny"
    iconRender={() => <IconHomeSmile />}
    triggerRender={() => <div onClick={routes.organizations} className="rounded-md bg-items">
      <IconChevronRight />
    </div>}
  >
    Выбрано &quot;Дари добно&ldquo;
  </Panel>
  <Panel
    variant="secondary"
    size="tiny"
    iconRender={
      () => <IconDobrik />
    }
    triggerRender={() => <div onClick={routes.dobriki} className="rounded-md bg-items">
      <IconChevronRight />
    </div>}
  >
    Сегодня вы заработали 93 добрика
  </Panel>
</div>
}