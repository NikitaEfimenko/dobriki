'use client'
import { ChallengeCard } from "@/entities/challenge/ui"
import { Carousel } from "@/shared/ui/carousel"
import { carouselConfig } from "../config"
import { useMemo } from "react"

export const ChallengesCarousel = () => {
  const list = useMemo(() => carouselConfig.map((config, idx) => <ChallengeCard key={idx} {...config}/>), [])
  return <>
    <Carousel list={list} />
  </>
}