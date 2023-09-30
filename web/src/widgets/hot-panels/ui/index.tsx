import { Panel } from "@/entities/panel";
import { IconChevronRight } from "@/icons";
import { IconHomeSmile } from "@/icons/home-smile";
import { IconDobrik } from "@/icons/dobrik";
import { routes } from "@/shared/routes";

export const HotPanels = () => {
  return (
    <div className="flex flex-col gap-3">
      <Panel
        variant="primary"
        size="tiny"
        renderIcon={() => <IconHomeSmile />}
        renderTrigger={() => (
          <IconChevronRight onClick={routes.organizations} />
        )}
      >
        Выбрано &quot;Дари добно&ldquo;
      </Panel>
      <Panel
        variant="secondary"
        size="tiny"
        renderIcon={() => <IconDobrik />}
        renderTrigger={() => <IconChevronRight onClick={routes.dobriki} />}
      >
        Сегодня вы заработали 93 добрика
      </Panel>
    </div>
  );
};
