import { CircleProgress } from "@/shared/ui/circle-progress";
import { CircularProgress } from "@nextui-org/react";
import { CheckIcon } from "lucide-react";

type DaylyProgressProps = {
  day: string;
  percent: number;
};

const DailyProgress = (props: DaylyProgressProps) => {
  const { percent, day } = props;
  return (
    <div className="flex flex-col gap-1 items-center">
      <div className="text-xs">{day}</div>
      <CircleProgress percent={percent} />
    </div>
  );
};

const weekleyConfig = [
  {
    day: "ПН",
    percent: 100,
  },
  {
    day: "ВТ",
    percent: 20,
  },
  {
    day: "СР",
    percent: 100,
  },
  {
    day: "ЧТ",
    percent: 20,
  },
  {
    day: "ПТ",
    percent: 100,
  },
  {
    day: "СБ",
    percent: 20,
  },
  {
    day: "ВС",
    percent: 100,
  },
];

export const WeeklyStats = () => {
  return (
    <div className="flex items-center justify-between">
      {weekleyConfig.map((config) => (
        <DailyProgress
          key={config.day}
          day={config.day}
          percent={config.percent}
        />
      ))}
    </div>
  );
};
