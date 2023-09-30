// @ts-nocheck
'use client'
import { useActivity } from '@/features/motion/helpers/hooks'
import { useEffect, useState } from 'react'

import { ActivityTypes } from '@/features/motion/types'
import { Map, Placemark, Polyline, Circle } from '@pbe/react-yandex-maps'
import { Skeleton } from '@/shared/ui/skeleton'
import { Card } from "@/shared/ui/card";
import { CardHeader } from '@/features/cardHeader'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const YMaps = dynamic(() => import("@pbe/react-yandex-maps").then(module => module.YMaps), { ssr: false })

const skeleton = <Skeleton className='rounded-lg bg-accent-foreground'>
  <div className='w-full h-[240px]'></div>
</Skeleton>

export const Routemap = () => {
  const [path, setPath] = useState<Array<[number, number]>>([])
  const [guard, setGuard] = useState(false)
  const { position, actions } = useActivity({
    autotrack: true,
    activity: ActivityTypes.Walking
  })
  const [loading, setLoading] = useState(true)

  const [center, setCenter] = useState<[number, number] | null>(null)

  useEffect(() => {
    if (!guard && !!position?.coords.latitude && !!position?.coords.longitude) {
      setGuard(true)
      setCenter([position?.coords.latitude ?? 0, position?.coords.longitude ?? 0])
    }
    if (position?.coords.latitude && position?.coords.longitude) {
      setPath(p => [
        ...p,
        [position?.coords.latitude ?? 0, position?.coords.longitude ?? 0]
      ])
    }
  }, [position, guard])

  useEffect(() => {
    return () => {
      actions.unsubscribe()
    }
  }, [actions])

  return <Card className="flex flex-col gap-5">
    <CardHeader title="Маршруты на сегодня" />
    <Suspense fallback={skeleton}>
      {center ? <YMaps zoom={14} center={center}>
        <div>
          <Map defaultState={{ center: center, zoom: 16 }}>
            <Placemark geometry={center} />
            <Polyline
              geometry={path}
              options={{
                balloonCloseButton: false,
                strokeWidth: 4,
                className: "text-primary",
                strokeColor: "#8459FF29",
                strokeOpacity: 0.5,
              }}
            />
            <Circle
              geometry={[center, 100]}
              options={{
                draggable: true,
                className: "animate-ping",
                fillColor: "#8459FF29",
                strokeColor: "#8459FF29",
                strokeOpacity: 0.8,
                strokeWidth: 3,
              }}
            />
          </Map>
        </div>
      </YMaps> : skeleton}
    </Suspense>
  </Card>

}