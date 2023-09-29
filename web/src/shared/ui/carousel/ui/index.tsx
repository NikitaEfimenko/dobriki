'use client'
import type { CarouselStylesType } from "@material-tailwind/react";
import { Carousel as CarouselBase, ThemeProvider } from "@material-tailwind/react";

import { Card } from "@/shared/ui/card";
import { Circle } from "lucide-react";
import { ReactElement, ReactNode } from "react";

const theme = {
  carousel: {
    defaultProps: {
      navigation: ({ setActiveIndex, activeIndex, length }) => {
        return <div className="flex absolute bottom-0 justify-center w-full items-center h-12 gap-2 bg-transparent">
          {Array.from({ length }).map((_, idx) =>
            <Circle key={idx} fill={idx === activeIndex ? "text-muted-primary" : "text-secondary"} size={6} className={idx === activeIndex ? "text-muted-primary" : "text-secondary"} onClick={() => setActiveIndex(idx)} />
          )}
        </div>
      }
    }
  } satisfies CarouselStylesType
}

export const Carousel = ({ list }: { list: Array<ReactNode> }) => {

  return <ThemeProvider value={theme}>
    <Card>
      <div className="relative">
        <CarouselBase autoplay className="max-w-lg roundex-xl" prevArrow={() => null} nextArrow={() => null} loop>
          {list && list.length > 0 && list.map((el, idx) => <div key={idx} className="pb-6 relative">
            {el}
          </div>)}
        </CarouselBase>
      </div>
    </Card>
  </ThemeProvider>
}