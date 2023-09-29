"use client";
import type { CarouselStylesType } from "@material-tailwind/react";
import {
  Carousel as CarouselBase,
  ThemeProvider,
} from "@material-tailwind/react";

import { Circle } from "lucide-react";
import { ReactNode } from "react";

const theme = {
  carousel: {
    defaultProps: {
      navigation: ({ setActiveIndex, activeIndex, length }) => {
        return (
          <div className="flex absolute bottom-0 justify-center w-full items-center gap-2 bg-transparent">
            {Array.from({ length }).map((_, idx) => (
              <Circle
                key={idx}
                fill={idx === activeIndex ? "text-accent" : "text-secondary"}
                size={6}
                className={
                  idx === activeIndex ? "text-accent" : "text-secondary"
                }
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>
        );
      },
    },
  } satisfies CarouselStylesType,
};

export const Carousel = ({ list }: { list: Array<ReactNode> }) => {
  return (
    <ThemeProvider value={theme}>
      <CarouselBase
        // autoplay
        prevArrow={() => null}
        nextArrow={() => null}
        loop
      >
        {list &&
          list.length > 0 &&
          list.map((el, idx) => (
            <div key={idx} className="pb-6 relative">
              {el}
            </div>
          ))}
      </CarouselBase>
    </ThemeProvider>
  );
};
