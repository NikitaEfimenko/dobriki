import { usePrevious } from '@/shared/hooks';
import { Geolocation } from '@capacitor/geolocation';
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect, useRef } from 'react';
import type { Position } from '@capacitor/geolocation';

import { PluginListenerHandle } from '@capacitor/core';
import { Motion } from '@capacitor/motion';
import type { AccelListenerEvent } from '@capacitor/motion';
import { calcPersonSpecific, calculateCalories, calculateHorizontalDistance, calculateSteps } from './utils';



export const useMotionActivity = () => {
  const [motion, setMotion] = useState<AccelListenerEvent>()
  const ref = useRef<PluginListenerHandle>();

  useEffect(() => {
    (async () => {
      const accelHandler: PluginListenerHandle = await Motion.addListener("accel", event => {
        console.log('Device motion event:', event);
        setMotion(event)
        ref.current = accelHandler
        // handleAccelerometerReading(acc.x, acc.y, acc.z, setStepCount)
      });
    })()
  }, [])
  return [
    motion,
    ref.current
  ]
}

export const useWalkActivity = () => {
  const [coordinates, setCoordinates] = useState<Position>()
  const previous = usePrevious(coordinates)
  
  const [distance, setDistance] = useState<number>()
  
  const getCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    return coordinates
  }

  useQuery({
    queryKey: ["position"],
    queryFn: getCurrentPosition,
    refetchInterval: 2000,
    onSuccess: (data) => {
      setCoordinates(data)
    }
  })

  const getActivity = (distance: number) => {
    const { stepLength, specificCalories } = calcPersonSpecific()

    const stepCount = calculateSteps(distance, stepLength)
    const calories = calculateCalories(stepCount, stepLength, specificCalories)
    
    return {
      stepCount,
      calories,
      distance
    } satisfies Activity
  }

  useEffect(() => {
    setDistance(prev => {
      if (!coordinates?.coords || !previous?.coords) {
        return prev
      }
      const prevCoord = previous?.coords
      const coord = coordinates?.coords
      const [lat1, lon1, alt1] = [prevCoord?.latitude, prevCoord?.longitude, prevCoord?.altitude]
      const [lat2, lon2, alt2] = [coord?.latitude, coord?.longitude, coord?.altitude]

      const distance = calculateHorizontalDistance(lat1, lon1, alt1 ?? 0, lat2, lon2, alt2 ?? 0)

      return (prev ?? 0) + distance
    })
  }, [coordinates, previous])

  return {
    position: coordinates,
    activities: getActivity(distance ?? 0)
  }
}

