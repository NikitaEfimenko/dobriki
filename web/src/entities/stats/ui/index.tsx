import { Label } from "@/shared/ui/label";
import {CircularProgress} from "@nextui-org/react";
import { CheckCheckIcon, CheckIcon } from "lucide-react";

type HeroProps = {
  title: string,
  subtitle: string,
  description: string
}

export const Hero = (props: HeroProps) => {
  return <div className="flex gap-1 flex-col">
    <p className="text-2xl">{props.subtitle}</p>
    <h1 className="text-primary text-4xl font-bold">{props.title}</h1>
    <p className="text-lg">{props.description}</p>
  </div>
}

type DaylyProgressProps = {
  day: string,
  percent: number
}

const DaylyProgress = (props: DaylyProgressProps) => {
  const { percent, day } = props
  return <div className="flex flex-col gap-1 items-center">
    <Label className="text-xs" htmlFor={day}>
      {day}
    </Label>
    <div className="relative">

    <CircularProgress
      classNames={{
        svg: "w-10 h-10 drop-shadow-md",
        indicator: "stroke-primary stroke-[6px]",
        track: "stroke-white/10",
        value: "text-3xl font-semibold text-white",
      }}
        value={percent}
        showValueLabel={false}
        id={props.day}
      />
      {percent >= 100 ? <CheckIcon size={14} className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]"/> : null}
      </div>
  </div>
}

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
]

export const WeeklyStats = () => {
  return <div className="flex gap-4 items-center justify-start">
    {weekleyConfig.map(config => <DaylyProgress key={config.day} day={config.day} percent={config.percent}/>)}
  </div>
}