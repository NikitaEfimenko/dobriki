'use client'
import 'leaflet/dist/leaflet.css'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/shared/ui/tabs"

import { Button } from '@/shared/ui/button'



import { useWalkActivity } from '@/features/motion/helpers/hooks'
import { Progress } from '@/shared/ui/progress'

import { useEffect, useState } from 'react'
import { TabsContent } from '@radix-ui/react-tabs'
import dynamic from 'next/dynamic'
import { BotIcon } from 'lucide-react'
import { DivIcon } from 'leaflet'

const MapContainer = dynamic(() => import("react-leaflet").then(c => ({ default: c.MapContainer })))
const TileLayer = dynamic(() => import("react-leaflet").then(c => ({ default: c.TileLayer })))
const Marker = dynamic(() => import("react-leaflet").then(c => ({ default: c.Marker })))
const Popup = dynamic(() => import("react-leaflet").then(c => ({ default: c.Popup })))
const Polyline = dynamic(() => import("react-leaflet").then(c => ({ default: c.Polyline })))


export const Routemap = () => {
  const [path, setPath] = useState<Array<[number, number]>>([])
  const [guard, setGuard] = useState(false)
  const { position } = useWalkActivity()
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
  }, [position])

  return <Sheet>
    <SheetTrigger asChild>

      <Button variant="outline">Open</Button>
    </SheetTrigger>
    <SheetContent side="bottom" className='md:max-w-2xl w-full'>

      <SheetHeader>
        <SheetTitle>Маршрут за сегодня</SheetTitle>
        <SheetDescription>
          Тут ты сегодня моложец иди соси конец
        </SheetDescription>
      </SheetHeader>

          {center && <MapContainer className="w-full h-96" zoom={14} scrollWheelZoom={true} center={center}>
            <TileLayer
              attribution={'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
              url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} />
            <Marker position={center}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
            <Polyline pathOptions={{ color: 'purple' }} positions={path} />
          </MapContainer>
          }
    </SheetContent>
  </Sheet>

}