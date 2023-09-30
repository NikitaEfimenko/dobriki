"use client";
import { ChallengeItem } from "@/entities/challenge/ui";
import { Carousel } from "@/shared/ui/carousel";
import { carouselConfig } from "../config";
import { useMemo } from "react";
import { Card } from "@/shared/ui/card";
import { CardHeader } from "@/features/cardHeader";

export const ChallengesCarousel = () => {
  const list = useMemo(
    () =>
      carouselConfig.map((config, idx) => (
        <ChallengeItem key={idx} {...config} />
      )),
    []
  );

  return (
    <Card className="flex flex-col gap-5 w-[inherit]">
      <CardHeader title="Челленджи" />
      <Carousel list={list} />
    </Card>
  );
};
