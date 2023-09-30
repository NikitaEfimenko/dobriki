import React, { useMemo, useState } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
  BarProps,
} from 'recharts';
import { ChartCard } from './chart-card';

import { cn } from '@/shared/utils';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";

import { periods, mock } from '../config';

function getShortDayOfWeekFromDate(date: Date): string {
  const daysOfWeek: string[] = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return daysOfWeek[date.getDay()]
}

const selectColor = (value: string): string => {
  return getShortDayOfWeekFromDate(new Date()) === value ? "#29D70D" : "#929292"
}

const CustomizedXAxisTick = (props: any) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} fontSize={11} y={0} dy={16} textAnchor="middle" fill={selectColor(payload.value)}>
        {payload.value}
      </text>
    </g>
  );
};

const CustomizedYAxisTick = (props: any) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={8} fontSize={11} y={0} dx={16} textAnchor="middle" fill="#929292">
        {payload.value}
      </text>
    </g>
  );
};

const getColor = (value: number, median: number): string => {
  if (value > median) return '#29D70D';
  return '#404040';
}

const calculateMedian = (values: any) => {
  const sortedValues = values.sort((a: number, b: number) => a - b);
  const middle = Math.floor(sortedValues.length / 2);

  if (sortedValues.length % 2 === 0) {
    return (sortedValues[middle - 1] + sortedValues[middle]) / 2;
  } else {
    return sortedValues[middle];
  }
};
export const BarChart = () => {
  const [activePeriod, setActivePeriod] = useState(periods[1]);
  const median = useMemo(() => calculateMedian(mock.map(el => el.amt)), []);
  const withMedian = useMemo(() => mock.map(v => ({...v, median})),[median])

  return <ChartCard
    title="Статистика"
    renderTrigger={() =>
      <Dropdown className="bg-items rounded-xl">
        <DropdownTrigger>
          <div className="text-accent flex items-center gap-1">
            <div>{activePeriod.title}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="#32E914"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </DropdownTrigger>
        <DropdownMenu>
          {periods.map((period) => (
            <DropdownItem
              className={cn(
                activePeriod.id === period.id ? "text-accent" : ""
              )}
              key={period.id}
              onClick={() => setActivePeriod(period)}
            >
              {period.title}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>}
  >
    <div className='w-full h-[170px]'>

    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart

        height={250}
        data={withMedian}

        >

        <XAxis axisLine={{ stroke: 'none' }} dataKey="name"tickLine={false} tick={<CustomizedXAxisTick />} />
        <YAxis axisLine={{ stroke: 'none' }} orientation="right" tickLine={false} tick={<CustomizedYAxisTick />}/>
        <CartesianGrid
          stroke="#545454"
          strokeDasharray="6 6" // устанавливаем пунктирный стиль линий сетки
          horizontal={true} // указываем, что хотим пунктирные горизонтальные линии сетки
          vertical={false}
        />

        <Bar dataKey="amt" barSize={24} radius={6}>
          {withMedian.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColor(entry.amt, median)} />
          ))}  
        </Bar>
        <Line type="monotone" dataKey="median" strokeDasharray="6 6" dot={false} strokeWidth={1} stroke="#29D70D"/>
        
      </ComposedChart>
    </ResponsiveContainer>
          </div>
  </ChartCard>
}
